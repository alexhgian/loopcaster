# loopcaster
When you need to print out something after `n` iterations.

# Usage
Define a caster w/ max iteration, steps you want to print, and a callback.

```
    const LoopCaster = require('loopcaster');

    const SIZE = 128;
    const INTERVAL = 32;

    let caster = new LoopCaster(SIZE, INTERVAL, function(index, data){
        console.log(`Casting ${index} | ${data}`);
    });

    let sum = 0;

    for( var i = 0; i < 128; i++ ){
        sum += 2;
        caster.chant(sum);
    }
```

Output:

```
Casting => Index: 32 | Sum: 96
Casting => Index: 64 | Sum: 192
Casting => Index: 96 | Sum: 288
Casting => Index: 128 | Sum: 384
```