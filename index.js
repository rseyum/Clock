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

  if (h == 5 || h == 6 || h == 7 || h == 8 || h == 9 || h == 10 || h == 11) {
    h1.innerHTML = "Good Morning";
    par.innerHTML = "It's a morning time.";
    image.src = "img/morning.png";
    document.body.style.backgroundColor = "orange";
  }
  if (h == 12 || h == 13 || h == 14 || h == 15 || h == 16 || h == 17) {
    h1.innerHTML = "Good Afternoon";
    par.innerHTML = "It's a afternoon time.";
    image.src = "img/afternoon.png";
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
  }
  if (h == 18 || h == 19 || h == 20 || h == 21 || h == 22) {
    h1.innerHTML = "Good evening";
    par.innerHTML = "It's a evening time.";
    image.src = "img/evening.png";
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
  }
  if (h == 23 || h == 0 || h == 1 || h == 2 || h == 3 || h == 4) {
    h1.innerHTML = "Good night";
    par.innerHTML = "It's a night time.";
    image.src = "img/night.png";
    document.body.style.backgroundColor = "yellow";
  }
}
showTime();
