const show = () => {
    event.preventDefault();

    //랜덤수 생성 (1~6)
    let n = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".h2class").innerHTML = `<img src = "../img/${n}.png">`;

    //사용자 입력 수 : 라디오의 체크값을 찾음
    let a = document.querySelector('input[name="num"]:checked').value;
    //let user;
    //const radios = document.querySelectorAll('imput[type=radio]');
    for(let item of radios) {
        if (item.checked) {
            
        }
    }



    //검사&결과 출력
    if (a == n) {
        document.querySelector('#h3Id').innerText = '정답입니다.';
    }
    else {
        document.querySelector('#h3Id').innerText = '땡.';
    }
    //document.querySelector(".h3class").innerHTML = `<img src = "../img/${n}.png">`

    console.log(n);
}