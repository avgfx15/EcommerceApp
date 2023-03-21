pipeline {
  agent any
  stages {
    stage("verify tooling") {
      steps {
        sh 'sudo docker-compose build'
        sh 'sudo docker-compose up -d'
      }
    }
  }
}