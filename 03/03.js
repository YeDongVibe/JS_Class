function show() {
    //alert("안녕하세요.");
event.preventDefault(); //페이지 재로딩을 막아줌. 즉 디폴트값을 막아서 동작함.
    document.getElementById("h2Id").innerHTML = "안녕하세요" ; //호출하여 나타남.엄청많이 사용함.
}

//스크립트 간 충돌이 일어나기에 돔이 다 만들어진 다음 동작을 수행하는 코드
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("h2Id").innerHTML = "안녕하세요" ;
// });