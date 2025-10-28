# Tool Learning Log

## Tool: **gDevelop**

## Project: **Ball hitting cups**
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

### 10/xx/xx:

### 10/xx/xx:


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
