const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:8080",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },

    definitions: {

    }
  }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./app/routes/auth.routes.js', './app/routes/user.routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')           // Your project's root file
})