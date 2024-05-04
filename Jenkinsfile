node {
    stage("Build") {
       sh 'pwd'
       sh 'cd /Users/ashwajha/Desktop/test-react-app'
       def customImage = docker.build("test-application:latest")
    }

    stage("kubernetes deployment"){
        sh 'kubectl apply -f pod.yaml'
    }
}