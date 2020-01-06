export const IO = tar => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      let el = entry.target;
      if (entry.intersectionRatio > 0.5) {
        el.classList.add("io");
        el.style.backgroundImage = `url('${el.dataset.img}')`;
        el.style.opacity = "1";
      } else {
        el.classList.remove("io");
      }
    });
  }, options);

  io.observe(tar);
};
