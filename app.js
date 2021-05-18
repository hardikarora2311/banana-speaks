var btnTranslate= document.querySelector("#btn-translate");
var textInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output"); 

var url= "https://api.funtranslations.com/translate/minion.json"

function translationUrl(text){
    return url+ "?" + "text=" + text
}

function errorhandler(error){
    console.log("Some error occured", error);
    alert("something went wrong, try again after a while!")
}


function clickEvent(){
    var inputText= textInput.value;     //taking input

    //processing on server
   fetch(translationUrl(inputText))
    .then(response=> response.json())
    .then(json=> {outputDiv.innerText= json.contents.translated})   //output
    .catch(errorhandler)           //error handling
   
}

btnTranslate.addEventListener("click", clickEvent);