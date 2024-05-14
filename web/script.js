var winCount = 0;
var loseCount = 0;
var tieCount = 0;
function resetCounts() {
    // Mindhárom számláló nullázása
    winCount = 0;
    loseCount = 0;
    tieCount = 0;

    // Az eredmények megjelenítése
    document.getElementById("winCount").textContent = winCount;
    document.getElementById("loseCount").textContent = loseCount;
    document.getElementById("tieCount").textContent = tieCount;

    document.getElementById("result").innerHTML = "";
}

function play(userChoice) {
    // Megkeressük az összes képet és eltároljuk őket egy tömbben
    var images = document.querySelectorAll('img');

    // Végigmegyünk az összes képen és hozzáadjuk az eseményfigyelőt
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Kép nagyobbá tétele
            image.style.transform = 'scale(1.1)';
            // Keret hozzáadása
            image.style.border = '3px solid red';

            // Időzítő indítása a visszaállításhoz
            setTimeout(function() {
                // Kép visszaállítása az eredeti méretre
                image.style.transform = 'scale(1)';
                // Keret eltávolítása
                image.style.border = 'none';
            }, 1000); // 1000 millimásodperc = 1 másodperc
        });
    });

    var options = ["kő", "papír", "olló"];
    var computerChoice = options[Math.floor(Math.random() * 3)]; // Gép véletlenszerű választása

    // Kiírjuk, hogy mit választott a gép
    var resultText = "A gép " + computerChoice + "-t választott. ";

    // Eredmény tárolására szolgáló változó
    var result;

    // Döntetlen eset
    if (userChoice === computerChoice) {
        result = '<img src="tie.jpg" alt="Döntetlen! Mindketten ugyanazt választottátok">';
        resultText += "Döntetlen!";
        tieCount++;
    }
    // Nyertes esetek
    else if (
        (userChoice === "kő" && computerChoice === "olló") ||
        (userChoice === "papír" && computerChoice === "kő") ||
        (userChoice === "olló" && computerChoice === "papír")
    ) {
        result = '<img src="win.gif" alt="Gratulálok, te nyertél!">';
        resultText += "Gratulálok, te nyertél!";
        winCount++;
    }
    // Vesztett esetek
    else {
        result = '<img src="lose.gif" alt="Sajnálom, vesztettél!">';
        resultText += "Sajnálom, vesztettél!";
        loseCount++;
    }

    // Frissítjük a számlálókat
    document.getElementById("result").innerHTML = resultText + "<br>" + result;
    document.getElementById("winCount").textContent = winCount;
    document.getElementById("loseCount").textContent = loseCount;
    document.getElementById("tieCount").textContent = tieCount;
}
