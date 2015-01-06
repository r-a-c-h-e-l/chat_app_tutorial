window.onscroll = function() {

  var body = document.querySelector("body");

  //grab section elements
  var section1 = document.getElementById("section-1");
  var section2 = document.getElementById("section-2");
  var section3 = document.getElementById("section-3");
  var section4 = document.getElementById("section-4");
  var section5 = document.getElementById("section-5");
  var section6 = document.getElementById("section-6");
  var section7 = document.getElementById("section-7");
  var section8 = document.getElementById("section-8");
  var section9 = document.getElementById("section-9");
  var section10 = document.getElementById("section-10");
  var section11 = document.getElementById("section-11");
  var section12 = document.getElementById("section-12");

  //grab link elements
  var link1 = document.getElementById("link1");
  var link2 = document.getElementById("link2");
  var link3 = document.getElementById("link3");
  var link4 = document.getElementById("link4");
  var link5 = document.getElementById("link5");
  var link6 = document.getElementById("link6");
  var link7 = document.getElementById("link7");
  var link8 = document.getElementById("link8");
  var link9 = document.getElementById("link9");
  var link10 = document.getElementById("link10");
  var link11 = document.getElementById("link11");
  var link12 = document.getElementById("link12");

  //grab section height elements
  var rect1 = section1.getBoundingClientRect();
  var rect2 = section2.getBoundingClientRect();
  var rect3 = section3.getBoundingClientRect();
  var rect4 = section4.getBoundingClientRect();
  var rect5 = section5.getBoundingClientRect();
  var rect6 = section6.getBoundingClientRect();
  var rect7 = section7.getBoundingClientRect();
  var rect8 = section8.getBoundingClientRect();
  var rect9 = section9.getBoundingClientRect();
  var rect10 = section10.getBoundingClientRect();
  var rect11 = section11.getBoundingClientRect();
  var rect12 = section12.getBoundingClientRect();

  //When you scroll back up to section 1
  if (rect1.bottom > 0) {
    link1.style.color="#fff";
    link2.style.color="#666";
  }

  //This is when section 2 is active
  if ((rect1.bottom <= 0) && (rect2.bottom > 0)) {
    link1.style.color="#666";
    link2.style.color="#fff";
    link3.style.color="#666";
  }

  //This is when section 3 is active
  if (rect2.bottom <= 0) {
    link1.style.color="#666";
    link2.style.color="#666";
    link3.style.color="#fff";
    link4.style.color="#666";
  }

  //This is when section 4 is active
  if (rect3.bottom <= 0) {
    link1.style.color="#666";
    link3.style.color="#666";
    link4.style.color="#fff";
    link5.style.color="#666";
  }

  //This is when section 5 is active
  if (rect4.bottom <= 0) {
    link1.style.color="#666";
    link4.style.color="#666";
    link5.style.color="#fff";
    link6.style.color="#666";
  }

  //This is when section 6 is active
  if (rect5.bottom <= 0) {
    link1.style.color="#666";
    link5.style.color="#666";
    link6.style.color="#fff";
    link7.style.color="#666";
  }

  //This is when section 7 is active
  if (rect6.bottom <= 0) {
    link1.style.color="#666";
    link6.style.color="#666";
    link7.style.color="#fff";
    link8.style.color="#666";
  }

  //This is when section 8 is active
  if (rect7.bottom <= 0) {
    link1.style.color="#666";
    link7.style.color="#666";
    link8.style.color="#fff";
    link9.style.color="#666";
  }

  //This is when section 9 is active
  if (rect8.bottom <= 0) {
    link1.style.color="#666";
    link8.style.color="#666";
    link9.style.color="#fff";
    link10.style.color="#666";
  }

  //This is when section 10 is active
  if (rect9.bottom <= 0) {
    link1.style.color="#666";
    link9.style.color="#666";
    link10.style.color="#fff";
    link11.style.color="#666";
  }

  //This is when section 11 is active
  if (rect10.bottom <= 0) {
    link1.style.color="#666";
    link10.style.color="#666";
    link11.style.color="#fff";
    link12.style.color="#666";
  }

  //This is when section 12 is active
  if (rect11.bottom <= 0) {
    link1.style.color="#666";
    link11.style.color="#666";
    link12.style.color="#fff";
  }

};
