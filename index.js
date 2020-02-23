'use strict';

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
}

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const changeColor = {
    isActive: false,

    start(){
        if(this.isActive){
            return
        }

        this.isActive = true;
        this.generate = setInterval(() => {
            const random = randomIntegerFromInterval(0, 5)
            document.body.style.backgroundColor = colors[random];
            console.log(random);
        }, 1000);
    },

    stop(){
        clearInterval(this.generate);
        this.isActive = false
    }
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

refs.start.addEventListener('click', changeColor.start.bind(changeColor));
refs.stop.addEventListener('click', changeColor.stop.bind(changeColor))