let btn = document.getElementById("btn");
btn.onclick = function(){
    let xhr = new XMLHttpRequest();

    xhr.open("get", "http://apis.data.go.kr/1480523/MetalMeasuringResultService/MetalService?numOfRows=1&pageNo=1&resultType=json&stationcode=1&date=20171208&timecode=RH02&itemcode=90303&serviceKey=WM4cEy7pQZrA2jCmjzcRxO833jtQLwTeNQ3DaKl2a5Ia951QUwcSKJfBqzEv5HYAbl37SjwCO6XYDRg%2FgQxxxg%3D%3D",true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200){
            let jsonStr = xhr.responseText;
            const jsonObj = JSON.parse(jsonStr);
            document.getElementById("content").innerHTML = jsonObj.MetalService.item[0].VALUE;
        }
    }
}


/* 
{"MetalService":{
    "header":{
        "code":"00",
        "message":"NORMAL SERVICE"
    },
    "item":[{"SDATE":"20171208000000","STATIONCODE":1,"ITEMCODE":"90303","TIMECODE":"RH02","VALUE":24.125}],
    "rows":null,
    "numOfRows":1,
    "pageNo":1,
    "totalCount":12}}
*/