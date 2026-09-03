const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

document.getElementById('letsGoBtn').addEventListener('click', () => {
  screen1.classList.add('hidden');
  screen2.classList.remove('hidden');
});

document.getElementById('myLocationBtn').addEventListener('click', () => {
  document.getElementById('fromInput').value = 'My Location';
}); 
const screen3 = document.getElementById('screen3');

document.getElementById('planJourneyBtn').addEventListener('click', () => {
  // (keep the existing validation code here, then add:)
  screen2.classList.add('hidden');
  screen3.classList.remove('hidden');
});

document.getElementById('nextPrefBtn').addEventListener('click', () => {
  const selected = Array.from(document.querySelectorAll('.pref-check:checked'))
    .map(cb => cb.value);
  console.log('Selected vibes:', selected);
  alert(`You picked: ${selected.join(', ')}. Step 4 coming next!`);
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