$(function(){
    $("*").css("font-size", "1em");
    $("#ul1").css("background-color","powderblue");
    $(".lis").css("font-weight", "bold");
    $("#ul1 .lis").css("border","1px solid #f2f2f2"); // descendant
    $("#ul1>.lis").css("background-color","lightyellow"); // child
    $("p:first").css("border","3px solid gray");
    $("[style]").css("font-size","1.2em"); // 모든 엘리먼트에서 style속성이 있는 것
    $("p[id='p1']").css("font-size","1.5em"); // 모든 p엘리먼트에서 id속성이 p1인 것
    $("p[id!='p1']").css("font-size","1.5em");
    $(":button").css("background-color","red");
    $("#table1 tr:even").css("background-color","#f2f2f2");
    $("#table1 tr:odd").css("background-color","#333333");
    
});