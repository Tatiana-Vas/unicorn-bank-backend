# Unicorn Bank – Technical Specification (MVP)

## 1. Project Overview

Unicorn Bank is a **mobile-only financial education application for children and their parents**. The product simulates a virtual banking environment where children learn money management through tasks, rewards, savings, and goals, while parents retain full control and approval authority.

The application focuses on:

- Teaching children responsibility and financial basics
- Providing parents with transparent control tools
- Gamified, safe, and age-independent experience

**Platform:** Mobile only

- Android (MVP)
- iOS (later)

**Money type:** Virtual currency only (no real money, no payment integrations)

---

## 2. Goals and Success Criteria

### 2.1. Product Goals

- Enable parents to create paid tasks for children
- Enable children to earn virtual money by completing tasks
- Teach saving through virtual deposits and wish-based goals
- Ensure all money movements are transparent and parent-approved

### 2.2. MVP Success Criteria

- Parent can manage at least one child profile
- Full task lifecycle works end-to-end
- Virtual balances update correctly
- No critical data inconsistencies

---

## 3. User Roles and Permissions

### 3.1. Parent

- Registers via email and password
- Creates and manages child profiles
- Creates, approves, or rejects tasks
- Controls all money movements
- Views all child accounts and history

### 3.2. Child

- Joins via invitation code
- Authenticates via PIN
- Views tasks and balances
- Submits task completion or requests new tasks
- Manages wishlist and savings goals

---

## 4. In Scope / Out of Scope

### 4.1. In Scope (MVP)

- Parent and child profiles
- Task management
- Virtual spending and saving accounts
- Deposits with interest
- Wishlist
- Push notifications

### 4.2. Out of Scope (Future)

- School-related features
- Expense categorization
- Real payments
- Admin panel

---

## 5. Authentication & Authorization

### 5.1. Parent Authentication

- Email + password
- Session-based authentication token

### 5.2. Child Authentication

- Parent generates invitation code
- Child joins using invitation code
- Child sets a personal PIN

---

## 6. Core Functional Requirements

### 6.1. Profiles

#### Parent Profile

- Email
- Name
- Avatar
- Language
- List of connected children

#### Child Profile

- Name
- Avatar
- PIN (hashed)
- Linked parent
- Birthday date
- Language
- Localization

---

### 6.2. Accounts

Each child has the following virtual accounts:

#### Spending Account

- Used for available funds
- Receives rewards from approved tasks

#### Saving (Deposit) Account

- Has amount and interest rate
- Has maturity date

---

### 6.3. Tasks

#### Task Types

- One-time
- Recurring

#### Task Lifecycle

1. Created by parent&#x20;
2. Assigned to child
3. Child marks as **Done** or **I can’t**
4. Parent approves or rejects
5. On approval, reward is credited
6. On expiration, task is auto-declined

Only tasks **sent for parent approval** appear in approval lists.

---

### 6.4. Wishlist

- Child creates wishlist items
- A child can create a cash request for a wish or purchase
- A child can mark the wish as completed

---

### 6.5. Deposits

- Parent creates a deposit for a child
- Deposit parameters:
  - Amount
  - Interest rate
  - Duration
- Interest is paid upon maturity or when the deposit is closed

---

## 7. Push Notifications (MVP)

Push notifications are used for:

- New task requests from child
- Task approval or rejection by parent
- Deposit maturity notifications

---

## 8. Localization

- Multi-language support (UI text)
- Locale-aware content for:
  - Language
  - Weather (future)
  - News (future)

---

## 9. Data Model (Detailed – Prisma-aligned)

This section strictly reflects the **actual Prisma / PostgreSQL schema** used in the project. No conceptual or abstract entities are introduced beyond what exists in the database.

---

### 9.1. Enums

#### UserRole

- PARENT
- CHILD

#### TransactionSource

- TASK\_REWARD
- POCKET\_MONEY
- INTEREST
- MANUAL\_TOPUP
- GIFT
- BONUS
- CASH
- PURCHASE

