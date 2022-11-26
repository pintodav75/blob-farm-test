import { Blob } from "../models/blob";
import { Error } from "../models/error"
import blobsJson from "./initial-data.json"

// This variable represent the fake database
// Warning : Since it's stored in RAM, the database will be reset each time the server restarts
let _blobs: Blob[] = [];

// Init database with initial data file
function init(): void {
  _blobs = (blobsJson as Blob[]).map((b) => {
    b.createdAt = new Date();
    return b;
  });
}

function list(): Blob[] {
  return _blobs;
}

function get(id: string): Blob | null {
   const res = _blobs.find((b) => b.id === id)
   if (!res) return null
   return res
}

function add(blob: Blob): Error | undefined {
  const alreadyExist = _blobs.find((b) => b.id === blob.id)
  if (alreadyExist) {
    return {
      status: 400,
      message: "a blob with this id already exists"
    } as Error
  }
  
  blob.createdAt = new Date()
  _blobs = [..._blobs, blob]
}

function remove(id: string): void {
  _blobs = _blobs.filter((b) => b.id !== id)
}

function update(blob: Blob): void {
  const modif = _blobs.find((b) => b.id === blob.id)
  if (modif) {
    modif.name = blob.name
    modif.size = blob.size
    modif.color = blob.color
    modif.updatedAt = new Date()
  }
}

export default { 
  init,
  list,
  get,
  add,
  remove,
  update
};