# Entry 5
##### 4/13/26

### Content
After finishing entry 4, I've been working on learning how to implement **javascript** into my game.  
I have managed to find [a documentation](https://docs.gdevelop.io/GDJS%20Runtime%20Documentation/) for the _general syntax_ of javascript within gDevelop and have been learning about how to _convert_ the code I had previously into javascript.  
As for figuring out how to interact with **scene or global variables** _that weren't made using javascript_, I learned it from [this forum](https://forum.gdevelop.io/t/accessing-runtimescene-variables-using-javascript/45951).  
I've also added an additional _task_ in level 2.

Before the change (no javascript and no task in level 2):  

![externalEventsSheetNoJavascript](../images/externalEventsSheet.png)

After the change (code blocks and javascript are separated):  

![blockSection](../images/externalEventsSheetBlockSection.png)

![javascriptSection](../images/externalEventsSheetJavascriptSection.png)

So far, I've only used javascript for the **scene changes** and **resetting the scene if the player fell off the edge**.  
As for **movement**, **zooming out the camera** at the _start of the scene_, and **deleting** the task object alongside changing `hasCollided` (a variable) to be **true**, I used the normal gDevelop events.  
The reason why I chose not to do the events for the task object in javascript is because it just didn't work: `task.deleteFromScene(runtimeScene)` returns `undefined` because I didn't use physics for the task object (so that other objects can't just collide with the task object and become an immovable wall).  
On another note, I've already finished my MVP by this point as my game properly functions well (other than the bug with the aiming system not working on certain computers).

[My external events sheet.](https://github.com/williaml4292/sep11-freedom-project/blob/gh-pages/externalEvents/global.json)  
[The branch in github.](https://github.com/williaml4292/sep11-freedom-project/tree/gh-pages)  
[The preview of my MVP.](https://williaml4292.github.io/sep11-freedom-project/)  

### EDP

### Skills
####
####

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
