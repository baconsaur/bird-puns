#Bird Pun Generator
Need some stupid bird puns? Of course you do.

##How to Install

```bash
npm install bird-puns
```
##How to Use

```js
var birdPuns = require('bird-puns');
birdPuns.getBirdPun(); //If you liked it then you should've put a wing on it
```
## Make Sure It's Funny

```js
birdPuns.promiseToBeFunny().then(function(pun) {
  console.log('This is funny: ' + pun);
}).catch(function(pun) {
  console.log('This ain\'t so funny: ' + pun);
});
```
