pipeline{
    agent any

    stages{
        stage('FrontEnd test') {
            steps {
            sh '''
            cd frontend-testuite
            npm install && npm run cypress:run:report
            pwd
            ls -lart
            '''
            }
        }
        stage('BackEnd test') {
            steps {
            sh 'pwd'
            sh 'ls -lart'
            }
        }
        stage('Performance test') {
            steps {
            sh 'pwd'
            sh 'ls -lart'
            }
        }
    }
}