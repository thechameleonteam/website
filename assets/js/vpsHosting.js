function getspecs() {
    let os = document.getElementsByName( "options-outlined-2" ) ;
    let cc = document.getElementsByName( "options-outlined-3" ) ;
    let b,c = "" ;
    for ( let i = 0 ; i < os.length ; i++ ) {
      if ( os[i].checked == true ) {
        b = os[i].value ;
        break ;
      }
    }
    for ( let i = 0 ; i < cc.length ; i++ ) {
      if ( cc[i].checked == true ) {
        c = cc[i].value ;
        break ;
      }
    }
    if ( b != "" ) {
      let data = {
        "OS" : b ,
        "CC" : c
      } ;
      let j = JSON.stringify( data ) ;
      document.getElementById( "test" ).innerHTML = j ;
    } else {
      document.getElementById( "test" ).innerHTML = "select a radio first !" ;
    }
  }