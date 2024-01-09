$(function(){
    $("#load").on("click",function(){
        $("#result").load("http://172.30.1.34:9999/ajaxTest/ajaxTest.jsp",function(responseText,textStatus,jqXHR){
            console.log(responseText);
            console.log(textStatus);
            console.log(jqXHR.readyState);
            // for (prop in jqXHR) {
            //     console.log(`${prop} : ${jqXHR[prop]}`);
            // }
        })
    });
    
    

});