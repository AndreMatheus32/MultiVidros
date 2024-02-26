AOS.init();

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


var map = L.map('map').setView([-23.573560131714213, -51.48288673566767], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([-23.573560131714213, -51.48288673566767]).addTo(map)
  .bindPopup('Vidraçaria Multividros')
  .openPopup();




var whattsIcon = document.getElementById('whatts');
var whattsMsg = document.getElementById('whattsMsg');

whattsIcon.addEventListener('click', () => {
  console.log('click')
  if (whattsMsg.style.display == 'none') {
    whattsMsg.style.display = 'block';
  } else {
    whattsMsg.style.display = 'none'
  }

})





