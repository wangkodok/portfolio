window.addEventListener("DOMContentLoaded", function () {
  const secVisualTtext = document.querySelectorAll(".sec-visual .title-area .text");

  secVisualTtext.forEach(element => {
    const textOn = element.querySelector(".on");
    const textOff = element.querySelector(".off");

    if (!textOn || !textOff) return;
    
    setInterval(() => {
      if (textOn.classList.contains("on")) {
        textOn.classList.add("off");
        textOn.classList.remove("on");
      } else {
        textOn.classList.add("on");
        textOn.classList.remove("off");
      }
    }, 1250);

    setInterval(() => {
      if (textOff.classList.contains("off")) {
        textOff.classList.add("on");
        textOff.classList.remove("off");
      } else {
        textOff.classList.add("off");
        textOff.classList.remove("on");
      }
    }, 1250);
  });









  // const text = document.querySelector(".textTyping");
  // const word = ["ui developer", "ux designer"];

  // // 단어 앞에 뛰어쓰기
  // const frontSpacedWord = word.map((word) => {
  //   return " " + word;
  // });

  // // 단어 뒤에 뛰어쓰기
  // // const backSpacedWord = word.map((word) => {
  // //     return word + " ";
  // // });

  // let wordIndex = 0;
  // let charIndex = 0;
  // let isDeleting = false;

  // function typeEffect() {
  //   const currentWord = frontSpacedWord[wordIndex];
  //   const currentChar = currentWord.substring(0, charIndex);
  //   text.textContent = currentChar;
  //   text.classList.add("stop-blinking");

  //   if (!isDeleting && charIndex < currentWord.length) {
  //     charIndex = charIndex + 1;

  //     setTimeout(() => {
  //       typeEffect();
  //     }, 200);
  //   } else if (isDeleting && charIndex > 0) {
  //     charIndex = charIndex - 1;

  //     setTimeout(() => {
  //       typeEffect();
  //     }, 100);
  //   } else {
  //     isDeleting = !isDeleting;

  //     if (!isDeleting) {
  //       wordIndex = (wordIndex + 1) % frontSpacedWord.length;
  //     } else {
  //       wordIndex = wordIndex;
  //     }
  //     // wordIndex = !isDeleting ? (wordIndex + 1) % frontSpacedWord.length : wordIndex;

  //     text.classList.remove("stop-blinking");

  //     setTimeout(() => {
  //       typeEffect();
  //     }, 1000);
  //   }
  // };

  // // typeEffect();
});