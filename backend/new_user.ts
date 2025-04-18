import PocketBase from 'pocketbase';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const pb = new PocketBase('http://127.0.0.1:8090');

async function createUser() {
  try {
    const username = prompt('Username: ');
    const email = prompt('Email: ');
    const password = prompt('Passwort: ');
    if (password.length <= 7) {
      console.log("Password too short")
      process.exit(1);
    }
    const newUserData = {
      username: username,
      email: email,
      emailVisibility: false,
      password: password,
      passwordConfirm: password
    };

    const createdUser = await pb.collection('users').create(newUserData);

    console.log('Created new user:', createdUser);
  } catch (error) {
    console.error('Fehler beim Erstellen:', error);
  }
}

createUser();
