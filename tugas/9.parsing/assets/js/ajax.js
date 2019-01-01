function loadXML(file)
{
    var xmlHttp;
    if(window.XMLHttpRequest)
    {
        //instansiasi untuk IE7+, FIrefox, Chrome, Opera, Safari
        xmlHttp=new XMLHttpRequest();
    }
    else
    {
        //Instansi untuk IE5, IE6
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange=function()
    {
        if(xmlHttp.readyState==4 && xmlHttp.status==200)
        {
            var xml=xmlHttp.responseXML;
            CD=xml.documentElement.getElementsByTagName("CD");
            TITLE=CD[0].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
            ARTIST=CD[0].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
            COUNTRY=CD[0].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
            COMPANY=CD[0].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
            PRICE=CD[0].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
            YEAR=CD[0].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
            
            document.getElementById("CATALOG").innerHTML=TITLE;
            document.getElementById("CATALOG1").innerHTML=ARTIST;
            document.getElementById("CATALOG2").innerHTML=COUNTRY;
            document.getElementById("CATALOG3").innerHTML=COMPANY;
            document.getElementById("CATALOG4").innerHTML=PRICE;
            document.getElementById("CATALOG5").innerHTML=YEAR;

            TITLE=CD[1].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
            ARTIST=CD[1].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
            COUNTRY=CD[1].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
            COMPANY=CD[1].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
            PRICE=CD[1].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
            YEAR=CD[1].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

            document.getElementById("CATALOG6").innerHTML=TITLE;
            document.getElementById("CATALOG7").innerHTML=ARTIST;
            document.getElementById("CATALOG8").innerHTML=COUNTRY;
            document.getElementById("CATALOG9").innerHTML=COMPANY;
            document.getElementById("CATALOG10").innerHTML=PRICE;
            document.getElementById("CATALOG11").innerHTML=YEAR;

            TITLE=CD[2].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
            ARTIST=CD[2].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
            COUNTRY=CD[2].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
            COMPANY=CD[2].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
            PRICE=CD[2].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
            YEAR=CD[2].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

            document.getElementById("CATALOG12").innerHTML=TITLE;
            document.getElementById("CATALOG13").innerHTML=ARTIST;
            document.getElementById("CATALOG14").innerHTML=COUNTRY;
            document.getElementById("CATALOG15").innerHTML=COMPANY;
            document.getElementById("CATALOG16").innerHTML=PRICE;
            document.getElementById("CATALOG17").innerHTML=YEAR;

            TITLE=CD[3].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
            ARTIST=CD[3].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
            COUNTRY=CD[3].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
            COMPANY=CD[3].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
            PRICE=CD[3].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
            YEAR=CD[3].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

            document.getElementById("CATALOG18").innerHTML=TITLE;
            document.getElementById("CATALOG19").innerHTML=ARTIST;
            document.getElementById("CATALOG20").innerHTML=COUNTRY;
            document.getElementById("CATALOG21").innerHTML=COMPANY;
            document.getElementById("CATALOG22").innerHTML=PRICE;
            document.getElementById("CATALOG23").innerHTML=YEAR;

            TITLE=CD[4].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
            ARTIST=CD[4].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
            COUNTRY=CD[4].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
            COMPANY=CD[4].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
            PRICE=CD[4].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
            YEAR=CD[4].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

            document.getElementById("CATALOG24").innerHTML=TITLE;
            document.getElementById("CATALOG25").innerHTML=ARTIST;
            document.getElementById("CATALOG26").innerHTML=COUNTRY;
            document.getElementById("CATALOG27").innerHTML=COMPANY;
            document.getElementById("CATALOG28").innerHTML=PRICE;
            document.getElementById("CATALOG29").innerHTML=YEAR;

            TITLE=CD[5].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
            ARTIST=CD[5].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
            COUNTRY=CD[5].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
            COMPANY=CD[5].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
            PRICE=CD[5].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
            YEAR=CD[5].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

            document.getElementById("CATALOG30").innerHTML=TITLE;
            document.getElementById("CATALOG31").innerHTML=ARTIST;
            document.getElementById("CATALOG32").innerHTML=COUNTRY;
            document.getElementById("CATALOG33").innerHTML=COMPANY;
            document.getElementById("CATALOG34").innerHTML=PRICE;
            document.getElementById("CATALOG35").innerHTML=YEAR;
        }
    }

    xmlHttp.open("GET",file,true);
    xmlHttp.send("");
}