

$(document).ready(function() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    let $dropdown = dropdown
    $dropdown.addEventListener('click', event => {
      if (event.target.classList.contains('dropdown')) {
        $dropdown.querySelectorAll('.item').forEach(el=> {
          el.classList.remove('active')
        })
        event.target.classList.add('active')
        event.target.querySelector('.menu').classList.add('visible')
      }     
    })

    $dropdown.querySelectorAll('.item').forEach(item => {
      item.addEventListener('click', event => {
        event.stopPropagation()
        console.log(event.target.value)
/*         $dropdown.querySelector('.default.text').value = event.target.querySelector('.text').value
 */      })
    })
  })


    $(document).click(function(event) {
        if (!$(event.target).closest(".menu,.dropdown").length) {
        $('.menu').removeClass('visible')
        $('.dropdown').removeClass('active')
        }
    });

    $('.close').on('click', function(e) {
      e.preventDefault()
      $(this).closest('.modals').removeClass('visible').removeClass('active').hide()
      $('body').removeClass('dimmable dimmed scrolling')
    })
    $('.Uploader_uploadButton__2Oh-Z button').on('click', function(e) {
      e.preventDefault()
      $(this).siblings('input[type="file"]').trigger('click')
    })
    
    $('.modalcall').on('click', function(e) {
      e.preventDefault()
      let modal = $(this).attr("data-modal")
      $(`#${modal}`).addClass('visible').addClass('active').show()
      $('body').addClass('dimmable dimmed scrolling')

    })

    $('input[name="login"]').mask('+7 (999)999-99-99')
    $('#agentPhone').mask('+7 (999)999-99-99')


    $('sup').on('mouseenter', function() {
      $(this).find('.popup').addClass('visible')
    })
    $('.popup').on('mouseleave', function() {
       $(this).removeClass('visible')
    })

    function closeByClickOutside(element, button) {
      $(document).click(function(event) {
          if (!$(event.target).closest(`${element},${button}`).length) {
              $(button).removeClass('visible')
              $(element).removeClass('visible')
          }
      });
      
      $(document).keyup(function(e) {
          if (e.key === "Escape") { // escape key maps to keycode `27`
              $(button).removeClass('visible')
              $(element).removeClass('visible')
          }
      });
    }

    closeByClickOutside('.popup', 'sup')
    
   /*  $(document).keyup(function(e) {
        if (e.key === "Escape") { 
            $('.modal').modal('hide');
        }
    }); */

})
