pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "sidduthatikanti93/resumatch"
        DOCKER_TAG   = "latest"
        DOCKER_CREDS = "dockerhub-creds"
    }
    stages {
        stage('Checkout Source') {
            steps {
                echo "Repository checked out by Jenkins SCM"
            }
        }
        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                '''
            }
        }
        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "${DOCKER_CREDS}",
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }
        stage('Push Image') {
            steps {
                sh '''
                    docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                '''
            }
        }
        stage('Run Container') {
            steps {
                echo "Running container on port 8085..."
                sh '''
                    docker rm -f resumatch-container || true
                    docker run -d -p 8085:80 --name resumatch-container ${DOCKER_IMAGE}:${DOCKER_TAG}
                '''
            }
        }
    }
    post {
        success {
            echo "✅ Pipeline completed successfully! App running at http://<your-ec2-ip>:8085"
        }
        failure {
            echo "❌ Pipeline failed — check logs above"
        }
        always {
            sh 'docker logout || true'
        }
    }
}
