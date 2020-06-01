// package: 
// file: protos/protocol.proto

import * as jspb from "google-protobuf";

export class ActionKeyPress extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionKeyPress.AsObject;
  static toObject(includeInstance: boolean, msg: ActionKeyPress): ActionKeyPress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionKeyPress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionKeyPress;
  static deserializeBinaryFromReader(message: ActionKeyPress, reader: jspb.BinaryReader): ActionKeyPress;
}

export namespace ActionKeyPress {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionKeyClick): ActionKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionKeyClick;
  static deserializeBinaryFromReader(message: ActionKeyClick, reader: jspb.BinaryReader): ActionKeyClick;
}

export namespace ActionKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionKeyRelease extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionKeyRelease.AsObject;
  static toObject(includeInstance: boolean, msg: ActionKeyRelease): ActionKeyRelease.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionKeyRelease, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionKeyRelease;
  static deserializeBinaryFromReader(message: ActionKeyRelease, reader: jspb.BinaryReader): ActionKeyRelease;
}

export namespace ActionKeyRelease {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionMouseButtonPress extends jspb.Message {
  getButtonCode(): number;
  setButtonCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionMouseButtonPress.AsObject;
  static toObject(includeInstance: boolean, msg: ActionMouseButtonPress): ActionMouseButtonPress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionMouseButtonPress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionMouseButtonPress;
  static deserializeBinaryFromReader(message: ActionMouseButtonPress, reader: jspb.BinaryReader): ActionMouseButtonPress;
}

export namespace ActionMouseButtonPress {
  export type AsObject = {
    buttonCode: number,
  }
}

export class ActionMouseButtonClick extends jspb.Message {
  getButtonCode(): number;
  setButtonCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionMouseButtonClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionMouseButtonClick): ActionMouseButtonClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionMouseButtonClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionMouseButtonClick;
  static deserializeBinaryFromReader(message: ActionMouseButtonClick, reader: jspb.BinaryReader): ActionMouseButtonClick;
}

export namespace ActionMouseButtonClick {
  export type AsObject = {
    buttonCode: number,
  }
}

export class ActionMouseButtonRelease extends jspb.Message {
  getButtonCode(): number;
  setButtonCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionMouseButtonRelease.AsObject;
  static toObject(includeInstance: boolean, msg: ActionMouseButtonRelease): ActionMouseButtonRelease.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionMouseButtonRelease, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionMouseButtonRelease;
  static deserializeBinaryFromReader(message: ActionMouseButtonRelease, reader: jspb.BinaryReader): ActionMouseButtonRelease;
}

export namespace ActionMouseButtonRelease {
  export type AsObject = {
    buttonCode: number,
  }
}

export class ActionTextKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionTextKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionTextKeyClick): ActionTextKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionTextKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionTextKeyClick;
  static deserializeBinaryFromReader(message: ActionTextKeyClick, reader: jspb.BinaryReader): ActionTextKeyClick;
}

export namespace ActionTextKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionNumberKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionNumberKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionNumberKeyClick): ActionNumberKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionNumberKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionNumberKeyClick;
  static deserializeBinaryFromReader(message: ActionNumberKeyClick, reader: jspb.BinaryReader): ActionNumberKeyClick;
}

export namespace ActionNumberKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionFunctionKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionFunctionKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionFunctionKeyClick): ActionFunctionKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionFunctionKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionFunctionKeyClick;
  static deserializeBinaryFromReader(message: ActionFunctionKeyClick, reader: jspb.BinaryReader): ActionFunctionKeyClick;
}

export namespace ActionFunctionKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionControlKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionControlKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionControlKeyClick): ActionControlKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionControlKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionControlKeyClick;
  static deserializeBinaryFromReader(message: ActionControlKeyClick, reader: jspb.BinaryReader): ActionControlKeyClick;
}

export namespace ActionControlKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionKPKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionKPKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionKPKeyClick): ActionKPKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionKPKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionKPKeyClick;
  static deserializeBinaryFromReader(message: ActionKPKeyClick, reader: jspb.BinaryReader): ActionKPKeyClick;
}

export namespace ActionKPKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionMultimediaKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionMultimediaKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionMultimediaKeyClick): ActionMultimediaKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionMultimediaKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionMultimediaKeyClick;
  static deserializeBinaryFromReader(message: ActionMultimediaKeyClick, reader: jspb.BinaryReader): ActionMultimediaKeyClick;
}

export namespace ActionMultimediaKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionMouseButtonKeyClick extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionMouseButtonKeyClick.AsObject;
  static toObject(includeInstance: boolean, msg: ActionMouseButtonKeyClick): ActionMouseButtonKeyClick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionMouseButtonKeyClick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionMouseButtonKeyClick;
  static deserializeBinaryFromReader(message: ActionMouseButtonKeyClick, reader: jspb.BinaryReader): ActionMouseButtonKeyClick;
}

export namespace ActionMouseButtonKeyClick {
  export type AsObject = {
    keyCode: number,
  }
}

export class ActionMouseRelativeMove extends jspb.Message {
  getDx(): number;
  setDx(value: number): void;

  getDy(): number;
  setDy(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionMouseRelativeMove.AsObject;
  static toObject(includeInstance: boolean, msg: ActionMouseRelativeMove): ActionMouseRelativeMove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionMouseRelativeMove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionMouseRelativeMove;
  static deserializeBinaryFromReader(message: ActionMouseRelativeMove, reader: jspb.BinaryReader): ActionMouseRelativeMove;
}

export namespace ActionMouseRelativeMove {
  export type AsObject = {
    dx: number,
    dy: number,
  }
}

export class ActionMouseAbsoluteMove extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionMouseAbsoluteMove.AsObject;
  static toObject(includeInstance: boolean, msg: ActionMouseAbsoluteMove): ActionMouseAbsoluteMove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionMouseAbsoluteMove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionMouseAbsoluteMove;
  static deserializeBinaryFromReader(message: ActionMouseAbsoluteMove, reader: jspb.BinaryReader): ActionMouseAbsoluteMove;
}

export namespace ActionMouseAbsoluteMove {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class ActionWait extends jspb.Message {
  getMs(): number;
  setMs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionWait.AsObject;
  static toObject(includeInstance: boolean, msg: ActionWait): ActionWait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionWait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionWait;
  static deserializeBinaryFromReader(message: ActionWait, reader: jspb.BinaryReader): ActionWait;
}

export namespace ActionWait {
  export type AsObject = {
    ms: number,
  }
}

export class ActionTextType extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionTextType.AsObject;
  static toObject(includeInstance: boolean, msg: ActionTextType): ActionTextType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionTextType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionTextType;
  static deserializeBinaryFromReader(message: ActionTextType, reader: jspb.BinaryReader): ActionTextType;
}

export namespace ActionTextType {
  export type AsObject = {
    text: string,
  }
}

export class ActionExecuteCode extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionExecuteCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionExecuteCode): ActionExecuteCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionExecuteCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionExecuteCode;
  static deserializeBinaryFromReader(message: ActionExecuteCode, reader: jspb.BinaryReader): ActionExecuteCode;
}

export namespace ActionExecuteCode {
  export type AsObject = {
    code: string,
  }
}

export class ActionExecuteFunction extends jspb.Message {
  getFunctionName(): string;
  setFunctionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionExecuteFunction.AsObject;
  static toObject(includeInstance: boolean, msg: ActionExecuteFunction): ActionExecuteFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionExecuteFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionExecuteFunction;
  static deserializeBinaryFromReader(message: ActionExecuteFunction, reader: jspb.BinaryReader): ActionExecuteFunction;
}

export namespace ActionExecuteFunction {
  export type AsObject = {
    functionName: string,
  }
}

export class ActionExecuteOSCommand extends jspb.Message {
  getOsCommand(): string;
  setOsCommand(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionExecuteOSCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ActionExecuteOSCommand): ActionExecuteOSCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionExecuteOSCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionExecuteOSCommand;
  static deserializeBinaryFromReader(message: ActionExecuteOSCommand, reader: jspb.BinaryReader): ActionExecuteOSCommand;
}

export namespace ActionExecuteOSCommand {
  export type AsObject = {
    osCommand: string,
  }
}

