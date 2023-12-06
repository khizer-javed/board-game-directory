CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "games"
(
  "id" uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  "fkUserId" uuid NOT NULL,
  "token" text NOT NULL,
  "expiredAt" timestamptz,
  "ip" varchar(50),
  "userAgent" jsonb,
  "createdAt" timestamptz NOT NULL,
  "updatedAt" timestamptz
);


CREATE TABLE "game_sessions"
(
  "id" uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  "fkUserId" uuid NOT NULL,
  "token" text NOT NULL,
  "expiredAt" timestamptz,
  "ip" varchar(50),
  "userAgent" jsonb,
  "createdAt" timestamptz NOT NULL,
  "updatedAt" timestamptz
);

ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("fkRoleId") REFERENCES "roles" ("id");