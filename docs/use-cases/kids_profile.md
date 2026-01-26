# Kids Profile

## Scope
This document describes the **Kids Profile** screen — a parent-only screen used to **view and manage a child’s profile, accounts, and permissions**.

This screen is **not accessible to the child**.

---

## Actors
- **Parent** — full access

---

## Preconditions
- Parent is authenticated (`AUTH_PARENT`)
- At least one child exists
- Active child context is selected

---

## Entry Points
- Bottom Navigation → **Kids Profile**
- Parent Home (My Kids) → Kid Profile action

---

## Screen Structure

### 1. Child Switcher (Top Tabs)
Horizontal tabs with children names + **Add Child (+)**.

**Behavior:**
- Tap on tab → switch active child profile
- Active child is visually highlighted

---

### 2. Child Header

**Displayed fields:**
- Avatar
- Name
- Birth date
- City
- Locale / language

**Actions:**
- Edit profile (pencil icon)

---

## 3. Quick Actions / Requests
Icon-based shortcuts for common parent actions:

- Cash withdrawal
- New deposit
- Spending (purchase money)
- New task
- Task approval

**Behavior:**
- Tap → navigate directly to the corresponding action flow

---

## 4. Accounts Overview

### 4.1 Spending Account

**Displayed:**
- Current balance

---

### 4.2 Saving / Deposits

**Displayed:**
- Total saved amount
- Total daily interest income (sum of interest from all active deposits)

---

## 5. Notes / Description

Text prompt for **fairy-tale / story-based news** generation for the child.

Used to personalize:
- educational stories
- financial news in a child-friendly format

---

## 6. Management Actions

### Change Password / PIN
- Resets child access
- Requires child re-login via new invite

---

### Delete Profile

**Effects:**
- Child entity removed
- ParentChild relation removed
- All child data archived or deleted (business decision)
- Active sessions revoked

---

## Bottom Navigation

Available tabs:
- Home (My Kids)
- Kids Profile (current)
- Accounts
- Requests
- Tasks

Active child context persists across tabs.

---

## Use Cases

- UC-PARENT-KID-01: View child profile
- UC-PARENT-KID-02: Edit child profile
- UC-PARENT-KID-03: Switch between children
- UC-PARENT-KID-04: Manage child accounts
- UC-PARENT-KID-05: Reset child access
- UC-PARENT-KID-06: Delete child profile

---

## Validation Rules
- Name is required
- Birth date optional
- City and locale optional
- Only parent can modify data

---

## Empty & Edge Cases

- Single child → no visual switching
- No deposits → show empty savings state
- No spending activity → balance = 0

---

## Out of Scope
- Child editing own profile
- Multi-parent editing conflicts

