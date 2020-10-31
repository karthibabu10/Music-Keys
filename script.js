window.onload = () => {
    setButtons();
  }
  let beats = {
    1: {
      beat: "./assets/Piano Chord 331.mp3",
      color: " #db61d5"
    },
    2: {
        beat: "./assets/Piano Chord 209.mp3",
        color: " #db61d5"
      },
      3: {
        beat: "./assets/Piano Chord 208.mp3",
        color: " #db61d5"
      },
      4: {
        beat: "./assets/Drum Sticks Hit 3.mp3",
        color:  "#db61d5"
      },
      5: {
        beat: "./assets/Drum Snare Roll.mp3",
        color: " #db61d5"
      },
      6: {
        beat: "./assets/PREL Musical 57.mp3",
        color: " #db61d5"
      },
      7: {
        beat: "./assets/Cymbal Suspended 2.mp3",
        color: " #db61d5"
      },
      8: {
        beat: "./assets/Musical Compos 33.mp3",
        color:  "#db61d5"
      },
      9: {
        beat: "./assets/Musical Orches 4.mp3",
        color: " #db61d5"
      }     
}
    const setButtons = () => {  
    for(let beatKey in beats){
        let beat = beats[beatKey];
        let element = document.getElementById(beatKey);
        element.style.borderColor = beat.color;
        element.addEventListener("transitionend",  ()=>{
            element.style.backgroundColor = "transparent";
            element.style.boxShadow = "none";
          })
    }
}

    const onButtonPress = (buttonKey) => {
        let element = document.getElementById(buttonKey);
        element.style.backgroundColor = beats[buttonKey].color;
        element.style.boxShadow = `0px 0px 12px 0px ${beats[buttonKey].color}`;
    }
    const playBeat = (buttonKey) => {

        let audioSrc = beats[buttonKey].beat;
        let audio = new Audio(audioSrc);
        audio.currentTime = 0;
        audio.play();
    
      }
      document.addEventListener('keydown', (event)=>{
        playBeat(event.key);
        onButtonPress(event.key);
      })