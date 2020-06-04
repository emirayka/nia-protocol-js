// source: protos/protocol.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Action', null, global);
goog.exportSymbol('proto.Action.ActionCase', null, global);
goog.exportSymbol('proto.ActionControlKeyClick', null, global);
goog.exportSymbol('proto.ActionExecuteCode', null, global);
goog.exportSymbol('proto.ActionExecuteFunction', null, global);
goog.exportSymbol('proto.ActionExecuteInterpreterValue', null, global);
goog.exportSymbol('proto.ActionExecuteNamedAction', null, global);
goog.exportSymbol('proto.ActionExecuteOSCommand', null, global);
goog.exportSymbol('proto.ActionFunctionKeyClick', null, global);
goog.exportSymbol('proto.ActionKPKeyClick', null, global);
goog.exportSymbol('proto.ActionKeyClick', null, global);
goog.exportSymbol('proto.ActionKeyPress', null, global);
goog.exportSymbol('proto.ActionKeyRelease', null, global);
goog.exportSymbol('proto.ActionList', null, global);
goog.exportSymbol('proto.ActionMouseAbsoluteMove', null, global);
goog.exportSymbol('proto.ActionMouseButtonClick', null, global);
goog.exportSymbol('proto.ActionMouseButtonKeyClick', null, global);
goog.exportSymbol('proto.ActionMouseButtonPress', null, global);
goog.exportSymbol('proto.ActionMouseButtonRelease', null, global);
goog.exportSymbol('proto.ActionMouseRelativeMove', null, global);
goog.exportSymbol('proto.ActionMultimediaKeyClick', null, global);
goog.exportSymbol('proto.ActionNumberKeyClick', null, global);
goog.exportSymbol('proto.ActionTextKeyClick', null, global);
goog.exportSymbol('proto.ActionTextType', null, global);
goog.exportSymbol('proto.ActionWait', null, global);
goog.exportSymbol('proto.ChangeMappingRequest', null, global);
goog.exportSymbol('proto.ChangeMappingResponse', null, global);
goog.exportSymbol('proto.ChangeMappingResponse.ErrorResult', null, global);
goog.exportSymbol('proto.ChangeMappingResponse.FailureResult', null, global);
goog.exportSymbol('proto.ChangeMappingResponse.ResultCase', null, global);
goog.exportSymbol('proto.ChangeMappingResponse.SuccessResult', null, global);
goog.exportSymbol('proto.DefineActionRequest', null, global);
goog.exportSymbol('proto.DefineActionResponse', null, global);
goog.exportSymbol('proto.DefineActionResponse.ErrorResult', null, global);
goog.exportSymbol('proto.DefineActionResponse.FailureResult', null, global);
goog.exportSymbol('proto.DefineActionResponse.ResultCase', null, global);
goog.exportSymbol('proto.DefineActionResponse.SuccessResult', null, global);
goog.exportSymbol('proto.DefineDeviceRequest', null, global);
goog.exportSymbol('proto.DefineDeviceResponse', null, global);
goog.exportSymbol('proto.DefineDeviceResponse.ErrorResult', null, global);
goog.exportSymbol('proto.DefineDeviceResponse.FailureResult', null, global);
goog.exportSymbol('proto.DefineDeviceResponse.ResultCase', null, global);
goog.exportSymbol('proto.DefineDeviceResponse.SuccessResult', null, global);
goog.exportSymbol('proto.DefineMappingRequest', null, global);
goog.exportSymbol('proto.DefineMappingResponse', null, global);
goog.exportSymbol('proto.DefineMappingResponse.ErrorResult', null, global);
goog.exportSymbol('proto.DefineMappingResponse.FailureResult', null, global);
goog.exportSymbol('proto.DefineMappingResponse.ResultCase', null, global);
goog.exportSymbol('proto.DefineMappingResponse.SuccessResult', null, global);
goog.exportSymbol('proto.DefineModifierRequest', null, global);
goog.exportSymbol('proto.DefineModifierResponse', null, global);
goog.exportSymbol('proto.DefineModifierResponse.ErrorResult', null, global);
goog.exportSymbol('proto.DefineModifierResponse.FailureResult', null, global);
goog.exportSymbol('proto.DefineModifierResponse.ResultCase', null, global);
goog.exportSymbol('proto.DefineModifierResponse.SuccessResult', null, global);
goog.exportSymbol('proto.DeviceInfo', null, global);
goog.exportSymbol('proto.DeviceModel', null, global);
goog.exportSymbol('proto.ExecuteCodeRequest', null, global);
goog.exportSymbol('proto.ExecuteCodeResponse', null, global);
goog.exportSymbol('proto.ExecuteCodeResponse.ErrorResult', null, global);
goog.exportSymbol('proto.ExecuteCodeResponse.FailureResult', null, global);
goog.exportSymbol('proto.ExecuteCodeResponse.ResultCase', null, global);
goog.exportSymbol('proto.ExecuteCodeResponse.SuccessResult', null, global);
goog.exportSymbol('proto.GetDefinedActionsRequest', null, global);
goog.exportSymbol('proto.GetDefinedActionsResponse', null, global);
goog.exportSymbol('proto.GetDefinedActionsResponse.ErrorResult', null, global);
goog.exportSymbol('proto.GetDefinedActionsResponse.FailureResult', null, global);
goog.exportSymbol('proto.GetDefinedActionsResponse.ResultCase', null, global);
goog.exportSymbol('proto.GetDefinedActionsResponse.SuccessResult', null, global);
goog.exportSymbol('proto.GetDefinedMappingsRequest', null, global);
goog.exportSymbol('proto.GetDefinedMappingsResponse', null, global);
goog.exportSymbol('proto.GetDefinedMappingsResponse.ErrorResult', null, global);
goog.exportSymbol('proto.GetDefinedMappingsResponse.FailureResult', null, global);
goog.exportSymbol('proto.GetDefinedMappingsResponse.ResultCase', null, global);
goog.exportSymbol('proto.GetDefinedMappingsResponse.SuccessResult', null, global);
goog.exportSymbol('proto.GetDefinedModifiersRequest', null, global);
goog.exportSymbol('proto.GetDefinedModifiersResponse', null, global);
goog.exportSymbol('proto.GetDefinedModifiersResponse.ErrorResult', null, global);
goog.exportSymbol('proto.GetDefinedModifiersResponse.FailureResult', null, global);
goog.exportSymbol('proto.GetDefinedModifiersResponse.ResultCase', null, global);
goog.exportSymbol('proto.GetDefinedModifiersResponse.SuccessResult', null, global);
goog.exportSymbol('proto.GetDevicesRequest', null, global);
goog.exportSymbol('proto.GetDevicesResponse', null, global);
goog.exportSymbol('proto.GetDevicesResponse.ErrorResult', null, global);
goog.exportSymbol('proto.GetDevicesResponse.FailureResult', null, global);
goog.exportSymbol('proto.GetDevicesResponse.ResultCase', null, global);
goog.exportSymbol('proto.GetDevicesResponse.SuccessResult', null, global);
goog.exportSymbol('proto.HandshakeRequest', null, global);
goog.exportSymbol('proto.HandshakeResponse', null, global);
goog.exportSymbol('proto.HandshakeResponse.ErrorResult', null, global);
goog.exportSymbol('proto.HandshakeResponse.FailureResult', null, global);
goog.exportSymbol('proto.HandshakeResponse.ResultCase', null, global);
goog.exportSymbol('proto.HandshakeResponse.SuccessResult', null, global);
goog.exportSymbol('proto.IsListeningRequest', null, global);
goog.exportSymbol('proto.IsListeningResponse', null, global);
goog.exportSymbol('proto.IsListeningResponse.ErrorResult', null, global);
goog.exportSymbol('proto.IsListeningResponse.FailureResult', null, global);
goog.exportSymbol('proto.IsListeningResponse.ResultCase', null, global);
goog.exportSymbol('proto.IsListeningResponse.SuccessResult', null, global);
goog.exportSymbol('proto.Key', null, global);
goog.exportSymbol('proto.Key.KeyCase', null, global);
goog.exportSymbol('proto.Key1', null, global);
goog.exportSymbol('proto.Key2', null, global);
goog.exportSymbol('proto.KeyChord', null, global);
goog.exportSymbol('proto.KeyDescription', null, global);
goog.exportSymbol('proto.Mapping', null, global);
goog.exportSymbol('proto.ModifierDescription', null, global);
goog.exportSymbol('proto.NamedAction', null, global);
goog.exportSymbol('proto.RemoveActionRequest', null, global);
goog.exportSymbol('proto.RemoveActionResponse', null, global);
goog.exportSymbol('proto.RemoveActionResponse.ErrorResult', null, global);
goog.exportSymbol('proto.RemoveActionResponse.FailureResult', null, global);
goog.exportSymbol('proto.RemoveActionResponse.ResultCase', null, global);
goog.exportSymbol('proto.RemoveActionResponse.SuccessResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByIdRequest', null, global);
goog.exportSymbol('proto.RemoveDeviceByIdResponse', null, global);
goog.exportSymbol('proto.RemoveDeviceByIdResponse.ErrorResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByIdResponse.FailureResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByIdResponse.ResultCase', null, global);
goog.exportSymbol('proto.RemoveDeviceByIdResponse.SuccessResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByNameRequest', null, global);
goog.exportSymbol('proto.RemoveDeviceByNameResponse', null, global);
goog.exportSymbol('proto.RemoveDeviceByNameResponse.ErrorResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByNameResponse.FailureResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByNameResponse.ResultCase', null, global);
goog.exportSymbol('proto.RemoveDeviceByNameResponse.SuccessResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByPathRequest', null, global);
goog.exportSymbol('proto.RemoveDeviceByPathResponse', null, global);
goog.exportSymbol('proto.RemoveDeviceByPathResponse.ErrorResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByPathResponse.FailureResult', null, global);
goog.exportSymbol('proto.RemoveDeviceByPathResponse.ResultCase', null, global);
goog.exportSymbol('proto.RemoveDeviceByPathResponse.SuccessResult', null, global);
goog.exportSymbol('proto.RemoveMappingRequest', null, global);
goog.exportSymbol('proto.RemoveMappingResponse', null, global);
goog.exportSymbol('proto.RemoveMappingResponse.ErrorResult', null, global);
goog.exportSymbol('proto.RemoveMappingResponse.FailureResult', null, global);
goog.exportSymbol('proto.RemoveMappingResponse.ResultCase', null, global);
goog.exportSymbol('proto.RemoveMappingResponse.SuccessResult', null, global);
goog.exportSymbol('proto.RemoveModifierRequest', null, global);
goog.exportSymbol('proto.RemoveModifierResponse', null, global);
goog.exportSymbol('proto.RemoveModifierResponse.ErrorResult', null, global);
goog.exportSymbol('proto.RemoveModifierResponse.FailureResult', null, global);
goog.exportSymbol('proto.RemoveModifierResponse.ResultCase', null, global);
goog.exportSymbol('proto.RemoveModifierResponse.SuccessResult', null, global);
goog.exportSymbol('proto.Request', null, global);
goog.exportSymbol('proto.Request.RequestCase', null, global);
goog.exportSymbol('proto.Response', null, global);
goog.exportSymbol('proto.Response.ResponseCase', null, global);
goog.exportSymbol('proto.StartListeningRequest', null, global);
goog.exportSymbol('proto.StartListeningResponse', null, global);
goog.exportSymbol('proto.StartListeningResponse.ErrorResult', null, global);
goog.exportSymbol('proto.StartListeningResponse.FailureResult', null, global);
goog.exportSymbol('proto.StartListeningResponse.ResultCase', null, global);
goog.exportSymbol('proto.StartListeningResponse.SuccessResult', null, global);
goog.exportSymbol('proto.StopListeningRequest', null, global);
goog.exportSymbol('proto.StopListeningResponse', null, global);
goog.exportSymbol('proto.StopListeningResponse.ErrorResult', null, global);
goog.exportSymbol('proto.StopListeningResponse.FailureResult', null, global);
goog.exportSymbol('proto.StopListeningResponse.ResultCase', null, global);
goog.exportSymbol('proto.StopListeningResponse.SuccessResult', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionKeyPress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionKeyPress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionKeyPress.displayName = 'proto.ActionKeyPress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionKeyClick.displayName = 'proto.ActionKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionKeyRelease = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionKeyRelease, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionKeyRelease.displayName = 'proto.ActionKeyRelease';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionMouseButtonPress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionMouseButtonPress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionMouseButtonPress.displayName = 'proto.ActionMouseButtonPress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionMouseButtonClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionMouseButtonClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionMouseButtonClick.displayName = 'proto.ActionMouseButtonClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionMouseButtonRelease = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionMouseButtonRelease, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionMouseButtonRelease.displayName = 'proto.ActionMouseButtonRelease';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionTextKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionTextKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionTextKeyClick.displayName = 'proto.ActionTextKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionNumberKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionNumberKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionNumberKeyClick.displayName = 'proto.ActionNumberKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionFunctionKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionFunctionKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionFunctionKeyClick.displayName = 'proto.ActionFunctionKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionControlKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionControlKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionControlKeyClick.displayName = 'proto.ActionControlKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionKPKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionKPKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionKPKeyClick.displayName = 'proto.ActionKPKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionMultimediaKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionMultimediaKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionMultimediaKeyClick.displayName = 'proto.ActionMultimediaKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionMouseButtonKeyClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionMouseButtonKeyClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionMouseButtonKeyClick.displayName = 'proto.ActionMouseButtonKeyClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionMouseRelativeMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionMouseRelativeMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionMouseRelativeMove.displayName = 'proto.ActionMouseRelativeMove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionMouseAbsoluteMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionMouseAbsoluteMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionMouseAbsoluteMove.displayName = 'proto.ActionMouseAbsoluteMove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionWait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionWait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionWait.displayName = 'proto.ActionWait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionTextType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionTextType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionTextType.displayName = 'proto.ActionTextType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionExecuteCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionExecuteCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionExecuteCode.displayName = 'proto.ActionExecuteCode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionExecuteFunction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionExecuteFunction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionExecuteFunction.displayName = 'proto.ActionExecuteFunction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionExecuteOSCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionExecuteOSCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionExecuteOSCommand.displayName = 'proto.ActionExecuteOSCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionExecuteNamedAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionExecuteNamedAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionExecuteNamedAction.displayName = 'proto.ActionExecuteNamedAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionExecuteInterpreterValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActionExecuteInterpreterValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionExecuteInterpreterValue.displayName = 'proto.ActionExecuteInterpreterValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Action.oneofGroups_);
};
goog.inherits(proto.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Action.displayName = 'proto.Action';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NamedAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NamedAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NamedAction.displayName = 'proto.NamedAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ActionList.repeatedFields_, null);
};
goog.inherits(proto.ActionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActionList.displayName = 'proto.ActionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Key1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Key1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Key1.displayName = 'proto.Key1';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Key2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Key2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Key2.displayName = 'proto.Key2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Key.oneofGroups_);
};
goog.inherits(proto.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Key.displayName = 'proto.Key';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifierDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifierDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifierDescription.displayName = 'proto.ModifierDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.KeyChord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.KeyChord.repeatedFields_, null);
};
goog.inherits(proto.KeyChord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.KeyChord.displayName = 'proto.KeyChord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Mapping.repeatedFields_, null);
};
goog.inherits(proto.Mapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mapping.displayName = 'proto.Mapping';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.KeyDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.KeyDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.KeyDescription.displayName = 'proto.KeyDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DeviceModel.repeatedFields_, null);
};
goog.inherits(proto.DeviceModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceModel.displayName = 'proto.DeviceModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceInfo.displayName = 'proto.DeviceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HandshakeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HandshakeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HandshakeRequest.displayName = 'proto.HandshakeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HandshakeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.HandshakeResponse.oneofGroups_);
};
goog.inherits(proto.HandshakeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HandshakeResponse.displayName = 'proto.HandshakeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HandshakeResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HandshakeResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HandshakeResponse.SuccessResult.displayName = 'proto.HandshakeResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HandshakeResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HandshakeResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HandshakeResponse.ErrorResult.displayName = 'proto.HandshakeResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HandshakeResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HandshakeResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HandshakeResponse.FailureResult.displayName = 'proto.HandshakeResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDevicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDevicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDevicesRequest.displayName = 'proto.GetDevicesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDevicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.GetDevicesResponse.oneofGroups_);
};
goog.inherits(proto.GetDevicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDevicesResponse.displayName = 'proto.GetDevicesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDevicesResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetDevicesResponse.SuccessResult.repeatedFields_, null);
};
goog.inherits(proto.GetDevicesResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDevicesResponse.SuccessResult.displayName = 'proto.GetDevicesResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDevicesResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDevicesResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDevicesResponse.ErrorResult.displayName = 'proto.GetDevicesResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDevicesResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDevicesResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDevicesResponse.FailureResult.displayName = 'proto.GetDevicesResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExecuteCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExecuteCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExecuteCodeRequest.displayName = 'proto.ExecuteCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExecuteCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ExecuteCodeResponse.oneofGroups_);
};
goog.inherits(proto.ExecuteCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExecuteCodeResponse.displayName = 'proto.ExecuteCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExecuteCodeResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExecuteCodeResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExecuteCodeResponse.SuccessResult.displayName = 'proto.ExecuteCodeResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExecuteCodeResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExecuteCodeResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExecuteCodeResponse.ErrorResult.displayName = 'proto.ExecuteCodeResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExecuteCodeResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExecuteCodeResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExecuteCodeResponse.FailureResult.displayName = 'proto.ExecuteCodeResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineDeviceRequest.displayName = 'proto.DefineDeviceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineDeviceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DefineDeviceResponse.oneofGroups_);
};
goog.inherits(proto.DefineDeviceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineDeviceResponse.displayName = 'proto.DefineDeviceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineDeviceResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineDeviceResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineDeviceResponse.SuccessResult.displayName = 'proto.DefineDeviceResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineDeviceResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineDeviceResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineDeviceResponse.ErrorResult.displayName = 'proto.DefineDeviceResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineDeviceResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineDeviceResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineDeviceResponse.FailureResult.displayName = 'proto.DefineDeviceResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByPathRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByPathRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByPathRequest.displayName = 'proto.RemoveDeviceByPathRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByPathResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.RemoveDeviceByPathResponse.oneofGroups_);
};
goog.inherits(proto.RemoveDeviceByPathResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByPathResponse.displayName = 'proto.RemoveDeviceByPathResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByPathResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByPathResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByPathResponse.SuccessResult.displayName = 'proto.RemoveDeviceByPathResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByPathResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByPathResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByPathResponse.ErrorResult.displayName = 'proto.RemoveDeviceByPathResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByPathResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByPathResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByPathResponse.FailureResult.displayName = 'proto.RemoveDeviceByPathResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByNameRequest.displayName = 'proto.RemoveDeviceByNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.RemoveDeviceByNameResponse.oneofGroups_);
};
goog.inherits(proto.RemoveDeviceByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByNameResponse.displayName = 'proto.RemoveDeviceByNameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByNameResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByNameResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByNameResponse.SuccessResult.displayName = 'proto.RemoveDeviceByNameResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByNameResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByNameResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByNameResponse.ErrorResult.displayName = 'proto.RemoveDeviceByNameResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByNameResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByNameResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByNameResponse.FailureResult.displayName = 'proto.RemoveDeviceByNameResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByIdRequest.displayName = 'proto.RemoveDeviceByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.RemoveDeviceByIdResponse.oneofGroups_);
};
goog.inherits(proto.RemoveDeviceByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByIdResponse.displayName = 'proto.RemoveDeviceByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByIdResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByIdResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByIdResponse.SuccessResult.displayName = 'proto.RemoveDeviceByIdResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByIdResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByIdResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByIdResponse.ErrorResult.displayName = 'proto.RemoveDeviceByIdResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveDeviceByIdResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveDeviceByIdResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveDeviceByIdResponse.FailureResult.displayName = 'proto.RemoveDeviceByIdResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedModifiersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedModifiersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedModifiersRequest.displayName = 'proto.GetDefinedModifiersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedModifiersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.GetDefinedModifiersResponse.oneofGroups_);
};
goog.inherits(proto.GetDefinedModifiersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedModifiersResponse.displayName = 'proto.GetDefinedModifiersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedModifiersResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetDefinedModifiersResponse.SuccessResult.repeatedFields_, null);
};
goog.inherits(proto.GetDefinedModifiersResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedModifiersResponse.SuccessResult.displayName = 'proto.GetDefinedModifiersResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedModifiersResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedModifiersResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedModifiersResponse.ErrorResult.displayName = 'proto.GetDefinedModifiersResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedModifiersResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedModifiersResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedModifiersResponse.FailureResult.displayName = 'proto.GetDefinedModifiersResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineModifierRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineModifierRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineModifierRequest.displayName = 'proto.DefineModifierRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineModifierResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DefineModifierResponse.oneofGroups_);
};
goog.inherits(proto.DefineModifierResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineModifierResponse.displayName = 'proto.DefineModifierResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineModifierResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineModifierResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineModifierResponse.SuccessResult.displayName = 'proto.DefineModifierResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineModifierResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineModifierResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineModifierResponse.ErrorResult.displayName = 'proto.DefineModifierResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineModifierResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineModifierResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineModifierResponse.FailureResult.displayName = 'proto.DefineModifierResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveModifierRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveModifierRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveModifierRequest.displayName = 'proto.RemoveModifierRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveModifierResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.RemoveModifierResponse.oneofGroups_);
};
goog.inherits(proto.RemoveModifierResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveModifierResponse.displayName = 'proto.RemoveModifierResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveModifierResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveModifierResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveModifierResponse.SuccessResult.displayName = 'proto.RemoveModifierResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveModifierResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveModifierResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveModifierResponse.ErrorResult.displayName = 'proto.RemoveModifierResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveModifierResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveModifierResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveModifierResponse.FailureResult.displayName = 'proto.RemoveModifierResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedActionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedActionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedActionsRequest.displayName = 'proto.GetDefinedActionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.GetDefinedActionsResponse.oneofGroups_);
};
goog.inherits(proto.GetDefinedActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedActionsResponse.displayName = 'proto.GetDefinedActionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedActionsResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetDefinedActionsResponse.SuccessResult.repeatedFields_, null);
};
goog.inherits(proto.GetDefinedActionsResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedActionsResponse.SuccessResult.displayName = 'proto.GetDefinedActionsResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedActionsResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedActionsResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedActionsResponse.ErrorResult.displayName = 'proto.GetDefinedActionsResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedActionsResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedActionsResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedActionsResponse.FailureResult.displayName = 'proto.GetDefinedActionsResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineActionRequest.displayName = 'proto.DefineActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DefineActionResponse.oneofGroups_);
};
goog.inherits(proto.DefineActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineActionResponse.displayName = 'proto.DefineActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineActionResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineActionResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineActionResponse.SuccessResult.displayName = 'proto.DefineActionResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineActionResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineActionResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineActionResponse.ErrorResult.displayName = 'proto.DefineActionResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineActionResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineActionResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineActionResponse.FailureResult.displayName = 'proto.DefineActionResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveActionRequest.displayName = 'proto.RemoveActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.RemoveActionResponse.oneofGroups_);
};
goog.inherits(proto.RemoveActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveActionResponse.displayName = 'proto.RemoveActionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveActionResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveActionResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveActionResponse.SuccessResult.displayName = 'proto.RemoveActionResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveActionResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveActionResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveActionResponse.ErrorResult.displayName = 'proto.RemoveActionResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveActionResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveActionResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveActionResponse.FailureResult.displayName = 'proto.RemoveActionResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedMappingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedMappingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedMappingsRequest.displayName = 'proto.GetDefinedMappingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedMappingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.GetDefinedMappingsResponse.oneofGroups_);
};
goog.inherits(proto.GetDefinedMappingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedMappingsResponse.displayName = 'proto.GetDefinedMappingsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedMappingsResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetDefinedMappingsResponse.SuccessResult.repeatedFields_, null);
};
goog.inherits(proto.GetDefinedMappingsResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedMappingsResponse.SuccessResult.displayName = 'proto.GetDefinedMappingsResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedMappingsResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedMappingsResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedMappingsResponse.ErrorResult.displayName = 'proto.GetDefinedMappingsResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetDefinedMappingsResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetDefinedMappingsResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetDefinedMappingsResponse.FailureResult.displayName = 'proto.GetDefinedMappingsResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineMappingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineMappingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineMappingRequest.displayName = 'proto.DefineMappingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineMappingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DefineMappingResponse.oneofGroups_);
};
goog.inherits(proto.DefineMappingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineMappingResponse.displayName = 'proto.DefineMappingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineMappingResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineMappingResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineMappingResponse.SuccessResult.displayName = 'proto.DefineMappingResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineMappingResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineMappingResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineMappingResponse.ErrorResult.displayName = 'proto.DefineMappingResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DefineMappingResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DefineMappingResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DefineMappingResponse.FailureResult.displayName = 'proto.DefineMappingResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeMappingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ChangeMappingRequest.repeatedFields_, null);
};
goog.inherits(proto.ChangeMappingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChangeMappingRequest.displayName = 'proto.ChangeMappingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeMappingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ChangeMappingResponse.oneofGroups_);
};
goog.inherits(proto.ChangeMappingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChangeMappingResponse.displayName = 'proto.ChangeMappingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeMappingResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeMappingResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChangeMappingResponse.SuccessResult.displayName = 'proto.ChangeMappingResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeMappingResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeMappingResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChangeMappingResponse.ErrorResult.displayName = 'proto.ChangeMappingResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeMappingResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeMappingResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChangeMappingResponse.FailureResult.displayName = 'proto.ChangeMappingResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveMappingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RemoveMappingRequest.repeatedFields_, null);
};
goog.inherits(proto.RemoveMappingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveMappingRequest.displayName = 'proto.RemoveMappingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveMappingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.RemoveMappingResponse.oneofGroups_);
};
goog.inherits(proto.RemoveMappingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveMappingResponse.displayName = 'proto.RemoveMappingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveMappingResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveMappingResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveMappingResponse.SuccessResult.displayName = 'proto.RemoveMappingResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveMappingResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveMappingResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveMappingResponse.ErrorResult.displayName = 'proto.RemoveMappingResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RemoveMappingResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RemoveMappingResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RemoveMappingResponse.FailureResult.displayName = 'proto.RemoveMappingResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IsListeningRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IsListeningRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.IsListeningRequest.displayName = 'proto.IsListeningRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IsListeningResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.IsListeningResponse.oneofGroups_);
};
goog.inherits(proto.IsListeningResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.IsListeningResponse.displayName = 'proto.IsListeningResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IsListeningResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IsListeningResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.IsListeningResponse.SuccessResult.displayName = 'proto.IsListeningResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IsListeningResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IsListeningResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.IsListeningResponse.ErrorResult.displayName = 'proto.IsListeningResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IsListeningResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IsListeningResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.IsListeningResponse.FailureResult.displayName = 'proto.IsListeningResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StartListeningRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StartListeningRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StartListeningRequest.displayName = 'proto.StartListeningRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StartListeningResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.StartListeningResponse.oneofGroups_);
};
goog.inherits(proto.StartListeningResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StartListeningResponse.displayName = 'proto.StartListeningResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StartListeningResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StartListeningResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StartListeningResponse.SuccessResult.displayName = 'proto.StartListeningResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StartListeningResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StartListeningResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StartListeningResponse.ErrorResult.displayName = 'proto.StartListeningResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StartListeningResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StartListeningResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StartListeningResponse.FailureResult.displayName = 'proto.StartListeningResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StopListeningRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StopListeningRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StopListeningRequest.displayName = 'proto.StopListeningRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StopListeningResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.StopListeningResponse.oneofGroups_);
};
goog.inherits(proto.StopListeningResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StopListeningResponse.displayName = 'proto.StopListeningResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StopListeningResponse.SuccessResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StopListeningResponse.SuccessResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StopListeningResponse.SuccessResult.displayName = 'proto.StopListeningResponse.SuccessResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StopListeningResponse.ErrorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StopListeningResponse.ErrorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StopListeningResponse.ErrorResult.displayName = 'proto.StopListeningResponse.ErrorResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StopListeningResponse.FailureResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StopListeningResponse.FailureResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StopListeningResponse.FailureResult.displayName = 'proto.StopListeningResponse.FailureResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Request.oneofGroups_);
};
goog.inherits(proto.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Request.displayName = 'proto.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Response.oneofGroups_);
};
goog.inherits(proto.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Response.displayName = 'proto.Response';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionKeyPress.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionKeyPress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionKeyPress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKeyPress.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionKeyPress}
 */
