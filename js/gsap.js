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

  // 포트폴리오 영역
  const portfolioItems = gsap.utils.toArray("#portfolio-list .portfolio-item");

  portfolioItems.forEach((item) => {
    const img = item.querySelector("img");

    gsap.to(img, {
      scale: 1.1,
      scrollTrigger: {
        trigger: item,
        start: "30% 80%", // 스크롤이 80% 도달하면 시작
        end: "70% 50%", // 스크롤이 20% 지나가면 끝
        toggleActions: "play reverse none reverse",
        // markers: true,
      },
    });
  });

  const portfolioItemsTitleBg = gsap.utils.toArray("#portfolio-list .portfolio-item");
  portfolioItemsTitleBg.forEach((item) => {
    const titleBg = item.querySelector(".title-bg");
    const titleName = item.querySelector(".title-name");
    const subTitle = item.querySelector(".sub-title");
    const desc = item.querySelector(".desc");
    const linkItem = item.querySelectorAll(".sec_portfolio .link-list .item");

    // set(); 초기 값
    gsap.set(titleBg, { y: "100%", });
    gsap.set(titleName, { y: "100%", });
    gsap.set(subTitle, { y: "10%", opacity: 0, });
    gsap.set(desc, { y: "20%", opacity: 0, });
    gsap.set(linkItem, { y: "20%", opacity: 0, stagger: 0.2 });
    const loading = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "20% 50%",
        end: "100% 0%",
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });

    loading.to(titleBg, { y: "0%", });
    loading.to(titleBg, { y: "-100%", });
    loading.to(titleName, { y: "0%", }, "-=0.5");
    loading.to(subTitle, { y: "0%", opacity: 1, }, "-=0.5");
    loading.to(desc, { y: "0%", opacity: 1, }, "-=0.45");
    loading.to(linkItem, { y: "0%", opacity: 1, stagger: 0.2 }, "-=0.4");
  });
});