const numberX = document.querySelector('#numberX')
const numberY = document.querySelector('#numberY')
const button = document.querySelector('#button')
const block = document.querySelector('#block')


$(button).on('click', function(){
    let tempX = numberX.value + 'px'
    let tepmY = numberY.value + 'px'

    $(block).css({
        'top': tempX,
        'left': tepmY
    })
})
