function validasi() 
    {
	    var nama = document.getElementById("nama").value;
		var email = document.getElementById("email").value;
		var alamat = document.getElementById("alamat").value;
        
        if (nama != "" && email!="" && alamat !="") 
            {
				return true;
            }
        else
            {
				alert('Anda harus mengisi data dengan lengkap !');
			}
	}
                
function isi()
    {
        alert('Isi data sebelum masuk web');
    }