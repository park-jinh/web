// 실습 1) 키보드 r키를 누르면 화면 배경을 red로 변경
//        키보드 b키를 누르면 화면 배경을 blue로 변경
//        키보드 g키를 누르면 화면 배경을 green으로 변경
document.getElementsByTagName('body')[0].addEventListener('keyup',function(e){
    let color = 'white';
    switch(e.keyCode){
        case 82 : color = 'red'; break;
        case 66 : color = 'blue'; break;
        case 71 : color = 'green'; break;
    }
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
});

// 실습 2) #txt1에 글자를 입력하면 #sp1에 똑같이 출력되도록
document.getElementById('txt1').addEventListener("input", function(e){
    document.getElementById('sp1').textContent = this.value;
})

// 실습 3) 마우스를 클릭하면 #sp2에 클릭한 x, y 좌표를 출력
document.getRootNode().addEventListener('click',function(e){
    document.getElementById('sp2').textContent = `x: ${e.clientX}, y: ${e.clientY}`;
})

// 실습 4) 화면의 클릭한 곳에 가로10px, 세로 10px 노란색 상자를 표시
const yBox = document.createElement('div');
yBox.style.width = '10px';
yBox.style.height = '10px';
yBox.style.backgroundColor = 'yellow';
yBox.style.position = 'absolute';
document.getRootNode().addEventListener('click',function(e){
    const yBox_clone = yBox.cloneNode();
    // yBox_clone.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
    yBox_clone.style.left = `${e.clientX}px`;
    yBox_clone.style.top = `${e.clientY}px`;
    document.getElementsByTagName('body')[0].appendChild(yBox_clone);
});

document.getRootNode().addEventListener('')
