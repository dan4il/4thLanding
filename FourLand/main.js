function showImg(){
  let x=document.getElementById("hidden_img");
  if(x.style.opacity==="1")
      x.style.opacity="0";
  else {
    x.style.opacity="1";
  }
}

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }


    // работа с капчей
    var captcha;
    var captcha_n;
    function generateCaptcha() {
        var a = Math.floor((Math.random() * 100));
        var b = Math.floor((Math.random() * 100));
        captcha=a.toString()+"+"+b.toString()+"=";
        captcha_n=a+b;
        document.getElementById("captcha").value = captcha;
        document.getElementById("inputText").style="background-color:white";


    }
    function check(){
       var input=document.getElementById("inputText").value;
       if(input==captcha_n){
          document.getElementById("inputText").style="background-color:green";
       }
       else{
           document.getElementById("inputText").style="background-color:red";
       }
    }

    // новое окно
    function newPage(){
      var input=document.getElementById("inputText").value;
      if(input!=captcha_n){
          alert("капча не пройдена!");
      }
        else{
          value1=""+document.form1.name.value;
          self.location="newforma.html?="+value1;
        }
    }
