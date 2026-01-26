# Kids Accounts

## Scope
This document describes the **Kids Accounts** screen — a parent-only screen for managing a child’s financial accounts: **Spending Account** and **Savings (Deposits)**.

The screen supports **viewing balances, topping up, withdrawing, opening and closing deposits**.

---

## Actors
- **Parent** — full access

---

## Preconditions
- Parent is authenticated (`AUTH_PARENT`)
- Active child context is selected

---

## Entry Points
- Bottom Navigation → **Accounts**
- Kids Profile → Accounts section
- Parent Profile → Burger menu → Kids Accounts
- Indicator of new requests on **My Kids / Kid Profile** screen (new deposit)

---

## Screen Structure

### 1. Child Switcher (Top Tabs)
Horizontal tabs with children names.

**Behavior:**
- Tap → switch active child
- All data below reloads for selected child

---

## 2. Spending Account

### Displayed
- Current balance

### Actions
- **Top up (+)**
- **Withdraw (−)**

---

### UC-PARENT-ACC-01: Top Up Spending Account

**Input:**
- Amount
- Type:
  - Birthday
  - Bonus
  - Pocket money
- Comment (optional)

**Result:**
- Balance increases
- Transaction recorded

---

### UC-PARENT-ACC-02: Withdraw from Spending Account

**Input:**
- Amount
- Type:
  - Cash
  - Purchase
- Comment (optional)

**Result:**
- Balance decreases
- Transaction recorded

---

## 3. Savings Accounts (Deposits)

List of deposit accounts for the active child.

### Displayed per deposit
- Account name
- Deposit amount
- Interest rate
- Start date
- End date
- Accrued interest (current)
- Accrued interest at the end
- Total (current)

---

### UC-PARENT-ACC-03: Open New Deposit

**Input:**
- Deposit amount
- Interest rate
- Start date
- End date

**Result:**
- New deposit created
- Status = ACTIVE

---

### UC-PARENT-ACC-04: Close Deposit

**Behavior:**
- Confirmation modal
- Total amount (principal + interest) shown

**Result:**
- Deposit status → CLOSED
- Total transferred to Spending Account

---



### UC-PARENT-ACC-05: Delete Deposit

**Purpose:**
- Used only in case of **erroneous data entry**

**Conditions:**
- Deposit created by mistake
- No real financial intent

**Effects:**
- Deposit removed
- No funds transferred

---

## Bottom Navigation

Available tabs:
- Home (My Kids)
- Kids Profile
- Accounts (current)
- Requests
- Tasks

Active child context persists.

---

## Validation Rules
- Amounts > 0
- Withdraw ≤ current balance
- Deposit end date > start date

---

## Empty & Edge Cases

- No deposits → show "No savings accounts" state
- Balance = 0 → withdraw disabled
- Single child → no child switcher

---

## Out of Scope
- Child managing accounts
- Partial deposit withdrawal
- Automatic interest payouts
- Reopening closed deposits

