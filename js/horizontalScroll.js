// window.addEventListener("DOMContentLoaded", () => {
//   // 스크롤 시 가로 콘텐츠
//   const horizontal_scroll = document.querySelector("#horizontal_scroll");
//   const horizontal_scrollList = document.querySelector("#horizontal_scroll ul");
//   const horizontal_scrollItem = gsap.utils.toArray("#horizontal_scroll ul li");

//   // ScrollTrigger 애니메이션을 생성하는 함수
//   function createAnimation() {
//     // 기존 ScrollTrigger 인스턴스가 있다면 제거
//     ScrollTrigger.getAll().forEach(st => st.kill());

//     // totalWidth 계산
//     const totalWidth = horizontal_scroll.scrollWidth - document.body.scrollWidth + 80;

//     // 새로운 애니메이션 생성
//     const scrollTween = gsap.to(horizontal_scrollItem, {
//       ease: "none",
//       x: -totalWidth,
//       scrollTrigger: {
//         trigger: horizontal_scroll,
//         scroller: "body",
//         start: "center center",
//         end: () => "+=" + horizontal_scroll.scrollWidth,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       }
//     });

//     // 가로 스크롤 시 애니메이션
//     gsap.from(".img_08 img", {
//       y: 200,
//       duration: 2,
//       ease: "elastic",
//       scrollTrigger: {
//         trigger: ".img_08 img",
//         containerAnimation: scrollTween,
//         start: "center center",
//         end: "100% 100%",
//         toggleActions: "play none reverse none",
//         markers: true,
//         id: "img_08 img"
//       }
//     });

//     gsap.from(".img_09 img", {
//       y: 200,
//       duration: 2,
//       ease: "elastic",
//       scrollTrigger: {
//         trigger: ".img_09 img",
//         containerAnimation: scrollTween,
//         start: "0 50%",
//         end: "100% 100%",
//         toggleActions: "play reverse play reverse",
//       }
//     });
//   }

//   // 초기 애니메이션 생성
//   createAnimation();

//   // 리사이즈 이벤트에 대한 디바운스 함수
//   function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//       const later = () => {
//         clearTimeout(timeout);
//         func(...args);
//       };
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//     };
//   }

//   // 리사이즈 이벤트 리스너 등록
//   window.addEventListener('resize', debounce(() => {
//     createAnimation();
//   }, 300));
// });