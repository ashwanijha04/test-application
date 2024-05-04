node {
     stage("Build") {
       sh 'docker build -t test-application .'
       sh 'docker image list'

    }

    stage("kubernetes deployment"){
        sh 'kubectl apply -f pod.yaml'
    }
}