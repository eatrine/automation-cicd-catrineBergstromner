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
            archiveArtifacts allowEmptyArchive:true, artifacts: 'frontend-testuite/cypress/videos/**'
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
            sh '''
            cd backend-tests
            npm install && npm run cypress:run
            pwd
            ls -lart
            '''
            archiveArtifacts allowEmptyArchive:true, artifacts: 'backend-tests/cypress/videos/**'
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'backend-tests/cypress/report/mochawesome-report', 
                reportFiles: 'mochawesome.html', 
                reportName: 'Backend report', 
                reportTitles: ''
                ])
            
            }
        }
        stage('Performance test') {
            steps {
            sh '''
                cd performance-tests/
                rm myTest.csv -Rf && rm html-reports/ -Rf
                jmeter -n -t login-logout.jmx -l myTest.csv -e -o html-reports/
            '''
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'performance-tests/html-reports', 
                reportFiles: 'index.html', 
                reportName: 'Jmeter dashboard', 
                reportTitles: ''
                ])
            }
        }
    }
}