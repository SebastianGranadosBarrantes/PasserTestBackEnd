const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
		create table transaction( pk_transaction integer, fk_user integer, description text, amount real);
                insert into users values (123, 'Juan', true);
		insert into users values (1, 'Sebastián', true);`);


module.exports = {
    postgresql
}