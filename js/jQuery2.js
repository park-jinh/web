$(function(){
    $("#box1").fadeOut(3000,function(){
        $(this).fadeIn(3000, function(){
            alert("fadeIn 완료!");
        })
    });
    $("#box2").addClass("box2");
    $("#box2").css("position","absolute");
    $("#box2").animate({
        width: "400px",
        height: "400px",
        backgroundColor: "#00ff00",
        left: "600px",
        top: "600px"
    }, 3000, function(){
        alert("애니메이션 종료됨!");
    });
});