export class ActionExecuteNamedAction extends jspb.Message {
  getActionName(): string;
  setActionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionExecuteNamedAction.AsObject;
  static toObject(includeInstance: boolean, msg: ActionExecuteNamedAction): ActionExecuteNamedAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionExecuteNamedAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionExecuteNamedAction;
  static deserializeBinaryFromReader(message: ActionExecuteNamedAction, reader: jspb.BinaryReader): ActionExecuteNamedAction;
}

export namespace ActionExecuteNamedAction {
  export type AsObject = {
    actionName: string,
  }
}

export class Action extends jspb.Message {
  hasActionKeyPress(): boolean;
  clearActionKeyPress(): void;
  getActionKeyPress(): ActionKeyPress | undefined;
  setActionKeyPress(value?: ActionKeyPress): void;

  hasActionKeyClick(): boolean;
  clearActionKeyClick(): void;
  getActionKeyClick(): ActionKeyClick | undefined;
  setActionKeyClick(value?: ActionKeyClick): void;

  hasActionKeyRelease(): boolean;
  clearActionKeyRelease(): void;
  getActionKeyRelease(): ActionKeyRelease | undefined;
  setActionKeyRelease(value?: ActionKeyRelease): void;

  hasActionMouseButtonPress(): boolean;
  clearActionMouseButtonPress(): void;
  getActionMouseButtonPress(): ActionMouseButtonPress | undefined;
  setActionMouseButtonPress(value?: ActionMouseButtonPress): void;

  hasActionMouseButtonClick(): boolean;
  clearActionMouseButtonClick(): void;
  getActionMouseButtonClick(): ActionMouseButtonClick | undefined;
  setActionMouseButtonClick(value?: ActionMouseButtonClick): void;

  hasActionMouseButtonRelease(): boolean;
  clearActionMouseButtonRelease(): void;
  getActionMouseButtonRelease(): ActionMouseButtonRelease | undefined;
  setActionMouseButtonRelease(value?: ActionMouseButtonRelease): void;

  hasActionTextKeyClick(): boolean;
  clearActionTextKeyClick(): void;
  getActionTextKeyClick(): ActionTextKeyClick | undefined;
  setActionTextKeyClick(value?: ActionTextKeyClick): void;

  hasActionNumberKeyClick(): boolean;
  clearActionNumberKeyClick(): void;
  getActionNumberKeyClick(): ActionNumberKeyClick | undefined;
  setActionNumberKeyClick(value?: ActionNumberKeyClick): void;

  hasActionFunctionKeyClick(): boolean;
  clearActionFunctionKeyClick(): void;
  getActionFunctionKeyClick(): ActionFunctionKeyClick | undefined;
  setActionFunctionKeyClick(value?: ActionFunctionKeyClick): void;

  hasActionControlKeyClick(): boolean;
  clearActionControlKeyClick(): void;
  getActionControlKeyClick(): ActionControlKeyClick | undefined;
  setActionControlKeyClick(value?: ActionControlKeyClick): void;

  hasActionKpKeyClick(): boolean;
  clearActionKpKeyClick(): void;
  getActionKpKeyClick(): ActionKPKeyClick | undefined;
  setActionKpKeyClick(value?: ActionKPKeyClick): void;

  hasActionMultimediaKeyClick(): boolean;
  clearActionMultimediaKeyClick(): void;
  getActionMultimediaKeyClick(): ActionMultimediaKeyClick | undefined;
  setActionMultimediaKeyClick(value?: ActionMultimediaKeyClick): void;

  hasActionMouseButtonKeyClick(): boolean;
  clearActionMouseButtonKeyClick(): void;
  getActionMouseButtonKeyClick(): ActionMouseButtonKeyClick | undefined;
  setActionMouseButtonKeyClick(value?: ActionMouseButtonKeyClick): void;

  hasActionMouseRelativeMove(): boolean;
  clearActionMouseRelativeMove(): void;
  getActionMouseRelativeMove(): ActionMouseRelativeMove | undefined;
  setActionMouseRelativeMove(value?: ActionMouseRelativeMove): void;

  hasActionMouseAbsoluteMove(): boolean;
  clearActionMouseAbsoluteMove(): void;
  getActionMouseAbsoluteMove(): ActionMouseAbsoluteMove | undefined;
  setActionMouseAbsoluteMove(value?: ActionMouseAbsoluteMove): void;

  hasActionTextType(): boolean;
  clearActionTextType(): void;
  getActionTextType(): ActionTextType | undefined;
  setActionTextType(value?: ActionTextType): void;

  hasActionWait(): boolean;
  clearActionWait(): void;
  getActionWait(): ActionWait | undefined;
  setActionWait(value?: ActionWait): void;

  hasActionExecuteCode(): boolean;
  clearActionExecuteCode(): void;
  getActionExecuteCode(): ActionExecuteCode | undefined;
  setActionExecuteCode(value?: ActionExecuteCode): void;

  hasActionExecuteFunction(): boolean;
  clearActionExecuteFunction(): void;
  getActionExecuteFunction(): ActionExecuteFunction | undefined;
  setActionExecuteFunction(value?: ActionExecuteFunction): void;

  hasActionExecuteOsCommand(): boolean;
  clearActionExecuteOsCommand(): void;
  getActionExecuteOsCommand(): ActionExecuteOSCommand | undefined;
  setActionExecuteOsCommand(value?: ActionExecuteOSCommand): void;

  hasActionExecuteNamedAction(): boolean;
  clearActionExecuteNamedAction(): void;
  getActionExecuteNamedAction(): ActionExecuteNamedAction | undefined;
  setActionExecuteNamedAction(value?: ActionExecuteNamedAction): void;

  getActionCase(): Action.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    actionKeyPress?: ActionKeyPress.AsObject,
    actionKeyClick?: ActionKeyClick.AsObject,
    actionKeyRelease?: ActionKeyRelease.AsObject,
    actionMouseButtonPress?: ActionMouseButtonPress.AsObject,
    actionMouseButtonClick?: ActionMouseButtonClick.AsObject,
    actionMouseButtonRelease?: ActionMouseButtonRelease.AsObject,
    actionTextKeyClick?: ActionTextKeyClick.AsObject,
    actionNumberKeyClick?: ActionNumberKeyClick.AsObject,
    actionFunctionKeyClick?: ActionFunctionKeyClick.AsObject,
    actionControlKeyClick?: ActionControlKeyClick.AsObject,
    actionKpKeyClick?: ActionKPKeyClick.AsObject,
    actionMultimediaKeyClick?: ActionMultimediaKeyClick.AsObject,
    actionMouseButtonKeyClick?: ActionMouseButtonKeyClick.AsObject,
    actionMouseRelativeMove?: ActionMouseRelativeMove.AsObject,
    actionMouseAbsoluteMove?: ActionMouseAbsoluteMove.AsObject,
    actionTextType?: ActionTextType.AsObject,
    actionWait?: ActionWait.AsObject,
    actionExecuteCode?: ActionExecuteCode.AsObject,
    actionExecuteFunction?: ActionExecuteFunction.AsObject,
    actionExecuteOsCommand?: ActionExecuteOSCommand.AsObject,
    actionExecuteNamedAction?: ActionExecuteNamedAction.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    ACTION_KEY_PRESS = 1,
    ACTION_KEY_CLICK = 2,
    ACTION_KEY_RELEASE = 3,
    ACTION_MOUSE_BUTTON_PRESS = 4,
    ACTION_MOUSE_BUTTON_CLICK = 5,
    ACTION_MOUSE_BUTTON_RELEASE = 6,
    ACTION_TEXT_KEY_CLICK = 7,
    ACTION_NUMBER_KEY_CLICK = 8,
    ACTION_FUNCTION_KEY_CLICK = 9,
    ACTION_CONTROL_KEY_CLICK = 10,
    ACTION_KP_KEY_CLICK = 11,
    ACTION_MULTIMEDIA_KEY_CLICK = 12,
    ACTION_MOUSE_BUTTON_KEY_CLICK = 13,
    ACTION_MOUSE_RELATIVE_MOVE = 14,
    ACTION_MOUSE_ABSOLUTE_MOVE = 15,
    ACTION_TEXT_TYPE = 16,
    ACTION_WAIT = 17,
    ACTION_EXECUTE_CODE = 18,
    ACTION_EXECUTE_FUNCTION = 19,
    ACTION_EXECUTE_OS_COMMAND = 20,
    ACTION_EXECUTE_NAMED_ACTION = 21,
  }
}

