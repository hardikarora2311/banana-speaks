var btnTranslate= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");


function clickEventFun(){
    console.log("clicked")
    outputDiv.innerText= txtInput.value
}

btnTranslate.addEventListener("click", clickEventFun);