import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Collection, CollectionAmino, CollectionSDKType, Denom, DenomAmino, DenomSDKType, ONFT, ONFTAmino, ONFTSDKType } from "./onft";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryCollectionRequest {
  denomId: string;
  pagination: PageRequest;
}
export interface QueryCollectionRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest";
  value: Uint8Array;
}
export interface QueryCollectionRequestAmino {
  denom_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryCollectionRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryCollectionRequest";
  value: QueryCollectionRequestAmino;
}
export interface QueryCollectionRequestSDKType {
  denom_id: string;
  pagination: PageRequestSDKType;
}
export interface QueryCollectionResponse {
  collection: Collection;
  pagination: PageResponse;
}
export interface QueryCollectionResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse";
  value: Uint8Array;
}
export interface QueryCollectionResponseAmino {
  collection?: CollectionAmino;
  pagination?: PageResponseAmino;
}
export interface QueryCollectionResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryCollectionResponse";
  value: QueryCollectionResponseAmino;
}
export interface QueryCollectionResponseSDKType {
  collection: CollectionSDKType;
  pagination: PageResponseSDKType;
}
export interface QueryDenomRequest {
  denomId: string;
}
export interface QueryDenomRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest";
  value: Uint8Array;
}
export interface QueryDenomRequestAmino {
  denom_id: string;
}
export interface QueryDenomRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomRequest";
  value: QueryDenomRequestAmino;
}
export interface QueryDenomRequestSDKType {
  denom_id: string;
}
export interface QueryDenomResponse {
  denom: Denom;
}
export interface QueryDenomResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse";
  value: Uint8Array;
}
export interface QueryDenomResponseAmino {
  denom?: DenomAmino;
}
export interface QueryDenomResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomResponse";
  value: QueryDenomResponseAmino;
}
export interface QueryDenomResponseSDKType {
  denom: DenomSDKType;
}
export interface QueryDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
  owner: string;
}
export interface QueryDenomsRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest";
  value: Uint8Array;
}
export interface QueryDenomsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
  owner: string;
}
export interface QueryDenomsRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomsRequest";
  value: QueryDenomsRequestAmino;
}
export interface QueryDenomsRequestSDKType {
  pagination: PageRequestSDKType;
  owner: string;
}
export interface QueryDenomsResponse {
  denoms: Denom[];
  pagination: PageResponse;
}
export interface QueryDenomsResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse";
  value: Uint8Array;
}
export interface QueryDenomsResponseAmino {
  denoms: DenomAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDenomsResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryDenomsResponse";
  value: QueryDenomsResponseAmino;
}
export interface QueryDenomsResponseSDKType {
  denoms: DenomSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryONFTRequest {
  denomId: string;
  id: string;
}
export interface QueryONFTRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest";
  value: Uint8Array;
}
export interface QueryONFTRequestAmino {
  denom_id: string;
  id: string;
}
export interface QueryONFTRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryONFTRequest";
  value: QueryONFTRequestAmino;
}
export interface QueryONFTRequestSDKType {
  denom_id: string;
  id: string;
}
export interface QueryONFTResponse {
  onft: ONFT;
}
export interface QueryONFTResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse";
  value: Uint8Array;
}
export interface QueryONFTResponseAmino {
  onft?: ONFTAmino;
}
export interface QueryONFTResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryONFTResponse";
  value: QueryONFTResponseAmino;
}
export interface QueryONFTResponseSDKType {
  onft: ONFTSDKType;
}
export interface QueryOwnerONFTsRequest {
  denomId: string;
  owner: string;
  pagination: PageRequest;
}
export interface QueryOwnerONFTsRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest";
  value: Uint8Array;
}
export interface QueryOwnerONFTsRequestAmino {
  denom_id: string;
  owner: string;
  pagination?: PageRequestAmino;
}
export interface QueryOwnerONFTsRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest";
  value: QueryOwnerONFTsRequestAmino;
}
export interface QueryOwnerONFTsRequestSDKType {
  denom_id: string;
  owner: string;
  pagination: PageRequestSDKType;
}
export interface QueryOwnerONFTsResponse {
  owner: string;
  collections: OwnerONFTCollection[];
  pagination: PageResponse;
}
export interface QueryOwnerONFTsResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse";
  value: Uint8Array;
}
export interface QueryOwnerONFTsResponseAmino {
  owner: string;
  collections: OwnerONFTCollectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOwnerONFTsResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse";
  value: QueryOwnerONFTsResponseAmino;
}
export interface QueryOwnerONFTsResponseSDKType {
  owner: string;
  collections: OwnerONFTCollectionSDKType[];
  pagination: PageResponseSDKType;
}
export interface QuerySupplyRequest {
  denomId: string;
  owner: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest";
  value: Uint8Array;
}
export interface QuerySupplyRequestAmino {
  denom_id: string;
  owner: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
export interface QuerySupplyRequestSDKType {
  denom_id: string;
  owner: string;
}
export interface QuerySupplyResponse {
  amount: Long;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse";
  value: Uint8Array;
}
export interface QuerySupplyResponseAmino {
  amount: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
export interface QuerySupplyResponseSDKType {
  amount: Long;
}
export interface OwnerONFTCollection {
  denom: Denom;
  onfts: ONFT[];
}
export interface OwnerONFTCollectionProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection";
  value: Uint8Array;
}
export interface OwnerONFTCollectionAmino {
  denom?: DenomAmino;
  onfts: ONFTAmino[];
}
export interface OwnerONFTCollectionAminoMsg {
  type: "/OmniFlix.onft.v1beta1.OwnerONFTCollection";
  value: OwnerONFTCollectionAmino;
}
export interface OwnerONFTCollectionSDKType {
  denom: DenomSDKType;
  onfts: ONFTSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/OmniFlix.onft.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    denomId: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryCollectionRequest = {
  encode(message: QueryCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionRequest>): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denomId = object.denomId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionRequestAmino): QueryCollectionRequest {
    return {
      denomId: object.denom_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCollectionRequest): QueryCollectionRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionRequestAminoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionRequestProtoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.decode(message.value);
  },
  toProto(message: QueryCollectionRequest): Uint8Array {
    return QueryCollectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionRequest): QueryCollectionRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest",
      value: QueryCollectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    collection: Collection.fromPartial({}),
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryCollectionResponse = {
  encode(message: QueryCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCollectionResponse>): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionResponseAmino): QueryCollectionResponse {
    return {
      collection: object?.collection ? Collection.fromAmino(object.collection) : undefined,
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCollectionResponse): QueryCollectionResponseAmino {
    const obj: any = {};
    obj.collection = message.collection ? Collection.toAmino(message.collection) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionResponseAminoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionResponseProtoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.decode(message.value);
  },
  toProto(message: QueryCollectionResponse): Uint8Array {
    return QueryCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionResponse): QueryCollectionResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse",
      value: QueryCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomRequest(): QueryDenomRequest {
  return {
    denomId: ""
  };
}
export const QueryDenomRequest = {
  encode(message: QueryDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomRequest>): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
  fromAmino(object: QueryDenomRequestAmino): QueryDenomRequest {
    return {
      denomId: object.denom_id
    };
  },
  toAmino(message: QueryDenomRequest): QueryDenomRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRequestAminoMsg): QueryDenomRequest {
    return QueryDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRequestProtoMsg): QueryDenomRequest {
    return QueryDenomRequest.decode(message.value);
  },
  toProto(message: QueryDenomRequest): Uint8Array {
    return QueryDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRequest): QueryDenomRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest",
      value: QueryDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomResponse(): QueryDenomResponse {
  return {
    denom: Denom.fromPartial({})
  };
}
export const QueryDenomResponse = {
  encode(message: QueryDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomResponse>): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomResponseAmino): QueryDenomResponse {
    return {
      denom: object?.denom ? Denom.fromAmino(object.denom) : undefined
    };
  },
  toAmino(message: QueryDenomResponse): QueryDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomResponseAminoMsg): QueryDenomResponse {
    return QueryDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomResponseProtoMsg): QueryDenomResponse {
    return QueryDenomResponse.decode(message.value);
  },
  toProto(message: QueryDenomResponse): Uint8Array {
    return QueryDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomResponse): QueryDenomResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse",
      value: QueryDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    owner: ""
  };
}
export const QueryDenomsRequest = {
  encode(message: QueryDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomsRequest>): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryDenomsRequestAmino): QueryDenomsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      owner: object.owner
    };
  },
  toAmino(message: QueryDenomsRequest): QueryDenomsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsRequestAminoMsg): QueryDenomsRequest {
    return QueryDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsRequestProtoMsg): QueryDenomsRequest {
    return QueryDenomsRequest.decode(message.value);
  },
  toProto(message: QueryDenomsRequest): Uint8Array {
    return QueryDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsRequest): QueryDenomsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest",
      value: QueryDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return {
    denoms: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDenomsResponse = {
  encode(message: QueryDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomsResponse>): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map(e => Denom.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomsResponseAmino): QueryDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => Denom.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDenomsResponse): QueryDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.denoms = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsResponseAminoMsg): QueryDenomsResponse {
    return QueryDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsResponseProtoMsg): QueryDenomsResponse {
    return QueryDenomsResponse.decode(message.value);
  },
  toProto(message: QueryDenomsResponse): Uint8Array {
    return QueryDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsResponse): QueryDenomsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse",
      value: QueryDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryONFTRequest(): QueryONFTRequest {
  return {
    denomId: "",
    id: ""
  };
}
export const QueryONFTRequest = {
  encode(message: QueryONFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryONFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryONFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryONFTRequest>): QueryONFTRequest {
    const message = createBaseQueryONFTRequest();
    message.denomId = object.denomId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryONFTRequestAmino): QueryONFTRequest {
    return {
      denomId: object.denom_id,
      id: object.id
    };
  },
  toAmino(message: QueryONFTRequest): QueryONFTRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryONFTRequestAminoMsg): QueryONFTRequest {
    return QueryONFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryONFTRequestProtoMsg): QueryONFTRequest {
    return QueryONFTRequest.decode(message.value);
  },
  toProto(message: QueryONFTRequest): Uint8Array {
    return QueryONFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryONFTRequest): QueryONFTRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest",
      value: QueryONFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryONFTResponse(): QueryONFTResponse {
  return {
    onft: ONFT.fromPartial({})
  };
}
export const QueryONFTResponse = {
  encode(message: QueryONFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onft !== undefined) {
      ONFT.encode(message.onft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryONFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryONFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onft = ONFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryONFTResponse>): QueryONFTResponse {
    const message = createBaseQueryONFTResponse();
    message.onft = object.onft !== undefined && object.onft !== null ? ONFT.fromPartial(object.onft) : undefined;
    return message;
  },
  fromAmino(object: QueryONFTResponseAmino): QueryONFTResponse {
    return {
      onft: object?.onft ? ONFT.fromAmino(object.onft) : undefined
    };
  },
  toAmino(message: QueryONFTResponse): QueryONFTResponseAmino {
    const obj: any = {};
    obj.onft = message.onft ? ONFT.toAmino(message.onft) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryONFTResponseAminoMsg): QueryONFTResponse {
    return QueryONFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryONFTResponseProtoMsg): QueryONFTResponse {
    return QueryONFTResponse.decode(message.value);
  },
  toProto(message: QueryONFTResponse): Uint8Array {
    return QueryONFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryONFTResponse): QueryONFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse",
      value: QueryONFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerONFTsRequest(): QueryOwnerONFTsRequest {
  return {
    denomId: "",
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryOwnerONFTsRequest = {
  encode(message: QueryOwnerONFTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerONFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerONFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOwnerONFTsRequest>): QueryOwnerONFTsRequest {
    const message = createBaseQueryOwnerONFTsRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerONFTsRequestAmino): QueryOwnerONFTsRequest {
    return {
      denomId: object.denom_id,
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOwnerONFTsRequest): QueryOwnerONFTsRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerONFTsRequestAminoMsg): QueryOwnerONFTsRequest {
    return QueryOwnerONFTsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerONFTsRequestProtoMsg): QueryOwnerONFTsRequest {
    return QueryOwnerONFTsRequest.decode(message.value);
  },
  toProto(message: QueryOwnerONFTsRequest): Uint8Array {
    return QueryOwnerONFTsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerONFTsRequest): QueryOwnerONFTsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest",
      value: QueryOwnerONFTsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerONFTsResponse(): QueryOwnerONFTsResponse {
  return {
    owner: "",
    collections: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryOwnerONFTsResponse = {
  encode(message: QueryOwnerONFTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.collections) {
      OwnerONFTCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerONFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerONFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collections.push(OwnerONFTCollection.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOwnerONFTsResponse>): QueryOwnerONFTsResponse {
    const message = createBaseQueryOwnerONFTsResponse();
    message.owner = object.owner ?? "";
    message.collections = object.collections?.map(e => OwnerONFTCollection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerONFTsResponseAmino): QueryOwnerONFTsResponse {
    return {
      owner: object.owner,
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => OwnerONFTCollection.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOwnerONFTsResponse): QueryOwnerONFTsResponseAmino {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? OwnerONFTCollection.toAmino(e) : undefined);
    } else {
      obj.collections = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerONFTsResponseAminoMsg): QueryOwnerONFTsResponse {
    return QueryOwnerONFTsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerONFTsResponseProtoMsg): QueryOwnerONFTsResponse {
    return QueryOwnerONFTsResponse.decode(message.value);
  },
  toProto(message: QueryOwnerONFTsResponse): Uint8Array {
    return QueryOwnerONFTsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerONFTsResponse): QueryOwnerONFTsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse",
      value: QueryOwnerONFTsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    denomId: "",
    owner: ""
  };
}
export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    return {
      denomId: object.denom_id,
      owner: object.owner
    };
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: Long.UZERO
  };
}
export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    return {
      amount: Long.fromString(object.amount)
    };
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
function createBaseOwnerONFTCollection(): OwnerONFTCollection {
  return {
    denom: Denom.fromPartial({}),
    onfts: []
  };
}
export const OwnerONFTCollection = {
  encode(message: OwnerONFTCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.onfts) {
      ONFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OwnerONFTCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerONFTCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.onfts.push(ONFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OwnerONFTCollection>): OwnerONFTCollection {
    const message = createBaseOwnerONFTCollection();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.onfts = object.onfts?.map(e => ONFT.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OwnerONFTCollectionAmino): OwnerONFTCollection {
    return {
      denom: object?.denom ? Denom.fromAmino(object.denom) : undefined,
      onfts: Array.isArray(object?.onfts) ? object.onfts.map((e: any) => ONFT.fromAmino(e)) : []
    };
  },
  toAmino(message: OwnerONFTCollection): OwnerONFTCollectionAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    if (message.onfts) {
      obj.onfts = message.onfts.map(e => e ? ONFT.toAmino(e) : undefined);
    } else {
      obj.onfts = [];
    }
    return obj;
  },
  fromAminoMsg(object: OwnerONFTCollectionAminoMsg): OwnerONFTCollection {
    return OwnerONFTCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerONFTCollectionProtoMsg): OwnerONFTCollection {
    return OwnerONFTCollection.decode(message.value);
  },
  toProto(message: OwnerONFTCollection): Uint8Array {
    return OwnerONFTCollection.encode(message).finish();
  },
  toProtoMsg(message: OwnerONFTCollection): OwnerONFTCollectionProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection",
      value: OwnerONFTCollection.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};