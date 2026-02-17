const bioBtn = document.getElementById('bioBtn');
const resumeBtn = document.getElementById('resumeBtn');
const bioSection = document.getElementById('biodata');
const resumeSection = document.getElementById('resume');

bioBtn.addEventListener('click', () => {
  bioSection.classList.remove('hidden');
  resumeSection.classList.add('hidden');
  bioBtn.classList.add('active');
  resumeBtn.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

resumeBtn.addEventListener('click', () => {
  resumeSection.classList.remove('hidden');
  bioSection.classList.add('hidden');
  resumeBtn.classList.add('active');
  bioBtn.classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
