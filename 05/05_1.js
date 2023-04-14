// querySelector : 요소를 selector를 가지고 아이디가 A인 것을 집어온다.
// getAttribute : 위의 과정을 가지고 집어온 것을 통해 속성값(아이디, 클래스)을 찾아오겠다.

//배열에서 많이 사용하는 함수
//Map : 기존 배열을 기반으로 새로운 배열을 만듬.<arr.filter((아이템)=>{조건식})> : 조건식에 맞는 배열만 새로 만들어짐.
//filter : 기존 배열을 기반으로 새로운 배열을 만듬.<arr.map((아이템)=>{조건식})> : 아이템을에 대해 조건식에 맞는 결과를 새로운 배열을 만들어냄.

document.addEventListener("DOMContentLoaded", () => {

    //DOM요소 불러오기.
    const bt1s = document.querySelectorAll(".bt1");
    const bt2s = document.querySelectorAll(".bt2");
    const bt3s = document.querySelectorAll(".bt3");
    const t1 = document.querySelector("#t1");
    const btReset = document.querySelector('#btReset');

    //배열 필터 구현
    const myFilter = (item) => {
        console.log(item);
    }
    //배열의 초기화
    let arr = [];

    //버튼 배열의 '클릭'이벤트 작성
    //reset기능 구현
    btReset.addEventListener('click', (event) => {
        event.preventDefault();
        t1.value = '';
        arr = [];
    })

    //배열의 자료 추가
    for (let bt1 of bt1s) {
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt1.addEventListener('click', (event) => {
            event.preventDefault(); //form때문에 페이지 재로딩이 되기에 그를 방지하고자 이 코드 사용.

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
                case '위스키':
                    arr.push('🥃');
                    break;
            }
            // t1.value = arr.toString();
            t1.value = arr.join(','); //input type은 무조건 X.value로 넣어야함.
            console.log(arr);
        })
    }
    //배열 filter구현(for~of를 이용해서)
    // for (let bt2 of bt2s) {
    //     //클릭이라는 이벤트를 통해 call back함수 내용 처리
    //     bt2.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         let gubun = bt2.textContent.replace(' 삭제', ''); //replace를 통해 문자열에서 삭제를 날려 사용.

    //         let temp = [];
    //         for (let item of arr) {
    //             switch (gubun) {
    //                 case '사케':
    //                     if (item != '🍶') temp.push(item);
    //                     break;
    //                 case '칵테일':
    //                     if (item != '🍸') temp.push(item);
    //                     break;
    //                 case '맥주':
    //                     if (item != '🍺') temp.push(item);
    //                     break;
    //                 case '위스키':
    //                     if (item != '🥃') temp.push(item);
    //                     break;

    //             }
    //         }
    //         arr = temp;
    //     })
    // }


    for (let bt2 of bt2s) { //filter를 사용해 각 아이템 삭제 후 재 배열.
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt2.addEventListener('click', (event) => {
            event.preventDefault(); //form때문에 페이지 재로딩이 되기에 그를 방지하고자 이 코드 사용.
            let gubun = bt2.textContent.replace(' 삭제', '').trim(); //replace를 통해 문자열에서 삭제를 날려 사용.
            console.log('gubun', gubun);
            switch (gubun) {
                case '사케':
                    arr = arr.filter((item) => item != '🍶'); //arr에서 한개씩 item을 가져와 조건에 맞게 새로운 배열로 생성.
                    break;
                case '칵테일':
                    arr = arr.filter((item) => item != '🍸');
                    console.log('칵테일',gubun);
                    break;
                case '맥주':
                    arr = arr.filter((item) => item != '🍺');
                    break;
                case '위스키':
                    arr = arr.filter((item) => item != '🥃');
                    break;
            }
            t1.value = arr.join(',');
        });
    }

    for (let bt3 of bt3s) {
        //클릭이라는 이벤트를 통해 call back함수 내용 처리
        bt3.addEventListener('click', (event) => {
            event.preventDefault();
            let gubun = bt3.textContent.split(' → ')[0];//문자열 구분
            console.log(gubun);
            let temp = [];

            for (let item of arr) {
                switch (gubun) {
                    case '사케':
                        // arr = arr.map((item)=> item =='🍶'?'🥛' : item);//map을 이용해 변환 : if else대신에
                        if (item == '🍶') temp.push('🥛');
                        else temp.push(item);
                        break;
                    case '칵테일':
                        if (item == '🍸') temp.push('🧃');
                        else temp.push(item);
                        break;
                    case '맥주':
                        if (item == '🍺') temp.push('☕');
                        else temp.push(item);
                        break;
                    case '위스키':
                        if (item == '🥃') temp.push('🥤');
                        else temp.push(item);
                        break;
                }
            }
            arr = temp;
            t1.value = arr.join(',');
            console.log(temp);
        });
    }
});