CREATE USER test WITH PASSWORD 'test' CREATEDB;
CREATE DATABASE test
    WITH
    OWNER = test
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
