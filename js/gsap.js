window.addEventListener("DOMContentLoaded", function () {
  // 비주얼 텍스트
  const helloAnimation = document.querySelectorAll("#text-hello-animation .tw");
  gsap.to("#text-hello-animation", {
    display: "flex",
  });

  gsap.from(helloAnimation, {
    y: "100%",
    duration: 0.5,
    stagger: 0.05,
  });

  const uiDeveloperAnimation = document.querySelectorAll("#text-uideveloper-animation .tw");
  gsap.to("#text-uideveloper-animation", {
    display: "flex",
  });

  gsap.from(uiDeveloperAnimation, {
    y: "100%",
    duration: 0.5,
    stagger: 0.05,
    delay: 0.2,
  });

  const textUxpublisherAnimation = document.querySelectorAll("#text-uxpublisher-animation .tw");
  gsap.to("#text-uxpublisher-animation", {
    display: "flex",
  });

  gsap.from(textUxpublisherAnimation, {
    y: "100%",
    duration: 0.5,
    stagger: 0.05,
    delay: 0.3,
  });

  // 비주얼 스크롤 다운
  const scrollDownStartOption = {
    opacity: 0
  }

  const scrollDownEndOption = {
    opacity: 1,
    duration: 1.5,
    delay: 0.5,
  }

  gsap.fromTo("#sec-visual .scroll-down", scrollDownStartOption, scrollDownEndOption);

  // 비주얼 이미지
  gsap.to("#sec-visual .img-wrap", {
    overflow: "hidden",
  });

  gsap.from("#sec-visual .img-wrap img", {
    y: "100%",
    duration: 0.5,
    stagger: 0.05,
    delay: 0.3,
  });

  // work-list 영역
  const portfolioItemsTitleBg = gsap.utils.toArray("#sec-work .work-item");
  portfolioItemsTitleBg.forEach((item) => {
    const imgWrap = item.querySelector(".img-wrap");
    const img = item.querySelector(".img-wrap img");
    const bg = item.querySelector(".img-wrap .bg");
    const titleArea = item.querySelector(".text-area");
    const title = item.querySelector(".text-area .title");

    gsap.set(imgWrap, { overflow: "hidden", });
    gsap.set(titleArea, { overflow: "hidden", });
    gsap.set(title, { overflow: "hidden", });
    gsap.set([img, bg], { x: "-100%", });
    gsap.set(title, { y: "100%", });
    const loading = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "0 100%",
        end: "bottom bottom",
        markers: true,
      }
    });
    // loading.to([img, bg], { x: "0%", });
    loading.to(title, { y: "0%", });
    loading.to([bg, img], { x: "0%", });
    loading.to(bg, { x: "100%", });
    // loading.to(bg, { x: "100%", });
    // loading.to(img, { x: "0%", });
  });

  // 가로 스크롤 콘텐츠 영역
  // const contents = document.querySelector("#contents");
  // const contentsList = document.querySelector("#contents ul");
  // const contentsItem = gsap.utils.toArray("#contents ul li");

  // // ScrollTrigger 애니메이션을 생성하는 함수
  // function createAnimation() {
  //   // 기존 ScrollTrigger 인스턴스가 있다면 제거
  //   ScrollTrigger.getAll().forEach(st => st.kill());

  //   // totalWidth 계산
  //   const totalWidth = contents.scrollWidth - document.body.scrollWidth + 80;

  //   // 새로운 애니메이션 생성
  //   const scrollTween = gsap.to(contentsItem, {
  //     ease: "none",
  //     x: -totalWidth,
  //     scrollTrigger: {
  //       trigger: contents,
  //       scroller: "body",
  //       markers: true,
  //       start: "top top",
  //       end: () => "+=" + contents.scrollWidth,
  //       scrub: 1,
  //       pin: true,
  //       anticipatePin: 1,
  //       invalidateOnRefresh: true,
  //     }
  //   });

  //   // 가로 스크롤 시 애니메이션
  //   gsap.from(".img_08 img", {
  //     y: 200,
  //     duration: 2,
  //     ease: "elastic",
  //     scrollTrigger: {
  //       trigger: ".img_08 img",
  //       containerAnimation: scrollTween,
  //       start: "center center",
  //       end: "100% 100%",
  //       toggleActions: "play none reverse none",
  //       // markers: true,
  //       id: "img_08 img"
  //     }
  //   });

  //   gsap.from(".img_09 img", {
  //     y: 200,
  //     duration: 2,
  //     ease: "elastic",
  //     scrollTrigger: {
  //       trigger: ".img_09 img",
  //       containerAnimation: scrollTween,
  //       start: "0 50%",
  //       end: "100% 100%",
  //       // toggleActions: "play none reverse none",
  //       // markers: true,
  //       // id: "img_09 img"
  //     }
  //   });
  // }

  // // 초기 애니메이션 생성
  // createAnimation();

  // // 리사이즈 이벤트에 대한 디바운스 함수
  // function debounce(func, wait) {
  //   let timeout;
  //   return function executedFunction(...args) {
  //     const later = () => {
  //       clearTimeout(timeout);
  //       func(...args);
  //     };
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // }

  // // 리사이즈 이벤트 리스너 등록
  // window.addEventListener('resize', debounce(() => {
  //   createAnimation();
  // }, 300));
});