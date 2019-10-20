document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.dark-mode-checkbox');

  checkbox.checked = window.localStorage.getItem('darkMode') === 'true';

  checkbox.addEventListener('change', function (event) {
    window.localStorage.setItem('darkMode', event.currentTarget.checked);
  });
});
