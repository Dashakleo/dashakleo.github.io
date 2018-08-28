const preloader = (function () {
  let percentsTotal = 0,
    preloader = $('.preloader');

  let imgPath = $('*').map(function (ndx, element) {
    let background = $(element).css('background-image'),
      img = $(element).is('img'),
      path = '';

    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }

    if (img) {
      path = $(element).attr('src');
    }

    if (path) return path

  });

  const setPercents = function (total, current) {
    let persents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(persents + '%');

    if (persents >= 100) {
      preloader.fadeOut();
    }
  }

  const loadImages = function (images) {

    if (!images.length) preloader.fadeOut();

    images.forEach(function (img, i, images) {
      let fakeImage = $('<img>', {
        attr: {
          src: img
        }
      });

      fakeImage.on('load error', function () {
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    });
  }

  return {
    init: function () {
      let imgs = imgPath.toArray();

      loadImages(imgs);
    }
  }
}());

export {preloader}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcmVsb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlbG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgcGVyY2VudHNUb3RhbCA9IDAsXHJcbiAgICBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XHJcblxyXG4gIGxldCBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XHJcbiAgICBsZXQgYmFja2dyb3VuZCA9ICQoZWxlbWVudCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXHJcbiAgICAgIGltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpLFxyXG4gICAgICBwYXRoID0gJyc7XHJcblxyXG4gICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltZykge1xyXG4gICAgICBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdzcmMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGF0aCkgcmV0dXJuIHBhdGhcclxuXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNldFBlcmNlbnRzID0gZnVuY3Rpb24gKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICBsZXQgcGVyc2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAkKCcucHJlbG9hZGVyX19wZXJjZW50cycpLnRleHQocGVyc2VudHMgKyAnJScpO1xyXG5cclxuICAgIGlmIChwZXJzZW50cyA+PSAxMDApIHtcclxuICAgICAgcHJlbG9hZGVyLmZhZGVPdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1hZ2VzKSB7XHJcblxyXG4gICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcsIGksIGltYWdlcykge1xyXG4gICAgICBsZXQgZmFrZUltYWdlID0gJCgnPGltZz4nLCB7XHJcbiAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgc3JjOiBpbWdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICBzZXRQZXJjZW50cyhpbWFnZXMubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG4gICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcbmV4cG9ydCB7cHJlbG9hZGVyfSJdLCJmaWxlIjoicHJlbG9hZGVyLmpzIn0=
