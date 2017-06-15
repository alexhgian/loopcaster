const LoopCaster = require('../');

let caster = new LoopCaster(128, 32, function(num, data){
        console.log(`Casting ${num} | ${data}`);
});

let sum = 0;

for( var i = 0; i < 128; i++ ){
    sum += 2;
    caster.chant(sum);
}