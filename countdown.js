var a  = new Date();

a.setFullYear(2018, 7, 28 , 8 );

var DateString;
var today  =new Date();

setInterval(GetDate(today,a), 1000);

function GetDate(today,finale){
    var Rem = new Date(finale.getTime() - today.getTime() );
    console.log(finale) ;
    console.log(today);
    var Days = (Rem / ( 1000 * 60 * 60 * 24 ) );
    var Hours = ( 24 - today.getHours() );
    var Minutes = ( 60  - today.getMinutes());
    var Seconds = 60  - today.getSeconds();
    document.getElementById('countdown').innerHTML = Days+':'+Hours+':'+Minutes+':'+Seconds ;
};

