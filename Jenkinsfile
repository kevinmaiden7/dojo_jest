def gv

pipeline {

  agent any

  environment {
     APP_NAME = 'jest_dojo'
  }
    
  parameters {
    string(name: 'version', defaultValue: '1.0.1', description: 'Pipeline version')
    booleanParam(name: 'executeTests', defaultValue: true, description: 'Flag variable to execute tests')
  }

  tools {nodejs "node"}
    
  stages {

    stage('Init') {
      steps {
        script {
          gv = load "script.groovy"
          gv.groovyFunction()
        }
      }
    }
     
    stage('Setup') {
      steps {
        sh 'node --version'
        sh 'npm install'
      }
    }  
            
    stage('Test') {
      when {
        expression { params.executeTests }
      }
      steps {
        sh 'npm test'
      }
    }

    stage('Extra: prod confirmation'){
      when {
        expression { env.BRANCH_NAME == 'master' }
      }
      steps {
        echo "Pipeline ran for master branch."
        input(message="Confirm actions on production environment")
        echo "Actions on production confirmed!"
      }
    }
    
  }

  post {

    always{
      echo "The pipeline has been executed for ${APP_NAME}"
      echo "Pipeline version ${params.version}"
      cleanWs()
    }
    success{
      echo 'Build status: OK'
    }
    failure{
      echo 'Build status: FAIL'  
    }

  }
}
