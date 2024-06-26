const inputWeight = document.getElementById("ipeso");
const inputHeight = document.getElementById("ialtura");
const spanHeight = document.getElementById("span-height");
const spanWeight = document.getElementById("span-weight");
const buttonIMC = document.getElementById("button-imc");
const downloadFile = document.getElementById("file");
const image = document.getElementById("image");
const resContainer = document.getElementById("res");
let validHeight = false;
let validWeight = false;


function discoverError(input, span)
{
    input.style.outline = `2px solid red`;
    span.style.color = `red`;
}

function inputValid(input, span)
{
    input.style.outline = `2px solid #A5E381`;
    span.style.color = `#A5E381`;

}

function nullInput(input)
{
    input.style.outline = `none`;
}


function verifyValueWeight()
{
    let numWeight = Number(inputWeight.value);
    if(inputWeight.value.length == "") 
    {
        nullInput(inputWeight);
        spanWeight.classList.remove("weight-span")
    }
    else if(numWeight > 200 || numWeight < 20 || inputWeight.value.length < 2)
    {
        discoverError(inputWeight, spanWeight);
        spanWeight.classList.add("weight-span")
        validWeight = false;

    }
    else
    {
        inputValid(inputWeight, spanWeight);
        spanWeight.innerText = `Kg`;
        spanWeight.classList.add("weight-span")
        validWeight = true;
    }
}

function verifyValueHeight()
{
    
    let numHeight = Number(inputHeight.value);
    
    if(inputHeight.value.length == "") 
    {
        nullInput(inputHeight);
        spanHeight.classList.remove("height-span");
    }
    else if((numHeight < 1.30 || numHeight > 2.51) || inputHeight.value.length != 4)
    {
        discoverError(inputHeight, spanHeight, spanHeight);
        spanHeight.classList.add("height-span");
        validHeight = false;
    }
    else
    { 
        validHeight = true;
        inputValid(inputHeight, spanHeight);
        spanHeight.innerText = `m`;
        spanHeight.classList.add("height-span");
    }
}

function discoverIMC()
{
    let numWeight = Number(inputWeight.value);
    let numHeight = Number(inputHeight.value);
    let currentIMC = numWeight / (numHeight**2)
    return currentIMC.toFixed(1);
}

function outputIMC()
{
    if(validHeight === true && validWeight === true)
    {
        if(discoverIMC() <= 18.5)
        {
            downloadFile.href = `download/dieta-para-ganhar-massa.pdf`;
            downloadFile.download = `dieta-para-ganhar-massa.pdf`;
            downloadFile.type = `application/pdf`;
            downloadFile.innerHTML = `DIETA PARA GANHAR MASSA`;
            resContainer.classList.remove("show-res");
            downloadFile.classList.add("show-file");
        }
        else if(discoverIMC() >= 18.6 && discoverIMC() <= 24.9)
        {
            downloadFile.href = `download/dieta-para-ganhar-massa.pdf`;
            downloadFile.download = `dieta-para-ganhar-massa.pdf`;
            downloadFile.type = `application/pdf`;
            downloadFile.innerHTML = `DIETA PARA GANHAR MASSA`;
            resContainer.classList.remove("show-res");
            downloadFile.classList.add("show-file");
        }
        else if(discoverIMC() >= 25 && discoverIMC() <= 29.9)
        {
            downloadFile.href = `download/dieta-para-perder-peso.pdf`;
            downloadFile.download = `dieta-para-perder-peso.pdf`;
            downloadFile.type = `application/pdf`;
            downloadFile.innerHTML = `DIETA PARA PERDER PESO`;
            resContainer.classList.remove("show-res");
            downloadFile.classList.add("show-file")
        }
        else if(discoverIMC() >= 30)
        {
            downloadFile.href = `download/dieta-para-perder-peso.pdf`;
            downloadFile.download = `dieta-para-perder-peso.pdf`;
            downloadFile.type = `application/pdf`;
            downloadFile.innerHTML = `DIETA PARA PERDER PESO`;
            resContainer.classList.remove("show-res");
            downloadFile.classList.add("show-file");
        }
    }
    else
    {
        downloadFile.classList.remove("show-file");
        resContainer.classList.add("show-res");
        resContainer.innerHTML = `Erro, Verifique os valores acima!`;
    }
}

inputHeight.addEventListener("input", verifyValueHeight);
inputWeight.addEventListener("input", verifyValueWeight);
buttonIMC.addEventListener("click", outputIMC);
inputWeight.onkeypress = () => {if(inputWeight.value.length === 4) return false;}