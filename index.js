const express = require('express')
const app = express()

const keycloak = require('./config/keycloak-config.js').initKeycloak()
app.use(keycloak.middleware());

var testController = require('./controller/test-controller.js')
app.use('/test', testController)

app.listen(4020, () => console.log(`**[APPLICATION UP AND RUNNING ON PORT 4020]**`))