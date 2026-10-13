window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // ========================================
  // 1. 첫 화면 텍스트 애니메이션
  // ========================================

  const titleTexts = "#sec-visual .text-wrap .text";
  const descTexts = "#sec-visual .desc-wrap .desc";

  // 기존 이동값과 투명도 초기화
  gsap.set([titleTexts, descTexts], {
    y: 0,
    yPercent: 100,
    autoAlpha: 1,
  });

  const introTimeline = gsap.timeline({
    paused: true,
  });

  introTimeline
    .from("#sec-visual .scroll-down", {
      height: 0,
      duration: 0.8,
    }, 0)

    // 메인 텍스트: 아래에서 위로 이동
    .to(titleTexts, {
      yPercent: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    }, 0.5)

    // 설명 텍스트: 아래에서 위로 이동
    .to(descTexts, {
      yPercent: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    }, 1);


  // ========================================
  // 2. 가로 스크롤 애니메이션
  // ========================================

  const hs = document.querySelector("#horizontal-scroll");
  const hsList = document.querySelector("#horizontal-scroll ul");
  const hsItem = gsap.utils.toArray("#horizontal-scroll ul li");

  let horizontalTween = null;
  let horizontalInitialized = false;

  function createAnimation() {
    // 이전 가로 스크롤 애니메이션만 제거
    if (horizontalTween) {
      horizontalTween.scrollTrigger?.kill();
      horizontalTween.kill();
      horizontalTween = null;
    }

    // 이동 위치 초기화
    gsap.set(hsItem, {
      x: 0,
    });

    const windowWidth = window.innerWidth;

    // 모바일 / 태블릿
    if (windowWidth <= 1200) {
      gsap.set(hsItem, {
        clearProps: "all",
      });
      return;
    }

    // 실제 콘텐츠 너비에서 표시 영역 너비를 뺌
    const totalWidth = Math.max(
      0,
      hsList.scrollWidth - hs.clientWidth
    );

    if (totalWidth === 0) {
      return;
    }

    horizontalTween = gsap.to(hsItem, {
      x: -totalWidth,
      ease: "none",

      scrollTrigger: {
        // markers: true,
        trigger: hs,
        start: "top top",
        end: () => "+=" + hs.scrollWidth,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }


  // ========================================
  // 3. 0% → 100% 로딩 애니메이션
  // ========================================

  const loader = document.querySelector("#page-loader");
  const percentElement = document.querySelector(".loader-number");
  const loaderBar = document.querySelector(".loader-bar");

  // 로딩 중 현재 스크롤 위치 고정
  const lockedScrollY = window.scrollY;

  function preventNativeScroll() {
    if (window.scrollY !== lockedScrollY) {
      window.scrollTo({
        top: lockedScrollY,
        behavior: "instant",
      });
    }
  }

  window.addEventListener("scroll", preventNativeScroll, {
    passive: true,
  });

  const progress = {
    value: 0,
  };

  // 로딩 화면 위에서 스크롤 입력 방지
  function preventScroll(event) {
    event.preventDefault();
  }

  loader.addEventListener("wheel", preventScroll, {
    passive: false,
  });

  loader.addEventListener("touchmove", preventScroll, {
    passive: false,
  });

  // 모든 일반 리소스 로딩 완료 후 실행
  window.addEventListener("load", async function () {
    // 폰트 적용까지 기다린 후 레이아웃 계산
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    // 로딩 화면이 덮고 있는 동안
    // 가로 스크롤 초기화 및 위치 계산 완료
    createAnimation();

    horizontalInitialized = true;

    ScrollTrigger.refresh();

    // 0% → 100% 단일 애니메이션
    gsap.to(progress, {
      value: 100,
      duration: 2,
      ease: "none",

      onUpdate: function () {
        // 숫자 업데이트
        percentElement.textContent = Math.floor(progress.value);

        // 프로그레스 바 업데이트
        gsap.set(loaderBar, {
          scaleX: progress.value / 100,
        });
      },

      onComplete: function () {
        percentElement.textContent = "100";

        gsap.set(loaderBar, {
          scaleX: 1,
        });

        // 기존 로딩 화면 종료 효과 유지
        gsap.to(loader, {
          yPercent: -100,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.inOut",

          onComplete: function () {
            loader.remove();

            // 기본 스크롤 위치 고정 해제
            window.removeEventListener("scroll", preventNativeScroll);

            // 로딩 완료 후 스크롤 재개
            window.lenis?.start();

            // 기존 인트로 텍스트 애니메이션 시작
            introTimeline.play(0);
          },
        });
      },
    });
  }, { once: true });


  // ========================================
  // 4. 리사이즈 디바운스
  // ========================================

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

  window.addEventListener("resize", debounce(() => {
    // 최초 페이지 로딩 전에는 재생성하지 않음
    if (!horizontalInitialized) {
      return;
    }

    createAnimation();
    ScrollTrigger.refresh();
  }, 300));
});