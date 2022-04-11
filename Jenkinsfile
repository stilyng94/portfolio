pipeline {
    agent any

    environment {
        NEW_VERSION = '1.3.0'
    }

    tools {
        nodejs 'Node-16.13.0'
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
        stage('test') {
            when {
                branch 'main'
            }
            steps {
                script {
                    gv.buildApp()
                }
                withCredentials([usernamePassword(credentials:'credential_id',
                 usernameVariable:USER, passwordVariable:PWD)]) {
                    sh '''
                        hello $USER $PWD
                        '''
                 }
            }
            post {
                success {
                    echo '====++++test executed successfully++++===='
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
    }
}
