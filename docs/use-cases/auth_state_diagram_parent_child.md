# Auth State Diagram

## Scope
This document describes **authentication and authorization states** of the Unicorn Bank app for **Parent** and **Child** roles. It focuses on **application states and transitions**, not UI layout.

---

## Actors
- **Parent** — adult user, full access
- **Child** — limited user, bound to device

---

## Global App States

### UNAUTHENTICATED
User has no valid session.

**Entry points:**
- App first launch
- Logout
- Session expired
- App reinstalled

**Possible transitions:**
- Parent Login → `AUTH_PARENT`
- Parent Registration → `ONBOARDING_PARENT`
- Child Invite Code → `CHILD_INVITE_VERIFY`

---

## Parent Auth States

### ONBOARDING_PARENT
Shown **only after parent registration**.

**Transitions:**
- Finish onboarding → `AUTH_PARENT`

---

### AUTH_PARENT
Parent is authenticated.

**Initial screen:**
- `Welcome` → `PARENT_HOME (My Kids)`

**Persistent state:**
- Valid access token

**Transitions:**
- Logout → `UNAUTHENTICATED`
- Session expired → `UNAUTHENTICATED`

---

### PARENT_HOME (My Kids)
Main working state for parent.

**Capabilities:**
- Switch active child context
- View requests
- Navigate to Kids Profile, Accounts, Tasks
- Generate child invite code

**Transitions:**
- Invite child → `CHILD_INVITE_CREATED`
- Revoke child access → `CHILD_ACCESS_REVOKED`

---

## Child Auth States

### CHILD_INVITE_VERIFY
Child enters **invite code** created by parent.

**Validation:**
- Code exists
- Code not expired
- Code bound to a specific child

**Transitions:**
- Valid code → `CHILD_DEVICE_BIND`
- Invalid / expired → stay in state

---

### CHILD_DEVICE_BIND
System binds:
- childId
- deviceId

**Rules:**
- One child ↔ one device
- Binding stored server-side

**Transitions:**
- First login → `CHILD_PIN_SETUP`

---

### CHILD_PIN_SETUP
Child sets a **local PIN**.

**Rules:**
- PIN stored securely (hashed / OS secure storage)
- Required only once per device

**Transitions:**
- PIN set → `AUTH_CHILD`

---

### AUTH_CHILD
Child authenticated on device.

**Initial screen:**
- `Welcome` → `CHILD_HOME`

**Persistent state:**
- Device-bound session
- PIN required on app launch

**Transitions:**
- App restart → `CHILD_PIN_LOGIN`
- Logout (optional) → `UNAUTHENTICATED`
- Access revoked by parent → `CHILD_ACCESS_REVOKED`

---

### CHILD_PIN_LOGIN
Child enters PIN for subsequent logins.

**Transitions:**
- Correct PIN → `AUTH_CHILD`
- Too many failures → `CHILD_ACCESS_LOCKED`
- Forgot PIN → `PARENT_VERIFICATION_REQUIRED`

---

### CHILD_HOME
Main working state for child.

**Capabilities:**
- View balance
- Tasks
- Deposits
- Limited actions

---

## Exceptional States

### CHILD_ACCESS_REVOKED
Triggered by parent.

**Effects:**
- Device binding invalidated
- PIN no longer valid

**Transitions:**
- Back to `UNAUTHENTICATED`

---

### CHILD_ACCESS_LOCKED
Temporary lock after failed PIN attempts.

**Transitions:**
- Parent unlock → `CHILD_PIN_LOGIN`

---

### PARENT_VERIFICATION_REQUIRED
Child cannot recover PIN alone.

**Resolution:**
- Parent resets access → new invite code

---

## Key Rules Summary
- Onboarding shown **only on registration**, never on login
- Welcome shown **only after successful authentication**
- Child always bound to **one device**
- Child re-authenticates via **PIN**, not password
- Parent fully controls child access lifecycle

---

## Out of Scope
- Biometric auth
- Multiple devices per child
- Offline mode

