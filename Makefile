db:
	psql -U rado -d postgres -f ./database/init/init.sql
	psql -U rado -d book_store -f ./database/init/create.sql
	psql -U rado -d book_store -f ./database/init/insert.sql