#### TaskScheduleType

- ONE\_TIME
- DAILY
- EVERY\_N\_DAYS
- WEEKLY
- MONTHLY

#### TaskCompletionStatus

- NEW
- COMPLETED
- DECLINED\_BY\_CHILD
- APPROVED
- REJECTED
- EXPIRED

#### RequestType

- NEW\_TASK
- TASK\_APPROVAL
- WISHLIST\_PURCHASE
- MONEY\_WITHDRAW
- NEW\_DEPOSIT

#### RequestStatus

- PENDING
- APPROVED
- REJECTED

#### DepositStatus

- ACTIVE
- CLOSED

---

### 9.2. Parent

**Parent**

- id (String, PK)
- email (String, unique)
- password (String)
- name (String)
- avatarUrl (String, nullable)
- createdAt (DateTime)
- updatedAt (DateTime)

Relations:

- Parent ↔ Child via ParentChild (many-to-many)

---

### 9.3. Child

**Child**

- id (String, PK)
- name (String)
- password (String)
- birthDate (DateTime, nullable)
- city (String, nullable)
- locale (String, nullable)
- newsPrompt (String, nullable)
- createdAt (DateTime)
- updatedAt (DateTime)

Relations:

- Child ↔ Parent via ParentChild
- Child → SpendingAccount (1:1)
- Child → Deposit (1\:N)
- Child → Task (1\:N)
- Child → TaskInstance (1\:N)
- Child → Request (1\:N)
- Child → WishlistItem (1\:N)

---

### 9.4. Invitation Code

**InvitationCode**

- code (String, PK)
- parentId (String)
- createdAt (DateTime)
- expiresAt (DateTime)
- usedAt (DateTime, nullable)

Purpose:

- Used to onboard a child without credentials
- Child account is activated after PIN/password setup

---

### 9.5. ParentChild (Relation Table)

**ParentChild**

- parentId (String, PK, FK → Parent.id)
- childId (String, PK, FK → Child.id)
- createdAt (DateTime)

Purpose:

- Supports multiple parents per child (future-proof)

---

### 9.5. SpendingAccount

**SpendingAccount**

- id (String, PK)
- balance (Decimal, derived)
- childId (String, unique, FK → Child.id)
- createdAt (DateTime)

Relations:

- SpendingAccount → Transaction (1\:N)

Rules:

- Exactly one spending account per child
- Balance is derived from transactions

---

### 9.6. Deposit

**Deposit**

- id (String, PK)
- amount (Decimal)
- interestRate (Float)
- startsAt (DateTime)
- endsAt (DateTime)
- status (ACTIVE | CLOSED)
- childId (String, FK → Child.id)
- createdAt (DateTime)

Relations:

- Deposit → Transaction (1\:N)

Rules:

- Interest is recorded as a Transaction with source = INTEREST

---

### 9.7. Transaction

**Transaction**

- id (String, PK)
- amount (Decimal)
- source (TransactionSource)
- comment (String, nullable)
- spendingAccountId (String, nullable)
- depositId (String, nullable)
- createdAt (DateTime)

Rules:

- Transaction is linked either to SpendingAccount or Deposit
- No balance changes without transaction

---

### 9.8. Task

**Task**

- id (String, PK)
- title (String)
- description (String, nullable)
- reward (Decimal)
- scheduleType (TaskScheduleType)
- intervalDays (Int, nullable)
- weekDays (Int[])
- dayOfMonth (Int, nullable)
- startsAt (DateTime)
- endsAt (DateTime, nullable)
- childId (String, FK → Child.id)
- createdAt (DateTime)

Relations:

- Task → TaskInstance (1\:N)

---

### 9.9. TaskInstance

**TaskInstance**

- id (String, PK)
- date (DateTime)
- status (TaskCompletionStatus)
- taskId (String, FK → Task.id)
- childId (String, FK → Child.id)
- createdAt (DateTime)

