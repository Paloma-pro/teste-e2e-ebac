pipeline {
    agent any

    stages {
        stage('Checkout Código') {
            steps {
                git branch: 'main', url: 'https://github.com/Paloma-pro/teste-e2e-ebac.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                bat 'npm install'  // Ajuste conforme a ferramenta usada (Selenium, Cypress, etc.)
            }
        }

        stage('Executar Testes') {
            steps {
                bat '''set NO_COLOR=1
                      npx cypress run'''
            }
        }
    }
}
