# 1. Getting Started
Copy the `starter-files` directory and name the copy in the following format `<first initial><last name>`, `flastname` for example.

Your directory, if your name is Boof Ball, should now look something like this:

```
├── app
    ├── bball
    ├── start-files
    ├── .gitignore
    └── README.md
```

Install dependencies within the directory you have created.

The starter files include some boilerplate -- scripts, bundling, a server, and a "db" to make the TypeScript portion of this simple.

# 2. Running the App
Once completing step 1:

- `npm start` will run a parcel browser app
- `npm run start:server` will run a server and "database"

# 3. Implementation
High-level steps:

1. Implement a CRUD Todo List in React
2. Convert React app to React-Redux

This covers type management with:
- React components
- Redux store, actions, reducers

# 4. TODO API
The `todoClient` export from `client/app/api` offers `delete`, `get`, `patch`, and `post` methods.  It offers an interface that includes `success` and `fail` callbacks similar to our `fetchData` helper, and also a `data` property for request bodies.

Example usage:

```js
todoClient.get({
  success: console.log,
  fail: console.error
});
```

This will make a GET request to the todo API, and will log on success and log an error on failure.

```js
todoClient.post({
  data: {
    text: 'new todo'
  },
  success: console.log,
  fail: console.error
});
```

This will make a POST request to the todo API, and will log on success and log an error on failure.