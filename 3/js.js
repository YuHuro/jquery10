const number = document.querySelector('#input')
const btn = document.querySelector('#button')
const block = document.querySelector('#block')

$(btn).on('click', function(){
    if(isNaN(number.value) || input.value === ''){
        return alert('Введите число!')
    }else{
        return block.innerHTML = '<h1>'+number.value*number.value+'</h1>'
    }
})