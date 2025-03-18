pipeline {
    agent any

    stages {
        stage('Checkout Código') {
            steps {
                git 'https://github.com/Paloma-pro/teste-e2e-ebac.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'npm install'  // Ajuste conforme a ferramenta usada (Selenium, Cypress, etc.)
            }
        }

        stage('Executar Testes') {
            steps {
                sh 'npx cypress run'  // Exemplo usando Cypress
            }
        }

        stage('Publicar Relatório') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports',
                    reportFiles: 'index.html',
                    reportName: 'Relatório de Testes Web'
                ])
            }
        }
    }

    post {
        always {
            junit '**/cypress/results/*.xml'
        }
    }
}
