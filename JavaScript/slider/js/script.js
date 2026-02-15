// window.alert("Heyy")
const ar = ["./images/slider1.png","./images/slider2.jpg","./images/slider3.png"];
let img = document.querySelector('.slider img');
let i = 0;
nxt.addEventListener('click',()=>{
    // console.log(img.src);
    i = i+1;
    if(i==ar.length){
        i=0;
    }
    img.src = ar[i];
    
})
pre.addEventListener('click',()=>{
    i = i-1;
    if(i<0){
        i = ar.length-1
    }
    img.src = ar[i];
})
setInterval(()=>{
  i = i+1;
    if(i==ar.length){
        i=0;
    }
    img.src = ar[i];
},2000)