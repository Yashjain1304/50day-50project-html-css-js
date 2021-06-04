const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    // console.log(typeof target, target);
    const c = +counter.innerText;

    const increment = target / 300;

    if (c < target) {
      if (Math.ceil(c + increment) > target) {
        counter.innerText = `${target}`;
      } else counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  };
  updateCounter();
});
