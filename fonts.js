const serif= document.getElementById('serif');
const sansSerif =  document.getElementById('sans-serif');
const monoSpace = document.getElementById('monospace');

serif.addEventListener('click', function(event) {
    event.preventDefault()
    document.body.style.fontFamily = 'serif';
})

sansSerif.addEventListener('click', function(event) {
    event.preventDefault()
    document.body.style.fontFamily = 'sans-serif';
})

monoSpace.addEventListener('click', function(event) {
    event.preventDefault()
    document.body.style.fontFamily = 'monospace';
})