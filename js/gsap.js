window.addEventListener("DOMContentLoaded", function () {
  // 비주얼 영역
  gsap.from("#sec-visual .scroll-down", {
    height: 0,
  });

  gsap.to("#sec-visual .text-wrap .text", {
    y: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    delay: 0.5,
  });

  gsap.to("#sec-visual .desc-wrap .desc", {
    y: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    delay: 1,
  });

  // 가로 스크롤 콘텐츠 영역
  const hs = document.querySelector("#horizontal-scroll");
  const hsList = document.querySelector("#horizontal-scroll ul");
  const hsItem = gsap.utils.toArray("#horizontal-scroll ul li");

  // ScrollTrigger 애니메이션을 생성하는 함수
  function createAnimation() {
    // 기존 ScrollTrigger 인스턴스가 있다면 제거
    ScrollTrigger.getAll().forEach(st => st.kill());

    const windowWidth = window.innerWidth;
    if (windowWidth <= 1200) {
      gsap.set(hsItem, { clearProps: "all" });
      return;
    }

    // totalWidth 계산
    const totalWidth = hs.scrollWidth - document.body.scrollWidth + 40;

    // 새로운 애니메이션 생성
    const scrollTween = gsap.to(hsItem, {
      ease: "none",
      x: -totalWidth,
      scrollTrigger: {
        trigger: hs,
        scroller: "body",
        markers: true,
        start: "top top",
        end: () => "+=" + hs.scrollWidth,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // 가로 스크롤 시 애니메이션
    // gsap.from(".img_08 img", {
    //   y: 200,
    //   duration: 2,
    //   ease: "elastic",
    //   scrollTrigger: {
    //     trigger: ".img_08 img",
    //     containerAnimation: scrollTween,
    //     start: "center center",
    //     end: "100% 100%",
    //     toggleActions: "play none reverse none",
    //     // markers: true,
    //     id: "img_08 img"
    //   }
    // });

    // gsap.from(".img_09 img", {
    //   y: 200,
    //   duration: 2,
    //   ease: "elastic",
    //   scrollTrigger: {
    //     trigger: ".img_09 img",
    //     containerAnimation: scrollTween,
    //     start: "0 50%",
    //     end: "100% 100%",
    //     // toggleActions: "play none reverse none",
    //     // markers: true,
    //     // id: "img_09 img"
    //   }
    // });
  }

  // 초기 애니메이션 생성
  createAnimation();

  // 리사이즈 이벤트에 대한 디바운스 함수
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // 리사이즈 이벤트 리스너 등록
  window.addEventListener('resize', debounce(() => {
    createAnimation();
  }, 300));
});