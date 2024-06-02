let carouselImages = document.querySelector('.carousel-images');
let images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
let totalImages = images.length;
let onImgYearly = document.querySelector("#image-yearly");
let textYearly = document.querySelector("#image-yearly ul");
let onImgMonthly = document.querySelector("#image-monthly");
let textMonthly = document.querySelector("#image-monthly ul");
let onImgWeekly = document.querySelector("#image-weekly");
let textWeekly = document.querySelector("#image-weekly ul");
const card = document.getElementById("icard");
const imageVisa = document.getElementById("image-visa");
const imageElo = document.getElementById("image-elo");
const imageMaster = document.getElementById("image-master");
const valueTot = document.getElementById("container-value");
const containerTotMonth = document.getElementById("container-value-month");
const containerTotWeek = document.getElementById("container-value-week");
let inputCupom = document.getElementById("icupom");
const saleOff = document.getElementById("saleoff");
const inputCVV = document.getElementById("icvv");
const validatedInput = document.getElementById("input-validated");
const inputDate = document.getElementById("idate");
const containerCard = document.getElementById("container-input-card");
const containerPix = document.getElementById("container-payment-pix");
const op = document.getElementById("option1");
const inputParcel = document.querySelector("#iparcel");
const inputName = document.getElementById("iname");
const menuCard = document.getElementById("menu-card");
const menuPix = document.getElementById("container-pix");
const closeExec = document.getElementById("close-card");
const closePix = document.getElementById("close-pix");
const checkButton = document.getElementById("check-button");


let price = 1368;
const priceMonth = 120;
const priceWeek = 64.99;
let calcResult = 0;
const regCharacter = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;






function isError(error)
{
    error.style.outline = `2px solid red`;
}
function isValid(valid)
{
    valid.style.outline = `2px solid #A5E381`;
}

function createObjectCard(height)
{
    this.height = height;
}
let imgYearly = new createObjectCard("500px");
let imgMonthly = new createObjectCard("500px");
let imgWeekly = new createObjectCard("500px");


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
    image.style.height = imgMonthly.height;
    text.style.gap = `70px`
}
function imgSwitchOff(image, text)
{
    text.style.visibility = `hidden`;
    text.style.opacity = `0`;
    image.style.height = ``;
}
onImgYearly.addEventListener("click", () => imgSwitchOn(onImgYearly, textYearly));
onImgYearly.addEventListener("mouseleave", () => imgSwitchOff(onImgYearly, textYearly));
onImgMonthly.addEventListener("click", () => imgSwitchOn(onImgMonthly, textMonthly));
onImgMonthly.addEventListener("mouseleave", () => imgSwitchOff(onImgMonthly, textMonthly));
onImgWeekly.addEventListener("click", () => imgSwitchOn(onImgWeekly, textWeekly));
onImgWeekly.addEventListener("mouseleave", () => imgSwitchOff(onImgWeekly, textWeekly));

function flagOn(flag)
{
    flag.style.filter = `grayscale(0)`;
}
function flagOff(flag)
{
    flag.style.filter = ``;
    card.style.outline = `2px solid white`;
}
function checkCardFlag()
{
    let cardFlag = Number(card.value);
    

    if(cardFlag === 4)
    {
        flagOn(imageVisa);
        isValid(card);
        inputParcel.style.display = `block`;
    }
    else if (cardFlag === 5)
    {
        flagOn(imageMaster);
        isValid(card);
        inputParcel.style.display = `block`;
    }
    else if (cardFlag === 6)
    {
        flagOn(imageElo);
        isValid(card);
        inputParcel.style.display = `block`;
    }
    else if (cardFlag == "")
    {
        flagOff(imageVisa);
        flagOff(imageMaster);
        flagOff(imageElo);

        inputParcel.style.display = `none`;
    }
}

function showValue(num, container)
{
    let formatPrice = num.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    container.innerText = `Valor Total: ${formatPrice}`;
    container.style.opacity = `1`;
    container.style.visibility = `visible`;
}


function ticketSaleOff(num)
{
    let ticket = `promo5`;
    let inputTicket = inputCupom.value;
    if(inputTicket === ticket)
    {
        saleOff.innerText = `Desconto de 5% Off!!`;                           
        valueTot.innerText = `Valor Total: ${(calcResult = (num - ((5/100) * num)).toLocaleString("pt-BR" , {style: "currency", currency: "BRL"}))}`;
        op.innerText = `1x ${(calcResult = (num - ((5/100) * num)).toLocaleString("pt-BR" , {style: "currency", currency: "BRL"}))}`;
    }
    return num
}




