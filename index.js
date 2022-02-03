let modalRules=  document.getElementById('modalRules');
function openModalRules(){modalRules.style.display='flex';}

function closeModalRules(){
    modalRules.style.display='none';
}

let containerMain=document.getElementById('containerMain');
let containerChoosePickers = document.getElementById('containerChoosePickers');
let containerResult = document.getElementById('containerResult');
let containerHousePicker = document.getElementById('containerHousePicker');
let resultText = document.getElementById('resultText');
let scoreText = document.getElementById('score');
let btnHousePicker=document.getElementById('btnHousePicker');


let youPicker;
let score = 0;
let imgHousePicker;

function playPicker(picker) { 
    youPicker = picker;
    let btnPicker = document.getElementById('btn'+picker);
    if(btnPicker.classList.contains('containerPicker')){
        return;
    }
    let machineOption = Math.floor(Math.random()*5);

    if(machineOption === 0){imgHousePicker = 'Scissor'}
    else if (machineOption === 1){imgHousePicker = 'Paper'}
    else if (machineOption === 2){imgHousePicker = 'Rock'}
    else if (machineOption === 3){imgHousePicker = 'Lizard'}
    else if (machineOption === 4){imgHousePicker = 'Spock'}

    let result = '';

    if(picker === 'scissor'){
        if(machineOption === 0){result = 'TIE'}
        else if (machineOption === 1){result = 'WIN'}
        else if (machineOption === 2){result = 'LOSE'}
        else if (machineOption === 3){result = 'WIN'}
        else if (machineOption === 4){result = 'LOSE'}
    }else if(picker === 'paper'){
        if(machineOption === 0){result = 'LOSE'}
        else if (machineOption === 1){result = 'TIE'}
        else if (machineOption === 2){result = 'WIN'}
        else if (machineOption === 3){result = 'LOSE'}
        else if (machineOption === 4){result = 'WIN'}
    }else if(picker === 'rock'){
        if(machineOption === 0){result = 'WIN'}
        else if (machineOption === 1){result = 'LOSE'}
        else if (machineOption === 2){result = 'TIE'}
        else if (machineOption === 3){result = 'WIN'}
        else if (machineOption === 4){result = 'LOSE'}
    }else if(picker === 'lizard'){
        if(machineOption === 0){result = 'LOSE'}
        else if (machineOption === 1){result = 'WIN'}
        else if (machineOption === 2){result = 'LOSE'}
        else if (machineOption === 3){result = 'TIE'}
        else if (machineOption === 4){result = 'WIN'}
    }else if(picker === 'spock'){
        if(machineOption === 0){result = 'WIN'}
        else if (machineOption === 1){result = 'LOSE'}
        else if (machineOption === 2){result = 'WIN'}
        else if (machineOption === 3){result = 'LOSE'}
        else if (machineOption === 4){result = 'TIE'}
    }
    if(result === 'WIN'){score +=1}
    if(score > 0){
        if(result === 'LOSE'){score -=1}
    }
    containerMain.classList.add('containerActive');
    containerChoosePickers.classList.add('containerChoosePickerPlaying');
    btnPicker.classList.add('containerPicker');
    containerHousePicker.classList.add('containerHousePickerActive');

    setTimeout(() => {
        
        let housePicker=document.getElementById('imgHousePicker');

        btnHousePicker.classList.add('containerBtn' + imgHousePicker);
        housePicker.style.backgroundImage =`url('images/icon-` + imgHousePicker.toLowerCase() + `.svg')`;

        containerResult.classList.add('containerResultActive');
        resultText.innerText = "YOU " + result;
        scoreText.innerText = score;
    },3000);
    
 }

 function playAgain(){
    let btnPicker = document.getElementById('btn'+youPicker);
    containerMain.classList.remove('containerActive');
    containerChoosePickers.classList.remove('containerChoosePickerPlaying');
    btnPicker.classList.remove('containerPicker');
    containerHousePicker.classList.remove('containerHousePickerActive');
    containerResult.classList.remove('containerResultActive');
    btnHousePicker.classList.remove('containerBtn' + imgHousePicker);
 }