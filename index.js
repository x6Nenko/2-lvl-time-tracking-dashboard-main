fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(obj => {
      const category = obj.title;
      const current = obj.timeframes.weekly.current;
      const previous = obj.timeframes.weekly.previous;

      const detailCard = document.querySelector(`.stats-card.${category.toLowerCase().replace(' ', '-')}`);
      const showCurrent = detailCard.querySelector('.stats-info .down-side h1 span');
      const showPrevious = detailCard.querySelector('.stats-info .down-side p span');

      showCurrent.textContent = current;
      showPrevious.textContent = previous;
    });
  })
  .catch(error => console.error(error));
  

// Get all the switch state elements
const switchStates = document.querySelectorAll('.switch-state');
console.log(switchStates)

// Add click event listener to each switch state element
switchStates.forEach(switchState => {
  switchState.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove active class from currently active switch state element
    const currentActive = document.querySelector('.switch-state.active');
    currentActive.classList.remove('active');

    // Add active class to clicked switch state element
    switchState.classList.add('active');

    const switchData = switchState.textContent.toLowerCase();
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(obj => {
          const category = obj.title;
          const current = obj.timeframes[switchData].current;
          const previous = obj.timeframes[switchData].previous;

          const detailCard = document.querySelector(`.stats-card.${category.toLowerCase().replace(' ', '-')}`);
          const showCurrent = detailCard.querySelector('.stats-info .down-side h1 span');
          const showPrevious = detailCard.querySelector('.stats-info .down-side p span');

          showCurrent.textContent = current;
          showPrevious.textContent = previous;
    });
  })
  .catch(error => console.error(error));
  });
});