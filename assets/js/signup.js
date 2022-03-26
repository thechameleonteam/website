function Register() {
    let gmail = document.getElementById( "gmail" ).value ;
    let data = {
    "Operation" : "Register" ,
    "Gmail" : gmail ,
    }
    let j = JSON.stringify( data )
    document.getElementById( "res" ).innerHTML = j
}