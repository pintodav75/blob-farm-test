import { Blob } from "../models/blob";
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
  // TODO: Get blob by id
  return null;
}

function add(blob: Blob): void {
  // TODO: Add new blob to database
}

function remove(id: string): void {
  // TODO: Remove a blob from database
}

function update(blob: Blob): void {
  // TODO: Update a blob
}

export default { 
  init,
  list,
  get,
  add,
  remove,
  update
};