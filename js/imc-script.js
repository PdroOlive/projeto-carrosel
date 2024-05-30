const inputWeight = document.getElementById("ipeso");
const inputHeight = document.getElementById("ialtura");



function discoverError(input)
{
    input.style.outline = `2px solid red`;
}

function inputValid(input)
{
    input.style.outline = `2px solid #A5E381`;
}

function nullInput(input)
{
    input.style.outline = `none`;
}

function verifyValueHeight()
{
    
    let numHeight = Number(inputHeight.value);
    
    if(inputHeight.value.length == "") nullInput(inputHeight);
    else if(numHeight > 2.51 || numHeight < 1.30) discoverError(inputHeight);
    else inputValid(inputHeight)

}

function verifyValueWeight()
{
    let numWeight = Number(inputWeight.value);
    if(inputWeight.value.length == "") nullInput(inputWeight);
    else if(numWeight > 200 || numWeight < 20) discoverError(inputWeight);
    else inputValid(inputWeight)
}

inputHeight.addEventListener("input", verifyValueHeight);
inputHeight.onkeypress = () => {if(inputHeight.value.length == 4) return false;}
inputWeight.addEventListener("input", verifyValueWeight);