Rules:

- Represents a concrete execution of a task for a specific date
- Only instances with status = COMPLETED generate approval requests

---

### 9.10. Request

**Request**

- id (String, PK)
- type (RequestType)
- status (RequestStatus)
- childId (String, FK → Child.id)
- payload (Json)
- createdAt (DateTime)
- resolvedAt (DateTime, nullable)

Rules:

- Unified approval mechanism for multiple domains

---

### 9.11. Notification

**Notification**

- id (String, PK)
- userRole (UserRole)
- userId (String)
- title (String)
- message (String)
- isRead (Boolean)
- createdAt (DateTime)

---

### 9.12. WishlistItem

**WishlistItem**

- id (String, PK)
- title (String)
- price (Decimal)
- imageUrl (String, nullable)
- childId (String, FK → Child.id)
- createdAt (DateTime)

###

---

## 9.13. TaskInstance Lifecycle & Scheduler Logic

### Entities

- **Task** — task definition created by parent (one-time or recurring)
- **TaskInstance** — concrete execution of a Task for a specific date

---

### TaskInstance Creation Rules

1. **Initial creation**

   - When a parent creates a Task, the system immediately creates TaskInstances **for the next 14 days**.

2. **Scheduled creation (cron job)**

   - A daily scheduler runs once per day.
   - It ensures that for each active Task there are always TaskInstances created **14 days ahead**.
   - Missing TaskInstances are created automatically.

---

### TaskInstance Statuses

```text
NEW
COMPLETED            (child pressed Done)
DECLINED_BY_CHILD    (child pressed “I can’t”)
APPROVED             (parent approved)
REJECTED             (parent rejected)
EXPIRED              (system, date passed)
```

---

### Status Semantics

| Status              | Actor  | Meaning                                     | Final | Reward |
| ------------------- | ------ | ------------------------------------------- | ----- | ------ |
| NEW                 | system | TaskInstance created and waiting for action | ❌     | ❌      |
| COMPLETED           | child  | Child marked task as done                   | ❌     | ❌      |
| APPROVED            | parent | Parent approved completion                  | ✅     | ✅      |
| REJECTED            | parent | Parent rejected completion                  | ✅     | ❌      |
| DECLINED\_BY\_CHILD | child  | Child explicitly declined the task          | ✅     | ❌      |
| EXPIRED             | system | Due date passed without completion          | ✅     | ❌      |

---

### Allowed Status Transitions

```text
NEW
 ├─→ COMPLETED (child taps "Done")
 ├─→ DECLINED_BY_CHILD (child taps "I can’t")
 └─→ EXPIRED (system, due date passed)

COMPLETED
 ├─→ APPROVED (parent approves)
 └─→ REJECTED (parent rejects)
```

❌ No other transitions are allowed.

---

### Request Creation Rules

| Transition                | Request Created |
| ------------------------- | --------------- |
| NEW → COMPLETED           | TASK\_APPROVAL  |
| NEW → DECLINED\_BY\_CHILD | ❌               |
| NEW → EXPIRED             | ❌               |
| COMPLETED → APPROVED      | ❌               |
| COMPLETED → REJECTED      | ❌               |

---

### Expiration Logic

- Each TaskInstance has a due date.
- If the due date passes and the status is still `NEW`, the system automatically sets status to `EXPIRED`.
- No reward is granted.
- No transaction is created.

---

### Reward & Transaction Rules

- A Transaction is created **only** when a TaskInstance transitions to `APPROVED`.
- No Transaction is created for `REJECTED`, `DECLINED_BY_CHILD`, or `EXPIRED` states.

---

## 10. API Specification (Command-Oriented)

This section defines the **minimal set of backend commands (API endpoints)** required to implement the MVP logic. The API is designed around **explicit state transitions** and **side effects**.

---

### 10.1. Create Task

**POST /tasks**

Role: **Parent**

Creates a new Task and initializes its schedule.