export class NamedAction extends jspb.Message {
  getActionName(): string;
  setActionName(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): Action | undefined;
  setAction(value?: Action): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamedAction.AsObject;
  static toObject(includeInstance: boolean, msg: NamedAction): NamedAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamedAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamedAction;
  static deserializeBinaryFromReader(message: NamedAction, reader: jspb.BinaryReader): NamedAction;
}

export namespace NamedAction {
  export type AsObject = {
    actionName: string,
    action?: Action.AsObject,
  }
}

export class ActionList extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionList.AsObject;
  static toObject(includeInstance: boolean, msg: ActionList): ActionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionList;
  static deserializeBinaryFromReader(message: ActionList, reader: jspb.BinaryReader): ActionList;
}

export namespace ActionList {
  export type AsObject = {
    actionsList: Array<Action.AsObject>,
  }
}

export class Key1 extends jspb.Message {
  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key1.AsObject;
  static toObject(includeInstance: boolean, msg: Key1): Key1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key1;
  static deserializeBinaryFromReader(message: Key1, reader: jspb.BinaryReader): Key1;
}

export namespace Key1 {
  export type AsObject = {
    keyCode: number,
  }
}

export class Key2 extends jspb.Message {
  getDeviceId(): number;
  setDeviceId(value: number): void;

  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key2.AsObject;
  static toObject(includeInstance: boolean, msg: Key2): Key2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key2;
  static deserializeBinaryFromReader(message: Key2, reader: jspb.BinaryReader): Key2;
}

export namespace Key2 {
  export type AsObject = {
    deviceId: number,
    keyCode: number,
  }
}

export class Key extends jspb.Message {
  hasKey1(): boolean;
  clearKey1(): void;
  getKey1(): Key1 | undefined;
  setKey1(value?: Key1): void;

  hasKey2(): boolean;
  clearKey2(): void;
  getKey2(): Key2 | undefined;
  setKey2(value?: Key2): void;

  getKeyCase(): Key.KeyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    key1?: Key1.AsObject,
    key2?: Key2.AsObject,
  }

  export enum KeyCase {
    KEY_NOT_SET = 0,
    KEY_1 = 1,
    KEY_2 = 2,
  }
}

export class ModifierDescription extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): Key | undefined;
  setKey(value?: Key): void;

  getAlias(): string;
  setAlias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifierDescription.AsObject;
  static toObject(includeInstance: boolean, msg: ModifierDescription): ModifierDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifierDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifierDescription;
  static deserializeBinaryFromReader(message: ModifierDescription, reader: jspb.BinaryReader): ModifierDescription;
}

export namespace ModifierDescription {
  export type AsObject = {
    key?: Key.AsObject,
    alias: string,
  }
}

export class KeyChord extends jspb.Message {
  clearModifiersList(): void;
  getModifiersList(): Array<Key>;
  setModifiersList(value: Array<Key>): void;
  addModifiers(value?: Key, index?: number): Key;

  hasOrdinaryKey(): boolean;
  clearOrdinaryKey(): void;
  getOrdinaryKey(): Key | undefined;
  setOrdinaryKey(value?: Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyChord.AsObject;
  static toObject(includeInstance: boolean, msg: KeyChord): KeyChord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyChord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyChord;
  static deserializeBinaryFromReader(message: KeyChord, reader: jspb.BinaryReader): KeyChord;
}

export namespace KeyChord {
  export type AsObject = {
    modifiersList: Array<Key.AsObject>,
    ordinaryKey?: Key.AsObject,
  }
}

export class Mapping extends jspb.Message {
  clearKeyChordsList(): void;
  getKeyChordsList(): Array<KeyChord>;
  setKeyChordsList(value: Array<KeyChord>): void;
  addKeyChords(value?: KeyChord, index?: number): KeyChord;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): Action | undefined;
  setAction(value?: Action): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mapping.AsObject;
  static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mapping;
  static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
}

export namespace Mapping {
  export type AsObject = {
    keyChordsList: Array<KeyChord.AsObject>,
    action?: Action.AsObject,
  }
}

export class KeyDescription extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getKeyCode(): number;
  setKeyCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyDescription.AsObject;
  static toObject(includeInstance: boolean, msg: KeyDescription): KeyDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyDescription;
  static deserializeBinaryFromReader(message: KeyDescription, reader: jspb.BinaryReader): KeyDescription;
}

export namespace KeyDescription {
  export type AsObject = {
    x: number,
    y: number,
    width: number,
    height: number,
    keyCode: number,
  }
}

export class DeviceModel extends jspb.Message {
  clearKeyDescriptionsList(): void;
  getKeyDescriptionsList(): Array<KeyDescription>;
  setKeyDescriptionsList(value: Array<KeyDescription>): void;
  addKeyDescriptions(value?: KeyDescription, index?: number): KeyDescription;

  getDeviceWidth(): number;
  setDeviceWidth(value: number): void;

  getDeviceHeight(): number;
  setDeviceHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceModel.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceModel): DeviceModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceModel;
  static deserializeBinaryFromReader(message: DeviceModel, reader: jspb.BinaryReader): DeviceModel;
}

export namespace DeviceModel {
  export type AsObject = {
    keyDescriptionsList: Array<KeyDescription.AsObject>,
    deviceWidth: number,
    deviceHeight: number,
  }
}

export class DeviceInfo extends jspb.Message {
  getDeviceId(): number;
  setDeviceId(value: number): void;

  getDefined(): boolean;
  setDefined(value: boolean): void;

  getDevicePath(): string;
  setDevicePath(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  hasDeviceModel(): boolean;
  clearDeviceModel(): void;
  getDeviceModel(): DeviceModel | undefined;
  setDeviceModel(value?: DeviceModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    deviceId: number,
    defined: boolean,
    devicePath: string,
    deviceName: string,
    deviceModel?: DeviceModel.AsObject,
  }
}

export class HandshakeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandshakeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandshakeRequest): HandshakeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandshakeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandshakeRequest;
  static deserializeBinaryFromReader(message: HandshakeRequest, reader: jspb.BinaryReader): HandshakeRequest;
}

export namespace HandshakeRequest {
  export type AsObject = {
  }
}

export class HandshakeResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): HandshakeResponse.SuccessResult | undefined;
  setSuccessResult(value?: HandshakeResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): HandshakeResponse.ErrorResult | undefined;
  setErrorResult(value?: HandshakeResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): HandshakeResponse.FailureResult | undefined;
  setFailureResult(value?: HandshakeResponse.FailureResult): void;

  getResultCase(): HandshakeResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandshakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HandshakeResponse): HandshakeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandshakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandshakeResponse;
  static deserializeBinaryFromReader(message: HandshakeResponse, reader: jspb.BinaryReader): HandshakeResponse;
}

export namespace HandshakeResponse {
  export type AsObject = {
    successResult?: HandshakeResponse.SuccessResult.AsObject,
    errorResult?: HandshakeResponse.ErrorResult.AsObject,
    failureResult?: HandshakeResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): void;

    getInfo(): string;
    setInfo(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      version: string,
      info: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class GetDevicesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesRequest): GetDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesRequest;
  static deserializeBinaryFromReader(message: GetDevicesRequest, reader: jspb.BinaryReader): GetDevicesRequest;
}

export namespace GetDevicesRequest {
  export type AsObject = {
  }
}

export class GetDevicesResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): GetDevicesResponse.SuccessResult | undefined;
  setSuccessResult(value?: GetDevicesResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): GetDevicesResponse.ErrorResult | undefined;
  setErrorResult(value?: GetDevicesResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): GetDevicesResponse.FailureResult | undefined;
  setFailureResult(value?: GetDevicesResponse.FailureResult): void;

  getResultCase(): GetDevicesResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesResponse): GetDevicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesResponse;
  static deserializeBinaryFromReader(message: GetDevicesResponse, reader: jspb.BinaryReader): GetDevicesResponse;
}

export namespace GetDevicesResponse {
  export type AsObject = {
    successResult?: GetDevicesResponse.SuccessResult.AsObject,
    errorResult?: GetDevicesResponse.ErrorResult.AsObject,
    failureResult?: GetDevicesResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    clearDevicesInfoList(): void;
    getDevicesInfoList(): Array<DeviceInfo>;
    setDevicesInfoList(value: Array<DeviceInfo>): void;
    addDevicesInfo(value?: DeviceInfo, index?: number): DeviceInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      devicesInfoList: Array<DeviceInfo.AsObject>,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class ExecuteCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCodeRequest): ExecuteCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCodeRequest;
  static deserializeBinaryFromReader(message: ExecuteCodeRequest, reader: jspb.BinaryReader): ExecuteCodeRequest;
}

