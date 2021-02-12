pipeline {

  agent any
    
  tools {nodejs "node"}
    
  stages {
     
    stage('Setup') {
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
}
