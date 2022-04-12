def buildDocker() {
  sh(script: 'docker-compose run -rm frontend')
}

return this
