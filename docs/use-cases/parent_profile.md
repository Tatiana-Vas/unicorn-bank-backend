# Parent Profile

## Scope
This document describes the **Parent Profile** screen — a parent-only screen for managing **parent account settings and navigation to key management sections**.

This screen acts as:
- account settings page
- entry point to Kids-related management via burger menu

---

## Actors
- **Parent** — full access

---

## Preconditions
- Parent is authenticated (`AUTH_PARENT`)

---

## Entry Points
- Parent Home (My Kids) → tap on parent avatar

---

## Screen Structure

### 1. Parent Header

**Displayed:**
- Parent avatar
- Parent name

**Actions:**
- Edit name / avatar

---

## 2. Burger Menu (Quick Navigation)

Burger menu provides shortcuts to core parent flows.

**Menu items:**
- **Kids** → Parent Home (My Kids)
- **Accounts** → Kids Accounts
- **Requests** → Requests list
- **Tasks** → Tasks management

**Behavior:**
- Selecting item navigates directly to the corresponding screen
- Active child context is **not** assumed. If no active child is defined, navigation opens data for the **first child** in the list.

---

## 3. Security Actions

### Change Password
- Changes parent login password
- Requires re-authentication on next login

---

### Log Out

**Effects:**
- Parent session terminated
- Redirect to `UNAUTHENTICATED` state

---

## Bottom Navigation

Available tabs:
- Home (My Kids)
- Kids Profile
- Accounts
- Requests
- Tasks



---

## Use Cases

- UC-PARENT-PROFILE-01: View parent profile
- UC-PARENT-PROFILE-02: Edit parent profile
- UC-PARENT-PROFILE-03: Navigate via burger menu
- UC-PARENT-PROFILE-04: Change password
- UC-PARENT-PROFILE-05: Logout

---

## Validation Rules
- Parent name required
- Password change requires current password

---

## Edge Cases

- Session expired → redirect to login

---

## Out of Scope
- Child access to parent profile
- Advanced security settings (2FA)

