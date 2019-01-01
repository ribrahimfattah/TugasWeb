function gantiWarna() 
    {
        var warna = document.getElementById('warna');
        var button = document.getElementById('buttonWarna');

        if (button.innerHTML == "Hijau") 
            {
                warna.style.cssText = "background-color: #7FFF00";
                button.innerHTML = "Merah";
            }
        else if (button.innerHTML == "Merah") 
            {
                warna.style.cssText = "background-color: red";
                button.innerHTML = "Abu-abu";
            }
        else if (button.innerHTML == "Abu-abu") 
            {
                warna.style.cssText = "background-color: #778899";
                button.innerHTML = "Biru";
            }
        else if (button.innerHTML == "Biru") 
            {
                warna.style.cssText = "background-color: 3498db";
                button.innerHTML = "Hijau";
            }
    }
