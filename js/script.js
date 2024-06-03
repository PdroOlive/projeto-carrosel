const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
const totalImages = images.length;
const onImgYearly = document.querySelector("#image-yearly");
const textYearly = document.querySelector("#image-yearly ul");
const onImgMonthly = document.querySelector("#image-monthly");
const textMonthly = document.querySelector("#image-monthly ul");
const onImgWeekly = document.querySelector("#image-weekly");
const textWeekly = document.querySelector("#image-weekly ul");


function nextImage() 
{
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}
function updateCarousel() 
{
    let newPosition = -currentIndex * 100 + '%';
    carouselImages.style.transform = `translateX(${newPosition})`;
}




function imgSwitchOn(image, text)
{
    text.style.visibility = `visible`;
    text.style.opacity = `1`;
    image.style.height = `500px`;
    text.style.justifyContent = `space-evenly`
}
function imgSwitchOff(image, text)
{
    text.style.visibility = `hidden`;
    text.style.opacity = `0`;
    image.style.height = ``;
}






setInterval(nextImage, 3000);
onImgYearly.addEventListener("click", () => imgSwitchOn(onImgYearly, textYearly));
onImgYearly.addEventListener("mouseleave", () => imgSwitchOff(onImgYearly, textYearly));
onImgMonthly.addEventListener("click", () => imgSwitchOn(onImgMonthly, textMonthly));
onImgMonthly.addEventListener("mouseleave", () => imgSwitchOff(onImgMonthly, textMonthly));
onImgWeekly.addEventListener("click", () => imgSwitchOn(onImgWeekly, textWeekly));
onImgWeekly.addEventListener("mouseleave", () => imgSwitchOff(onImgWeekly, textWeekly));

