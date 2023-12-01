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

    // Weitere Event-Listener und Interaktionen...

    $candidateToggle.on("change", function() {
        if ($candidateToggle.is(":checked"))
            mySudokuJS.showCandidates();
        else
            mySudokuJS.hideCandidates();
    });
    
    $candidateToggle.trigger("change");
});