
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

    //set input value as variable to populate #word-container
    //also hide $enterWordContianer on click
    let $inputValue = ''

    $('#enterWord').on('click', ()=> {  
        $inputValue = $('#theWord').val();
        for (let i = 0; i < $inputValue.length; i++) {
            console.log($inputValue[i]);  
        }
        $splitWord($inputValue)
        $enterWordContainer.css('display', 'none')
    })

    //function to split $inputValue and appendTo #wordInPlay
    const $splitWord = (input) => {
        let $wordArray = input.split("")
        for (let i = 0; i < $wordArray.length; i++) {
            if ($wordArray[i] === " ") {
                const $eachLtr = $(`<div class="space unknownLtrs">${$wordArray[i]}</div>`)
                $eachLtr.appendTo($('#wordInPlay'))
            } else {
            const $eachLtr = $(`<div class="${$wordArray[i]} unknownLtrs">${$wordArray[i]}</div>`); 
            $eachLtr.appendTo($('#wordInPlay'))  
            }
        }
    }
    




})