export namespace ExecuteCodeRequest {
  export type AsObject = {
    code: string,
  }
}

export class ExecuteCodeResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): ExecuteCodeResponse.SuccessResult | undefined;
  setSuccessResult(value?: ExecuteCodeResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): ExecuteCodeResponse.ErrorResult | undefined;
  setErrorResult(value?: ExecuteCodeResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): ExecuteCodeResponse.FailureResult | undefined;
  setFailureResult(value?: ExecuteCodeResponse.FailureResult): void;

  getResultCase(): ExecuteCodeResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteCodeResponse): ExecuteCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteCodeResponse;
  static deserializeBinaryFromReader(message: ExecuteCodeResponse, reader: jspb.BinaryReader): ExecuteCodeResponse;
}

export namespace ExecuteCodeResponse {
  export type AsObject = {
    successResult?: ExecuteCodeResponse.SuccessResult.AsObject,
    errorResult?: ExecuteCodeResponse.ErrorResult.AsObject,
    failureResult?: ExecuteCodeResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class DefineDeviceRequest extends jspb.Message {
  getDeviceId(): number;
  setDeviceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DefineDeviceRequest): DefineDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineDeviceRequest;
  static deserializeBinaryFromReader(message: DefineDeviceRequest, reader: jspb.BinaryReader): DefineDeviceRequest;
}

export namespace DefineDeviceRequest {
  export type AsObject = {
    deviceId: number,
  }
}

export class DefineDeviceResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): DefineDeviceResponse.SuccessResult | undefined;
  setSuccessResult(value?: DefineDeviceResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): DefineDeviceResponse.ErrorResult | undefined;
  setErrorResult(value?: DefineDeviceResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): DefineDeviceResponse.FailureResult | undefined;
  setFailureResult(value?: DefineDeviceResponse.FailureResult): void;

  getResultCase(): DefineDeviceResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefineDeviceResponse): DefineDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineDeviceResponse;
  static deserializeBinaryFromReader(message: DefineDeviceResponse, reader: jspb.BinaryReader): DefineDeviceResponse;
}

export namespace DefineDeviceResponse {
  export type AsObject = {
    successResult?: DefineDeviceResponse.SuccessResult.AsObject,
    errorResult?: DefineDeviceResponse.ErrorResult.AsObject,
    failureResult?: DefineDeviceResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class RemoveDeviceByPathRequest extends jspb.Message {
  getDevicePath(): string;
  setDevicePath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDeviceByPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDeviceByPathRequest): RemoveDeviceByPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDeviceByPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDeviceByPathRequest;
  static deserializeBinaryFromReader(message: RemoveDeviceByPathRequest, reader: jspb.BinaryReader): RemoveDeviceByPathRequest;
}

export namespace RemoveDeviceByPathRequest {
  export type AsObject = {
    devicePath: string,
  }
}

export class RemoveDeviceByPathResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): RemoveDeviceByPathResponse.SuccessResult | undefined;
  setSuccessResult(value?: RemoveDeviceByPathResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): RemoveDeviceByPathResponse.ErrorResult | undefined;
  setErrorResult(value?: RemoveDeviceByPathResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): RemoveDeviceByPathResponse.FailureResult | undefined;
  setFailureResult(value?: RemoveDeviceByPathResponse.FailureResult): void;

  getResultCase(): RemoveDeviceByPathResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDeviceByPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDeviceByPathResponse): RemoveDeviceByPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDeviceByPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDeviceByPathResponse;
  static deserializeBinaryFromReader(message: RemoveDeviceByPathResponse, reader: jspb.BinaryReader): RemoveDeviceByPathResponse;
}

export namespace RemoveDeviceByPathResponse {
  export type AsObject = {
    successResult?: RemoveDeviceByPathResponse.SuccessResult.AsObject,
    errorResult?: RemoveDeviceByPathResponse.ErrorResult.AsObject,
    failureResult?: RemoveDeviceByPathResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class RemoveDeviceByNameRequest extends jspb.Message {
  getDeviceName(): string;
  setDeviceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDeviceByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDeviceByNameRequest): RemoveDeviceByNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDeviceByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDeviceByNameRequest;
  static deserializeBinaryFromReader(message: RemoveDeviceByNameRequest, reader: jspb.BinaryReader): RemoveDeviceByNameRequest;
}

export namespace RemoveDeviceByNameRequest {
  export type AsObject = {
    deviceName: string,
  }
}

export class RemoveDeviceByNameResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): RemoveDeviceByNameResponse.SuccessResult | undefined;
  setSuccessResult(value?: RemoveDeviceByNameResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): RemoveDeviceByNameResponse.ErrorResult | undefined;
  setErrorResult(value?: RemoveDeviceByNameResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): RemoveDeviceByNameResponse.FailureResult | undefined;
  setFailureResult(value?: RemoveDeviceByNameResponse.FailureResult): void;

  getResultCase(): RemoveDeviceByNameResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDeviceByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDeviceByNameResponse): RemoveDeviceByNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDeviceByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDeviceByNameResponse;
  static deserializeBinaryFromReader(message: RemoveDeviceByNameResponse, reader: jspb.BinaryReader): RemoveDeviceByNameResponse;
}

export namespace RemoveDeviceByNameResponse {
  export type AsObject = {
    successResult?: RemoveDeviceByNameResponse.SuccessResult.AsObject,
    errorResult?: RemoveDeviceByNameResponse.ErrorResult.AsObject,
    failureResult?: RemoveDeviceByNameResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class RemoveDeviceByIdRequest extends jspb.Message {
  getDeviceId(): number;
  setDeviceId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDeviceByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDeviceByIdRequest): RemoveDeviceByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDeviceByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDeviceByIdRequest;
  static deserializeBinaryFromReader(message: RemoveDeviceByIdRequest, reader: jspb.BinaryReader): RemoveDeviceByIdRequest;
}

export namespace RemoveDeviceByIdRequest {
  export type AsObject = {
    deviceId: number,
  }
}

export class RemoveDeviceByIdResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): RemoveDeviceByIdResponse.SuccessResult | undefined;
  setSuccessResult(value?: RemoveDeviceByIdResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): RemoveDeviceByIdResponse.ErrorResult | undefined;
  setErrorResult(value?: RemoveDeviceByIdResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): RemoveDeviceByIdResponse.FailureResult | undefined;
  setFailureResult(value?: RemoveDeviceByIdResponse.FailureResult): void;

  getResultCase(): RemoveDeviceByIdResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDeviceByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDeviceByIdResponse): RemoveDeviceByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDeviceByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDeviceByIdResponse;
  static deserializeBinaryFromReader(message: RemoveDeviceByIdResponse, reader: jspb.BinaryReader): RemoveDeviceByIdResponse;
}

export namespace RemoveDeviceByIdResponse {
  export type AsObject = {
    successResult?: RemoveDeviceByIdResponse.SuccessResult.AsObject,
    errorResult?: RemoveDeviceByIdResponse.ErrorResult.AsObject,
    failureResult?: RemoveDeviceByIdResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class GetDefinedModifiersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefinedModifiersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefinedModifiersRequest): GetDefinedModifiersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefinedModifiersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefinedModifiersRequest;
  static deserializeBinaryFromReader(message: GetDefinedModifiersRequest, reader: jspb.BinaryReader): GetDefinedModifiersRequest;
}

export namespace GetDefinedModifiersRequest {
  export type AsObject = {
  }
}

export class GetDefinedModifiersResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): GetDefinedModifiersResponse.SuccessResult | undefined;
  setSuccessResult(value?: GetDefinedModifiersResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): GetDefinedModifiersResponse.ErrorResult | undefined;
  setErrorResult(value?: GetDefinedModifiersResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): GetDefinedModifiersResponse.FailureResult | undefined;
  setFailureResult(value?: GetDefinedModifiersResponse.FailureResult): void;

  getResultCase(): GetDefinedModifiersResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefinedModifiersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefinedModifiersResponse): GetDefinedModifiersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefinedModifiersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefinedModifiersResponse;
  static deserializeBinaryFromReader(message: GetDefinedModifiersResponse, reader: jspb.BinaryReader): GetDefinedModifiersResponse;
}

