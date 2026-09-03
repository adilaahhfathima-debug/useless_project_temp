const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');

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
  alert(`Time: ${time}, Budget: ${budget}. Step 5 coming next!`);
});