proto.ActionKeyPress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionKeyPress;
  return proto.ActionKeyPress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionKeyPress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionKeyPress}
 */
proto.ActionKeyPress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionKeyPress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionKeyPress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionKeyPress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKeyPress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionKeyPress.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionKeyPress} returns this
 */
proto.ActionKeyPress.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionKeyClick}
 */
proto.ActionKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionKeyClick;
  return proto.ActionKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionKeyClick}
 */
proto.ActionKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionKeyClick} returns this
 */
proto.ActionKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionKeyRelease.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionKeyRelease.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionKeyRelease} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKeyRelease.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionKeyRelease}
 */
proto.ActionKeyRelease.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionKeyRelease;
  return proto.ActionKeyRelease.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionKeyRelease} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionKeyRelease}
 */
proto.ActionKeyRelease.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionKeyRelease.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionKeyRelease.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionKeyRelease} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKeyRelease.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionKeyRelease.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionKeyRelease} returns this
 */
proto.ActionKeyRelease.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionMouseButtonPress.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionMouseButtonPress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionMouseButtonPress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonPress.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttonCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionMouseButtonPress}
 */
proto.ActionMouseButtonPress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionMouseButtonPress;
  return proto.ActionMouseButtonPress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionMouseButtonPress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionMouseButtonPress}
 */
proto.ActionMouseButtonPress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setButtonCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionMouseButtonPress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionMouseButtonPress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionMouseButtonPress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonPress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtonCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 button_code = 1;
 * @return {number}
 */
proto.ActionMouseButtonPress.prototype.getButtonCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseButtonPress} returns this
 */
proto.ActionMouseButtonPress.prototype.setButtonCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionMouseButtonClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionMouseButtonClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionMouseButtonClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttonCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionMouseButtonClick}
 */
proto.ActionMouseButtonClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionMouseButtonClick;
  return proto.ActionMouseButtonClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionMouseButtonClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionMouseButtonClick}
 */
proto.ActionMouseButtonClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setButtonCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionMouseButtonClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionMouseButtonClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionMouseButtonClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtonCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 button_code = 1;
 * @return {number}
 */
proto.ActionMouseButtonClick.prototype.getButtonCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseButtonClick} returns this
 */
proto.ActionMouseButtonClick.prototype.setButtonCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionMouseButtonRelease.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionMouseButtonRelease.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionMouseButtonRelease} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonRelease.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttonCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionMouseButtonRelease}
 */
proto.ActionMouseButtonRelease.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionMouseButtonRelease;
  return proto.ActionMouseButtonRelease.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionMouseButtonRelease} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionMouseButtonRelease}
 */
proto.ActionMouseButtonRelease.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setButtonCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionMouseButtonRelease.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionMouseButtonRelease.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionMouseButtonRelease} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonRelease.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtonCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 button_code = 1;
 * @return {number}
 */
proto.ActionMouseButtonRelease.prototype.getButtonCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseButtonRelease} returns this
 */
proto.ActionMouseButtonRelease.prototype.setButtonCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionTextKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionTextKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionTextKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionTextKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionTextKeyClick}
 */
proto.ActionTextKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionTextKeyClick;
  return proto.ActionTextKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionTextKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionTextKeyClick}
 */
proto.ActionTextKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionTextKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionTextKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionTextKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionTextKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionTextKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionTextKeyClick} returns this
 */
proto.ActionTextKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionNumberKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionNumberKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionNumberKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionNumberKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionNumberKeyClick}
 */
proto.ActionNumberKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionNumberKeyClick;
  return proto.ActionNumberKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionNumberKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionNumberKeyClick}
 */
proto.ActionNumberKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionNumberKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionNumberKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionNumberKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionNumberKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionNumberKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionNumberKeyClick} returns this
 */
proto.ActionNumberKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionFunctionKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionFunctionKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionFunctionKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionFunctionKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionFunctionKeyClick}
 */
proto.ActionFunctionKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionFunctionKeyClick;
  return proto.ActionFunctionKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionFunctionKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionFunctionKeyClick}
 */
proto.ActionFunctionKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionFunctionKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionFunctionKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionFunctionKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionFunctionKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionFunctionKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionFunctionKeyClick} returns this
 */
proto.ActionFunctionKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionControlKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionControlKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionControlKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionControlKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionControlKeyClick}
 */
proto.ActionControlKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionControlKeyClick;
  return proto.ActionControlKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionControlKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionControlKeyClick}
 */
proto.ActionControlKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionControlKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionControlKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionControlKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionControlKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionControlKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionControlKeyClick} returns this
 */
proto.ActionControlKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionKPKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionKPKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionKPKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKPKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionKPKeyClick}
 */
proto.ActionKPKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionKPKeyClick;
  return proto.ActionKPKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionKPKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionKPKeyClick}
 */
proto.ActionKPKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionKPKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionKPKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionKPKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionKPKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionKPKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionKPKeyClick} returns this
 */
proto.ActionKPKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionMultimediaKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionMultimediaKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionMultimediaKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMultimediaKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionMultimediaKeyClick}
 */
proto.ActionMultimediaKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionMultimediaKeyClick;
  return proto.ActionMultimediaKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionMultimediaKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionMultimediaKeyClick}
 */
proto.ActionMultimediaKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionMultimediaKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionMultimediaKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionMultimediaKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMultimediaKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionMultimediaKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMultimediaKeyClick} returns this
 */
proto.ActionMultimediaKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionMouseButtonKeyClick.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionMouseButtonKeyClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionMouseButtonKeyClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonKeyClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionMouseButtonKeyClick}
 */
proto.ActionMouseButtonKeyClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionMouseButtonKeyClick;
  return proto.ActionMouseButtonKeyClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionMouseButtonKeyClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionMouseButtonKeyClick}
 */
proto.ActionMouseButtonKeyClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionMouseButtonKeyClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionMouseButtonKeyClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionMouseButtonKeyClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseButtonKeyClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.ActionMouseButtonKeyClick.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseButtonKeyClick} returns this
 */
proto.ActionMouseButtonKeyClick.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionMouseRelativeMove.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionMouseRelativeMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionMouseRelativeMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseRelativeMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    dx: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dy: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionMouseRelativeMove}
 */
proto.ActionMouseRelativeMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionMouseRelativeMove;
  return proto.ActionMouseRelativeMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionMouseRelativeMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionMouseRelativeMove}
 */
proto.ActionMouseRelativeMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDx(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionMouseRelativeMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionMouseRelativeMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionMouseRelativeMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseRelativeMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDx();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDy();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 dx = 1;
 * @return {number}
 */
proto.ActionMouseRelativeMove.prototype.getDx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseRelativeMove} returns this
 */
proto.ActionMouseRelativeMove.prototype.setDx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 dy = 2;
 * @return {number}
 */
proto.ActionMouseRelativeMove.prototype.getDy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseRelativeMove} returns this
 */
proto.ActionMouseRelativeMove.prototype.setDy = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionMouseAbsoluteMove.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionMouseAbsoluteMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionMouseAbsoluteMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseAbsoluteMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionMouseAbsoluteMove}
 */
proto.ActionMouseAbsoluteMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionMouseAbsoluteMove;
  return proto.ActionMouseAbsoluteMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionMouseAbsoluteMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionMouseAbsoluteMove}
 */
proto.ActionMouseAbsoluteMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionMouseAbsoluteMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionMouseAbsoluteMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionMouseAbsoluteMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionMouseAbsoluteMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.ActionMouseAbsoluteMove.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseAbsoluteMove} returns this
 */
proto.ActionMouseAbsoluteMove.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.ActionMouseAbsoluteMove.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionMouseAbsoluteMove} returns this
 */
proto.ActionMouseAbsoluteMove.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionWait.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionWait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionWait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionWait.toObject = function(includeInstance, msg) {
  var f, obj = {
    ms: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionWait}
 */
proto.ActionWait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionWait;
  return proto.ActionWait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionWait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionWait}
 */
proto.ActionWait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionWait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionWait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionWait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionWait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMs();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ms = 1;
 * @return {number}
 */
proto.ActionWait.prototype.getMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActionWait} returns this
 */
proto.ActionWait.prototype.setMs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionTextType.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionTextType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionTextType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionTextType.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionTextType}
 */
proto.ActionTextType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionTextType;
  return proto.ActionTextType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionTextType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionTextType}
 */
proto.ActionTextType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionTextType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionTextType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionTextType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionTextType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.ActionTextType.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActionTextType} returns this
 */
proto.ActionTextType.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionExecuteCode.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionExecuteCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionExecuteCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionExecuteCode}
 */
proto.ActionExecuteCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionExecuteCode;
  return proto.ActionExecuteCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionExecuteCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionExecuteCode}
 */
proto.ActionExecuteCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionExecuteCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionExecuteCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionExecuteCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.ActionExecuteCode.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActionExecuteCode} returns this
 */
proto.ActionExecuteCode.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionExecuteFunction.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionExecuteFunction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionExecuteFunction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteFunction.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionExecuteFunction}
 */
proto.ActionExecuteFunction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionExecuteFunction;
  return proto.ActionExecuteFunction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionExecuteFunction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionExecuteFunction}
 */
proto.ActionExecuteFunction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionExecuteFunction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionExecuteFunction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionExecuteFunction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteFunction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_name = 1;
 * @return {string}
 */
proto.ActionExecuteFunction.prototype.getFunctionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActionExecuteFunction} returns this
 */
proto.ActionExecuteFunction.prototype.setFunctionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionExecuteOSCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionExecuteOSCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionExecuteOSCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteOSCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    osCommand: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionExecuteOSCommand}
 */
proto.ActionExecuteOSCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionExecuteOSCommand;
  return proto.ActionExecuteOSCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionExecuteOSCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionExecuteOSCommand}
 */
proto.ActionExecuteOSCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionExecuteOSCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionExecuteOSCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionExecuteOSCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteOSCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOsCommand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string os_command = 1;
 * @return {string}
 */
proto.ActionExecuteOSCommand.prototype.getOsCommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActionExecuteOSCommand} returns this
 */
proto.ActionExecuteOSCommand.prototype.setOsCommand = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionExecuteNamedAction.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionExecuteNamedAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionExecuteNamedAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteNamedAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionExecuteNamedAction}
 */
proto.ActionExecuteNamedAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionExecuteNamedAction;
  return proto.ActionExecuteNamedAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionExecuteNamedAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionExecuteNamedAction}
 */
proto.ActionExecuteNamedAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionExecuteNamedAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionExecuteNamedAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionExecuteNamedAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteNamedAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string action_name = 1;
 * @return {string}
 */
proto.ActionExecuteNamedAction.prototype.getActionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActionExecuteNamedAction} returns this
 */
proto.ActionExecuteNamedAction.prototype.setActionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionExecuteInterpreterValue.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionExecuteInterpreterValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionExecuteInterpreterValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteInterpreterValue.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionExecuteInterpreterValue}
 */
proto.ActionExecuteInterpreterValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionExecuteInterpreterValue;
  return proto.ActionExecuteInterpreterValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionExecuteInterpreterValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionExecuteInterpreterValue}
 */
proto.ActionExecuteInterpreterValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionExecuteInterpreterValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionExecuteInterpreterValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionExecuteInterpreterValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionExecuteInterpreterValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Action.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]];

/**
 * @enum {number}
 */
proto.Action.ActionCase = {
  ACTION_NOT_SET: 0,
  ACTION_KEY_PRESS: 1,
  ACTION_KEY_CLICK: 2,
  ACTION_KEY_RELEASE: 3,
  ACTION_MOUSE_BUTTON_PRESS: 4,
  ACTION_MOUSE_BUTTON_CLICK: 5,
  ACTION_MOUSE_BUTTON_RELEASE: 6,
  ACTION_TEXT_KEY_CLICK: 7,
  ACTION_NUMBER_KEY_CLICK: 8,
  ACTION_FUNCTION_KEY_CLICK: 9,
  ACTION_CONTROL_KEY_CLICK: 10,
  ACTION_KP_KEY_CLICK: 11,
  ACTION_MULTIMEDIA_KEY_CLICK: 12,
  ACTION_MOUSE_BUTTON_KEY_CLICK: 13,
  ACTION_MOUSE_RELATIVE_MOVE: 14,
  ACTION_MOUSE_ABSOLUTE_MOVE: 15,
  ACTION_TEXT_TYPE: 16,
  ACTION_WAIT: 17,
  ACTION_EXECUTE_CODE: 18,
  ACTION_EXECUTE_FUNCTION: 19,
  ACTION_EXECUTE_OS_COMMAND: 20,
  ACTION_EXECUTE_NAMED_ACTION: 21,
  ACTION_EXECUTE_INTERPRETER_VALUE: 22
};

/**
 * @return {proto.Action.ActionCase}
 */
proto.Action.prototype.getActionCase = function() {
  return /** @type {proto.Action.ActionCase} */(jspb.Message.computeOneofCase(this, proto.Action.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionKeyPress: (f = msg.getActionKeyPress()) && proto.ActionKeyPress.toObject(includeInstance, f),
    actionKeyClick: (f = msg.getActionKeyClick()) && proto.ActionKeyClick.toObject(includeInstance, f),
    actionKeyRelease: (f = msg.getActionKeyRelease()) && proto.ActionKeyRelease.toObject(includeInstance, f),
    actionMouseButtonPress: (f = msg.getActionMouseButtonPress()) && proto.ActionMouseButtonPress.toObject(includeInstance, f),
    actionMouseButtonClick: (f = msg.getActionMouseButtonClick()) && proto.ActionMouseButtonClick.toObject(includeInstance, f),
    actionMouseButtonRelease: (f = msg.getActionMouseButtonRelease()) && proto.ActionMouseButtonRelease.toObject(includeInstance, f),
    actionTextKeyClick: (f = msg.getActionTextKeyClick()) && proto.ActionTextKeyClick.toObject(includeInstance, f),
    actionNumberKeyClick: (f = msg.getActionNumberKeyClick()) && proto.ActionNumberKeyClick.toObject(includeInstance, f),
    actionFunctionKeyClick: (f = msg.getActionFunctionKeyClick()) && proto.ActionFunctionKeyClick.toObject(includeInstance, f),
    actionControlKeyClick: (f = msg.getActionControlKeyClick()) && proto.ActionControlKeyClick.toObject(includeInstance, f),
    actionKpKeyClick: (f = msg.getActionKpKeyClick()) && proto.ActionKPKeyClick.toObject(includeInstance, f),
    actionMultimediaKeyClick: (f = msg.getActionMultimediaKeyClick()) && proto.ActionMultimediaKeyClick.toObject(includeInstance, f),
    actionMouseButtonKeyClick: (f = msg.getActionMouseButtonKeyClick()) && proto.ActionMouseButtonKeyClick.toObject(includeInstance, f),
    actionMouseRelativeMove: (f = msg.getActionMouseRelativeMove()) && proto.ActionMouseRelativeMove.toObject(includeInstance, f),
    actionMouseAbsoluteMove: (f = msg.getActionMouseAbsoluteMove()) && proto.ActionMouseAbsoluteMove.toObject(includeInstance, f),
    actionTextType: (f = msg.getActionTextType()) && proto.ActionTextType.toObject(includeInstance, f),
    actionWait: (f = msg.getActionWait()) && proto.ActionWait.toObject(includeInstance, f),
    actionExecuteCode: (f = msg.getActionExecuteCode()) && proto.ActionExecuteCode.toObject(includeInstance, f),
    actionExecuteFunction: (f = msg.getActionExecuteFunction()) && proto.ActionExecuteFunction.toObject(includeInstance, f),
    actionExecuteOsCommand: (f = msg.getActionExecuteOsCommand()) && proto.ActionExecuteOSCommand.toObject(includeInstance, f),
    actionExecuteNamedAction: (f = msg.getActionExecuteNamedAction()) && proto.ActionExecuteNamedAction.toObject(includeInstance, f),
    actionExecuteInterpreterValue: (f = msg.getActionExecuteInterpreterValue()) && proto.ActionExecuteInterpreterValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Action}
 */
proto.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Action;
  return proto.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Action}
 */
proto.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ActionKeyPress;
      reader.readMessage(value,proto.ActionKeyPress.deserializeBinaryFromReader);
      msg.setActionKeyPress(value);
      break;
    case 2:
      var value = new proto.ActionKeyClick;
      reader.readMessage(value,proto.ActionKeyClick.deserializeBinaryFromReader);
      msg.setActionKeyClick(value);
      break;
    case 3:
      var value = new proto.ActionKeyRelease;
      reader.readMessage(value,proto.ActionKeyRelease.deserializeBinaryFromReader);
      msg.setActionKeyRelease(value);
      break;
    case 4:
      var value = new proto.ActionMouseButtonPress;
      reader.readMessage(value,proto.ActionMouseButtonPress.deserializeBinaryFromReader);
      msg.setActionMouseButtonPress(value);
      break;
    case 5:
      var value = new proto.ActionMouseButtonClick;
      reader.readMessage(value,proto.ActionMouseButtonClick.deserializeBinaryFromReader);
      msg.setActionMouseButtonClick(value);
      break;
    case 6:
      var value = new proto.ActionMouseButtonRelease;
      reader.readMessage(value,proto.ActionMouseButtonRelease.deserializeBinaryFromReader);
      msg.setActionMouseButtonRelease(value);
      break;
    case 7:
      var value = new proto.ActionTextKeyClick;
      reader.readMessage(value,proto.ActionTextKeyClick.deserializeBinaryFromReader);
      msg.setActionTextKeyClick(value);
      break;
    case 8:
      var value = new proto.ActionNumberKeyClick;
      reader.readMessage(value,proto.ActionNumberKeyClick.deserializeBinaryFromReader);
      msg.setActionNumberKeyClick(value);
      break;
    case 9:
      var value = new proto.ActionFunctionKeyClick;
      reader.readMessage(value,proto.ActionFunctionKeyClick.deserializeBinaryFromReader);
      msg.setActionFunctionKeyClick(value);
      break;
    case 10:
      var value = new proto.ActionControlKeyClick;
      reader.readMessage(value,proto.ActionControlKeyClick.deserializeBinaryFromReader);
      msg.setActionControlKeyClick(value);
      break;
    case 11:
      var value = new proto.ActionKPKeyClick;
      reader.readMessage(value,proto.ActionKPKeyClick.deserializeBinaryFromReader);
      msg.setActionKpKeyClick(value);
      break;
    case 12:
      var value = new proto.ActionMultimediaKeyClick;
      reader.readMessage(value,proto.ActionMultimediaKeyClick.deserializeBinaryFromReader);
      msg.setActionMultimediaKeyClick(value);
      break;
    case 13:
      var value = new proto.ActionMouseButtonKeyClick;
      reader.readMessage(value,proto.ActionMouseButtonKeyClick.deserializeBinaryFromReader);
      msg.setActionMouseButtonKeyClick(value);
      break;
    case 14:
      var value = new proto.ActionMouseRelativeMove;
      reader.readMessage(value,proto.ActionMouseRelativeMove.deserializeBinaryFromReader);
      msg.setActionMouseRelativeMove(value);
      break;
    case 15:
      var value = new proto.ActionMouseAbsoluteMove;
      reader.readMessage(value,proto.ActionMouseAbsoluteMove.deserializeBinaryFromReader);
      msg.setActionMouseAbsoluteMove(value);
      break;
    case 16:
      var value = new proto.ActionTextType;
      reader.readMessage(value,proto.ActionTextType.deserializeBinaryFromReader);
      msg.setActionTextType(value);
      break;
    case 17:
      var value = new proto.ActionWait;
      reader.readMessage(value,proto.ActionWait.deserializeBinaryFromReader);
      msg.setActionWait(value);
      break;
    case 18:
      var value = new proto.ActionExecuteCode;
      reader.readMessage(value,proto.ActionExecuteCode.deserializeBinaryFromReader);
      msg.setActionExecuteCode(value);
      break;
    case 19:
      var value = new proto.ActionExecuteFunction;
      reader.readMessage(value,proto.ActionExecuteFunction.deserializeBinaryFromReader);
      msg.setActionExecuteFunction(value);
      break;
    case 20:
      var value = new proto.ActionExecuteOSCommand;
      reader.readMessage(value,proto.ActionExecuteOSCommand.deserializeBinaryFromReader);
      msg.setActionExecuteOsCommand(value);
      break;
    case 21:
      var value = new proto.ActionExecuteNamedAction;
      reader.readMessage(value,proto.ActionExecuteNamedAction.deserializeBinaryFromReader);
      msg.setActionExecuteNamedAction(value);
      break;
    case 22:
      var value = new proto.ActionExecuteInterpreterValue;
      reader.readMessage(value,proto.ActionExecuteInterpreterValue.deserializeBinaryFromReader);
      msg.setActionExecuteInterpreterValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionKeyPress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ActionKeyPress.serializeBinaryToWriter
    );
  }
  f = message.getActionKeyClick();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ActionKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionKeyRelease();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ActionKeyRelease.serializeBinaryToWriter
    );
  }
  f = message.getActionMouseButtonPress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ActionMouseButtonPress.serializeBinaryToWriter
    );
  }
  f = message.getActionMouseButtonClick();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ActionMouseButtonClick.serializeBinaryToWriter
    );
  }
  f = message.getActionMouseButtonRelease();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ActionMouseButtonRelease.serializeBinaryToWriter
    );
  }
  f = message.getActionTextKeyClick();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ActionTextKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionNumberKeyClick();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ActionNumberKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionFunctionKeyClick();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ActionFunctionKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionControlKeyClick();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ActionControlKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionKpKeyClick();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ActionKPKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionMultimediaKeyClick();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ActionMultimediaKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionMouseButtonKeyClick();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ActionMouseButtonKeyClick.serializeBinaryToWriter
    );
  }
  f = message.getActionMouseRelativeMove();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ActionMouseRelativeMove.serializeBinaryToWriter
    );
  }
  f = message.getActionMouseAbsoluteMove();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ActionMouseAbsoluteMove.serializeBinaryToWriter
    );
  }
  f = message.getActionTextType();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ActionTextType.serializeBinaryToWriter
    );
  }
  f = message.getActionWait();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ActionWait.serializeBinaryToWriter
    );
  }
  f = message.getActionExecuteCode();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ActionExecuteCode.serializeBinaryToWriter
    );
  }
  f = message.getActionExecuteFunction();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.ActionExecuteFunction.serializeBinaryToWriter
    );
  }
  f = message.getActionExecuteOsCommand();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.ActionExecuteOSCommand.serializeBinaryToWriter
    );
  }
  f = message.getActionExecuteNamedAction();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.ActionExecuteNamedAction.serializeBinaryToWriter
    );
  }
  f = message.getActionExecuteInterpreterValue();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.ActionExecuteInterpreterValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActionKeyPress action_key_press = 1;
 * @return {?proto.ActionKeyPress}
 */
proto.Action.prototype.getActionKeyPress = function() {
  return /** @type{?proto.ActionKeyPress} */ (
    jspb.Message.getWrapperField(this, proto.ActionKeyPress, 1));
};


/**
 * @param {?proto.ActionKeyPress|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionKeyPress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionKeyPress = function() {
  return this.setActionKeyPress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionKeyPress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ActionKeyClick action_key_click = 2;
 * @return {?proto.ActionKeyClick}
 */
