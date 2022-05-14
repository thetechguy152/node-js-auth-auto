const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))





app.use(
  cookieSession({
    name: "chukwukere-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
 //db.sequelize.sync({force: true}).then(() => {
 // console.log('Drop and Resync Database with { force: true }');
 // initial();
 //});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to chukwukere application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(
    "Server is running!\nAPI documentation: http://localhost:8080/doc"
  );

});

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
}
