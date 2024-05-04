node {
     stage("Build") {
       sh 'pwd'
       sh 'docker build -t test-application .'
       sh 'docker image list'
       // Push Docker Hub
       // sh 'docker push'
    }

    stage("kubernetes deployment"){
        sh 'kubectl apply -f pod.yaml'
    }
}