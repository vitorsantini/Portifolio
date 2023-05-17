var toggleDarkButton = document.getElementById('dark-theme-button');
var toggleLightButton = document.getElementById('light-theme-button');
var dark = document.querySelectorAll('.dm');
var light = document.querySelectorAll('.lm');

toggleDarkButton.addEventListener('click', function() {
  dark.forEach(function(dark) {
    dark.classList.toggle('hiden');
  });
});
toggleLightButton.addEventListener('click', function() {
    light.forEach(function(light) {
      light.classList.toggle('hiden');
    });
  });

var htmlTag = document.getElementById('html');

toggleDarkButton.addEventListener('click', function() {
  if (toggleDarkButton.checked) {
    htmlTag.classList.add('dark-mode');
    htmlTag.classList.remove('light-mode');
  } else {
    htmlTag.classList.add('light-mode');
    htmlTag.classList.remove('dark-mode');
  }
});

console.log(htmlTag);