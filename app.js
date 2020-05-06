    //establish class for players
    class Player {
        constructor (name, health, score) {
            this.name = name;
            this.health = 5;
            this.score = 0;
        }
    }
    p1 = new Player ("Player 1")
    p2 = new Player ("Player 2")

$(()=> {
    //set up player variables and round counter
    let $currentPlayer = p1;
    let $standByPlayer = p2;
    let $roundCount = 1
    // Make variable for #name-button
    const $nameBtn = $('#name-button')
    // Click event to display game instructions
    $('#howTo-button').click(function() {
        $('#play-instructions').toggle();
    })
    // Click event to name both players then start first round
    $nameBtn.on('click', ()=> {
        if ($currentPlayer === p1) {
        p1.name = $('#name-input').val();
        $('#name-input').val("");
        $('#enterName-h2').text("What is your name, Player 2?");
        $currentPlayer = p2;
        } else if ($currentPlayer === p2) {
            p2.name = $('#name-input').val();
            $playerNameContainer.css('display', 'none');
            $enterWordContainer.css('display', 'block');
            $('#enterWord-h2').text(`${$standByPlayer.name} enter a word or phrase:`);
            $currentPlayer = p1;
            $displayScores();
            $displayHealth();
        }
    })
    //function to display player health
    const $displayHealth = () => {
        $('#health-display').text(`${$currentPlayer.name}'s health: ${$currentPlayer.health}`)
    }
    $displayHealth();
    //display player scores
    const $displayScores = () => {
        $('#p1-score').text(`${p1.name}: ${p1.score}`)
        $('#p2-score').text(`${p2.name}: ${p2.score}`)
    }    
    // Set jQuery variables for #playNow button and #enterWord-container
    const $playNow = $('#playNow-button')
    const $playerNameContainer = $('#playerName-container')
    const $enterWordContainer = $('#enterWord-container')
    // Click event to animate playNow button and call hide playNow function
    $playNow.on('click', ()=> {
        $('#enterName-h2').text('What is your name, Player 1?');
        $hidePlayNow()
    })
    //function to show $playerNameContainer and hide $playNow button
    const $hidePlayNow = () => {
        $playNow.css('display', 'none');
        $playerNameContainer.css('display', 'block');
        $('#howTo-container').css('display', 'none');
        $('#credit').css('display', 'none');
    }
    //click event for alert-button
    $('#alert-button').on('click', ()=> {
        $('#alert-window').css('display', 'none')
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
        $('#word-container').css('display', 'block');
        $('#letters').css('display', 'flex');
        $('#player-Stats').css('display', 'flex');
        $roundStatus()
        } else {
            $('#alert-h2').text(`Letters only, ${$standByPlayer.name}!`)
            $('#alert-window').css('display', 'block');
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
        //convert all letters in array to UPPERCASE so they match onclick IDs
        $lettersArray = $lettersArray.map(function(x){ return x.toUpperCase() });  
    }
    //display current round and player
    const $roundStatus = () => {
        $('#round-status').text(`Round ${$roundCount}: ${$currentPlayer.name}'s turn`);
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
    //function to fade chosen ltr
    const $fadeLtr = (upperLtr) => {
        $(`#letters .${upperLtr}`).css('color', 'gray');
        $(`#letters .${upperLtr}`).css('opacity', '.5');
        $(`#letters .${upperLtr}`).css('transform', 'scale(.8)');
    }
    //function to reset #letters after round
    const $resetLtrBar = () => {
        $(`.letter`).css('color', 'black');
        $(`.letter`).css('opacity', '1');
        $(`.letter`).css('transform', 'scale(1)');
    }
    //function to reset screen and player health for next round or game
    const $resetRound = () => {
        $resetLtrBar()
        $lettersArray = [];
        $('.aWord').remove();
        $('#letters').css('display', 'none');
        $('#word-container').css('display', 'none');
        $('#theWord-input').val('');
        if ($roundCount < 3) {
            $('#enterWord-container').css('display', 'block')
        } else {
            p1.score = 0;
            p2.score = 0;
            $playNow.css('display', 'block');
            $('#howTo-container').css('display', 'block');
            $('#credit').css('display', 'block');
            $inputValue = '';
        }
        $('#player-Stats').css('display', 'none')
        p1.health = 5;
        p2.health = 5;
    }
    //function to reveal letters in phrase, and call $fadeLtr and $keepScore functions
    const $chosenOnes = (upperLtr, lowerLtr) => {
        $(`.aWord .${lowerLtr}`).css('background-color', 'white');
        $(`.aWord .${upperLtr}`).css('background-color', 'white');
        $fadeLtr(upperLtr)
        $keepScore(upperLtr);
    }
    //function to keep score and check for win/lose conditions
    const $keepScore = (upperLtr) => {
        if ($lettersArray.indexOf(upperLtr) !== -1) {
            $currentPlayer.score += 30;
            $displayScores()
            while ($lettersArray.indexOf(upperLtr) !== -1) {
            $lettersArray.splice($lettersArray.indexOf(upperLtr), 1);
            }
            if ($lettersArray.length === 0) {
                $currentPlayer.score += 200;
                $displayScores();
                $('#alert-h2').text(`You solved the puzzle, ${$currentPlayer.name}!`);
                $('#alert-window').css('display', 'block');
                setTimeout($resetRound, 4200);
                $switchRoles();
                $displayHealth();
            }
        } else {
            $('#alert-h2').text(`Try again, ${$currentPlayer.name}!`);
            $('#alert-window').css('display', 'block');
            $standByPlayer.score += 50;
            $displayScores()
            $currentPlayer.health--;
            $displayHealth();
            if ($currentPlayer.health <=0) {
                $standByPlayer.score += 200;
                $displayScores()
                $('#alert-h2').text(`Better luck next time, ${$currentPlayer.name}!`);
                $('#alert-window').css('display', 'block');
                //reveal remaining letters after loss
                $('.unknownLtrs').css('background-color', 'white');
                setTimeout($resetRound, 4200);
                $switchRoles()
            }
        }
    }
    //function to switch player roles between rounds
    const $switchRoles = () => {
        if ($currentPlayer === p1) {
            $currentPlayer = p2;
            $standByPlayer = p1;
            $('#enterWord-h2').text(`${$standByPlayer.name} enter a word or phrase:`);
        } else if ($currentPlayer === p2) {
            $currentPlayer = p1;
            $standByPlayer = p2;
            $roundCount++
            if ($roundCount < 2) {
                $('#enterWord-h2').text(`${$standByPlayer.name} enter a word or phrase:`);
            } else if ($roundCount >= 2) {
                setTimeout($checkWinner, 3000)
            }
        }
    }
    //function to confirm and display winner
    const $checkWinner = () => {
        if (p1.score > p2.score){
            $('#alert-h2').text(`Game over! ${p1.name} wins with ${p1.score} points!`);
            $('#alert-window').css('display', 'block');
        } else if (p1.score < p2.score) {
            $('#alert-h2').text(`Game over! ${p2.name} wins with ${p2.score} points!`);
            $('#alert-window').css('display', 'block');
        } else if (p1.score === p2.score) {
            $('#alert-h2').text(`Game over! ${p1.name} and ${p2.name} have tied with ${p1.score} points!`);
            $('#alert-window').css('display', 'block');
        }
    }
    
})