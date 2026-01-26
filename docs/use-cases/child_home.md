# Screen: Child Home

## Scope
Child Home is the **main landing screen for a child user** after successful login.
It provides a quick overview of balances, daily earnings, and shortcuts to key child features.

---

## Actors
- **Primary actor:** Child
- **Secondary actor:** Parent (indirectly, through configuration and approvals)

---

## Preconditions
- Child is authenticated
- Child profile is active
- Spending Account exists
- At least one Savings / Deposit account may exist

---

## Entry Points
1. Successful child login (after invitation or returning login)
2. App relaunch with active child session
3. After Welcome (splash) screen for authenticated child

---

## Screen Structure

### 1. Header
- Greeting: **“Hi, {Child name}”**
- Child avatar
- Notification indicator (new requests, task updates, news)

---

### 2. Balance Summary Card

Displayed:
- **Bank balance** — total amount saved in deposits
- **Cash balance** — current Spending Account balance
- **Daily income** — total interest earned per day across all active deposits

Rules:
- Values are read-only
- Tapping the card opens **My Accounts** screen

---

### 3. Info Card (Contextual)

Example:
- Weather information (city-based)

Notes:
- Content can be extended later (tips, motivational messages, news teasers)

---

### 4. My Accounts (Shortcuts)

Displayed as cards or icons:

- **Savings / Deposits**
  - Total saved amount
  - Average interest rate (optional)

- **Spending (Cash)**
  - Current balance

Tapping any card opens the corresponding **Accounts** screen.

---

### 5. Quick Actions

Icons / shortcuts:
- **Wishlist**
- **Tasks**
- **Expenses** (future)
- **School** (future)
- **News** (fairytale news)
- **Tell a friend** (future / optional)

Rules:
- Disabled or hidden features may be shown as inactive placeholders

---

### 6. Bottom Navigation

Tabs:
- **Home** (current)
- **Accounts**
- **Tasks**
- **Wishlist**
- **Profile**

---

## Notifications & Indicators

- Badge on header icon indicates:
  - New approved or declined tasks
  - New messages or news

- Indicators are informational only; child cannot approve financial actions

---

## Business Rules

### 1. Read-only Financial Data
- Child cannot modify balances
- All money movements require parent approval

---

### 2. Daily Income Calculation
- Calculated as the **sum of daily interest** across all active deposits
- Updated automatically

---

### 3. Feature Availability
- Visible features depend on:
  - Child age
  - Parent settings
- Future features may be disabled but visible

---

## Use Cases

### UC-CHILD-HOME-01: View Balances
**Actor:** Child  
**Result:** Child sees current cash, savings, and daily income.

---

### UC-CHILD-HOME-02: Navigate to Accounts
**Actor:** Child  
**Result:** Child opens detailed view of savings or spending accounts.

---

### UC-CHILD-HOME-03: Open Tasks
**Actor:** Child  
**Result:** Child views assigned tasks and their statuses.

---

### UC-CHILD-HOME-04: Access Wishlist
**Actor:** Child  
**Result:** Child views and manages wishlist items.

---

### UC-CHILD-HOME-05: View News
**Actor:** Child  
**Result:** Child reads personalized fairytale-style news.

---

## Navigation
- Home is always accessible via Bottom Navigation
- Back navigation follows standard OS behavior

---

## Notes
- Child Home is **not shown during onboarding**
- All financial actions initiated by child create **requests for parent approval**
- Screen is optimized for simplicity and motivation

