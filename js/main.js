let spelerTotal;
let computerTotal;  
//Probeer document.querySelector of querySelectorAll
let bidAmmount = document.getElementsByName("bidAmmount");

//Onclick veranderen door queryselector en addEventListner
const higherBtn = document.querySelector('.higher');
if (higherBtn) {
    higherBtn.addEventListener('click', higher);
}

const RNG = function() {
    spelerTotal = 0;
    computerTotal = 0;
    
    while (spelerTotal === computerTotal) {
        let SD1 = Math.floor(Math.random() * 6) +1;
        let SD2 = Math.floor(Math.random() * 6) +1;
        let CD1 = Math.floor(Math.random() * 6) +1;
    	let CD2 = Math.floor(Math.random() * 6) +1;

		spelerTotal = SD1 + SD2;
		computerTotal = CD1 + CD2;
		console.log(spelerTotal, computerTotal);
    }

    buttonToggle();
}

const buttonToggle = function() {
    document.querySelectorAll(".buttons button").forEach(
        function(button) {
            button.disabled = !button.disabled;
        }
    );
}

const higher = function() {
    if (spelerTotal > computerTotal) {
        console.log("WINNER");

    } else {
		console.log("loser")
	}

    buttonToggle();

}

const lower = function() {
    //console.log("lager test")
    if (spelerTotal < computerTotal) {
        console.log("WINNER");
    } else {
		console.log("loser")
	}

    buttonToggle();
}

/*
addEventListener("DOMContentLoaded", function() {
	RNG();
});
*/