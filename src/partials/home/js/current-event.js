var mvRight = document.querySelector('.move-to-right');
var mvLeft = document.querySelector('.move-to-left');
var ce = document.querySelector('#current-event');

var options = {
  threshold: 0.5,
};

observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      mvRight.classList.add('to-right');
      mvLeft.classList.add('to-left');
    } else {
      // mvRight.classList.remove('to-right');
      // mvLeft.classList.remove('to-left');
    }
  });
}, options);

observer.observe(ce);
