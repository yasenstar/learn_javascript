# Learn Next.js - 2. App Router

- [Learn Next.js - 2. App Router](#learn-nextjs---2-app-router)
  - [Chapter 6. Setting Up Your Database](#chapter-6-setting-up-your-database)
    - [Initialize New Database](#initialize-new-database)
    - [Configure `.env` file](#configure-env-file)
    - [Verify the Database Exists](#verify-the-database-exists)
    - [Force "NO SSL" in `.env` File](#force-no-ssl-in-env-file)
    - [Remove SSL Setting in File `/seed/route.ts`](#remove-ssl-setting-in-file-seedroutets)
    - [Clear the Database and Start Fresh](#clear-the-database-and-start-fresh)
    - [Update Seed Route Code to more Error Message](#update-seed-route-code-to-more-error-message)

## Chapter 6. Setting Up Your Database

### Initialize New Database

Due to my local machine is 'sitting' behind company firewall, it's not able to connect to the cloud PostgreSQL in Vercel, so in my demo videos, I'm connecting to one local installed PostgreSQL database server.

```SQL
CREATE DATABASE nextjs_dashboard;
```

### Configure `.env` file

Base on above cretaed database name `nextjs_dashboard`, configure the `.env` file in the root of the app, ensure the file is filtered out in `.gitignore`.

```conf
// Filename: .evn
POSTGRES_URL="postgresql://postgres:YourPassword@localhost:5432/nextjs_dashboard?sslmode=disable"
POSTGRES_PRISMA_URL="postgresql://postgres:YourPassword@localhost:5432/nextjs_dashboard?sslmode=disable"
POSTGRES_URL_NON_POOLING="postgresql://postgres:YourPassword@localhost:5432/nextjs_dashboard?sslmode=disable"
POSTGRES_USER="postgres"
POSTGRES_HOST="localhost"
POSTGRES_PASSWORD="YourPassword"
POSTGRES_DATABASE="nextjs_dashboard"
```

Note for `.env` file:

- **Special Characters**: if your password contains special characters (like `@`, `#`, or `:`), you must **URL encode** them in the `POSTGRES_URL`:
  - Example: if your password is `P@ssword`, use `P%40ssword` in the URL string
  - Check https://www.urlencoder.org/ for online URL encoding of special character
- **Quotes**: In `.env` file, it is a good habit to wrap in double quotes if they contain special characters, though it's not always strictly required for simple strings.
- The Next.js uses **Prisma** or the **Vercel Postgres SDK**, thus you see so many URLs:
  - `POSTGRES_URL_NON_POOLING` is specifically used to bypass connection pooling (which isn't an issue on `localhost` but is a big deal in Serverless environments).
  - By filling all of them with your local string, you ensure the app's internal logic doesn't break when looking for a specific key.

Test the database connection string: try to log in manually using the same credentials in your command/powershell prompt:

```Bash
psql -U postgres -d nextjs_dashboard -h localhost
```

Next.js sometimes caches environment variables. If you just edited your `.env` file, the app might still be trying to use the old values, so you may be better to restart the dev server:

1. Press `Ctrl + C` in your terminal (VS Code)
2. Run `npm run dev` again.

### Verify the Database Exists

The `/seed` route will fail if it can't find the specific database mentioned in the URL string. Following steps can be used to verify the existense of the database:

1. Open `SQL Shell (psql)` from Windows Start menu, or using pgadmin 4.
2. Log in (press Enter for defaults, enter your password when asked)
3. Run below command:
   ```SQL
   SELECT 'ok' FROM pg_database WHERE datname = 'nextjs_dashboard';
   ```
4. If it returns `(0 rows)`, means database is not exist, then create it by running:
   ```SQL
   CREATE DATABASE nextjs_database;
   ```

### Force "NO SSL" in `.env` File

The Next.js tutorial uses the `@vercel/postgres` package, which defaults to `ssl: true`. While, the local EDB Postgres defaults to `ssl: false`.

Update your `POSTGRES_URL` in `.env` file to include the `sslmode=disable` flag:

```bash
# Filename: .env
POSTGRES_URL="postgresql://postgres:yourpassword@localhost:5432/postgres?sslmode=disable"
```

### Remove SSL Setting in File `/seed/route.ts`

In `/seed/route.ts`, there's below line:

```javascript
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
```

Comment this line and add one new line without `ssl` setting, as below:

```js
// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
const sql = postgres(process.env.POSTGRES_URL!);
```

### Clear the Database and Start Fresh

Since this is a local development environment, the easiest fix is to "wipe" the tables and let the seed script build them from scratch.

1. Open **pgAdmin 4** or **SQL Shell (psql)**.
2. Connect to your `nextjs_dashboard` (or `postgres`) database
3. Run this command to drop the existing tables:
   ```SQL
   DROP TABLE IF EXISTS invoices, customers, users, revenue CASCADE;
   ```

### Update Seed Route Code to more Error Message

If you want to see exactly what is breaking, go to `app/seed/route.ts` file and ensure your `try/catch` block looks like this so it give the full story:

```ts
try {
  // ... your seeding logic
} catch (error) {
  console.error("FULL SEED ERROR:", error); // Add this line
  return Response.json({ error: error.message }, { status: 500 });
}
```

---

Last updated at 1/31/2026, 8:15:34 PM 