export namespace GetDefinedModifiersResponse {
  export type AsObject = {
    successResult?: GetDefinedModifiersResponse.SuccessResult.AsObject,
    errorResult?: GetDefinedModifiersResponse.ErrorResult.AsObject,
    failureResult?: GetDefinedModifiersResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    clearModifierDescriptionsList(): void;
    getModifierDescriptionsList(): Array<ModifierDescription>;
    setModifierDescriptionsList(value: Array<ModifierDescription>): void;
    addModifierDescriptions(value?: ModifierDescription, index?: number): ModifierDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      modifierDescriptionsList: Array<ModifierDescription.AsObject>,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class DefineModifierRequest extends jspb.Message {
  hasModifier(): boolean;
  clearModifier(): void;
  getModifier(): ModifierDescription | undefined;
  setModifier(value?: ModifierDescription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineModifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DefineModifierRequest): DefineModifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineModifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineModifierRequest;
  static deserializeBinaryFromReader(message: DefineModifierRequest, reader: jspb.BinaryReader): DefineModifierRequest;
}

export namespace DefineModifierRequest {
  export type AsObject = {
    modifier?: ModifierDescription.AsObject,
  }
}

export class DefineModifierResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): DefineModifierResponse.SuccessResult | undefined;
  setSuccessResult(value?: DefineModifierResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): DefineModifierResponse.ErrorResult | undefined;
  setErrorResult(value?: DefineModifierResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): DefineModifierResponse.FailureResult | undefined;
  setFailureResult(value?: DefineModifierResponse.FailureResult): void;

  getResultCase(): DefineModifierResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineModifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefineModifierResponse): DefineModifierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineModifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineModifierResponse;
  static deserializeBinaryFromReader(message: DefineModifierResponse, reader: jspb.BinaryReader): DefineModifierResponse;
}

export namespace DefineModifierResponse {
  export type AsObject = {
    successResult?: DefineModifierResponse.SuccessResult.AsObject,
    errorResult?: DefineModifierResponse.ErrorResult.AsObject,
    failureResult?: DefineModifierResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class RemoveModifierRequest extends jspb.Message {
  hasModifierKey(): boolean;
  clearModifierKey(): void;
  getModifierKey(): Key | undefined;
  setModifierKey(value?: Key): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveModifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveModifierRequest): RemoveModifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveModifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveModifierRequest;
  static deserializeBinaryFromReader(message: RemoveModifierRequest, reader: jspb.BinaryReader): RemoveModifierRequest;
}

export namespace RemoveModifierRequest {
  export type AsObject = {
    modifierKey?: Key.AsObject,
  }
}

export class RemoveModifierResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): RemoveModifierResponse.SuccessResult | undefined;
  setSuccessResult(value?: RemoveModifierResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): RemoveModifierResponse.ErrorResult | undefined;
  setErrorResult(value?: RemoveModifierResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): RemoveModifierResponse.FailureResult | undefined;
  setFailureResult(value?: RemoveModifierResponse.FailureResult): void;

  getResultCase(): RemoveModifierResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveModifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveModifierResponse): RemoveModifierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveModifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveModifierResponse;
  static deserializeBinaryFromReader(message: RemoveModifierResponse, reader: jspb.BinaryReader): RemoveModifierResponse;
}

export namespace RemoveModifierResponse {
  export type AsObject = {
    successResult?: RemoveModifierResponse.SuccessResult.AsObject,
    errorResult?: RemoveModifierResponse.ErrorResult.AsObject,
    failureResult?: RemoveModifierResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class GetDefinedActionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefinedActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefinedActionsRequest): GetDefinedActionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefinedActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefinedActionsRequest;
  static deserializeBinaryFromReader(message: GetDefinedActionsRequest, reader: jspb.BinaryReader): GetDefinedActionsRequest;
}

export namespace GetDefinedActionsRequest {
  export type AsObject = {
  }
}

export class GetDefinedActionsResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): GetDefinedActionsResponse.SuccessResult | undefined;
  setSuccessResult(value?: GetDefinedActionsResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): GetDefinedActionsResponse.ErrorResult | undefined;
  setErrorResult(value?: GetDefinedActionsResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): GetDefinedActionsResponse.FailureResult | undefined;
  setFailureResult(value?: GetDefinedActionsResponse.FailureResult): void;

  getResultCase(): GetDefinedActionsResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefinedActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefinedActionsResponse): GetDefinedActionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefinedActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefinedActionsResponse;
  static deserializeBinaryFromReader(message: GetDefinedActionsResponse, reader: jspb.BinaryReader): GetDefinedActionsResponse;
}

export namespace GetDefinedActionsResponse {
  export type AsObject = {
    successResult?: GetDefinedActionsResponse.SuccessResult.AsObject,
    errorResult?: GetDefinedActionsResponse.ErrorResult.AsObject,
    failureResult?: GetDefinedActionsResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    clearNamedActionsList(): void;
    getNamedActionsList(): Array<NamedAction>;
    setNamedActionsList(value: Array<NamedAction>): void;
    addNamedActions(value?: NamedAction, index?: number): NamedAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      namedActionsList: Array<NamedAction.AsObject>,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class DefineActionRequest extends jspb.Message {
  hasAction(): boolean;
  clearAction(): void;
  getAction(): NamedAction | undefined;
  setAction(value?: NamedAction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DefineActionRequest): DefineActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineActionRequest;
  static deserializeBinaryFromReader(message: DefineActionRequest, reader: jspb.BinaryReader): DefineActionRequest;
}

export namespace DefineActionRequest {
  export type AsObject = {
    action?: NamedAction.AsObject,
  }
}

export class DefineActionResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): DefineActionResponse.SuccessResult | undefined;
  setSuccessResult(value?: DefineActionResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): DefineActionResponse.ErrorResult | undefined;
  setErrorResult(value?: DefineActionResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): DefineActionResponse.FailureResult | undefined;
  setFailureResult(value?: DefineActionResponse.FailureResult): void;

  getResultCase(): DefineActionResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefineActionResponse): DefineActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineActionResponse;
  static deserializeBinaryFromReader(message: DefineActionResponse, reader: jspb.BinaryReader): DefineActionResponse;
}

export namespace DefineActionResponse {
  export type AsObject = {
    successResult?: DefineActionResponse.SuccessResult.AsObject,
    errorResult?: DefineActionResponse.ErrorResult.AsObject,
    failureResult?: DefineActionResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class RemoveActionRequest extends jspb.Message {
  getActionName(): string;
  setActionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveActionRequest): RemoveActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveActionRequest;
  static deserializeBinaryFromReader(message: RemoveActionRequest, reader: jspb.BinaryReader): RemoveActionRequest;
}

export namespace RemoveActionRequest {
  export type AsObject = {
    actionName: string,
  }
}

export class RemoveActionResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): RemoveActionResponse.SuccessResult | undefined;
  setSuccessResult(value?: RemoveActionResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): RemoveActionResponse.ErrorResult | undefined;
  setErrorResult(value?: RemoveActionResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): RemoveActionResponse.FailureResult | undefined;
  setFailureResult(value?: RemoveActionResponse.FailureResult): void;

  getResultCase(): RemoveActionResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveActionResponse): RemoveActionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveActionResponse;
  static deserializeBinaryFromReader(message: RemoveActionResponse, reader: jspb.BinaryReader): RemoveActionResponse;
}

export namespace RemoveActionResponse {
  export type AsObject = {
    successResult?: RemoveActionResponse.SuccessResult.AsObject,
    errorResult?: RemoveActionResponse.ErrorResult.AsObject,
    failureResult?: RemoveActionResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class GetDefinedMappingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefinedMappingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefinedMappingsRequest): GetDefinedMappingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefinedMappingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefinedMappingsRequest;
  static deserializeBinaryFromReader(message: GetDefinedMappingsRequest, reader: jspb.BinaryReader): GetDefinedMappingsRequest;
}

export namespace GetDefinedMappingsRequest {
  export type AsObject = {
  }
}

export class GetDefinedMappingsResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): GetDefinedMappingsResponse.SuccessResult | undefined;
  setSuccessResult(value?: GetDefinedMappingsResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): GetDefinedMappingsResponse.ErrorResult | undefined;
  setErrorResult(value?: GetDefinedMappingsResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): GetDefinedMappingsResponse.FailureResult | undefined;
  setFailureResult(value?: GetDefinedMappingsResponse.FailureResult): void;

  getResultCase(): GetDefinedMappingsResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefinedMappingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefinedMappingsResponse): GetDefinedMappingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefinedMappingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefinedMappingsResponse;
  static deserializeBinaryFromReader(message: GetDefinedMappingsResponse, reader: jspb.BinaryReader): GetDefinedMappingsResponse;
}

