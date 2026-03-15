# Entry 4
##### 3/9/26
### Content
Since the previous entry, I've been trying out different methods to make the aiming system smoother, as constantly adjusting the multipliers for the `Aim` object makes the white trajectory line move in an _unnatural_ way.  
I found out that I can just find and edit the height and width of the `Ball` object in the **properties** tab:  

![properties](../images/widthAndHeightOfBall.png)  

This allows me to **remove** the sequence of events that constantly adjusted the multiplier for the `Aim` object, while still keeping the accuracy relatively the same.  

I also found out how to change the textures of my objects so that it wouldn't just be a default purple box for everything in the game. So far, I only did this with the obstacles and the floor:  
![textures](../images/editTextures.png)

In addition, I found a [forum](https://forum.gdevelop.io/t/change-width-of-camera/20431) that helped solve the issue I had with the **camera being too zoomed in** so that when the player tried to aim, they were stuck placing the mouse near the _borders of the screen_, so it was awkward trying to aim further away.  

Finally, I fixed the issue where the text stating what level the player is on **didn't change** when the scene changed from the first one to the second one.  
I found out how to do this by just searching up and using what AI provided me:

![AI](../images/AI.png)

Something that I've been working on was trying to implement javascript in gDevelop.  
I ran into a few issues: not knowing the syntax for the code (_there are barely any tutorials of this_), and not knowing how to pass **multiple** objects to javascript.  
In my first "test project", I was able to set the `sprite.x` of a object, but I was unable to use javascript to manipulate more than one object.  
Recently, I found out on [this forum](https://forum.gdevelop.io/t/how-to-pass-more-than-one-object-to-javascript-event/19431) that you need object groups to do this.  
### EDP
I am currently on the **fifth step** of the _Engineering Design Process_, which is to **create a prototype**. So far, I've done around **50%** of it, but I still have a lot to learn in order to implement javascript, especially if I want to use javascript outside of _just_ manipulating text boxes. Despite that, I could probably make a proper, functioning game when I get the time and motivation to do so (or when it's about to be due). Of course, if I were to do that right now, I wouldn't be using javascript, so that'll have to be delayed until I find a documentation for learning javascript that can be used in gDevelop. My next step of the _EDP_ is to **continue creating my prototype** (Step 5) and (hopefully) find a tutorial for javascript that can be used in gDevelop.
### Skills
#### 
####

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
