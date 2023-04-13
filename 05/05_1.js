// querySelector : 요소를 selector를 가지고 아이디가 A인 것을 집어온다.
// getAttribute : 위의 과정을 가지고 집어온 것을 통해 속성값(아이디, 클래스)을 찾아오겠다.

document.addEventListener("DOMContentLoaded", () => {

    //DOM요소 불러오기.
    const bt1s = document.querySelectorAll(".bt1");
    const bt2s = document.querySelectorAll(".bt2");
    const bt3s = document.querySelectorAll(".bt3");
    const t1 = document.querySelector("#t1");
    const btre = document.querySelector('#btreset');

    //배열의 초기화
    let arr = [];

    //버튼 배열의 '클릭'이벤트 작성
    //reset기능 구현
    btreset.addEventListener('click', (event)=> {
        event.preventDefault();
        t1.value = '';
        arr = [];
    });

    //배열의 자료 추가
    for (let bt1 of bt1s) {
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt1.addEventListener('click', (event) => {
            event.preventDefault(); //페이지 재로딩 막기 위해 사용.

            switch (bt1.textContent) {
                case '사케':
                    arr.push('🍶'); //이모티콘 넣기
                    break;
                case '칵테일':
                    arr.push('🍸');
                    break;
                case '맥주':
                    arr.push('🍺');
                    break;
                case '양주':
                    arr.push('🥃');
                    break;
            }
            // t1.value = arr.toString();
            t1.value = arr.join(',');
            console.log(arr);
        });
    }
    for (let bt2 of bt2s) {
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt2.addEventListener('click', (event) => {

        });
    }
    for (let bt3 of bt3s) {
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt3.addEventListener('click', (event) => {

        });
    }

});
//🥛🧃☕🥤//