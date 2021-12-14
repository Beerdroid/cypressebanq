pipeline {
    agent any

    options {
        ansiColor('xterm')
        timestamps()
    }

    stages {
        stage('Fetch') {
            steps {
                cleanWs()
                git branch: 'develop', credentialsId: '74337f09-e75a-42df-82b1-de18d3264123', url: 'https://github.com/Beerdroid/cypressebanq.git'
            }
        }
        stage('Dependencies') {
            steps {
                    sh 'npm install'
                    sh 'npm run clean'
            }
        }
        stage('Test') {
            steps {
                   sh 'npx browserslist@latest --update-db'
                   sh 'npm run test || true'
            }
        }
  }
    post {
        always {

        sh 'npm run post'

        script {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
        }
        publishHTML (target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'cypress/reports/mochareports',
                reportFiles: 'report.html',
                reportName: "Cypress report"
            ])
        }
    }

}