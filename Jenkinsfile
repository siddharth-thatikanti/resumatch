pipeline {
    agent any

    environment {
        IMAGE_NAME = "resumatch"
        DOCKERHUB_USER = "siddhartha9"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/siddharth-thatikanti/resumatch.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "🛠️ Building Docker image for ResuMatch..."
                    dockerImage = docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials-id') {
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Run Container') {
            steps {
                echo "🚀 Running container on port 8085..."
                sh "docker run -d -p 8085:80 --name resumatch-container ${IMAGE_NAME}"
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "🔍 Verifying ResuMatch deployment..."
                sh "curl -I http://localhost:8085"
            }
        }
    }

    post {
        success {
            echo "✅ Build and deployment successful! App running at http://localhost:8085"
        }
        failure {
            echo "❌ Build failed! Please check the logs."
        }
    }
}
