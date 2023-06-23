CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    "image" VARCHAR,
    password VARCHAR
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    author VARCHAR,
    "image" VARCHAR,
    "description" VARCHAR,
    users_id INTEGER,
    categories_id INTEGER,

    CONSTRAINT users_id
        FOREIGN KEY (users_id)
            REFERENCES users (id)
                ON DELETE CASCADE,

    CONSTRAINT categories_id
        FOREIGN KEY (categories_id)
            REFERENCES categories (id)
                ON DELETE SET NULL
);

