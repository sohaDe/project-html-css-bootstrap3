// $(document).ready(function(){

// //     var myCarousel = document.querySelector('.carousel')
// // var carousel = new bootstrap.Carousel(myCarousel)
// //     // $('.carousel').carousel({
// //     //     interval:500

// //     // });
// var myCarousel = document.querySelector('#myslide')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 500,
//   wrap: false
// }) 

// });

//show color option div when click on  gear
$(".gear-check").click(function(){
    $(".color-option").fadeToggle();
});

//change color by css style
//بعمل اربع ملفات سي بجمع فبهن كل الوسوم اللي الا علاقة بالالوان وكل ملف لون محدد بعدا بلون الايتم بالليست 
var colorLi=$(".color-option ul li");
colorLi
.eq(0).css("backgroundColor","brown").end()
.eq(1).css("backgroundColor","blue").end()
.eq(2).css("backgroundColor","green").end()
.eq(3).css("backgroundColor","red").end()

//هلا عند الضغط ع الايتم بيعطي اللون
// colorLi.click(function(){
//   $("link[href*='theme']").Attr("href",$(this).attr(data-value)); //منبحث بكل لينك عن هريف فيه كلمة ثيم وبغيرلو الاتربيوت 
//   });

  //scroll top
  var scrollButton=$("#scroll-top");
  $(window).scroll(function()
  {
    // console.log( $(this).scrollTop() ); 
     
      $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
  });

      scrollButton.click(function(){
        $("html,body").animate( {scrollTop:0} , 600);

      });
      

 

  // loading screen
  $(window.location).load(function(){ 
    $(".loading-overlay .spinner , .loading-overlay").fadeOut(1000);});
    // $("body").css("overflow","auto"); 

    // function(){
    // $(this).parent.fadeOut(2000,

    //   function(){
    //     $(this).remove();

    //   });

    // });
     

  // });



