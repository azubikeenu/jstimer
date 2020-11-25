
export class Timer {
    constructor( durationInput, startButton, pauseButton, emitters ) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if ( emitters ) {
            this.onStart = emitters.onStart;
            this.onTick = emitters.onTick;
            this.onComplete = emitters.onComplete;
        }
        //add event listener to watch for click events on the start button 
        this.startButton.addEventListener( 'click', this.start )
        //add event listener to watch for click events on the pause button 
        this.pauseButton.addEventListener( 'click', this.pause );

    }
    start = () => {
        // call the tick method 
        if ( this.onStart ) {
            this.onStart( this.timeRemaining );
        }
        this.tick();
        // assign an instance variable to the intervalID 
        this.intervalID = setInterval( this.tick, 50 );
    }
    tick = () => {
        if ( this.timeRemaining > 0 ) {
            this.timeRemaining -= .05;

            if ( this.onTick ) {
                this.onTick( this.timeRemaining );
            }
        } else {
            this.pause();

            if ( this.onComplete ) {
                this.onComplete()
            }
        }

    }


    pause = () => {
        clearInterval( this.intervalID );
    }

    get timeRemaining () {
        return parseFloat( this.durationInput.value );
    }
    set timeRemaining ( time ) {
        this.durationInput.value = time.toFixed( 2 )
    }

}
