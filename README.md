## About

This take home exercise consists of a Node/Express/Typescript API located in "./api" and a static FE app using React/Typescript/Vite located in the base directory. The FE fetches country data from the API based on form submission data and displays it within a table. The API is configured to handle GET requests to `/countries/:id`. It handles these requests by querying a public graphql API and modifying the queried data slightly before responding with results.

### How to run

1. Clone repository
2. `npm i`
3. `npm run dev`
4. Open new terminal
5. `cd api`
6. `npm i`
7. `npm start`
8. Navigate to `http://localhost:4000` within your browser
