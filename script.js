// Display Color Per Current Time and Day of Week
// getHoursfromMoment.js
console.log(moment().hour())
console.log($(".hour").attr("value"))
var currentHour = moment().hour()
var currentDay = moment().format("dddd, MMMM Do YYYY")
console.log(currentHour)
console.log(currentDay)
// Display Color function
function displayColor(e){
  if ($(e).children().attr("value")==currentHour){
    
    $(e).find("textarea").addClass("present");
    
  }

  else if ($(e).children().attr("value")<currentHour){
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
 
 $("#text-9").text(userNote9)
 $("#text-8").text(userNote8)
 $("#text-7").text(userNote7)
 $("#text-6").text(userNote6)
 $("#text-5").text(userNote5)
 $("#text-4").text(userNote4)
 $("#text-3").text(userNote3)
 $("#text-2").text(userNote2)
 $("#text-1").text(userNote1)
}
renderTextInput()

// Add event listener to Save Button
function storageInput(){

  $(".saveBtn").on("click", function(event){
  event.preventDefault();
  var userInput1 = $("#text-9").val();
  var userInput2 = $("#text-8").val();
  var userInput3 = $("#text-7").val();
  var userInput4 = $("#text-6").val();
  var userInput5 = $("#text-5").val();
  var userInput6 = $("#text-4").val();
  var userInput7 = $("#text-3").val();
  var userInput8 = $("#text-2").val();
  var userInput9 = $("#text-1").val();


//   Storage User Input
  localStorage.setItem("text-9", userInput1);
  localStorage.setItem("text-8", userInput2);
  localStorage.setItem("text-7", userInput3);
  localStorage.setItem("text-6", userInput4);
  localStorage.setItem("text-5", userInput5);
  localStorage.setItem("text-4", userInput6);
  localStorage.setItem("text-3", userInput7);
  localStorage.setItem("text-2", userInput8);
  localStorage.setItem("text-1", userInput9);
  
  
  
})

}

// Run Through Each Text Block
storageInput("#text-9")
storageInput("#text-8")
storageInput("#text-7")
storageInput("#text-6")
storageInput("#text-5")
storageInput("#text-4")
storageInput("#text-3")
storageInput("#text-2")
storageInput("#text-1")


// Display Current Day
function displayCurrentDay(){
    $("#currentDay").text(currentDay)
}

displayCurrentDay()

// //Save Message
function displaySaveMessage(){
    $(".saveBtn").on("click", function(){

        setTimeout(function(){
            var saveMsg = $("<div>").text("Your Schedule is Saved!")
            saveMsg.addClass("savemessage")
            $(".container").append(saveMsg)
            $(".savemessage").fadeIn(400);
            $(".savemessage").fadeOut(800);
            setTimeout(function(){
                $(".savemessage").remove();
              }, 1200);
            
              
 
        });
    })
}
displaySaveMessage()
