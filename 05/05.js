//회문 체크 함수(palindrom)
const palindrome = () =>{
    console.log();

};

//숫자 합계
const numSum = () =>{

};

//돔 구성 완료 후 call back함수<() => {}> 안의 내용을 수행하겠다.
document.addEventListener("DOMContentLoaded", () => {
    //만약 한번에 다 가지고 오고 싶으면(input이 text인 것을 모두 가져옴. : css에서도 사용가능.)
    // const t = document.querySelectorAll("input[type = text]");

    //DOM요소 불러오기.
    const t1 = document.querySelector("#t1");
    const t2 = document.querySelector("#t2");

    const bts = document.querySelectorAll(".bt");

    //버튼 배열의 '클릭'이벤트 작성
    //bt0는 첫번째 버튼, bt1 두번째 버튼: 반복문을 통해 클릭이벤트 추가.
    for(let bt of bts) {
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt.addEventListener('click', (event) => {
            event.preventDefault();

            let divided = bt.getAttribute('id').slice(-1); //아이디를 통해 버튼 동작 구분짓기.(slice : btn이라는 문자열 구분)
            //let divided = bt.innerHTML;//버튼 동작 구분짓기.

            if(divided === '1') palindrome(); //===는 데이터 타입까지 동일해야지 출력함. ==사용시 그냥 1사용 가능.
            else numSum();
        });
    }

});