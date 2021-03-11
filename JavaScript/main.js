function randomize()
   {
    var mouth = ["dog1.jpg", "dog2.jpg", "dog3.jpg", "dog4.jpg", "dog5.jpg"];

    console.log("Button was pressed")
    var DogArray = Math.floor(Math.random() * mouth.length);
    document.getElementById("dog").src = mouth[DogArray];
       

   }