proto.Action.prototype.getActionKeyClick = function() {
  return /** @type{?proto.ActionKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionKeyClick, 2));
};


/**
 * @param {?proto.ActionKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionKeyClick = function() {
  return this.setActionKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionKeyClick = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ActionKeyRelease action_key_release = 3;
 * @return {?proto.ActionKeyRelease}
 */
proto.Action.prototype.getActionKeyRelease = function() {
  return /** @type{?proto.ActionKeyRelease} */ (
    jspb.Message.getWrapperField(this, proto.ActionKeyRelease, 3));
};


/**
 * @param {?proto.ActionKeyRelease|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionKeyRelease = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionKeyRelease = function() {
  return this.setActionKeyRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionKeyRelease = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ActionMouseButtonPress action_mouse_button_press = 4;
 * @return {?proto.ActionMouseButtonPress}
 */
proto.Action.prototype.getActionMouseButtonPress = function() {
  return /** @type{?proto.ActionMouseButtonPress} */ (
    jspb.Message.getWrapperField(this, proto.ActionMouseButtonPress, 4));
};


/**
 * @param {?proto.ActionMouseButtonPress|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionMouseButtonPress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionMouseButtonPress = function() {
  return this.setActionMouseButtonPress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionMouseButtonPress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ActionMouseButtonClick action_mouse_button_click = 5;
 * @return {?proto.ActionMouseButtonClick}
 */
proto.Action.prototype.getActionMouseButtonClick = function() {
  return /** @type{?proto.ActionMouseButtonClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionMouseButtonClick, 5));
};


/**
 * @param {?proto.ActionMouseButtonClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionMouseButtonClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionMouseButtonClick = function() {
  return this.setActionMouseButtonClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionMouseButtonClick = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ActionMouseButtonRelease action_mouse_button_release = 6;
 * @return {?proto.ActionMouseButtonRelease}
 */
proto.Action.prototype.getActionMouseButtonRelease = function() {
  return /** @type{?proto.ActionMouseButtonRelease} */ (
    jspb.Message.getWrapperField(this, proto.ActionMouseButtonRelease, 6));
};


/**
 * @param {?proto.ActionMouseButtonRelease|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionMouseButtonRelease = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionMouseButtonRelease = function() {
  return this.setActionMouseButtonRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionMouseButtonRelease = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ActionTextKeyClick action_text_key_click = 7;
 * @return {?proto.ActionTextKeyClick}
 */
proto.Action.prototype.getActionTextKeyClick = function() {
  return /** @type{?proto.ActionTextKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionTextKeyClick, 7));
};


/**
 * @param {?proto.ActionTextKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionTextKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionTextKeyClick = function() {
  return this.setActionTextKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionTextKeyClick = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ActionNumberKeyClick action_number_key_click = 8;
 * @return {?proto.ActionNumberKeyClick}
 */
proto.Action.prototype.getActionNumberKeyClick = function() {
  return /** @type{?proto.ActionNumberKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionNumberKeyClick, 8));
};


/**
 * @param {?proto.ActionNumberKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionNumberKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionNumberKeyClick = function() {
  return this.setActionNumberKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionNumberKeyClick = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ActionFunctionKeyClick action_function_key_click = 9;
 * @return {?proto.ActionFunctionKeyClick}
 */
proto.Action.prototype.getActionFunctionKeyClick = function() {
  return /** @type{?proto.ActionFunctionKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionFunctionKeyClick, 9));
};


/**
 * @param {?proto.ActionFunctionKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionFunctionKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionFunctionKeyClick = function() {
  return this.setActionFunctionKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionFunctionKeyClick = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ActionControlKeyClick action_control_key_click = 10;
 * @return {?proto.ActionControlKeyClick}
 */
proto.Action.prototype.getActionControlKeyClick = function() {
  return /** @type{?proto.ActionControlKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionControlKeyClick, 10));
};


/**
 * @param {?proto.ActionControlKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionControlKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionControlKeyClick = function() {
  return this.setActionControlKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionControlKeyClick = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ActionKPKeyClick action_kp_key_click = 11;
 * @return {?proto.ActionKPKeyClick}
 */
proto.Action.prototype.getActionKpKeyClick = function() {
  return /** @type{?proto.ActionKPKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionKPKeyClick, 11));
};


/**
 * @param {?proto.ActionKPKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionKpKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionKpKeyClick = function() {
  return this.setActionKpKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionKpKeyClick = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ActionMultimediaKeyClick action_multimedia_key_click = 12;
 * @return {?proto.ActionMultimediaKeyClick}
 */
proto.Action.prototype.getActionMultimediaKeyClick = function() {
  return /** @type{?proto.ActionMultimediaKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionMultimediaKeyClick, 12));
};


/**
 * @param {?proto.ActionMultimediaKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionMultimediaKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionMultimediaKeyClick = function() {
  return this.setActionMultimediaKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionMultimediaKeyClick = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ActionMouseButtonKeyClick action_mouse_button_key_click = 13;
 * @return {?proto.ActionMouseButtonKeyClick}
 */
proto.Action.prototype.getActionMouseButtonKeyClick = function() {
  return /** @type{?proto.ActionMouseButtonKeyClick} */ (
    jspb.Message.getWrapperField(this, proto.ActionMouseButtonKeyClick, 13));
};


/**
 * @param {?proto.ActionMouseButtonKeyClick|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionMouseButtonKeyClick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionMouseButtonKeyClick = function() {
  return this.setActionMouseButtonKeyClick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionMouseButtonKeyClick = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ActionMouseRelativeMove action_mouse_relative_move = 14;
 * @return {?proto.ActionMouseRelativeMove}
 */
proto.Action.prototype.getActionMouseRelativeMove = function() {
  return /** @type{?proto.ActionMouseRelativeMove} */ (
    jspb.Message.getWrapperField(this, proto.ActionMouseRelativeMove, 14));
};


/**
 * @param {?proto.ActionMouseRelativeMove|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionMouseRelativeMove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionMouseRelativeMove = function() {
  return this.setActionMouseRelativeMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionMouseRelativeMove = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ActionMouseAbsoluteMove action_mouse_absolute_move = 15;
 * @return {?proto.ActionMouseAbsoluteMove}
 */
proto.Action.prototype.getActionMouseAbsoluteMove = function() {
  return /** @type{?proto.ActionMouseAbsoluteMove} */ (
    jspb.Message.getWrapperField(this, proto.ActionMouseAbsoluteMove, 15));
};


/**
 * @param {?proto.ActionMouseAbsoluteMove|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionMouseAbsoluteMove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionMouseAbsoluteMove = function() {
  return this.setActionMouseAbsoluteMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionMouseAbsoluteMove = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ActionTextType action_text_type = 16;
 * @return {?proto.ActionTextType}
 */
proto.Action.prototype.getActionTextType = function() {
  return /** @type{?proto.ActionTextType} */ (
    jspb.Message.getWrapperField(this, proto.ActionTextType, 16));
};


/**
 * @param {?proto.ActionTextType|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionTextType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionTextType = function() {
  return this.setActionTextType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionTextType = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ActionWait action_wait = 17;
 * @return {?proto.ActionWait}
 */
proto.Action.prototype.getActionWait = function() {
  return /** @type{?proto.ActionWait} */ (
    jspb.Message.getWrapperField(this, proto.ActionWait, 17));
};


/**
 * @param {?proto.ActionWait|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionWait = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionWait = function() {
  return this.setActionWait(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionWait = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ActionExecuteCode action_execute_code = 18;
 * @return {?proto.ActionExecuteCode}
 */
proto.Action.prototype.getActionExecuteCode = function() {
  return /** @type{?proto.ActionExecuteCode} */ (
    jspb.Message.getWrapperField(this, proto.ActionExecuteCode, 18));
};


/**
 * @param {?proto.ActionExecuteCode|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionExecuteCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionExecuteCode = function() {
  return this.setActionExecuteCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionExecuteCode = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ActionExecuteFunction action_execute_function = 19;
 * @return {?proto.ActionExecuteFunction}
 */
proto.Action.prototype.getActionExecuteFunction = function() {
  return /** @type{?proto.ActionExecuteFunction} */ (
    jspb.Message.getWrapperField(this, proto.ActionExecuteFunction, 19));
};


/**
 * @param {?proto.ActionExecuteFunction|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionExecuteFunction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionExecuteFunction = function() {
  return this.setActionExecuteFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionExecuteFunction = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ActionExecuteOSCommand action_execute_os_command = 20;
 * @return {?proto.ActionExecuteOSCommand}
 */
proto.Action.prototype.getActionExecuteOsCommand = function() {
  return /** @type{?proto.ActionExecuteOSCommand} */ (
    jspb.Message.getWrapperField(this, proto.ActionExecuteOSCommand, 20));
};


/**
 * @param {?proto.ActionExecuteOSCommand|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionExecuteOsCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionExecuteOsCommand = function() {
  return this.setActionExecuteOsCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionExecuteOsCommand = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ActionExecuteNamedAction action_execute_named_action = 21;
 * @return {?proto.ActionExecuteNamedAction}
 */
proto.Action.prototype.getActionExecuteNamedAction = function() {
  return /** @type{?proto.ActionExecuteNamedAction} */ (
    jspb.Message.getWrapperField(this, proto.ActionExecuteNamedAction, 21));
};


/**
 * @param {?proto.ActionExecuteNamedAction|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionExecuteNamedAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionExecuteNamedAction = function() {
  return this.setActionExecuteNamedAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionExecuteNamedAction = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ActionExecuteInterpreterValue action_execute_interpreter_value = 22;
 * @return {?proto.ActionExecuteInterpreterValue}
 */
proto.Action.prototype.getActionExecuteInterpreterValue = function() {
  return /** @type{?proto.ActionExecuteInterpreterValue} */ (
    jspb.Message.getWrapperField(this, proto.ActionExecuteInterpreterValue, 22));
};


/**
 * @param {?proto.ActionExecuteInterpreterValue|undefined} value
 * @return {!proto.Action} returns this
*/
proto.Action.prototype.setActionExecuteInterpreterValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Action} returns this
 */
proto.Action.prototype.clearActionExecuteInterpreterValue = function() {
  return this.setActionExecuteInterpreterValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Action.prototype.hasActionExecuteInterpreterValue = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NamedAction.prototype.toObject = function(opt_includeInstance) {
  return proto.NamedAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NamedAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NamedAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    action: (f = msg.getAction()) && proto.Action.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NamedAction}
 */
proto.NamedAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NamedAction;
  return proto.NamedAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NamedAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NamedAction}
 */
proto.NamedAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionName(value);
      break;
    case 2:
      var value = new proto.Action;
      reader.readMessage(value,proto.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NamedAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NamedAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NamedAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NamedAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional string action_name = 1;
 * @return {string}
 */
proto.NamedAction.prototype.getActionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NamedAction} returns this
 */
proto.NamedAction.prototype.setActionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Action action = 2;
 * @return {?proto.Action}
 */
proto.NamedAction.prototype.getAction = function() {
  return /** @type{?proto.Action} */ (
    jspb.Message.getWrapperField(this, proto.Action, 2));
};


/**
 * @param {?proto.Action|undefined} value
 * @return {!proto.NamedAction} returns this
*/
proto.NamedAction.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NamedAction} returns this
 */
proto.NamedAction.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NamedAction.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ActionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActionList.prototype.toObject = function(opt_includeInstance) {
  return proto.ActionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.Action.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActionList}
 */
proto.ActionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActionList;
  return proto.ActionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActionList}
 */
proto.ActionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Action;
      reader.readMessage(value,proto.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Action.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Action actions = 1;
 * @return {!Array<!proto.Action>}
 */
proto.ActionList.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Action, 1));
};


/**
 * @param {!Array<!proto.Action>} value
 * @return {!proto.ActionList} returns this
*/
proto.ActionList.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Action}
 */
proto.ActionList.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ActionList} returns this
 */
proto.ActionList.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Key1.prototype.toObject = function(opt_includeInstance) {
  return proto.Key1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Key1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Key1.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Key1}
 */
proto.Key1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Key1;
  return proto.Key1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Key1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Key1}
 */
proto.Key1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Key1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Key1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Key1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Key1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 key_code = 1;
 * @return {number}
 */
proto.Key1.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Key1} returns this
 */
proto.Key1.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Key2.prototype.toObject = function(opt_includeInstance) {
  return proto.Key2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Key2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Key2.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    keyCode: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Key2}
 */
proto.Key2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Key2;
  return proto.Key2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Key2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Key2}
 */
proto.Key2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Key2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Key2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Key2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Key2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 device_id = 1;
 * @return {number}
 */
proto.Key2.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Key2} returns this
 */
proto.Key2.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 key_code = 2;
 * @return {number}
 */
proto.Key2.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Key2} returns this
 */
proto.Key2.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Key.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.Key.KeyCase = {
  KEY_NOT_SET: 0,
  KEY_1: 1,
  KEY_2: 2
};

/**
 * @return {proto.Key.KeyCase}
 */
proto.Key.prototype.getKeyCase = function() {
  return /** @type {proto.Key.KeyCase} */(jspb.Message.computeOneofCase(this, proto.Key.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    key1: (f = msg.getKey1()) && proto.Key1.toObject(includeInstance, f),
    key2: (f = msg.getKey2()) && proto.Key2.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Key}
 */
proto.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Key;
  return proto.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Key}
 */
proto.Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Key1;
      reader.readMessage(value,proto.Key1.deserializeBinaryFromReader);
      msg.setKey1(value);
      break;
    case 2:
      var value = new proto.Key2;
      reader.readMessage(value,proto.Key2.deserializeBinaryFromReader);
      msg.setKey2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey1();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Key1.serializeBinaryToWriter
    );
  }
  f = message.getKey2();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Key2.serializeBinaryToWriter
    );
  }
};


/**
 * optional Key1 key_1 = 1;
 * @return {?proto.Key1}
 */
proto.Key.prototype.getKey1 = function() {
  return /** @type{?proto.Key1} */ (
    jspb.Message.getWrapperField(this, proto.Key1, 1));
};


/**
 * @param {?proto.Key1|undefined} value
 * @return {!proto.Key} returns this
*/
proto.Key.prototype.setKey1 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.Key.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Key} returns this
 */
proto.Key.prototype.clearKey1 = function() {
  return this.setKey1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Key.prototype.hasKey1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Key2 key_2 = 2;
 * @return {?proto.Key2}
 */
proto.Key.prototype.getKey2 = function() {
  return /** @type{?proto.Key2} */ (
    jspb.Message.getWrapperField(this, proto.Key2, 2));
};


/**
 * @param {?proto.Key2|undefined} value
 * @return {!proto.Key} returns this
*/
proto.Key.prototype.setKey2 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.Key.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Key} returns this
 */
proto.Key.prototype.clearKey2 = function() {
  return this.setKey2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Key.prototype.hasKey2 = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifierDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifierDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifierDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifierDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.Key.toObject(includeInstance, f),
    alias: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifierDescription}
 */
proto.ModifierDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifierDescription;
  return proto.ModifierDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifierDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifierDescription}
 */
proto.ModifierDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Key;
      reader.readMessage(value,proto.Key.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifierDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifierDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifierDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifierDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Key.serializeBinaryToWriter
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Key key = 1;
 * @return {?proto.Key}
 */
proto.ModifierDescription.prototype.getKey = function() {
  return /** @type{?proto.Key} */ (
    jspb.Message.getWrapperField(this, proto.Key, 1));
};


/**
 * @param {?proto.Key|undefined} value
 * @return {!proto.ModifierDescription} returns this
*/
proto.ModifierDescription.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ModifierDescription} returns this
 */
proto.ModifierDescription.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifierDescription.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string alias = 2;
 * @return {string}
 */
proto.ModifierDescription.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifierDescription} returns this
 */
proto.ModifierDescription.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.KeyChord.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.KeyChord.prototype.toObject = function(opt_includeInstance) {
  return proto.KeyChord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.KeyChord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.KeyChord.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifiersList: jspb.Message.toObjectList(msg.getModifiersList(),
    proto.Key.toObject, includeInstance),
    ordinaryKey: (f = msg.getOrdinaryKey()) && proto.Key.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.KeyChord}
 */
proto.KeyChord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.KeyChord;
  return proto.KeyChord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.KeyChord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.KeyChord}
 */
proto.KeyChord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Key;
      reader.readMessage(value,proto.Key.deserializeBinaryFromReader);
      msg.addModifiers(value);
      break;
    case 2:
      var value = new proto.Key;
      reader.readMessage(value,proto.Key.deserializeBinaryFromReader);
      msg.setOrdinaryKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.KeyChord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.KeyChord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.KeyChord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.KeyChord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Key.serializeBinaryToWriter
    );
  }
  f = message.getOrdinaryKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Key.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Key modifiers = 1;
 * @return {!Array<!proto.Key>}
 */
proto.KeyChord.prototype.getModifiersList = function() {
  return /** @type{!Array<!proto.Key>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Key, 1));
};


/**
 * @param {!Array<!proto.Key>} value
 * @return {!proto.KeyChord} returns this
*/
proto.KeyChord.prototype.setModifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Key=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Key}
 */
proto.KeyChord.prototype.addModifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Key, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.KeyChord} returns this
 */
proto.KeyChord.prototype.clearModifiersList = function() {
  return this.setModifiersList([]);
};


/**
 * optional Key ordinary_key = 2;
 * @return {?proto.Key}
 */
proto.KeyChord.prototype.getOrdinaryKey = function() {
  return /** @type{?proto.Key} */ (
    jspb.Message.getWrapperField(this, proto.Key, 2));
};


/**
 * @param {?proto.Key|undefined} value
 * @return {!proto.KeyChord} returns this
*/
proto.KeyChord.prototype.setOrdinaryKey = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.KeyChord} returns this
 */
proto.KeyChord.prototype.clearOrdinaryKey = function() {
  return this.setOrdinaryKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.KeyChord.prototype.hasOrdinaryKey = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Mapping.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mapping.prototype.toObject = function(opt_includeInstance) {
  return proto.Mapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mapping.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyChordsList: jspb.Message.toObjectList(msg.getKeyChordsList(),
    proto.KeyChord.toObject, includeInstance),
    action: (f = msg.getAction()) && proto.Action.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mapping}
 */
proto.Mapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mapping;
  return proto.Mapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mapping}
 */
proto.Mapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.KeyChord;
      reader.readMessage(value,proto.KeyChord.deserializeBinaryFromReader);
      msg.addKeyChords(value);
      break;
    case 2:
      var value = new proto.Action;
      reader.readMessage(value,proto.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyChordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.KeyChord.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Action.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyChord key_chords = 1;
 * @return {!Array<!proto.KeyChord>}
 */
proto.Mapping.prototype.getKeyChordsList = function() {
  return /** @type{!Array<!proto.KeyChord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.KeyChord, 1));
};


/**
 * @param {!Array<!proto.KeyChord>} value
 * @return {!proto.Mapping} returns this
*/
proto.Mapping.prototype.setKeyChordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.KeyChord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.KeyChord}
 */
proto.Mapping.prototype.addKeyChords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.KeyChord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Mapping} returns this
 */
proto.Mapping.prototype.clearKeyChordsList = function() {
  return this.setKeyChordsList([]);
};


/**
 * optional Action action = 2;
 * @return {?proto.Action}
 */
proto.Mapping.prototype.getAction = function() {
  return /** @type{?proto.Action} */ (
    jspb.Message.getWrapperField(this, proto.Action, 2));
};


/**
 * @param {?proto.Action|undefined} value
 * @return {!proto.Mapping} returns this
*/
proto.Mapping.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mapping} returns this
 */
proto.Mapping.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mapping.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.KeyDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.KeyDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.KeyDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.KeyDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0),
    width: jspb.Message.getFieldWithDefault(msg, 3, 0),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0),
    keyCode: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.KeyDescription}
 */
proto.KeyDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.KeyDescription;
  return proto.KeyDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.KeyDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.KeyDescription}
 */
proto.KeyDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.KeyDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.KeyDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.KeyDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.KeyDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getKeyCode();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.KeyDescription.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.KeyDescription} returns this
 */
proto.KeyDescription.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.KeyDescription.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.KeyDescription} returns this
 */
proto.KeyDescription.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 width = 3;
 * @return {number}
 */
proto.KeyDescription.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.KeyDescription} returns this
 */
proto.KeyDescription.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 height = 4;
 * @return {number}
 */
proto.KeyDescription.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.KeyDescription} returns this
 */
proto.KeyDescription.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 key_code = 5;
 * @return {number}
 */
proto.KeyDescription.prototype.getKeyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.KeyDescription} returns this
 */
proto.KeyDescription.prototype.setKeyCode = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DeviceModel.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceModel.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyDescriptionsList: jspb.Message.toObjectList(msg.getKeyDescriptionsList(),
    proto.KeyDescription.toObject, includeInstance),
    deviceWidth: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deviceHeight: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceModel}
 */
proto.DeviceModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceModel;
  return proto.DeviceModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceModel}
 */
proto.DeviceModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.KeyDescription;
      reader.readMessage(value,proto.KeyDescription.deserializeBinaryFromReader);
      msg.addKeyDescriptions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceWidth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyDescriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.KeyDescription.serializeBinaryToWriter
    );
  }
  f = message.getDeviceWidth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDeviceHeight();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated KeyDescription key_descriptions = 1;
 * @return {!Array<!proto.KeyDescription>}
 */
proto.DeviceModel.prototype.getKeyDescriptionsList = function() {
  return /** @type{!Array<!proto.KeyDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.KeyDescription, 1));
};


/**
 * @param {!Array<!proto.KeyDescription>} value
 * @return {!proto.DeviceModel} returns this
*/
proto.DeviceModel.prototype.setKeyDescriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.KeyDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.KeyDescription}
 */
proto.DeviceModel.prototype.addKeyDescriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.KeyDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DeviceModel} returns this
 */
proto.DeviceModel.prototype.clearKeyDescriptionsList = function() {
  return this.setKeyDescriptionsList([]);
};


/**
 * optional int32 device_width = 2;
 * @return {number}
 */
proto.DeviceModel.prototype.getDeviceWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeviceModel} returns this
 */
proto.DeviceModel.prototype.setDeviceWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 device_height = 3;
 * @return {number}
 */
proto.DeviceModel.prototype.getDeviceHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeviceModel} returns this
 */
proto.DeviceModel.prototype.setDeviceHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    defined: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    devicePath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    deviceName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    deviceModel: (f = msg.getDeviceModel()) && proto.DeviceModel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceInfo}
 */
proto.DeviceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceInfo;
  return proto.DeviceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceInfo}
 */
proto.DeviceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefined(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicePath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 5:
      var value = new proto.DeviceModel;
      reader.readMessage(value,proto.DeviceModel.deserializeBinaryFromReader);
      msg.setDeviceModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDefined();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDevicePath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDeviceModel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.DeviceModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 device_id = 1;
 * @return {number}
 */
proto.DeviceInfo.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeviceInfo} returns this
 */
proto.DeviceInfo.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool defined = 2;
 * @return {boolean}
 */
proto.DeviceInfo.prototype.getDefined = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.DeviceInfo} returns this
 */
proto.DeviceInfo.prototype.setDefined = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string device_path = 3;
 * @return {string}
 */
proto.DeviceInfo.prototype.getDevicePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfo} returns this
 */
proto.DeviceInfo.prototype.setDevicePath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string device_name = 4;
 * @return {string}
 */
proto.DeviceInfo.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfo} returns this
 */
proto.DeviceInfo.prototype.setDeviceName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional DeviceModel device_model = 5;
 * @return {?proto.DeviceModel}
 */
proto.DeviceInfo.prototype.getDeviceModel = function() {
  return /** @type{?proto.DeviceModel} */ (
    jspb.Message.getWrapperField(this, proto.DeviceModel, 5));
};


/**
 * @param {?proto.DeviceModel|undefined} value
 * @return {!proto.DeviceInfo} returns this
*/
proto.DeviceInfo.prototype.setDeviceModel = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DeviceInfo} returns this
 */
proto.DeviceInfo.prototype.clearDeviceModel = function() {
  return this.setDeviceModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DeviceInfo.prototype.hasDeviceModel = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HandshakeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.HandshakeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HandshakeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HandshakeRequest}
 */
proto.HandshakeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HandshakeRequest;
  return proto.HandshakeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HandshakeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HandshakeRequest}
 */
proto.HandshakeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HandshakeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HandshakeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HandshakeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.HandshakeResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.HandshakeResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.HandshakeResponse.ResultCase}
 */
proto.HandshakeResponse.prototype.getResultCase = function() {
  return /** @type {proto.HandshakeResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.HandshakeResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HandshakeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.HandshakeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HandshakeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.HandshakeResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.HandshakeResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.HandshakeResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HandshakeResponse}
 */
proto.HandshakeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HandshakeResponse;
  return proto.HandshakeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HandshakeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HandshakeResponse}
 */
proto.HandshakeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.HandshakeResponse.SuccessResult;
      reader.readMessage(value,proto.HandshakeResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.HandshakeResponse.ErrorResult;
      reader.readMessage(value,proto.HandshakeResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.HandshakeResponse.FailureResult;
      reader.readMessage(value,proto.HandshakeResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HandshakeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HandshakeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HandshakeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HandshakeResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.HandshakeResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.HandshakeResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HandshakeResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.HandshakeResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HandshakeResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HandshakeResponse.SuccessResult}
 */
proto.HandshakeResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HandshakeResponse.SuccessResult;
  return proto.HandshakeResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HandshakeResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HandshakeResponse.SuccessResult}
 */
proto.HandshakeResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HandshakeResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HandshakeResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HandshakeResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.HandshakeResponse.SuccessResult.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HandshakeResponse.SuccessResult} returns this
 */
proto.HandshakeResponse.SuccessResult.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string info = 2;
 * @return {string}
 */
proto.HandshakeResponse.SuccessResult.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HandshakeResponse.SuccessResult} returns this
 */
proto.HandshakeResponse.SuccessResult.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HandshakeResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.HandshakeResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HandshakeResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HandshakeResponse.ErrorResult}
 */
proto.HandshakeResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HandshakeResponse.ErrorResult;
  return proto.HandshakeResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HandshakeResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HandshakeResponse.ErrorResult}
 */
proto.HandshakeResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HandshakeResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HandshakeResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HandshakeResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.HandshakeResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HandshakeResponse.ErrorResult} returns this
 */
proto.HandshakeResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HandshakeResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.HandshakeResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HandshakeResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HandshakeResponse.FailureResult}
 */
proto.HandshakeResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HandshakeResponse.FailureResult;
  return proto.HandshakeResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HandshakeResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HandshakeResponse.FailureResult}
 */
proto.HandshakeResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HandshakeResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HandshakeResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HandshakeResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HandshakeResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.HandshakeResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HandshakeResponse.FailureResult} returns this
 */
proto.HandshakeResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.HandshakeResponse.SuccessResult}
 */
proto.HandshakeResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.HandshakeResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.HandshakeResponse.SuccessResult, 1));
};


/**
 * @param {?proto.HandshakeResponse.SuccessResult|undefined} value
 * @return {!proto.HandshakeResponse} returns this
*/
proto.HandshakeResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.HandshakeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HandshakeResponse} returns this
 */
