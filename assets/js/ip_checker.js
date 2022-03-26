function detect(){
    ipgeolocation();
    useragent();
  }
      async function ipgeolocation() {
    const d = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=fb76efc9286c46758e5b7e10f08df3ee&fields=country_code2,country_name,city,isp');
    const j = await d.json();
      document.getElementById("ip").innerHTML = j.ip;
      document.getElementById("country_name").innerHTML = j.country_name;
      document.getElementById("city").innerHTML = j.city;
      document.getElementById("isp").innerHTML = j.isp;
      code2 = j.country_code2;
      let initial = "svg/" + code2 + ".svg";
      document.getElementById("flag").setAttribute( "src" , initial );
  }
  async function useragent() {
  const d = await fetch('https://api.ipgeolocation.io/user-agent?apiKey=fb76efc9286c46758e5b7e10f08df3ee');
  const j = await d.json();
              let brows = [ "Edge" , "Safari" , "Chrome" , "Firefox" , "Opera" ] ;
              let bro = j.name ;
              if ( brows.includes( bro ) ) {
                  let brosvgp = "svg/" + bro + ".svg";
                  document.getElementById("bro").setAttribute( "src" , brosvgp );
                  let brover = "version-" + j.versionMajor ;
                  document.getElementById("browser").innerHTML = brover ;
              } else {
                  document.getElementById("browser").innerHTML = "browser unknown!" ;
              }
              let oss = [ "Android" , "iOS" , "Windows NT" , "Mac OS X" ] ;
              let osn = j.operatingSystem[ "name" ] ;
              if ( oss.includes( osn ) ) {
                  let ossvgp = "svg/" + osn + ".svg";
                  document.getElementById("ospic").setAttribute( "src" , ossvgp );
                  let osv = "version-" + j.operatingSystem[ "versionMajor" ] ;
                  document.getElementById("os").innerHTML = osv ;
              } else {
                  document.getElementById("os").innerHTML = "os unknown !" ;
              }
    }