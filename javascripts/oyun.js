//burda hangi şehirden hangi şehre olan uçuşların fiyatlarını yazıdım
const flights = [
  { route: "İstanbul - Paris", price: 20000 },
  { route: "Ankara - Berlin", price: 3000 },
  { route: "İzmir - Londra", price: 4000 },
  { route: "Antalya - Amsterdam", price: 15000 },
  { route: "İstanbul - New York", price: 10000 }
];

let selectedFlight; //

function loadFlight() {
  selectedFlight = flights[Math.floor(Math.random() * flights.length)]; // burda sayıyı aşağı yuvarlamak için ve rastgele sayı seçmek için kod yazdım
  document.getElementById("route-info").textContent =
    `"${selectedFlight.route}" rotası için bilet fiyatını tahmin edin.`;
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value); // text kutusundaki değeri almak için yazdık
  const result = document.getElementById("result"); 

  if (isNaN(guess)) {
    result.textContent = "Lütfen geçerli bir sayı girin.!";
    return; // eğer kullanıcı geçersiz bişey girdiyse bildirmek için kullandık
  }

  const diff = Math.abs(selectedFlight.price - guess);
  if (diff === 0) {
    result.textContent = `Tebrikler! Tam doğru: ${selectedFlight.price} TL`;
  } else if (diff <= 250) {
    result.textContent = `Çok yaklaştınız! Gerçek fiyat: ${selectedFlight.price} TL`;
  } else {
    result.textContent = `Maalesef olmadı. Gerçek fiyat: ${selectedFlight.price} TL`;
  }

  setTimeout(loadFlight, 3000); // 3 saniye sonra yeni bir tahmin gelsin
}

window.onload = loadFlight;