proto.HandshakeResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HandshakeResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.HandshakeResponse.ErrorResult}
 */
proto.HandshakeResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.HandshakeResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.HandshakeResponse.ErrorResult, 2));
};


/**
 * @param {?proto.HandshakeResponse.ErrorResult|undefined} value
 * @return {!proto.HandshakeResponse} returns this
*/
proto.HandshakeResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.HandshakeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HandshakeResponse} returns this
 */
proto.HandshakeResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HandshakeResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.HandshakeResponse.FailureResult}
 */
proto.HandshakeResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.HandshakeResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.HandshakeResponse.FailureResult, 3));
};


/**
 * @param {?proto.HandshakeResponse.FailureResult|undefined} value
 * @return {!proto.HandshakeResponse} returns this
*/
proto.HandshakeResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.HandshakeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.HandshakeResponse} returns this
 */
proto.HandshakeResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.HandshakeResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDevicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDevicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDevicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDevicesRequest}
 */
proto.GetDevicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDevicesRequest;
  return proto.GetDevicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDevicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDevicesRequest}
 */
proto.GetDevicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDevicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDevicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDevicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.GetDevicesResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.GetDevicesResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.GetDevicesResponse.ResultCase}
 */
proto.GetDevicesResponse.prototype.getResultCase = function() {
  return /** @type {proto.GetDevicesResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.GetDevicesResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDevicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDevicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDevicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.GetDevicesResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.GetDevicesResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.GetDevicesResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDevicesResponse}
 */
proto.GetDevicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDevicesResponse;
  return proto.GetDevicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDevicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDevicesResponse}
 */
proto.GetDevicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.GetDevicesResponse.SuccessResult;
      reader.readMessage(value,proto.GetDevicesResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.GetDevicesResponse.ErrorResult;
      reader.readMessage(value,proto.GetDevicesResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.GetDevicesResponse.FailureResult;
      reader.readMessage(value,proto.GetDevicesResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDevicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDevicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDevicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.GetDevicesResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GetDevicesResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GetDevicesResponse.FailureResult.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetDevicesResponse.SuccessResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDevicesResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDevicesResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDevicesResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    devicesInfoList: jspb.Message.toObjectList(msg.getDevicesInfoList(),
    proto.DeviceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDevicesResponse.SuccessResult}
 */
proto.GetDevicesResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDevicesResponse.SuccessResult;
  return proto.GetDevicesResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDevicesResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDevicesResponse.SuccessResult}
 */
proto.GetDevicesResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DeviceInfo;
      reader.readMessage(value,proto.DeviceInfo.deserializeBinaryFromReader);
      msg.addDevicesInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDevicesResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDevicesResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDevicesResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevicesInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.DeviceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeviceInfo devices_info = 1;
 * @return {!Array<!proto.DeviceInfo>}
 */
proto.GetDevicesResponse.SuccessResult.prototype.getDevicesInfoList = function() {
  return /** @type{!Array<!proto.DeviceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DeviceInfo, 1));
};


/**
 * @param {!Array<!proto.DeviceInfo>} value
 * @return {!proto.GetDevicesResponse.SuccessResult} returns this
*/
proto.GetDevicesResponse.SuccessResult.prototype.setDevicesInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.DeviceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DeviceInfo}
 */
proto.GetDevicesResponse.SuccessResult.prototype.addDevicesInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.DeviceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetDevicesResponse.SuccessResult} returns this
 */
proto.GetDevicesResponse.SuccessResult.prototype.clearDevicesInfoList = function() {
  return this.setDevicesInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDevicesResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDevicesResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDevicesResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDevicesResponse.ErrorResult}
 */
proto.GetDevicesResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDevicesResponse.ErrorResult;
  return proto.GetDevicesResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDevicesResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDevicesResponse.ErrorResult}
 */
proto.GetDevicesResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDevicesResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDevicesResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDevicesResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDevicesResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDevicesResponse.ErrorResult} returns this
 */
proto.GetDevicesResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDevicesResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDevicesResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDevicesResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDevicesResponse.FailureResult}
 */
proto.GetDevicesResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDevicesResponse.FailureResult;
  return proto.GetDevicesResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDevicesResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDevicesResponse.FailureResult}
 */
proto.GetDevicesResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDevicesResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDevicesResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDevicesResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDevicesResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDevicesResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDevicesResponse.FailureResult} returns this
 */
proto.GetDevicesResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.GetDevicesResponse.SuccessResult}
 */
proto.GetDevicesResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.GetDevicesResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDevicesResponse.SuccessResult, 1));
};


/**
 * @param {?proto.GetDevicesResponse.SuccessResult|undefined} value
 * @return {!proto.GetDevicesResponse} returns this
*/
proto.GetDevicesResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.GetDevicesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDevicesResponse} returns this
 */
proto.GetDevicesResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDevicesResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.GetDevicesResponse.ErrorResult}
 */
proto.GetDevicesResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.GetDevicesResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDevicesResponse.ErrorResult, 2));
};


/**
 * @param {?proto.GetDevicesResponse.ErrorResult|undefined} value
 * @return {!proto.GetDevicesResponse} returns this
*/
proto.GetDevicesResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.GetDevicesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDevicesResponse} returns this
 */
proto.GetDevicesResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDevicesResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.GetDevicesResponse.FailureResult}
 */
proto.GetDevicesResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.GetDevicesResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDevicesResponse.FailureResult, 3));
};


/**
 * @param {?proto.GetDevicesResponse.FailureResult|undefined} value
 * @return {!proto.GetDevicesResponse} returns this
*/
proto.GetDevicesResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.GetDevicesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDevicesResponse} returns this
 */
proto.GetDevicesResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDevicesResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExecuteCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ExecuteCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExecuteCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExecuteCodeRequest}
 */
proto.ExecuteCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExecuteCodeRequest;
  return proto.ExecuteCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExecuteCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExecuteCodeRequest}
 */
proto.ExecuteCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExecuteCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExecuteCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExecuteCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.ExecuteCodeRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExecuteCodeRequest} returns this
 */
proto.ExecuteCodeRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ExecuteCodeResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ExecuteCodeResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.ExecuteCodeResponse.ResultCase}
 */
proto.ExecuteCodeResponse.prototype.getResultCase = function() {
  return /** @type {proto.ExecuteCodeResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ExecuteCodeResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExecuteCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ExecuteCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExecuteCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.ExecuteCodeResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.ExecuteCodeResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.ExecuteCodeResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExecuteCodeResponse}
 */
proto.ExecuteCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExecuteCodeResponse;
  return proto.ExecuteCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExecuteCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExecuteCodeResponse}
 */
proto.ExecuteCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ExecuteCodeResponse.SuccessResult;
      reader.readMessage(value,proto.ExecuteCodeResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.ExecuteCodeResponse.ErrorResult;
      reader.readMessage(value,proto.ExecuteCodeResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.ExecuteCodeResponse.FailureResult;
      reader.readMessage(value,proto.ExecuteCodeResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExecuteCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExecuteCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExecuteCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ExecuteCodeResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ExecuteCodeResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ExecuteCodeResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExecuteCodeResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ExecuteCodeResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExecuteCodeResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExecuteCodeResponse.SuccessResult}
 */
proto.ExecuteCodeResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExecuteCodeResponse.SuccessResult;
  return proto.ExecuteCodeResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExecuteCodeResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExecuteCodeResponse.SuccessResult}
 */
proto.ExecuteCodeResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExecuteCodeResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExecuteCodeResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExecuteCodeResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ExecuteCodeResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExecuteCodeResponse.SuccessResult} returns this
 */
proto.ExecuteCodeResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExecuteCodeResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ExecuteCodeResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExecuteCodeResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExecuteCodeResponse.ErrorResult}
 */
proto.ExecuteCodeResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExecuteCodeResponse.ErrorResult;
  return proto.ExecuteCodeResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExecuteCodeResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExecuteCodeResponse.ErrorResult}
 */
proto.ExecuteCodeResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExecuteCodeResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExecuteCodeResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExecuteCodeResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ExecuteCodeResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExecuteCodeResponse.ErrorResult} returns this
 */
proto.ExecuteCodeResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExecuteCodeResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ExecuteCodeResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExecuteCodeResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExecuteCodeResponse.FailureResult}
 */
proto.ExecuteCodeResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExecuteCodeResponse.FailureResult;
  return proto.ExecuteCodeResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExecuteCodeResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExecuteCodeResponse.FailureResult}
 */
proto.ExecuteCodeResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExecuteCodeResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExecuteCodeResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExecuteCodeResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteCodeResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ExecuteCodeResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExecuteCodeResponse.FailureResult} returns this
 */
proto.ExecuteCodeResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.ExecuteCodeResponse.SuccessResult}
 */
proto.ExecuteCodeResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.ExecuteCodeResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.ExecuteCodeResponse.SuccessResult, 1));
};


/**
 * @param {?proto.ExecuteCodeResponse.SuccessResult|undefined} value
 * @return {!proto.ExecuteCodeResponse} returns this
*/
proto.ExecuteCodeResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ExecuteCodeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ExecuteCodeResponse} returns this
 */
proto.ExecuteCodeResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExecuteCodeResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.ExecuteCodeResponse.ErrorResult}
 */
proto.ExecuteCodeResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.ExecuteCodeResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.ExecuteCodeResponse.ErrorResult, 2));
};


/**
 * @param {?proto.ExecuteCodeResponse.ErrorResult|undefined} value
 * @return {!proto.ExecuteCodeResponse} returns this
*/
proto.ExecuteCodeResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ExecuteCodeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ExecuteCodeResponse} returns this
 */
proto.ExecuteCodeResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExecuteCodeResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.ExecuteCodeResponse.FailureResult}
 */
proto.ExecuteCodeResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.ExecuteCodeResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.ExecuteCodeResponse.FailureResult, 3));
};


/**
 * @param {?proto.ExecuteCodeResponse.FailureResult|undefined} value
 * @return {!proto.ExecuteCodeResponse} returns this
*/
proto.ExecuteCodeResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ExecuteCodeResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ExecuteCodeResponse} returns this
 */
proto.ExecuteCodeResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExecuteCodeResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineDeviceRequest}
 */
proto.DefineDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineDeviceRequest;
  return proto.DefineDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineDeviceRequest}
 */
proto.DefineDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineDeviceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 device_id = 1;
 * @return {number}
 */
proto.DefineDeviceRequest.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DefineDeviceRequest} returns this
 */
proto.DefineDeviceRequest.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DefineDeviceResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.DefineDeviceResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.DefineDeviceResponse.ResultCase}
 */
proto.DefineDeviceResponse.prototype.getResultCase = function() {
  return /** @type {proto.DefineDeviceResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.DefineDeviceResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineDeviceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineDeviceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineDeviceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.DefineDeviceResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.DefineDeviceResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.DefineDeviceResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineDeviceResponse}
 */
proto.DefineDeviceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineDeviceResponse;
  return proto.DefineDeviceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineDeviceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineDeviceResponse}
 */
proto.DefineDeviceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DefineDeviceResponse.SuccessResult;
      reader.readMessage(value,proto.DefineDeviceResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.DefineDeviceResponse.ErrorResult;
      reader.readMessage(value,proto.DefineDeviceResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.DefineDeviceResponse.FailureResult;
      reader.readMessage(value,proto.DefineDeviceResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineDeviceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineDeviceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineDeviceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DefineDeviceResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.DefineDeviceResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DefineDeviceResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineDeviceResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineDeviceResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineDeviceResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineDeviceResponse.SuccessResult}
 */
proto.DefineDeviceResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineDeviceResponse.SuccessResult;
  return proto.DefineDeviceResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineDeviceResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineDeviceResponse.SuccessResult}
 */
proto.DefineDeviceResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineDeviceResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineDeviceResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineDeviceResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineDeviceResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineDeviceResponse.SuccessResult} returns this
 */
proto.DefineDeviceResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineDeviceResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineDeviceResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineDeviceResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineDeviceResponse.ErrorResult}
 */
proto.DefineDeviceResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineDeviceResponse.ErrorResult;
  return proto.DefineDeviceResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineDeviceResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineDeviceResponse.ErrorResult}
 */
proto.DefineDeviceResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineDeviceResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineDeviceResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineDeviceResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineDeviceResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineDeviceResponse.ErrorResult} returns this
 */
proto.DefineDeviceResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineDeviceResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineDeviceResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineDeviceResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineDeviceResponse.FailureResult}
 */
proto.DefineDeviceResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineDeviceResponse.FailureResult;
  return proto.DefineDeviceResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineDeviceResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineDeviceResponse.FailureResult}
 */
proto.DefineDeviceResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineDeviceResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineDeviceResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineDeviceResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineDeviceResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineDeviceResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineDeviceResponse.FailureResult} returns this
 */
proto.DefineDeviceResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.DefineDeviceResponse.SuccessResult}
 */
proto.DefineDeviceResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.DefineDeviceResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineDeviceResponse.SuccessResult, 1));
};


/**
 * @param {?proto.DefineDeviceResponse.SuccessResult|undefined} value
 * @return {!proto.DefineDeviceResponse} returns this
*/
proto.DefineDeviceResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.DefineDeviceResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineDeviceResponse} returns this
 */
proto.DefineDeviceResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineDeviceResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.DefineDeviceResponse.ErrorResult}
 */
proto.DefineDeviceResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.DefineDeviceResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineDeviceResponse.ErrorResult, 2));
};


/**
 * @param {?proto.DefineDeviceResponse.ErrorResult|undefined} value
 * @return {!proto.DefineDeviceResponse} returns this
*/
proto.DefineDeviceResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.DefineDeviceResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineDeviceResponse} returns this
 */
proto.DefineDeviceResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineDeviceResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.DefineDeviceResponse.FailureResult}
 */
proto.DefineDeviceResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.DefineDeviceResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineDeviceResponse.FailureResult, 3));
};


/**
 * @param {?proto.DefineDeviceResponse.FailureResult|undefined} value
 * @return {!proto.DefineDeviceResponse} returns this
*/
proto.DefineDeviceResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.DefineDeviceResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineDeviceResponse} returns this
 */
proto.DefineDeviceResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineDeviceResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByPathRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByPathRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByPathRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devicePath: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByPathRequest}
 */
proto.RemoveDeviceByPathRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByPathRequest;
  return proto.RemoveDeviceByPathRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByPathRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByPathRequest}
 */
proto.RemoveDeviceByPathRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicePath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByPathRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByPathRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByPathRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevicePath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string device_path = 1;
 * @return {string}
 */
proto.RemoveDeviceByPathRequest.prototype.getDevicePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByPathRequest} returns this
 */
proto.RemoveDeviceByPathRequest.prototype.setDevicePath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.RemoveDeviceByPathResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.RemoveDeviceByPathResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.RemoveDeviceByPathResponse.ResultCase}
 */
proto.RemoveDeviceByPathResponse.prototype.getResultCase = function() {
  return /** @type {proto.RemoveDeviceByPathResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.RemoveDeviceByPathResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByPathResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByPathResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByPathResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.RemoveDeviceByPathResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.RemoveDeviceByPathResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.RemoveDeviceByPathResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByPathResponse}
 */
proto.RemoveDeviceByPathResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByPathResponse;
  return proto.RemoveDeviceByPathResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByPathResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByPathResponse}
 */
proto.RemoveDeviceByPathResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RemoveDeviceByPathResponse.SuccessResult;
      reader.readMessage(value,proto.RemoveDeviceByPathResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.RemoveDeviceByPathResponse.ErrorResult;
      reader.readMessage(value,proto.RemoveDeviceByPathResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.RemoveDeviceByPathResponse.FailureResult;
      reader.readMessage(value,proto.RemoveDeviceByPathResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByPathResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByPathResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByPathResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RemoveDeviceByPathResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RemoveDeviceByPathResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.RemoveDeviceByPathResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByPathResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByPathResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByPathResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByPathResponse.SuccessResult}
 */
proto.RemoveDeviceByPathResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByPathResponse.SuccessResult;
  return proto.RemoveDeviceByPathResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByPathResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByPathResponse.SuccessResult}
 */
proto.RemoveDeviceByPathResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByPathResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByPathResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByPathResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByPathResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByPathResponse.SuccessResult} returns this
 */
proto.RemoveDeviceByPathResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByPathResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByPathResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByPathResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByPathResponse.ErrorResult}
 */
proto.RemoveDeviceByPathResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByPathResponse.ErrorResult;
  return proto.RemoveDeviceByPathResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByPathResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByPathResponse.ErrorResult}
 */
proto.RemoveDeviceByPathResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByPathResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByPathResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByPathResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByPathResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByPathResponse.ErrorResult} returns this
 */
proto.RemoveDeviceByPathResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByPathResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByPathResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByPathResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByPathResponse.FailureResult}
 */
proto.RemoveDeviceByPathResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByPathResponse.FailureResult;
  return proto.RemoveDeviceByPathResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByPathResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByPathResponse.FailureResult}
 */
proto.RemoveDeviceByPathResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByPathResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByPathResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByPathResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByPathResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByPathResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByPathResponse.FailureResult} returns this
 */
proto.RemoveDeviceByPathResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.RemoveDeviceByPathResponse.SuccessResult}
 */
proto.RemoveDeviceByPathResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.RemoveDeviceByPathResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByPathResponse.SuccessResult, 1));
};


/**
 * @param {?proto.RemoveDeviceByPathResponse.SuccessResult|undefined} value
 * @return {!proto.RemoveDeviceByPathResponse} returns this
*/
proto.RemoveDeviceByPathResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.RemoveDeviceByPathResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByPathResponse} returns this
 */
proto.RemoveDeviceByPathResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByPathResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.RemoveDeviceByPathResponse.ErrorResult}
 */
proto.RemoveDeviceByPathResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.RemoveDeviceByPathResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByPathResponse.ErrorResult, 2));
};


/**
 * @param {?proto.RemoveDeviceByPathResponse.ErrorResult|undefined} value
 * @return {!proto.RemoveDeviceByPathResponse} returns this
*/
proto.RemoveDeviceByPathResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.RemoveDeviceByPathResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByPathResponse} returns this
 */
proto.RemoveDeviceByPathResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByPathResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.RemoveDeviceByPathResponse.FailureResult}
 */
proto.RemoveDeviceByPathResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.RemoveDeviceByPathResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByPathResponse.FailureResult, 3));
};


/**
 * @param {?proto.RemoveDeviceByPathResponse.FailureResult|undefined} value
 * @return {!proto.RemoveDeviceByPathResponse} returns this
*/
proto.RemoveDeviceByPathResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.RemoveDeviceByPathResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByPathResponse} returns this
 */
proto.RemoveDeviceByPathResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByPathResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByNameRequest}
 */
proto.RemoveDeviceByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByNameRequest;
  return proto.RemoveDeviceByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByNameRequest}
 */
proto.RemoveDeviceByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string device_name = 1;
 * @return {string}
 */
proto.RemoveDeviceByNameRequest.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByNameRequest} returns this
 */
proto.RemoveDeviceByNameRequest.prototype.setDeviceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.RemoveDeviceByNameResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.RemoveDeviceByNameResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.RemoveDeviceByNameResponse.ResultCase}
 */
proto.RemoveDeviceByNameResponse.prototype.getResultCase = function() {
  return /** @type {proto.RemoveDeviceByNameResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.RemoveDeviceByNameResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.RemoveDeviceByNameResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.RemoveDeviceByNameResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.RemoveDeviceByNameResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByNameResponse}
 */
proto.RemoveDeviceByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByNameResponse;
  return proto.RemoveDeviceByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByNameResponse}
 */
proto.RemoveDeviceByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RemoveDeviceByNameResponse.SuccessResult;
      reader.readMessage(value,proto.RemoveDeviceByNameResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.RemoveDeviceByNameResponse.ErrorResult;
      reader.readMessage(value,proto.RemoveDeviceByNameResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.RemoveDeviceByNameResponse.FailureResult;
      reader.readMessage(value,proto.RemoveDeviceByNameResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RemoveDeviceByNameResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RemoveDeviceByNameResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.RemoveDeviceByNameResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByNameResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByNameResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByNameResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByNameResponse.SuccessResult}
 */
proto.RemoveDeviceByNameResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByNameResponse.SuccessResult;
  return proto.RemoveDeviceByNameResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByNameResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByNameResponse.SuccessResult}
 */
proto.RemoveDeviceByNameResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByNameResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByNameResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByNameResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByNameResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByNameResponse.SuccessResult} returns this
 */
proto.RemoveDeviceByNameResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByNameResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByNameResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByNameResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByNameResponse.ErrorResult}
 */
proto.RemoveDeviceByNameResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByNameResponse.ErrorResult;
  return proto.RemoveDeviceByNameResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByNameResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByNameResponse.ErrorResult}
 */
proto.RemoveDeviceByNameResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByNameResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByNameResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByNameResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByNameResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByNameResponse.ErrorResult} returns this
 */
proto.RemoveDeviceByNameResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByNameResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByNameResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByNameResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByNameResponse.FailureResult}
 */
proto.RemoveDeviceByNameResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByNameResponse.FailureResult;
  return proto.RemoveDeviceByNameResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByNameResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByNameResponse.FailureResult}
 */
proto.RemoveDeviceByNameResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByNameResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByNameResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByNameResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByNameResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByNameResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByNameResponse.FailureResult} returns this
 */
proto.RemoveDeviceByNameResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.RemoveDeviceByNameResponse.SuccessResult}
 */
proto.RemoveDeviceByNameResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.RemoveDeviceByNameResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByNameResponse.SuccessResult, 1));
};


/**
 * @param {?proto.RemoveDeviceByNameResponse.SuccessResult|undefined} value
 * @return {!proto.RemoveDeviceByNameResponse} returns this
*/
proto.RemoveDeviceByNameResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.RemoveDeviceByNameResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByNameResponse} returns this
 */
proto.RemoveDeviceByNameResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByNameResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.RemoveDeviceByNameResponse.ErrorResult}
 */
proto.RemoveDeviceByNameResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.RemoveDeviceByNameResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByNameResponse.ErrorResult, 2));
};


/**
 * @param {?proto.RemoveDeviceByNameResponse.ErrorResult|undefined} value
 * @return {!proto.RemoveDeviceByNameResponse} returns this
*/
proto.RemoveDeviceByNameResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.RemoveDeviceByNameResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByNameResponse} returns this
 */
proto.RemoveDeviceByNameResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByNameResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.RemoveDeviceByNameResponse.FailureResult}
 */
proto.RemoveDeviceByNameResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.RemoveDeviceByNameResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByNameResponse.FailureResult, 3));
};


/**
 * @param {?proto.RemoveDeviceByNameResponse.FailureResult|undefined} value
 * @return {!proto.RemoveDeviceByNameResponse} returns this
*/
proto.RemoveDeviceByNameResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.RemoveDeviceByNameResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByNameResponse} returns this
 */
proto.RemoveDeviceByNameResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByNameResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByIdRequest}
 */
proto.RemoveDeviceByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByIdRequest;
  return proto.RemoveDeviceByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByIdRequest}
 */
proto.RemoveDeviceByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 device_id = 1;
 * @return {number}
 */
proto.RemoveDeviceByIdRequest.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RemoveDeviceByIdRequest} returns this
 */
proto.RemoveDeviceByIdRequest.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.RemoveDeviceByIdResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.RemoveDeviceByIdResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.RemoveDeviceByIdResponse.ResultCase}
 */
proto.RemoveDeviceByIdResponse.prototype.getResultCase = function() {
  return /** @type {proto.RemoveDeviceByIdResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.RemoveDeviceByIdResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.RemoveDeviceByIdResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.RemoveDeviceByIdResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.RemoveDeviceByIdResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByIdResponse}
 */
proto.RemoveDeviceByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByIdResponse;
  return proto.RemoveDeviceByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByIdResponse}
 */
proto.RemoveDeviceByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RemoveDeviceByIdResponse.SuccessResult;
      reader.readMessage(value,proto.RemoveDeviceByIdResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.RemoveDeviceByIdResponse.ErrorResult;
      reader.readMessage(value,proto.RemoveDeviceByIdResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.RemoveDeviceByIdResponse.FailureResult;
      reader.readMessage(value,proto.RemoveDeviceByIdResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RemoveDeviceByIdResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RemoveDeviceByIdResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.RemoveDeviceByIdResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByIdResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByIdResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByIdResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByIdResponse.SuccessResult}
 */
proto.RemoveDeviceByIdResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByIdResponse.SuccessResult;
  return proto.RemoveDeviceByIdResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByIdResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByIdResponse.SuccessResult}
 */
proto.RemoveDeviceByIdResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByIdResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByIdResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByIdResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByIdResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByIdResponse.SuccessResult} returns this
 */
proto.RemoveDeviceByIdResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByIdResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByIdResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByIdResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByIdResponse.ErrorResult}
 */
proto.RemoveDeviceByIdResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByIdResponse.ErrorResult;
  return proto.RemoveDeviceByIdResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByIdResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByIdResponse.ErrorResult}
 */
proto.RemoveDeviceByIdResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByIdResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByIdResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByIdResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByIdResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByIdResponse.ErrorResult} returns this
 */
proto.RemoveDeviceByIdResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveDeviceByIdResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveDeviceByIdResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveDeviceByIdResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveDeviceByIdResponse.FailureResult}
 */
proto.RemoveDeviceByIdResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveDeviceByIdResponse.FailureResult;
  return proto.RemoveDeviceByIdResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveDeviceByIdResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveDeviceByIdResponse.FailureResult}
 */
