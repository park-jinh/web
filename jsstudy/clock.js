const date = new Date();
const n_date = new Date();
n_date.setTime(date.getTime() - 14*60*60*1000);
const l_date = new Date();
l_date.setTime(date.getTime() - 9*60*60*1000);
window.addEventListener('load', function(){
    const seoul_clock = setInterval(()=>{
        date.setTime(date.getTime() + 1000);
        n_date.setTime(n_date.getTime() + 1000);
        l_date.setTime(l_date.getTime() + 1000);
        document.getElementById('timer1').textContent = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;
        document.getElementById('timer2').textContent = `${n_date.getFullYear()}년 ${n_date.getMonth()+1}월 ${n_date.getDate()}일 ${n_date.getHours()}시 ${n_date.getMinutes()}분 ${n_date.getSeconds()}초`;
        document.getElementById('timer3').textContent = `${l_date.getFullYear()}년 ${l_date.getMonth()+1}월 ${l_date.getDate()}일 ${l_date.getHours()}시 ${l_date.getMinutes()}분 ${l_date.getSeconds()}초`;
    },1000);
})

