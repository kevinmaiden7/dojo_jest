def gv

pipeline {

  agent any

  environment {
     APP_NAME = 'jest_dojo'
  }
    
  parameters {
    string(name: 'version', defaultValue: '1.0.0', description: 'App version')
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
        expression {
          params.executeTests == true
        }
      }
      steps {
        sh 'npm test'
      }
    }

    stage('Extra: prod confirmation'){
      when {
        expression {
          BRANCH_NAME == 'master'
        }
      }
      steps {
        echo 'Pipeline ran for master branch.'
      }
    }
    
  }

  post {

    always{
      echo "The pipeline has been executed for ${APP_NAME}, version ${params.version}"
    }
    success{
      echo 'Build status: OK'
    }
    failure{
      echo 'Build status: FAIL'  
    }

  }
}
