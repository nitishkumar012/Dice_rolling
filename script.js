

	var player1 = "Player 1";
	var player2 = "Player 2";

	
	function ChangeNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");

		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
	}

	function rollTheDice() {
		setTimeout(function () {
			var dicenumber1 = Math.floor(Math.random() * 6) + 1;
			var dicenumber2= Math.floor(Math.random() * 6) + 1;

			document.querySelector(".img1").setAttribute("src",
				"dice" +dicenumber1+ ".jpg");

			document.querySelector(".img2").setAttribute("src",
				"dice" + dicenumber2 + ".jpg");

			if (dicenumber1 === dicenumber2) {
				document.querySelector("h1").innerHTML = "Draw!";
			}

			else if (dicenumber1 < dicenumber2) {
				document.querySelector("h1").innerHTML
								= (player2 + " WINS!");
			}

			else {
				document.querySelector("h1").innerHTML
								= (player1 + " WINS!");
			}
		}, 2500);
	}
