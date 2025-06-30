# ORM

ORMs are tools that let you manipulate data in your database and are widely used in the software industry. We’ll dive deep into one ORM popular in the Node.js landscape: Prisma ORM.

# Basics

https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma

## Generating Prisma Client

Install Prisma

``` npm
npm init -y

npm i --save-dev prisma
```

In VScode install the Prisma extension for code formatting and other Prisma supported development tools

Create a Prisma schema:

``` npx

npx prisma init --datasource-provider postgresql
```

The first step when using Prisma Client is installing the @prisma/client npm package:


```npm
npm install @prisma/client
```

``` prisma
npx prisma generate
```

## Using Prisma Client to send queries to your database

Once Prisma Client has been generated, you can import it in your code and send queries to your database. This is what the setup code looks like.

Import and instantiate Prisma Client

```js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
```

Now you can start sending queries via the generated Prisma Client API, here are a few sample queries. Note that all Prisma Client queries return plain old JavaScript objects.

Retrieve all User records from the database

```prisma
// Run inside `async` function
const allUsers = await prisma.user.findMany()
```

Include the posts relation on each returned User object

```prisma
// Run inside `async` function
const allUsers = await prisma.user.findMany({
  include: { posts: true },
})
```

Filter all Post records that contain "prisma"

```prisma
// Run inside `async` function
const filteredPosts = await prisma.post.findMany({
  where: {
    OR: [
      { title: { contains: 'prisma' } },
      { content: { contains: 'prisma' } },
    ],
  },
})
```

Create a new User and a new Post record in the same query

```prisma
// Run inside `async` function
const user = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: { title: 'Join us for Prisma Day 2020' },
    },
  },
})
```

Update an existing Post record

```prisma
// Run inside `async` function
const post = await prisma.post.update({
  where: { id: 42 },
  data: { published: true },
})
```
