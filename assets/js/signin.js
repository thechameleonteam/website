function showhide() {
    var pass = document.getElementById("password") ;
    if ( pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
function Signin() {
    let gmail = document.getElementById( "gmail" ).value ;
    let password = document.getElementById( "password" ).value ;
    let data = {
    "Operation" : "Login" ,
    "Gmail" : gmail ,
    "Password" : password
    }
    let j = JSON.stringify( data )
    document.getElementById( "res" ).innerHTML = j
}