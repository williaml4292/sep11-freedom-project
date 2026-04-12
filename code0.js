gdjs._49Code = {};
gdjs._49Code.localVariables = [];
gdjs._49Code.idToCallbackMap = new Map();
gdjs._49Code.GDlevelOneTextObjects1= [];
gdjs._49Code.GDlevelOneTextObjects2= [];
gdjs._49Code.GDShapePainterObjects1= [];
gdjs._49Code.GDShapePainterObjects2= [];
gdjs._49Code.GDBallObjects1= [];
gdjs._49Code.GDBallObjects2= [];
gdjs._49Code.GDInvisible_9595ObjectObjects1= [];
gdjs._49Code.GDInvisible_9595ObjectObjects2= [];
gdjs._49Code.GDFloorObjects1= [];
gdjs._49Code.GDFloorObjects2= [];
gdjs._49Code.GDFlagObjects1= [];
gdjs._49Code.GDFlagObjects2= [];
gdjs._49Code.GDAimObjects1= [];
gdjs._49Code.GDAimObjects2= [];
gdjs._49Code.GDStarObjects1= [];
gdjs._49Code.GDStarObjects2= [];
gdjs._49Code.GDObstacleObjects1= [];
gdjs._49Code.GDObstacleObjects2= [];


gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs._49Code.GDBallObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs._49Code.GDStarObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDAimObjects1Objects = Hashtable.newFrom({"Aim": gdjs._49Code.GDAimObjects1});
gdjs._49Code.userFunc0x9a5688 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
runtimeScene.setBackgroundColor(135,206,235);
// Variables and Objects from the scene.
var sceneNumber = runtimeScene.getGame().getVariables().get("sceneNumber").getAsString()
var player = runtimeScene.getObjects("Ball")[0]
var floor = runtimeScene.getObjects("Floor")[0]
var flag = runtimeScene.getObjects("Flag")[0]
var obstacle = runtimeScene.getObjects("Obstacle")[0]
var task = runtimeScene.getObjects("Star")[0]
var taskDone = runtimeScene.getGame().getVariables().get("hasCollided").getAsString()

