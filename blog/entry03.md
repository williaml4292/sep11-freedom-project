# Entry 3
##### 2/2/26

### Content
Since the past entry, I've been _experimenting_ with the aiming system.  
So far, I've found [a way](https://forum.gdevelop.io/t/solved-if-else-event/39747) to mostly stop the **desync** that sometimes occurs whenever I _move my mouse up_ (-Y).  
Basically, the solution is using a strategy identical to that of **media queries**:

![mediaQueries](../images/else-statements-basically.png)

By constantly setting **different limits** based on distance from mouse (if it doesn't work, just set it based off the distance from the y position of the mouse) and making the aim be more **biased towards a lower y value** (subtracting a value from y), you can constantly update the aiming system to _avoid_ desync.  
The desync likely occurs due to me using a **circular** object instead of a **box**.  
Therefore, I am **unable** to use appropriate length and widths to make the _mass_ of `Aim` **equal** to that of the `ball` and have to resort to using unconventional methods.

In addition, I also found [a way]
### EDP

### Skills


[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
