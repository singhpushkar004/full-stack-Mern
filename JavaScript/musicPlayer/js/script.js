// alert("Hii")
let audio = document.querySelector('audio');
console.log(audio);
const ar = [
    {
        "title":"pahle bhi",
        "path":"./music/song1.mp3",
        "image":"./img/pehle.webp"
    },
    {
        "title":"ishq hai",
        "path":"./music/song2.mp3",
        "image":"./img/ishq.jpg"
    },
    {
        "title":"soulmate",
        "path":"./music/song3.mp3",
        "image":"./img/soulmate.jpg"
    }
]

let i = 0;

function aplay(){
    audio.play();
    // console.log(audio);
   
    document.querySelector('.icon .fa-pause').style.display='block'
    document.querySelector('.icon .fa-play').style.display='none'
    dur()
}
function apause(){
    audio.pause();
     document.querySelector('.icon .fa-pause').style.display='none'
    document.querySelector('.icon .fa-play').style.display='block'
    // dur()
}
function nxt(){
    i=i+1;
    if(i==ar.length){
        i=0;
    }
    audio.src=ar[i].path
    audio.play();
     document.querySelector('.icon .fa-pause').style.display='block'
    document.querySelector('.icon .fa-play').style.display='none'
    document.querySelector('img').src = ar[i].image
    document.getElementById('title').innerHTML=ar[i].title
    dur()
}
function pre(){
    i= i-1;
    if(i<0){
        i = ar.length-1
    }
     audio.src=ar[i].path
    audio.play();
     document.querySelector('.icon .fa-pause').style.display='block'
    document.querySelector('.icon .fa-play').style.display='none'
    document.querySelector('img').src = ar[i].image
    dur()
}
function dur(){
     
    setInterval(()=>{
      console.log(audio.currentTime);
      
        let p = (audio.currentTime / audio.duration) * 100;
        document.querySelector('.progress-bar').style.width = p + '%';
    },1000)
}   