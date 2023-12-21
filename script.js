document.addEventListener('DOMContentLoaded', function() {
  var $candidateToggle = $(".js-candidate-toggle");
  var $generateBoardBtnEasy = $(".js-generate-board-btn--easy");
  var $solveStepBtn = $(".js-solve-step-btn");
  var $solveAllBtn = $(".js-solve-all-btn");
  var $clearBoardBtn = $(".js-clear-board-btn");

  var mySudokuJS = $("#sudoku").sudokuJS({
      difficulty: "very hard",
      // weitere Konfigurationen...
  });
 // Setzen Sie das Enddatum für den Countdown
 var countDownDate = new Date("Jan 12, 2024 20:00:00").getTime();
  
 // Aktualisieren Sie den Countdown alle 1 Sekunde
 var x = setInterval(function() {

   // Holen Sie das aktuelle Datum und die Uhrzeit
   var now = new Date().getTime();

   // Berechnen Sie den Abstand zwischen dem aktuellen Datum und dem Enddatum
   var distance = countDownDate - now;

   // Berechnen Sie Tage, Stunden, Minuten und Sekunden
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Anzeigen des Countdowns in einem Element mit der ID "countdown"
   document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

   // Wenn der Countdown abgelaufen ist, zeigen Sie eine Nachricht an
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("countdown").innerHTML = "EXPIRED";
   }
 }, 1000);
 

const toggleButton = document.getElementById("toggleButton");
const hiddenText = document.getElementById("hiddenText");
let isHidden = true;

toggleButton.addEventListener("click", function () {
    if (isHidden) {
        hiddenText.style.display = "block";
        toggleButton.textContent = "Ausblenden";
        toggleButton.style.animation = "none";
    } else {
        hiddenText.style.display = "none";
        toggleButton.textContent = "Einblenden";
        toggleButton.style.animation = "pulse 1s infinite alternate";
    }
    isHidden = !isHidden;
});

const playButton = document.getElementById("playButton");
const audio = document.getElementById("myAudio");

playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Abspielen";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.sudoku-cell');

    cells.forEach(cell => {
        cell.addEventListener('input', function () {
        });
    });
});

  $candidateToggle.on("change", function() {
      if ($candidateToggle.is(":checked"))
          mySudokuJS.showCandidates();
      else
          mySudokuJS.hideCandidates();
  });

  $candidateToggle.trigger("change");
});
// Funktion, die bei Änderungen am DOM aufgerufen wird
function handleDOMChanges(mutationsList, observer) {
  for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
          // Handle the DOM changes here
          console.log('DOM node inserted:', mutation.target);
      }
  }
}

// Erstelle eine Instanz von MutationObserver mit der oben definierten Funktion
const observer = new MutationObserver(handleDOMChanges);

// Konfiguration für MutationObserver (überwache Änderungen an der Kinderliste des gesamten Dokuments)
const config = { childList: true, subtree: true };

// Starte die Überwachung mit der Konfiguration
observer.observe(document, config);
