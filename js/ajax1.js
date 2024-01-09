let btn = document.getElementById("btn");
btn.onclick = function(){
    // AJAX 원시 코드

    // 1. xhr 객체 생성
    let xhr = new XMLHttpRequest();

    // 2. open() 통신초기화=xhr객체 초기화
    // HTTP Method(GET,POST, ...), URL, 비동기여부
    xhr.open("get", "http://127.0.0.1:5500/asset/plaintext.txt",true);

    // 3. send() 요청 전송,post일떄는 데이터를 send메소드의 파라미터로 전달
    xhr.send();

    // 4. callback 처리
    // onreadystatechange : xhr 객체의 이벤트속성 (콜백함수를 저장)
    // readyState : xhr의 상태코드 (0~4), 즉 클라이언트의 요청 상태
    // status : 서버의 응답 상태코드 (200,403,404,500...)
    // statusText : 서버의 응답상태 문자열 (OK, Fobidden, Not Found ...)
    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200){
            document.getElementById("greeting").innerHTML = xhr.responseText;
        }
    }
}

let btn2 = document.getElementById("btn2");
btn2.onclick = function(){
    let xhr = new XMLHttpRequest();

    xhr.open("get", "http://127.0.0.1:5500/asset/csv.csv",true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200){
            const respArray = xhr.responseText.split(",");
            document.getElementById("greeting").innerHTML = respArray[0];
        }
    }
}

let btn3 = document.getElementById("btn3");
btn3.onclick = function(){
    let xhr = new XMLHttpRequest();

    xhr.open("get", "http://127.0.0.1:5500/asset/json.json",true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200){
            const jsonObj = JSON.parse(xhr.responseText);
            document.getElementById("greeting").innerHTML = jsonObj.student1.sname;
        }
    }
}

let btn4 = document.getElementById("btn4");
btn4.onclick = function(){
    let xhr = new XMLHttpRequest();

    xhr.open("get", "https://koreanjson.com/users/1",true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200){
            let jsonObj2 = JSON.parse(xhr.responseText);
            document.getElementById("greeting").innerHTML = jsonObj2.name;
        }
    }
}

let btn5 = document.getElementById("btn5");
btn5.onclick = function(){
    let xhr = new XMLHttpRequest();

    xhr.open("get", "https://api.dbpia.co.kr/v2/search/search.xml",true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200){
            let xmlObj = xhr.responseXML;
            let rootEle = xmlObj.documentElement;
            let errEle = rootEle.getElementsByTagName("error")[0];
            let codeEle = errEle.getElementsByTagName("Code")[0];
            document.getElementById("greeting").innerHTML = codeEle.firstChild.nodeValue;
        }
    }
}
