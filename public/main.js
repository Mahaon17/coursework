const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
        check();
    }
} 
)

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const array = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(i = 0; i < array.length; i++) {
        if (
            boxes[array[i][0]].innerHTML == 'X' && boxes[array[i][1]].innerHTML == 'X' && boxes[array[i][2]].innerHTML == 'X'
        ) {
            result = 'Crosses';
            prepareResult(result);
        } else if (
            boxes[array[i][0]].innerHTML == 'O' && boxes[array[i][1]].innerHTML == 'O' && boxes[array[i][2]].innerHTML == 'O'
        ) {
            result = 'Circles';
            prepareResult(result);
    }
}
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `${winner} won`;
    modalResult.style.display = 'block';
}