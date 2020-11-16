
var snare = document.getElementById('snare');
var bass = document.getElementById('bass');
var hiHat = document.getElementById('hi-hat');

function snarePlay()
{
    var snareAudio = new Audio(src='Snare 2.mp3');

    snareAudio.play();
}

function bassPlay()
{
    var bassAudio = new Audio(src='Kick 1.mp3');
    bassAudio.play();
}

// funtion hiHatPlay()
// {
//     var hiHatAudio = new Audio(src='Hi Hat 1.mp3');
//     hiHatAudio.play();
// }


    
snare.addEventListener('click', snarePlay());
bass.addEventListener('click', bassPlay());
//hiHat.addEventListener('click', hiHatPlay());









