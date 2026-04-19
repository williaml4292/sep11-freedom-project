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

On another note, I've _finished my MVP_ (was almost done during entry 4) as all I needed to add to complete the [plan](https://github.com/williaml4292/sep11-freedom-project/blob/main/prep/plan.md) I made for myself was javascript that interacted with objects.

[My external events sheet.](https://github.com/williaml4292/sep11-freedom-project/blob/gh-pages/externalEvents/global.json)  
[The branch in github.](https://github.com/williaml4292/sep11-freedom-project/tree/gh-pages)  
[The preview of my MVP.](https://williaml4292.github.io/sep11-freedom-project/)  

### EDP
I am currently on the 6'th step of the **Engineering Design Process**, which is to _test and evaluate the prototype_. Since I've already finished the MVP, I'm currently _assessing what I should do next_, given that I have the time to do so and I'm not flooded with homework assignments. So far, I've not seen too many issues with the prototype itself and I don't really know how to fix the problem of the _aiming system not working with certain computers_. (I'm not even going to try to figure out why the game behaves differently based on the computer.) My next step of the EDP is to _improve my game as needed_. Currently, I'm considering attempting to _convert the movement system into javascript_, but I doubt that I'll have the time to learn it as the _marking period is ending soon_ and there's bound to be a ton of homework.
### Skills
Two skills that I've developed while learning how to use javascript in gDevelop are **attention to detail** and **time management**.
#### Attention to Detail
Using javascript in gDevelop is hard because there are many syntax rules that you must **memorize** and many of them are extremely **long**.  

For instance, **just** linking a variable created outside of javascript requires this long line of code:  
`runtimeScene.getGame().getVariables().get("variableName")`  
Messing up any part of this line of code results in an error.  
Then, you have to know that this makes an **array** so you have to put a `[0]` after it when there's only one object named as such. 

I don't even know how the indexing would work when there's more than one object with the same name.  
If I were to guess, it's probably just _random since you can't alphabetically order variables with the same name_.
#### Time Management
Converting the _entire movement system_ into javascript is considerably more flashy than just _changing scenes_ using javascript.  
However, the movement system is far more **complex** than changing scenes.  
I would have to **learn and memorize** (since I don't want to just forget about it by next year and even if I do, I want to be able to figure it out immediately after checking the code) far more during the break.  
Although it's true that there's a lot of time during the break that _could_ be used for my _Freedom Project_, more than half of my classes gave homework during the break, with two of them being very long, taking approximately _12 hours in total_ (not including the Freedom Project).  
I didn't want to spend too much time during my break doing homework, so I just decided to convert the _less complex scene changes_ into javascript.  
In any case, it would be helpful if wanted to _add more features to my game_ as I've already made a `sceneNumber` variable that changes based on what level the player was on.  
This can be used for _additional conditionals_ if I were to decide to add more tasks to the levels.

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
