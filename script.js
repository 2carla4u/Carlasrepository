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
  