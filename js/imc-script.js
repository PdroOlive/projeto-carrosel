const inputWeight = document.getElementById("ipeso");
const inputHeight = document.getElementById("ialtura");
const spanHeight = document.getElementById("span-height");
const spanWeight = document.getElementById("span-weight");


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

function verifyValueHeight()
{
    
    let numHeight = Number(inputHeight.value);
    
    if(inputHeight.value.length == "") 
    {
        nullInput(inputHeight);
        spanHeight.classList.remove("height-span")
    }
    else if((numHeight < 1.30 || numHeight > 2.51) || inputHeight.value.length != 4)
    {
        discoverError(inputHeight, spanHeight);
        spanHeight.classList.add("height-span")
    }
    else
    { 
        inputValid(inputHeight, spanHeight)
        spanHeight.classList.add("height-span")
    }
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

inputHeight.addEventListener("input", verifyValueHeight);
inputHeight.onkeypress = () => {if(inputHeight.value.length == 4) return false;}
inputWeight.addEventListener("input", verifyValueWeight);