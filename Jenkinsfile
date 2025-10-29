pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    echo "🛠️ Building Docker image for ResuMatch..."
                    docker.build('resumatch:latest')
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "🚀 Pushing Docker image to Docker Hub..."
                    withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
                        sh '''
                        echo $DOCKER_TOKEN | docker login -u myusername --password-stdin
                        docker tag resumatch:latest myusername/resumatch:latest
                        docker push myusername/resumatch:latest
                        '''
                    }
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    echo "🏃 Running ResuMatch container..."
                    sh '''
                    docker rm -f resumatch || true
                    docker run -d --name resumatch -p 8081:80 myusername/resumatch:latest
                    '''
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    echo "🌐 Checking if ResuMatch app is live..."
                    sh '''
                    sleep 5
                    curl -I http://localhost:8081 || echo "App not reachable yet"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ ResuMatch deployed successfully at http://localhost:8081"
        }
        failure {
            echo "❌ Build failed! Please check the logs."
        }
    }
}