proto.RemoveDeviceByIdResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveDeviceByIdResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveDeviceByIdResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveDeviceByIdResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveDeviceByIdResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveDeviceByIdResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveDeviceByIdResponse.FailureResult} returns this
 */
proto.RemoveDeviceByIdResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.RemoveDeviceByIdResponse.SuccessResult}
 */
proto.RemoveDeviceByIdResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.RemoveDeviceByIdResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByIdResponse.SuccessResult, 1));
};


/**
 * @param {?proto.RemoveDeviceByIdResponse.SuccessResult|undefined} value
 * @return {!proto.RemoveDeviceByIdResponse} returns this
*/
proto.RemoveDeviceByIdResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.RemoveDeviceByIdResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByIdResponse} returns this
 */
proto.RemoveDeviceByIdResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByIdResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.RemoveDeviceByIdResponse.ErrorResult}
 */
proto.RemoveDeviceByIdResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.RemoveDeviceByIdResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByIdResponse.ErrorResult, 2));
};


/**
 * @param {?proto.RemoveDeviceByIdResponse.ErrorResult|undefined} value
 * @return {!proto.RemoveDeviceByIdResponse} returns this
*/
proto.RemoveDeviceByIdResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.RemoveDeviceByIdResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByIdResponse} returns this
 */
proto.RemoveDeviceByIdResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByIdResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.RemoveDeviceByIdResponse.FailureResult}
 */
proto.RemoveDeviceByIdResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.RemoveDeviceByIdResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByIdResponse.FailureResult, 3));
};


/**
 * @param {?proto.RemoveDeviceByIdResponse.FailureResult|undefined} value
 * @return {!proto.RemoveDeviceByIdResponse} returns this
*/
proto.RemoveDeviceByIdResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.RemoveDeviceByIdResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveDeviceByIdResponse} returns this
 */
proto.RemoveDeviceByIdResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveDeviceByIdResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedModifiersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedModifiersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedModifiersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedModifiersRequest}
 */
proto.GetDefinedModifiersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedModifiersRequest;
  return proto.GetDefinedModifiersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedModifiersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedModifiersRequest}
 */
proto.GetDefinedModifiersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedModifiersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedModifiersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedModifiersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.GetDefinedModifiersResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.GetDefinedModifiersResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.GetDefinedModifiersResponse.ResultCase}
 */
proto.GetDefinedModifiersResponse.prototype.getResultCase = function() {
  return /** @type {proto.GetDefinedModifiersResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.GetDefinedModifiersResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedModifiersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedModifiersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedModifiersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.GetDefinedModifiersResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.GetDefinedModifiersResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.GetDefinedModifiersResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedModifiersResponse}
 */
proto.GetDefinedModifiersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedModifiersResponse;
  return proto.GetDefinedModifiersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedModifiersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedModifiersResponse}
 */
proto.GetDefinedModifiersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.GetDefinedModifiersResponse.SuccessResult;
      reader.readMessage(value,proto.GetDefinedModifiersResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.GetDefinedModifiersResponse.ErrorResult;
      reader.readMessage(value,proto.GetDefinedModifiersResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.GetDefinedModifiersResponse.FailureResult;
      reader.readMessage(value,proto.GetDefinedModifiersResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedModifiersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedModifiersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedModifiersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.GetDefinedModifiersResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GetDefinedModifiersResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GetDefinedModifiersResponse.FailureResult.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetDefinedModifiersResponse.SuccessResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedModifiersResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedModifiersResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedModifiersResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifierDescriptionsList: jspb.Message.toObjectList(msg.getModifierDescriptionsList(),
    proto.ModifierDescription.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedModifiersResponse.SuccessResult}
 */
proto.GetDefinedModifiersResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedModifiersResponse.SuccessResult;
  return proto.GetDefinedModifiersResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedModifiersResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedModifiersResponse.SuccessResult}
 */
proto.GetDefinedModifiersResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ModifierDescription;
      reader.readMessage(value,proto.ModifierDescription.deserializeBinaryFromReader);
      msg.addModifierDescriptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedModifiersResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedModifiersResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedModifiersResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifierDescriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ModifierDescription.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModifierDescription modifier_descriptions = 1;
 * @return {!Array<!proto.ModifierDescription>}
 */
proto.GetDefinedModifiersResponse.SuccessResult.prototype.getModifierDescriptionsList = function() {
  return /** @type{!Array<!proto.ModifierDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ModifierDescription, 1));
};


/**
 * @param {!Array<!proto.ModifierDescription>} value
 * @return {!proto.GetDefinedModifiersResponse.SuccessResult} returns this
*/
proto.GetDefinedModifiersResponse.SuccessResult.prototype.setModifierDescriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ModifierDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ModifierDescription}
 */
proto.GetDefinedModifiersResponse.SuccessResult.prototype.addModifierDescriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ModifierDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetDefinedModifiersResponse.SuccessResult} returns this
 */
proto.GetDefinedModifiersResponse.SuccessResult.prototype.clearModifierDescriptionsList = function() {
  return this.setModifierDescriptionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedModifiersResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedModifiersResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedModifiersResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedModifiersResponse.ErrorResult}
 */
proto.GetDefinedModifiersResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedModifiersResponse.ErrorResult;
  return proto.GetDefinedModifiersResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedModifiersResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedModifiersResponse.ErrorResult}
 */
proto.GetDefinedModifiersResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedModifiersResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedModifiersResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedModifiersResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDefinedModifiersResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDefinedModifiersResponse.ErrorResult} returns this
 */
proto.GetDefinedModifiersResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedModifiersResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedModifiersResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedModifiersResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedModifiersResponse.FailureResult}
 */
proto.GetDefinedModifiersResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedModifiersResponse.FailureResult;
  return proto.GetDefinedModifiersResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedModifiersResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedModifiersResponse.FailureResult}
 */
proto.GetDefinedModifiersResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedModifiersResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedModifiersResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedModifiersResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedModifiersResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDefinedModifiersResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDefinedModifiersResponse.FailureResult} returns this
 */
proto.GetDefinedModifiersResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.GetDefinedModifiersResponse.SuccessResult}
 */
proto.GetDefinedModifiersResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.GetDefinedModifiersResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedModifiersResponse.SuccessResult, 1));
};


/**
 * @param {?proto.GetDefinedModifiersResponse.SuccessResult|undefined} value
 * @return {!proto.GetDefinedModifiersResponse} returns this
*/
proto.GetDefinedModifiersResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.GetDefinedModifiersResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedModifiersResponse} returns this
 */
proto.GetDefinedModifiersResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedModifiersResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.GetDefinedModifiersResponse.ErrorResult}
 */
proto.GetDefinedModifiersResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.GetDefinedModifiersResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedModifiersResponse.ErrorResult, 2));
};


/**
 * @param {?proto.GetDefinedModifiersResponse.ErrorResult|undefined} value
 * @return {!proto.GetDefinedModifiersResponse} returns this
*/
proto.GetDefinedModifiersResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.GetDefinedModifiersResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedModifiersResponse} returns this
 */
proto.GetDefinedModifiersResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedModifiersResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.GetDefinedModifiersResponse.FailureResult}
 */
proto.GetDefinedModifiersResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.GetDefinedModifiersResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedModifiersResponse.FailureResult, 3));
};


/**
 * @param {?proto.GetDefinedModifiersResponse.FailureResult|undefined} value
 * @return {!proto.GetDefinedModifiersResponse} returns this
*/
proto.GetDefinedModifiersResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.GetDefinedModifiersResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedModifiersResponse} returns this
 */
proto.GetDefinedModifiersResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedModifiersResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineModifierRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineModifierRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineModifierRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifier: (f = msg.getModifier()) && proto.ModifierDescription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineModifierRequest}
 */
proto.DefineModifierRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineModifierRequest;
  return proto.DefineModifierRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineModifierRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineModifierRequest}
 */
proto.DefineModifierRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ModifierDescription;
      reader.readMessage(value,proto.ModifierDescription.deserializeBinaryFromReader);
      msg.setModifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineModifierRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineModifierRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineModifierRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ModifierDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModifierDescription modifier = 1;
 * @return {?proto.ModifierDescription}
 */
proto.DefineModifierRequest.prototype.getModifier = function() {
  return /** @type{?proto.ModifierDescription} */ (
    jspb.Message.getWrapperField(this, proto.ModifierDescription, 1));
};


/**
 * @param {?proto.ModifierDescription|undefined} value
 * @return {!proto.DefineModifierRequest} returns this
*/
proto.DefineModifierRequest.prototype.setModifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineModifierRequest} returns this
 */
proto.DefineModifierRequest.prototype.clearModifier = function() {
  return this.setModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineModifierRequest.prototype.hasModifier = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DefineModifierResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.DefineModifierResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.DefineModifierResponse.ResultCase}
 */
proto.DefineModifierResponse.prototype.getResultCase = function() {
  return /** @type {proto.DefineModifierResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.DefineModifierResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineModifierResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineModifierResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineModifierResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.DefineModifierResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.DefineModifierResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.DefineModifierResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineModifierResponse}
 */
proto.DefineModifierResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineModifierResponse;
  return proto.DefineModifierResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineModifierResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineModifierResponse}
 */
proto.DefineModifierResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DefineModifierResponse.SuccessResult;
      reader.readMessage(value,proto.DefineModifierResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.DefineModifierResponse.ErrorResult;
      reader.readMessage(value,proto.DefineModifierResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.DefineModifierResponse.FailureResult;
      reader.readMessage(value,proto.DefineModifierResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineModifierResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineModifierResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineModifierResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DefineModifierResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.DefineModifierResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DefineModifierResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineModifierResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineModifierResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineModifierResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineModifierResponse.SuccessResult}
 */
proto.DefineModifierResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineModifierResponse.SuccessResult;
  return proto.DefineModifierResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineModifierResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineModifierResponse.SuccessResult}
 */
proto.DefineModifierResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineModifierResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineModifierResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineModifierResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineModifierResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineModifierResponse.SuccessResult} returns this
 */
proto.DefineModifierResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineModifierResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineModifierResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineModifierResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineModifierResponse.ErrorResult}
 */
proto.DefineModifierResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineModifierResponse.ErrorResult;
  return proto.DefineModifierResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineModifierResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineModifierResponse.ErrorResult}
 */
proto.DefineModifierResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineModifierResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineModifierResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineModifierResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineModifierResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineModifierResponse.ErrorResult} returns this
 */
proto.DefineModifierResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineModifierResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineModifierResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineModifierResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineModifierResponse.FailureResult}
 */
proto.DefineModifierResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineModifierResponse.FailureResult;
  return proto.DefineModifierResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineModifierResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineModifierResponse.FailureResult}
 */
proto.DefineModifierResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineModifierResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineModifierResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineModifierResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineModifierResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineModifierResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineModifierResponse.FailureResult} returns this
 */
proto.DefineModifierResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.DefineModifierResponse.SuccessResult}
 */
proto.DefineModifierResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.DefineModifierResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineModifierResponse.SuccessResult, 1));
};


/**
 * @param {?proto.DefineModifierResponse.SuccessResult|undefined} value
 * @return {!proto.DefineModifierResponse} returns this
*/
proto.DefineModifierResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.DefineModifierResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineModifierResponse} returns this
 */
proto.DefineModifierResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineModifierResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.DefineModifierResponse.ErrorResult}
 */
proto.DefineModifierResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.DefineModifierResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineModifierResponse.ErrorResult, 2));
};


/**
 * @param {?proto.DefineModifierResponse.ErrorResult|undefined} value
 * @return {!proto.DefineModifierResponse} returns this
*/
proto.DefineModifierResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.DefineModifierResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineModifierResponse} returns this
 */
proto.DefineModifierResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineModifierResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.DefineModifierResponse.FailureResult}
 */
proto.DefineModifierResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.DefineModifierResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineModifierResponse.FailureResult, 3));
};


/**
 * @param {?proto.DefineModifierResponse.FailureResult|undefined} value
 * @return {!proto.DefineModifierResponse} returns this
*/
proto.DefineModifierResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.DefineModifierResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineModifierResponse} returns this
 */
proto.DefineModifierResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineModifierResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveModifierRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveModifierRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveModifierRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifierKey: (f = msg.getModifierKey()) && proto.Key.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveModifierRequest}
 */
proto.RemoveModifierRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveModifierRequest;
  return proto.RemoveModifierRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveModifierRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveModifierRequest}
 */
proto.RemoveModifierRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Key;
      reader.readMessage(value,proto.Key.deserializeBinaryFromReader);
      msg.setModifierKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveModifierRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveModifierRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveModifierRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifierKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Key.serializeBinaryToWriter
    );
  }
};


/**
 * optional Key modifier_key = 1;
 * @return {?proto.Key}
 */
proto.RemoveModifierRequest.prototype.getModifierKey = function() {
  return /** @type{?proto.Key} */ (
    jspb.Message.getWrapperField(this, proto.Key, 1));
};


/**
 * @param {?proto.Key|undefined} value
 * @return {!proto.RemoveModifierRequest} returns this
*/
proto.RemoveModifierRequest.prototype.setModifierKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveModifierRequest} returns this
 */
proto.RemoveModifierRequest.prototype.clearModifierKey = function() {
  return this.setModifierKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveModifierRequest.prototype.hasModifierKey = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.RemoveModifierResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.RemoveModifierResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.RemoveModifierResponse.ResultCase}
 */
proto.RemoveModifierResponse.prototype.getResultCase = function() {
  return /** @type {proto.RemoveModifierResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.RemoveModifierResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveModifierResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveModifierResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveModifierResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.RemoveModifierResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.RemoveModifierResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.RemoveModifierResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveModifierResponse}
 */
proto.RemoveModifierResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveModifierResponse;
  return proto.RemoveModifierResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveModifierResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveModifierResponse}
 */
proto.RemoveModifierResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RemoveModifierResponse.SuccessResult;
      reader.readMessage(value,proto.RemoveModifierResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.RemoveModifierResponse.ErrorResult;
      reader.readMessage(value,proto.RemoveModifierResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.RemoveModifierResponse.FailureResult;
      reader.readMessage(value,proto.RemoveModifierResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveModifierResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveModifierResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveModifierResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RemoveModifierResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RemoveModifierResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.RemoveModifierResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveModifierResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveModifierResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveModifierResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveModifierResponse.SuccessResult}
 */
proto.RemoveModifierResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveModifierResponse.SuccessResult;
  return proto.RemoveModifierResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveModifierResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveModifierResponse.SuccessResult}
 */
proto.RemoveModifierResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveModifierResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveModifierResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveModifierResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveModifierResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveModifierResponse.SuccessResult} returns this
 */
proto.RemoveModifierResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveModifierResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveModifierResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveModifierResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveModifierResponse.ErrorResult}
 */
proto.RemoveModifierResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveModifierResponse.ErrorResult;
  return proto.RemoveModifierResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveModifierResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveModifierResponse.ErrorResult}
 */
proto.RemoveModifierResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveModifierResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveModifierResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveModifierResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveModifierResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveModifierResponse.ErrorResult} returns this
 */
proto.RemoveModifierResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveModifierResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveModifierResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveModifierResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveModifierResponse.FailureResult}
 */
proto.RemoveModifierResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveModifierResponse.FailureResult;
  return proto.RemoveModifierResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveModifierResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveModifierResponse.FailureResult}
 */
proto.RemoveModifierResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveModifierResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveModifierResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveModifierResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveModifierResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveModifierResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveModifierResponse.FailureResult} returns this
 */
proto.RemoveModifierResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.RemoveModifierResponse.SuccessResult}
 */
proto.RemoveModifierResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.RemoveModifierResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveModifierResponse.SuccessResult, 1));
};


/**
 * @param {?proto.RemoveModifierResponse.SuccessResult|undefined} value
 * @return {!proto.RemoveModifierResponse} returns this
*/
proto.RemoveModifierResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.RemoveModifierResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveModifierResponse} returns this
 */
proto.RemoveModifierResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveModifierResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.RemoveModifierResponse.ErrorResult}
 */
proto.RemoveModifierResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.RemoveModifierResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveModifierResponse.ErrorResult, 2));
};


/**
 * @param {?proto.RemoveModifierResponse.ErrorResult|undefined} value
 * @return {!proto.RemoveModifierResponse} returns this
*/
proto.RemoveModifierResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.RemoveModifierResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveModifierResponse} returns this
 */
proto.RemoveModifierResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveModifierResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.RemoveModifierResponse.FailureResult}
 */
proto.RemoveModifierResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.RemoveModifierResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveModifierResponse.FailureResult, 3));
};


/**
 * @param {?proto.RemoveModifierResponse.FailureResult|undefined} value
 * @return {!proto.RemoveModifierResponse} returns this
*/
proto.RemoveModifierResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.RemoveModifierResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveModifierResponse} returns this
 */
proto.RemoveModifierResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveModifierResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedActionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedActionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedActionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedActionsRequest}
 */
proto.GetDefinedActionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedActionsRequest;
  return proto.GetDefinedActionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedActionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedActionsRequest}
 */
proto.GetDefinedActionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedActionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedActionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedActionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.GetDefinedActionsResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.GetDefinedActionsResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.GetDefinedActionsResponse.ResultCase}
 */
proto.GetDefinedActionsResponse.prototype.getResultCase = function() {
  return /** @type {proto.GetDefinedActionsResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.GetDefinedActionsResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.GetDefinedActionsResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.GetDefinedActionsResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.GetDefinedActionsResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedActionsResponse}
 */
proto.GetDefinedActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedActionsResponse;
  return proto.GetDefinedActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedActionsResponse}
 */
proto.GetDefinedActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.GetDefinedActionsResponse.SuccessResult;
      reader.readMessage(value,proto.GetDefinedActionsResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.GetDefinedActionsResponse.ErrorResult;
      reader.readMessage(value,proto.GetDefinedActionsResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.GetDefinedActionsResponse.FailureResult;
      reader.readMessage(value,proto.GetDefinedActionsResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.GetDefinedActionsResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GetDefinedActionsResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GetDefinedActionsResponse.FailureResult.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetDefinedActionsResponse.SuccessResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedActionsResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedActionsResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedActionsResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    namedActionsList: jspb.Message.toObjectList(msg.getNamedActionsList(),
    proto.NamedAction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedActionsResponse.SuccessResult}
 */
proto.GetDefinedActionsResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedActionsResponse.SuccessResult;
  return proto.GetDefinedActionsResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedActionsResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedActionsResponse.SuccessResult}
 */
proto.GetDefinedActionsResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.NamedAction;
      reader.readMessage(value,proto.NamedAction.deserializeBinaryFromReader);
      msg.addNamedActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedActionsResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedActionsResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedActionsResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamedActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.NamedAction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NamedAction named_actions = 1;
 * @return {!Array<!proto.NamedAction>}
 */
proto.GetDefinedActionsResponse.SuccessResult.prototype.getNamedActionsList = function() {
  return /** @type{!Array<!proto.NamedAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.NamedAction, 1));
};


/**
 * @param {!Array<!proto.NamedAction>} value
 * @return {!proto.GetDefinedActionsResponse.SuccessResult} returns this
*/
proto.GetDefinedActionsResponse.SuccessResult.prototype.setNamedActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.NamedAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.NamedAction}
 */
proto.GetDefinedActionsResponse.SuccessResult.prototype.addNamedActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.NamedAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetDefinedActionsResponse.SuccessResult} returns this
 */
proto.GetDefinedActionsResponse.SuccessResult.prototype.clearNamedActionsList = function() {
  return this.setNamedActionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedActionsResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedActionsResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedActionsResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedActionsResponse.ErrorResult}
 */
proto.GetDefinedActionsResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedActionsResponse.ErrorResult;
  return proto.GetDefinedActionsResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedActionsResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedActionsResponse.ErrorResult}
 */
proto.GetDefinedActionsResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedActionsResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedActionsResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedActionsResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDefinedActionsResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDefinedActionsResponse.ErrorResult} returns this
 */
proto.GetDefinedActionsResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedActionsResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedActionsResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedActionsResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedActionsResponse.FailureResult}
 */
proto.GetDefinedActionsResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedActionsResponse.FailureResult;
  return proto.GetDefinedActionsResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedActionsResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedActionsResponse.FailureResult}
 */
proto.GetDefinedActionsResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedActionsResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedActionsResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedActionsResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedActionsResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDefinedActionsResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDefinedActionsResponse.FailureResult} returns this
 */
proto.GetDefinedActionsResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.GetDefinedActionsResponse.SuccessResult}
 */
proto.GetDefinedActionsResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.GetDefinedActionsResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedActionsResponse.SuccessResult, 1));
};


/**
 * @param {?proto.GetDefinedActionsResponse.SuccessResult|undefined} value
 * @return {!proto.GetDefinedActionsResponse} returns this
*/
proto.GetDefinedActionsResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.GetDefinedActionsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedActionsResponse} returns this
 */
proto.GetDefinedActionsResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedActionsResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.GetDefinedActionsResponse.ErrorResult}
 */
proto.GetDefinedActionsResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.GetDefinedActionsResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedActionsResponse.ErrorResult, 2));
};


/**
 * @param {?proto.GetDefinedActionsResponse.ErrorResult|undefined} value
 * @return {!proto.GetDefinedActionsResponse} returns this
*/
proto.GetDefinedActionsResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.GetDefinedActionsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedActionsResponse} returns this
 */
proto.GetDefinedActionsResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedActionsResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.GetDefinedActionsResponse.FailureResult}
 */
proto.GetDefinedActionsResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.GetDefinedActionsResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedActionsResponse.FailureResult, 3));
};


/**
 * @param {?proto.GetDefinedActionsResponse.FailureResult|undefined} value
 * @return {!proto.GetDefinedActionsResponse} returns this
*/
proto.GetDefinedActionsResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.GetDefinedActionsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedActionsResponse} returns this
 */
proto.GetDefinedActionsResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedActionsResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = msg.getAction()) && proto.NamedAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineActionRequest}
 */
proto.DefineActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineActionRequest;
  return proto.DefineActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineActionRequest}
 */
proto.DefineActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.NamedAction;
      reader.readMessage(value,proto.NamedAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.NamedAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional NamedAction action = 1;
 * @return {?proto.NamedAction}
 */
proto.DefineActionRequest.prototype.getAction = function() {
  return /** @type{?proto.NamedAction} */ (
    jspb.Message.getWrapperField(this, proto.NamedAction, 1));
};


/**
 * @param {?proto.NamedAction|undefined} value
 * @return {!proto.DefineActionRequest} returns this
*/
proto.DefineActionRequest.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineActionRequest} returns this
 */
proto.DefineActionRequest.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineActionRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DefineActionResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.DefineActionResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.DefineActionResponse.ResultCase}
 */
proto.DefineActionResponse.prototype.getResultCase = function() {
  return /** @type {proto.DefineActionResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.DefineActionResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.DefineActionResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.DefineActionResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.DefineActionResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineActionResponse}
 */
proto.DefineActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineActionResponse;
  return proto.DefineActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineActionResponse}
 */
proto.DefineActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DefineActionResponse.SuccessResult;
      reader.readMessage(value,proto.DefineActionResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.DefineActionResponse.ErrorResult;
      reader.readMessage(value,proto.DefineActionResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.DefineActionResponse.FailureResult;
      reader.readMessage(value,proto.DefineActionResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DefineActionResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.DefineActionResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DefineActionResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineActionResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineActionResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineActionResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineActionResponse.SuccessResult}
 */
proto.DefineActionResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineActionResponse.SuccessResult;
  return proto.DefineActionResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineActionResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineActionResponse.SuccessResult}
 */
proto.DefineActionResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineActionResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineActionResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineActionResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineActionResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineActionResponse.SuccessResult} returns this
 */
proto.DefineActionResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineActionResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineActionResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineActionResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineActionResponse.ErrorResult}
 */
proto.DefineActionResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineActionResponse.ErrorResult;
  return proto.DefineActionResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineActionResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineActionResponse.ErrorResult}
 */
proto.DefineActionResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineActionResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineActionResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineActionResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineActionResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineActionResponse.ErrorResult} returns this
 */
proto.DefineActionResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineActionResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineActionResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineActionResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineActionResponse.FailureResult}
 */
proto.DefineActionResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineActionResponse.FailureResult;
  return proto.DefineActionResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineActionResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineActionResponse.FailureResult}
 */
proto.DefineActionResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineActionResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineActionResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineActionResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineActionResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineActionResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineActionResponse.FailureResult} returns this
 */
proto.DefineActionResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.DefineActionResponse.SuccessResult}
 */
proto.DefineActionResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.DefineActionResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineActionResponse.SuccessResult, 1));
};


/**
 * @param {?proto.DefineActionResponse.SuccessResult|undefined} value
 * @return {!proto.DefineActionResponse} returns this
*/
proto.DefineActionResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.DefineActionResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineActionResponse} returns this
 */
proto.DefineActionResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineActionResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.DefineActionResponse.ErrorResult}
 */
proto.DefineActionResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.DefineActionResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineActionResponse.ErrorResult, 2));
};


/**
 * @param {?proto.DefineActionResponse.ErrorResult|undefined} value
 * @return {!proto.DefineActionResponse} returns this
*/
proto.DefineActionResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.DefineActionResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineActionResponse} returns this
 */
proto.DefineActionResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineActionResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.DefineActionResponse.FailureResult}
 */
proto.DefineActionResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.DefineActionResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineActionResponse.FailureResult, 3));
};


/**
 * @param {?proto.DefineActionResponse.FailureResult|undefined} value
 * @return {!proto.DefineActionResponse} returns this
*/
proto.DefineActionResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.DefineActionResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineActionResponse} returns this
 */
proto.DefineActionResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineActionResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveActionRequest}
 */
proto.RemoveActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveActionRequest;
  return proto.RemoveActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveActionRequest}
 */
