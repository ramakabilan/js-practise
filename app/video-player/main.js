let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    f10Btn = document.getElementById('f10'),
    b10Btn = document.getElementById('b10'),
    volumeBtn = document.getElementById('volume'),
    volumeInputEle = document.getElementById('volume-slider'),
    muteBtn = document.getElementById('mute'),
    unmuteBtn = document.getElementById('unmute'),
    downloadBtn = document.getElementById('download'),
    swapBtn = document.getElementById('swap'),
    fullScreenBtn = document.getElementById('full-screen'),
    video = document.getElementById('main-video');

    function play() {
        console.log('play the video');
        video.play();
    }
    function pause() {
        console.log('pause the video');
        video.pause();
    }
    function f10() {
        console.log('forward 10seconds');
        // Get current time
        let cTime = video.currentTime;

        // Add 10 seconds
        cTime = cTime + 10;

        // Play from the new time
        video.currentTime = cTime;
    }
    function b10() {
        console.log('backward 10seconds');
        // Get current time
        let cTime = video.currentTime;

        // Reduce 10 seconds
        cTime = cTime - 10;

        // Play from the new time
        video.currentTime = cTime;
    }
    function volumeUpdate() {
        // Get slider value
        let volumeInput = volumeInputEle.value;
        console.log(volumeInput);

        // 0=>0, 100=>1, 50=>0.5
        volumeInput = volumeInput / 100;
        console.log(volumeInput);

        // Apply to the video
        video.volume = volumeInput;
    }
    function mute() {
        console.log('Mute Audio');
        video.muted = true;
    }
    function unmute() {
        console.log('Unmute');
        video.muted = false;
    }
    function download() {
        console.log('download the video');
    }
    function swap() {
        // Get select path
        let targetpath = this.value,
        cTime = video.currentTime;

        // Change the file path of the video
        video.setAttribute('src',targetpath);

        // Change current time
        video.currentTime = cTime;

        // Play the video
        play();
    }
    function fullScreen() {
        console.log('view full screen');
    }

    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click',pause);
    f10Btn.addEventListener('click',f10);
    b10Btn.addEventListener('click',b10);
    volumeBtn.addEventListener('click',volumeUpdate);
    muteBtn.addEventListener('click',mute);
    unmuteBtn.addEventListener('click',unmute);
    downloadBtn.addEventListener('click',download);
    swapBtn.addEventListener('change',swap);
    fullScreenBtn.addEventListener('click',fullScreen);