export namespace GetDefinedMappingsResponse {
  export type AsObject = {
    successResult?: GetDefinedMappingsResponse.SuccessResult.AsObject,
    errorResult?: GetDefinedMappingsResponse.ErrorResult.AsObject,
    failureResult?: GetDefinedMappingsResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    clearMappingsList(): void;
    getMappingsList(): Array<Mapping>;
    setMappingsList(value: Array<Mapping>): void;
    addMappings(value?: Mapping, index?: number): Mapping;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      mappingsList: Array<Mapping.AsObject>,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class DefineMappingRequest extends jspb.Message {
  hasMapping(): boolean;
  clearMapping(): void;
  getMapping(): Mapping | undefined;
  setMapping(value?: Mapping): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineMappingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DefineMappingRequest): DefineMappingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineMappingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineMappingRequest;
  static deserializeBinaryFromReader(message: DefineMappingRequest, reader: jspb.BinaryReader): DefineMappingRequest;
}

export namespace DefineMappingRequest {
  export type AsObject = {
    mapping?: Mapping.AsObject,
  }
}

export class DefineMappingResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): DefineMappingResponse.SuccessResult | undefined;
  setSuccessResult(value?: DefineMappingResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): DefineMappingResponse.ErrorResult | undefined;
  setErrorResult(value?: DefineMappingResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): DefineMappingResponse.FailureResult | undefined;
  setFailureResult(value?: DefineMappingResponse.FailureResult): void;

  getResultCase(): DefineMappingResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefineMappingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DefineMappingResponse): DefineMappingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefineMappingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefineMappingResponse;
  static deserializeBinaryFromReader(message: DefineMappingResponse, reader: jspb.BinaryReader): DefineMappingResponse;
}

export namespace DefineMappingResponse {
  export type AsObject = {
    successResult?: DefineMappingResponse.SuccessResult.AsObject,
    errorResult?: DefineMappingResponse.ErrorResult.AsObject,
    failureResult?: DefineMappingResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class ChangeMappingRequest extends jspb.Message {
  clearKeyChordsList(): void;
  getKeyChordsList(): Array<KeyChord>;
  setKeyChordsList(value: Array<KeyChord>): void;
  addKeyChords(value?: KeyChord, index?: number): KeyChord;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): Action | undefined;
  setAction(value?: Action): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMappingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMappingRequest): ChangeMappingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeMappingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMappingRequest;
  static deserializeBinaryFromReader(message: ChangeMappingRequest, reader: jspb.BinaryReader): ChangeMappingRequest;
}

export namespace ChangeMappingRequest {
  export type AsObject = {
    keyChordsList: Array<KeyChord.AsObject>,
    action?: Action.AsObject,
  }
}

export class ChangeMappingResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): ChangeMappingResponse.SuccessResult | undefined;
  setSuccessResult(value?: ChangeMappingResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): ChangeMappingResponse.ErrorResult | undefined;
  setErrorResult(value?: ChangeMappingResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): ChangeMappingResponse.FailureResult | undefined;
  setFailureResult(value?: ChangeMappingResponse.FailureResult): void;

  getResultCase(): ChangeMappingResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMappingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMappingResponse): ChangeMappingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeMappingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMappingResponse;
  static deserializeBinaryFromReader(message: ChangeMappingResponse, reader: jspb.BinaryReader): ChangeMappingResponse;
}

export namespace ChangeMappingResponse {
  export type AsObject = {
    successResult?: ChangeMappingResponse.SuccessResult.AsObject,
    errorResult?: ChangeMappingResponse.ErrorResult.AsObject,
    failureResult?: ChangeMappingResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class RemoveMappingRequest extends jspb.Message {
  clearKeyChordsList(): void;
  getKeyChordsList(): Array<KeyChord>;
  setKeyChordsList(value: Array<KeyChord>): void;
  addKeyChords(value?: KeyChord, index?: number): KeyChord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMappingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMappingRequest): RemoveMappingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMappingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMappingRequest;
  static deserializeBinaryFromReader(message: RemoveMappingRequest, reader: jspb.BinaryReader): RemoveMappingRequest;
}

export namespace RemoveMappingRequest {
  export type AsObject = {
    keyChordsList: Array<KeyChord.AsObject>,
  }
}

export class RemoveMappingResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): RemoveMappingResponse.SuccessResult | undefined;
  setSuccessResult(value?: RemoveMappingResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): RemoveMappingResponse.ErrorResult | undefined;
  setErrorResult(value?: RemoveMappingResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): RemoveMappingResponse.FailureResult | undefined;
  setFailureResult(value?: RemoveMappingResponse.FailureResult): void;

  getResultCase(): RemoveMappingResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMappingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMappingResponse): RemoveMappingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveMappingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMappingResponse;
  static deserializeBinaryFromReader(message: RemoveMappingResponse, reader: jspb.BinaryReader): RemoveMappingResponse;
}

export namespace RemoveMappingResponse {
  export type AsObject = {
    successResult?: RemoveMappingResponse.SuccessResult.AsObject,
    errorResult?: RemoveMappingResponse.ErrorResult.AsObject,
    failureResult?: RemoveMappingResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class IsListeningRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsListeningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsListeningRequest): IsListeningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsListeningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsListeningRequest;
  static deserializeBinaryFromReader(message: IsListeningRequest, reader: jspb.BinaryReader): IsListeningRequest;
}

export namespace IsListeningRequest {
  export type AsObject = {
  }
}

export class IsListeningResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): IsListeningResponse.SuccessResult | undefined;
  setSuccessResult(value?: IsListeningResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): IsListeningResponse.ErrorResult | undefined;
  setErrorResult(value?: IsListeningResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): IsListeningResponse.FailureResult | undefined;
  setFailureResult(value?: IsListeningResponse.FailureResult): void;

  getResultCase(): IsListeningResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsListeningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsListeningResponse): IsListeningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsListeningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsListeningResponse;
  static deserializeBinaryFromReader(message: IsListeningResponse, reader: jspb.BinaryReader): IsListeningResponse;
}

export namespace IsListeningResponse {
  export type AsObject = {
    successResult?: IsListeningResponse.SuccessResult.AsObject,
    errorResult?: IsListeningResponse.ErrorResult.AsObject,
    failureResult?: IsListeningResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getIsListening(): boolean;
    setIsListening(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      isListening: boolean,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class StartListeningRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListeningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartListeningRequest): StartListeningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartListeningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListeningRequest;
  static deserializeBinaryFromReader(message: StartListeningRequest, reader: jspb.BinaryReader): StartListeningRequest;
}

export namespace StartListeningRequest {
  export type AsObject = {
  }
}

export class StartListeningResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): StartListeningResponse.SuccessResult | undefined;
  setSuccessResult(value?: StartListeningResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): StartListeningResponse.ErrorResult | undefined;
  setErrorResult(value?: StartListeningResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): StartListeningResponse.FailureResult | undefined;
  setFailureResult(value?: StartListeningResponse.FailureResult): void;

  getResultCase(): StartListeningResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListeningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartListeningResponse): StartListeningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartListeningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListeningResponse;
  static deserializeBinaryFromReader(message: StartListeningResponse, reader: jspb.BinaryReader): StartListeningResponse;
}

export namespace StartListeningResponse {
  export type AsObject = {
    successResult?: StartListeningResponse.SuccessResult.AsObject,
    errorResult?: StartListeningResponse.ErrorResult.AsObject,
    failureResult?: StartListeningResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class StopListeningRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopListeningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopListeningRequest): StopListeningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopListeningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopListeningRequest;
  static deserializeBinaryFromReader(message: StopListeningRequest, reader: jspb.BinaryReader): StopListeningRequest;
}

export namespace StopListeningRequest {
  export type AsObject = {
  }
}

export class StopListeningResponse extends jspb.Message {
  hasSuccessResult(): boolean;
  clearSuccessResult(): void;
  getSuccessResult(): StopListeningResponse.SuccessResult | undefined;
  setSuccessResult(value?: StopListeningResponse.SuccessResult): void;

  hasErrorResult(): boolean;
  clearErrorResult(): void;
  getErrorResult(): StopListeningResponse.ErrorResult | undefined;
  setErrorResult(value?: StopListeningResponse.ErrorResult): void;

