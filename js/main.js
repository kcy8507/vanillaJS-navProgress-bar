// 스크롤을 100px내리면 배경색->회색, 빨간 바 생김.
// 스크롤을 내린 px만큼 바 width도 함께 움직인다.

let body = document.querySelector("body");
let nav = document.querySelector(".nav");
let bar = document.querySelector(".bar");
let barWidth = document.querySelector(".value");
let fullScroll = body.scrollHeight;
//스크롤의 총길이

// function currentHeight() {
//   window.addEventListener("scroll", () => {
//     window.scrollY;
//   });
// }
// console.log(typeof currentHeight);
// // Number(currentHeight());

// let heightPersent = (currentHeight() / fullScroll) * 100;
// // (현재길이/총길이)*100

// window.addEventListener("scroll", (e) => {
//   console.log(`1.높이값 백분율: ${heightPersent}%`);
//   console.log(`2.현재값: ${currentHeight()}`);
//   console.log(`3.총 높이: ${fullScroll}`);
//   //   value.style.width = heightPersent;
//   if (window.scrollY >= 100) {
//     nav.classList.add("grey");
//     bar.style.display = "block";
//   } else {
//     nav.classList.remove("grey");
//     bar.style.display = "none";
//   }
// });

// 전체 화면의 높이가 필요해요.
// 1080px... /100 1퍼센트...
// 가로 넓이를 100으로 나눈다 그 퍼센트가 있을것이다.

//세로가 움직인 퍼센트는 전체 화면 높이 대비 스크롤 높이이다.
// 저 퍼센트 만큼 가로 넓이에 width border를 증가시키고
// 애니메이션은

window.addEventListener("scroll", (e) => {
  let height = window.scrollY;
  //윈도우 스크롤와이는 스크롤할수 있는 부분만 계산되기 때문에
  //전체 화면 높이와 똑같아지지 않아서 나타내는 것이 부정확함
  let fullHeight = body.scrollHeight;
  let percent = (height / fullHeight) * 100;
  barWidth.style.width = `${percent}%`;
  console.log(fullHeight, height, percent);
});
window.addEventListener("resize", () => {
  let checkVW = window.innerWidth;
  console.log(checkVW);
  if (checkVW >= 992) {
    console.log("어썸 애니메이션");
  } else {
    console.log("가난한 모바일");
  }
});
