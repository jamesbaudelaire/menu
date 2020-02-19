export const IO = tar => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      let el = entry.target;
      if (entry.intersectionRatio > 0.1) {
        let url = el.dataset.img;
        if (url) {
          let img = new Image();
          img.src = url;

          img.onload = () => {
            el.style.backgroundImage = `url('${url}')`;

            el.classList.add("io");
          };
        }
      }
    });
  }, options);

  io.observe(tar);
};
