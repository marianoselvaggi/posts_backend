# Awesome Project Build with TypeORM and Typescript

Steps to run this project:

# DEPENDENCIES #
1. Run `npm i` command

# CONFIG FILES #
1. Make a copy of `/config/example.env` and name it `/config/dev.env`
2. Add config values inside `/config/dev.env` and `ormconfig.json`

# MYSQL #
1. Run `docker-compose up`
2. Run migrations with `yarn typecli migration:run`

# RUN THE APP #
1. Run `yarn dev`

# RUN THE TESTS #
1. Create a database named `posts_test`
2. Make a copy of `/config/example.env` and name it `/config/test.env`
3. Change the db inside `ormconfig.json`
4. Run migrations with `yarn typecli migration:run`
5. Ryn `yarn test`
