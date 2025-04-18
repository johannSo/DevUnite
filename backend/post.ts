import PocketBase from 'pocketbase';
import promptSync from 'prompt-sync';
import fs from 'fs';
import path from 'path';
import mime from 'mime';

const prompt = promptSync();
const pb = new PocketBase('http://127.0.0.1:8090');

async function post() {
  try {
    const text = prompt('Text: ');
    const imagePath = prompt('Image path: ').trim();

    let postData: any = {
      text: text
    };

    if (imagePath && fs.existsSync(imagePath)) {
      const fileBuffer = fs.readFileSync(imagePath);
      const fileName = path.basename(imagePath);
      const mimeType = mime.getType(imagePath) || 'application/octet-stream';
      const file = new File([fileBuffer], fileName, { type: mimeType });
      postData.image = file;
    } else if (imagePath) {
      console.error('Datei nicht gefunden:', imagePath);
      return;
    }

    const created = await pb.collection('posts').create(postData);

    console.log('Post erstellt:', created);
  } catch (error) {
    console.error('Fehler beim Erstellen:', error);
  }
}

post();
