const containerE=document.querySelector(".containerBox");
for (let index = 0; index < 29; index++) {
    const containerEle=document.createElement("div");
    containerEle.classList.add("container");
    containerE.appendChild(containerEle);
}

const constainers=document.querySelectorAll(".container");
assignCode();
function assignCode(){
    constainers.forEach((constainers)=>{
        const newColorCode=colorGenerator();
        constainers.style.backgroundColor="#"+newColorCode;
        constainers.innerText="#"+newColorCode;
    })
}

function colorGenerator(){
    const code="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode="";
    for (let i = 0; i < colorCodeLength; i++) {
        const colorIndex=Math.floor(Math.random()*code.length);
        colorCode+= code.substring(colorIndex,colorIndex+1) 
    }
    return colorCode;
}
