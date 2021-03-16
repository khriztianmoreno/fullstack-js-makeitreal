const a = prompt('a?'); 
function reviewA(aInt){ 
    switch(aInt){
    case aInt === 0:
        console.log( 0 );
    case aInt === 1: 
    console.log( 1 );
    case (aInt === 2  || aInt === 3):
        console.log('2,3');
    }
}
let aInt = parseInt(a)

console.log(reviewA(aInt));