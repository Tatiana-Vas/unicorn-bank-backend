-- =========================
-- EXTENSIONS
-- =========================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================
-- USERS
-- =========================

CREATE TABLE parents (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email       TEXT UNIQUE NOT NULL,
    name        TEXT NOT NULL,
    avatar_url  TEXT,
    created_at  TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE children (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name        TEXT NOT NULL,
    birth_date DATE NOT NULL,
    city        TEXT,                  -- для погоды
    locale      TEXT DEFAULT 'en',
    news_prompt TEXT,
    avatar_url  TEXT,
    created_at  TIMESTAMP NOT NULL DEFAULT now()
);

-- many-to-many: несколько родителей у ребёнка
CREATE TABLE parent_child (
    parent_id  UUID REFERENCES parents(id) ON DELETE CASCADE,
    child_id   UUID REFERENCES children(id) ON DELETE CASCADE,
    role       TEXT DEFAULT 'owner',
    PRIMARY KEY (parent_id, child_id)
);

-- =========================
-- ACCOUNTS
-- =========================

CREATE TABLE spending_accounts (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id   UUID UNIQUE REFERENCES children(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);

-- =========================
-- TRANSACTIONS (SOURCE OF TRUTH)
-- =========================

CREATE TABLE transactions (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    account_id UUID NOT NULL REFERENCES spending_accounts(id) ON DELETE CASCADE,

    amount     NUMERIC(12,2) NOT NULL,
    currency   TEXT NOT NULL DEFAULT 'USD',

    type       TEXT NOT NULL,
    -- gift | bonus | pocket_money | task_reward | purchase | cash | deposit_interest

    source_id  UUID,
    description TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT now()
);

-- =========================
-- DEPOSITS (SAVING)
-- =========================

CREATE TABLE deposits (
    id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id       UUID NOT NULL REFERENCES children(id) ON DELETE CASCADE,

    principal      NUMERIC(12,2) NOT NULL,
    interest_rate  NUMERIC(5,2) NOT NULL,

    start_date     DATE NOT NULL,
    end_date       DATE NOT NULL,

    closed_at      DATE,
    created_at     TIMESTAMP NOT NULL DEFAULT now()
);

-- =========================
-- TASKS
-- =========================

-- task template
CREATE TABLE tasks (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id      UUID NOT NULL REFERENCES children(id) ON DELETE CASCADE,

    title         TEXT NOT NULL,
    description   TEXT,
    reward_amount NUMERIC(12,2) NOT NULL,

    type          TEXT NOT NULL, -- one_time | recurring
    schedule      TEXT,          -- cron / weekly / daily
    due_at        DATE,          -- для one-time
    grace_days    INT DEFAULT 0,

    active        BOOLEAN DEFAULT true,
    created_at    TIMESTAMP NOT NULL DEFAULT now()
);

-- конкретное выполнение
CREATE TABLE task_instances (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_id    UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,

    expected_at DATE NOT NULL,
    expired_at  DATE,

    status      TEXT NOT NULL,
    -- new | pending_approval | approved | rejected | expired

    approved_at TIMESTAMP,
    created_at  TIMESTAMP NOT NULL DEFAULT now()
);

-- =========================
-- REQUESTS (CHILD -> PARENT)
-- =========================

CREATE TABLE requests (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    child_id  UUID NOT NULL REFERENCES children(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES parents(id),

    type       TEXT NOT NULL,
    -- new_task | approve_task | new_deposit | purchase | cash

    payload    JSONB NOT NULL,

    status     TEXT NOT NULL DEFAULT 'pending',
    -- pending | approved | rejected

    resolved_at TIMESTAMP,
    created_at  TIMESTAMP NOT NULL DEFAULT now()
);

-- =========================
-- NOTIFICATIONS
-- =========================

CREATE TABLE notifications (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_type TEXT NOT NULL, -- parent | child
    user_id   UUID NOT NULL,

    type       TEXT NOT NULL,
    -- new_request | task_completed | money_received | deposit_closed

    entity_id UUID,
    payload   JSONB,

    read_at   TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);