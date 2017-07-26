// based on JavaScript 30 Day 1 by Wes Bos https://javascript30.com/
'use strict'
function playSoundAtKey (key) {
  const $audio = document.querySelector(`audio[data-key="${key}"]`);
  if ($audio) {
    // pull back audio to start so sample can be retriggered
    $audio.currentTime = 0;
    $audio.play();
  }
}

function addTransitionToKey (key) {  
  const $key = document.querySelector(`.key[data-key="${key}"]`);
  if ($key) {    
    $key.classList.add('playing');
  }
}

function removeTransition (e) {
  // only call for one transitioned property
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing');
  }
}



window.addEventListener('keydown', e => {
  const key = e.keyCode;
  playSoundAtKey(key);
  addTransitionToKey(key);
});

const keys = document.querySelectorAll('.key');
// bind events to all keys
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', function () {
    const key = this.dataset.key;
    playSoundAtKey(key);
    addTransitionToKey(key);
  });
});