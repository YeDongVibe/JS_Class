const show = () => { 
    event.preventDefault();

    //랜덤수 생성 (1~6)
    let n = Math.floor(Math.random() * 6) + 1 ;
    console.log(n); 
}