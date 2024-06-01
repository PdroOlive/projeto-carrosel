const inputWeight = document.getElementById("ipeso");
const inputHeight = document.getElementById("ialtura");
const spanHeight = document.getElementById("span-height");
const spanWeight = document.getElementById("span-weight");
const buttonIMC = document.getElementById("button-imc");
function discoverError(input, span)
{
    input.style.outline = `2px solid red`;
    span.style.color = `red`;
    span.innerText = `Erro valor não condiz com o campo!!`;
}

function inputValid(input, span)
{
    input.style.outline = `2px solid #A5E381`;
    span.style.color = `#A5E381`;
    span.innerText = `Kg`;
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
    else if(numWeight > 200 || numWeight < 20)
    {
        discoverError(inputWeight, spanWeight);
        spanWeight.classList.add("weight-span")

    }
    else
    {
        inputValid(inputWeight, spanWeight)
        spanWeight.classList.add("weight-span")
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
        discoverError(inputHeight, spanHeight);
        spanHeight.classList.add("height-span");
    }
    else
    { 
        inputValid(inputHeight, spanHeight);
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
    if(discoverIMC() <= 18.5)
    {
        containerOutput.innerHTML = `Abaixo do Peso`;
    }
    else if(discoverIMC() >= 18.6 && discoverIMC() <= 24.9)
    {
        containerOutput.innerHTML = `Peso Ideal!! Continue na pegada`;
    }
    else if(discoverIMC() >= 25 && discoverIMC() <= 29.9)
    {
        containerOutput.innerHTML = `Sobrepeso recomendamos que comece a se cuidar`;
    }
    else if(discoverIMC() >= 30 && discoverIMC() <= 34.9)
    {
        containerOutput.innerHTML = `Obesidade grau I`;
    }
    else if(discoverIMC() >= 35)
    {
        
    }
}

inputHeight.addEventListener("input", verifyValueHeight);
inputWeight.addEventListener("input", verifyValueWeight);
buttonIMC.addEventListener("click", outputIMC);