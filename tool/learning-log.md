# Tool Learning Log

## Tool: **gDevelop**

## Project: **Ball (platformer?)**
---

### 9/29/25:
https://editor.gdevelop.io/ (Must use this or download)

##### Adding behaviors to objects (player and enemies)
Right side of screen, click on 3 dots or right click (doesn't work sometimes)
Behaviors tab > edit behaviors
Platformer character = add movement (can change all settings on speed/gravity, etc)
* Jump height is "Jump Speed"
* To make a "platform" solid, add the behavior of "platform".)

### 10/1/25:
* Smooth Camera (in behaviors)
 * Makes the camera follow the character (uncheck y-axis to make it not follow veritcally) x-axis is horrizontal
* Layouts panel (top right, 3 pieces of paper stacked on top of each other.)
 * Can be used to add a background(s) (can be resized)
 * Also shows how much the camera can view with the black outline
  * Backgrounds can be stacked ontop of each other
* CameraScene(events)
 * Changes things in relation to the scene itself.
  * For making backgrounds move:
   * Select the background object > scroll down until image X Offset
   * The value is used to move the background relative to the position of the camera.
   * By making it slower than the camera, it gives an effect of depth.
   * What to put into "value": `CameraCenterX()/8`
   * Decreasing the number at the end makes it move faster (closer to the player)
* The Far-ground should move slower than the mid-ground and etc.
### 10/3/25:
* Top-down movement (behaviors)
  * Another way to add movement (Not platformer games
* Pixel-perfect (behaviors)
  * Changes movement to match the pixels on the screen (for pixel-perfect games)
### 10/9/25:
* Joystick controls (mobile):  
Interface layer (bottom) > add objects (right) > scroll down until Prefabs > select joysticks  > drag it onto the scene > edit behaviors on object(s) you want the joystick to control > add the ‘top down multi-touch controller mapper’ behavior
* Displaying a health bar using prefabs:  
Interface > add objects > prefabs > resources bar > choose health bar > drag onto screen levels(events) [top left] > add action > select health bar > scroll down to value > click the blue 123 use health points > select player

### 10/28/25:
* After logging into my account, my progress on the tutorials was deleted due to not pressing the tiny save button (top left)
* Created a sprite and made it stand on a platform and changed the length of the platform.
* Added a simple conditonal to the game that if the sprite was on the platform, the x-position of the object increases by 2.
  * Doesn't seem to work with gravity and it appears to be on a scale of 0-10.
    * You can make it one-time activation or make it activate multiple times.
* In the events section, right click one of the boxes and click the javascript option so that you can add javascript to your game.
* I added a loop so that if the x-position of the sprite is greater than 1250, the x-posititon is reset back to 100.
* To actually use the sprites, click on `add objects` at the very top of the menu that pops up.
* Everything you add is stored in the `objects` array.
* `sprite.x`
  * x position of sprite (Replace `sprite` with `objects[0]`.

### 11/3/25:
* Instance properties (pencil, top right) 
 * click the terrain you want to edit
  * paint brush (paints tiles)
    * go to terrain and “paint” it over
      * Double click on the tile (objects area) and click the box so it turns red for the object you just addded.
* There is special logic for tiles.
* `Character.CenterX()` (replace character with the name of it
* `Character.CenterY()`
  * Basically just states the x and y coordinates of the character on the tilemap; used in logic.

Adding bullets:
* `Fire bullets` behavior
* Events
* Action
* Character that wants to fire (As scene object)
* Fire bullets at a angle
* As parameters, set as:
* `Player.PointX(“BulletSpawn”)`
* `Player.PointY(“BulletSpawn”)`
* Bullet object = what you want it to fire
* Angle is:` Player.Angle()`

Adding a timer
* To add a timer, first add a scene object (select text)
* Events page
* Condition is: At the beginning of scene
* Action is: Start (or reset) a scene timer
* Line below it in events page:
* Action (score, text, click the “ABC” blue button and select the timer you just created)
  * If you want it to round, use the function, `round()` // put `round(` right after `ToString` and the `)` at the end.

### 11/10/25:
[https://www.youtube.com/watch?v=HzAFMb_q-a4](https://www.youtube.com/watch?v=HzAFMb_q-a4)
2D Physics tutorial

First step: Give a object the 2D Physics Behavior.  
Second Step: Go to the events page and search up 2D Physics conditionals.  
 * Force = Over time.
 * Impulse = Instant
Second Step B: The conditionals specifically tagged as "joints" pin 2 objects together and apply certain logic depending on the joints.
For joints, `Object.PointX("Point")` (and Y)
Objects need to be on different layers and masks for them to not collide. (Learn this next)
"Collision mask, in simple terms, is nothing but the area of the sprite, that is in consideration while in a collision, to avoid situations, similar to the one shown below." > Example of a sprite "walking on air" when the platform is a ramp. [https://wiki.gdevelop.io/gdevelop5/objects/sprite/collision-mask/](https://wiki.gdevelop.io/gdevelop5/objects/sprite/collision-mask/)
### 11/14/25:
Tried making a small game using physics engine.  
Made it so that if the "Space" key was held down, it would apply a force to the sprite.  
* For games with physics, the platform should also use the physics engine, but it needs to be set as a static object instead of dynamic, otherwise it would just fall out of the world.
* I put another dynamic object at the very end of the game so that the sprite just knocked it off the map.
* When using javascript, you must use the array, as the javascript is local and can't affect global variables outside the array.  

### 11/17/25
To edit the joints of an object, make sure that it's a sprite.  
Then add a animation (sprite) to the object (default doesn't work).  
You can edit it from there then add joints.  
Joints are very important for physics.
### 11/18/25
* Increase a substance's restitution to increase the bounciness.  
* You can edit both a sprite's collision markers and joints in the properties section.
  
However, it's difficult to change the box behind the object(?)
### 11/19/25
In my physics game, I tried out different restitutions and added 4 walls around the arena.  
I also added a object(obstacle) right in the middle of the screen.  
The character I made bounced around the screen insanely quickly.  
I anchored the object at (50, 0) with a revolute joint that is added at the beginning of the scene.  
This makes it so that when the object is sent flying, it goes right back to where the revolute joint is.  
Next step: find a way to make the game (screen) bigger find another tutorial for joints.
###

###

###


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
