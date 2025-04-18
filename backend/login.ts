import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function login(username: string, password: string) {
  try {
    const authData = await pb.collection('users').authWithPassword(username, password);
    
    console.log('Login erfolgreich:', authData);
    console.log('Token:', pb.authStore.token);
    console.log('Benutzer:', pb.authStore.model);

    return authData;
  } catch (err) {
    console.error('Login fehlgeschlagen:', err);
    throw err;
  }
}

/*
**Nutzung im Frontend:**

login('cooluser123', 'meinpasswort')
  .then((data) => {
    // Weiterleitung oder Speicherung etc.
  })
  .catch((err) => {
    // Fehleranzeige
  });

**Auth-Zustand prüfen:**

if (pb.authStore.isValid) {
  console.log('Benutzer ist eingeloggt:', pb.authStore.model);
}

**Logout:**

pb.authStore.clear(); // Loggt den Benutzer aus

*/