# Entry 3
##### 2/2/26

### Content
Since the past entry, I've finished [the tutorial for the aiming system](https://www.youtube.com/watch?v=D2k1Lkld6fk) and experimented with it.  
So far, I've found [a way](https://forum.gdevelop.io/t/solved-if-else-event/39747) to mostly stop the **desync** that sometimes occurs whenever I _move my mouse up_ (-Y).  
Basically, the solution is using a strategy identical to that of **media queries**:

![mediaQueries](../images/else-statements-basically.png)

By constantly setting **different limits** based on distance from mouse (if it doesn't work, just set it based off the distance from the y position of the mouse) and making the aim be more **biased towards a lower y value** (subtracting a value from y), you can constantly update the aiming system to _avoid_ desync.  
The desync likely occurs due to me using a **circular** object instead of a **box**.  
Therefore, I am **unable** to use appropriate length and widths to make the _mass_ of `Aim` **equal** to that of the `ball` and have to resort to using unconventional methods.

After this, I plan on learning about how to use different **scenes** so that I can create some sort of a level system.  
Basically, if the player reaches the end of a level, the scene would change and they would move onto level 2.
### EDP
I am currently still on the second step of the _Engineering Design Process_ as I still have a lot to learn in order to be able to properly make my game. For instance, I still have to learn about how to _create and use different scenes_, using _global variables_, and finally, how to properly incorporate _javascript_ into my game, as currently, the _most_ I can do is manipulate **text** boxes. After this, I will likely still be on the second step of the _EDP_, at least until we get past **DOM** and into **P5js**.
### Skills
Two skills that I've developed since the previous entry are **how to learn** and **consideration**.
#### How to Learn
After watching the [the tutorial for the aiming system](https://www.youtube.com/watch?v=D2k1Lkld6fk), I realized that besides making the actual movement by mouse work, I could **only** really apply the concept of using an `Aim` object and applying a force to it in order to _telegraph_ what would happen when the left mouse button is released. As for the _accuracy_ of the telegraphed aim, it was **bad**, since the method used in the video outright **didn't work** for a circular object. So, I had to find my own solution to the problem, which ended up being the method close to that of media queries in CSS.
#### Consideration
When I first noticed that the telegraphed aim desynced from the `player`, I was considering whether or not to **scrap** the idea of telegraphing the aim. _After all, it's just a quality of life feature, right?_ However, I realized that it would be extremely **inconvenient** if it wasn't telegraphed, since you would just have to _estimate_ everything through trial and error. It would end up being very **frustrating** for the player if they had to learn everything by trying the system 40 times before they actually started getting the hang of it. So, I spent a few days trying to learn how to fix this issue.

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
