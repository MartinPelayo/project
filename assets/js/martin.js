'use strict';
var elForm = document.getElementById('form');

elForm.addEventListener('submit', waithide)

function waithide(event)
{
  event.preventDefault();
  elForm.style.opacity = '0';
  window.setTimeout(
    function removethis()
    {
      elForm.style.display='none';
    }, 300);
}
