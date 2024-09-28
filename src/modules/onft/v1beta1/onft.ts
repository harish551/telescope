import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../helpers";
/** Collection */
export interface Collection {
  denom: Denom;
  onfts: ONFT[];
}
export interface CollectionProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Collection";
  value: Uint8Array;
}
/** Collection */
export interface CollectionAmino {
  denom?: DenomAmino;
  onfts: ONFTAmino[];
}
export interface CollectionAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Collection";
  value: CollectionAmino;
}
/** Collection */
export interface CollectionSDKType {
  denom: DenomSDKType;
  onfts: ONFTSDKType[];
}
export interface IDCollection {
  denomId: string;
  onftIds: string[];
}
export interface IDCollectionProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.IDCollection";
  value: Uint8Array;
}
export interface IDCollectionAmino {
  denom_id: string;
  onft_ids: string[];
}
export interface IDCollectionAminoMsg {
  type: "/OmniFlix.onft.v1beta1.IDCollection";
  value: IDCollectionAmino;
}
export interface IDCollectionSDKType {
  denom_id: string;
  onft_ids: string[];
}
export interface Denom {
  id: string;
  symbol: string;
  name: string;
  schema: string;
  creator: string;
  description: string;
  previewUri: string;
}
export interface DenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Denom";
  value: Uint8Array;
}
export interface DenomAmino {
  id: string;
  symbol: string;
  name: string;
  schema: string;
  creator: string;
  description: string;
  preview_uri: string;
}
export interface DenomAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Denom";
  value: DenomAmino;
}
export interface DenomSDKType {
  id: string;
  symbol: string;
  name: string;
  schema: string;
  creator: string;
  description: string;
  preview_uri: string;
}
/** ASSET or ONFT */
export interface ONFT {
  id: string;
  metadata: Metadata;
  data: string;
  owner: string;
  transferable: boolean;
  extensible: boolean;
  createdAt: Date;
  nsfw: boolean;
  royaltyShare: string;
  dynamicData: string;
}
export interface ONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.ONFT";
  value: Uint8Array;
}
/** ASSET or ONFT */
export interface ONFTAmino {
  id: string;
  metadata?: MetadataAmino;
  data: string;
  owner: string;
  transferable: boolean;
  extensible: boolean;
  created_at?: Date;
  nsfw: boolean;
  royalty_share: string;
  dynamic_data: string;
}
export interface ONFTAminoMsg {
  type: "/OmniFlix.onft.v1beta1.ONFT";
  value: ONFTAmino;
}
/** ASSET or ONFT */
export interface ONFTSDKType {
  id: string;
  metadata: MetadataSDKType;
  data: string;
  owner: string;
  transferable: boolean;
  extensible: boolean;
  created_at: Date;
  nsfw: boolean;
  royalty_share: string;
  dynamic_data: string;
}
export interface Metadata {
  name: string;
  description: string;
  mediaUri: string;
  previewUri: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Metadata";
  value: Uint8Array;
}
export interface MetadataAmino {
  name: string;
  description: string;
  media_uri: string;
  preview_uri: string;
}
export interface MetadataAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Metadata";
  value: MetadataAmino;
}
export interface MetadataSDKType {
  name: string;
  description: string;
  media_uri: string;
  preview_uri: string;
}
export interface Owner {
  address: string;
  idCollections: IDCollection[];
}
export interface OwnerProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Owner";
  value: Uint8Array;
}
export interface OwnerAmino {
  address: string;
  id_collections: IDCollectionAmino[];
}
export interface OwnerAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Owner";
  value: OwnerAmino;
}
export interface OwnerSDKType {
  address: string;
  id_collections: IDCollectionSDKType[];
}
function createBaseCollection(): Collection {
  return {
    denom: Denom.fromPartial({}),
    onfts: []
  };
}
export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.onfts) {
      ONFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
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
  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = createBaseCollection();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.onfts = object.onfts?.map(e => ONFT.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CollectionAmino): Collection {
    return {
      denom: object?.denom ? Denom.fromAmino(object.denom) : undefined,
      onfts: Array.isArray(object?.onfts) ? object.onfts.map((e: any) => ONFT.fromAmino(e)) : []
    };
  },
  toAmino(message: Collection): CollectionAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    if (message.onfts) {
      obj.onfts = message.onfts.map(e => e ? ONFT.toAmino(e) : undefined);
    } else {
      obj.onfts = [];
    }
    return obj;
  },
  fromAminoMsg(object: CollectionAminoMsg): Collection {
    return Collection.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionProtoMsg): Collection {
    return Collection.decode(message.value);
  },
  toProto(message: Collection): Uint8Array {
    return Collection.encode(message).finish();
  },
  toProtoMsg(message: Collection): CollectionProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.Collection",
      value: Collection.encode(message).finish()
    };
  }
};
function createBaseIDCollection(): IDCollection {
  return {
    denomId: "",
    onftIds: []
  };
}
export const IDCollection = {
  encode(message: IDCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    for (const v of message.onftIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IDCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.onftIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IDCollection>): IDCollection {
    const message = createBaseIDCollection();
    message.denomId = object.denomId ?? "";
    message.onftIds = object.onftIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: IDCollectionAmino): IDCollection {
    return {
      denomId: object.denom_id,
      onftIds: Array.isArray(object?.onft_ids) ? object.onft_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: IDCollection): IDCollectionAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    if (message.onftIds) {
      obj.onft_ids = message.onftIds.map(e => e);
    } else {
      obj.onft_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: IDCollectionAminoMsg): IDCollection {
    return IDCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: IDCollectionProtoMsg): IDCollection {
    return IDCollection.decode(message.value);
  },
  toProto(message: IDCollection): Uint8Array {
    return IDCollection.encode(message).finish();
  },
  toProtoMsg(message: IDCollection): IDCollectionProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.IDCollection",
      value: IDCollection.encode(message).finish()
    };
  }
};
function createBaseDenom(): Denom {
  return {
    id: "",
    symbol: "",
    name: "",
    schema: "",
    creator: "",
    description: "",
    previewUri: ""
  };
}
export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(34).string(message.schema);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(58).string(message.previewUri);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
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
          message.schema = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.previewUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = createBaseDenom();
    message.id = object.id ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    return {
      id: object.id,
      symbol: object.symbol,
      name: object.name,
      schema: object.schema,
      creator: object.creator,
      description: object.description,
      previewUri: object.preview_uri
    };
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.symbol = message.symbol;
    obj.name = message.name;
    obj.schema = message.schema;
    obj.creator = message.creator;
    obj.description = message.description;
    obj.preview_uri = message.previewUri;
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
function createBaseONFT(): ONFT {
  return {
    id: "",
    metadata: Metadata.fromPartial({}),
    data: "",
    owner: "",
    transferable: false,
    extensible: false,
    createdAt: new Date(),
    nsfw: false,
    royaltyShare: "",
    dynamicData: ""
  };
}
export const ONFT = {
  encode(message: ONFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(48).bool(message.extensible);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.nsfw === true) {
      writer.uint32(64).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(74).string(message.royaltyShare);
    }
    if (message.dynamicData !== "") {
      writer.uint32(82).string(message.dynamicData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ONFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseONFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.transferable = reader.bool();
          break;
        case 6:
          message.extensible = reader.bool();
          break;
        case 7:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nsfw = reader.bool();
          break;
        case 9:
          message.royaltyShare = reader.string();
          break;
        case 10:
          message.dynamicData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ONFT>): ONFT {
    const message = createBaseONFT();
    message.id = object.id ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.data = object.data ?? "";
    message.owner = object.owner ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.createdAt = object.createdAt ?? undefined;
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    message.dynamicData = object.dynamicData ?? "";
    return message;
  },
  fromAmino(object: ONFTAmino): ONFT {
    return {
      id: object.id,
      metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined,
      data: object.data,
      owner: object.owner,
      transferable: object.transferable,
      extensible: object.extensible,
      createdAt: object.created_at,
      nsfw: object.nsfw,
      royaltyShare: object.royalty_share,
      dynamicData: object.dynamic_data
    };
  },
  toAmino(message: ONFT): ONFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.data = message.data;
    obj.owner = message.owner;
    obj.transferable = message.transferable;
    obj.extensible = message.extensible;
    obj.created_at = message.createdAt;
    obj.nsfw = message.nsfw;
    obj.royalty_share = message.royaltyShare;
    obj.dynamic_data = message.dynamicData;
    return obj;
  },
  fromAminoMsg(object: ONFTAminoMsg): ONFT {
    return ONFT.fromAmino(object.value);
  },
  fromProtoMsg(message: ONFTProtoMsg): ONFT {
    return ONFT.decode(message.value);
  },
  toProto(message: ONFT): Uint8Array {
    return ONFT.encode(message).finish();
  },
  toProtoMsg(message: ONFT): ONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.ONFT",
      value: ONFT.encode(message).finish()
    };
  }
};
function createBaseMetadata(): Metadata {
  return {
    name: "",
    description: "",
    mediaUri: "",
    previewUri: ""
  };
}
export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.mediaUri !== "") {
      writer.uint32(26).string(message.mediaUri);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.mediaUri = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.mediaUri = object.mediaUri ?? "";
    message.previewUri = object.previewUri ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    return {
      name: object.name,
      description: object.description,
      mediaUri: object.media_uri,
      previewUri: object.preview_uri
    };
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.media_uri = message.mediaUri;
    obj.preview_uri = message.previewUri;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
function createBaseOwner(): Owner {
  return {
    address: "",
    idCollections: []
  };
}
export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.idCollections) {
      IDCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.idCollections.push(IDCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.idCollections = object.idCollections?.map(e => IDCollection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OwnerAmino): Owner {
    return {
      address: object.address,
      idCollections: Array.isArray(object?.id_collections) ? object.id_collections.map((e: any) => IDCollection.fromAmino(e)) : []
    };
  },
  toAmino(message: Owner): OwnerAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.idCollections) {
      obj.id_collections = message.idCollections.map(e => e ? IDCollection.toAmino(e) : undefined);
    } else {
      obj.id_collections = [];
    }
    return obj;
  },
  fromAminoMsg(object: OwnerAminoMsg): Owner {
    return Owner.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerProtoMsg): Owner {
    return Owner.decode(message.value);
  },
  toProto(message: Owner): Uint8Array {
    return Owner.encode(message).finish();
  },
  toProtoMsg(message: Owner): OwnerProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};