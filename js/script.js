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

    // for (let index = 0; index < 16; index++) {
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

        square.addEventListener('click', function(){
    

            if (blacklist.includes(index + 1)){
                this.classList.add('active-red');
                // square.removeEventListener('click', function(){
                // });
            } else {
                this.classList.add('active-blue');
            }
            
        });
        
    }
    
});