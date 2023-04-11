// document.getElementById("h2Id").innerHTML = "시작입니다." ;



// function show() {
//     //alert("안녕하세요.");
// event.preventDefault(); //페이지 재로딩을 막아줌. 즉 디폴트값을 막아서 동작함.
//     document.getElementById("h2Id").innerHTML = "안녕하세요" ; //호출하여 나타남.엄청많이 사용함.
// }

//스크립트 간 충돌이 일어나기에 돔이 다 만들어진 다음 동작을 수행하는 코드
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("h2Id").innerHTML = "안녕하세요" ;
// });

const show = () => { //show함수에 값 대입 // 화살표 함수로 지정(요즘 많이 사용함)
    event.preventDefault();
    // document.getElementById("h2Id").innerHTML = "안녕하세요." ;
    // document.getElementById("h2Id").innerHTML = "<img src = '../img/1.png'></img> "; //이미지 삽입

    //랜덤수 생성 (1~6)
    let n = Math.floor(Math.random() * 6) + 1 ;
    console.log(n); //사용자 눈에는 안보이는 프린트아웃.




    //해당하는 파일을 각 수에 맞게 출력.
    document.getElementById("h2Id").innerHTML = `<img src = "../img/${n}.png">`;

    //숫자에 해당되는 이미지 출력
    // document.getElementById("h2Id").innerHTML = "<img src = '../img/' + n +'.png'></img> ";

    //if구문 사용
    // let imgTag;
    // if (n ==1)  imgTag = "<img src = '../img/1.png'></img> ";
    // else if (n ==2)  imgTag = "<img src = '../img/2.png'></img> ";
    // else if (n ==3)  imgTag = "<img src = '../img/3.png'></img> ";
    // else if (n ==4)  imgTag = "<img src = '../img/4.png'></img> ";
    // else if (n ==5)  imgTag = "<img src = '../img/5.png'></img> ";
    // else if (n ==6)  imgTag = "<img src = '../img/6.png'></img> ";

    //switch 구문 사용
    // switch (n){
    //     case 1 : imgTag = "<img src = '../img/1.png'></img> "; break;
    //     case 2 : imgTag = "<img src = '../img/2.png'></img> "; break;
    //     case 3 : imgTag = "<img src = '../img/3.png'></img> "; break;
    //     case 4 : imgTag = "<img src = '../img/4.png'></img> "; break;
    //     case 5 : imgTag = "<img src = '../img/5.png'></img> "; break;
    //     case 6 : imgTag = "<img src = '../img/6.png'></img> "; break;
    // }


    //배열 사용
    // let imgArr =["<img src = '../img/1.png'></img> ", 
    // "<img src = '../img/2.png'></img> ", 
    // "<img src = '../img/2.png'></img> ", 
    // "<img src = '../img/4.png'></img> ", 
    // "<img src = '../img/5.png'></img> ", 
    // "<img src = '../img/6.png'></img> "]
    // document.getElementById("h2Id").innerHTML = imgArr[n-1];

    // document.getElementById("h2Id").innerHTML = '<img.src = "../img/1.png">';

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2Id").innerHTML = "시작입니다." ;
// }); //돔컨텐트가 로드되면 (돔트리가 전체 구성 후) 어떤 이벤트가 발생하는건가?라고 지정해줌.

// document.addEventListener("DOMContentLoaded", () => { //위의 코드를 화살표 함수로 지정하여 표현한 방식
    // document.getElementById("h2Id").innerHTML = "시작입니다." ;
// });

    // document.querySelector('#h2Id').innerHTML = <"아이디 선택자 : 시작입니다."> ; // = document.getElementById("h2Id").innerHTML
    // document.querySelector('.h2class').innerHTML = "클래스 선택자 : 시작입니다.";
    // const bt = document.createElement('button'); //a라는 버튼을 생성. //cons는 상수라 바뀌면 안된다. 즉 변화없음.
    // bt.textContent = "확인" ; //버튼의 이름 지정.
    // document.getElementById('hdiv').append(bt); //hdiv위치에 버튼을 추가(append)하는것.
}