# Экран: Registration / Sign up (Parent)

Источник: Sign up screen (name, email, password, terms)

---

## Use Case: Register Parent

### Actor
Guest (неавторизованный пользователь)

### Goal
Создать аккаунт родителя и сразу дать доступ в приложение

### Preconditions
- Пользователь не залогинен
- Email ещё не зарегистрирован

### Main Flow
1. Пользователь вводит **name**, **email**, **password**
2. Пользователь принимает **Terms & Conditions**
3. Система валидирует входные данные
4. Система создаёт запись **Parent**
5. Система создаёт auth-сессию
6. Система возвращает access token
7. Пользователь попадает в приложение

### Alternative Flows
- Email уже существует → ошибка
- Слабый пароль → ошибка
- Terms не приняты → ошибка

### Postconditions
- Parent создан в БД
- Пользователь авторизован

---

## API: Register Parent

### Endpoint
```
POST /auth/register
```

### Request
```json
{
  "name": "Maksim",
  "email": "mail@gmail.com",
  "password": "secret123",
  "acceptTerms": true
}
```

### Validation Rules
- name: required, string
- email: required, valid email
- password: min 8 characters
- acceptTerms: must be true

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

### Error Responses

**Email already exists**
```json
{ "error": "EMAIL_ALREADY_EXISTS" }
```

**Terms not accepted**
```json
{ "error": "TERMS_NOT_ACCEPTED" }
```

---

## DB Impact

### Parent
- email: unique
- password: stored as hash
- avatarUrl: null
- children: empty

---

## Out of Scope (intentionally)
- Email verification
- Child creation
- Profile completion
- Avatar upload

---

## Next Screens
- Onboarding

