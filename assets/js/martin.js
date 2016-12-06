'use strict';
function waithide()
{
  var obj = document.getElementById('thisone');
  obj.style.opacity = '0';
  window.setTimeout(
    function removethis()
    {
      obj.style.display = 'none';
    }, 300);
}
