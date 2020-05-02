

$(()=> {
    // Establish jQuery variables for #playNow button and #enterWord-container
    const $playNow = $('#playNow')
    const $enterWordContainer = $('#enterWord-container')
    // Click event to display #enterWord-container and hide playNow button
    $playNow.on('click', ()=> {
        $enterWordContainer.css('display', 'block')
        $playNow.css('display', 'none')
    })

    //on click : create input variable to populate #word-container, hide $enterWordContianer, show #word-container, and test input for letters only
    let $inputValue = ''
    $('#enterWord').on('click', ()=> {  
        $inputValue = $('#theWord').val();
        const onlyLetters = /^[A-Za-z\s]+$/
        if ($inputValue.valueOf().match(onlyLetters)) {
        $splitWords($inputValue)
        $enterWordContainer.css('display', 'none')
        $('#word-container').css('display', 'flex')
        $('#letters').css('display', 'flex')
        } else {
            alert("Letters only please!")
        }
    })

    //function to split $inputValue from phrase, to words, to letters and appendTo #wordInPlay
    const $splitWords = (input) => {
        //break phrase into individual words
        let $phraseArray = input.split(" ")
        for (let i = 0; i < $phraseArray.length; i++) {
            let $wordArray = $phraseArray[i].split("")
            const $wordContainer = $(`<div id="wordInPhrase${i}" class="aWord">`)
                $wordContainer.appendTo('#wordInPlay')
            //break words into letters
            for (let x = 0; x < $wordArray.length; x++) {
                const $eachLtr = $(`<div class="${$wordArray[x]} unknownLtrs">${$wordArray[x]}</div>`); 
                $eachLtr.appendTo($(`#wordInPhrase${i}`))  
            }
            //no space after word if no more words left
            if (i < ($phraseArray.length -1) ) {
                const $eachLtr = $(`<div class="space"> </div>`)
                $eachLtr.appendTo($('#wordInPlay'))
            }

        }
    }
    //function to hide letters and show ? instead

    




})