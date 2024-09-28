import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface Params {
  denomCreationFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  denom_creation_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  denom_creation_fee: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: Coin.fromPartial({})
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomCreationFee !== undefined) {
      Coin.encode(message.denomCreationFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee !== undefined && object.denomCreationFee !== null ? Coin.fromPartial(object.denomCreationFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      denomCreationFee: object?.denom_creation_fee ? Coin.fromAmino(object.denom_creation_fee) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.denom_creation_fee = message.denomCreationFee ? Coin.toAmino(message.denomCreationFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};