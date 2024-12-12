// Correct approach using async/await
async function fetchData() {
  try {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          // User is signed in, access database here.
          const databaseRef = firebase.database().ref();
          databaseRef.once('value', (snapshot) => {
            console.log(snapshot.val());
          });
      }
    })
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();