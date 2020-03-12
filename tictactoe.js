var whichPlayer = 1;
var winText = document.getElementById('winner');
var allPlaySpots = document.querySelectorAll(".playspot");

for (let i = 0; i < allPlaySpots.length; i++) {
    allPlaySpots[i].addEventListener('click', function(){
        if (allPlaySpots[i].textContent || winText.classList.contains("blinking")) {
            // do nothing if a letter is there already, or there is a winner
        } else {
            if (whichPlayer === 1) {
                allPlaySpots[i].textContent = "X";
                winningCombos();
                whichPlayer = 2;
            } else {
                allPlaySpots[i].textContent = "O";
                winningCombos();
                whichPlayer = 1;
            }
        }
    })
}

var resetButton = document.getElementById("resetButton");

resetButton.addEventListener('click', function(){
    for (let i = 0; i < allPlaySpots.length; i++) {
        allPlaySpots[i].textContent = "";
        whichPlayer = 1;
        winText.classList.remove("blinking");
        winText.textContent = "Winning player flashing";
    }
})

function winningCombos () {
    checkForWin(0,1,2);
    checkForWin(3,4,5);
    checkForWin(6,7,8);
    checkForWin(0,3,6);
    checkForWin(1,4,7);
    checkForWin(2,5,8);
    checkForWin(0,4,8);
    checkForWin(2,4,6);

}

function checkForWin (first, second, third) {
    if (allPlaySpots[first].textContent !== "" && allPlaySpots[second].textContent !== "" && allPlaySpots[third].textContent !== "") {
        if (allPlaySpots[first].textContent === allPlaySpots[second].textContent && allPlaySpots[first].textContent === allPlaySpots[third].textContent) {
            if (whichPlayer === 1) {
                winText.textContent = "PLAYER ONE WINS!!!";
            } else {
                winText.textContent = "PLAYER TWO WINS!!!";
            }
            winText.classList.add("blinking");
        }
    }
}
