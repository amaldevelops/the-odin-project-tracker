# Prisma Migrate

https://www.prisma.io/docs/orm/prisma-migrate/getting-started 

1. Create a Prisma schema:

``` npx

npx prisma init --datasource-provider postgresql
```

2. Create the first migration:

``` prisma
prisma migrate dev --name init

```

3. Add additional fields to your schema:

4. Create the second migration:

``` prisma

prisma migrate dev --name added_job_title

```

5. Your Prisma schema is once again in sync with your database schema, and your migration history contains two migrations:
