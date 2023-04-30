    const togglebtn=document.querySelector(".toggle");
    const togglebtn_icn=document.querySelector(".toggle i");
    const dropdown=document.querySelector(".dropdown");
    const services=document.querySelector(".ser i");
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 100,
      freeMode: true,
      fade:'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

var a=0;
    function toggle_open(){
      const body=document.querySelector("body");
      const popup=document.querySelector(".popup");
      const blur =document.querySelector(".blur");

      var pos=window.scrollY;
      if(a==0){
        a=1;
      }
      
     if(a==1){
      blur.style.top=pos + 'px';
      blur.style.display="block";
      popup.style.display="block";
     }
     body.classList.add("no-scroll");

   
     console.log(a);
    }
  
    function toggle_close(){
     
   
      a=0;
      const popup=document.querySelector(".popup");
      const blur =document.querySelector(".blur");
      const body=document.querySelector("body")

      blur.style.display="none";
      popup.style.display="none";
      body.classList.remove("no-scroll");
    }
  















    var x=window.matchMedia("(min-width:520px)");
    const max_services=document.querySelector(".max_services")
    togglebtn.onclick=function(){
        dropdown.classList.toggle('open');
        const isOpen=dropdown.classList.contains('open')
        if(isOpen==0){
            max_services.style.display="none";   
        }
    if(isOpen){
    togglebtn_icn.classList='fa-solid fa-xmark';
    }
    else{
        togglebtn_icn.classList='fa-solid fa-bars';
    }
    }
   

    services.onclick=function(){
      if(max_services.style.display=="none"){
        max_services.style.display="inline-flex";
      }
      else if(max_services.style.display=="inline-flex"){
        max_services.style.display="none";
      }
      else{
        max_services.style.display="inline-flex";
      }
        
      
     
    
    }
    window.addEventListener('scroll', function() {
      var quoteContainer = document.querySelector('.quote_container');
      var customservice=document.querySelector(".custom_services");
      var scrollPosition = window.scrollY + window.innerHeight;
      var containerPosition = quoteContainer.offsetTop + quoteContainer.offsetHeight;
      var slimecontainer=this.document.querySelector(".container");
        var customservicepos= customservice.offsetTop + (customservice.offsetHeight)-220;
      var customserviceposforflawless= customservice.offsetTop + (customservice.offsetHeight)+150;
      var navbar=document.querySelector(".navcontainer");
      var mobiledevheading=document.querySelector(".mobile_dev_heading");
      var mobiledevheadingpos=mobiledevheading.offsetTop +100;
      var flaw_heading=document.querySelector(".heading");
      var why_heading=document.querySelector(".heading1");
      var mobiledevservices=document.querySelectorAll(".mobile_dev_services_content div");
      var mobiledevimgsection=this.document.querySelector(" .mobile_dev_services_img")
      var mobiledevimgsection_pos=mobiledevimgsection.offsetHeight+ mobiledevimgsection.offsetTop+100;
      var mobiledevimg=document.querySelector(" .mobile_dev_services_img img");
      var mobiledevimgpos=mobiledevimg.offsetTop+mobiledevimg.offsetHeight;
    console.log(scrollPosition);
      var dmheading=document.querySelector(".dm_heading");
      var dmheadingpos=dmheading.offsetHeight+dmheading.offsetTop;
      var dm_video= document.querySelector(".dm_video video")
      

      var s_heading=this.document.querySelectorAll(".s_content");
      for(var i =0 ; i < 9;i++ ){
     
        var s_headingpos = s_heading[i].offsetHeight + s_heading[i].offsetTop;
        console.log(s_headingpos);
        if(scrollPosition>s_headingpos){
          if(i==0 || i==3 || i==6){
            s_heading[i].classList.add('transform_right');
            s_heading[i].style.opacity="1";
          }
          if(i==1 || i==4 || i==7){
            s_heading[i].classList.add('transform_down');
            s_heading[i].style.opacity="1";
          }
            if(i==2 || i==5 || i==8){
            s_heading[i].classList.add('transform_left');
            s_heading[i].style.opacity="1";
          }
        }

       }


       var slimecontainerpos=this.window.scrollY;

       slimecontainer.style.top=slimecontainerpos+'px';




      if (scrollPosition <containerPosition || quoteContainer.offsetTop < navbar.offsetHeight) {
        quoteContainer.classList.add('hidden');
      } 
      
      else {
        quoteContainer.classList.remove('hidden');
      }
      if(scrollPosition > customserviceposforflawless){
        flaw_heading.style.opacity="1";
        flaw_heading.classList.add('open_up');
      }
      else
      {
        flaw_heading.style.opacity="0";
        flaw_heading.classList.remove('open_up');
      }
      if(scrollPosition>customservicepos){
       
        customservice.style.opacity="1";
      }
      else{

        customservice.style.opacity="0";
      }
      if(scrollPosition>mobiledevheadingpos){
        mobiledevheading.classList.add('open_right')
        mobiledevheading.style.opacity="1";
      }
      else{
        mobiledevheading.classList.remove('open_right')
        mobiledevheading.style.opacity="0";
      }
      for(var i = 0 ; i<5;i++){
        var mobiledevservicespos=mobiledevservices[i].offsetTop +mobiledevservices[i].offsetHeight+190;
        if(scrollPosition>mobiledevservicespos){
          mobiledevservices[i].classList.add('open_down');
          mobiledevservices[i].style.opacity="1";
        }
        else{
          mobiledevservices[i].classList.remove('open_down');
          mobiledevservices[i].style.opacity="0";
        }
      }   
      var why_choose_pos=why_heading.offsetHeight+why_heading.offsetTop;
      if(scrollPosition>=  why_choose_pos){
       why_heading.style.opacity="1";
      }
      else{
       why_heading.style.opacity="0";
      }
   
   
   
      if(scrollPosition>dmheadingpos){
       dmheading.classList.add('open_right');
       dmheading.style.opacity="1";
       
   
      }
      else{
       dmheading.classList.remove('open_right');
       dmheading.style.opacity="0";
    
      }
      dm_video.addEventListener('mouseenter',function(e){
        dm_video.play();
      })
        
      var dm_easy=this.document.querySelector(".dm_easy");
      var dm_easy_pos=dm_easy.offsetHeight+dm_easy.offsetTop;
        if(scrollPosition>dm_easy_pos){
          dm_easy.classList.add('open_right');
          dm_easy.style.opacity="1";
        }
        else{
          dm_easy.classList.remove('open_right');
          dm_easy.style.opacity="0";
        }
        var mobiledevimgsectionpos=mobiledevimgsection.offsetTop + mobiledevimg.offsetHeight+120;
      
        if (scrollPosition > mobiledevimgsectionpos && scrollPosition<mobiledevimgsection_pos){
          var value = scrollPosition;
          mobiledevimg.style.top = value-600+ 'px';
        } 
        else{
          mobiledevimgpos.style.top=mobiledevimgsectionpos;
        }
      
     
      
    });
  //   function reveal() {
  //     var reveals = document.querySelectors(".reveal");
  
    
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals.getBoundingClientRect().top;
  //     var elementVisible =90;
  
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals.classList.add("active");
  //     } else {
  //       reveals.classList.remove("active");
  //     }
  //   }
  
  
  // window.addEventListener("scroll", reveal);
  