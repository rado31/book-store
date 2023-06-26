INSERT INTO users (first_name, last_name, email, "image", password)
VALUES
    ('rado', 'rado', 'rado', '', 'rado'),
    ('ata', 'atayev', 'atayev@gmail.com', '', '123'),
    ('mariya', 'klimenka', 'mariya@gmail.com', '', '123');

INSERT INTO categories (title)
VALUES ('drama'), ('adventure');

INSERT INTO books (title, author, "image", "description", users_id, categories_id)
VALUES
    ('book 1', 'author 1', '', 'some book', 1, 1),
    ('book 2', 'author 2', '', 'some book', 2, 2),
    ('book 3', 'author 3', '', 'some book', 2, 2),
    ('book 4', 'author 4', '', 'some book', 2, 2),
    ('book 5', 'author 5', '', 'some book', 2, 2),
    ('book 6', 'author 6', '', 'some book', 2, 2),
    ('book 7', 'author 7', '', 'some book', 2, 2),
    ('book 8', 'author 8', '', 'some book', 2, 2),
    ('book 9', 'author 9', '', 'some book', 2, 2),
    ('book 10', 'author 10', '', 'some book', 2, 2);

