$(document).ready(function(){


  $("button").click(function(event){
    event.preventDefault();

    var userInput = $("#puzzle-form").val();
    var wordsArray = userInput.split(""); //split sentance into words

    // var lettersArray = [];
    // for (index = 0; index < wordsArray.length; index += 1) { //for each word
    //   var forLettersArray = wordsArray[index].split(""); //split each word into an array of letters
    //   alert(forLettersArray);
      for (index = 0; index < wordsArray.length; index +=1) { //evaluate each letter, if a vowel replace???????
        if (wordsArray[index] === "a" || wordsArray[index] === "e" ||
        wordsArray[index] === "i" || wordsArray[index] === "o" ||
        wordsArray[index] === "u" || wordsArray[index] === "A" ||
        wordsArray[index] === "E" || wordsArray[index] === "I" ||
        wordsArray[index] === "O" || wordsArray[index] === "U") {
              wordsArray[index] = "-";

        };
      };
      $("#puzzle-form").hide();
      $("#puzzle").text(wordsArray.join(""));


  });
});
