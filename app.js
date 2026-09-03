const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

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
  alert(`Planning journey from ${from} to ${to}. Step 3 coming next!`);
});const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

document.getElementById('letsGoBtn').addEventListener('click', () => {
  screen1.classList.add('hidden');
  screen2.classList.remove('hidden');
});

document.getElementById('myLocationBtn').addEventListener('click', () => {
  document.getElementById('fromInput').value = 'My Location';
});

document.getElementById('planJourneyBtn').addEventListener('click', () => {
  const from = document.getElementById('fromInput').value;
  const to = do