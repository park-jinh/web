/*
$(function(){

    $('#btn').on('click', regTest)
    $('input, textarea').on('change', regTest);

});

function regTest(){
    // 플래그문자들을 저장할 변수
    let flagStr = '';
    // 체크된 체크박스들을 배열로 만들어서
    // 하나씩 꺼내서 플래그문자열을 생성
    $('.flag:checked').toArray().forEach(inEle => {
        flagStr += $(inEle).attr('value');
    });
    // 결과를 출력
    // 정규표현식 객체를 생성해서 사용자가 텍스트에어리어에
    // 입력한 문자열을 테스트
    $('#result').hide();
    $('#result2').hide();
    if($('#check1').prop('checked')){
        $('#result').text(
            (new RegExp($('#pattern').val(), flagStr)).test($('#str').val())
        );
        $('#result').show();
    }
    if($('#check2').prop('checked')){
        $('#result2').text(
            $('#str').val().match(new RegExp($('#pattern').val(), flagStr))
        );
        $('#result2').show();
    }
}
*/

// 수업코드
$(function() {

    $("#pattern").on("keyup", function() {
        let flagStr = '';
        $("input.flag:checked").toArray().forEach(inEle => {
            flagStr += $(inEle).attr('value'); 
        });
        $("input.method:checked").toArray().forEach(inEle => {
            const eleVal = $(inEle).attr('value');
            if (eleVal=='test') printTest(flagStr);
            if (eleVal=='match') printMatch(flagStr);
        });
    });
});

function printTest(flagStr) {
    $("#result").text(
        new RegExp($("#pattern").val(), flagStr)
            .test($("#str").val()));
}

function printMatch(flagStr) {
    $("#result2").text(
        $("#str").val().match(
            new RegExp($("#pattern").val(), flagStr)
        )
    );
    console.log($("#str").val()[3].charCodeAt());
}