// Display Color Per Current Time
// getHoursfromMoment.js
console.log(moment().hour())
console.log(document.querySelector("#hour-1").children[0].getAttribute("value"))
var currentHour = moment().hour()
console.log(currentHour)
// displayColorfunction
function displayColor(e){
  if (document.querySelector(e).children[0].getAttribute("value")==currentHour){
    
    $(e).find("textarea").addClass("present");
    
  }

  else if (document.querySelector(e).children[0].getAttribute("value")<currentHour){
    $(e).find("textarea").addClass("past");
  }                 
  else($(e).find("textarea").addClass("future"))
  
}
// Run through each time session
displayColor("#hour-1")
displayColor("#hour-2")
displayColor("#hour-3")
displayColor("#hour-4")
displayColor("#hour-5")
displayColor("#hour-6")
displayColor("#hour-7")
displayColor("#hour-8")
displayColor("#hour-9")

// Local Storage User Input


function renderTextInput(){
 var userNote9 = localStorage.getItem("text-9")
 var userNote8 = localStorage.getItem("text-8")
 var userNote7 = localStorage.getItem("text-7")
 var userNote6 = localStorage.getItem("text-6")
 var userNote5 = localStorage.getItem("text-5")
 var userNote4 = localStorage.getItem("text-4")
 var userNote3 = localStorage.getItem("text-3")
 var userNote2 = localStorage.getItem("text-2")
 var userNote1 = localStorage.getItem("text-1")

 
 document.querySelector("#text-9").textContent = userNote9;
 document.querySelector("#text-8").textContent = userNote8;
 document.querySelector("#text-7").textContent = userNote7;
 document.querySelector("#text-6").textContent = userNote6;
 document.querySelector("#text-5").textContent = userNote5;
 document.querySelector("#text-4").textContent = userNote4;
 document.querySelector("#text-3").textContent = userNote3;
 document.querySelector("#text-2").textContent = userNote2;
 document.querySelector("#text-1").textContent = userNote1;

 


}
renderTextInput()

// Add event listener to Save Button
function storageInput(textareaId){

  $(".saveBtn").on("click", function(event){
  event.preventDefault();
  var userInput1 = document.querySelector("#text-9").value;
  var userInput2 = document.querySelector("#text-8").value;
  var userInput3 = document.querySelector("#text-7").value;
  var userInput4 = document.querySelector("#text-6").value;
  var userInput5 = document.querySelector("#text-5").value;
  var userInput6 = document.querySelector("#text-4").value;
  var userInput7 = document.querySelector("#text-3").value;
  var userInput8 = document.querySelector("#text-2").value;
  var userInput9 = document.querySelector("#text-1").value;


  
  localStorage.setItem("text-9", userInput1);
  localStorage.setItem("text-8", userInput2);
  localStorage.setItem("text-7", userInput3);
  localStorage.setItem("text-6", userInput4);
  localStorage.setItem("text-5", userInput5);
  localStorage.setItem("text-4", userInput6);
  localStorage.setItem("text-3", userInput7);
  localStorage.setItem("text-2", userInput8);
  localStorage.setItem("text-1", userInput9);
 
  

  renderTextInput()
  
  
})

}


storageInput("#text-9")
storageInput("#text-8")
storageInput("#text-7")
storageInput("#text-6")
storageInput("#text-5")
storageInput("#text-4")
storageInput("#text-3")
storageInput("#text-2")
storageInput("#text-1")
