// To use : https://api.funtranslations.com/translate/minion.json
// To use : https://api.funtranslations.com/translate/groot.json
// To use : https://api.funtranslations.com/translate/chef.json

//Mock server : https://repl.it/@tanaypratap/lessonfourapi

var translateButton = document.querySelector("#chef-button");

translateButton.addEventListener("click", buttonClickHandler);

//input
var translateInput = document.querySelector("#chef-input");

//output
var translateOutput = document.querySelector("#chef-output");

var url = "https://api.funtranslations.com/translate/chef.json";

function buttonClickHandler(event) {
  var input = translateInput.value;
  var finalURL = url + "?text=" + input;
  fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
      var a = json.contents.translated;
      //string is sliced i.e. last char is removed as it was error in the api
      translateOutput.innerText = a.slice(0, a.length - 1);
    })
    //error handling
    .catch(() => alert("some error occured"));
}
