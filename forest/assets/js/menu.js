const menu = function() {
  let menuIcon = document.querySelector('#menu-icon');
  if (menuIcon) {
    const menu = document.querySelector('.menu-header');
    menuIcon.onclick = function (e) {
      let target = e.target;
      while (target !== menuIcon) {
        target = target.parentNode;
      }
      target.classList.toggle("change");
      menu.classList.toggle('active');
    };
  }
}

export default menu
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1pY29uJyk7XHJcbiAgaWYgKG1lbnVJY29uKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaGVhZGVyJyk7XHJcbiAgICBtZW51SWNvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICB3aGlsZSAodGFyZ2V0ICE9PSBtZW51SWNvbikge1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwiZmlsZSI6Im1lbnUuanMifQ==
