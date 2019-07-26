
**Example usage**
Create the necesary id elements in your webpage then select
ans use them as shown below.


```javascript
const { controll } = require('dynashow')

var stuff1 = document.getElementById("cont1");
var stuff2 = document.getElementById("cont2");
var stuff3 = document.getElementById("cont3");
const taskcontroll  = new controll(stuff1, stuff2, stuff3);

document.querySelector('#one').addEventListener('click', ff1);
document.querySelector('#two').addEventListener('click', ff2);
document.querySelector('#three').addEventListener('click', ff3);


function ff1() {
	taskcontroll.tog('one');
}
function ff2() {
	taskcontroll.tog('two');
}
function ff3() {
	taskcontroll.tog('three');
}
```
[dynasho on github](https://github.com/harrika/dynashow)

