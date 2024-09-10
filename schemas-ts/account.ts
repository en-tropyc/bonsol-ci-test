// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class Account {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Account {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

writable():boolean {
  return !!this.bb!.readInt8(this.bb_pos);
}

mutate_writable(value:boolean):boolean {
  this.bb!.writeInt8(this.bb_pos + 0, value ? 1 : 0);
  return true;
}

pubkey(index: number):number|null {
    return this.bb!.readUint8(this.bb_pos + 1 + index);
}

static sizeOf():number {
  return 33;
}

static createAccount(builder:flatbuffers.Builder, writable: boolean, pubkey: number[]|null):flatbuffers.Offset {
  builder.prep(1, 33);

  for (let i = 31; i >= 0; --i) {
    builder.writeInt8((pubkey?.[i] ?? 0));

  }

  builder.writeInt8(Number(Boolean(writable)));
  return builder.offset();
}

}
