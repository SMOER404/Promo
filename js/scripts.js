$('.js-phone-mask').mask("+7(000) 000-0000");
    
    function startSlider() {
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 400, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 400, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

      $('a.control_prev').click(function () {
          moveLeft();
      });

      $('a.control_next').click(function () {
          moveRight();
      });
    }
    startSlider();

    function startModal() {
        var modal = $('.modal');
        var form = $('.form');

        function showModal() {
            $('.buy-btn').click(function(){
                form.show();
            });
            $('.btn-reviews').click(function(){
                modal.show();
            });
        }

        function closeModal() {
            $('.close-btn').click(function(){
                $('.form').hide();
            });
            $('.mobal__button-close').click(function(){
                $('.modal').hide();
            });
        }
        showModal();
        closeModal();
    }
    startModal();  
  