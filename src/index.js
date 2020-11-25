
import { Timer } from "./app/timer.js"

const durationInput = document.querySelector( "#duration" );
const startButton = document.querySelector( "#start" );
const pauseButton = document.querySelector( "#pause" );
const circle = document.querySelector( "circle" );
const circumference = circle.getAttribute( "r" ) * 2 * Math.PI;
circle.setAttribute( "stroke-dasharray", circumference );
let duration;
const timer = new Timer( durationInput, startButton, pauseButton, {
    onStart ( totalDuration ) {
        duration = totalDuration;
        console.log( duration );
    }, onTick ( timeRemaining ) {
        circle.setAttribute( "stroke-dashoffset", ( circumference * timeRemaining / duration ) - circumference );
    }, onComplete () {
        console.log( "Timer is completed " );
    }

} );




