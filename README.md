# Book store API

## Tasks:

- Create .env file (Look at sample.env)
- Modify Makefile, change 'rado' to your postgres user
- Open the terminal in project directory and run command: ```make db```
- To run the server: ```yarn dev``` or ```npm run dev``` or ```node index.js```

If you have a question, call me -_-

## API

### Get all books

```http
GET http://localhost/books?page=1&limit=10
```

### Get one book

```http
GET http://localhost/book/1
```

### Sign up

```http
POST http://localhost/auth/sign_up
```

#### Request body

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "password": "string"
}
```

### Sign in

```http
POST http://localhost/auth/sign_in
```

#### Request body

```json
{
  "email": "string",
  "password": "string"
}
```

### Refresh token

```http
GET http://localhost/auth/refresh
```

#### Request header: ```Authorization: Bearer asd.asd.asd```
