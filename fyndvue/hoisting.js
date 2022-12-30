//Example of hoisting

addNums(2,3);

function addNums(x,y){

    function display(){
        return console.log(x+y);
    }
    console.log(display);
    display();
}
