function playSound() {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(4000, audioCtx.currentTime); // Adjust frequency for desired pitch
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); // Adjust volume
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.05); // Adjust duration of click
    
    setTimeout(function(){
      oscillator.stop();
    }, 1000); // Adjust duration of click
}
