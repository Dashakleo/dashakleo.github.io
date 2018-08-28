const sidenav = function() {
  const sidenavOpen = document.querySelector('#openSidenav');
  if (sidenavOpen) {
    sidenavOpen.addEventListener('click', () => {
      document.getElementById("postsSidenav").style.width = "250px";
      setTimeout(() =>{document.querySelector('.sidenav__items').style.display = 'block'}, 250)
    })
    document.querySelector('.wrapper').addEventListener('click', () => {
      document.getElementById("postsSidenav").style.width = "0px";
      document.querySelector('.sidenav__items').style.display = 'none'
    })
    document.querySelectorAll('.sidenav__items a ').forEach((a) => {
      a.addEventListener('click', () => {
        document.querySelector('.wrapper').click();
      })
    })
  }
}

export default sidenav
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaWRlbmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNpZGVuYXYgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBzaWRlbmF2T3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuU2lkZW5hdicpO1xyXG4gIGlmIChzaWRlbmF2T3Blbikge1xyXG4gICAgc2lkZW5hdk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdHNTaWRlbmF2XCIpLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+e2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2X19pdGVtcycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snfSwgMjUwKVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdHNTaWRlbmF2XCIpLnN0eWxlLndpZHRoID0gXCIwcHhcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVuYXZfX2l0ZW1zJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlbmF2X19pdGVtcyBhICcpLmZvckVhY2goKGEpID0+IHtcclxuICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLmNsaWNrKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZW5hdiJdLCJmaWxlIjoic2lkZW5hdi5qcyJ9
