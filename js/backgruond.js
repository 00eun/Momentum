const bgImg = ["0.jpg", "1.jpg", "2.jpg"];

const todaysImg = bgImg[Math.floor(Math.random() * bgImg.length)];

const newImg = document.createElement("img");
//newImg.src = `img/${todaysImg}`;
document.body.appendChild(newImg);

document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(img/${todaysImg})`;
