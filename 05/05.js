//회문 체크 함수(palindrom)
const palindrome = (t1, t2) => {
    let s = t1.value; //t1에 입력된 값을 받음.

    //입력 내용이 없는 경우
    if (s.length == 0) {
        document.querySelector("h2").textContent = '단어 입력하라.' //입력하지 않을 시 h2라인에 경고메시지 뜸.
        return;
    }

    //입력 내용이 존재 하는 경우
    //1.역순으로 진행
    let rs = '';
    // for (let i = s.length - 1; i >= 0; i--) {
    //     rs = rs + s[i];
    //     console.log("s=", s, ",rs =", rs);
    // }

    //2.배열을 이용하여 진행
    s = s.split(''); //문자열을 한 글자씩 쪼개어 배열. <문자열. split();>
    s = s.reverse(); //배열의 요소를 뒤집어줌. <배열.reverse();>
    // rs = s.toString(); //배열에 있는 것들을 쉼표를 통해 구분(배열의 요쇼를 문자열로 묶어줌) <배열.join();>
    rs = s.join(''); //배열에 있는 것들을 쉼표 없이 구분.
    console.log("s=", s, ",rs =", rs);


    //회문 판단 후 결과 표출1
    // if (s !== rs) {
    //     t2.value = '회문아님' //input type이 text이기에 value로 표시해야함. textContent를 사용하면 안뜸.
    // }
    // else { t2.value = '회문' };

    //회문 판단 후 결과 표출2
    if (t1.value !== rs) {
        t2.value = '회문아님' //input type이 text이기에 value로 표시해야함. textContent를 사용하면 안뜸.
    }
    else { t2.value = '회문' };

};

//숫자 합계
const numSum = (t1, t2) => {
    let s = t1.value;
    let sum = 0;
    //문자열 순회1
    // for (let ch of s) {
    //     if (isNaN(ch) == false) {
    //         sum = sum + parseInt(ch);
    //     }
    //     console.log(ch, isNaN(ch));
    // }

    //문자열 순회2
    for (let ch of s) {
        if (!isNaN(ch)) sum = sum + parseInt(ch);
    }
    t2.value = sum;

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
    for (let bt of bts) {
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt.addEventListener('click', (event) => {
            event.preventDefault(); //페이지 재로딩 막기 위해 사용.

            let divided = bt.getAttribute('id').slice(-1); //아이디를 통해 버튼 동작 구분짓기.(slice : btn이라는 문자열 구분)
            //let divided = bt.innerHTML;//버튼 동작 구분짓기.

            if (divided === '1') palindrome(t1, t2); //===는 데이터 타입까지 동일해야지 출력함. ==사용시 그냥 1사용 가능.
            else numSum(t1, t2);
        });
    }

});