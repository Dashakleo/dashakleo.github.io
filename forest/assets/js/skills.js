const skills = function() {
  const skill = document.querySelectorAll('.skill');
  let counter = 0;
  
  [].slice.call(skill).forEach(skill => {
    let circle = skill.children;
    setTimeout(() => {
      circle[0].classList.add('active')
    }, counter*100);
    counter++;
  });
}

export default skills
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJza2lsbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2tpbGxzID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc2tpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGwnKTtcclxuICBsZXQgY291bnRlciA9IDA7XHJcbiAgXHJcbiAgW10uc2xpY2UuY2FsbChza2lsbCkuZm9yRWFjaChza2lsbCA9PiB7XHJcbiAgICBsZXQgY2lyY2xlID0gc2tpbGwuY2hpbGRyZW47XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2lyY2xlWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9LCBjb3VudGVyKjEwMCk7XHJcbiAgICBjb3VudGVyKys7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNraWxscyJdLCJmaWxlIjoic2tpbGxzLmpzIn0=
