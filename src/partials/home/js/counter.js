const counterSection = document.querySelector('#counter');

const numbers = document.querySelectorAll('.number');
const speed = 2500;
const counterOptions = {};

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      numbers.forEach((number) => {
        const updateCount = () => {
          const target = +number.getAttribute('data-number');
          const count = +number.innerText;

          var inc = (target / speed) * 41.2321;
          if (count < target) {
            number.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 50);
          } else {
            number.innerText = target;
          }
        };

        updateCount();
      });
    } else {
      // Comment on the following lines if you only want to
      // animate numbers the first time they appear on the screen.
      numbers.forEach((number) => {
        number.innerText = 0;
      });
    }
  });
}, counterOptions);

counterObserver.observe(counterSection);
