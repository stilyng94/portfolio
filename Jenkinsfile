pipeline {
    agent any

    environment {
        NEW_VERSION = '1.3.0'
    }

    stages {
        stage('install') {
            steps {
                agent {
                    docker { image:'node:lts-alpine3.15' }
                }

                sh '''
                yarn install
                node --version
                '''
            }
            post {
                    success {
                        echo '========installation executed successfully========'
                    }
            }
        }

        stage('build') {
            steps {
                sh '''
                yarn build
                '''
            }
            post {
                success {
                    echo '========build executed successfully========'
                }
            }
        }
    }
    post {
        success {
            echo '========pipeline executed successfully ========'
        }
        failure {
            echo '========pipeline execution failed========'
        }
        always {
            sh(script: '/usr/local/bin/docker-compose down')
            cleanWs()
        }
    }
}
