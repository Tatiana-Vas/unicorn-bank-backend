# Screen: Child Profile

## Scope
Child Profile is a **personal profile screen for the child user**.
It displays basic personal information and provides navigation to child-related sections via a menu.
The screen is informational and mostly read-only.

---

## Actors
- **Primary actor:** Child
- **Secondary actor:** Parent (indirect, via profile configuration)

---

## Preconditions
- Child is authenticated
- Child profile exists

---

## Entry Points
1. Bottom navigation → **Profile**
2. From **Child Home** screen

---

## Screen Structure

### 1. Header
- Screen title: **Profile**
- Back button
- Burger menu icon

---

### 2. Profile Info Block

Displayed:
- Child avatar
- Child name
- Editable icon (visual only or limited, depending on permissions)

Rules:
- Editing capabilities may be restricted by parent settings

---

### 3. Personal Information

Displayed fields:
- **Birthday** (read-only)

Notes:
- Additional fields (city, language) may be added later

---

### 4. Burger Menu

Menu items:
- **My accounts**
- **Wishlist**
- **Tasks**
- **Expenses** (future)
- **School** (future)
- **News**
- **Tell a friend** (optional / future)

Rules:
- Selecting a menu item navigates to the corresponding screen
- Navigation keeps child context

---

### 5. Bottom Navigation

Tabs:
- **Home**
- **Accounts**
- **Tasks**
- **Wishlist**
- **Profile** (current)

---

## Business Rules

### 1. Read-only Profile
- Child cannot change critical personal data (e.g. birthday)
- Profile data is managed by the parent

---

### 2. Navigation Only
- This screen does not initiate financial actions
- Used primarily as an identity and navigation hub

---

## Use Cases

### UC-CHILD-PROFILE-01: View Profile
**Actor:** Child  
**Result:** Child sees their personal information.

---

### UC-CHILD-PROFILE-02: Navigate via Menu
**Actor:** Child  
**Result:** Child navigates to selected section (Accounts, Tasks, Wishlist, etc.).

---

## Navigation
- Back → previous screen
- Bottom navigation always available

---

## Notes
- Child Profile is intentionally minimal to avoid accidental changes
- Acts as a secondary navigation entry point
- All sensitive data is controlled by the parent

