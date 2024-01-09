window.onload = function() {
    /*
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function(event){
        const result = document.getElementById("result");
        result.innerHTML = this.value + " 버튼이 클릭됨!";
    });
    */

    // 실습) 버튼 중에서 클릭된 버튼의 아이디를 result에 출력
    const btns = document.getElementsByClassName('btn');
    console.log(btns);
    const result = document.getElementById("result1");
    for (btn of btns){
        btn.addEventListener("click", function(event){
            result.innerHTML = this.id;
        });
    }
    
    // 실습 2)
    const result2 = document.getElementById('result2');
    const nums = document.getElementsByClassName('txt2');
    const btnplus = document.getElementById('btnplus');
    btnplus.addEventListener("click", function(){
        result2.innerHTML = parseFloat(nums[0].value) + parseFloat(nums[1].value);
    });

    // 실습 3) 텍스트입력상자에 숫자 두개를 넣고 +,-,*,/ 버튼 누르면
    //          result2에 결과 출력
    const btns2 = document.getElementsByClassName('btn3')
    const result3 = document.getElementById('result3');
    const nums2 = document.getElementsByClassName('txt3');

    for (btn2 of btns2){
        btn2.addEventListener("click", function(){
            //result3.innerHTML = eval(`parseFloat(${nums2[0].value}) ${this.value} parseFloat(${nums2[1].value});`);
            result3.innerHTML = calc(+nums2[0].value,+nums2[1].value,this.value);
        });
    };
    // 실습 4) li를 클릭하면 화면 배경색을 변경하고, result4에 색상명 출력
    const lis = document.getElementById('bgcolorselect').children;
    for (li of lis){
        li.addEventListener('click',function(){
            let color = this.getAttribute('value');
            console.log();
            document.getElementById('result4').innerHTML = color;
            // document.getElementById('result4').style.backgroundColor = color;
            document.getElementsByTagName('body')[0].style.backgroundColor = color;
        });
    }

    // 실습 5) 체크한 과일명들을 result5에 출력
    const checks = document.getElementById("cbp").children;
    const rst5 = document.getElementById('result5');
    for (check of checks){
        check.addEventListener('change',function(event){
            console.log(event.target.checked);
            let str = rst5.innerHTML;
            const fruit = this.value;
            const strArr = str.split(',').filter(item=>item!='');
            console.log(strArr);
            if(event.target.checked){
                strArr.push(fruit);
                rst5.innerHTML = strArr.toString();
            } else {
                rst5.innerHTML = strArr.filter((value)=>value != fruit).toString();
            }
        })
    }
    // 실습 6) 선택한 숫자의 구구단을 result6에 출력
    const rst6 = document.getElementById('result6');
    const sel = document.getElementById("sel");
    sel.addEventListener('change', function(event){
        console.log(this.value);
        rst6.innerHTML = '';
        let str = '';
        let num = +this.value;
        if(isNaN(num)){
            str = '숫자를 선택하세요';
        } else {
            for(let i=1; i<10; i++){
                str += `${num} * ${i} = ${num*i} <br>`;
            }
        }
        rst6.innerHTML = str;
    })
    // <!-- 실습 7) 버튼을 클릭하면 학생데이터를 테이블에 출력 -->
    // <!-- 홍길동 100 100 100, 강감찬 90 90 90, 이순신 80, 80, 80 -->
    const stds = [
        {name: '홍길동', kor: 100, eng: 100, math: 100},
        {name: '강감찬', kor: 90, eng: 90, math: 90},
        {name: '이순신', kor: 80, eng: 80, math: 80}
    ];
    document.getElementById('btnscore').addEventListener('click',function(){
        for(let i=0; i<3; i++){
            const vls = Object.values(stds[i]);
            for (let j=0; j<4; j++){
                const td = document.getElementById('tbl').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i].getElementsByTagName('td')[j];
                td.innerHTML = vls[j];
            }
        }
    });
};

function calc(num1,num2,op){
    switch(op){
        case '+' : return num1 + num2;
        case '-' : return num1 - num2;
        case '*' : return num1 * num2;
        case '/' : return num1 / num2;
    }
}
//https://jsonplaceholder.typicode.com/