const numberX = $('#numberX')
const numberY = $('#numberY')
const button = $('#button')
const block = $('#block')


$(button).on('click', function(){
    let tempX = numberX.value + 'px'
    let tepmY = numberY.value + 'px'

    $(block).css({
        'top': tempX,
        'left': tepmY
    })
})
