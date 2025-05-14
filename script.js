 const imgs = document.querySelectorAll('.carousel img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;
  let autoSlide;
  function showImage(i) {
    index = (i + imgs.length) % imgs.length;
    imgs.forEach((img, idx) => {
      // Usamos opacity para transição suave
      if (idx === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }
  function next() {
    showImage(index + 1);
  }
  function prev() {
    showImage(index - 1);
  }
  function resetAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(next, 4000);
  }
  // Inicializa o slide automático
  autoSlide = setInterval(next, 4000);
  nextBtn.onclick = () => {
    next();
    resetAuto();
  };
  prevBtn.onclick = () => {
    prev();
    resetAuto();
  };