proto.RemoveActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string action_name = 1;
 * @return {string}
 */
proto.RemoveActionRequest.prototype.getActionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveActionRequest} returns this
 */
proto.RemoveActionRequest.prototype.setActionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.RemoveActionResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.RemoveActionResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.RemoveActionResponse.ResultCase}
 */
proto.RemoveActionResponse.prototype.getResultCase = function() {
  return /** @type {proto.RemoveActionResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.RemoveActionResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.RemoveActionResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.RemoveActionResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.RemoveActionResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveActionResponse}
 */
proto.RemoveActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveActionResponse;
  return proto.RemoveActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveActionResponse}
 */
proto.RemoveActionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RemoveActionResponse.SuccessResult;
      reader.readMessage(value,proto.RemoveActionResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.RemoveActionResponse.ErrorResult;
      reader.readMessage(value,proto.RemoveActionResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.RemoveActionResponse.FailureResult;
      reader.readMessage(value,proto.RemoveActionResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RemoveActionResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RemoveActionResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.RemoveActionResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveActionResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveActionResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveActionResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveActionResponse.SuccessResult}
 */
proto.RemoveActionResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveActionResponse.SuccessResult;
  return proto.RemoveActionResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveActionResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveActionResponse.SuccessResult}
 */
proto.RemoveActionResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveActionResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveActionResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveActionResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveActionResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveActionResponse.SuccessResult} returns this
 */
proto.RemoveActionResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveActionResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveActionResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveActionResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveActionResponse.ErrorResult}
 */
proto.RemoveActionResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveActionResponse.ErrorResult;
  return proto.RemoveActionResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveActionResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveActionResponse.ErrorResult}
 */
proto.RemoveActionResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveActionResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveActionResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveActionResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveActionResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveActionResponse.ErrorResult} returns this
 */
proto.RemoveActionResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveActionResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveActionResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveActionResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveActionResponse.FailureResult}
 */
proto.RemoveActionResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveActionResponse.FailureResult;
  return proto.RemoveActionResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveActionResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveActionResponse.FailureResult}
 */
proto.RemoveActionResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveActionResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveActionResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveActionResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveActionResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveActionResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveActionResponse.FailureResult} returns this
 */
proto.RemoveActionResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.RemoveActionResponse.SuccessResult}
 */
proto.RemoveActionResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.RemoveActionResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveActionResponse.SuccessResult, 1));
};


/**
 * @param {?proto.RemoveActionResponse.SuccessResult|undefined} value
 * @return {!proto.RemoveActionResponse} returns this
*/
proto.RemoveActionResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.RemoveActionResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveActionResponse} returns this
 */
proto.RemoveActionResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveActionResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.RemoveActionResponse.ErrorResult}
 */
proto.RemoveActionResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.RemoveActionResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveActionResponse.ErrorResult, 2));
};


/**
 * @param {?proto.RemoveActionResponse.ErrorResult|undefined} value
 * @return {!proto.RemoveActionResponse} returns this
*/
proto.RemoveActionResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.RemoveActionResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveActionResponse} returns this
 */
proto.RemoveActionResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveActionResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.RemoveActionResponse.FailureResult}
 */
proto.RemoveActionResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.RemoveActionResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveActionResponse.FailureResult, 3));
};


/**
 * @param {?proto.RemoveActionResponse.FailureResult|undefined} value
 * @return {!proto.RemoveActionResponse} returns this
*/
proto.RemoveActionResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.RemoveActionResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveActionResponse} returns this
 */
proto.RemoveActionResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveActionResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedMappingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedMappingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedMappingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedMappingsRequest}
 */
proto.GetDefinedMappingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedMappingsRequest;
  return proto.GetDefinedMappingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedMappingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedMappingsRequest}
 */
proto.GetDefinedMappingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedMappingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedMappingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedMappingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.GetDefinedMappingsResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.GetDefinedMappingsResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.GetDefinedMappingsResponse.ResultCase}
 */
proto.GetDefinedMappingsResponse.prototype.getResultCase = function() {
  return /** @type {proto.GetDefinedMappingsResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.GetDefinedMappingsResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedMappingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedMappingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedMappingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.GetDefinedMappingsResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.GetDefinedMappingsResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.GetDefinedMappingsResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedMappingsResponse}
 */
proto.GetDefinedMappingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedMappingsResponse;
  return proto.GetDefinedMappingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedMappingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedMappingsResponse}
 */
proto.GetDefinedMappingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.GetDefinedMappingsResponse.SuccessResult;
      reader.readMessage(value,proto.GetDefinedMappingsResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.GetDefinedMappingsResponse.ErrorResult;
      reader.readMessage(value,proto.GetDefinedMappingsResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.GetDefinedMappingsResponse.FailureResult;
      reader.readMessage(value,proto.GetDefinedMappingsResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedMappingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedMappingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedMappingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.GetDefinedMappingsResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GetDefinedMappingsResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GetDefinedMappingsResponse.FailureResult.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetDefinedMappingsResponse.SuccessResult.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedMappingsResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedMappingsResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedMappingsResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    mappingsList: jspb.Message.toObjectList(msg.getMappingsList(),
    proto.Mapping.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedMappingsResponse.SuccessResult}
 */
proto.GetDefinedMappingsResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedMappingsResponse.SuccessResult;
  return proto.GetDefinedMappingsResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedMappingsResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedMappingsResponse.SuccessResult}
 */
proto.GetDefinedMappingsResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Mapping;
      reader.readMessage(value,proto.Mapping.deserializeBinaryFromReader);
      msg.addMappings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedMappingsResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedMappingsResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedMappingsResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMappingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Mapping.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Mapping mappings = 1;
 * @return {!Array<!proto.Mapping>}
 */
proto.GetDefinedMappingsResponse.SuccessResult.prototype.getMappingsList = function() {
  return /** @type{!Array<!proto.Mapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Mapping, 1));
};


/**
 * @param {!Array<!proto.Mapping>} value
 * @return {!proto.GetDefinedMappingsResponse.SuccessResult} returns this
*/
proto.GetDefinedMappingsResponse.SuccessResult.prototype.setMappingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Mapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Mapping}
 */
proto.GetDefinedMappingsResponse.SuccessResult.prototype.addMappings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Mapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetDefinedMappingsResponse.SuccessResult} returns this
 */
proto.GetDefinedMappingsResponse.SuccessResult.prototype.clearMappingsList = function() {
  return this.setMappingsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedMappingsResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedMappingsResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedMappingsResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedMappingsResponse.ErrorResult}
 */
proto.GetDefinedMappingsResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedMappingsResponse.ErrorResult;
  return proto.GetDefinedMappingsResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedMappingsResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedMappingsResponse.ErrorResult}
 */
proto.GetDefinedMappingsResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedMappingsResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedMappingsResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedMappingsResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDefinedMappingsResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDefinedMappingsResponse.ErrorResult} returns this
 */
proto.GetDefinedMappingsResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetDefinedMappingsResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.GetDefinedMappingsResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetDefinedMappingsResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetDefinedMappingsResponse.FailureResult}
 */
proto.GetDefinedMappingsResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetDefinedMappingsResponse.FailureResult;
  return proto.GetDefinedMappingsResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetDefinedMappingsResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetDefinedMappingsResponse.FailureResult}
 */
proto.GetDefinedMappingsResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetDefinedMappingsResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetDefinedMappingsResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetDefinedMappingsResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetDefinedMappingsResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.GetDefinedMappingsResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetDefinedMappingsResponse.FailureResult} returns this
 */
proto.GetDefinedMappingsResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.GetDefinedMappingsResponse.SuccessResult}
 */
proto.GetDefinedMappingsResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.GetDefinedMappingsResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedMappingsResponse.SuccessResult, 1));
};


/**
 * @param {?proto.GetDefinedMappingsResponse.SuccessResult|undefined} value
 * @return {!proto.GetDefinedMappingsResponse} returns this
*/
proto.GetDefinedMappingsResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.GetDefinedMappingsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedMappingsResponse} returns this
 */
proto.GetDefinedMappingsResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedMappingsResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.GetDefinedMappingsResponse.ErrorResult}
 */
proto.GetDefinedMappingsResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.GetDefinedMappingsResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedMappingsResponse.ErrorResult, 2));
};


/**
 * @param {?proto.GetDefinedMappingsResponse.ErrorResult|undefined} value
 * @return {!proto.GetDefinedMappingsResponse} returns this
*/
proto.GetDefinedMappingsResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.GetDefinedMappingsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedMappingsResponse} returns this
 */
proto.GetDefinedMappingsResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedMappingsResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.GetDefinedMappingsResponse.FailureResult}
 */
proto.GetDefinedMappingsResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.GetDefinedMappingsResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedMappingsResponse.FailureResult, 3));
};


/**
 * @param {?proto.GetDefinedMappingsResponse.FailureResult|undefined} value
 * @return {!proto.GetDefinedMappingsResponse} returns this
*/
proto.GetDefinedMappingsResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.GetDefinedMappingsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetDefinedMappingsResponse} returns this
 */
proto.GetDefinedMappingsResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetDefinedMappingsResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineMappingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineMappingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineMappingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapping: (f = msg.getMapping()) && proto.Mapping.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineMappingRequest}
 */
proto.DefineMappingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineMappingRequest;
  return proto.DefineMappingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineMappingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineMappingRequest}
 */
proto.DefineMappingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Mapping;
      reader.readMessage(value,proto.Mapping.deserializeBinaryFromReader);
      msg.setMapping(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineMappingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineMappingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineMappingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapping();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Mapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional Mapping mapping = 1;
 * @return {?proto.Mapping}
 */
proto.DefineMappingRequest.prototype.getMapping = function() {
  return /** @type{?proto.Mapping} */ (
    jspb.Message.getWrapperField(this, proto.Mapping, 1));
};


/**
 * @param {?proto.Mapping|undefined} value
 * @return {!proto.DefineMappingRequest} returns this
*/
proto.DefineMappingRequest.prototype.setMapping = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineMappingRequest} returns this
 */
proto.DefineMappingRequest.prototype.clearMapping = function() {
  return this.setMapping(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineMappingRequest.prototype.hasMapping = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DefineMappingResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.DefineMappingResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.DefineMappingResponse.ResultCase}
 */
proto.DefineMappingResponse.prototype.getResultCase = function() {
  return /** @type {proto.DefineMappingResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.DefineMappingResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineMappingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineMappingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineMappingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.DefineMappingResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.DefineMappingResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.DefineMappingResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineMappingResponse}
 */
proto.DefineMappingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineMappingResponse;
  return proto.DefineMappingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineMappingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineMappingResponse}
 */
proto.DefineMappingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DefineMappingResponse.SuccessResult;
      reader.readMessage(value,proto.DefineMappingResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.DefineMappingResponse.ErrorResult;
      reader.readMessage(value,proto.DefineMappingResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.DefineMappingResponse.FailureResult;
      reader.readMessage(value,proto.DefineMappingResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineMappingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineMappingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineMappingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DefineMappingResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.DefineMappingResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DefineMappingResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineMappingResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineMappingResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineMappingResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineMappingResponse.SuccessResult}
 */
proto.DefineMappingResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineMappingResponse.SuccessResult;
  return proto.DefineMappingResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineMappingResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineMappingResponse.SuccessResult}
 */
proto.DefineMappingResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineMappingResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineMappingResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineMappingResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineMappingResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineMappingResponse.SuccessResult} returns this
 */
proto.DefineMappingResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineMappingResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineMappingResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineMappingResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineMappingResponse.ErrorResult}
 */
proto.DefineMappingResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineMappingResponse.ErrorResult;
  return proto.DefineMappingResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineMappingResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineMappingResponse.ErrorResult}
 */
proto.DefineMappingResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineMappingResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineMappingResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineMappingResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineMappingResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineMappingResponse.ErrorResult} returns this
 */
proto.DefineMappingResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DefineMappingResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.DefineMappingResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DefineMappingResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DefineMappingResponse.FailureResult}
 */
proto.DefineMappingResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DefineMappingResponse.FailureResult;
  return proto.DefineMappingResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DefineMappingResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DefineMappingResponse.FailureResult}
 */
proto.DefineMappingResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DefineMappingResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DefineMappingResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DefineMappingResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DefineMappingResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.DefineMappingResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DefineMappingResponse.FailureResult} returns this
 */
proto.DefineMappingResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.DefineMappingResponse.SuccessResult}
 */
proto.DefineMappingResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.DefineMappingResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineMappingResponse.SuccessResult, 1));
};


/**
 * @param {?proto.DefineMappingResponse.SuccessResult|undefined} value
 * @return {!proto.DefineMappingResponse} returns this
*/
proto.DefineMappingResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.DefineMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineMappingResponse} returns this
 */
proto.DefineMappingResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineMappingResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.DefineMappingResponse.ErrorResult}
 */
proto.DefineMappingResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.DefineMappingResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineMappingResponse.ErrorResult, 2));
};


/**
 * @param {?proto.DefineMappingResponse.ErrorResult|undefined} value
 * @return {!proto.DefineMappingResponse} returns this
*/
proto.DefineMappingResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.DefineMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineMappingResponse} returns this
 */
proto.DefineMappingResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineMappingResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.DefineMappingResponse.FailureResult}
 */
proto.DefineMappingResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.DefineMappingResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.DefineMappingResponse.FailureResult, 3));
};


/**
 * @param {?proto.DefineMappingResponse.FailureResult|undefined} value
 * @return {!proto.DefineMappingResponse} returns this
*/
proto.DefineMappingResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.DefineMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DefineMappingResponse} returns this
 */
proto.DefineMappingResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DefineMappingResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ChangeMappingRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeMappingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeMappingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeMappingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyChordsList: jspb.Message.toObjectList(msg.getKeyChordsList(),
    proto.KeyChord.toObject, includeInstance),
    action: (f = msg.getAction()) && proto.Action.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeMappingRequest}
 */
proto.ChangeMappingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeMappingRequest;
  return proto.ChangeMappingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeMappingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeMappingRequest}
 */
proto.ChangeMappingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.KeyChord;
      reader.readMessage(value,proto.KeyChord.deserializeBinaryFromReader);
      msg.addKeyChords(value);
      break;
    case 2:
      var value = new proto.Action;
      reader.readMessage(value,proto.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeMappingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeMappingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeMappingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyChordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.KeyChord.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Action.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyChord key_chords = 1;
 * @return {!Array<!proto.KeyChord>}
 */
proto.ChangeMappingRequest.prototype.getKeyChordsList = function() {
  return /** @type{!Array<!proto.KeyChord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.KeyChord, 1));
};


/**
 * @param {!Array<!proto.KeyChord>} value
 * @return {!proto.ChangeMappingRequest} returns this
*/
proto.ChangeMappingRequest.prototype.setKeyChordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.KeyChord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.KeyChord}
 */
proto.ChangeMappingRequest.prototype.addKeyChords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.KeyChord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ChangeMappingRequest} returns this
 */
proto.ChangeMappingRequest.prototype.clearKeyChordsList = function() {
  return this.setKeyChordsList([]);
};


/**
 * optional Action action = 2;
 * @return {?proto.Action}
 */
proto.ChangeMappingRequest.prototype.getAction = function() {
  return /** @type{?proto.Action} */ (
    jspb.Message.getWrapperField(this, proto.Action, 2));
};


/**
 * @param {?proto.Action|undefined} value
 * @return {!proto.ChangeMappingRequest} returns this
*/
proto.ChangeMappingRequest.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ChangeMappingRequest} returns this
 */
proto.ChangeMappingRequest.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ChangeMappingRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ChangeMappingResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ChangeMappingResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.ChangeMappingResponse.ResultCase}
 */
proto.ChangeMappingResponse.prototype.getResultCase = function() {
  return /** @type {proto.ChangeMappingResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ChangeMappingResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeMappingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeMappingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeMappingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.ChangeMappingResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.ChangeMappingResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.ChangeMappingResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeMappingResponse}
 */
proto.ChangeMappingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeMappingResponse;
  return proto.ChangeMappingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeMappingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeMappingResponse}
 */
proto.ChangeMappingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ChangeMappingResponse.SuccessResult;
      reader.readMessage(value,proto.ChangeMappingResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.ChangeMappingResponse.ErrorResult;
      reader.readMessage(value,proto.ChangeMappingResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.ChangeMappingResponse.FailureResult;
      reader.readMessage(value,proto.ChangeMappingResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeMappingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeMappingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeMappingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ChangeMappingResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ChangeMappingResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ChangeMappingResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeMappingResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeMappingResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeMappingResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeMappingResponse.SuccessResult}
 */
proto.ChangeMappingResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeMappingResponse.SuccessResult;
  return proto.ChangeMappingResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeMappingResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeMappingResponse.SuccessResult}
 */
proto.ChangeMappingResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeMappingResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeMappingResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeMappingResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ChangeMappingResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChangeMappingResponse.SuccessResult} returns this
 */
proto.ChangeMappingResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeMappingResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeMappingResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeMappingResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeMappingResponse.ErrorResult}
 */
proto.ChangeMappingResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeMappingResponse.ErrorResult;
  return proto.ChangeMappingResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeMappingResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeMappingResponse.ErrorResult}
 */
proto.ChangeMappingResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeMappingResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeMappingResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeMappingResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ChangeMappingResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChangeMappingResponse.ErrorResult} returns this
 */
proto.ChangeMappingResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeMappingResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeMappingResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeMappingResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeMappingResponse.FailureResult}
 */
proto.ChangeMappingResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeMappingResponse.FailureResult;
  return proto.ChangeMappingResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeMappingResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeMappingResponse.FailureResult}
 */
proto.ChangeMappingResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeMappingResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeMappingResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeMappingResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeMappingResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ChangeMappingResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChangeMappingResponse.FailureResult} returns this
 */
proto.ChangeMappingResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.ChangeMappingResponse.SuccessResult}
 */
proto.ChangeMappingResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.ChangeMappingResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.ChangeMappingResponse.SuccessResult, 1));
};


/**
 * @param {?proto.ChangeMappingResponse.SuccessResult|undefined} value
 * @return {!proto.ChangeMappingResponse} returns this
*/
proto.ChangeMappingResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ChangeMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ChangeMappingResponse} returns this
 */
proto.ChangeMappingResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ChangeMappingResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.ChangeMappingResponse.ErrorResult}
 */
proto.ChangeMappingResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.ChangeMappingResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.ChangeMappingResponse.ErrorResult, 2));
};


/**
 * @param {?proto.ChangeMappingResponse.ErrorResult|undefined} value
 * @return {!proto.ChangeMappingResponse} returns this
*/
proto.ChangeMappingResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ChangeMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ChangeMappingResponse} returns this
 */
proto.ChangeMappingResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ChangeMappingResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.ChangeMappingResponse.FailureResult}
 */
proto.ChangeMappingResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.ChangeMappingResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.ChangeMappingResponse.FailureResult, 3));
};


/**
 * @param {?proto.ChangeMappingResponse.FailureResult|undefined} value
 * @return {!proto.ChangeMappingResponse} returns this
*/
proto.ChangeMappingResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ChangeMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ChangeMappingResponse} returns this
 */
proto.ChangeMappingResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ChangeMappingResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RemoveMappingRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveMappingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveMappingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveMappingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyChordsList: jspb.Message.toObjectList(msg.getKeyChordsList(),
    proto.KeyChord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveMappingRequest}
 */
proto.RemoveMappingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveMappingRequest;
  return proto.RemoveMappingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveMappingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveMappingRequest}
 */
proto.RemoveMappingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.KeyChord;
      reader.readMessage(value,proto.KeyChord.deserializeBinaryFromReader);
      msg.addKeyChords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveMappingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveMappingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveMappingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyChordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.KeyChord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyChord key_chords = 1;
 * @return {!Array<!proto.KeyChord>}
 */
proto.RemoveMappingRequest.prototype.getKeyChordsList = function() {
  return /** @type{!Array<!proto.KeyChord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.KeyChord, 1));
};


/**
 * @param {!Array<!proto.KeyChord>} value
 * @return {!proto.RemoveMappingRequest} returns this
*/
proto.RemoveMappingRequest.prototype.setKeyChordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.KeyChord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.KeyChord}
 */
proto.RemoveMappingRequest.prototype.addKeyChords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.KeyChord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RemoveMappingRequest} returns this
 */
proto.RemoveMappingRequest.prototype.clearKeyChordsList = function() {
  return this.setKeyChordsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.RemoveMappingResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.RemoveMappingResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.RemoveMappingResponse.ResultCase}
 */
proto.RemoveMappingResponse.prototype.getResultCase = function() {
  return /** @type {proto.RemoveMappingResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.RemoveMappingResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveMappingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveMappingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveMappingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.RemoveMappingResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.RemoveMappingResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.RemoveMappingResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveMappingResponse}
 */
proto.RemoveMappingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveMappingResponse;
  return proto.RemoveMappingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveMappingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveMappingResponse}
 */
proto.RemoveMappingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RemoveMappingResponse.SuccessResult;
      reader.readMessage(value,proto.RemoveMappingResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.RemoveMappingResponse.ErrorResult;
      reader.readMessage(value,proto.RemoveMappingResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.RemoveMappingResponse.FailureResult;
      reader.readMessage(value,proto.RemoveMappingResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveMappingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveMappingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveMappingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.RemoveMappingResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.RemoveMappingResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.RemoveMappingResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveMappingResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveMappingResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveMappingResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveMappingResponse.SuccessResult}
 */
proto.RemoveMappingResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveMappingResponse.SuccessResult;
  return proto.RemoveMappingResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveMappingResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveMappingResponse.SuccessResult}
 */
proto.RemoveMappingResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveMappingResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveMappingResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveMappingResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveMappingResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveMappingResponse.SuccessResult} returns this
 */
proto.RemoveMappingResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveMappingResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveMappingResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveMappingResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveMappingResponse.ErrorResult}
 */
proto.RemoveMappingResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveMappingResponse.ErrorResult;
  return proto.RemoveMappingResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveMappingResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveMappingResponse.ErrorResult}
 */
proto.RemoveMappingResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveMappingResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveMappingResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveMappingResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveMappingResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveMappingResponse.ErrorResult} returns this
 */
proto.RemoveMappingResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RemoveMappingResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.RemoveMappingResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RemoveMappingResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RemoveMappingResponse.FailureResult}
 */
proto.RemoveMappingResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RemoveMappingResponse.FailureResult;
  return proto.RemoveMappingResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RemoveMappingResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RemoveMappingResponse.FailureResult}
 */
proto.RemoveMappingResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RemoveMappingResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RemoveMappingResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RemoveMappingResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RemoveMappingResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.RemoveMappingResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RemoveMappingResponse.FailureResult} returns this
 */
proto.RemoveMappingResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.RemoveMappingResponse.SuccessResult}
 */
proto.RemoveMappingResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.RemoveMappingResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveMappingResponse.SuccessResult, 1));
};


/**
 * @param {?proto.RemoveMappingResponse.SuccessResult|undefined} value
 * @return {!proto.RemoveMappingResponse} returns this
*/
proto.RemoveMappingResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.RemoveMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveMappingResponse} returns this
 */
proto.RemoveMappingResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveMappingResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.RemoveMappingResponse.ErrorResult}
 */
proto.RemoveMappingResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.RemoveMappingResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveMappingResponse.ErrorResult, 2));
};


/**
 * @param {?proto.RemoveMappingResponse.ErrorResult|undefined} value
 * @return {!proto.RemoveMappingResponse} returns this
*/
proto.RemoveMappingResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.RemoveMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveMappingResponse} returns this
 */
proto.RemoveMappingResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveMappingResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.RemoveMappingResponse.FailureResult}
 */
proto.RemoveMappingResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.RemoveMappingResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.RemoveMappingResponse.FailureResult, 3));
};


/**
 * @param {?proto.RemoveMappingResponse.FailureResult|undefined} value
 * @return {!proto.RemoveMappingResponse} returns this
*/
proto.RemoveMappingResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.RemoveMappingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RemoveMappingResponse} returns this
 */
proto.RemoveMappingResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RemoveMappingResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IsListeningRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.IsListeningRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IsListeningRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IsListeningRequest}
 */
proto.IsListeningRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IsListeningRequest;
  return proto.IsListeningRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IsListeningRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IsListeningRequest}
 */
proto.IsListeningRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IsListeningRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IsListeningRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IsListeningRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.IsListeningResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.IsListeningResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.IsListeningResponse.ResultCase}
 */
proto.IsListeningResponse.prototype.getResultCase = function() {
  return /** @type {proto.IsListeningResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.IsListeningResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IsListeningResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.IsListeningResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IsListeningResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.IsListeningResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.IsListeningResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.IsListeningResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IsListeningResponse}
 */
proto.IsListeningResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IsListeningResponse;
  return proto.IsListeningResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IsListeningResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IsListeningResponse}
 */
proto.IsListeningResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.IsListeningResponse.SuccessResult;
      reader.readMessage(value,proto.IsListeningResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.IsListeningResponse.ErrorResult;
      reader.readMessage(value,proto.IsListeningResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.IsListeningResponse.FailureResult;
      reader.readMessage(value,proto.IsListeningResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IsListeningResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IsListeningResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IsListeningResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.IsListeningResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.IsListeningResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.IsListeningResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IsListeningResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.IsListeningResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IsListeningResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    isListening: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IsListeningResponse.SuccessResult}
 */
proto.IsListeningResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IsListeningResponse.SuccessResult;
  return proto.IsListeningResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IsListeningResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IsListeningResponse.SuccessResult}
 */
proto.IsListeningResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsListening(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IsListeningResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IsListeningResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IsListeningResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsListening();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_listening = 1;
 * @return {boolean}
 */
proto.IsListeningResponse.SuccessResult.prototype.getIsListening = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.IsListeningResponse.SuccessResult} returns this
 */
proto.IsListeningResponse.SuccessResult.prototype.setIsListening = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IsListeningResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.IsListeningResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IsListeningResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IsListeningResponse.ErrorResult}
 */
