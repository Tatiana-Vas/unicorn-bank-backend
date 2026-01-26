# Экран: Login / Sign in (Parent)

Источник: Sign in screen (email, password)

---

## Use Case: Login Parent

### Actor
Parent (зарегистрированный пользователь)

### Goal
Авторизоваться в приложении и получить доступ к данным

---

### Preconditions
- Parent уже зарегистрирован
- Аккаунт не заблокирован

---

### Main Flow
1. Пользователь вводит **email** и **password**
2. Система проверяет существование Parent по email
3. Система проверяет пароль
4. Система создаёт auth-сессию
5. Система возвращает access token
6. Пользователь попадает в приложение

---

### Alternative Flows
- Email не найден → ошибка
- Неверный пароль → ошибка
- Аккаунт заблокирован → ошибка

---

### Postconditions
- Пользователь авторизован
- Активная auth-сессия

---

## API: Login Parent

### Endpoint
```
POST /auth/login
```

---

### Request
```json
{
  "email": "mail@gmail.com",
  "password": "secret123"
}
```

---

### Validation Rules
- email: required, valid email
- password: required

---

### Success Response
```json
{
  "accessToken": "jwt",
  "parent": {
    "id": "uuid",
    "name": "Maksim",
    "email": "mail@gmail.com"
  }
}
```

---

### Error Responses

**Invalid credentials**
```json
{ "error": "INVALID_CREDENTIALS" }
```

**Account blocked**
```json
{ "error": "ACCOUNT_BLOCKED" }
```

---

## DB Impact

### Parent
- read by email
- password comparison via hash
- no DB mutations

---

## Security Notes
- Passwords are never returned
- Rate limit on login endpoint
- Generic error for wrong email/password

---

## Out of Scope (intentionally)
- Password reset
- Email verification
- 2FA
- Device management

---

## Next Screens
- Welcome 

