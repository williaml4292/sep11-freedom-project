
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics || {};

/**
 * Behavior generated from Enforce max movement speed (physics)
 */
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics = class MaxMovementSpeed_Physics extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsBehavior = behaviorData.PhysicsBehavior !== undefined ? behaviorData.PhysicsBehavior : "";
    this._behaviorData.MaximumSpeed = behaviorData.MaximumSpeed !== undefined ? behaviorData.MaximumSpeed : Number("") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PhysicsBehavior !== undefined)
      this._behaviorData.PhysicsBehavior = behaviorOverriding.PhysicsBehavior;
    if (behaviorOverriding.MaximumSpeed !== undefined)
      this._behaviorData.MaximumSpeed = behaviorOverriding.MaximumSpeed;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PhysicsBehavior: this._behaviorData.PhysicsBehavior,
    MaximumSpeed: this._behaviorData.MaximumSpeed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PhysicsBehavior !== undefined)
      this._behaviorData.PhysicsBehavior = networkSyncData.props.PhysicsBehavior;
    if (networkSyncData.props.MaximumSpeed !== undefined)
      this._behaviorData.MaximumSpeed = networkSyncData.props.MaximumSpeed;
  }

  // Properties:
  
  _getPhysicsBehavior() {
    return this._behaviorData.PhysicsBehavior !== undefined ? this._behaviorData.PhysicsBehavior : "";
  }
  _setPhysicsBehavior(newValue) {
    this._behaviorData.PhysicsBehavior = newValue;
  }
  _getMaximumSpeed() {
    return this._behaviorData.MaximumSpeed !== undefined ? this._behaviorData.MaximumSpeed : Number("") || 0;
  }
  _setMaximumSpeed(newValue) {
    this._behaviorData.MaximumSpeed = newValue;
  }
}

/**
 * Shared data generated from Enforce max movement speed (physics)
 */
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.SharedData = class MaxMovementSpeed_PhysicsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpeedRestrictions_MaxMovementSpeed_PhysicsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpeedRestrictions_MaxMovementSpeed_PhysicsSharedData = new gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.SharedData(
      initialData
    );
  }
  return instanceContainer._SpeedRestrictions_MaxMovementSpeed_PhysicsSharedData;
}

// Methods:
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getLinearVelocityLength() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaximumSpeed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).setLinearVelocityX(gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getLinearVelocityX() * (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaximumSpeed() / (gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getLinearVelocityLength())));
}
}
{for(var i = 0, len = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).setLinearVelocityY(gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getLinearVelocityY() * (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaximumSpeed() / (gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getLinearVelocityLength())));
}
}
}

}


};

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PhysicsBehavior": this._getPhysicsBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpeedRestrictions"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpeedRestrictions"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SpeedRestrictions::MaxMovementSpeed_Physics", gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Physics.MaxMovementSpeed_Physics);
