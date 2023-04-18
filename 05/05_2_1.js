document.addEventListener('DOMContentLoaded', () => {
    //구성요소 불러오기.
    const boxs = document.querySelectorAll('.bt1');
    const btr = document.querySelector('#btReset');

    //초기 배열 : 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]
    let flag = true; //클릭확인
    let cnt = 0; //하트개수
    let selarr = []; //눌러질때의 배열 순서

    //폭탄섞기버튼(랜덤 배열 결정)
    btr.addEventListener('click', () => {

        if (flag) { //if(flag == true)랑 같음.
            arr.sort(() => Math.random() - 0.5); //배열 무작위 섞기
            console.log(arr)
            flag = false; //flag가 false로 변경이 되어야 계속 눌러지는걸 방지할 수 있음. 한번 섞고 유지.
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = '';
            for (let bt1 of boxs) {
                bt1.innerHTML = bt1.getAttribute('id').replace('box', '')
            } // 박스가 눌러지면 초기화.
        }
    });

    //div박스 제어
    for (let bt1 of boxs) {
        //박스번호 넣기
        bt1.innerHTML = bt1.getAttribute('id').replace('box', ''); //나머지 숫자도 나옴.(일의자리 수 이외에)
        // = bt1.innerHTML = bt1.getAttribute('id').slice(-1);

        //click이벤트
        bt1.addEventListener('click', () => {
            let n = parseInt(bt1.textContent);
            //= let n = parseInt(bt1.getAttribute('id').replace('box', ''));//클릭 번호 알기
            console.log("n=", n, "selarr =", selarr);
            cnt++;
            console.log(cnt);
            //폭탄과 하트 구분

            //기존에 하트나 폭탄이 들어있는 경우
            if (isNaN(n)) return;

            //폭탄이 눌러지지 않은 경우
            if (!flag) { //flag가 true가 되면 더이상 눌러지면 안된다.
                //선택 항목 추가
                selarr.push(n);


                if (arr[n - 1] == 0) {//하트 가져오기
                    bt1.innerHTML = '<img src = "../img/heart.png">';
                    if (cnt == 8) {
                        flag = true;
                        document.querySelector('h2').innerHTML = '성공했네...?';

                        //차집합이용
                        // let lastArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !selarr.includes(item));
                        // console.log ("lastarr = ", lastArr[0])
                        // boxs[lastArr[0]-1].innerHTML = '<img src = "../img/heart.png">';

                        let lastn = arr.findIndex ((item)=>item == 1);
                        console.log('find =', lastn)
                        boxs[lastn].innerHTML = '<img src = "../img/heart.png">';
                    }
                }
                else {//폭탄 가져오기.
                    bt1.innerHTML = '<img src = "../img/boom.png">';
                    flag = true; //flag가 true가 되면
                    document.querySelector('h2').innerHTML = '응 망했어^^';
                }
            }
        });
    }



});