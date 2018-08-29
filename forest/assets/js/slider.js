
  let counter = 0,
    duration = 500,
    inProcess = false;

  let moveSlide = function (container, direction) {
    let items = $('.slider__item', container),
      activeItem = items.filter('.active');
    direction = direction === 'down' ? 100 : -100;

    if (counter < 0) counter = items.length - 1;
    if (counter >= items.length) counter = 0;
    
    
    let reqItem = items.eq(counter);

    activeItem.animate({
      'top': direction + '%'
    }, duration);

    reqItem.css('top', `${direction*-1}%`);

    reqItem.animate({
      'top': 0
    }, duration, function () {
      activeItem.removeClass('active')
        .css('top', `${direction*-1}%`);
      $(this).addClass('active');

      inProcess = false;
    });
  }
  const fadeSlide = function(container, item) {
    let items = $(item, container),
      activeItem = items.filter('.active'),
      reqItem = items.eq(counter);  

    activeItem.fadeOut('slow');
    activeItem.removeClass('active');
    reqItem.fadeIn('slow');
    reqItem.addClass('active');
  }
  const showDiscription = function(container, item) {
    let items = $(`.${item}`, container),
      activeItem = items.filter('.active'),
      reqItem = items.eq(counter);
    activeItem.removeClass('active');
    reqItem.addClass('active');
  }

  const slider = function () {
      $('.slider-top').on('click', function (e) {
        e.preventDefault();

        if (!inProcess) {
          inProcess = true;
          counter++;

          moveSlide($('.slider-top'), 'down');
          moveSlide($('.slider-bottom'), 'up');
          fadeSlide($('.slider'), '.slider__item');
          showDiscription($('.works-left'), 'works-left__content');
        }
      });
      $('.slider-bottom').on('click', function (e) {
        e.preventDefault();

        if (!inProcess) {
          inProcess = true;

          counter--;
          moveSlide($('.slider-top'), 'up');
          moveSlide($('.slider-bottom'), 'down');
          fadeSlide($('.slider'), '.slider__item');
          showDiscription($('.works-left'), 'works-left__content')
        }
      });
    }

export default slider
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgbGV0IGNvdW50ZXIgPSAwLFxyXG4gICAgZHVyYXRpb24gPSA1MDAsXHJcbiAgICBpblByb2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgbGV0IG1vdmVTbGlkZSA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRpcmVjdGlvbikge1xyXG4gICAgbGV0IGl0ZW1zID0gJCgnLnNsaWRlcl9faXRlbScsIGNvbnRhaW5lciksXHJcbiAgICAgIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKTtcclxuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gMTAwIDogLTEwMDtcclxuXHJcbiAgICBpZiAoY291bnRlciA8IDApIGNvdW50ZXIgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgaWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSBjb3VudGVyID0gMDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBsZXQgcmVxSXRlbSA9IGl0ZW1zLmVxKGNvdW50ZXIpO1xyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICd0b3AnOiBkaXJlY3Rpb24gKyAnJSdcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuXHJcbiAgICByZXFJdGVtLmNzcygndG9wJywgYCR7ZGlyZWN0aW9uKi0xfSVgKTtcclxuXHJcbiAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogMFxyXG4gICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAuY3NzKCd0b3AnLCBgJHtkaXJlY3Rpb24qLTF9JWApO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIGluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGZhZGVTbGlkZSA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgaXRlbSkge1xyXG4gICAgbGV0IGl0ZW1zID0gJChpdGVtLCBjb250YWluZXIpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuYWN0aXZlJyksXHJcbiAgICAgIHJlcUl0ZW0gPSBpdGVtcy5lcShjb3VudGVyKTsgIFxyXG5cclxuICAgIGFjdGl2ZUl0ZW0uZmFkZU91dCgnc2xvdycpO1xyXG4gICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICByZXFJdGVtLmZhZGVJbignc2xvdycpO1xyXG4gICAgcmVxSXRlbS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG4gIGNvbnN0IHNob3dEaXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgaXRlbSkge1xyXG4gICAgbGV0IGl0ZW1zID0gJChgLiR7aXRlbX1gLCBjb250YWluZXIpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuYWN0aXZlJyksXHJcbiAgICAgIHJlcUl0ZW0gPSBpdGVtcy5lcShjb3VudGVyKTtcclxuICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgcmVxSXRlbS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoJy5zbGlkZXItdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgICBpblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgY291bnRlcisrO1xyXG5cclxuICAgICAgICAgIG1vdmVTbGlkZSgkKCcuc2xpZGVyLXRvcCcpLCAnZG93bicpO1xyXG4gICAgICAgICAgbW92ZVNsaWRlKCQoJy5zbGlkZXItYm90dG9tJyksICd1cCcpO1xyXG4gICAgICAgICAgZmFkZVNsaWRlKCQoJy5zbGlkZXInKSwgJy5zbGlkZXJfX2l0ZW0nKTtcclxuICAgICAgICAgIHNob3dEaXNjcmlwdGlvbigkKCcud29ya3MtbGVmdCcpLCAnd29ya3MtbGVmdF9fY29udGVudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICQoJy5zbGlkZXItYm90dG9tJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgICBpblByb2Nlc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGNvdW50ZXItLTtcclxuICAgICAgICAgIG1vdmVTbGlkZSgkKCcuc2xpZGVyLXRvcCcpLCAndXAnKTtcclxuICAgICAgICAgIG1vdmVTbGlkZSgkKCcuc2xpZGVyLWJvdHRvbScpLCAnZG93bicpO1xyXG4gICAgICAgICAgZmFkZVNsaWRlKCQoJy5zbGlkZXInKSwgJy5zbGlkZXJfX2l0ZW0nKTtcclxuICAgICAgICAgIHNob3dEaXNjcmlwdGlvbigkKCcud29ya3MtbGVmdCcpLCAnd29ya3MtbGVmdF9fY29udGVudCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlciJdLCJmaWxlIjoic2xpZGVyLmpzIn0=
