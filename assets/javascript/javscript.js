window.onscroll = function () {
  shrinkHeader()
};
window.onload = function () {
  showSlides();
  showtestimony();
}

let i;
let slideIndex = 0;
let testimonyIndex = 0;

function shrinkHeader() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("logo").style.height = "85px";
    document.getElementById("logo").style.width = "160px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("hr").style.display = "block";
    document.getElementById("toll").style.top = "-37px";
    document.getElementById("toll").style.marginTop = "5%";
    document.getElementById("close").style.fontSize = "125px";
    document.getElementById("close").style.top = "-28px";
    document.getElementById("hamburgerC").style.top = "16px";
    let height = document.getElementsByClassName("hamburger");
    let width = document.getElementsByClassName("hamburger");
    for (i = 0; i < height.length; i++) {
      height[i].style.height = "6px";
      width[i].style.width = "65px";
    }
  } else {
    document.getElementById("logo").style.height = "135px";
    document.getElementById("logo").style.width = "253px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("hr").style.display = "none";
    document.getElementById("toll").style.top = "-40px";
    document.getElementById("toll").style.marginTop = "3%";
    document.getElementById("close").style.fontSize = "135px";
    document.getElementById("close").style.top = "-20px";
    document.getElementById("hamburgerC").style.top = "25px"
    let height = document.getElementsByClassName("hamburger");
    let width = document.getElementsByClassName("hamburger");
    for (i = 0; i < height.length; i++) {
      height[i].style.height = "8px";
      width[i].style.width = "70px";
    }
  }
}


function showSlides() {

  let slides = document.getElementsByClassName("image-slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function showtestimony() {
  let testimony = document.getElementsByClassName("testimony");
  let dots = document.getElementsByClassName("dots");
  for (i = 0; i < testimony.length; i++) {
    testimony[i].style.display = "none";
  }
  testimonyIndex++;
  if (testimonyIndex > testimony.length) {
    testimonyIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activetestimony", "");
  }
  testimony[testimonyIndex - 1].style.display = "block";
  dots[testimonyIndex - 1].className += " activetestimony";
  setTimeout(showtestimony, 3000);
}

function viewNAV() {
  document.getElementById("overlay-nav").style.width = "100%";
}

function closeNAV() {
  document.getElementById("overlay-nav").style.width = "0";
}

function active(navActive) {
  let removeActive = document.getElementsByClassName("active");
  while (removeActive.length)
    removeActive[0].classList.remove("active");
  navActive.classList.add("active");
}

let coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("activeV");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = content.scrollHeight + "px";

    }
  });
}

let k = 0;
let txt = 'We customize furnitures according to your requirement';
let speed = 50;
window.addEventListener("load", typeWriter);

function typeWriter() {
  if (k < txt.length) {
    document.getElementById("textUnique").innerHTML += txt.charAt(k);
    k++;
    setTimeout(typeWriter, speed);
  }

}

 let modal = document.getElementById("myModal");
 let modalImg = document.getElementById("img01");
 let captionText = document.getElementById("caption");
function modalBox(img){
  modal.style.display = "block";
  modalImg.src = img.src;
}
 let span = document.getElementsByClassName("closeTheme")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
