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
