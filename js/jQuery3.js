$(function(){
    // 실습1 : 3을 탐색해서 콘솔에 출력
    $("#table1 tr:first > td:first").next().next().css("background-color","skyblue");
    let txt = $("#table1 .trc:first td:last").text();
    console.log(txt);
    // 실습2 : 메뉴2를 탐색해서 콘솔에 출력
    let txt2 = $("#content > ul > li").first().next().text();
    console.log(txt2);
    // 실습3 : 마지막div내 p의 문자열을 콘솔에 출력
    let txt3 = $("div:last > p").text();
    console.log(txt3);
});