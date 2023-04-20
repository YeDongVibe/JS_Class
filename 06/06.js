const funB = () => {
    console.log('funB');
}

document.addEventListener('DOMContentLoaded', () => {

    //날짜라는 변수 선언.
    const boxDt = document.querySelector('#boxDt');


    boxDt.addEventListener('change', () => {

        //주소라는 변수 선언
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + boxDt.value.replaceAll('-', ''); //2023-04-19에서 '-'를 없애고 아무것도 없는걸로 바꿈.



        console.log(url)

        //fetch함수가 url에 가서 원하는 데이터를 가져옴.
        fetch(url)
            //응답을 성공적으로 받으면 then에 걸려 이후 함수 실행.: then((변수명)=>{})
            .then((resp) => resp.json()) //비동기 통신, 두개의 함수를 사용 불가. 한개 함수만 사용가능
            //response를 받으면 then 실행.
            .then((data) => {
                let boxlist = data.boxOfficeResult.dailyBoxOfficeList; //배열로 출력.총 10개라서 10개가 출력.
                let boxTag = ''; //boxTag를 문자열로 생성.

                for (let box of boxlist) { //box는 object //각 10개에 안의 내용이 추가.

                    console.log(box.rank, box.salesAmt, box.rankInten, box.movieNm);

                    boxTag = boxTag + '<details>';
                    boxTag = boxTag + `<summary role="button" class="secondary">${box.movieNm}</summary>`;
                    boxTag = boxTag + '<ul>';
                    boxTag = boxTag + `<li>순위 : ${box.rank}</li>`;
                    boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`;
                    boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>`;
                    boxTag = boxTag + '</ul>';
                    boxTag = boxTag + '</details>';

                }
                console.log(boxTag)

                document.querySelector('#boxDiv').innerHTML = boxTag;
            })
            //응답이 실패가 되면 catch에 걸려서 이후 함수 실행. : catch((변수명)=>{})
            .catch((err) => { console.log(err); })
            ;

    });
});