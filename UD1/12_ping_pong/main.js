function pingPong() {

    for (let i= 0 ; i <= 100; i++){
        if(i%10 == 0 ){
        console.log(i +" PONG")
        }else if(i%5 == 0 ){
        console.log(i +" PING")
        }else{
            console.log(i)
        }
        
    }

    
}

pingPong()