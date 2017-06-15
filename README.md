# loopcaster
When you need to print out something after `n` iterations.

# Usage
Define a caster w/ the max iteration, steps you want to print, and a callback.

```
const LoopCaster = require('loopcaster');

let caster = new LoopCaster(128, 32, function(num, data){
        console.log(`Casting ${num} | ${data}`);
});

let sum = 0;

for( int i; i<128; i++){
    sum += 2;
    caster.chant(sum);
}
```