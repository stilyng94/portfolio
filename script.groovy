def buildDocker() {
  sh(script: '/usr/local/bin/docker-compose up -d')
}

return this
