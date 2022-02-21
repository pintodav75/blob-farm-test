export interface Blob {
  id: string;
  name: string;
  size: number; // in millimeters
  color: string;
  createdAt?: Date; // Creation date
  updatedAt?: Date; // Last updated date
}