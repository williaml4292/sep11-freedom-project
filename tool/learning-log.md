# Tool Learning Log

## Tool: **gDevelop**

## Project: **Ball hitting cups**
---

### 9/29/25:
https://editor.gdevelop.io/ (Must use this or download)

##### Adding behaviors to objects (player and enemies)
Right side of screen, click on 3 dots or right click (doesn't work soemtimes)
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



<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
