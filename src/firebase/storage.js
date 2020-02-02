import { storage } from './utils';
import uuidv4 from 'uuid/v4';

export const uploadImage = async ({ file, id, error }) => {
  const storageRef = storage.ref();
  // Create a reference to file
  const path = error ? `images/${error}/${uuidv4()}` : `images/correct/${id}`;
  const mountainImagesRef = storageRef.child(path);
  return await mountainImagesRef.put(file);
};
