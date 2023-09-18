const nextButton = document.getElementById("nextbutton");
const prevButton = document.getElementById("backbutton");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

document.addEventListener("DOMContentLoaded", function() {
    nextButton.addEventListener("click", function() {
        page1.classList.add("hidden");
        page2.classList.remove("hidden");
        displayRandomImage();
    });

    prevButton.addEventListener("click", function() {
        page2.classList.add("hidden");
        page1.classList.remove("hidden");
    });
});

const imageArray = [
    'media/hit1.png',
    'media/hit2.png',
    'media/hit3.png',
    'media/hit4.png',
];

const imageContainer = document.getElementById('imageContainer');
const randomImage = document.getElementById('randomImage');

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImageUrl = imageArray[randomIndex];
    return randomImageUrl;
}

function displayRandomImage() {
    const randomImageUrl = getRandomImage();
    randomImage.src = randomImageUrl;
}

