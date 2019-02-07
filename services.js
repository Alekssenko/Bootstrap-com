
//    $(document).ready(function(){
//        $('[data-toggle="tooltip"]').tooltip();
//    });
//    $(document).ready(function(){
//        $('[data-toggle="popover"]').popover();
//    });

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
//=========================PAGINATION=============================
nextfunc= function () {
    var number=document.getElementsByClassName('page-link');

    for (i=0; i<number.length; i++){
        if(number[i].matches('.active')){
            // alert(number[i]);
            // alert(number[i].textContent);                            /*выводит полный путь к элементу*/
            // console.log(number[i+1]);
            // console.log(number[i].textContent) ;                     /*выводит содержание элемента*/
                              /*следующая за активной страница*/
            window.location = number[i+1];
            // console.log( $( ".pagination li" ).get() )
            // console.log(number[i].className);              /*выводит классы элемента*/
        }
    }
};
$('.nextf').click(nextfunc);

prevfunc= function () {
    var number=document.getElementsByClassName('page-link');
    for (i=0; i<number.length; i++){
        if(number[i].matches('.active')){
            newPage=number[i-1];                         /*предидущая к активной страница*/
            window.location =newPage;
            // window.location.pathname = '/relative-link'    указание пути  по ссылке
        }
        // console.log( $( ".pagination li" ).get().reverse());

    }
};
$('.prevf').click(prevfunc);


//=========================МЕНЯЮЩАЯСЯ КАРТИНКА=======================
//-------------------------Установка начальной картинки------------------
$(document).ready(function () {
  $el= $('.photo-auto').children().get(2);
console.log($el);
    // alert(el)
    $($el).css('opacity','1');
});
//------------------------Функция меняющая картинки---------------------
var i=0;
    function chimg(){
        //=======================смена картинок на ифах================================
        // var numb=document.getElementsByClassName('photo-auto_item');
        // if(i==0) {
        //     numb[i].style.opacity ='1';
        //     numb[i+1].nextElementSibling.style.opacity = '0';
        // }
        // else if(i==1){  numb[1].style.opacity='1';
        //     numb[i].previousElementSibling.style.opacity='0';
        //     numb[i].nextElementSibling.style.opacity='0';
        // }
        // else if(i==2){ numb[i].style.opacity='1';
        //     numb[i].previousElementSibling.style.opacity='0'
        // }
        // if(i<2){i=i+1}
        // else {i=0} ;
        //=======================================================================================
        //---------------------------------------смена  картинок на JQ--------------------------------
       //  $number= $('.photo-auto').children().get(i);/*перебор детей и выбор I-того элемента*/
       // $($number).css('opacity','1');               /*показываем выбраную  get картинку*/
       // $($number).siblings().css('opacity','0');     /*скрываем соседние картинки*/
       //  if(i<2){i=i+1}              /*попытки указать номер картинки через :eg не удались*/
       //  else {i=0} ;
    //    -------------------------------------------------------------------------------------------
    //=======================================смена картинокчерез  eq ===============================
        $number= $('.photo-auto').children();
        $( $number ).eq( i ).css('opacity','1' ).siblings().css('opacity','0');
        if(i<2){i=i+1}
        else {i=0} ;
    }
setInterval(chimg,3000);
//====================================мигающий заголовок======================================
//первый вариант с рекурсией=============================================
// $(document).ready(function () {
// function abc() {
//     $('.gradient-linear-text').each(function () {      /*с пом each привязываем функцию зацикливания*/
//         $(this).fadeIn(100).delay(400).fadeOut(100);
//         abc();                                               /*рекурсивный вызов функции*/
//     })();
// }
// abc();
// });
//второй вариант с колбэком======================================================
var gradientElem = document.querySelector('.gradient-linear-text');
// console.log(gradientElem.className);

//сщздаем метод для для элемента====================================
gradientElem.fader = function () {

 //в последнем методе колбэком вызываем этотже метод
    $(this).fadeIn(100).delay(400).fadeOut(100, this.fader);

};

gradientElem.fader();
//===================================parallax===================================

