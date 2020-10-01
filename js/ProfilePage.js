fetch("https://json.geoiplookup.io/")
	.then((response) => response.json())
	.then((data = Response) => {
		fetch(`https://get.geojs.io/v1/ip/country/${data.ip}.json`)
			.then((mydata) => mydata.json())
			.then((myresponse) => {
				console.log(myresponse);
				const flagImg = document.querySelector("#flagImg");
				flagImg.src = `https://flagcdn.com/224x168/${myresponse.country.ToLower()}.png`;
			});
	});

const navigation = () => {
	const navigation = document.querySelector(".hideNavigation");
	const size = navigation.clientWidth;
	navigation.style.transition = "transform 0.4s ease-in-out";
	navigation.style.transform = `translateX(${-size}px)`;
	const mainsection = document.querySelector("#mainSection");
	mainsection.style.transition = "transform 0.8s ease-in-out";
	mainsection.classList.add("mainSection");
	mainsection.setAttribute("id", "");
};

navigation();

const closeNavigationOnResize = () => {
	const navigation = document.querySelector("#navigation");
	if (navigation.classList.contains("hideNavigation")) {
		const navigation = document.querySelector(".hideNavigation");
		const size = navigation.clientWidth;
		navigation.style.transition = "transform 0.0s ease-in-out";
		navigation.style.transform = `translateX(${-size}px)`;
	}
};

window.addEventListener("resize", () => {
	closeNavigationOnResize();
});
