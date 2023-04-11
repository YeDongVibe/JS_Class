document.addEventListener("DOMContentLoaded", () => {

    const bts = document.querySelectorAll('button');
    console.log(bts);

    //document.querySelector('#h2Id').textContent = bts.textContent;


    //배열 안에있는 것을 가져오는 방법.


    //for 반복문 사용
     for(let i = 0; i < bts.length ; i++) {
        // document.getElementById("#h2Id").innerHTML = 'bts.entries';
        //  console.log(bts[i]. textContent);
         bts[i].addEventListener("click", ()=>{
            document.getElementById("h2Id").textContent = bts[i].textContent; //getElementById에서는 #붙이면 안된다.
         })
     }

    //forEach 반복문 사용 : idx는 숫자(인덱스)
    // bts.forEach((item, idx) => {
    //    console.log(idx, item.textContent);
    // });

    //for in 반복문 사용
    //for(let idx in bts) {
    //    console.log(bts[idx].textContent);
    //};

    //for of 구문 사용 : 엄청 많이 사용함
    //for(let item of bts) {
    //    console.log(item.textContent);
    //};
    //for(let [k, v] of bts.entries()) {
        
        //document.getElementById("#h2Id").innerHTML = 'bts.entries';
       //console.log(k, v .textContent);
    //};


});