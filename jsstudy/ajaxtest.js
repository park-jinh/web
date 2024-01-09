// 실습 3)
// http://172.30.1.34:9999/ajaxTest/members.xml
// 1. AJAX통신으로 xml데이터를 읽어온다.
// 2. JS로 member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면(HTML 또는 콘솔)에 출력한다.

const member = {mtype:'',mid:'',mname:''};
const admin = {mpart:''};
const user = {memail:''};
Object.setPrototypeOf(admin, member);
Object.setPrototypeOf(user, member);

$.get({
    url: 'http://172.30.1.34:9999/ajaxTest/members.xml',
    success: function(data) {
        const resultArray = [];
        $("#members_xml li").each(function(idx) {
            const mem = $(data).find('member').eq(idx);
            if (admin.mpart = mem.find('mpart').text()) {
                admin.mtype = mem.find('mtype').text();
                admin.mid = mem.find('mid').text();
                admin.mname = mem.find('mname').text();
                resultArray.push(admin);
            }
            if (user.memail = mem.find('memail').text()) {
                user.mtype = mem.find('mtype').text();
                user.mid = mem.find('mid').text();
                user.mname = mem.find('mname').text();
                resultArray.push(user);
            }
            $(this).text(JSON.stringify(resultArray[idx]));
            console.log(resultArray);
        });
    }
});

// 실습 4)
// http://172.30.1.34:9999/ajaxTest/members.json
// 1. AJAX통신으로 json데이터를 읽어온다.
// 2. JS로 member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면(HTML 또는 콘솔)에 출력한다.

$.get({
    url: 'http://172.30.1.34:9999/ajaxTest/members.json',
    success: function(data) {
        const valueArray = Object.values(data);
        const resultArray = [];
        $("#members_json li").each(function(idx) {
            let eachObj = valueArray[idx];
            if (admin.mpart = eachObj.mpart) {
                admin.mtype = eachObj.mtype;
                admin.mid = eachObj.mid;
                admin.mname = eachObj.mname;
                resultArray.push(admin);              
            }
            if (user.memail = eachObj.memail) {
                user.mtype = eachObj.mtype;
                user.mid = eachObj.mid;
                user.mname = eachObj.mname;
                resultArray.push(user);              
            }            
            $(this).text(JSON.stringify(resultArray[idx]));
        });
    }
});

/*
// 실습 3)
// http://172.30.1.34:9999/ajaxTest/members.xml
// 1. AJAX통신으로 xml데이터를 읽어온다.
// 2. JS로 member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면에 출력한다.




// 실습 4)
// http://172.30.1.34:9999/ajaxTest/members.json
// 1. AJAX통신으로 json데이터를 읽어온다.
// 2. JS로 member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면에 출력한다.
function Member(mtype,mid,mname) {
    this.mtype= mtype;
    this.mid= mid;
    this.mname= mname;
}
function Admin(mpart) {
    this.mpart= mpart;
    this.__proto__= Member;
}
function User(memail) {
    this.memail= memail;
    this.__proto__= Member;
}



$.get('http://172.30.1.34:9999/ajaxTest/members.json',function(data){
    console.log(typeof data);
    const valueArray = Object.values(data);
    const ul = $('#ul');
    const resultArray = [];
    for (let eachObj of valueArray){
        const mpart = eachObj.mpart;
        const memberObj = new Member(eachObj.mtype,eachObj.mid,eachObj.mname);
        if(mpart){
            const admin =  new Admin();
            admin.mpart = eachObj.mpart;
            admin.mtype = eachObj.mtype;
            admin.mid = eachObj.mid;
            admin.mname = eachObj.mname;
            resultArray[resultArray.length] = admin;
        } else{
            const user =  new User();
            user.mpart = eachObj.memail;
            user.mtype = eachObj.mtype;
            user.mid = eachObj.mid;
            user.mname = eachObj.mname;
            resultArray[resultArray.length] = user;
        }

        $("#ul li").each(function(obj, idx){
            obj.html(resultArray[idx]);
        })
    }
    for (prop in data){
        if (data[prop].hasOwnProperty('mpart')){
            console.log(data[prop]);
        }
        else{
            
        }
    }
});
// $.get({
//     url: 'http://172.30.1.34:9999/ajaxTest/members.json',
//     dataType: 'JSON',
//     success: function(data) {
//         console.log(data);
//         // const jsonObj = JSON.parse(data);
//         // $.each(jsonObj,function(k,v){
//         //     console.log(k,v);
//         // });
//     }
// });

// let xhr = new XMLHttpRequest();
// xhr.open('get','http://172.30.1.34:9999/ajaxTest/members.json',true);
// xhr.send();
// xhr.onreadystatechange = function() {
//     if(xhr.status==200 && xhr.readyState==4){
//         let jsonStr=xhr.responseText;
//         console.log(jsonStr);
//     }
// }













// btn.onclick = function(){
//     let xhr = new XMLHttpRequest();

//     xhr.open("get", "http://apis.data.go.kr/1480523/MetalMeasuringResultService/MetalService?numOfRows=1&pageNo=1&resultType=json&stationcode=1&date=20171208&timecode=RH02&itemcode=90303&serviceKey=WM4cEy7pQZrA2jCmjzcRxO833jtQLwTeNQ3DaKl2a5Ia951QUwcSKJfBqzEv5HYAbl37SjwCO6XYDRg%2FgQxxxg%3D%3D",true);
//     xhr.send();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState==4 && xhr.status==200){
//             let jsonStr = xhr.responseText;
//             const jsonObj = JSON.parse(jsonStr);
//             document.getElementById("content").innerHTML = jsonObj.MetalService.item[0].VALUE;
//         }
//     }
// }


*/