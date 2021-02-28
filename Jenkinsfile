def gv

pipeline {

  agent any

  environment {
     APP_NAME = 'jest_dojo'
     CRED_1 = credentials('cred_1')
  }
    
  parameters {
    string(name: 'version', defaultValue: '2.0.0', description: 'Pipeline version')
    booleanParam(name: 'executeTests', defaultValue: false, description: 'Flag variable to execute tests')
  }

  tools {
    nodejs "node"
  }
    
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

    stage('Check Credentials'){
      steps {
        echo 'Do something with CRED_1 credentials'

        withCredentials([usernamePassword(credentialsId: 'cred_2', usernameVariable: 'USER', passwordVariable: 'PWD')]){
          echo 'Do something with cred_2 credentials'
        }
      }
    }

    stage ('Check Docker'){
      steps {
        sh 'docker run -it --rm amazon/aws-cli --version'
      }
    }

    stage('Extra: prod confirmation'){
      when {
        expression { env.BRANCH_NAME == 'master' }
      }
      steps {
        echo 'Pipeline ran for master branch.'
        input(message="Confirm actions on production environment")
        echo 'Actions on production confirmed!'
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
      echo 'Build status: FAILED'  
    }

  }
}
