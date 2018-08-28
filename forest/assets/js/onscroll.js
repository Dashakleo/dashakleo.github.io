import skills from './skills.js'

const onScroll = function() {
  var navigationElem = document.getElementById('postsNavigation');
  var sidenavElem = document.getElementById('postsSidenav');
  var menuSelector = document.querySelector(".posts__menu-side");
  var skillsElem = document.querySelector('.skills');
  var skillsFlag = false;
  var animationElem = document.querySelectorAll('.animate');

  if (navigationElem) {
    var navigationTop = document.querySelector('.posts-block').getBoundingClientRect().top + window.pageYOffset;
  }

  window.onscroll = function() {
    if (navigationElem) {
      if (navigationElem.classList.contains('fixed') && window.pageYOffset < navigationTop -20) {
        navigationElem.classList.remove('fixed');
      } else if (window.pageYOffset > navigationTop - 30) {
        navigationElem.classList.add('fixed');
      }
    }

    if (sidenavElem) {
      if (window.pageYOffset > document.querySelector('.blog').getBoundingClientRect().bottom + window.pageYOffset && document.documentElement.clientWidth < 1100) {
        sidenavElem.style.display = 'flex'
      } else if (sidenavElem.style.width !== '250px') {
        sidenavElem.style.display = 'none'
      }
      document.querySelectorAll('.sidenav__items a').forEach((a) => {
        var hash = a.getAttribute("href");
        var target = $(hash);
        if (target.position().top <= window.pageYOffset) {
          document.querySelector('.sidenav__items .active').classList.remove("active");
          a.classList.add("active");
        }
      });
    }

    if (menuSelector) {
      document.querySelectorAll('.posts__menu-side a').forEach((a) => {
        var hash = a.getAttribute("href");
        var target = $(hash);
        if (target.position().top <= window.pageYOffset) {
          document.querySelector('.navigation_link.active').classList.remove("active");
          a.classList.add("active");
        }
      });
    }

    if (skillsElem) {
      if (window.pageYOffset > skillsElem.getBoundingClientRect().top)
        if (!skillsFlag) {
          skills();
        }
    }

    if (animationElem) {
      [].slice.call(animationElem).forEach((elem) => {
        let offsetTop = 0;
        let element = elem;
        while(element) {
          offsetTop += (element.offsetTop - element.scrollTop + element.clientTop);
          element = element.offsetParent;
        }
        if (offsetTop - window.pageYOffset - document.documentElement.clientHeight <=0 && 
          window.pageYOffset + document.documentElement.clientHeight/3 - elem.offsetHeight - offsetTop <= 0) {
            let animationType = elem.dataset.animation;
            elem.classList.add(animationType)
        }
      })
    }
  };
}

export default onScroll


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvbnNjcm9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2tpbGxzIGZyb20gJy4vc2tpbGxzLmpzJ1xyXG5cclxuY29uc3Qgb25TY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgbmF2aWdhdGlvbkVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdHNOYXZpZ2F0aW9uJyk7XHJcbiAgdmFyIHNpZGVuYXZFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RzU2lkZW5hdicpO1xyXG4gIHZhciBtZW51U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc3RzX19tZW51LXNpZGVcIik7XHJcbiAgdmFyIHNraWxsc0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbGxzJyk7XHJcbiAgdmFyIHNraWxsc0ZsYWcgPSBmYWxzZTtcclxuICB2YXIgYW5pbWF0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlJyk7XHJcblxyXG4gIGlmIChuYXZpZ2F0aW9uRWxlbSkge1xyXG4gICAgdmFyIG5hdmlnYXRpb25Ub3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdHMtYmxvY2snKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChuYXZpZ2F0aW9uRWxlbSkge1xyXG4gICAgICBpZiAobmF2aWdhdGlvbkVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IG5hdmlnYXRpb25Ub3AgLTIwKSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBuYXZpZ2F0aW9uVG9wIC0gMzApIHtcclxuICAgICAgICBuYXZpZ2F0aW9uRWxlbS5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNpZGVuYXZFbGVtKSB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxMTAwKSB7XHJcbiAgICAgICAgc2lkZW5hdkVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICB9IGVsc2UgaWYgKHNpZGVuYXZFbGVtLnN0eWxlLndpZHRoICE9PSAnMjUwcHgnKSB7XHJcbiAgICAgICAgc2lkZW5hdkVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlbmF2X19pdGVtcyBhJykuZm9yRWFjaCgoYSkgPT4ge1xyXG4gICAgICAgIHZhciBoYXNoID0gYS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGhhc2gpO1xyXG4gICAgICAgIGlmICh0YXJnZXQucG9zaXRpb24oKS50b3AgPD0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZW5hdl9faXRlbXMgLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVudVNlbGVjdG9yKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0c19fbWVudS1zaWRlIGEnKS5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgdmFyIGhhc2ggPSBhLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoaGFzaCk7XHJcbiAgICAgICAgaWYgKHRhcmdldC5wb3NpdGlvbigpLnRvcCA8PSB3aW5kb3cucGFnZVlPZmZzZXQpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX2xpbmsuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChza2lsbHNFbGVtKSB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBza2lsbHNFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcClcclxuICAgICAgICBpZiAoIXNraWxsc0ZsYWcpIHtcclxuICAgICAgICAgIHNraWxscygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYW5pbWF0aW9uRWxlbSkge1xyXG4gICAgICBbXS5zbGljZS5jYWxsKGFuaW1hdGlvbkVsZW0pLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBsZXQgb2Zmc2V0VG9wID0gMDtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW07XHJcbiAgICAgICAgd2hpbGUoZWxlbWVudCkge1xyXG4gICAgICAgICAgb2Zmc2V0VG9wICs9IChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3ApO1xyXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0VG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA8PTAgJiYgXHJcbiAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LzMgLSBlbGVtLm9mZnNldEhlaWdodCAtIG9mZnNldFRvcCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb25UeXBlID0gZWxlbS5kYXRhc2V0LmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvblR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9uU2Nyb2xsXHJcblxyXG4iXSwiZmlsZSI6Im9uc2Nyb2xsLmpzIn0=