// Change to scene 2.
if (runtimeScene.getName() == "1" && gdjs.RuntimeObject.collisionTest(player,flag, false)){
    sceneNumber = "2"
    runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, sceneNumber)
}
// Change to scene 3.
if (runtimeScene.getName() == "2" && gdjs.RuntimeObject.collisionTest(player,flag, false) && taskDone == "true"){
    sceneNumber = "3"
    runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, sceneNumber)
}
if (player.getY() > 1250){
    runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, runtimeScene.getName())
}
};
gdjs._49Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("true");
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.666, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "true");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._49Code.GDBallObjects1);
{for(var i = 0, len = gdjs._49Code.GDBallObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBallObjects1[i].getBehavior("Physics2").applyForceTowardPosition(gdjs.evtTools.common.distanceBetweenPositions((gdjs._49Code.GDBallObjects1[i].getPointX("")), (gdjs._49Code.GDBallObjects1[i].getPointY("")), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) * 2.5, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._49Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs._49Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBallObjects1[0].getPointX(""));
}
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDBallObjects1 */
{for(var i = 0, len = gdjs._49Code.GDBallObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBallObjects1[i].getBehavior("Physics2").applyTorque(0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._49Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDBallObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDBallObjects1[i].getBehavior("Physics2").getLinearVelocityLength() > 75 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDBallObjects1[k] = gdjs._49Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDBallObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("false");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._49Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDBallObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDBallObjects1[i].getBehavior("Physics2").getLinearVelocityLength() <= 75 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDBallObjects1[k] = gdjs._49Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDBallObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("true");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._49Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs._49Code.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDBallObjects1Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDStarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDStarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDStarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDStarObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("true");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "true");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._49Code.GDBallObjects1);
gdjs._49Code.GDAimObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDAimObjects1Objects, (( gdjs._49Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBallObjects1[0].getPointX("")) + 50, (( gdjs._49Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBallObjects1[0].getPointY("")) - 20, "");
}
{for(var i = 0, len = gdjs._49Code.GDAimObjects1.length ;i < len;++i) {
    gdjs._49Code.GDAimObjects1[i].getBehavior("Physics2").applyForceTowardPosition(gdjs.evtTools.common.distanceBetweenPositions((( gdjs._49Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBallObjects1[0].getPointX("")) + 50, (( gdjs._49Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBallObjects1[0].getPointY("")) - 20, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) * 30, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aim"), gdjs._49Code.GDAimObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._49Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs._49Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs._49Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Invisible_Object"), gdjs._49Code.GDInvisible_9595ObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs._49Code.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs._49Code.GDStarObjects1);

const objects = [];
objects.push.apply(objects,gdjs._49Code.GDBallObjects1);
objects.push.apply(objects,gdjs._49Code.GDInvisible_9595ObjectObjects1);
objects.push.apply(objects,gdjs._49Code.GDFlagObjects1);
objects.push.apply(objects,gdjs._49Code.GDFloorObjects1);
objects.push.apply(objects,gdjs._49Code.GDAimObjects1);
objects.push.apply(objects,gdjs._49Code.GDStarObjects1);
objects.push.apply(objects,gdjs._49Code.GDObstacleObjects1);
gdjs._49Code.userFunc0x9a5688(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDlevelOneTextObjects1.length = 0;
gdjs._49Code.GDlevelOneTextObjects2.length = 0;
gdjs._49Code.GDShapePainterObjects1.length = 0;
gdjs._49Code.GDShapePainterObjects2.length = 0;
gdjs._49Code.GDBallObjects1.length = 0;
gdjs._49Code.GDBallObjects2.length = 0;
gdjs._49Code.GDInvisible_9595ObjectObjects1.length = 0;
gdjs._49Code.GDInvisible_9595ObjectObjects2.length = 0;
gdjs._49Code.GDFloorObjects1.length = 0;
gdjs._49Code.GDFloorObjects2.length = 0;
gdjs._49Code.GDFlagObjects1.length = 0;
gdjs._49Code.GDFlagObjects2.length = 0;
gdjs._49Code.GDAimObjects1.length = 0;
gdjs._49Code.GDAimObjects2.length = 0;
gdjs._49Code.GDStarObjects1.length = 0;
gdjs._49Code.GDStarObjects2.length = 0;
gdjs._49Code.GDObstacleObjects1.length = 0;
gdjs._49Code.GDObstacleObjects2.length = 0;

gdjs._49Code.eventsList0(runtimeScene);
gdjs._49Code.GDlevelOneTextObjects1.length = 0;
gdjs._49Code.GDlevelOneTextObjects2.length = 0;
gdjs._49Code.GDShapePainterObjects1.length = 0;
gdjs._49Code.GDShapePainterObjects2.length = 0;
gdjs._49Code.GDBallObjects1.length = 0;
gdjs._49Code.GDBallObjects2.length = 0;
gdjs._49Code.GDInvisible_9595ObjectObjects1.length = 0;
gdjs._49Code.GDInvisible_9595ObjectObjects2.length = 0;
gdjs._49Code.GDFloorObjects1.length = 0;
gdjs._49Code.GDFloorObjects2.length = 0;
gdjs._49Code.GDFlagObjects1.length = 0;
gdjs._49Code.GDFlagObjects2.length = 0;
gdjs._49Code.GDAimObjects1.length = 0;
gdjs._49Code.GDAimObjects2.length = 0;
gdjs._49Code.GDStarObjects1.length = 0;
gdjs._49Code.GDStarObjects2.length = 0;
gdjs._49Code.GDObstacleObjects1.length = 0;
gdjs._49Code.GDObstacleObjects2.length = 0;


return;

}

gdjs['_49Code'] = gdjs._49Code;
