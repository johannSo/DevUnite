import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

async function listPublicUsers() {
  try {
    const result = await pb.collection('users').getFullList();

    console.log("List of users:");

    result.forEach(user => {
      const username = user.username ?? user.name ?? 'No username';
      const email = user.email ?? 'E-Mail not public';

      console.log(`Username: ${username} \nE-Mail: ${email}`);
    });

  } catch (error) {
    console.error('Failed to load users! Error:', error);
  }
}

listPublicUsers();
