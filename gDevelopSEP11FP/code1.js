gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.idToCallbackMap = new Map();
gdjs._50Code.GDlevelTwoTextObjects1= [];
gdjs._50Code.GDlevelTwoTextObjects2= [];
gdjs._50Code.GDBallObjects1= [];
gdjs._50Code.GDBallObjects2= [];
gdjs._50Code.GDInvisible_9595ObjectObjects1= [];
gdjs._50Code.GDInvisible_9595ObjectObjects2= [];
gdjs._50Code.GDFloorObjects1= [];
gdjs._50Code.GDFloorObjects2= [];
gdjs._50Code.GDFlagObjects1= [];
gdjs._50Code.GDFlagObjects2= [];
gdjs._50Code.GDlevelNameObjects1= [];
gdjs._50Code.GDlevelNameObjects2= [];
gdjs._50Code.GDAimObjects1= [];
gdjs._50Code.GDAimObjects2= [];
gdjs._50Code.GDStarObjects1= [];
gdjs._50Code.GDStarObjects2= [];
gdjs._50Code.GDObstacleObjects1= [];
gdjs._50Code.GDObstacleObjects2= [];


gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDAimObjects1Objects = Hashtable.newFrom({"Aim": gdjs._50Code.GDAimObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs._50Code.GDBallObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs._50Code.GDStarObjects1});
gdjs._50Code.userFunc0x9e8038 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
runtimeScene.setBackgroundColor(135,206,235);
var sceneNumber = runtimeScene.getGame().getVariables().get("sceneNumber").getAsString()
var player = runtimeScene.getObjects("Ball")[0]
var floor = runtimeScene.getObjects("Floor")[0]
var flag = runtimeScene.getObjects("Flag")[0]
var obstacle = runtimeScene.getObjects("Obstacle")[0]
var task = runtimeScene.getObjects("Star")[0]
var taskDone = runtimeScene.getGame().getVariables().get("hasCollided").getAsString()

