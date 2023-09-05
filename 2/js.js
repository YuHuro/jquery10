const input = document.querySelector('#input')
const button = document.querySelector('#button')
const block = document.querySelector('#block')

$(button).on('click', function(){
    if(input.value === ''){
        return block.innerHTML = '<h1>Reqired to field!</h1>'
    }
    if(input.value.length < 3){
        return block.innerHTML = '<h1>Не меньше 3-х символов!</h1>'
    }else{
        return block.innerHTML = '<h1>'+input.value+'</h1>'
    }
})
