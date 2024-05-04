node {
     stage("Build") {
       def customImage = docker.build("test-application:latest")
       sh 'pwd'
       sh 'cd /Users/ashwajha/Desktop/test-react-app'
    }

    stage("kubernetes deployment"){
        sh 'kubectl apply -f pod.yaml'
    }
}