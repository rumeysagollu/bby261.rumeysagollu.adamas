var kelimeler = new Array('kütüphane','koleksiyon','veri tabanı','açık erişim','otomasyon','issn','isbn','açık ders malzemeleri'); 
 var kelimeSayisi = kelimeler.length; 
 var secilenKelimeNo = Math.floor(Math.random() * kelimeSayisi); 
 var secilenKelime = kelimeler[secilenKelimeNo]; 
 var harfSayisi = secilenKelime.length; 
 var hataSayisi = 0
 
 var harfTutucu = new Array(); 


 for (var j=0; j<harfSayisi; j++){ 
         harfTutucu[j] = ' _ '; 
         harfTutucu[secilenKelime.indexOf(' ',j)] = ' - '; 
} 
 
 
 function harfKontrol(secilenHarf){ 
//     for (var i=0; i<harfSayisi; i++){ 
         bulunanHarfNo = secilenKelime.indexOf(secilenHarf); 
         if (bulunanHarfNo == -1){
          hatayiara()   
         } else {
         harfTutucu[bulunanHarfNo] = secilenHarf; 
         document.getElementById("harfTutucuGoster").innerHTML = harfTutucu.join('&nbsp');
         }
    // } 
 } 

function hatayiara(){
hataSayisi += 1
console.log(hataSayisi)
if (hataSayisi == 4){
console.log("Adam Asılsın")
document.getElementById('klavye').innerHTML=" Adam Asıldı. Oyunu Kaybettiniz. :( "
}
adamAs()
}

function adamAs(){
	switch(hataSayisi) {
    	
    	case 1:
        	document.getElementById('adam').src="adamas1png.png"
        break;
			case 2:
					document.getElementById('adam').src="adamas2png.png"
				break;
			case 3:
					document.getElementById('adam').src="adamas3png.png"
				break;
            case 4:
					document.getElementById('adam').src="adamas4png.png"
				break;
	}
}