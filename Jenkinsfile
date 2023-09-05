pipeline{  
    agent any
    tools { 
        nodejs "node"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('install dependencies'){
            steps{
                script{
                    sh 'npm install'
                }
            }   
        }
        stage('Install Skaffold') {
            steps {
                sh '''
                mkdir -p ~/bin
                curl -Lo ~/bin/skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64
                chmod +x ~/bin/skaffold
                '''
        // Add the custom bin directory to the PATH
            script {
                env.PATH = "${env.HOME}/bin:${env.PATH}"
                }
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                skaffold dev 
                '''
            }
        }
    }
}