Request body:
- title (string)
- description (string, optional)
- reward (decimal)
- scheduleType (TaskScheduleType)
- intervalDays (int, optional)
- weekDays (int[], optional)
- dayOfMonth (int, optional)
- startsAt (datetime)
- endsAt (datetime, optional)
- childId (string)

Behavior:
- Validates schedule parameters
- Creates Task
- Creates initial TaskInstances for the next 14 days

Side effects:
- None

---

### 10.2. Complete Task Instance

**POST /task-instances/{id}/complete**

Role: **Child**

Marks a task instance as completed.

Preconditions:
- TaskInstance.status = NEW

State transition:
- NEW → COMPLETED

Side effects:
- Create Request(type = TASK_APPROVAL, status = PENDING)

---

### 10.3. Decline Task Instance

**POST /task-instances/{id}/decline**

Role: **Child**

State transition:
- NEW → DECLINED_BY_CHILD

---

### 10.4. Approve Task Completion

**POST /requests/{id}/approve**

Role: **Parent**

State transitions:
- Request: PENDING → APPROVED
- TaskInstance: COMPLETED → APPROVED

Side effects:
- Create Transaction (TASK_REWARD)
- Credit SpendingAccount

---

### 10.5. Reject Task Completion

**POST /requests/{id}/reject**

Role: **Parent**

State transitions:
- Request: PENDING → REJECTED
- TaskInstance: COMPLETED → REJECTED

---

### 10.6. Scheduler (System)

- Create TaskInstances 14 days ahead
- Expire TaskInstances (NEW → EXPIRED)

---

## 11. Money Flow & Transaction Logic

This section defines **how virtual money moves through the system**, which commands are allowed, and which invariants must always hold.

---

### 11.1. Core Principles

- All balances are **derived from Transactions**
- No balance is ever updated directly
- Every money movement must have:
  - source
  - amount
  - timestamp
  - clear initiator

---

### 11.2. Spending Account Balance Calculation

SpendingAccount.balance is calculated as:

```
SUM(transactions.amount WHERE spendingAccountId = X)
```

Rules:
- Positive amount = credit
- Negative amount = debit

---

### 11.3. Task Reward Flow

Trigger:
- TaskInstance transitions to APPROVED

Flow:
1. Create Transaction:
   - source = TASK_REWARD
   - amount = Task.reward
   - spendingAccountId = child.spendingAccount.id
2. SpendingAccount balance increases

Invariants:
- One TaskInstance → max one TASK_REWARD transaction
- Idempotency must be enforced

---

### 11.4. Manual Top-Up (Parent)

**POST /children/{childId}/topup**

Role: **Parent**

Creates virtual money manually.

Request body:
- amount (decimal)
- comment (optional)

Side effects:
- Create Transaction(source = MANUAL_TOPUP)

---

### 11.5. Deposit Creation

**POST /children/{childId}/deposits**

Role: **Parent**

Deposit creation is **not directly linked** to the SpendingAccount.

Conceptual model:
- The child brings money "offline" to the parent
- The parent decides whether to open a deposit
- Virtual money for the deposit is created implicitly

Flow:
1. Deposit can be created:
   - Directly by parent
   - From a child request (Request.type = NEW_DEPOSIT)
2. Deposit amount:
   - Can be entered manually by parent
   - Can be prefilled from request payload
   - Parent may корректировать the amount
3. Create Deposit entity

Rules:
- No automatic withdrawal from SpendingAccount
- Deposit exists independently from spending balance

---



### 11.6. Deposit Interest Accrual

Interest is **defined upfront** for the full deposit duration, but is also **recalculated daily** for transparency.

Rules:
- On deposit creation, total interest at `endsAt` is calculated
- Daily, the system calculates:
  - Earned interest as of today
  - Projected interest if closed today
  - Daily earning value (+X per day)

Purpose:
- Child can see:
  - How much is already earned
  - How much will be earned if waiting until maturity

