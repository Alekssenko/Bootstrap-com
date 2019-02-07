/**
 * Created by Саша on 03.02.2019.
 */
$(window).scroll(function () {
    var st = $(this).scrollTop();    //*метод JQ меряющий величину скрола от верха сраницы
    // var ofset = (st)/1.5;
    // console.log(st)
    $(".sect1").css({
        "transform":"translate(0%,"+(st/20)+"%"
        }
    )
});