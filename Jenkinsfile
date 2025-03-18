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
                sh 'npm install'  // Ajuste conforme a ferramenta usada (Selenium, Cypress, etc.)
            }
        }

        stage('Executar Testes') {
            steps {
                sh 'npx cypress run'  // Exemplo usando Cypress
            }
        }

