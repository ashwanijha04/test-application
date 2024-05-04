node {
     stage("Build") {
       def customImage = docker.build("test-application:latest")
       sh 'pwd'
       sh 'cd /Users/ashwajha/Desktop/test-react-app'
       // sh 'docker build -t test-application .'
       // sh 'docker image list'
       // Push Docker Hub
       // sh 'docker push'
    }

    stage("kubernetes deployment"){
        sh 'kubectl apply -f pod.yaml'
    }
}