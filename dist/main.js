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


  $(document).ready(function () {
    $(document).click(function(event) {
        if (!$(event.target).closest(".menu,.dropdown").length) {
        $('.menu').removeClass('visible')
        $('.dropdown').removeClass('active')
        }
    });
    
   /*  $(document).keyup(function(e) {
        if (e.key === "Escape") { 
            $('.modal').modal('hide');
        }
    }); */
});
})
