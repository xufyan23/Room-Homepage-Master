const toggleBtn = document.querySelector(".nav-toggle");
const overlay = document.querySelector(".main");
const navLinks = document.querySelector(".links");
const close = document.querySelector(".close");
let slideArray = document.querySelectorAll(".slide")
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

toggleBtn.addEventListener("click", function () {
	navLinks.classList.toggle("show-link")
	overlay.classList.toggle("overlay")
	close.classList.toggle("close")
})

function getActiveIndex() {
	let currentIndex = 0;
	for (let i = 0; i < slideArray.length; i++) {
		if (slideArray[i].classList.contains('active')) {
			currentIndex = Array.prototype.indexOf.call(slideArray, slideArray[i]);
		}
	}
	return currentIndex;
}

nextBtn.addEventListener('click', function () {
	let currentIndex = getActiveIndex();
	slideArray[currentIndex].classList.remove("active")
	currentIndex = currentIndex + 1;
	if (currentIndex >= slideArray.length) {
		currentIndex = 0;
	}
	slideArray[currentIndex].classList.add("active")
})

prevBtn.addEventListener('click', function () {
	let currentIndex = getActiveIndex();
	slideArray[currentIndex].classList.remove("active");
	currentIndex = currentIndex - 1;

	if (currentIndex < 0) {
		currentIndex = slideArray.length - 1
	}
	slideArray[currentIndex].classList.add("active")
})
