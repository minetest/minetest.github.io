document.addEventListener('DOMContentLoaded', function() {
  // Handle mobile navigation bar toggling
  Array.prototype.forEach.call(
    document.querySelectorAll('.navbar-burger'),

    function($element) {
      $element.addEventListener('click', function() {
        var $target = document.getElementById($element.getAttribute('data-target'));

        $element.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    }
  );
});
