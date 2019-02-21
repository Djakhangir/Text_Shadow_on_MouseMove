
//to get where the cursor position is, the best way is to use offsetX and offsetY, but in order to work elements 
//with that values we have to make a little bit of math with the values


const movement = document.querySelector('.movement');
const text = movement.querySelector('h1');
const walk = 300; //walk is the how much it of shadow should follow on mouse move in this case max value of 100px
        //it is needed to use it in math equation down below

function shadow(e){ 
    //To get the width and height of the item we hovered over

    const width= movement.offsetWidth;
    const height = movement.offsetHeight; //or we can make it in one line like:
                            //const { offsetWidth: width, offsetHeight: height } = movement;
    
    //To know where the cursor was: (one line method explain above)
    let { offsetX: x, offsetY: y }= e; //why let instead of const, because we need to reassign x and y below

 if(this != e.target) { //this keyword is "thing" which is listened on, in this case it is div class movement
                                        // and e.target is targeting the event triggered on, in this case it is h1 tag
 x = x + e.target.offsetLeft;
 y = y + e.target.offsetTop;  //this is to fix the div and h1 difference of mousemove event. when we hover over the h1-
 //it will add the px values to the div pixel values to fix the distinguished difference
}    

//calculation explanation: if max px we allow is 100, then divide it by 2 which is 50 and substract the x and y values
// and multiple by 100 and then use Math.round method to round up the values
const xWalk = Math.round((x / width * walk ) - (walk / 2));
const yWalk = Math.round((y / height * walk ) - (walk / 2)); 

text.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
            ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
            ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
            ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)   
            ` // -1 multiply to bring that color in opposite direction
        }

movement.addEventListener('mousemove', shadow);