window.addEventListener('DOMContentLoaded', function() {
    var bilet = new URLSearchParams(window.location.search); //Adres çubuğundaki URL parametrelerini alır
    var ad = bilet.get('ad');
    var soyad = bilet.get('soyad');  //burda tek ek parametrelerimizi atıyoruz
    var dt = bilet.get('dt');
    var tc = bilet.get('tc');
    var nufus_sehir = bilet.get('nufus_sehir');
    var tel = bilet.get('tel');
    var firma = bilet.get('firma');
    var nereden = bilet.get('nereden');
    var nereye = bilet.get('nereye');

    // Sadece yeni kayıt varsa göster
    if(ad && soyad) {
        var html = `
            <div class="kayit-kart">
                <p><strong>BAŞARILI BİR ŞEKİLDE KAYDINIZ OLUŞTURULDU</strong></p>
                <ul>
                    <li><strong>Ad:</strong> ${ad}</li>
                    <li><strong>Soyad:</strong> ${soyad}</li>
                    <li><strong>Doğum Tarihi:</strong> ${dt}</li>
                    <li><strong>TC:</strong> ${tc}</li>
                    <li><strong>Şehir:</strong> ${nufus_sehir}</li>
                    <li><strong>Telefon:</strong> ${tel}</li>
                    <li><strong>Firma:</strong> ${firma}</li>
                    <li><strong>Nereden:</strong> ${nereden}</li>
                    <li><strong>Nereye:</strong> ${nereye}</li>
                </ul>
            </div>
        `;
        document.getElementById('yeni-kayit').innerHTML = html;
    }
});


      document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Sayfanın yenilenmesini engelle
        document.getElementById('contactForm').reset(); // Formu sıfırla

        // Mesaj gösterme yeri
        document.getElementById('responseMessage').style.display = 'block';
      });

      function toggleAnswer(id) {
      var element = document.getElementById(id);
     
      if (element.style.display === "none") {  //Eğer öğe görünmüyorsa (gizliyse), görünür yapar
        element.style.display = "block";
      } else {
        element.style.display = "none";  // burda da görünüyorsa geri gizler
      }
    }