  hasFailureResult(): boolean;
  clearFailureResult(): void;
  getFailureResult(): StopListeningResponse.FailureResult | undefined;
  setFailureResult(value?: StopListeningResponse.FailureResult): void;

  getResultCase(): StopListeningResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopListeningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopListeningResponse): StopListeningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopListeningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopListeningResponse;
  static deserializeBinaryFromReader(message: StopListeningResponse, reader: jspb.BinaryReader): StopListeningResponse;
}

export namespace StopListeningResponse {
  export type AsObject = {
    successResult?: StopListeningResponse.SuccessResult.AsObject,
    errorResult?: StopListeningResponse.ErrorResult.AsObject,
    failureResult?: StopListeningResponse.FailureResult.AsObject,
  }

  export class SuccessResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      message: string,
    }
  }

  export class ErrorResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorResult.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorResult): ErrorResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorResult;
    static deserializeBinaryFromReader(message: ErrorResult, reader: jspb.BinaryReader): ErrorResult;
  }

  export namespace ErrorResult {
    export type AsObject = {
      message: string,
    }
  }

  export class FailureResult extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FailureResult): FailureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailureResult;
    static deserializeBinaryFromReader(message: FailureResult, reader: jspb.BinaryReader): FailureResult;
  }

  export namespace FailureResult {
    export type AsObject = {
      message: string,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS_RESULT = 1,
    ERROR_RESULT = 2,
    FAILURE_RESULT = 3,
  }
}

export class Request extends jspb.Message {
  hasHandshakeRequest(): boolean;
  clearHandshakeRequest(): void;
  getHandshakeRequest(): HandshakeRequest | undefined;
  setHandshakeRequest(value?: HandshakeRequest): void;

  hasGetDevicesRequest(): boolean;
  clearGetDevicesRequest(): void;
  getGetDevicesRequest(): GetDevicesRequest | undefined;
  setGetDevicesRequest(value?: GetDevicesRequest): void;

  hasExecuteCodeRequest(): boolean;
  clearExecuteCodeRequest(): void;
  getExecuteCodeRequest(): ExecuteCodeRequest | undefined;
  setExecuteCodeRequest(value?: ExecuteCodeRequest): void;

  hasDefineDeviceRequest(): boolean;
  clearDefineDeviceRequest(): void;
  getDefineDeviceRequest(): DefineDeviceRequest | undefined;
  setDefineDeviceRequest(value?: DefineDeviceRequest): void;

  hasRemoveDeviceByPathRequest(): boolean;
  clearRemoveDeviceByPathRequest(): void;
  getRemoveDeviceByPathRequest(): RemoveDeviceByPathRequest | undefined;
  setRemoveDeviceByPathRequest(value?: RemoveDeviceByPathRequest): void;

  hasRemoveDeviceByNameRequest(): boolean;
  clearRemoveDeviceByNameRequest(): void;
  getRemoveDeviceByNameRequest(): RemoveDeviceByNameRequest | undefined;
  setRemoveDeviceByNameRequest(value?: RemoveDeviceByNameRequest): void;

  hasRemoveDeviceByIdRequest(): boolean;
  clearRemoveDeviceByIdRequest(): void;
  getRemoveDeviceByIdRequest(): RemoveDeviceByIdRequest | undefined;
  setRemoveDeviceByIdRequest(value?: RemoveDeviceByIdRequest): void;

  hasGetDefinedModifiersRequest(): boolean;
  clearGetDefinedModifiersRequest(): void;
  getGetDefinedModifiersRequest(): GetDefinedModifiersRequest | undefined;
  setGetDefinedModifiersRequest(value?: GetDefinedModifiersRequest): void;

  hasDefineModifierRequest(): boolean;
  clearDefineModifierRequest(): void;
  getDefineModifierRequest(): DefineModifierRequest | undefined;
  setDefineModifierRequest(value?: DefineModifierRequest): void;

  hasRemoveModifierRequest(): boolean;
  clearRemoveModifierRequest(): void;
  getRemoveModifierRequest(): RemoveModifierRequest | undefined;
  setRemoveModifierRequest(value?: RemoveModifierRequest): void;

  hasGetDefinedActionsRequest(): boolean;
  clearGetDefinedActionsRequest(): void;
  getGetDefinedActionsRequest(): GetDefinedActionsRequest | undefined;
  setGetDefinedActionsRequest(value?: GetDefinedActionsRequest): void;

  hasDefineActionRequest(): boolean;
  clearDefineActionRequest(): void;
  getDefineActionRequest(): DefineActionRequest | undefined;
  setDefineActionRequest(value?: DefineActionRequest): void;

  hasRemoveActionRequest(): boolean;
  clearRemoveActionRequest(): void;
  getRemoveActionRequest(): RemoveActionRequest | undefined;
  setRemoveActionRequest(value?: RemoveActionRequest): void;

  hasGetDefinedMappingsRequest(): boolean;
  clearGetDefinedMappingsRequest(): void;
  getGetDefinedMappingsRequest(): GetDefinedMappingsRequest | undefined;
  setGetDefinedMappingsRequest(value?: GetDefinedMappingsRequest): void;

  hasDefineMappingRequest(): boolean;
  clearDefineMappingRequest(): void;
  getDefineMappingRequest(): DefineMappingRequest | undefined;
  setDefineMappingRequest(value?: DefineMappingRequest): void;

  hasChangeMappingRequest(): boolean;
  clearChangeMappingRequest(): void;
  getChangeMappingRequest(): ChangeMappingRequest | undefined;
  setChangeMappingRequest(value?: ChangeMappingRequest): void;

  hasRemoveMappingRequest(): boolean;
  clearRemoveMappingRequest(): void;
  getRemoveMappingRequest(): RemoveMappingRequest | undefined;
  setRemoveMappingRequest(value?: RemoveMappingRequest): void;

  hasIsListeningRequest(): boolean;
  clearIsListeningRequest(): void;
  getIsListeningRequest(): IsListeningRequest | undefined;
  setIsListeningRequest(value?: IsListeningRequest): void;

  hasStartListeningRequest(): boolean;
  clearStartListeningRequest(): void;
  getStartListeningRequest(): StartListeningRequest | undefined;
  setStartListeningRequest(value?: StartListeningRequest): void;

  hasStopListeningRequest(): boolean;
  clearStopListeningRequest(): void;
  getStopListeningRequest(): StopListeningRequest | undefined;
  setStopListeningRequest(value?: StopListeningRequest): void;

  getRequestCase(): Request.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    handshakeRequest?: HandshakeRequest.AsObject,
    getDevicesRequest?: GetDevicesRequest.AsObject,
    executeCodeRequest?: ExecuteCodeRequest.AsObject,
    defineDeviceRequest?: DefineDeviceRequest.AsObject,
    removeDeviceByPathRequest?: RemoveDeviceByPathRequest.AsObject,
    removeDeviceByNameRequest?: RemoveDeviceByNameRequest.AsObject,
    removeDeviceByIdRequest?: RemoveDeviceByIdRequest.AsObject,
    getDefinedModifiersRequest?: GetDefinedModifiersRequest.AsObject,
    defineModifierRequest?: DefineModifierRequest.AsObject,
    removeModifierRequest?: RemoveModifierRequest.AsObject,
    getDefinedActionsRequest?: GetDefinedActionsRequest.AsObject,
    defineActionRequest?: DefineActionRequest.AsObject,
    removeActionRequest?: RemoveActionRequest.AsObject,
    getDefinedMappingsRequest?: GetDefinedMappingsRequest.AsObject,
    defineMappingRequest?: DefineMappingRequest.AsObject,
    changeMappingRequest?: ChangeMappingRequest.AsObject,
    removeMappingRequest?: RemoveMappingRequest.AsObject,
    isListeningRequest?: IsListeningRequest.AsObject,
    startListeningRequest?: StartListeningRequest.AsObject,
    stopListeningRequest?: StopListeningRequest.AsObject,
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    HANDSHAKE_REQUEST = 1,
    GET_DEVICES_REQUEST = 2,
    EXECUTE_CODE_REQUEST = 3,
    DEFINE_DEVICE_REQUEST = 4,
    REMOVE_DEVICE_BY_PATH_REQUEST = 5,
    REMOVE_DEVICE_BY_NAME_REQUEST = 6,
    REMOVE_DEVICE_BY_ID_REQUEST = 7,
    GET_DEFINED_MODIFIERS_REQUEST = 8,
    DEFINE_MODIFIER_REQUEST = 9,
    REMOVE_MODIFIER_REQUEST = 10,
    GET_DEFINED_ACTIONS_REQUEST = 11,
    DEFINE_ACTION_REQUEST = 12,
    REMOVE_ACTION_REQUEST = 13,
    GET_DEFINED_MAPPINGS_REQUEST = 14,
    DEFINE_MAPPING_REQUEST = 15,
    CHANGE_MAPPING_REQUEST = 16,
    REMOVE_MAPPING_REQUEST = 17,
    IS_LISTENING_REQUEST = 18,
    START_LISTENING_REQUEST = 19,
    STOP_LISTENING_REQUEST = 20,
  }
}

