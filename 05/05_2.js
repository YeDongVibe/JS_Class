document.addEventListener('DOMContentLoaded', () => {
    //reset기능 구현
    btReset.addEventListener('click', (event) => {
        event.preventDefault();
        t1.value = '';
        arr = [];
    })

    let num = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let boom = false;
    let heart = 0;

    function suffle() {
        for (let i = 0; i < num.length; i++) {
            let n = Math.floor(Math.random() * 9);
            let n2 = Math.floor(Math.random() * 9);

            if (n != n2) {
                let temp = num[n];
                num[n] = num[n1];
                num[n2] = temp;
            }

        }
        bt1.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector("grid > img").setAttribute("src", `../img/boom.png`);
        })
    }
});

    //<img src="../img/boom.png" />