function cardInsert()
{
    let cardLength = card.value.length;
    if(cardLength === 4 || cardLength === 9 || cardLength === 14)
    {
        card.value += " ";
    }
}


function checkCVV()
{
    let cvvCurrent = inputCVV.value.length;

    if (cvvCurrent == ``)
    {
        inputCVV.style.outline = `2px solid white`;
    }
    else if(cvvCurrent > 3 || cvvCurrent < 3)
    {
        inputCVV.style.outline = `2px solid red`;
        validatedInput.classList.add("show-cvv");
        validatedInput.style.color = `red`;
    }
    else if (cvvCurrent === 3)
    {
        inputCVV.style.outline = `2px solid #A5E381`;
        validatedInput.classList.add("show-cvv");
        validatedInput.style.color = `#A5E381`;
    }
    
}

function formatDate()
{
    let dataNew = inputDate.value.length;
    if(dataNew === 2)
    {
        inputDate.value += "/";
    }
    
}
function checkErrorDate()
{
    let dataNew = inputDate.value.length;
    if(dataNew == "")
    {
        inputDate.style.outline = `2px solid white`;
    }
    else if (dataNew === 5)
    {
        isValid(inputDate);
    }
    else if( dataNew < 5)
    {
        isError(inputDate);
    }
}

function showCard(container)
{
    if(innerWidth >= 1201)
    {
        document.body.style.marginBlock = `0em`;
    }
    else
    {
        document.body.style.marginBlock = `5em`;
    }
    container.style.display = `flex`;
    
}
function closeCard(container)
{
    document.body.style.marginBlock = `0em`;
    container.style.display = `none`;
    flagOff(card)
    flagOff(imageVisa)
    flagOff(imageMaster)
    flagOff(imageElo)
    card.value = "";
    inputName.style.outline = `2px solid white`;
    inputName.value = "";
    inputParcel.style.display = `none`;
    inputDate.style.outline = `2px solid white`;
    inputCVV.style.outline = `2px solid white`;
    validatedInput.innerText = ``;
    inputCVV.value = "";
    inputDate.value = "";
}



function parcelCard()
{
    const op2 = document.getElementById("option2");
    const op3 = document.getElementById("option3");
    const op4 = document.getElementById("option4");
    const op5 = document.getElementById("option5");
    const op6 = document.getElementById("option6");
    const op7 = document.getElementById("option7");
    const op8 = document.getElementById("option8");
    const op9 = document.getElementById("option9");
    let res = 0;
    for(let i = 0; i <= 9; i++)
    {
        res = price / i;
        if(res.toFixed(2) === "1368.00")
        {
            op.innerText = `1x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "684.00")
        {
            op2.innerText = `2x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "456.00")
        {
            op3.innerText = `3x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "342.00")
        {
            op4.innerText = `4x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "273.60")
        {
            op5.innerText = `5x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "228.00")
        {
            op6.innerText = `6x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "195.43")
        {
            op7.innerText = `7x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "171.00")
        {
            op8.innerText = `8x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
        else if(res.toFixed(2) === "152.00")
        {
            op9.innerText = `9x ${res.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`;
        }
    }
}


function checkName()
{
    let isName = inputName.value;
    if(isName == "")
    {
        inputName.style.outline = `2px solid white`;
    }
    else if(!regCharacter.test(isName) || !nameLength(isName))
    {
        isError(inputName);
    }
    else
    {
        isValid(inputName);
    }
    
}

function nameLength(nameLength)
{
    const nameArray = nameLength.split(" ");
    return nameArray.length >= 2;
}



document.addEventListener("DOMContentLoaded", () =>
{
    window.setInterval(nextImage, 3000);
    card.addEventListener("keypress", cardInsert);
    card.addEventListener("input", checkCardFlag);
    window.addEventListener("input", checkName);
    window.addEventListener("load", parcelCard);
    inputCVV.addEventListener("input", checkCVV);
    inputDate.addEventListener("keypress", formatDate);
    inputDate.addEventListener("input", checkErrorDate);
    checkButton.addEventListener("click", () => ticketSaleOff(price));
    window.addEventListener("load", () => showValue(ticketSaleOff(price), valueTot));
    window.addEventListener("load", () => showValue(priceMonth, containerTotMonth));
    window.addEventListener("load", () => showValue(priceWeek, containerTotWeek));
    menuCard.addEventListener("click", () => showCard(containerCard));
    closeExec.addEventListener("click", () => closeCard(containerCard));
    menuPix.addEventListener("click", () => showCard(containerPix));
    closePix.addEventListener("click", () => closeCard(containerPix));
});