export class Response extends jspb.Message {
  hasHandshakeResponse(): boolean;
  clearHandshakeResponse(): void;
  getHandshakeResponse(): HandshakeResponse | undefined;
  setHandshakeResponse(value?: HandshakeResponse): void;

  hasGetDevicesResponse(): boolean;
  clearGetDevicesResponse(): void;
  getGetDevicesResponse(): GetDevicesResponse | undefined;
  setGetDevicesResponse(value?: GetDevicesResponse): void;

  hasExecuteCodeResponse(): boolean;
  clearExecuteCodeResponse(): void;
  getExecuteCodeResponse(): ExecuteCodeResponse | undefined;
  setExecuteCodeResponse(value?: ExecuteCodeResponse): void;

  hasDefineDeviceResponse(): boolean;
  clearDefineDeviceResponse(): void;
  getDefineDeviceResponse(): DefineDeviceResponse | undefined;
  setDefineDeviceResponse(value?: DefineDeviceResponse): void;

  hasRemoveDeviceByPathResponse(): boolean;
  clearRemoveDeviceByPathResponse(): void;
  getRemoveDeviceByPathResponse(): RemoveDeviceByPathResponse | undefined;
  setRemoveDeviceByPathResponse(value?: RemoveDeviceByPathResponse): void;

  hasRemoveDeviceByNameResponse(): boolean;
  clearRemoveDeviceByNameResponse(): void;
  getRemoveDeviceByNameResponse(): RemoveDeviceByNameResponse | undefined;
  setRemoveDeviceByNameResponse(value?: RemoveDeviceByNameResponse): void;

  hasRemoveDeviceByIdResponse(): boolean;
  clearRemoveDeviceByIdResponse(): void;
  getRemoveDeviceByIdResponse(): RemoveDeviceByIdResponse | undefined;
  setRemoveDeviceByIdResponse(value?: RemoveDeviceByIdResponse): void;

  hasGetDefinedModifiersResponse(): boolean;
  clearGetDefinedModifiersResponse(): void;
  getGetDefinedModifiersResponse(): GetDefinedModifiersResponse | undefined;
  setGetDefinedModifiersResponse(value?: GetDefinedModifiersResponse): void;

  hasDefineModifierResponse(): boolean;
  clearDefineModifierResponse(): void;
  getDefineModifierResponse(): DefineModifierResponse | undefined;
  setDefineModifierResponse(value?: DefineModifierResponse): void;

  hasRemoveModifierResponse(): boolean;
  clearRemoveModifierResponse(): void;
  getRemoveModifierResponse(): RemoveModifierResponse | undefined;
  setRemoveModifierResponse(value?: RemoveModifierResponse): void;

  hasGetDefinedActionsResponse(): boolean;
  clearGetDefinedActionsResponse(): void;
  getGetDefinedActionsResponse(): GetDefinedActionsResponse | undefined;
  setGetDefinedActionsResponse(value?: GetDefinedActionsResponse): void;

  hasDefineActionResponse(): boolean;
  clearDefineActionResponse(): void;
  getDefineActionResponse(): DefineActionResponse | undefined;
  setDefineActionResponse(value?: DefineActionResponse): void;

  hasRemoveActionResponse(): boolean;
  clearRemoveActionResponse(): void;
  getRemoveActionResponse(): RemoveActionResponse | undefined;
  setRemoveActionResponse(value?: RemoveActionResponse): void;

  hasGetDefinedMappingsResponse(): boolean;
  clearGetDefinedMappingsResponse(): void;
  getGetDefinedMappingsResponse(): GetDefinedMappingsResponse | undefined;
  setGetDefinedMappingsResponse(value?: GetDefinedMappingsResponse): void;

  hasDefineMappingResponse(): boolean;
  clearDefineMappingResponse(): void;
  getDefineMappingResponse(): DefineMappingResponse | undefined;
  setDefineMappingResponse(value?: DefineMappingResponse): void;

  hasChangeMappingResponse(): boolean;
  clearChangeMappingResponse(): void;
  getChangeMappingResponse(): ChangeMappingResponse | undefined;
  setChangeMappingResponse(value?: ChangeMappingResponse): void;

  hasRemoveMappingResponse(): boolean;
  clearRemoveMappingResponse(): void;
  getRemoveMappingResponse(): RemoveMappingResponse | undefined;
  setRemoveMappingResponse(value?: RemoveMappingResponse): void;

  hasIsListeningResponse(): boolean;
  clearIsListeningResponse(): void;
  getIsListeningResponse(): IsListeningResponse | undefined;
  setIsListeningResponse(value?: IsListeningResponse): void;

  hasStartListeningResponse(): boolean;
  clearStartListeningResponse(): void;
  getStartListeningResponse(): StartListeningResponse | undefined;
  setStartListeningResponse(value?: StartListeningResponse): void;

  hasStopListeningResponse(): boolean;
  clearStopListeningResponse(): void;
  getStopListeningResponse(): StopListeningResponse | undefined;
  setStopListeningResponse(value?: StopListeningResponse): void;

  getResponseCase(): Response.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    handshakeResponse?: HandshakeResponse.AsObject,
    getDevicesResponse?: GetDevicesResponse.AsObject,
    executeCodeResponse?: ExecuteCodeResponse.AsObject,
    defineDeviceResponse?: DefineDeviceResponse.AsObject,
    removeDeviceByPathResponse?: RemoveDeviceByPathResponse.AsObject,
    removeDeviceByNameResponse?: RemoveDeviceByNameResponse.AsObject,
    removeDeviceByIdResponse?: RemoveDeviceByIdResponse.AsObject,
    getDefinedModifiersResponse?: GetDefinedModifiersResponse.AsObject,
    defineModifierResponse?: DefineModifierResponse.AsObject,
    removeModifierResponse?: RemoveModifierResponse.AsObject,
    getDefinedActionsResponse?: GetDefinedActionsResponse.AsObject,
    defineActionResponse?: DefineActionResponse.AsObject,
    removeActionResponse?: RemoveActionResponse.AsObject,
    getDefinedMappingsResponse?: GetDefinedMappingsResponse.AsObject,
    defineMappingResponse?: DefineMappingResponse.AsObject,
    changeMappingResponse?: ChangeMappingResponse.AsObject,
    removeMappingResponse?: RemoveMappingResponse.AsObject,
    isListeningResponse?: IsListeningResponse.AsObject,
    startListeningResponse?: StartListeningResponse.AsObject,
    stopListeningResponse?: StopListeningResponse.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    HANDSHAKE_RESPONSE = 1,
    GET_DEVICES_RESPONSE = 2,
    EXECUTE_CODE_RESPONSE = 3,
    DEFINE_DEVICE_RESPONSE = 4,
    REMOVE_DEVICE_BY_PATH_RESPONSE = 5,
    REMOVE_DEVICE_BY_NAME_RESPONSE = 6,
    REMOVE_DEVICE_BY_ID_RESPONSE = 7,
    GET_DEFINED_MODIFIERS_RESPONSE = 8,
    DEFINE_MODIFIER_RESPONSE = 9,
    REMOVE_MODIFIER_RESPONSE = 10,
    GET_DEFINED_ACTIONS_RESPONSE = 11,
    DEFINE_ACTION_RESPONSE = 12,
    REMOVE_ACTION_RESPONSE = 13,
    GET_DEFINED_MAPPINGS_RESPONSE = 14,
    DEFINE_MAPPING_RESPONSE = 15,
    CHANGE_MAPPING_RESPONSE = 16,
    REMOVE_MAPPING_RESPONSE = 17,
    IS_LISTENING_RESPONSE = 18,
    START_LISTENING_RESPONSE = 19,
    STOP_LISTENING_RESPONSE = 20,
  }
}

