// 콜백 지옥을 맛보여 주마..
// 콜백함수의 한계: 콜백지옥.. 그래서 promise -> 그래서 async/await 문법을 이용해
// 콜백함수의 콜백 지옥을 벗어나 자유롭게 비동기 프로그래밍 환경에서
// 순차/절차 기반 프로그래밍을 손쉽게 해보장..

// 지옥
var fnHell = function() {
    
    console.log("로직1 완료");

    // 2번째로직 구현함수
    setTimeout(function() {
        console.log("로직2 완료");

        // 3번째 로직 구현함수
        setTimeout(function() {
            console.log("로직3 완료");

            // 4번째 로직 구현함수
            setTimeout(function() {
                console.log("로직4 완료");

                // 5번째 로직 구현함수
                setTimeout(function() {
                    console.log("로직5 완료");
                },1000);

            },1000);
            
        },1000);

    },1000);
}

// 천국
var fnHeaven = function() {
    
    console.log("로직1 완료");

    // 2번째로직 구현함수
    setTimeout(function() {
        console.log("로직2 완료");
    },1000);

    // 3번째 로직 구현함수
    setTimeout(function() {
        console.log("로직3 완료");
    },1000);

    // 4번째 로직 구현함수
    setTimeout(function() {
        console.log("로직4 완료");
    },1000);

    // 5번째 로직 구현함수
    setTimeout(function() {
        console.log("로직5 완료");
    },1000);
}


// 지옥을 불러오자
// fnHell();

// 우리가(개발자) 원하는 바는 천국
fnHeaven();
