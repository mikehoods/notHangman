
$(()=> {
    // Establish jQuery variables for #playNow button and #enterWord-container
    const $playNow = $('#playNow')
    const $enterWordContainer = $('#enterWord-container')
    // Click event to display #enterWord-container and hide playNow button
    $playNow.on('click', ()=> {
        $enterWordContainer.css('display', 'block')
        $playNow.css('display', 'none')
    })
    //set input to only accept letters
    // function alphaOnly(event) {
    //     var key = event.keyCode;
    //     return ((key >= 65 && key <= 90) || key == 8);
    //   };





})