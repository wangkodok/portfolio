window.addEventListener("load", () => {
  const cursor = document.querySelector(".cursor");
  const imgWrap = document.querySelectorAll(".horizontal-scroll .img-wrap");
  const workCursor = document.querySelector(".work-cursor");
  // const workCursorItem = document.querySelectorAll(".work-cursor .item");
  // console.log(workCursorItem)

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

    if (e.target.tagName === "A" || e.target.tagName === "IMG") {
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

      const windowWidth = window.innerWidth;

      if (windowWidth <= 1200) {
        // workCursor.style.transform = `translate3d(${mouseX - scrollLeft}px, ${mouseY - scrollTop}px, 0)`;
        // workCursor.style.opacity = "1";
      }

      isMoving = false;
    }
    
    if (isATag) {
      cursor.classList.add("active");
    } else {
      cursor.classList.remove("active");
    }

    requestAnimationFrame(animateCursor);
  }

  document.addEventListener("mousemove", cursorMouseMove);
  requestAnimationFrame(animateCursor);
});
