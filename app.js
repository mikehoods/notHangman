

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
    //reveal letters in phrase, and call function to fade chosen letter from #letters
    
    
    $('#letters .A').on('click', ()=> {
        $('.aWord .a, .aWord .A').css('background-color', 'white')
        $chosenOnes('A')
    })
    $('#letters .B').on('click', ()=> {
        $('.aWord .b, .aWord .B').css('background-color', 'white')
        $chosenOnes('B')
    })
    $('#letters .C').on('click', ()=> {
        $('.aWord .c, .aWord .C').css('background-color', 'white')
        $chosenOnes('C')
    })
    $('#letters .D').on('click', ()=> {
        $('.aWord .d, .aWord .D').css('background-color', 'white')
        $chosenOnes('D')
    })
    $('#letters .E').on('click', ()=> {
        $('.aWord .e, .aWord .E').css('background-color', 'white')
        $chosenOnes('E')
    })
    $('#letters .F').on('click', ()=> {
        $('.aWord .f, .aWord .F').css('background-color', 'white')
        $chosenOnes('F')
    })
    $('#letters .G').on('click', ()=> {
        $('.aWord .g, .aWord .G').css('background-color', 'white')
        $chosenOnes('G')
    })
    $('#letters .H').on('click', ()=> {
        $('.aWord .h, .aWord .H').css('background-color', 'white')
        $chosenOnes('H')
    })
    $('#letters .I').on('click', ()=> {
        $('.aWord .i, .aWord .I').css('background-color', 'white')
        $chosenOnes('I')
    })
    $('#letters .J').on('click', ()=> {
        $('.aWord .j, .aWord .J').css('background-color', 'white')
        $chosenOnes('J')
    })
    $('#letters .K').on('click', ()=> {
        $('.aWord .k, .aWord .K').css('background-color', 'white')
        $chosenOnes('K')
    })
    $('#letters .L').on('click', ()=> {
        $('.aWord .l, .aWord .L').css('background-color', 'white')
        $chosenOnes('L')
    })
    $('#letters .M').on('click', ()=> {
        $('.aWord .m, .aWord .M').css('background-color', 'white')
        $chosenOnes('M')
    })
    $('#letters .N').on('click', ()=> {
        $('.aWord .n, .aWord .N').css('background-color', 'white')
        $chosenOnes('N')
    })
    $('#letters .O').on('click', ()=> {
        $('.aWord .o, .aWord .O').css('background-color', 'white')
        $chosenOnes('O')
    })
    $('#letters .P').on('click', ()=> {
        $('.aWord .p, .aWord .P').css('background-color', 'white')
        $chosenOnes('P')
    })
    $('#letters .Q').on('click', ()=> {
        $('.aWord .q, .aWord .Q').css('background-color', 'white')
        $chosenOnes('Q')
    })
    $('#letters .R').on('click', ()=> {
        $('.aWord .r, .aWord .R').css('background-color', 'white')
        $chosenOnes('R')
    })
    $('#letters .S').on('click', ()=> {
        $('.aWord .s, .aWord .S').css('background-color', 'white')
        $chosenOnes('S')
    })
    $('#letters .T').on('click', ()=> {
        $('.aWord .t, .aWord .T').css('background-color', 'white')
        $chosenOnes('T')
    })
    $('#letters .U').on('click', ()=> {
        $('.aWord .u, .aWord .U').css('background-color', 'white')
        $chosenOnes('U')
    })
    $('#letters .V').on('click', ()=> {
        $('.aWord .v, .aWord .V').css('background-color', 'white')
        $chosenOnes('V')
    })
    $('#letters .W').on('click', ()=> {
        $('.aWord .w, .aWord .W').css('background-color', 'white')
        $chosenOnes('W')
    })
    $('#letters .X').on('click', ()=> {
        $('.aWord .x, .aWord .X').css('background-color', 'white')
        $chosenOnes('X')
    })
    $('#letters .Y').on('click', ()=> {
        $('.aWord .y, .aWord .Y').css('background-color', 'white')
        $chosenOnes('Y')
    })
    $('#letters .Z').on('click', ()=> {
        $('.aWord .z, .aWord .Z').css('background-color', 'white')
        $chosenOnes('Z')
    })





    //function to fade chosen ltrs
    const $chosenOnes = (ltr) => {
        $(`#letters .${ltr}`).css('color', 'gray');
        $(`#letters .${ltr}`).css('opacity', '.5')
        $(`#letters .${ltr}`).css('transform', 'scale(.8)')


    }
    




})