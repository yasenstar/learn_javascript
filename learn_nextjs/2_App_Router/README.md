# Learn Next.js - 2. App Router

- [Learn Next.js - 2. App Router](#learn-nextjs---2-app-router)
  - [Chapter 6. Setting Up Your Database](#chapter-6-setting-up-your-database)

## Chapter 6. Setting Up Your Database

Due to my local machine is 'sitting' behind company firewall, it's not able to connect to the cloud PostgreSQL in Vercel, so in my demo videos, I'm connecting to one local installed PostgreSQL database server.

```SQL
CREATE DATABASE nextjs_dashboard;
```

```javascript:.env
POSTGRES_URL="postgresql://postgres:YourPassword@localhost:5432/nextjs_dashboard?sslmode=disable"
POSTGRES_PRISMA_URL="postgresql://postgres:YourPassword@localhost:5432/nextjs_dashboard?sslmode=disable"
POSTGRES_URL_NON_POOLING="postgresql://postgres:YourPassword@localhost:5432/nextjs_dashboard?sslmode=disable"
POSTGRES_USER="postgres"
POSTGRES_HOST="localhost"
POSTGRES_PASSWORD="YourPassword"
POSTGRES_DATABASE="nextjs_dashboard"
```

---

Last updated at: 1/24/2026, 6:26:34 PM 