const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');
const screen5 = document.getElementById('screen5');
const screen6 = document.getElementById('screen6');
const screen7 = document.getElementById('screen7');
const screen8 = document.getElementById('screen8');
const screen9 = document.getElementById('screen9');
const screen10 = document.getElementById('screen10');
const screen11 = document.getElementById('screen11');

document.getElementById('letsGoBtn').addEventListener('click', () => {
  screen1.classList.add('hidden');
  screen2.classList.remove('hidden');
});

document.getElementById('myLocationBtn').addEventListener('click', () => {
  document.getElementById('fromInput').value = 'My Location';
});

document.getElementById('planJourneyBtn').addEventListener('click', () => {
  const from = document.getElementById('fromInput').value;
  const to = document.getElementById('toInput').value;
  if (!from || !to) {
    alert('Please enter both From and To!');
    return;
  }
  screen2.classList.add('hidden');
  screen3.classList.remove('hidden');
});

document.getElementById('nextPrefBtn').addEventListener('click', () => {
  const selected = Array.from(document.querySelectorAll('.pref-check:checked'))
    .map(cb => cb.value);
  console.log('Selected vibes:', selected);
  screen3.classList.add('hidden');
  screen4.classList.remove('hidden');
});

// Toggle active state for time buttons
document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Toggle active state for budget buttons
document.querySelectorAll('.budget-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.budget-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.getElementById('showRouteBtn').addEventListener('click', () => {
  const time = document.querySelector('.time-btn.active').dataset.value;
  const budget = document.querySelector('.budget-btn.active').dataset.value;
  screen4.classList.add('hidden');
  screen5.classList.remove('hidden');
});
document.querySelectorAll('.route-card').forEach(card => {
  card.addEventListener('click', () => {
    const routeName = card.dataset.route;
screen5.classList.add('hidden');
screen6.classList.remove('hidden');
  });
});
// Clicking a stop pin opens its detail screen
document.querySelectorAll('.stop-pin').forEach(pin => {
  pin.addEventListener('click', () => {
    if (pin.classList.contains('end')) return; // Kollam pin does nothing
    screen6.classList.add('hidden');
    screen7.classList.remove('hidden');
  });
});

document.getElementById('backFromStopBtn').addEventListener('click', () => {
  screen7.classList.add('hidden');
  screen6.classList.remove('hidden');
});

document.getElementById('addToRouteBtn').addEventListener('click', () => {
  alert('Added to your route! ❤️');
  screen7.classList.add('hidden');
  screen6.classList.remove('hidden');
});

document.getElementById('startAdventureBtn').addEventListener('click', () => {
  screen6.classList.add('hidden');
  screen8.classList.remove('hidden');
});
document.getElementById('backFromFullRouteBtn').addEventListener('click', () => {
  screen8.classList.add('hidden');
  screen6.classList.remove('hidden');
});

document.getElementById('startNavigationBtn').addEventListener('click', () => {
  screen8.classList.add('hidden');
  screen9.classList.remove('hidden');
});

document.getElementById('exitNavBtn').addEventListener('click', () => {
  screen9.classList.add('hidden');
  screen8.classList.remove('hidden');
});

document.getElementById('openChatBtn').addEventListener('click', () => {
  screen9.classList.add('hidden');
  screen10.classList.remove('hidden');
});

document.getElementById('backFromChatBtn').addEventListener('click', () => {
  screen10.classList.add('hidden');
  screen9.classList.remove('hidden');
});
document.getElementById('backFromSummaryBtn').addEventListener('click', () => {
  screen11.classList.add('hidden');
  screen9.classList.remove('hidden');
});

document.getElementById('saveTripBtn').addEventListener('click', () => {
  alert('Trip saved to your memories! 🎉 Congrats, you finished the whole flow!');
});