function randomGenerationImg() {

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = `images/${images[randomIndex]}`;
const imgElement = document.createElement("img");

imgElement.style.width = '600px'; 
imgElement.style.height = '600px';
imgElement.src = randomImage;
document.body.appendChild(imgElement);
}

randomGenerationImg();



