# Entry 4
##### 3/9/26
### Content
Since the previous entry, I've been trying out different methods to make the aiming system smoother, as constantly adjusting the multipliers for the `Aim` object makes the white trajectory line move in an _unnatural_ way.  
I found out that I can just find and edit the height and width of the `Ball` object in the **properties** tab:  

![properties](../images/widthAndHeightOfBall.png)  

This allows me to **remove** the sequence of events that constantly adjusted the multiplier for the `Aim` object, while still keeping the accuracy relatively the same.  

Later, I found out how to change the textures of my objects so that it wouldn't just be a default purple box for everything in the game. So far, I only did this with the obstacles and the floor:  
![textures](../images/editTextures.png)

After that, I checked the [gDevelop documentation](https://wiki.gdevelop.io/gdevelop5/tutorials/geometry-monster/2-creating-first-scene/) and found out how to add multiple scenes, as well as [external event sheets](https://wiki.gdevelop.io/gdevelop5/interface/events-editor/external-events/) that made it so that I didn't have to just copy and paste all my events every time I made a new scene.

In addition, I found a [forum](https://forum.gdevelop.io/t/change-width-of-camera/20431) that helped solve the issue I had with the **camera being too zoomed in** so that when the player tried to aim, they were stuck placing the mouse near the _borders of the screen_, so it was awkward trying to aim further away.  

Finally, I fixed a issue that I had where the text stating what level the player is on **didn't change** when the scene changed from the first one to the second one.  
I found out how to do this by just searching up and using what AI provided me:

![AI](../images/AI.png)

Something that I've been working on was trying to implement javascript in gDevelop.  
I ran into a few issues: not knowing the syntax for the code (_there are barely any tutorials of this_), and not knowing how to pass **multiple** objects to javascript.  
In my first "test project", I was able to set the `sprite.x` of a object, but I was unable to use javascript to manipulate more than one object.  
Recently, I found out on [this forum](https://forum.gdevelop.io/t/how-to-pass-more-than-one-object-to-javascript-event/19431) that you need object groups to do this.  
### EDP
I am currently on the **fifth step** of the _Engineering Design Process_, which is to **create a prototype**. So far, I've done around **50%** of it, but I still have a lot to learn in order to implement javascript, especially if I want to use javascript outside of _just_ manipulating text boxes. Despite that, I could probably make a proper, functioning game when I get the time and motivation to do so (or when it's about to be due). Of course, if I were to do that right now, I wouldn't be using javascript, so that'll have to be delayed until I find a documentation for learning javascript that can be used in gDevelop. My next step of the _EDP_ is to **continue creating my prototype** (Step 5) and (hopefully) find a tutorial for javascript that can be used in gDevelop.
### Skills
Two skills that I've developed upon since the previous entry are **embracing failure** and **how to Google**.
#### Embracing Failure
Before I found out about finding the width and height of an object from the properties tab, I made an entire _sequence of events_ that changed the trajectory of the `Aim` object every time the distance the `player` was from the `mouse` increased by approximately 100. Reflecting back on that, it was an enormous waste of time, considering that I spent a **few days** doing all that, just to learn that the properties tab exists and using that for the dimensions of the `Aim` object has about the **same accuracy** as the sequence of events (given that I only had 5 of them), while being **smoother** at the same time. Despite this, I moved on and I kept using the property tabs for many other things, like making _perfect circles_ and _keeping dimensions the same_ for each scene so that I wouldn't have scenes with _inconsistent_ object dimensions.
#### How to Google
One thing that I learned while learning gDevelop is that the documentation is only good for learning about **general concepts**, as for **specific** ones, it was rarely ever useful. Therefore, I changed how I searched for things in relation to gDevelop: instead of searching up "camera zoom in gDevelop", I instead searched up "gDevelop how do you zoom out the camera". By searching things up with a "how do you..." attached, it increases the likelihood of finding **forums** that could help me. As for general concepts such as **making scenes**, I would search up, "gDevelop making scenes". In this search, it's more likely that I would find something from the gDevelop **documentation**, which would be more helpful for learning how to make a scene than a forum would be.

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
