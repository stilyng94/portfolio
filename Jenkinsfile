pipeline{
    agent{
        label "node"
    }
    stages{
        stage("build"){
            steps{
                echo "========executing build========"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========build executed successfully========"
                }
                failure{
                    echo "========build execution failed========"
                }
            }
        }
        stage("test"){
            steps{
                echo "====++++executing test++++===="
            }
            post{
                always{
                    echo "====++++always++++===="
                }
                success{
                    echo "====++++test executed successfully++++===="
                }
                failure{
                    echo "====++++test execution failed++++===="
                }
        
            }
        }
        stage("deploy"){
            steps{
                echo "====++++executing deploy++++===="
            }
            post{
                always{
                    echo "====++++always++++===="
                }
                success{
                    echo "====++++deploy executed successfully++++===="
                }
                failure{
                    echo "====++++deploy execution failed++++===="
                }
        
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}