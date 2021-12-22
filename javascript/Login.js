function checkLogin() { 
    var username=document.getElementById("username").value; 
    var password=document.getElementById("password").value; 
    if((username == "user123" && password == "123456")||(username == "daryl123" && "akuLulus123")){ 
        alert("Login Successful"); 
        window.location.replace("Katalog.html")
        return false; 
    }
    else
    { 
        alert("incorrect username or password!"); 
    } 
}