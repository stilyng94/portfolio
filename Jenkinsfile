pipeline {
    agent any

    environment {
        NEW_VERSION = '1.3.0'
    }

    tools {
        nodejs 'node16-lts'
    }

    stages {
        stage('install') {
            steps {
                script {
                    gv = load('script.groovy')
                }

                sh '''
                yarn install
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
        stage('deploy') {
            steps {
                script {
                    gv.buildDocker()
                }
            }
            post {
                success {
                    echo '====++++deploy executed successfully++++===='
                }
                failure {
                    echo '====++++deploy executed failed++++===='
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
