import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataSDKType } from "./onft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface MsgCreateDenom {
  id: string;
  symbol: string;
  name: string;
  description: string;
  previewUri: string;
  schema: string;
  sender: string;
  creationFee: Coin;
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom";
  value: Uint8Array;
}
export interface MsgCreateDenomAmino {
  id: string;
  symbol: string;
  name: string;
  description: string;
  preview_uri: string;
  schema: string;
  sender: string;
  creation_fee?: CoinAmino;
}
export interface MsgCreateDenomAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgCreateDenom";
  value: MsgCreateDenomAmino;
}
export interface MsgCreateDenomSDKType {
  id: string;
  symbol: string;
  name: string;
  description: string;
  preview_uri: string;
  schema: string;
  sender: string;
  creation_fee: CoinSDKType;
}
export interface MsgCreateDenomResponse {}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse";
  value: Uint8Array;
}
export interface MsgCreateDenomResponseAmino {}
export interface MsgCreateDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse";
  value: MsgCreateDenomResponseAmino;
}
export interface MsgCreateDenomResponseSDKType {}
export interface MsgUpdateDenom {
  id: string;
  name: string;
  description: string;
  previewUri: string;
  sender: string;
}
export interface MsgUpdateDenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom";
  value: Uint8Array;
}
export interface MsgUpdateDenomAmino {
  id: string;
  name: string;
  description: string;
  preview_uri: string;
  sender: string;
}
export interface MsgUpdateDenomAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgUpdateDenom";
  value: MsgUpdateDenomAmino;
}
export interface MsgUpdateDenomSDKType {
  id: string;
  name: string;
  description: string;
  preview_uri: string;
  sender: string;
}
export interface MsgUpdateDenomResponse {}
export interface MsgUpdateDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse";
  value: Uint8Array;
}
export interface MsgUpdateDenomResponseAmino {}
export interface MsgUpdateDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse";
  value: MsgUpdateDenomResponseAmino;
}
export interface MsgUpdateDenomResponseSDKType {}
export interface MsgTransferDenom {
  id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferDenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom";
  value: Uint8Array;
}
export interface MsgTransferDenomAmino {
  id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferDenomAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgTransferDenom";
  value: MsgTransferDenomAmino;
}
export interface MsgTransferDenomSDKType {
  id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferDenomResponse {}
export interface MsgTransferDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse";
  value: Uint8Array;
}
export interface MsgTransferDenomResponseAmino {}
export interface MsgTransferDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse";
  value: MsgTransferDenomResponseAmino;
}
export interface MsgTransferDenomResponseSDKType {}
export interface MsgMintONFT {
  id: string;
  denomId: string;
  metadata: Metadata;
  data: string;
  transferable: boolean;
  extensible: boolean;
  nsfw: boolean;
  royaltyShare: string;
  sender: string;
  recipient: string;
}
export interface MsgMintONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT";
  value: Uint8Array;
}
export interface MsgMintONFTAmino {
  id: string;
  denom_id: string;
  metadata?: MetadataAmino;
  data: string;
  transferable: boolean;
  extensible: boolean;
  nsfw: boolean;
  royalty_share: string;
  sender: string;
  recipient: string;
}
export interface MsgMintONFTAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgMintONFT";
  value: MsgMintONFTAmino;
}
export interface MsgMintONFTSDKType {
  id: string;
  denom_id: string;
  metadata: MetadataSDKType;
  data: string;
  transferable: boolean;
  extensible: boolean;
  nsfw: boolean;
  royalty_share: string;
  sender: string;
  recipient: string;
}
export interface MsgMintONFTResponse {}
export interface MsgMintONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse";
  value: Uint8Array;
}
export interface MsgMintONFTResponseAmino {}
export interface MsgMintONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse";
  value: MsgMintONFTResponseAmino;
}
export interface MsgMintONFTResponseSDKType {}
export interface MsgTransferONFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT";
  value: Uint8Array;
}
export interface MsgTransferONFTAmino {
  id: string;
  denom_id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferONFTAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgTransferONFT";
  value: MsgTransferONFTAmino;
}
export interface MsgTransferONFTSDKType {
  id: string;
  denom_id: string;
  sender: string;
  recipient: string;
}
export interface MsgTransferONFTResponse {}
export interface MsgTransferONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse";
  value: Uint8Array;
}
export interface MsgTransferONFTResponseAmino {}
export interface MsgTransferONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse";
  value: MsgTransferONFTResponseAmino;
}
export interface MsgTransferONFTResponseSDKType {}
export interface MsgBurnONFT {
  id: string;
  denomId: string;
  sender: string;
}
export interface MsgBurnONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT";
  value: Uint8Array;
}
export interface MsgBurnONFTAmino {
  id: string;
  denom_id: string;
  sender: string;
}
export interface MsgBurnONFTAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgBurnONFT";
  value: MsgBurnONFTAmino;
}
export interface MsgBurnONFTSDKType {
  id: string;
  denom_id: string;
  sender: string;
}
export interface MsgBurnONFTResponse {}
export interface MsgBurnONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse";
  value: Uint8Array;
}
export interface MsgBurnONFTResponseAmino {}
export interface MsgBurnONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse";
  value: MsgBurnONFTResponseAmino;
}
export interface MsgBurnONFTResponseSDKType {}
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    id: "",
    symbol: "",
    name: "",
    description: "",
    previewUri: "",
    schema: "",
    sender: "",
    creationFee: Coin.fromPartial({})
  };
}
export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    if (message.schema !== "") {
      writer.uint32(50).string(message.schema);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        case 6:
          message.schema = reader.string();
          break;
        case 7:
          message.sender = reader.string();
          break;
        case 8:
          message.creationFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.id = object.id ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.schema = object.schema ?? "";
    message.sender = object.sender ?? "";
    message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
    return {
      id: object.id,
      symbol: object.symbol,
      name: object.name,
      description: object.description,
      previewUri: object.preview_uri,
      schema: object.schema,
      sender: object.sender,
      creationFee: object?.creation_fee ? Coin.fromAmino(object.creation_fee) : undefined
    };
  },
  toAmino(message: MsgCreateDenom): MsgCreateDenomAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.symbol = message.symbol;
    obj.name = message.name;
    obj.description = message.description;
    obj.preview_uri = message.previewUri;
    obj.schema = message.schema;
    obj.sender = message.sender;
    obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom {
    return MsgCreateDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {};
}
export const MsgCreateDenomResponse = {
  encode(_: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
  fromAmino(_: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
    return {};
  },
  toAmino(_: MsgCreateDenomResponse): MsgCreateDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenom(): MsgUpdateDenom {
  return {
    id: "",
    name: "",
    description: "",
    previewUri: "",
    sender: ""
  };
}
export const MsgUpdateDenom = {
  encode(message: MsgUpdateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateDenom>): MsgUpdateDenom {
    const message = createBaseMsgUpdateDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomAmino): MsgUpdateDenom {
    return {
      id: object.id,
      name: object.name,
      description: object.description,
      previewUri: object.preview_uri,
      sender: object.sender
    };
  },
  toAmino(message: MsgUpdateDenom): MsgUpdateDenomAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.description = message.description;
    obj.preview_uri = message.previewUri;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomAminoMsg): MsgUpdateDenom {
    return MsgUpdateDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomProtoMsg): MsgUpdateDenom {
    return MsgUpdateDenom.decode(message.value);
  },
  toProto(message: MsgUpdateDenom): Uint8Array {
    return MsgUpdateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenom): MsgUpdateDenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
      value: MsgUpdateDenom.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomResponse(): MsgUpdateDenomResponse {
  return {};
}
export const MsgUpdateDenomResponse = {
  encode(_: MsgUpdateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateDenomResponse>): MsgUpdateDenomResponse {
    const message = createBaseMsgUpdateDenomResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDenomResponseAmino): MsgUpdateDenomResponse {
    return {};
  },
  toAmino(_: MsgUpdateDenomResponse): MsgUpdateDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomResponseAminoMsg): MsgUpdateDenomResponse {
    return MsgUpdateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomResponseProtoMsg): MsgUpdateDenomResponse {
    return MsgUpdateDenomResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDenomResponse): Uint8Array {
    return MsgUpdateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomResponse): MsgUpdateDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse",
      value: MsgUpdateDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDenom(): MsgTransferDenom {
  return {
    id: "",
    sender: "",
    recipient: ""
  };
}
export const MsgTransferDenom = {
  encode(message: MsgTransferDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferDenom>): MsgTransferDenom {
    const message = createBaseMsgTransferDenom();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgTransferDenomAmino): MsgTransferDenom {
    return {
      id: object.id,
      sender: object.sender,
      recipient: object.recipient
    };
  },
  toAmino(message: MsgTransferDenom): MsgTransferDenomAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgTransferDenomAminoMsg): MsgTransferDenom {
    return MsgTransferDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferDenomProtoMsg): MsgTransferDenom {
    return MsgTransferDenom.decode(message.value);
  },
  toProto(message: MsgTransferDenom): Uint8Array {
    return MsgTransferDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDenom): MsgTransferDenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
      value: MsgTransferDenom.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDenomResponse(): MsgTransferDenomResponse {
  return {};
}
export const MsgTransferDenomResponse = {
  encode(_: MsgTransferDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgTransferDenomResponse>): MsgTransferDenomResponse {
    const message = createBaseMsgTransferDenomResponse();
    return message;
  },
  fromAmino(_: MsgTransferDenomResponseAmino): MsgTransferDenomResponse {
    return {};
  },
  toAmino(_: MsgTransferDenomResponse): MsgTransferDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferDenomResponseAminoMsg): MsgTransferDenomResponse {
    return MsgTransferDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferDenomResponseProtoMsg): MsgTransferDenomResponse {
    return MsgTransferDenomResponse.decode(message.value);
  },
  toProto(message: MsgTransferDenomResponse): Uint8Array {
    return MsgTransferDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDenomResponse): MsgTransferDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse",
      value: MsgTransferDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintONFT(): MsgMintONFT {
  return {
    id: "",
    denomId: "",
    metadata: Metadata.fromPartial({}),
    data: "",
    transferable: false,
    extensible: false,
    nsfw: false,
    royaltyShare: "",
    sender: "",
    recipient: ""
  };
}
export const MsgMintONFT = {
  encode(message: MsgMintONFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(48).bool(message.extensible);
    }
    if (message.nsfw === true) {
      writer.uint32(56).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(66).string(message.royaltyShare);
    }
    if (message.sender !== "") {
      writer.uint32(74).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(82).string(message.recipient);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintONFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.transferable = reader.bool();
          break;
        case 6:
          message.extensible = reader.bool();
          break;
        case 7:
          message.nsfw = reader.bool();
          break;
        case 8:
          message.royaltyShare = reader.string();
          break;
        case 9:
          message.sender = reader.string();
          break;
        case 10:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintONFT>): MsgMintONFT {
    const message = createBaseMsgMintONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.data = object.data ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgMintONFTAmino): MsgMintONFT {
    return {
      id: object.id,
      denomId: object.denom_id,
      metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined,
      data: object.data,
      transferable: object.transferable,
      extensible: object.extensible,
      nsfw: object.nsfw,
      royaltyShare: object.royalty_share,
      sender: object.sender,
      recipient: object.recipient
    };
  },
  toAmino(message: MsgMintONFT): MsgMintONFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.denom_id = message.denomId;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.data = message.data;
    obj.transferable = message.transferable;
    obj.extensible = message.extensible;
    obj.nsfw = message.nsfw;
    obj.royalty_share = message.royaltyShare;
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgMintONFTAminoMsg): MsgMintONFT {
    return MsgMintONFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintONFTProtoMsg): MsgMintONFT {
    return MsgMintONFT.decode(message.value);
  },
  toProto(message: MsgMintONFT): Uint8Array {
    return MsgMintONFT.encode(message).finish();
  },
  toProtoMsg(message: MsgMintONFT): MsgMintONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
      value: MsgMintONFT.encode(message).finish()
    };
  }
};
function createBaseMsgMintONFTResponse(): MsgMintONFTResponse {
  return {};
}
export const MsgMintONFTResponse = {
  encode(_: MsgMintONFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintONFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgMintONFTResponse>): MsgMintONFTResponse {
    const message = createBaseMsgMintONFTResponse();
    return message;
  },
  fromAmino(_: MsgMintONFTResponseAmino): MsgMintONFTResponse {
    return {};
  },
  toAmino(_: MsgMintONFTResponse): MsgMintONFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintONFTResponseAminoMsg): MsgMintONFTResponse {
    return MsgMintONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintONFTResponseProtoMsg): MsgMintONFTResponse {
    return MsgMintONFTResponse.decode(message.value);
  },
  toProto(message: MsgMintONFTResponse): Uint8Array {
    return MsgMintONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintONFTResponse): MsgMintONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse",
      value: MsgMintONFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferONFT(): MsgTransferONFT {
  return {
    id: "",
    denomId: "",
    sender: "",
    recipient: ""
  };
}
export const MsgTransferONFT = {
  encode(message: MsgTransferONFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferONFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferONFT>): MsgTransferONFT {
    const message = createBaseMsgTransferONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgTransferONFTAmino): MsgTransferONFT {
    return {
      id: object.id,
      denomId: object.denom_id,
      sender: object.sender,
      recipient: object.recipient
    };
  },
  toAmino(message: MsgTransferONFT): MsgTransferONFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.denom_id = message.denomId;
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgTransferONFTAminoMsg): MsgTransferONFT {
    return MsgTransferONFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferONFTProtoMsg): MsgTransferONFT {
    return MsgTransferONFT.decode(message.value);
  },
  toProto(message: MsgTransferONFT): Uint8Array {
    return MsgTransferONFT.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferONFT): MsgTransferONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
      value: MsgTransferONFT.encode(message).finish()
    };
  }
};
function createBaseMsgTransferONFTResponse(): MsgTransferONFTResponse {
  return {};
}
export const MsgTransferONFTResponse = {
  encode(_: MsgTransferONFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferONFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgTransferONFTResponse>): MsgTransferONFTResponse {
    const message = createBaseMsgTransferONFTResponse();
    return message;
  },
  fromAmino(_: MsgTransferONFTResponseAmino): MsgTransferONFTResponse {
    return {};
  },
  toAmino(_: MsgTransferONFTResponse): MsgTransferONFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferONFTResponseAminoMsg): MsgTransferONFTResponse {
    return MsgTransferONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferONFTResponseProtoMsg): MsgTransferONFTResponse {
    return MsgTransferONFTResponse.decode(message.value);
  },
  toProto(message: MsgTransferONFTResponse): Uint8Array {
    return MsgTransferONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferONFTResponse): MsgTransferONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse",
      value: MsgTransferONFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnONFT(): MsgBurnONFT {
  return {
    id: "",
    denomId: "",
    sender: ""
  };
}
export const MsgBurnONFT = {
  encode(message: MsgBurnONFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnONFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurnONFT>): MsgBurnONFT {
    const message = createBaseMsgBurnONFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgBurnONFTAmino): MsgBurnONFT {
    return {
      id: object.id,
      denomId: object.denom_id,
      sender: object.sender
    };
  },
  toAmino(message: MsgBurnONFT): MsgBurnONFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.denom_id = message.denomId;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgBurnONFTAminoMsg): MsgBurnONFT {
    return MsgBurnONFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnONFTProtoMsg): MsgBurnONFT {
    return MsgBurnONFT.decode(message.value);
  },
  toProto(message: MsgBurnONFT): Uint8Array {
    return MsgBurnONFT.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnONFT): MsgBurnONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
      value: MsgBurnONFT.encode(message).finish()
    };
  }
};
function createBaseMsgBurnONFTResponse(): MsgBurnONFTResponse {
  return {};
}
export const MsgBurnONFTResponse = {
  encode(_: MsgBurnONFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnONFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgBurnONFTResponse>): MsgBurnONFTResponse {
    const message = createBaseMsgBurnONFTResponse();
    return message;
  },
  fromAmino(_: MsgBurnONFTResponseAmino): MsgBurnONFTResponse {
    return {};
  },
  toAmino(_: MsgBurnONFTResponse): MsgBurnONFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnONFTResponseAminoMsg): MsgBurnONFTResponse {
    return MsgBurnONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnONFTResponseProtoMsg): MsgBurnONFTResponse {
    return MsgBurnONFTResponse.decode(message.value);
  },
  toProto(message: MsgBurnONFTResponse): Uint8Array {
    return MsgBurnONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnONFTResponse): MsgBurnONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse",
      value: MsgBurnONFTResponse.encode(message).finish()
    };
  }
};