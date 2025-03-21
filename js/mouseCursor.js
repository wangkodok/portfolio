window.addEventListener("load", () => {
  const cursor = document.querySelector(".cursor");
  const cursorView = document.querySelector(".cursor-view");
  const hover = document.querySelectorAll("a");

  let mouseX = 0;
  let mouseY = 0;
  let isMoving = false;
  let isATag = false;

  function cursorMouseMove(e) {
    if (e.isTrusted === true) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      isMoving = true;
    }

    console.log(e.target.tagName)
    if (e.target.tagName === "A") {
      isATag = true;
    } else {
      isATag = false;
    }
  }

  function animateCursor() {
    const scrollTop = document.documentElement.scrollTop || window.scrollY;
    const scrollLeft = document.documentElement.scrollLeft || window.scrollX;
    if (isMoving) {

      cursor.style.transform = `translate3d(${mouseX - scrollLeft}px, ${mouseY - scrollTop}px, 0)`;
      cursor.style.opacity = "1";

      cursorView.style.transform = `translate3d(${mouseX - scrollLeft}px, ${mouseY - scrollTop}px, 0)`;
      cursorView.style.opacity = "1";
      // cursorView도 동일하게 처리 가능
      // cursorView.style.transform = `translate3d(${mouseX - scrollLeft}px, ${mouseY - scrollTop}px, 0)`;

      isMoving = false;
    }
    
    if (isATag) {
      console.log("오버");
      cursor.style.display = "none";
      cursorView.style.display = "flex";

    } else {
      console.log("아웃");
      cursor.style.display = "block";
      cursorView.style.display = "none";
    }

    requestAnimationFrame(animateCursor);
  }

  document.addEventListener("mousemove", cursorMouseMove);
  requestAnimationFrame(animateCursor);
});
