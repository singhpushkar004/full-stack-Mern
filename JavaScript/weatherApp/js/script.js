async function ch(){
    // alert("Hello, World!");
    let cityName = document.getElementById("city").value;
    const key = '69555c187952c3d47c08ea1815012908';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
   const res = await fetch(api)
   const data = await res.json();
   console.log(data);
    document.querySelector("#box h1").innerHTML="Temp - "+data.main.temp+" ℃";
    document.querySelector("#box h2").innerHTML=data.name;
    if(data.weather[0].main=="Haze"){
        let a = document.querySelector("#box img");
        // console.log(a);
        a.src='./images/snow.png';
        
    }
    else if(data.weather[0].main=="Clear"){
         let a = document.querySelector("#box img");
        // console.log(a);
        a.src='./images/clear.png';
    }
     else if(data.weather[0].main=="Clouds"){
         let a = document.querySelector("#box img");
        // console.log(a);
        a.src='./images/clouds.png';
    }
   
}