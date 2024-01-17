/* REST */
// 네트워크상의 자원을 자원(resource), 행위(behavier), 표현(repressentation)
// 으로 구분하여 요청하는 방식
// 자원 : URI
// 행위 : HTTP Method
//   get : 자원요청, post : 등록, put : 자원전체수정
//   patch : 자원일부수정, delete : 자원삭제
// REST 예)
// GET /posts : 전체포스트 요청
// GET /posts/1 : 1번 포스트 요청
// GET /posts/1/reply : 1번 포스트의 댓글 요청
// GET /posts/1/reply/1 : 1번 포스트의 1번 댓글 요청
// POST /post : 포스트 등록
// PUT /post : 포스트 수정
// PATCH /post : 포스트 일부수정
// DELETE /post/1 : 1번 포스트 삭제

$(function () {
    $('#GET').on("click", function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            method: "GET"
        }).done(function (result) {
            $('#sp').text(JSON.stringify(result));
        });
    });

    $('#POST').on('click', function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: '{"userId":10,"id":201,"title":"vue-post","completed":false}'
        }).done(function (result) {
            console.log("등록완료!");
            $('#sp').text(JSON.stringify(result));
        });
    });

    $('#PUT').on('click', function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/200',
            method: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: '{"userId":10,"id":200,"title-re":"react-post","completed":true}'
        }).done(function (result) {
            console.log("수정완료!");
            $('#sp').text(JSON.stringify(result));
        });
    });

    $('#PATCH').on('click', function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/200',
            method: "PATCH",
            contentType: "application/json",
            dataType: "json",
            data: '{"userId":10,"id":200,"title-re":"react-post","completed":true}'
        }).done(function (result) {
            console.log("수정완료!");
            $('#sp').text(JSON.stringify(result));
        });
    });

    $('#DELETE').on('click', function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/200',
            method: "DELETE"
        }).done(function (result) {
            console.log("삭제완료!");
            $('#sp').text(JSON.stringify(result));
        });
    });
});