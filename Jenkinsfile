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
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'frontend-testuite/mochawesome-report', 
                reportFiles: 'mochawesome.html', 
                reportName: 'Frontend report', 
                reportTitles: ''
                ])
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