// generare tanti div a seconda della difficolta

let gioca = document.getElementById('gioca');

let container = document.querySelector('.container');

gioca.addEventListener('click', function(){


    let difficolta = document.getElementById('mode-selection').value;
    container.innerHTML = '';
    let row = 0;
    let col = 0;
    let blacklist = [];
    let randomNumber = 0;

    if (difficolta == 'easy') {
        row = 10;
        col = 10;

    } else if (difficolta == 'hard') {
        row = 9;
        col = 9;

    } else {
        row = 7;
        col = 7;

    }

    i = 0;
    while (i < 16){
        randomNumber = parseInt(Math.floor(Math.random() * (row * col)) + 1);
        if (blacklist.includes(randomNumber)) {
            randomNumber = parseInt(Math.floor(Math.random() * (row * col)) + 1);
            blacklist.push(randomNumber);
        } else {
            blacklist.push(randomNumber);
        }
        i++;
    }
    console.log(blacklist);

    for (let index = 0; index < (row * col); index++) {
            
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        container.append(square);
        square.append([index + 1]);

        let counterVal = 0;
        let risultato = document.getElementById("risultato");

        incrementClick = function() {
            updateDisplay(++counterVal);
        };
        function updateDisplay(val) {
            risultato.innerHTML = `<p> Hai totalizzato ${val -1} click </p>`;
        };

        
        square.addEventListener('click', function(){
            
            let bombtotal = document.querySelectorAll('.active-red');
            square.onclick = incrementClick();

            let number = parseInt(square.innerText);

            if (blacklist.includes(number)){

                risultato.classList.add('block');
                this.classList.add('active-red');
                container.replaceWith(container.cloneNode(true));

                // let squares = document.querySelectorAll('.square');
                // for (let index = 0; index < squares.length; index++) {
                //     let numDom = parseInt(squares[index].innerText);
                //     if(blacklist.includes(numDom)) {
                //         squares.classList.add('active-red');
                //     }
                    
                // }
                
            } else if (counterVal == (row * col) - 16){

                container.replaceWith(container.cloneNode(true));
                risultato.innerHTML += 'HAI VINTO'
                risultato.classList.add('block');

            } else {
                
                this.classList.add('active-blue');
                counterVal = counterVal + 1;      
            }
            console.log(counterVal);
        });
        
        
        console.log(counterVal);
    }
    
});