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
    
    $('.modalcall').on('click', function(e) {
      e.preventDefault()
      let modal = $(this).attr("data-modal")
      $(`#${modal}`).addClass('visible').addClass('active').show()
      $('body').addClass('dimmable dimmed scrolling')

    })
    
   /*  $(document).keyup(function(e) {
        if (e.key === "Escape") { 
            $('.modal').modal('hide');
        }
    }); */

})
