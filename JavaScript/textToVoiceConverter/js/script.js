function convert(){
    // alert("Hii");
    let text = document.querySelector('.box input').value.trim();
    // console.log(text);
    if(text==''){
        alert("Please Enter Text")
        return;
    }
    const spch = new SpeechSynthesisUtterance(text);
    
    window.speechSynthesis.speak(spch);
    
}

function cnvrt(){
    let a =  webkitSpeechRecognition;
    let rec = new a()
    rec.start();
    rec.continuous = true;
    rec.lang = 'en-us';
    rec.onresult =function (b){
        document.querySelector('.box h1').innerHTML  = b.results[0][0].transcript;
        
    }
    
    
}

