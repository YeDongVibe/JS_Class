// document.getElementById("h2Id").innerHTML = "시작입니다." ;



// function show() {
//     //alert("안녕하세요.");
// event.preventDefault(); //페이지 재로딩을 막아줌. 즉 디폴트값을 막아서 동작함.
//     document.getElementById("h2Id").innerHTML = "안녕하세요" ; //호출하여 나타남.엄청많이 사용함.
// }

//스크립트 간 충돌이 일어나기에 돔이 다 만들어진 다음 동작을 수행하는 코드
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("h2Id").innerHTML = "안녕하세요" ;
// });

const show = () => { //show함수에 값 대입 // 화살표 함수로 지정(요즘 많이 사용함)
    event.preventDefault();
    document.getElementById("h2Id").innerHTML = "안녕하세요." ;
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("h2Id").innerHTML = "시작입니다." ;
}); //돔컨텐트가 로드되면 (돔트리가 전체 구성 후) 어떤 이벤트가 발생하는건가?라고 지정해줌.