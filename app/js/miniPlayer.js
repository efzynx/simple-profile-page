const audio = new Howl({
    src: ['/public/music/plain-jane-remix.m4a'],
    autoplay: true,
    loop: true,
    html5: true
});

const audioCover = document.getElementById('audioCover');
const progressAudioInput = document.getElementById('progressAudio');

let interval;


// Play or pause audio

audioCover.addEventListener('click', () => {
    if (audio.playing()) {
        audio.pause();
        audioCover.classList.remove('rotating');
    } else {
        audio.play();
        audioCover.classList.add('rotating');
    }
});

// Update progress bar and handle seeking
audio.on('play', () => {
    interval = setInterval(() => {
        const progressAudio = (audio.seek() / audio.duration()) * 100;
        progressAudioInput.value = progressAudio;
    }, 1000);
});

audio.on('pause', () => clearInterval(interval));
audio.on('stop', () => clearInterval(interval));

// Seek audio when progress bar is adjusted
progressAudioInput.addEventListener('input', () => {
    const seekTime = (progressAudioInput.value / 100) * audio.duration();
    audio.seek(seekTime);
});
