const slideShowSlide = document.querySelector(".slideShow-slide");
const slideShowImg = document.querySelectorAll(".slideShow-slide img");

const Slideshow = () => {
	const size = window.innerWidth;
	let counter = 0;

	slideShowSlide.style.transform = "translateX(" + -size * counter + "px)";
	slideShowSlide.style.transition = "transform ease-in-out 0.4s";

	const slideshow = () => {
		counter++;
		console.log(counter);
		if (counter == slideShowImg.length - 1) {
			counter = 0;
		}
		slideShowSlide.style.transform = "translateX(" + -size * counter + "px)";
	};

	setInterval(slideshow, 5000);
};

Slideshow();
