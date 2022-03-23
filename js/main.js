// 스크롤을 100px내리면 배경색->회색, 빨간 바 생김.
// 스크롤을 내린 px만큼 바 width도 함께 움직인다.

let body = document.querySelector("body");
let nav = document.querySelector(".nav");
let bar = document.querySelector(".bar");
let barWidth = document.querySelector(".value");
//스크롤의 총길이
// 전체 화면의 높이가 필요해요.
// 1080px... /100 1퍼센트...
// 가로 넓이를 100으로 나눈다 그 퍼센트가 있을것이다.

//세로가 움직인 퍼센트는 전체 화면 높이 대비 스크롤 높이이다.
// 저 퍼센트 만큼 가로 넓이에 width border를 증가시키고
// 애니메이션은

// window.addEventListener("scroll", (e) => {
//   let height = window.scrollY;
//   //윈도우 스크롤와이는 스크롤할수 있는 부분만 계산되기 때문에
//   //전체 화면 높이와 똑같아지지 않아서 나타내는 것이 부정확함
//   let fullHeight = body.scrollHeight;
//   let percent = (height / fullHeight) * 200;
//   barWidth.style.width = `${percent}%`;
// });

window.addEventListener("scroll", () => {
  let html = document.documentElement;
  let winScroll = html.scrollTop;
  let height = html.scrollHeight - html.clientHeight;
  let scrolled = Math.floor((winScroll / height) * 100);
  barWidth.style.width = `${scrolled}%`;
  throttling();
});
//scroll 될 때마다 프로그레스 바 width가 채워진다.

const throttling = _.throttle(() => {
  //lodash의 throttle 사용
  let html = document.documentElement;
  let winScroll = html.scrollTop;
  let scrollY = window.scrollY;
  let windowH = window.height;

  console.log("scrollY", scrollY);
  console.log("scrollTop", winScroll);
  let firstBox = document.querySelector(".salmon");
  let secondBox = document.querySelector(".sandyBrown");

  let items = document.querySelectorAll(".container");

  // for (i = 0; i < items.length; i++) {
  items.forEach((item, i) => {
    let winH = window.innerHeight;
    items[i].getBoundingClientRect().top;
    if (items[3].getBoundingClientRect().top < winH) {
      items[3].firstElementChild.classList.add("active");
      console.log("애니메이션 시작");
    }
  });
  //items의 4번째의 윗변의 윈도우에서부터 길이가 window 높이보다 작아지면, 애니메이션 추가.
  // }
}, 1000);
