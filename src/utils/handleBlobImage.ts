import { storage } from "../services/firebase";

export default async function(image: string){
  const filename = image.substring(image.lastIndexOf('/') + 1);

  const blob: Blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", image, true);
    xhr.send(null);
  });
  
  const ref = storage.ref(`images/${filename}`);
  const snapshot = await ref.put(blob, { contentType: "image/png" });
  const remoteURL = await snapshot.ref.getDownloadURL();

  return remoteURL
}