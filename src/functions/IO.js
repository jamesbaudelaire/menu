export const IO = tar => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      let el = entry.target;
      if (entry.isIntersecting) {
        let url = el.dataset.img;
        if (url) {
          el.style.backgroundImage = `url('${url}')`;
        }
        el.classList.add("io");
      }
    });
  });

  io.observe(tar);
};
