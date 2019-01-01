function masuk()
    {
        var konfir;
			
        konfir = confirm('Apakah data yang diisi sudah benar?');
			
        if(konfir == true)
            {
                document.location.href='fix.html';
            }
        else
            {
                document.location.href='masuk.html';
            }
    }

function gantiWarna() 
    {
        var warna = document.getElementById('warna');
        var button = document.getElementById('buttonWarna');

        if (button.innerHTML == "Hijau") 
            {
                warna.style.cssText = "background-color: green";
                button.innerHTML = "Merah";
            }
        else if (button.innerHTML == "Merah") 
            {
                warna.style.cssText = "background-color: red";
                button.innerHTML = "Kuning";
            }
        else if (button.innerHTML == "Kuning") 
            {
                warna.style.cssText = "background-color: #FFD700";
                button.innerHTML = "Biru";
            }
        else if (button.innerHTML == "Biru") 
            {
                warna.style.cssText = "background-color: 3498db";
                button.innerHTML = "Hijau";
            }
    }
