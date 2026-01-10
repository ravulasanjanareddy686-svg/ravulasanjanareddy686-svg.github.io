function dispMessage(){
    // a=10;
    // b=20;
    // c=a+b
    // alert(document.getElementById("txtEmail").value)
    // lblMessage.innerHTML= document.getElementById("txtEmail").value
    // lblMessage.innerHTML = document.getElementById("txtEmail").value + "-" document.getElementById("pass").value
    let email=document.getElementById("txtEmail").value 
    let p=document.getElementById("pass").value
    if(email==="john@gmail.com" && p==="1234"){
        lblMessage.innerHTML="welcome";
    }
    else{
        lblMessage.innerHTML="access denied";
    }
    
}
function showlogin(){
    let str = `
    <h1>LOGIN FORM</h1>
        <p><label id="lblMessage"></label></p>
       <p ><input type ="text" id="txtEmail"></p>
       <p><input type="password" id="pass"></p>
       <p><button class="login-btn" onclick="dispMessage()">LOGIN</button></p>
       <hr>
       <p><button class="register-btn" onclick="showRegistrationform()">CREATE ACCOUNT</button></p>
    `
    root.innerHTML = str
}
function showRegistrationform(){
    let str=`
    <h3>Registration form</h3>
    `
    root.innerHTML=str
}