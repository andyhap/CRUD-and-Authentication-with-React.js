## Frontend - CRUD & Authentication Project

[![View Backend](https://img.shields.io/badge/Open-Backend-green?logo=node.js)](https://github.com/andyhap/Backend-for-CRUD-and-Authentication-with-React.js.git)

This project represents the **Frontend** part of a simple CRUD and authentication application built with **React.js**, **Bootstrap**, and **Axios**.

🔗 **Backend Repository:** [Click here to view the Backend](https://github.com/andyhap/Backend-for-CRUD-and-Authentication-with-React.js.git)


## Features
- User Registration & Login (JWT Authentication)
- Protected Routes using React Router
- CRUD (Create, Read, Update, Delete) operations with modal
- Integration with REST API (Backend)
- Clean UI using React-Bootstrap
- Notification feedback (success/failure)


## Project Structure
```text
src/
├── api/
│   └── api.js 
├── components/
│   ├── Navbar.js
│   ├── PrivateRoute.js
│   ├── FormModal.js
│   └── Message.js
├── pages/
│   ├── Login.js
│   ├── Register.js
│   ├── Dashboard.js
│   └── NotFound.js
├── App.js
└── index.js
```


## Installation

1. Clone this repository
   ```bash
   git clone https://github.com/andyhap/CRUD-and-Authentication-with-React.js.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the application
   ```bash
   npm start
   ```

Make sure the backend server is running at http://localhost:5000

## Available Scripts
In the project directory, you can run:


### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so 
