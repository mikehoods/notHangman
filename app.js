$(()=> {
    // Establish jQuery variables for #playNow button and #enterWord-container
    const $playNow = $('#playNow-button')
    const $enterWordContainer = $('#enterWord-container')
    // Click event to display #enterWord-container and hide playNow button
    $playNow.on('click', ()=> {
        $enterWordContainer.css('display', 'block')
        $playNow.css('display', 'none')
    })
    //create $lettersArray
    let $lettersArray = [];
    //on click : create input variable to populate #word-container, hide $enterWordContianer, show #word-container, and test input for letters only
    let $inputValue = ''
    $('#enterWord-button').on('click', ()=> {  
        $inputValue = $('#theWord-input').val();
        const onlyLetters = /^[A-Za-z\s]+$/
        if ($inputValue.valueOf().match(onlyLetters)) {
        $splitWords($inputValue);
        $enterWordContainer.css('display', 'none');
        $('#word-container').css('display', 'flex');
        $('#letters').css('display', 'flex');
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
                //push letter values into array for verifying chosen letter match
                $lettersArray.push($wordArray[x]);
                $eachLtr.appendTo($(`#wordInPhrase${i}`));
            }
            //no space after word if no more words left
            if (i < ($phraseArray.length -1) ) {
                const $eachLtr = $(`<div class="space"> </div>`)
                $eachLtr.appendTo($('#wordInPlay'))
            }
        }
        console.log($lettersArray);
        //convert all letters in array to UPPERCASE so they match onclick IDs
        $lettersArray = $lettersArray.map(function(x){ return x.toUpperCase() });
        console.log($lettersArray);
    }
    //reveal letters in phrase, and call function to fade chosen letter from #letters
    $('#letters .A').on('click', ()=> {
        $chosenOnes('A', 'a')
    })
    $('#letters .B').on('click', ()=> {
        $chosenOnes('B', 'b')
    })
    $('#letters .C').on('click', ()=> {
        $chosenOnes('C', 'c')
    })
    $('#letters .D').on('click', ()=> {
        $chosenOnes('D', 'd')
    })
    $('#letters .E').on('click', ()=> {
        $chosenOnes('E', 'e')
    })
    $('#letters .F').on('click', ()=> {
        $chosenOnes('F', 'f')
    })
    $('#letters .G').on('click', ()=> {
        $chosenOnes('G', 'g')
    })
    $('#letters .H').on('click', ()=> {
        $chosenOnes('H', 'h')
    })
    $('#letters .I').on('click', ()=> {
        $chosenOnes('I', 'i')
    })
    $('#letters .J').on('click', ()=> {
        $chosenOnes('J', 'j')
    })
    $('#letters .K').on('click', ()=> {
        $chosenOnes('K', 'k')
    })
    $('#letters .L').on('click', ()=> {
        $chosenOnes('L', 'l')
    })
    $('#letters .M').on('click', ()=> {
        $chosenOnes('M', 'm')
    })
    $('#letters .N').on('click', ()=> {
        $chosenOnes('N', 'n')
    })
    $('#letters .O').on('click', ()=> {
        $chosenOnes('O', 'o')
    })
    $('#letters .P').on('click', ()=> {
        $chosenOnes('P', 'p')
    })
    $('#letters .Q').on('click', ()=> {
        $chosenOnes('Q', 'q')
    })
    $('#letters .R').on('click', ()=> {
        $chosenOnes('R', 'r')
    })
    $('#letters .S').on('click', ()=> {
        $chosenOnes('S', 's')
    })
    $('#letters .T').on('click', ()=> {
        $chosenOnes('T', 't')
    })
    $('#letters .U').on('click', ()=> {
        $chosenOnes('U', 'u')
    })
    $('#letters .V').on('click', ()=> {
        $chosenOnes('V', 'v')
    })
    $('#letters .W').on('click', ()=> {
        $chosenOnes('W', 'w')
    })
    $('#letters .X').on('click', ()=> {
        $chosenOnes('X', 'x')
    })
    $('#letters .Y').on('click', ()=> {
        $chosenOnes('Y', 'y')
    })
    $('#letters .Z').on('click', ()=> {   
        $chosenOnes('Z', 'z')
    })
    //function to fade chosen ltrs
    const $chosenOnes = (upperLtr, lowerLtr) => {
        if ($lettersArray.indexOf(upperLtr) !== -1) {
            $(`.aWord .${lowerLtr}`).css('background-color', 'white')
            $(`.aWord .${upperLtr}`).css('background-color', 'white')
        } else {
            alert("Letter not found!")
        }
    $(`#letters .${upperLtr}`).css('color', 'gray');
    $(`#letters .${upperLtr}`).css('opacity', '.5')
    $(`#letters .${upperLtr}`).css('transform', 'scale(.8)')
    }   
})