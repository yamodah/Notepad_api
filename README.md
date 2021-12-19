# Notepad_api
### a backend server used for personal note taking.

1. Fork and clone repository onto your local machine.
2. Run `npm install` in source folder
2. Create a .env file with the variable `DATABASE_URL` set equal to your database URL in string format
3. Run knex migrations `npx knex migrate:latest`
4. Deploy api or run `npm start` to have a live server for a Command line Notepad app (https://github.com/yamodah/notepad_cli)
