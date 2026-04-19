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

* `var variableName = runtimeScene.getGame().getVariables().get("theVariableName").getAsString()`
  *  Gets the **variable** within the scene or game (`.getGame()` changes it to a global variable that persists across scene changes) and save it into a **javascript variable** so that it can be _interacted with using javascript_.
* `var objectName = runtimeScene.getObjects("nameOfObjects")`
  * Gets all **objects** with the name `nameOfObjects` and assign them (as an **array**) to the variable named `objectName`.
* `runtimeScene.getName()`
  * Gets the name of the scene.
* `gdjs.RuntimeObject.collisionTest(object1, object2, booleanForWhetherOrNotToIgnoreEdges)`
  * Checks for **collision** between objects 1 and  2.
* `gdjs.SceneChangeRequest.REPLACE_SCENE, nameOfScene`
  * Changes the scene (level) to `nameOfScene`.
* `.getY()`
  * Gets the y value of an object.
    
So far, I've only used javascript for the **scene changes** and **resetting the scene if the player fell off the edge**.  

As for **movement**, **zooming out the camera** at the _start of the scene_, and **deleting** the task object alongside changing `hasCollided` (a variable) to be **true** upon collision, I used the normal gDevelop events.  

The reason why I chose not to do the events for the task object in javascript is because it just didn't work: `task.deleteFromScene(runtimeScene)` returns `undefined` because I didn't use physics for the task object (so that other objects can't just collide with the task object and become an immovable wall).  

On another note, I've already _finished my MVP_ (was almost done during entry 4) as my game properly functions well (other than the bug with the _aiming system not working on certain computers_).

[My external events sheet.](https://github.com/williaml4292/sep11-freedom-project/blob/gh-pages/externalEvents/global.json)  
[The branch in github.](https://github.com/williaml4292/sep11-freedom-project/tree/gh-pages)  
[The preview of my MVP.](https://williaml4292.github.io/sep11-freedom-project/)  

### EDP
I am currently on the 6'th step of the **Engineering Design Process**, which is to _test and evaluate the prototype_. Since I've already finished the MVP, I'm currently _assessing what I should do next_, given that I have the time to do so and I'm not flooded with homework assignments. So far, I've not seen too many issues with the prototype itself and I don't really know how to fix the problem of the _aiming system not working with certain computers_. (I'm not even going to try to figure out why the game behaves differently based on the computer.) My next step of the EDP is to _improve my game as needed_. Currently, I'm considering attempting to _convert the movement system into javascript_, but I doubt that I'll have the time to learn it as the _marking period is ending soon_ and there's bound to be a ton of homework.
### Skills
####
####

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
