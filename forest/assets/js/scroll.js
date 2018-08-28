const scroll = function() {
  $('.scroll').click(function (e) {
    e.preventDefault();
    let scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    }
  });
}

export default scroll
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgJCgnLnNjcm9sbCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgc2Nyb2xsX2VsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICBpZiAoJChzY3JvbGxfZWwpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3B9LCA1MDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JvbGwiXSwiZmlsZSI6InNjcm9sbC5qcyJ9
