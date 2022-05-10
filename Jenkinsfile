pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                script{
                        sshCommand remote: remote, command: "git clone -b dev https://github.com/ApichaJA/dev-tool-final-2022.git"
                    }
            }
        }
        stage('Download dependency') {
            steps {
                sh 'cd dev-tool-final-2022 && rm -rf node_modules/'
                sh 'cd dev-tool-final-2022 && yarn install'
            }
        }
        stage('Deployment') {
            steps {
                withCredentials([string(credentialsId: 'FINAL_DEVTOOL_001', variable: 'FINAL_DEVTOO'), string(credentialsId: 'FINAL_DEVTOOL_001', variable: 'HOST'), usernamePassword(credentialsId: 'ACCOUNT', passwordVariable: 'PASSWORD', usernameVariable: 'USER')]) {
                    script{
                        def remote = [:]
                        remote.name = NAME
                        remote.host = HOST
                        remote.user = USER
                        remote.password = PASSWORD
                        remote.allowAnyHosts = true
                        
                        sshCommand remote: remote, command: "git clone -b dev https://github.com/ApichaJA/dev-tool-final-2022.git"
                        sshCommand remote: remote, command: "docker-compose -f project-sw-dev-and-env/docker-compose-deploy-frontend.yml down"
                        sshCommand remote: remote, command: "docker-compose -f project-sw-dev-and-env/docker-compose.yml build --no-cache app"
                        sshCommand remote: remote, command: "docker-compose -f project-sw-dev-and-env/docker-compose-deploy-frontend.yml up -d"
                        sshCommand remote: remote, command: "rm -r project-sw-dev-and-env"
                    }
                }
            }
        }
    }
}

