//var city = ["lagos", "abuja", "akure", "jigawa"];
var newInput;
var chat;
var url;
var temp;
var description;
var city;



$(function() {
  $("#send").click(function() {
    newInput = $("#city").val();
    chat = $("#section");


    

    if (newInput.length < 1) {
      alert("Please enter a city");
    } else {
      // creates a chat bubble for the user
      chat.append("<div id='usermsg'>" + newInput + "</div>");
    }

    function getCity(newInput) {
      var check = /\bin\b/;
      var checkResult = newInput.search(/\b(in)\b/);
      if (checkResult !== null) {
        return checkResult.index += 3;

      }
      
    }
    var city = getCity(newInput);
    console.log(city);

    //get info from the api
    
    $.ajax({

      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + newInput + "&units=metric" + "&appid=9ed82c30d573696e9eca843bb3eae322",
      type: "GET",
      dataType: "json",
      success: function(data) {
        temp = data.main.temp;
        description = data.weather[0].description;
        chat.append("<div id='botmsg'>" + "The weather is " + temp  + " degree celcius " + "with the possibility of " + description + "</div>");

      },
      error: function() {
        chat.append("<div id='botmsg'>" + "City not found..Please enter a valid city" + "</div>");


      }

    });
  
    newInput = $("#city").val("");

  });


  $("#dark").click(function()  {
    $("#title").toggleClass("dark");
    $("#send").toggleClass("darkicon");

  });

  $("#light").click(function()  {
    $("#title").toggleClass("light");
    $("#send").toggleClass("lighticon");

  });

  $("#basic").click(function()  {
    $("#header").toggleClass("topbar");
    $("#send").toggleClass("sendicon");

  });

  


});


 


 