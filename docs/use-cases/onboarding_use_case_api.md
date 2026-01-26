# Экран: Onboarding (после регистрации / первого входа)

Источник: серия onboarding-экранов с иллюстрациями и CTA «Let’s start!»

---

## Назначение онбординга

Онбординг нужен, чтобы:
- объяснить ценность приложения
- показать основные возможности
- мягко провести пользователя к первому действию

Онбординг **не обязателен** для прохождения, но показывается:
- при первом входе
- после регистрации

Онбординг **разный для Parent и Child**.

---

## Типы онбординга

### Parent Onboarding
Фокус:
- контроль финансов
- обучение ребёнка
- задания, накопления, безопасность

### Child Onboarding
Фокус:
- простые объяснения
- деньги как игра
- заработок и накопление

---

## Use Case: Show Onboarding

### Actor
- Parent (после регистрации / первого логина)
- Child (после первого входа)

---

### Goal
Познакомить пользователя с возможностями приложения в понятной форме

---

### Preconditions
- Пользователь авторизован
- Онбординг ещё не был завершён

---

### Main Flow
1. Система определяет тип пользователя (Parent / Child)
2. Система загружает список onboarding-экранов
3. Пользователь последовательно просматривает экраны
4. Пользователь нажимает CTA «Let’s start!» на последнем экране
5. Система помечает onboarding как завершённый
6. Пользователь переходит:
   - Parent → My kids
   - Child → Child Home

---

### Alternative Flows
- Пользователь закрывает приложение → онбординг покажется снова
- Пользователь пропускает онбординг → считается завершённым

---

### Postconditions
- Онбординг завершён
- Пользователь больше не видит onboarding-экраны

---

## API

### Получение onboarding-экранов

```
GET /onboarding
```

---

### Headers
```
Authorization: Bearer <accessToken>
```

---

### Query Params
```
role=parent | child
```

---

### Success Response
```json
{
  "screens": [
    {
      "id": "welcome",
      "title": "Welcome to the Unicorn Bank!",
      "description": "You can manage your kid’s money easily",
      "image": "welcome.png"
    },
    {
      "id": "save",
      "title": "Help your kid save money",
      "description": "Create deposits and watch savings grow",
      "image": "save.png"
    }
  ]
}
```

---

### Завершение онбординга

```
POST /onboarding/complete
```

---

### Success Response
```json
{ "status": "ok" }
```

---

## DB Impact

### Вариант 1 (простой, рекомендован для MVP)
Добавить флаг:

```
Parent.onboardingCompleted: Boolean
Child.onboardingCompleted: Boolean
```

### Вариант 2 (гибкий, на будущее)
```
OnboardingProgress {
  userId
  role
  completedAt
}
```

---

## Navigation Rules

- Parent:
  - onboardingCompleted = false → Onboarding
  - onboardingCompleted = true → My Kids

- Child:
  - onboardingCompleted = false → Child Onboarding
  - onboardingCompleted = true → Child Home

---

## Out of Scope (intentionally)
- A/B тестирование онбординга
- Аналитика экранов
- Локализация контента

---

## Next Screens
- My Kids (Parent)
- Child Home (Child)

