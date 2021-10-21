# Bookstore - Nest JS

- RUN `npm run start` OR if developing `npm run start:dev`

## Tests
- Unit - `npm run test:unit`
- E2E - `npm run test:e2e`


## Queries

### GET Query
curl --location --request GET 'http://localhost:3000/book?sortBy=author&asc=True&search=af'

### POST Request
curl --location --request POST 'http://localhost:3000/book' \
--header 'Content-Type: application/json' \
--data-raw '{
    "description": "description",
    "name": "name",
    "author": "author name"
}'
