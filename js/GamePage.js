slideShow(".newGamesSlideShow", 5);

let gamesArray = [];

for (let i = 0; i < document.querySelector(".games").childElementCount; i++) {
	gamesArray.push(
		document.querySelector(".games").children[i].className.toLowerCase()
	);
	console.log(gamesArray);
}

const gamesSearchInput = document.querySelector("#searchGameInput");

gamesSearchInput.addEventListener("search", () => {
	gamesArray.forEach((game) => {
		let gameDiv = document.getElementsByClassName(`${game}`);
		if (
			game.includes(gamesSearchInput.value.toLowerCase()) ||
			gamesSearchInput.value.toLowerCase() == game
		) {
			gameDiv[0].style.display = "block";
		} else {
			console.log("asd");
			gameDiv[0].style.display = "none";
		}
	});
});
