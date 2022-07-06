function showTime() {
  let h1 = document.getElementById("head");
  var par = document.getElementById("par");
  var image = document.getElementById("image");
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  if (h == 0) {
    h = 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s;
  document.getElementById("MyClockDisplay").innerHTML = time;
  document.getElementById("MyClockDisplay").innerHTML = date;
  setTimeout(showTime, 1000);
  var currentYear = date.getFullYear();
  document.getElementById("par2").innerHTML =
    "&copy; " + "By Rahel Seyum" + " " + currentYear;

  if (h >= 5 && h < 12 && h) {
    h1.innerHTML = "Good Morning";
    par.innerHTML = "It's a morning time.";
    image.src = "img/morning.png";
    document.body.style.backgroundColor = "orange";
  } else if (h >= 12 && h < 18) {
    h1.innerHTML = "Good Afternoon";
    par.innerHTML = "It's a afternoon time.";
    image.src = "img/afternoon.png";
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
  } else if (h >= 18 && h <= 23) {
    h1.innerHTML = "Good evening";
    par.innerHTML = "It's a evening time.";
    image.src = "img/evening.png";
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
  } else {
    h1.innerHTML = "Good night";
    par.innerHTML = "It's a night time.";
    image.src = "img/night.png";
    document.body.style.backgroundColor = "yellow";
  }
}
showTime();