if (runtimeScene.getName() == "1" && gdjs.RuntimeObject.collisionTest(player,flag, false)){
    sceneNumber = "2"
    runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, sceneNumber)
}
if (runtimeScene.getName() == "2" && gdjs.RuntimeObject.collisionTest(player,flag, false) && taskDone == "true"){
    sceneNumber = "3"
    runtimeScene.requestChange(gdjs.SceneChangeRequest.REPLACE_SCENE, sceneNumber)
}

};
gdjs._50Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Invisible_Object"), gdjs._50Code.GDInvisible_9595ObjectObjects1);
{for(var i = 0, len = gdjs._50Code.GDInvisible_9595ObjectObjects1.length ;i < len;++i) {
    gdjs._50Code.GDInvisible_9595ObjectObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs._50Code.GDInvisible_9595ObjectObjects1.length ;i < len;++i) {
    gdjs._50Code.GDInvisible_9595ObjectObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


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
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._50Code.GDBallObjects1);
{for(var i = 0, len = gdjs._50Code.GDBallObjects1.length ;i < len;++i) {
    gdjs._50Code.GDBallObjects1[i].getBehavior("Physics2").applyForceTowardPosition(gdjs.evtTools.common.distanceBetweenPositions((gdjs._50Code.GDBallObjects1[i].getPointX("")), (gdjs._50Code.GDBallObjects1[i].getPointY("")), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) * 2.5, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
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
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._50Code.GDBallObjects1);
gdjs._50Code.GDAimObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDAimObjects1Objects, (( gdjs._50Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._50Code.GDBallObjects1[0].getPointX("")) + 50, (( gdjs._50Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._50Code.GDBallObjects1[0].getPointY("")) - 20, "");
}
{for(var i = 0, len = gdjs._50Code.GDAimObjects1.length ;i < len;++i) {
    gdjs._50Code.GDAimObjects1[i].getBehavior("Physics2").applyForceTowardPosition(gdjs.evtTools.common.distanceBetweenPositions((( gdjs._50Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._50Code.GDBallObjects1[0].getPointX("")) + 50, (( gdjs._50Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._50Code.GDBallObjects1[0].getPointY("")) - 20, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) * 30, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._50Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs._50Code.GDBallObjects1.length === 0 ) ? 0 :gdjs._50Code.GDBallObjects1[0].getPointX(""));
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDBallObjects1 */
{for(var i = 0, len = gdjs._50Code.GDBallObjects1.length ;i < len;++i) {
    gdjs._50Code.GDBallObjects1[i].getBehavior("Physics2").applyTorque(0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._50Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDBallObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDBallObjects1[i].getBehavior("Physics2").getLinearVelocityLength() > 75 ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDBallObjects1[k] = gdjs._50Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDBallObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("false");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._50Code.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDBallObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDBallObjects1[i].getBehavior("Physics2").getLinearVelocityLength() <= 75 ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDBallObjects1[k] = gdjs._50Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDBallObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("true");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._50Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs._50Code.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBallObjects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDStarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDStarObjects1 */
{for(var i = 0, len = gdjs._50Code.GDStarObjects1.length ;i < len;++i) {
    gdjs._50Code.GDStarObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("true");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aim"), gdjs._50Code.GDAimObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs._50Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs._50Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs._50Code.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Invisible_Object"), gdjs._50Code.GDInvisible_9595ObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs._50Code.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs._50Code.GDStarObjects1);
gdjs.copyArray(runtimeScene.getObjects("levelName"), gdjs._50Code.GDlevelNameObjects1);

const objects = [];
objects.push.apply(objects,gdjs._50Code.GDBallObjects1);
objects.push.apply(objects,gdjs._50Code.GDInvisible_9595ObjectObjects1);
objects.push.apply(objects,gdjs._50Code.GDFlagObjects1);
objects.push.apply(objects,gdjs._50Code.GDFloorObjects1);
objects.push.apply(objects,gdjs._50Code.GDlevelNameObjects1);
objects.push.apply(objects,gdjs._50Code.GDAimObjects1);
objects.push.apply(objects,gdjs._50Code.GDStarObjects1);
objects.push.apply(objects,gdjs._50Code.GDObstacleObjects1);
gdjs._50Code.userFunc0x9e8038(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDlevelTwoTextObjects1.length = 0;
gdjs._50Code.GDlevelTwoTextObjects2.length = 0;
gdjs._50Code.GDBallObjects1.length = 0;
gdjs._50Code.GDBallObjects2.length = 0;
gdjs._50Code.GDInvisible_9595ObjectObjects1.length = 0;
gdjs._50Code.GDInvisible_9595ObjectObjects2.length = 0;
gdjs._50Code.GDFloorObjects1.length = 0;
gdjs._50Code.GDFloorObjects2.length = 0;
gdjs._50Code.GDFlagObjects1.length = 0;
gdjs._50Code.GDFlagObjects2.length = 0;
gdjs._50Code.GDlevelNameObjects1.length = 0;
gdjs._50Code.GDlevelNameObjects2.length = 0;
gdjs._50Code.GDAimObjects1.length = 0;
gdjs._50Code.GDAimObjects2.length = 0;
gdjs._50Code.GDStarObjects1.length = 0;
gdjs._50Code.GDStarObjects2.length = 0;
gdjs._50Code.GDObstacleObjects1.length = 0;
gdjs._50Code.GDObstacleObjects2.length = 0;

gdjs._50Code.eventsList0(runtimeScene);
gdjs._50Code.GDlevelTwoTextObjects1.length = 0;
gdjs._50Code.GDlevelTwoTextObjects2.length = 0;
gdjs._50Code.GDBallObjects1.length = 0;
gdjs._50Code.GDBallObjects2.length = 0;
gdjs._50Code.GDInvisible_9595ObjectObjects1.length = 0;
gdjs._50Code.GDInvisible_9595ObjectObjects2.length = 0;
gdjs._50Code.GDFloorObjects1.length = 0;
gdjs._50Code.GDFloorObjects2.length = 0;
gdjs._50Code.GDFlagObjects1.length = 0;
gdjs._50Code.GDFlagObjects2.length = 0;
gdjs._50Code.GDlevelNameObjects1.length = 0;
gdjs._50Code.GDlevelNameObjects2.length = 0;
gdjs._50Code.GDAimObjects1.length = 0;
gdjs._50Code.GDAimObjects2.length = 0;
gdjs._50Code.GDStarObjects1.length = 0;
gdjs._50Code.GDStarObjects2.length = 0;
gdjs._50Code.GDObstacleObjects1.length = 0;
gdjs._50Code.GDObstacleObjects2.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;
