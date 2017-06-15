const LoopCaster = require('../');

const SIZE = 128;
const INTERVAL = 32;

let caster = LoopCaster(SIZE, INTERVAL, function(index, data){
    console.log(`Casting => Index: ${index} | Sum: ${data}`);
});

let sum = 0;

for( var i = 0; i < 128; i++ ){
    sum += 3;
    caster.chant(sum);
}