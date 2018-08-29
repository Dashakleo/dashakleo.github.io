const flip = function() {
  const flip = document.querySelector('#loginFlip');
  const flipBack = document.querySelector('#loginFlipBack');
  const flipper = document.querySelector('.flipper');
  if (flip) {
    flip.addEventListener('click', () => {
      flipper.classList.add('flip');
      flip.style.display = 'none';
    })
  }
  if (flipBack) {
    flipBack.addEventListener('click', () => {
      flipper.classList.remove('flip');
      flip.style.display = 'block';
    })
  }
}

export default flip
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmbGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZsaXAgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBmbGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luRmxpcCcpO1xyXG4gIGNvbnN0IGZsaXBCYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luRmxpcEJhY2snKTtcclxuICBjb25zdCBmbGlwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsaXBwZXInKTtcclxuICBpZiAoZmxpcCkge1xyXG4gICAgZmxpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZmxpcHBlci5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XHJcbiAgICAgIGZsaXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pXHJcbiAgfVxyXG4gIGlmIChmbGlwQmFjaykge1xyXG4gICAgZmxpcEJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGZsaXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xyXG4gICAgICBmbGlwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZsaXAiXSwiZmlsZSI6ImZsaXAuanMifQ==