Trigger:
- System calculation (read-only, no transactions)

Transaction creation:
- Interest Transaction is created only when:
  - Deposit is closed OR
  - Deposit reaches `endsAt`

---



### 11.7. Deposit Closure

**POST /deposits/{id}/close**

Role: **Parent**

Flow:
1. Create Transaction:
   - source = CASH
   - amount = deposit.amount
   - spendingAccountId
2. Update Deposit.status → CLOSED

---

### 11.8. Purchase & Cash Requests

Purchases and cash withdrawals are handled via **Request entities**.

Creation:
- A child may create a request:
  - Directly from Requests screen
  - From a Wishlist item

Prefill behavior (from Wishlist):
- Amount = Wishlist.price
- Comment / title = Wishlist.title

Rules:
- Wishlist is a convenience UI feature
- Financial logic always works through Requests

Approval flow:
1. Child creates Request:
   - type = WISHLIST_PURCHASE or MONEY_WITHDRAW
2. Parent reviews request
3. On approval:
   - Create Transaction:
     - source = PURCHASE or CASH
     - amount = negative value
     - spendingAccountId

Invariant:
- SpendingAccount balance must not go negative

---



### 11.9. System Invariants (Must Always Hold)

- No negative SpendingAccount balance
- No duplicate reward transactions
- No money movement without a Transaction
- All Transactions are immutable

---

## 12. Error Handling & Edge Cases

This section defines **non-happy-path scenarios** and mandatory system behavior. These rules are critical to ensure data consistency and predictable UX.

---

### 12.1. Task & TaskInstance Edge Cases

**Completing an expired task**
- Scenario: Child tries to complete a TaskInstance after its due date
- Behavior:
  - Operation is rejected
  - Error: `TASK_INSTANCE_EXPIRED`

**Declining after completion**
- Scenario: Child tries to decline a TaskInstance with status = COMPLETED
- Behavior:
  - Operation is rejected
  - Error: `INVALID_STATUS_TRANSITION`

**Approving an expired task**
- Scenario: Parent tries to approve a TaskInstance already marked as EXPIRED
- Behavior:
  - Operation is rejected
  - Error: `TASK_ALREADY_EXPIRED`

**Double approval**
- Scenario: Parent retries approval request
- Behavior:
  - Operation is idempotent
  - No duplicate Transaction is created

---

### 12.2. Request Handling Edge Cases

**Resolving an already resolved request**
- Scenario: Parent approves/rejects a Request with status ≠ PENDING
- Behavior:
  - Operation is rejected
  - Error: `REQUEST_ALREADY_RESOLVED`

**Mismatched request type**
- Scenario: Using approve endpoint on unsupported RequestType
- Behavior:
  - Operation is rejected
  - Error: `INVALID_REQUEST_TYPE`

---

### 12.3. Money & Transaction Edge Cases

**Insufficient balance**
- Scenario: Parent approves a purchase or cash request with insufficient balance
- Behavior:
  - Operation is rejected
  - Error: `INSUFFICIENT_FUNDS`

**Negative transaction amount**
- Rule:
  - Debit transactions must always be negative
  - Credit transactions must always be positive

**Manual transaction mutation**
- Rule:
  - Transactions are immutable
  - Any update or delete operation is forbidden

---

### 12.4. Deposit Edge Cases

**Closing an already closed deposit**
- Behavior:
  - Operation is idempotent
  - No additional transactions created

**Interest recalculation drift**
- Rule:
  - Daily interest projections must be derived from the same formula as final interest
  - No rounding logic divergence is allowed

---

### 12.5. Concurrency & Consistency

**Concurrent approvals**
- Scenario: Two approval attempts at the same time
- Behavior:
  - Only one succeeds
  - Second receives `CONFLICT`

**Scheduler vs user actions**
- Scenario: Scheduler expires a TaskInstance while child submits completion
- Behavior:
  - First committed operation wins
  - Second operation fails with conflict error

---

