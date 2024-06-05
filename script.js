let myDate = new Date();
let myHour = myDate.getHours();
let myGreeting = "";
let myColor = "";
let myPic = "";

if (myHour >= 5 && myHour < 12) {
  myGreeting = "Good Morning";
  myColor = "orange";
  myPic = "morning.jpg";
} else if (myHour >= 12 && myHour < 18) {
  myGreeting = "Good Afrenoon";
  myColor = "yellow";
  myPic = "afternoon.jpg";
} else if (myHour >= 18 && myHour < 23) {
  myGreeting = "Good Evening";
  myColor = "blue";
  myPic = "evening.jpg";
} else {
  myGreeting = "Good Night";
  myColor = "purple";
  myPic = "night.jpg";
}

document.getElementById("my-greeting").innerHTML = myGreeting;
document.querySelector("html").style.backgroundColor = myColor;
document.getElementById("my-pic").src = "images/" + myPic;

/*
document
  .getElementById("html-checker")
  .setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);
document
  .getElementById("css-checker")
  .setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
  );*/