proto.IsListeningResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IsListeningResponse.ErrorResult;
  return proto.IsListeningResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IsListeningResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IsListeningResponse.ErrorResult}
 */
proto.IsListeningResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IsListeningResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IsListeningResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IsListeningResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.IsListeningResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.IsListeningResponse.ErrorResult} returns this
 */
proto.IsListeningResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IsListeningResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.IsListeningResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IsListeningResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IsListeningResponse.FailureResult}
 */
proto.IsListeningResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IsListeningResponse.FailureResult;
  return proto.IsListeningResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IsListeningResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IsListeningResponse.FailureResult}
 */
proto.IsListeningResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IsListeningResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IsListeningResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IsListeningResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IsListeningResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.IsListeningResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.IsListeningResponse.FailureResult} returns this
 */
proto.IsListeningResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.IsListeningResponse.SuccessResult}
 */
proto.IsListeningResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.IsListeningResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.IsListeningResponse.SuccessResult, 1));
};


/**
 * @param {?proto.IsListeningResponse.SuccessResult|undefined} value
 * @return {!proto.IsListeningResponse} returns this
*/
proto.IsListeningResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.IsListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.IsListeningResponse} returns this
 */
proto.IsListeningResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.IsListeningResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.IsListeningResponse.ErrorResult}
 */
proto.IsListeningResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.IsListeningResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.IsListeningResponse.ErrorResult, 2));
};


/**
 * @param {?proto.IsListeningResponse.ErrorResult|undefined} value
 * @return {!proto.IsListeningResponse} returns this
*/
proto.IsListeningResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.IsListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.IsListeningResponse} returns this
 */
proto.IsListeningResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.IsListeningResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.IsListeningResponse.FailureResult}
 */
proto.IsListeningResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.IsListeningResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.IsListeningResponse.FailureResult, 3));
};


/**
 * @param {?proto.IsListeningResponse.FailureResult|undefined} value
 * @return {!proto.IsListeningResponse} returns this
*/
proto.IsListeningResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.IsListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.IsListeningResponse} returns this
 */
proto.IsListeningResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.IsListeningResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StartListeningRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.StartListeningRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StartListeningRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StartListeningRequest}
 */
proto.StartListeningRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StartListeningRequest;
  return proto.StartListeningRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StartListeningRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StartListeningRequest}
 */
proto.StartListeningRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StartListeningRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StartListeningRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StartListeningRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.StartListeningResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.StartListeningResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.StartListeningResponse.ResultCase}
 */
proto.StartListeningResponse.prototype.getResultCase = function() {
  return /** @type {proto.StartListeningResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.StartListeningResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StartListeningResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.StartListeningResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StartListeningResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.StartListeningResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.StartListeningResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.StartListeningResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StartListeningResponse}
 */
proto.StartListeningResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StartListeningResponse;
  return proto.StartListeningResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StartListeningResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StartListeningResponse}
 */
proto.StartListeningResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.StartListeningResponse.SuccessResult;
      reader.readMessage(value,proto.StartListeningResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.StartListeningResponse.ErrorResult;
      reader.readMessage(value,proto.StartListeningResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.StartListeningResponse.FailureResult;
      reader.readMessage(value,proto.StartListeningResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StartListeningResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StartListeningResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StartListeningResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.StartListeningResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.StartListeningResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.StartListeningResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StartListeningResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.StartListeningResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StartListeningResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StartListeningResponse.SuccessResult}
 */
proto.StartListeningResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StartListeningResponse.SuccessResult;
  return proto.StartListeningResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StartListeningResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StartListeningResponse.SuccessResult}
 */
proto.StartListeningResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StartListeningResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StartListeningResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StartListeningResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.StartListeningResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StartListeningResponse.SuccessResult} returns this
 */
proto.StartListeningResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StartListeningResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.StartListeningResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StartListeningResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StartListeningResponse.ErrorResult}
 */
proto.StartListeningResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StartListeningResponse.ErrorResult;
  return proto.StartListeningResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StartListeningResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StartListeningResponse.ErrorResult}
 */
proto.StartListeningResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StartListeningResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StartListeningResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StartListeningResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.StartListeningResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StartListeningResponse.ErrorResult} returns this
 */
proto.StartListeningResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StartListeningResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.StartListeningResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StartListeningResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StartListeningResponse.FailureResult}
 */
proto.StartListeningResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StartListeningResponse.FailureResult;
  return proto.StartListeningResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StartListeningResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StartListeningResponse.FailureResult}
 */
proto.StartListeningResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StartListeningResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StartListeningResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StartListeningResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StartListeningResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.StartListeningResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StartListeningResponse.FailureResult} returns this
 */
proto.StartListeningResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.StartListeningResponse.SuccessResult}
 */
proto.StartListeningResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.StartListeningResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.StartListeningResponse.SuccessResult, 1));
};


/**
 * @param {?proto.StartListeningResponse.SuccessResult|undefined} value
 * @return {!proto.StartListeningResponse} returns this
*/
proto.StartListeningResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.StartListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StartListeningResponse} returns this
 */
proto.StartListeningResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StartListeningResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.StartListeningResponse.ErrorResult}
 */
proto.StartListeningResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.StartListeningResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.StartListeningResponse.ErrorResult, 2));
};


/**
 * @param {?proto.StartListeningResponse.ErrorResult|undefined} value
 * @return {!proto.StartListeningResponse} returns this
*/
proto.StartListeningResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.StartListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StartListeningResponse} returns this
 */
proto.StartListeningResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StartListeningResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.StartListeningResponse.FailureResult}
 */
proto.StartListeningResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.StartListeningResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.StartListeningResponse.FailureResult, 3));
};


/**
 * @param {?proto.StartListeningResponse.FailureResult|undefined} value
 * @return {!proto.StartListeningResponse} returns this
*/
proto.StartListeningResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.StartListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StartListeningResponse} returns this
 */
proto.StartListeningResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StartListeningResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StopListeningRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.StopListeningRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StopListeningRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StopListeningRequest}
 */
proto.StopListeningRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StopListeningRequest;
  return proto.StopListeningRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StopListeningRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StopListeningRequest}
 */
proto.StopListeningRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StopListeningRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StopListeningRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StopListeningRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.StopListeningResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.StopListeningResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  SUCCESS_RESULT: 1,
  ERROR_RESULT: 2,
  FAILURE_RESULT: 3
};

/**
 * @return {proto.StopListeningResponse.ResultCase}
 */
proto.StopListeningResponse.prototype.getResultCase = function() {
  return /** @type {proto.StopListeningResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.StopListeningResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StopListeningResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.StopListeningResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StopListeningResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successResult: (f = msg.getSuccessResult()) && proto.StopListeningResponse.SuccessResult.toObject(includeInstance, f),
    errorResult: (f = msg.getErrorResult()) && proto.StopListeningResponse.ErrorResult.toObject(includeInstance, f),
    failureResult: (f = msg.getFailureResult()) && proto.StopListeningResponse.FailureResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StopListeningResponse}
 */
proto.StopListeningResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StopListeningResponse;
  return proto.StopListeningResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StopListeningResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StopListeningResponse}
 */
proto.StopListeningResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.StopListeningResponse.SuccessResult;
      reader.readMessage(value,proto.StopListeningResponse.SuccessResult.deserializeBinaryFromReader);
      msg.setSuccessResult(value);
      break;
    case 2:
      var value = new proto.StopListeningResponse.ErrorResult;
      reader.readMessage(value,proto.StopListeningResponse.ErrorResult.deserializeBinaryFromReader);
      msg.setErrorResult(value);
      break;
    case 3:
      var value = new proto.StopListeningResponse.FailureResult;
      reader.readMessage(value,proto.StopListeningResponse.FailureResult.deserializeBinaryFromReader);
      msg.setFailureResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StopListeningResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StopListeningResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StopListeningResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.StopListeningResponse.SuccessResult.serializeBinaryToWriter
    );
  }
  f = message.getErrorResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.StopListeningResponse.ErrorResult.serializeBinaryToWriter
    );
  }
  f = message.getFailureResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.StopListeningResponse.FailureResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StopListeningResponse.SuccessResult.prototype.toObject = function(opt_includeInstance) {
  return proto.StopListeningResponse.SuccessResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StopListeningResponse.SuccessResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.SuccessResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StopListeningResponse.SuccessResult}
 */
proto.StopListeningResponse.SuccessResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StopListeningResponse.SuccessResult;
  return proto.StopListeningResponse.SuccessResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StopListeningResponse.SuccessResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StopListeningResponse.SuccessResult}
 */
proto.StopListeningResponse.SuccessResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StopListeningResponse.SuccessResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StopListeningResponse.SuccessResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StopListeningResponse.SuccessResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.SuccessResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.StopListeningResponse.SuccessResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StopListeningResponse.SuccessResult} returns this
 */
proto.StopListeningResponse.SuccessResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StopListeningResponse.ErrorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.StopListeningResponse.ErrorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StopListeningResponse.ErrorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.ErrorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StopListeningResponse.ErrorResult}
 */
proto.StopListeningResponse.ErrorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StopListeningResponse.ErrorResult;
  return proto.StopListeningResponse.ErrorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StopListeningResponse.ErrorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StopListeningResponse.ErrorResult}
 */
proto.StopListeningResponse.ErrorResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StopListeningResponse.ErrorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StopListeningResponse.ErrorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StopListeningResponse.ErrorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.ErrorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.StopListeningResponse.ErrorResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StopListeningResponse.ErrorResult} returns this
 */
proto.StopListeningResponse.ErrorResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StopListeningResponse.FailureResult.prototype.toObject = function(opt_includeInstance) {
  return proto.StopListeningResponse.FailureResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StopListeningResponse.FailureResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.FailureResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StopListeningResponse.FailureResult}
 */
proto.StopListeningResponse.FailureResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StopListeningResponse.FailureResult;
  return proto.StopListeningResponse.FailureResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StopListeningResponse.FailureResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StopListeningResponse.FailureResult}
 */
proto.StopListeningResponse.FailureResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StopListeningResponse.FailureResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StopListeningResponse.FailureResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StopListeningResponse.FailureResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopListeningResponse.FailureResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.StopListeningResponse.FailureResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StopListeningResponse.FailureResult} returns this
 */
proto.StopListeningResponse.FailureResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SuccessResult success_result = 1;
 * @return {?proto.StopListeningResponse.SuccessResult}
 */
proto.StopListeningResponse.prototype.getSuccessResult = function() {
  return /** @type{?proto.StopListeningResponse.SuccessResult} */ (
    jspb.Message.getWrapperField(this, proto.StopListeningResponse.SuccessResult, 1));
};


/**
 * @param {?proto.StopListeningResponse.SuccessResult|undefined} value
 * @return {!proto.StopListeningResponse} returns this
*/
proto.StopListeningResponse.prototype.setSuccessResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.StopListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StopListeningResponse} returns this
 */
proto.StopListeningResponse.prototype.clearSuccessResult = function() {
  return this.setSuccessResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StopListeningResponse.prototype.hasSuccessResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorResult error_result = 2;
 * @return {?proto.StopListeningResponse.ErrorResult}
 */
proto.StopListeningResponse.prototype.getErrorResult = function() {
  return /** @type{?proto.StopListeningResponse.ErrorResult} */ (
    jspb.Message.getWrapperField(this, proto.StopListeningResponse.ErrorResult, 2));
};


/**
 * @param {?proto.StopListeningResponse.ErrorResult|undefined} value
 * @return {!proto.StopListeningResponse} returns this
*/
proto.StopListeningResponse.prototype.setErrorResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.StopListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StopListeningResponse} returns this
 */
proto.StopListeningResponse.prototype.clearErrorResult = function() {
  return this.setErrorResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StopListeningResponse.prototype.hasErrorResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureResult failure_result = 3;
 * @return {?proto.StopListeningResponse.FailureResult}
 */
proto.StopListeningResponse.prototype.getFailureResult = function() {
  return /** @type{?proto.StopListeningResponse.FailureResult} */ (
    jspb.Message.getWrapperField(this, proto.StopListeningResponse.FailureResult, 3));
};


/**
 * @param {?proto.StopListeningResponse.FailureResult|undefined} value
 * @return {!proto.StopListeningResponse} returns this
*/
proto.StopListeningResponse.prototype.setFailureResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.StopListeningResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.StopListeningResponse} returns this
 */
proto.StopListeningResponse.prototype.clearFailureResult = function() {
  return this.setFailureResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.StopListeningResponse.prototype.hasFailureResult = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Request.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.Request.RequestCase = {
  REQUEST_NOT_SET: 0,
  HANDSHAKE_REQUEST: 1,
  GET_DEVICES_REQUEST: 2,
  EXECUTE_CODE_REQUEST: 3,
  DEFINE_DEVICE_REQUEST: 4,
  REMOVE_DEVICE_BY_PATH_REQUEST: 5,
  REMOVE_DEVICE_BY_NAME_REQUEST: 6,
  REMOVE_DEVICE_BY_ID_REQUEST: 7,
  GET_DEFINED_MODIFIERS_REQUEST: 8,
  DEFINE_MODIFIER_REQUEST: 9,
  REMOVE_MODIFIER_REQUEST: 10,
  GET_DEFINED_ACTIONS_REQUEST: 11,
  DEFINE_ACTION_REQUEST: 12,
  REMOVE_ACTION_REQUEST: 13,
  GET_DEFINED_MAPPINGS_REQUEST: 14,
  DEFINE_MAPPING_REQUEST: 15,
  CHANGE_MAPPING_REQUEST: 16,
  REMOVE_MAPPING_REQUEST: 17,
  IS_LISTENING_REQUEST: 18,
  START_LISTENING_REQUEST: 19,
  STOP_LISTENING_REQUEST: 20
};

/**
 * @return {proto.Request.RequestCase}
 */
proto.Request.prototype.getRequestCase = function() {
  return /** @type {proto.Request.RequestCase} */(jspb.Message.computeOneofCase(this, proto.Request.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    handshakeRequest: (f = msg.getHandshakeRequest()) && proto.HandshakeRequest.toObject(includeInstance, f),
    getDevicesRequest: (f = msg.getGetDevicesRequest()) && proto.GetDevicesRequest.toObject(includeInstance, f),
    executeCodeRequest: (f = msg.getExecuteCodeRequest()) && proto.ExecuteCodeRequest.toObject(includeInstance, f),
    defineDeviceRequest: (f = msg.getDefineDeviceRequest()) && proto.DefineDeviceRequest.toObject(includeInstance, f),
    removeDeviceByPathRequest: (f = msg.getRemoveDeviceByPathRequest()) && proto.RemoveDeviceByPathRequest.toObject(includeInstance, f),
    removeDeviceByNameRequest: (f = msg.getRemoveDeviceByNameRequest()) && proto.RemoveDeviceByNameRequest.toObject(includeInstance, f),
    removeDeviceByIdRequest: (f = msg.getRemoveDeviceByIdRequest()) && proto.RemoveDeviceByIdRequest.toObject(includeInstance, f),
    getDefinedModifiersRequest: (f = msg.getGetDefinedModifiersRequest()) && proto.GetDefinedModifiersRequest.toObject(includeInstance, f),
    defineModifierRequest: (f = msg.getDefineModifierRequest()) && proto.DefineModifierRequest.toObject(includeInstance, f),
    removeModifierRequest: (f = msg.getRemoveModifierRequest()) && proto.RemoveModifierRequest.toObject(includeInstance, f),
    getDefinedActionsRequest: (f = msg.getGetDefinedActionsRequest()) && proto.GetDefinedActionsRequest.toObject(includeInstance, f),
    defineActionRequest: (f = msg.getDefineActionRequest()) && proto.DefineActionRequest.toObject(includeInstance, f),
    removeActionRequest: (f = msg.getRemoveActionRequest()) && proto.RemoveActionRequest.toObject(includeInstance, f),
    getDefinedMappingsRequest: (f = msg.getGetDefinedMappingsRequest()) && proto.GetDefinedMappingsRequest.toObject(includeInstance, f),
    defineMappingRequest: (f = msg.getDefineMappingRequest()) && proto.DefineMappingRequest.toObject(includeInstance, f),
    changeMappingRequest: (f = msg.getChangeMappingRequest()) && proto.ChangeMappingRequest.toObject(includeInstance, f),
    removeMappingRequest: (f = msg.getRemoveMappingRequest()) && proto.RemoveMappingRequest.toObject(includeInstance, f),
    isListeningRequest: (f = msg.getIsListeningRequest()) && proto.IsListeningRequest.toObject(includeInstance, f),
    startListeningRequest: (f = msg.getStartListeningRequest()) && proto.StartListeningRequest.toObject(includeInstance, f),
    stopListeningRequest: (f = msg.getStopListeningRequest()) && proto.StopListeningRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Request}
 */
proto.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Request;
  return proto.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Request}
 */
proto.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.HandshakeRequest;
      reader.readMessage(value,proto.HandshakeRequest.deserializeBinaryFromReader);
      msg.setHandshakeRequest(value);
      break;
    case 2:
      var value = new proto.GetDevicesRequest;
      reader.readMessage(value,proto.GetDevicesRequest.deserializeBinaryFromReader);
      msg.setGetDevicesRequest(value);
      break;
    case 3:
      var value = new proto.ExecuteCodeRequest;
      reader.readMessage(value,proto.ExecuteCodeRequest.deserializeBinaryFromReader);
      msg.setExecuteCodeRequest(value);
      break;
    case 4:
      var value = new proto.DefineDeviceRequest;
      reader.readMessage(value,proto.DefineDeviceRequest.deserializeBinaryFromReader);
      msg.setDefineDeviceRequest(value);
      break;
    case 5:
      var value = new proto.RemoveDeviceByPathRequest;
      reader.readMessage(value,proto.RemoveDeviceByPathRequest.deserializeBinaryFromReader);
      msg.setRemoveDeviceByPathRequest(value);
      break;
    case 6:
      var value = new proto.RemoveDeviceByNameRequest;
      reader.readMessage(value,proto.RemoveDeviceByNameRequest.deserializeBinaryFromReader);
      msg.setRemoveDeviceByNameRequest(value);
      break;
    case 7:
      var value = new proto.RemoveDeviceByIdRequest;
      reader.readMessage(value,proto.RemoveDeviceByIdRequest.deserializeBinaryFromReader);
      msg.setRemoveDeviceByIdRequest(value);
      break;
    case 8:
      var value = new proto.GetDefinedModifiersRequest;
      reader.readMessage(value,proto.GetDefinedModifiersRequest.deserializeBinaryFromReader);
      msg.setGetDefinedModifiersRequest(value);
      break;
    case 9:
      var value = new proto.DefineModifierRequest;
      reader.readMessage(value,proto.DefineModifierRequest.deserializeBinaryFromReader);
      msg.setDefineModifierRequest(value);
      break;
    case 10:
      var value = new proto.RemoveModifierRequest;
      reader.readMessage(value,proto.RemoveModifierRequest.deserializeBinaryFromReader);
      msg.setRemoveModifierRequest(value);
      break;
    case 11:
      var value = new proto.GetDefinedActionsRequest;
      reader.readMessage(value,proto.GetDefinedActionsRequest.deserializeBinaryFromReader);
      msg.setGetDefinedActionsRequest(value);
      break;
    case 12:
      var value = new proto.DefineActionRequest;
      reader.readMessage(value,proto.DefineActionRequest.deserializeBinaryFromReader);
      msg.setDefineActionRequest(value);
      break;
    case 13:
      var value = new proto.RemoveActionRequest;
      reader.readMessage(value,proto.RemoveActionRequest.deserializeBinaryFromReader);
      msg.setRemoveActionRequest(value);
      break;
    case 14:
      var value = new proto.GetDefinedMappingsRequest;
      reader.readMessage(value,proto.GetDefinedMappingsRequest.deserializeBinaryFromReader);
      msg.setGetDefinedMappingsRequest(value);
      break;
    case 15:
      var value = new proto.DefineMappingRequest;
      reader.readMessage(value,proto.DefineMappingRequest.deserializeBinaryFromReader);
      msg.setDefineMappingRequest(value);
      break;
    case 16:
      var value = new proto.ChangeMappingRequest;
      reader.readMessage(value,proto.ChangeMappingRequest.deserializeBinaryFromReader);
      msg.setChangeMappingRequest(value);
      break;
    case 17:
      var value = new proto.RemoveMappingRequest;
      reader.readMessage(value,proto.RemoveMappingRequest.deserializeBinaryFromReader);
      msg.setRemoveMappingRequest(value);
      break;
    case 18:
      var value = new proto.IsListeningRequest;
      reader.readMessage(value,proto.IsListeningRequest.deserializeBinaryFromReader);
      msg.setIsListeningRequest(value);
      break;
    case 19:
      var value = new proto.StartListeningRequest;
      reader.readMessage(value,proto.StartListeningRequest.deserializeBinaryFromReader);
      msg.setStartListeningRequest(value);
      break;
    case 20:
      var value = new proto.StopListeningRequest;
      reader.readMessage(value,proto.StopListeningRequest.deserializeBinaryFromReader);
      msg.setStopListeningRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHandshakeRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HandshakeRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetDevicesRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GetDevicesRequest.serializeBinaryToWriter
    );
  }
  f = message.getExecuteCodeRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ExecuteCodeRequest.serializeBinaryToWriter
    );
  }
  f = message.getDefineDeviceRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.DefineDeviceRequest.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDeviceByPathRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.RemoveDeviceByPathRequest.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDeviceByNameRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.RemoveDeviceByNameRequest.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDeviceByIdRequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.RemoveDeviceByIdRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetDefinedModifiersRequest();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.GetDefinedModifiersRequest.serializeBinaryToWriter
    );
  }
  f = message.getDefineModifierRequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.DefineModifierRequest.serializeBinaryToWriter
    );
  }
  f = message.getRemoveModifierRequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.RemoveModifierRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetDefinedActionsRequest();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.GetDefinedActionsRequest.serializeBinaryToWriter
    );
  }
  f = message.getDefineActionRequest();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.DefineActionRequest.serializeBinaryToWriter
    );
  }
  f = message.getRemoveActionRequest();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.RemoveActionRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetDefinedMappingsRequest();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.GetDefinedMappingsRequest.serializeBinaryToWriter
    );
  }
  f = message.getDefineMappingRequest();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.DefineMappingRequest.serializeBinaryToWriter
    );
  }
  f = message.getChangeMappingRequest();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ChangeMappingRequest.serializeBinaryToWriter
    );
  }
  f = message.getRemoveMappingRequest();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.RemoveMappingRequest.serializeBinaryToWriter
    );
  }
  f = message.getIsListeningRequest();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.IsListeningRequest.serializeBinaryToWriter
    );
  }
  f = message.getStartListeningRequest();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.StartListeningRequest.serializeBinaryToWriter
    );
  }
  f = message.getStopListeningRequest();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.StopListeningRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional HandshakeRequest handshake_request = 1;
 * @return {?proto.HandshakeRequest}
 */
proto.Request.prototype.getHandshakeRequest = function() {
  return /** @type{?proto.HandshakeRequest} */ (
    jspb.Message.getWrapperField(this, proto.HandshakeRequest, 1));
};


/**
 * @param {?proto.HandshakeRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setHandshakeRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearHandshakeRequest = function() {
  return this.setHandshakeRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasHandshakeRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetDevicesRequest get_devices_request = 2;
 * @return {?proto.GetDevicesRequest}
 */
proto.Request.prototype.getGetDevicesRequest = function() {
  return /** @type{?proto.GetDevicesRequest} */ (
    jspb.Message.getWrapperField(this, proto.GetDevicesRequest, 2));
};


/**
 * @param {?proto.GetDevicesRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setGetDevicesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearGetDevicesRequest = function() {
  return this.setGetDevicesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasGetDevicesRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ExecuteCodeRequest execute_code_request = 3;
 * @return {?proto.ExecuteCodeRequest}
 */
proto.Request.prototype.getExecuteCodeRequest = function() {
  return /** @type{?proto.ExecuteCodeRequest} */ (
    jspb.Message.getWrapperField(this, proto.ExecuteCodeRequest, 3));
};


/**
 * @param {?proto.ExecuteCodeRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setExecuteCodeRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearExecuteCodeRequest = function() {
  return this.setExecuteCodeRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasExecuteCodeRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DefineDeviceRequest define_device_request = 4;
 * @return {?proto.DefineDeviceRequest}
 */
proto.Request.prototype.getDefineDeviceRequest = function() {
  return /** @type{?proto.DefineDeviceRequest} */ (
    jspb.Message.getWrapperField(this, proto.DefineDeviceRequest, 4));
};


/**
 * @param {?proto.DefineDeviceRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setDefineDeviceRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearDefineDeviceRequest = function() {
  return this.setDefineDeviceRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasDefineDeviceRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RemoveDeviceByPathRequest remove_device_by_path_request = 5;
 * @return {?proto.RemoveDeviceByPathRequest}
 */
