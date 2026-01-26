# Backend Task Breakdown (Epics & Stories)

Документ предназначен для старта разработки backend Unicorn Bank (MVP). Структура выстроена от инфраструктуры к бизнес-функциям. Каждая epic может быть превращена в sprint / milestone.

---

## EPIC 1. Foundation & Infrastructure

### 1.1 Project Setup
- As a developer, I want a base backend project, so that development can start consistently
- Tasks:
  - Repository initialization
  - Environment separation (dev / prod)
  - Config management
  - Logging & error format standard

### 1.2 Authentication & Authorization
- As a user, I want secure authentication, so that my data is protected
- Tasks:
  - Parent authentication
  - Child authentication (linked account)
  - Role-based access (parent / child)
  - Invitation code flow (reuse existing model)

---

## EPIC 2. Core Domain Models

### 2.1 User & Family
- As a parent, I want to manage multiple children
- Tasks:
  - User entity (parent / child)
  - Family / household linking
  - Child creation & invitation acceptance

### 2.2 Accounts
- As a system, I want to track balances reliably
- Tasks:
  - Spending account model
  - Deposit account model
  - Balance calculation via transactions only

### 2.3 Transactions
- As a system, I want immutable financial records
- Tasks:
  - Transaction entity
  - Credit / debit rules
  - Concurrency-safe balance updates

---

## EPIC 3. Tasks & Earnings

### 3.1 Task Management (Parent)
- As a parent, I want to create paid tasks for children
- Tasks:
  - Create task (one-time / recurring)
  - Edit / cancel future tasks

### 3.2 Task Lifecycle (Child)
- As a child, I want to accept or decline tasks
- Tasks:
  - NEW → ACCEPTED
  - NEW → DECLINED_BY_CHILD
  - Deadline handling

### 3.3 Task Approval & Rewards
- As a parent, I want to approve completed tasks
- Tasks:
  - DONE → APPROVED
  - DONE → REJECTED_BY_PARENT
  - Reward transaction creation

---

## EPIC 4. Requests System

### 4.1 Generic Requests
- As a child, I want to ask for things
- Tasks:
  - Request entity (generic)
  - Status lifecycle (NEW / APPROVED / REJECTED)

### 4.2 Request Types
- Tasks:
  - Cash withdrawal request
  - Purchase request
  - Deposit opening request

### 4.3 Wishlist Integration
- As a child, I want to create requests from wishlist items
- Tasks:
  - Prefill amount & description
  - Wishlist-independent request creation

---

## EPIC 5. Deposits

### 5.1 Deposit Creation
- As a parent, I want to open deposits for children
- Tasks:
  - Deposit without spending account linkage
  - Parent-entered or request-prefilled amount

### 5.2 Interest Calculation
- As a child, I want to see my future earnings
- Tasks:
  - Interest calculation at maturity
  - Daily recalculation for "close today" view

### 5.3 Deposit Closure
- As a system, I want consistent closure behavior
- Tasks:
  - Idempotent close operation
  - Payout transaction creation

---

## EPIC 6. Wishlist

### 6.1 Wishlist Management
- As a child, I want to manage my goals
- Tasks:
  - CRUD wishlist items
  - Optional price

### 6.2 Wishlist → Requests
- As a child, I want to buy wishlist items
- Tasks:
  - Convert wishlist item to request
  - Partial / full fulfillment handling

---

## EPIC 7. Validation & Business Rules

### 7.1 Status Transitions
- As a system, I want to prevent invalid state changes
- Tasks:
  - Centralized state machine
  - Transition validation errors

### 7.2 Error Handling
- Tasks:
  - Unified error codes
  - Business vs technical errors

---

## EPIC 8. Scheduler & Automation

### 8.1 Recurring Tasks
- As a system, I want to generate tasks automatically
- Tasks:
  - Scheduler for recurring tasks
  - Deadline auto-expiry

### 8.2 Deposit Accrual
- As a system, I want daily accrual updates
- Tasks:
  - Daily interest recalculation job

---

## EPIC 9. API Layer

### 9.1 REST API
- Tasks:
  - CRUD endpoints for all entities
  - Role-based access checks

### 9.2 API Documentation
- Tasks:
  - OpenAPI schema
  - Example payloads

---

## EPIC 10. Testing & Readiness

### 10.1 Tests
- Tasks:
  - Unit tests for domain logic
  - Integration tests for money flows

### 10.2 Production Readiness
- Tasks:
  - Monitoring hooks
  - Audit logs for financial actions

---

## Suggested Development Order
1. Epics 1–2 (Foundation + Core Models)
2. Epic 3 (Tasks)
3. Epic 4 (Requests)
4. Epic 5 (Deposits)
5. Epic 6 (Wishlist)
6. Epics 7–10 (Hardening & Scale)

