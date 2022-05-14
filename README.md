# Node.js Express Login and Registration example with JWT

- Appropriate Flow for User Login and Registration with JWT Authentication
- Node.js Express Architecture with CORS, Authentication & Authorization middlewares & Sequelize
- How to configure Express routes to work with JWT
- How to define Data Models and association for Authentication and Authorization
- Way to use Sequelize to interact with SQLITE Database

## User Registration, User Login and Authorization process.
## How to use the app
during sign up dont use the roles column in the swagger
doc signup just omit/ remve the roles, 

manually  change the user role id number in the  controllers/auth.controller.js file on line 33
    //example  user has role id =   1 = user, 
    
     where id number 1 = user;
           id number 2 = customer;
           id number 3 = admin
      const result = user.setRoles([3]);


function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "customer",
  });

  Role.create({
    id: 3,
    name: "admin",  
  });


## examples of signed up credentials

{
(for user role)
username: any;
password: any
};

{
(for customer role)
username: chukwukere
password: any
};

{
(for admin role)
username: ezinwoke
password: any123457
};


## Project setup

```
npm install
```

### Run

```
nodemon server.js
```

### database

```
user.db
```
