let app = firebase.initializeApp({
	apiKey: "AIzaSyBiD6KmWyFK_DTXWpFiDYqi_FjtjGxnVjI",
	authDomain: "mvhacks-ba7cf.firebaseapp.com",
	databaseURL: "https://mvhacks-ba7cf.firebaseio.com",
	projectId: "mvhacks-ba7cf",
	storageBucket: "mvhacks-ba7cf.appspot.com",
	messagingSenderId: "857982499027"
});

let db = firebase.firestore(app);
db.settings({
	timestampsInSnapshots: true
});

db.collection('announcements').onSnapshot(snapshot => {
	snapshot = snapshot.docs.map(doc => doc.data()).sort((a, b) => b.time - a.time);

	let html = '';

	for (let i = 0; i < snapshot.length; i++) {
		let data = snapshot[i];

		data.time = (new Date(data.time)).toLocaleDateString('en-US', {
			weekday: 'long',
			timeZone: 'America/Los_Angeles',
			hour12: true,
			hour: 'numeric',
			minute: 'numeric',
		});

		html += `
			<div class="announcement">
				<span class="title">${data.title}</span>
				<span class="time">${data.time}</span>
				<br>
				<span class="body">${data.html}</span>
			</div>
		`;
	}

	theAnnouncements.innerHTML = html;
}, err => {
	console.log(err);
});


