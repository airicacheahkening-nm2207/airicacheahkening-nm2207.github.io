
alert(welcomeGuest())


function welcomeGuest() {
  let name;
   let guest = prompt("Hello. Please enter your name:", "");
    if (guest == "") {
      name = "Reader";
    } else {
      name = guest;
    }
    document.getElementById("welcome").innerHTML = "Welcome " + name + ". Let's talk about diversity in fashion." }

  //function for onscroll runway
  function runwayOnscroll() {
    document.getElementById("bg-text").innerHTML = "RUNWAY"
    document.getElementById("bg-text").style.visibility = "visible";
  };
    //if (document.body.scrollTop > 50) {
      //document.getElementById("bg-text").innerHTML = "RUNWAY";
   // } else {
      //document.getElementById("bg-text").innerHTML = "o";
   // }
 //};
  document.getElementById("scroll1").addEventListener("scroll", runwayOnscroll)
  //document.getElementById("bg-text").innerHTML = "RUNWAY"


    
