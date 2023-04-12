document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');

    //단위 표시
    d1.textContent = sel1.value;
    d2.textContent = sel2.value;

    //select 값 변경이 될때
    sel1.addEventListener('change', (event) => {
        //selToggle = (sel1, sel2, t1, t2);

        d1.textContent = event.target.value;
        t1.value = '';
        t2.vlaue = '';

        if (sel1.value == '°C') { //틀의 값을 선택
            sel2.value = '°F';
        }
        else if (sel1.value == '°F') { //상대 틀에 값 변환
            sel2.value = '°C';
        }

        d1.textContent = sel1.value;
        d2.textContent = sel2.value;

    });
    sel2.addEventListener('change', (event) => {
        //selToggle = (sel2, sel1, t1, t2);

        t1.value = '';
        t2.vlaue = '';

        if (sel2.value == '°C') {
            sel1.value = '°F';
        }
        else if (sel2.value == '°F') {
            sel1.value = '°C';
        }

        d1.textContent = sel1.value;
        d2.textContent = sel2.value;

    });

    //input에 값이 입력됬을 때
    t1.addEventListener('input', (event) => {
        if (sel1.value == sel2.value) {
            t2.value = t1.value;
        }
        else if (sel1.value == '°C' && sel2.value == '°F') {
            t2.value = (t1.value * (9 / 5) + 32);
            //t2.value = cTof(t1.value);
        }
        else if (sel1.value == '°F' && sel2.value == '°C') {
            t2.value = ((t1.value - 32) * (5 / 9));
            //t1.value = fTof(t2.value);
        }
    });

});

//함수
//섭씨 온도를 화씨 온도로 변환
// const cTof = (temp) => {
//     let ftemp = (temp * (9 / 5)) + 32;
//     return ftemp;
// };

//화씨 온도를 섭씨 온도로 변환
// const fTof = (temp) => {
//     let ctemp = (temp - 32) * (5 / 9);
//     return ctemp;
// };

//select 토글하여 메개변수 전달 변환줌.
// const selToggle = (s1, s2, t1, t2) => {
//     t1.value = '';
//     t2.vlaue = '';

//     if (s1.value == '°C') { 
//         s2.value = '°F';
//     }
//     else if (s1.value == '°F') { 
//         s2.value = '°C';
//     }

//     d1.textContent = s1.value;
//     d2.textContent = s2.value;
// }