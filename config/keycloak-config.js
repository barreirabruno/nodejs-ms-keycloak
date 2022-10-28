const session = require('express-session')
const Keycloak = require('keycloak-connect')

let _keycloak

const keycloakConfig = {
  resource: 'nodejs-microservice',
  credentials: true,
  serverUrl: 'http://localhost:8080/',
  realm: 'Demo-Realm',
  credentials: {
      secret: 'jKAUUnzyEOwjslNiChQqmpVuAD7BQ347'
  }
}

function initKeycloak() {
  if(_keycloak) {
    console.warn("Trying to init Keycloak again!");
    return _keycloak;
  }
  else 
  {
    console.log('Initializing keycloak....')
    const memoryStore = new session.MemoryStore()
    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig)
    return _keycloak
  }
}

function getKeycloak() {
  if(!_keycloak) {
    console.error('Keycloak has not been initialized. Please called init first')
  }
  return _keycloak
}

module.exports = {
  initKeycloak,
  getKeycloak
}