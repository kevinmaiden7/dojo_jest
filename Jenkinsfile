Jenkinsfile (Declarative Pipeline)

pipeline {

  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/kevinmaiden7/jest_dojo'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm --version'
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
