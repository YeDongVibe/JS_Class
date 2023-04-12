//버튼에 onclick을 넣지 않고 자바스크립트로 이용해 달기
// () => {} : 콜백 함수

//DOM이 다 로드 완료 후 확인
document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector('#bt1'); //버튼 자체를 변수에 집어넣은 것

    //bt1에 이벤트를 넣겠다.(클릭이라는 이벤트 발생 후 어떠한 함수 실행.)
    bt1.addEventListener('click', () => {

            event.preventDefault();

            //랜덤수 생성 (1~6)
            let n = Math.floor(Math.random() * 6) + 1;
            document.querySelector(".h2class").innerHTML = `<img src = "../img/${n}.png">`;

            let user;
            const radios = document.querySelectorAll('imput[type=radio]');
            for (let item of radios) {
                if (item.checked) {
                    user = item.value;
                    break;
                }
            }

            //랜덤수와 사용자입력수 같은지 검사
            if (n == user) {
                document.querySelector('article h1').innerHTML = '주사위게임 : 맞음(승)';
            } else {
                document.querySelector('article h1').innerHTML = '주사위게임 : 틀림(패)';
            }

            console.log(n);
        });
        });


