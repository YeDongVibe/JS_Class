const show = () => {    
    event.preventDefault();

    //랜덤 수 생성
    let n = Math.floor(Math.random() * 6) + 1 ;
    console.log(n); 

    //속성을 변경하여 출력하는 방법. html에서 img테그가 있어야함.
    document.querySelector(".h2class > img").setAttribute("src", `../img/${n}.png`);

}