proto.Request.prototype.getRemoveDeviceByPathRequest = function() {
  return /** @type{?proto.RemoveDeviceByPathRequest} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByPathRequest, 5));
};


/**
 * @param {?proto.RemoveDeviceByPathRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRemoveDeviceByPathRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRemoveDeviceByPathRequest = function() {
  return this.setRemoveDeviceByPathRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRemoveDeviceByPathRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RemoveDeviceByNameRequest remove_device_by_name_request = 6;
 * @return {?proto.RemoveDeviceByNameRequest}
 */
proto.Request.prototype.getRemoveDeviceByNameRequest = function() {
  return /** @type{?proto.RemoveDeviceByNameRequest} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByNameRequest, 6));
};


/**
 * @param {?proto.RemoveDeviceByNameRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRemoveDeviceByNameRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRemoveDeviceByNameRequest = function() {
  return this.setRemoveDeviceByNameRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRemoveDeviceByNameRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RemoveDeviceByIdRequest remove_device_by_id_request = 7;
 * @return {?proto.RemoveDeviceByIdRequest}
 */
proto.Request.prototype.getRemoveDeviceByIdRequest = function() {
  return /** @type{?proto.RemoveDeviceByIdRequest} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByIdRequest, 7));
};


/**
 * @param {?proto.RemoveDeviceByIdRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRemoveDeviceByIdRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRemoveDeviceByIdRequest = function() {
  return this.setRemoveDeviceByIdRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRemoveDeviceByIdRequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GetDefinedModifiersRequest get_defined_modifiers_request = 8;
 * @return {?proto.GetDefinedModifiersRequest}
 */
proto.Request.prototype.getGetDefinedModifiersRequest = function() {
  return /** @type{?proto.GetDefinedModifiersRequest} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedModifiersRequest, 8));
};


/**
 * @param {?proto.GetDefinedModifiersRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setGetDefinedModifiersRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearGetDefinedModifiersRequest = function() {
  return this.setGetDefinedModifiersRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasGetDefinedModifiersRequest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DefineModifierRequest define_modifier_request = 9;
 * @return {?proto.DefineModifierRequest}
 */
proto.Request.prototype.getDefineModifierRequest = function() {
  return /** @type{?proto.DefineModifierRequest} */ (
    jspb.Message.getWrapperField(this, proto.DefineModifierRequest, 9));
};


/**
 * @param {?proto.DefineModifierRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setDefineModifierRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearDefineModifierRequest = function() {
  return this.setDefineModifierRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasDefineModifierRequest = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RemoveModifierRequest remove_modifier_request = 10;
 * @return {?proto.RemoveModifierRequest}
 */
proto.Request.prototype.getRemoveModifierRequest = function() {
  return /** @type{?proto.RemoveModifierRequest} */ (
    jspb.Message.getWrapperField(this, proto.RemoveModifierRequest, 10));
};


/**
 * @param {?proto.RemoveModifierRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRemoveModifierRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRemoveModifierRequest = function() {
  return this.setRemoveModifierRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRemoveModifierRequest = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GetDefinedActionsRequest get_defined_actions_request = 11;
 * @return {?proto.GetDefinedActionsRequest}
 */
proto.Request.prototype.getGetDefinedActionsRequest = function() {
  return /** @type{?proto.GetDefinedActionsRequest} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedActionsRequest, 11));
};


/**
 * @param {?proto.GetDefinedActionsRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setGetDefinedActionsRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearGetDefinedActionsRequest = function() {
  return this.setGetDefinedActionsRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasGetDefinedActionsRequest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DefineActionRequest define_action_request = 12;
 * @return {?proto.DefineActionRequest}
 */
proto.Request.prototype.getDefineActionRequest = function() {
  return /** @type{?proto.DefineActionRequest} */ (
    jspb.Message.getWrapperField(this, proto.DefineActionRequest, 12));
};


/**
 * @param {?proto.DefineActionRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setDefineActionRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearDefineActionRequest = function() {
  return this.setDefineActionRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasDefineActionRequest = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RemoveActionRequest remove_action_request = 13;
 * @return {?proto.RemoveActionRequest}
 */
proto.Request.prototype.getRemoveActionRequest = function() {
  return /** @type{?proto.RemoveActionRequest} */ (
    jspb.Message.getWrapperField(this, proto.RemoveActionRequest, 13));
};


/**
 * @param {?proto.RemoveActionRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRemoveActionRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRemoveActionRequest = function() {
  return this.setRemoveActionRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRemoveActionRequest = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional GetDefinedMappingsRequest get_defined_mappings_request = 14;
 * @return {?proto.GetDefinedMappingsRequest}
 */
proto.Request.prototype.getGetDefinedMappingsRequest = function() {
  return /** @type{?proto.GetDefinedMappingsRequest} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedMappingsRequest, 14));
};


/**
 * @param {?proto.GetDefinedMappingsRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setGetDefinedMappingsRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearGetDefinedMappingsRequest = function() {
  return this.setGetDefinedMappingsRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasGetDefinedMappingsRequest = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional DefineMappingRequest define_mapping_request = 15;
 * @return {?proto.DefineMappingRequest}
 */
proto.Request.prototype.getDefineMappingRequest = function() {
  return /** @type{?proto.DefineMappingRequest} */ (
    jspb.Message.getWrapperField(this, proto.DefineMappingRequest, 15));
};


/**
 * @param {?proto.DefineMappingRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setDefineMappingRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearDefineMappingRequest = function() {
  return this.setDefineMappingRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasDefineMappingRequest = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ChangeMappingRequest change_mapping_request = 16;
 * @return {?proto.ChangeMappingRequest}
 */
proto.Request.prototype.getChangeMappingRequest = function() {
  return /** @type{?proto.ChangeMappingRequest} */ (
    jspb.Message.getWrapperField(this, proto.ChangeMappingRequest, 16));
};


/**
 * @param {?proto.ChangeMappingRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setChangeMappingRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearChangeMappingRequest = function() {
  return this.setChangeMappingRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasChangeMappingRequest = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RemoveMappingRequest remove_mapping_request = 17;
 * @return {?proto.RemoveMappingRequest}
 */
proto.Request.prototype.getRemoveMappingRequest = function() {
  return /** @type{?proto.RemoveMappingRequest} */ (
    jspb.Message.getWrapperField(this, proto.RemoveMappingRequest, 17));
};


/**
 * @param {?proto.RemoveMappingRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setRemoveMappingRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearRemoveMappingRequest = function() {
  return this.setRemoveMappingRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasRemoveMappingRequest = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional IsListeningRequest is_listening_request = 18;
 * @return {?proto.IsListeningRequest}
 */
proto.Request.prototype.getIsListeningRequest = function() {
  return /** @type{?proto.IsListeningRequest} */ (
    jspb.Message.getWrapperField(this, proto.IsListeningRequest, 18));
};


/**
 * @param {?proto.IsListeningRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setIsListeningRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearIsListeningRequest = function() {
  return this.setIsListeningRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasIsListeningRequest = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional StartListeningRequest start_listening_request = 19;
 * @return {?proto.StartListeningRequest}
 */
proto.Request.prototype.getStartListeningRequest = function() {
  return /** @type{?proto.StartListeningRequest} */ (
    jspb.Message.getWrapperField(this, proto.StartListeningRequest, 19));
};


/**
 * @param {?proto.StartListeningRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setStartListeningRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearStartListeningRequest = function() {
  return this.setStartListeningRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasStartListeningRequest = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional StopListeningRequest stop_listening_request = 20;
 * @return {?proto.StopListeningRequest}
 */
proto.Request.prototype.getStopListeningRequest = function() {
  return /** @type{?proto.StopListeningRequest} */ (
    jspb.Message.getWrapperField(this, proto.StopListeningRequest, 20));
};


/**
 * @param {?proto.StopListeningRequest|undefined} value
 * @return {!proto.Request} returns this
*/
proto.Request.prototype.setStopListeningRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Request} returns this
 */
proto.Request.prototype.clearStopListeningRequest = function() {
  return this.setStopListeningRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Request.prototype.hasStopListeningRequest = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Response.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.Response.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  HANDSHAKE_RESPONSE: 1,
  GET_DEVICES_RESPONSE: 2,
  EXECUTE_CODE_RESPONSE: 3,
  DEFINE_DEVICE_RESPONSE: 4,
  REMOVE_DEVICE_BY_PATH_RESPONSE: 5,
  REMOVE_DEVICE_BY_NAME_RESPONSE: 6,
  REMOVE_DEVICE_BY_ID_RESPONSE: 7,
  GET_DEFINED_MODIFIERS_RESPONSE: 8,
  DEFINE_MODIFIER_RESPONSE: 9,
  REMOVE_MODIFIER_RESPONSE: 10,
  GET_DEFINED_ACTIONS_RESPONSE: 11,
  DEFINE_ACTION_RESPONSE: 12,
  REMOVE_ACTION_RESPONSE: 13,
  GET_DEFINED_MAPPINGS_RESPONSE: 14,
  DEFINE_MAPPING_RESPONSE: 15,
  CHANGE_MAPPING_RESPONSE: 16,
  REMOVE_MAPPING_RESPONSE: 17,
  IS_LISTENING_RESPONSE: 18,
  START_LISTENING_RESPONSE: 19,
  STOP_LISTENING_RESPONSE: 20
};

/**
 * @return {proto.Response.ResponseCase}
 */
proto.Response.prototype.getResponseCase = function() {
  return /** @type {proto.Response.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.Response.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    handshakeResponse: (f = msg.getHandshakeResponse()) && proto.HandshakeResponse.toObject(includeInstance, f),
    getDevicesResponse: (f = msg.getGetDevicesResponse()) && proto.GetDevicesResponse.toObject(includeInstance, f),
    executeCodeResponse: (f = msg.getExecuteCodeResponse()) && proto.ExecuteCodeResponse.toObject(includeInstance, f),
    defineDeviceResponse: (f = msg.getDefineDeviceResponse()) && proto.DefineDeviceResponse.toObject(includeInstance, f),
    removeDeviceByPathResponse: (f = msg.getRemoveDeviceByPathResponse()) && proto.RemoveDeviceByPathResponse.toObject(includeInstance, f),
    removeDeviceByNameResponse: (f = msg.getRemoveDeviceByNameResponse()) && proto.RemoveDeviceByNameResponse.toObject(includeInstance, f),
    removeDeviceByIdResponse: (f = msg.getRemoveDeviceByIdResponse()) && proto.RemoveDeviceByIdResponse.toObject(includeInstance, f),
    getDefinedModifiersResponse: (f = msg.getGetDefinedModifiersResponse()) && proto.GetDefinedModifiersResponse.toObject(includeInstance, f),
    defineModifierResponse: (f = msg.getDefineModifierResponse()) && proto.DefineModifierResponse.toObject(includeInstance, f),
    removeModifierResponse: (f = msg.getRemoveModifierResponse()) && proto.RemoveModifierResponse.toObject(includeInstance, f),
    getDefinedActionsResponse: (f = msg.getGetDefinedActionsResponse()) && proto.GetDefinedActionsResponse.toObject(includeInstance, f),
    defineActionResponse: (f = msg.getDefineActionResponse()) && proto.DefineActionResponse.toObject(includeInstance, f),
    removeActionResponse: (f = msg.getRemoveActionResponse()) && proto.RemoveActionResponse.toObject(includeInstance, f),
    getDefinedMappingsResponse: (f = msg.getGetDefinedMappingsResponse()) && proto.GetDefinedMappingsResponse.toObject(includeInstance, f),
    defineMappingResponse: (f = msg.getDefineMappingResponse()) && proto.DefineMappingResponse.toObject(includeInstance, f),
    changeMappingResponse: (f = msg.getChangeMappingResponse()) && proto.ChangeMappingResponse.toObject(includeInstance, f),
    removeMappingResponse: (f = msg.getRemoveMappingResponse()) && proto.RemoveMappingResponse.toObject(includeInstance, f),
    isListeningResponse: (f = msg.getIsListeningResponse()) && proto.IsListeningResponse.toObject(includeInstance, f),
    startListeningResponse: (f = msg.getStartListeningResponse()) && proto.StartListeningResponse.toObject(includeInstance, f),
    stopListeningResponse: (f = msg.getStopListeningResponse()) && proto.StopListeningResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Response}
 */
proto.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Response;
  return proto.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Response}
 */
proto.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.HandshakeResponse;
      reader.readMessage(value,proto.HandshakeResponse.deserializeBinaryFromReader);
      msg.setHandshakeResponse(value);
      break;
    case 2:
      var value = new proto.GetDevicesResponse;
      reader.readMessage(value,proto.GetDevicesResponse.deserializeBinaryFromReader);
      msg.setGetDevicesResponse(value);
      break;
    case 3:
      var value = new proto.ExecuteCodeResponse;
      reader.readMessage(value,proto.ExecuteCodeResponse.deserializeBinaryFromReader);
      msg.setExecuteCodeResponse(value);
      break;
    case 4:
      var value = new proto.DefineDeviceResponse;
      reader.readMessage(value,proto.DefineDeviceResponse.deserializeBinaryFromReader);
      msg.setDefineDeviceResponse(value);
      break;
    case 5:
      var value = new proto.RemoveDeviceByPathResponse;
      reader.readMessage(value,proto.RemoveDeviceByPathResponse.deserializeBinaryFromReader);
      msg.setRemoveDeviceByPathResponse(value);
      break;
    case 6:
      var value = new proto.RemoveDeviceByNameResponse;
      reader.readMessage(value,proto.RemoveDeviceByNameResponse.deserializeBinaryFromReader);
      msg.setRemoveDeviceByNameResponse(value);
      break;
    case 7:
      var value = new proto.RemoveDeviceByIdResponse;
      reader.readMessage(value,proto.RemoveDeviceByIdResponse.deserializeBinaryFromReader);
      msg.setRemoveDeviceByIdResponse(value);
      break;
    case 8:
      var value = new proto.GetDefinedModifiersResponse;
      reader.readMessage(value,proto.GetDefinedModifiersResponse.deserializeBinaryFromReader);
      msg.setGetDefinedModifiersResponse(value);
      break;
    case 9:
      var value = new proto.DefineModifierResponse;
      reader.readMessage(value,proto.DefineModifierResponse.deserializeBinaryFromReader);
      msg.setDefineModifierResponse(value);
      break;
    case 10:
      var value = new proto.RemoveModifierResponse;
      reader.readMessage(value,proto.RemoveModifierResponse.deserializeBinaryFromReader);
      msg.setRemoveModifierResponse(value);
      break;
    case 11:
      var value = new proto.GetDefinedActionsResponse;
      reader.readMessage(value,proto.GetDefinedActionsResponse.deserializeBinaryFromReader);
      msg.setGetDefinedActionsResponse(value);
      break;
    case 12:
      var value = new proto.DefineActionResponse;
      reader.readMessage(value,proto.DefineActionResponse.deserializeBinaryFromReader);
      msg.setDefineActionResponse(value);
      break;
    case 13:
      var value = new proto.RemoveActionResponse;
      reader.readMessage(value,proto.RemoveActionResponse.deserializeBinaryFromReader);
      msg.setRemoveActionResponse(value);
      break;
    case 14:
      var value = new proto.GetDefinedMappingsResponse;
      reader.readMessage(value,proto.GetDefinedMappingsResponse.deserializeBinaryFromReader);
      msg.setGetDefinedMappingsResponse(value);
      break;
    case 15:
      var value = new proto.DefineMappingResponse;
      reader.readMessage(value,proto.DefineMappingResponse.deserializeBinaryFromReader);
      msg.setDefineMappingResponse(value);
      break;
    case 16:
      var value = new proto.ChangeMappingResponse;
      reader.readMessage(value,proto.ChangeMappingResponse.deserializeBinaryFromReader);
      msg.setChangeMappingResponse(value);
      break;
    case 17:
      var value = new proto.RemoveMappingResponse;
      reader.readMessage(value,proto.RemoveMappingResponse.deserializeBinaryFromReader);
      msg.setRemoveMappingResponse(value);
      break;
    case 18:
      var value = new proto.IsListeningResponse;
      reader.readMessage(value,proto.IsListeningResponse.deserializeBinaryFromReader);
      msg.setIsListeningResponse(value);
      break;
    case 19:
      var value = new proto.StartListeningResponse;
      reader.readMessage(value,proto.StartListeningResponse.deserializeBinaryFromReader);
      msg.setStartListeningResponse(value);
      break;
    case 20:
      var value = new proto.StopListeningResponse;
      reader.readMessage(value,proto.StopListeningResponse.deserializeBinaryFromReader);
      msg.setStopListeningResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHandshakeResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.HandshakeResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetDevicesResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GetDevicesResponse.serializeBinaryToWriter
    );
  }
  f = message.getExecuteCodeResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ExecuteCodeResponse.serializeBinaryToWriter
    );
  }
  f = message.getDefineDeviceResponse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.DefineDeviceResponse.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDeviceByPathResponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.RemoveDeviceByPathResponse.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDeviceByNameResponse();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.RemoveDeviceByNameResponse.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDeviceByIdResponse();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.RemoveDeviceByIdResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetDefinedModifiersResponse();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.GetDefinedModifiersResponse.serializeBinaryToWriter
    );
  }
  f = message.getDefineModifierResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.DefineModifierResponse.serializeBinaryToWriter
    );
  }
  f = message.getRemoveModifierResponse();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.RemoveModifierResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetDefinedActionsResponse();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.GetDefinedActionsResponse.serializeBinaryToWriter
    );
  }
  f = message.getDefineActionResponse();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.DefineActionResponse.serializeBinaryToWriter
    );
  }
  f = message.getRemoveActionResponse();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.RemoveActionResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetDefinedMappingsResponse();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.GetDefinedMappingsResponse.serializeBinaryToWriter
    );
  }
  f = message.getDefineMappingResponse();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.DefineMappingResponse.serializeBinaryToWriter
    );
  }
  f = message.getChangeMappingResponse();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ChangeMappingResponse.serializeBinaryToWriter
    );
  }
  f = message.getRemoveMappingResponse();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.RemoveMappingResponse.serializeBinaryToWriter
    );
  }
  f = message.getIsListeningResponse();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.IsListeningResponse.serializeBinaryToWriter
    );
  }
  f = message.getStartListeningResponse();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.StartListeningResponse.serializeBinaryToWriter
    );
  }
  f = message.getStopListeningResponse();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.StopListeningResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional HandshakeResponse handshake_response = 1;
 * @return {?proto.HandshakeResponse}
 */
proto.Response.prototype.getHandshakeResponse = function() {
  return /** @type{?proto.HandshakeResponse} */ (
    jspb.Message.getWrapperField(this, proto.HandshakeResponse, 1));
};


/**
 * @param {?proto.HandshakeResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setHandshakeResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearHandshakeResponse = function() {
  return this.setHandshakeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasHandshakeResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetDevicesResponse get_devices_response = 2;
 * @return {?proto.GetDevicesResponse}
 */
proto.Response.prototype.getGetDevicesResponse = function() {
  return /** @type{?proto.GetDevicesResponse} */ (
    jspb.Message.getWrapperField(this, proto.GetDevicesResponse, 2));
};


/**
 * @param {?proto.GetDevicesResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setGetDevicesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearGetDevicesResponse = function() {
  return this.setGetDevicesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasGetDevicesResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ExecuteCodeResponse execute_code_response = 3;
 * @return {?proto.ExecuteCodeResponse}
 */
proto.Response.prototype.getExecuteCodeResponse = function() {
  return /** @type{?proto.ExecuteCodeResponse} */ (
    jspb.Message.getWrapperField(this, proto.ExecuteCodeResponse, 3));
};


/**
 * @param {?proto.ExecuteCodeResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setExecuteCodeResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearExecuteCodeResponse = function() {
  return this.setExecuteCodeResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasExecuteCodeResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DefineDeviceResponse define_device_response = 4;
 * @return {?proto.DefineDeviceResponse}
 */
proto.Response.prototype.getDefineDeviceResponse = function() {
  return /** @type{?proto.DefineDeviceResponse} */ (
    jspb.Message.getWrapperField(this, proto.DefineDeviceResponse, 4));
};


/**
 * @param {?proto.DefineDeviceResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setDefineDeviceResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearDefineDeviceResponse = function() {
  return this.setDefineDeviceResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasDefineDeviceResponse = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RemoveDeviceByPathResponse remove_device_by_path_response = 5;
 * @return {?proto.RemoveDeviceByPathResponse}
 */
proto.Response.prototype.getRemoveDeviceByPathResponse = function() {
  return /** @type{?proto.RemoveDeviceByPathResponse} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByPathResponse, 5));
};


/**
 * @param {?proto.RemoveDeviceByPathResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRemoveDeviceByPathResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRemoveDeviceByPathResponse = function() {
  return this.setRemoveDeviceByPathResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRemoveDeviceByPathResponse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RemoveDeviceByNameResponse remove_device_by_name_response = 6;
 * @return {?proto.RemoveDeviceByNameResponse}
 */
proto.Response.prototype.getRemoveDeviceByNameResponse = function() {
  return /** @type{?proto.RemoveDeviceByNameResponse} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByNameResponse, 6));
};


/**
 * @param {?proto.RemoveDeviceByNameResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRemoveDeviceByNameResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRemoveDeviceByNameResponse = function() {
  return this.setRemoveDeviceByNameResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRemoveDeviceByNameResponse = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RemoveDeviceByIdResponse remove_device_by_id_response = 7;
 * @return {?proto.RemoveDeviceByIdResponse}
 */
proto.Response.prototype.getRemoveDeviceByIdResponse = function() {
  return /** @type{?proto.RemoveDeviceByIdResponse} */ (
    jspb.Message.getWrapperField(this, proto.RemoveDeviceByIdResponse, 7));
};


/**
 * @param {?proto.RemoveDeviceByIdResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRemoveDeviceByIdResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRemoveDeviceByIdResponse = function() {
  return this.setRemoveDeviceByIdResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRemoveDeviceByIdResponse = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GetDefinedModifiersResponse get_defined_modifiers_response = 8;
 * @return {?proto.GetDefinedModifiersResponse}
 */
proto.Response.prototype.getGetDefinedModifiersResponse = function() {
  return /** @type{?proto.GetDefinedModifiersResponse} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedModifiersResponse, 8));
};


/**
 * @param {?proto.GetDefinedModifiersResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setGetDefinedModifiersResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearGetDefinedModifiersResponse = function() {
  return this.setGetDefinedModifiersResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasGetDefinedModifiersResponse = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DefineModifierResponse define_modifier_response = 9;
 * @return {?proto.DefineModifierResponse}
 */
proto.Response.prototype.getDefineModifierResponse = function() {
  return /** @type{?proto.DefineModifierResponse} */ (
    jspb.Message.getWrapperField(this, proto.DefineModifierResponse, 9));
};


/**
 * @param {?proto.DefineModifierResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setDefineModifierResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearDefineModifierResponse = function() {
  return this.setDefineModifierResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasDefineModifierResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RemoveModifierResponse remove_modifier_response = 10;
 * @return {?proto.RemoveModifierResponse}
 */
proto.Response.prototype.getRemoveModifierResponse = function() {
  return /** @type{?proto.RemoveModifierResponse} */ (
    jspb.Message.getWrapperField(this, proto.RemoveModifierResponse, 10));
};


/**
 * @param {?proto.RemoveModifierResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRemoveModifierResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRemoveModifierResponse = function() {
  return this.setRemoveModifierResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRemoveModifierResponse = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GetDefinedActionsResponse get_defined_actions_response = 11;
 * @return {?proto.GetDefinedActionsResponse}
 */
proto.Response.prototype.getGetDefinedActionsResponse = function() {
  return /** @type{?proto.GetDefinedActionsResponse} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedActionsResponse, 11));
};


/**
 * @param {?proto.GetDefinedActionsResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setGetDefinedActionsResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearGetDefinedActionsResponse = function() {
  return this.setGetDefinedActionsResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasGetDefinedActionsResponse = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DefineActionResponse define_action_response = 12;
 * @return {?proto.DefineActionResponse}
 */
proto.Response.prototype.getDefineActionResponse = function() {
  return /** @type{?proto.DefineActionResponse} */ (
    jspb.Message.getWrapperField(this, proto.DefineActionResponse, 12));
};


/**
 * @param {?proto.DefineActionResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setDefineActionResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearDefineActionResponse = function() {
  return this.setDefineActionResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasDefineActionResponse = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RemoveActionResponse remove_action_response = 13;
 * @return {?proto.RemoveActionResponse}
 */
proto.Response.prototype.getRemoveActionResponse = function() {
  return /** @type{?proto.RemoveActionResponse} */ (
    jspb.Message.getWrapperField(this, proto.RemoveActionResponse, 13));
};


/**
 * @param {?proto.RemoveActionResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRemoveActionResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRemoveActionResponse = function() {
  return this.setRemoveActionResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRemoveActionResponse = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional GetDefinedMappingsResponse get_defined_mappings_response = 14;
 * @return {?proto.GetDefinedMappingsResponse}
 */
proto.Response.prototype.getGetDefinedMappingsResponse = function() {
  return /** @type{?proto.GetDefinedMappingsResponse} */ (
    jspb.Message.getWrapperField(this, proto.GetDefinedMappingsResponse, 14));
};


/**
 * @param {?proto.GetDefinedMappingsResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setGetDefinedMappingsResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearGetDefinedMappingsResponse = function() {
  return this.setGetDefinedMappingsResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasGetDefinedMappingsResponse = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional DefineMappingResponse define_mapping_response = 15;
 * @return {?proto.DefineMappingResponse}
 */
proto.Response.prototype.getDefineMappingResponse = function() {
  return /** @type{?proto.DefineMappingResponse} */ (
    jspb.Message.getWrapperField(this, proto.DefineMappingResponse, 15));
};


/**
 * @param {?proto.DefineMappingResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setDefineMappingResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearDefineMappingResponse = function() {
  return this.setDefineMappingResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasDefineMappingResponse = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ChangeMappingResponse change_mapping_response = 16;
 * @return {?proto.ChangeMappingResponse}
 */
proto.Response.prototype.getChangeMappingResponse = function() {
  return /** @type{?proto.ChangeMappingResponse} */ (
    jspb.Message.getWrapperField(this, proto.ChangeMappingResponse, 16));
};


/**
 * @param {?proto.ChangeMappingResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setChangeMappingResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearChangeMappingResponse = function() {
  return this.setChangeMappingResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasChangeMappingResponse = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RemoveMappingResponse remove_mapping_response = 17;
 * @return {?proto.RemoveMappingResponse}
 */
proto.Response.prototype.getRemoveMappingResponse = function() {
  return /** @type{?proto.RemoveMappingResponse} */ (
    jspb.Message.getWrapperField(this, proto.RemoveMappingResponse, 17));
};


/**
 * @param {?proto.RemoveMappingResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setRemoveMappingResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearRemoveMappingResponse = function() {
  return this.setRemoveMappingResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasRemoveMappingResponse = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional IsListeningResponse is_listening_response = 18;
 * @return {?proto.IsListeningResponse}
 */
proto.Response.prototype.getIsListeningResponse = function() {
  return /** @type{?proto.IsListeningResponse} */ (
    jspb.Message.getWrapperField(this, proto.IsListeningResponse, 18));
};


/**
 * @param {?proto.IsListeningResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setIsListeningResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearIsListeningResponse = function() {
  return this.setIsListeningResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasIsListeningResponse = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional StartListeningResponse start_listening_response = 19;
 * @return {?proto.StartListeningResponse}
 */
proto.Response.prototype.getStartListeningResponse = function() {
  return /** @type{?proto.StartListeningResponse} */ (
    jspb.Message.getWrapperField(this, proto.StartListeningResponse, 19));
};


/**
 * @param {?proto.StartListeningResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setStartListeningResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearStartListeningResponse = function() {
  return this.setStartListeningResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasStartListeningResponse = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional StopListeningResponse stop_listening_response = 20;
 * @return {?proto.StopListeningResponse}
 */
proto.Response.prototype.getStopListeningResponse = function() {
  return /** @type{?proto.StopListeningResponse} */ (
    jspb.Message.getWrapperField(this, proto.StopListeningResponse, 20));
};


/**
 * @param {?proto.StopListeningResponse|undefined} value
 * @return {!proto.Response} returns this
*/
proto.Response.prototype.setStopListeningResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Response} returns this
 */
proto.Response.prototype.clearStopListeningResponse = function() {
  return this.setStopListeningResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Response.prototype.hasStopListeningResponse = function() {
  return jspb.Message.getField(this, 20) != null;
};


goog.object.extend(exports, proto);
