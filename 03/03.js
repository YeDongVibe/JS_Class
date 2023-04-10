function show() {
    //alert("안녕하세요.");

    document.getElementById("h2Id").innerHTML = "안녕하세요" ; //호출하여 나타남.
}

//스크립트 간 충돌이 일어나기에 돔이 다 만들어진 다음 동작을 수행하는 코드
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("h2Id").innerHTML = "안녕하세요" ;
});