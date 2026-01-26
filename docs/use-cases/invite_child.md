# Invite Child

## Scope
This document describes the **Invite Child** flow — how a parent creates access for a specific child and how that invite is later used by the child to enter the app for the first time.

This is a **parent-driven flow** and the starting point of the child lifecycle in the system.

---

## Actors
- **Parent** — initiates invite
- **Child** — uses invite code on own device

---

## Preconditions
- Parent is authenticated (`AUTH_PARENT`)
- Parent is on `PARENT_HOME (My Kids)` or `Kids Profile`

---

## UC-PARENT-INVITE-01: Create Child Invite

### Goal
Allow parent to invite a **specific child** to the app.

### Trigger
Parent taps **Invite Child** action.

### Input
- Child name (required)
- Invite code / PIN (generated or parent-defined)

> No age, birth date, city, language or financial data required at this stage.

---

### System Actions
1. Create `Child` entity with minimal data:
   - id
   - name
   - password / invite PIN (hashed)
2. Create `ParentChild` relation
3. Generate **invite code**:
   - One-time or limited-use
   - Expiration optional
4. Set child state = `INVITED`

---

### Result
- Child appears in **My Kids** list
- Invite code is shown to parent
- Parent shares code with child manually

---

## UC-PARENT-INVITE-02: Invite Lifecycle Rules

- Invite is bound to **one specific child**
- Child does **not** choose from a list of children
- Invite can be:
  - regenerated
  - revoked
- Invite becomes invalid after:
  - first successful device bind
  - parent revocation

---

## UC-CHILD-INVITE-01: Enter Invite Code

### Trigger
Child launches **Child App** and enters invite code.

---

### Validation
System checks:
- Invite exists
- Invite not expired
- Invite not used

---

### Success Path
1. Child account activated
2. Device binding created (`childId + deviceId`)
3. Transition to `CHILD_PIN_SETUP`

---

### Failure Cases
- Invalid code → error message
- Expired code → request new code from parent
- Used code → blocked

---

## UC-PARENT-INVITE-03: Revoke Invite / Access

### Trigger
Parent selects **Revoke Access** for a child.

### Effects
- Invite invalidated
- Device binding removed
- Child session terminated

### Resulting State
- Child returns to `UNAUTHENTICATED`

---

## Data Model Impact

### Child (minimal at invite)
- id
- name
- password / invite PIN
- createdAt

### ParentChild
- parentId
- childId
- createdAt

---

## Security Rules
- Invite codes are hashed server-side
- One active device per child
- Parent has full control over invite lifecycle

---

## Out of Scope
- Multiple parents inviting same child
- Multiple devices per child
- Sending invites via email / SMS

