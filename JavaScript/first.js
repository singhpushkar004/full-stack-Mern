let user = window.prompt("Enter a User Type:  ");
let pass = window.prompt("Enter Password");
if(user=="student"){
    if(pass=='1234'){
        console.log("Login Successfully");
        
    }else{
        console.log("incorrect Password");
        
    }
}else{
    console.log("Your User Type is incorrect");
    
}