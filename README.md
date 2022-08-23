# Prisma Issue #xxxx

There is an issue with Prisma which causes `findUnique()` to return null
values, even though the row definitely exists.

- Only happens with `findUnique`.
- Onyl when multiple `findUnique` calls are made concurrently and Prisma runs
  them in a batched query.
- Only seems to happen when a `DateTime` column is used.

### Versions Tested

- 4.0.0
- 4.1.0
- 4.2.1
- 4.3.0-dev.58
 
### Steps for reproduction

1. Clone this repository
2. Change the credentials in the `.env` file
4. Run `npm install` to install dependencies
3. Run `npm run prisma migrate dev` to bootstrap database
5. Run `npm run start` to reproduce
