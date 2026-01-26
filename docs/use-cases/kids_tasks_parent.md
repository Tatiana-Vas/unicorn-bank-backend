# Screen: Kid’s Tasks (Parent)

## Scope
This screen allows a parent to **create, manage, approve, and decline paid tasks** for a child.
Tasks help children earn money and build habits through one-time or repeating activities.

---

## Actors
- **Primary actor:** Parent
- **Secondary actor:** Child (task executor)

---

## Preconditions
- Parent is authenticated
- At least one child profile exists
- Child has an active Spending Account
- Parent has permission to manage child’s tasks

---

## Entry Points
1. Bottom navigation → **Tasks**
2. Burger menu → **Tasks**  
   (opens Tasks for the **first child** in the list if no active child is defined)
3. **Indicator of new requests** on **My Kids / Kid Profile** screen  
   (new task request or task awaiting approval)

---

## Screen Structure

### 1. Header
- Screen title: **Kid’s tasks**
- Child selector (tabs or carousel)
- Status tabs:
  - **Active**
  - **Approvals**
  - **Completed**
  - **Declined**

---

### 2. Tasks List (by Status)

Each task row contains:
- Task title
- Schedule (e.g. *every other day*, *anytime*)
- Reward amount
- Relevant date or period
- Type indicator (on-time or repeated)
- Contextual action icons

---

### 3. Empty State
If there are no tasks in the selected tab:
- Message: **“No tasks”**
- CTA (for Active / Completed): **Create a new task**

---

### 4. Primary Action
- Button: **Create a new task**

---

## Task Types

### 1. One-time Task
- Executed once
- Date can be:
  - Specific date, or
  - **Anytime**
- Reward is paid only after parent approval

### 2. Repeating Task
- Executed multiple times according to schedule

Supported frequencies:
- Daily
- Every other day
- Weekly
- Monthly
- Specific days of week

Execution period:
- Start date
- Optional end date

---

## Create Task (Modal / Screen)

### Fields
- Task name
- Reward amount
- Task type:
  - One-time
  - Repeat
- Date (for one-time) **or Anytime**
- Schedule (for repeat)
- Start / end date (for repeat)
- Comments (optional, visible to child)

### Actions
- **Create task**
- Cancel

---

## Task Lifecycle & Statuses

### Statuses
- **Active** – task is available for execution
- **Approvals** – task completed by child, waiting for parent decision
- **Completed** – task approved and paid
- **Declined** – task rejected by parent

---

## Actions (Contextual)

- **Edit**  
  Available **only for new / active tasks** (not yet completed or approved)

- **Approve / Decline**  
  Available **only for tasks awaiting approval**

- **Delete**  
  Available for **all tasks**  
  - Already paid rewards **are not reverted**

- **Read-only mode**  
  Applied to all tasks **except new (active) tasks**

---

## Approvals Flow

### Task Approval
- Parent reviews completed task
- Confirmation modal:
  > “Anya will receive din 100 in her spending account”

- On approval:
  - Reward is credited to child’s **Spending Account**
  - Task execution is marked as completed

---

### Task Decline
- Parent can decline with optional comment
- Confirmation message:
  > “Anya will not receive reward”

- Task execution is marked as declined

---

## Task Details Screen

### Displayed
- Task title
- Current status (active / waiting approval / completed / declined)
- Schedule
- Reward amount
- Comments

### History
- **Displayed only for repeating tasks**
- Shows list of executions with:
  - Date
  - Status (approved / declined)

---

## Business Rules

### 1. Reward Payment
- Reward is always credited to **Spending Account**
- Payment occurs **only after parent approval**

---

### 2. Repeating Tasks
- Each execution creates a separate approval item
- Parent approves or declines each execution independently

---

### 3. Deleting Tasks
- Deleting a task does not affect already paid rewards
- Historical executions remain visible (for repeating tasks)

---

## Use Cases

### UC-PARENT-TASK-01: View Tasks
**Actor:** Parent  
**Result:** Tasks displayed by selected status and child.

---

### UC-PARENT-TASK-02: Create Task
**Actor:** Parent  
**Result:** New task becomes active.

---

### UC-PARENT-TASK-03: Approve Task
**Actor:** Parent  
**Result:** Reward credited, execution marked as completed.

---

### UC-PARENT-TASK-04: Decline Task
**Actor:** Parent  
**Result:** Execution marked as declined, no reward paid.

---

### UC-PARENT-TASK-05: View Task History
**Actor:** Parent  
**Result:** Execution history displayed for repeating tasks.

---

## Navigation
- Back → previous screen
- Bottom navigation remains active

---

## Notes
- Tasks are **not part of Requests screen**
- Task approvals are **financially isolated** from cash / purchase requests
- All rewards are paid only to the **Spending Account**

