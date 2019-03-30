
let usingSpotify = false;
let spotifyToken;

if (!window.location.href.includes('https://mv-hacks.com')) {

	let hash = window.location.hash;

	if (hash.includes('access_token')) {
		while (hash.includes('&')) {
			hash = hash.substr(0, hash.indexOf('&'));
		}

		hash = hash.substr(14);
		spotifyToken = hash;
		usingSpotify = true;
	} else {
		window.location.href = 'https://accounts.spotify.com/authorize?client_id=078dff03b82841da8b5f6cb3436ef3db&response_type=token&redirect_uri=' + encodeURIComponent(window.location.href) + '&scope=user-read-currently-playing';
	}
}

if (usingSpotify) {
	function loadSongFromSpotify() {
		window.fetch('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: {
				'Authorization': 'Bearer ' + spotifyToken
			}
		}).then(res => {
			if (res.status === 401) {
				window.location.href = '/dashboard/';
			}

			return res.json()
		}).then(res => {

			let artistString = '';

			for (let i = 0; i < res.item.artists.length; i++) {
				if (res.item.artists.length - 1 === i) {
					artistString += res.item.artists[i].name;
				} else {
					artistString += res.item.artists[i].name + ', ';
				}
			}

			spotifyArtist.innerText = artistString;
			spotifySong.innerText = res.item.name;
			spotifySong.style.fontSize = Math.min(36, 1200 / res.item.name.length) + 'px';
			spotfiyImage.src = res.item.album.images[0].url;
			spotifyDiv.style.display = 'block';
			setTimeout(() => {
				loadSongFromSpotify();
			}, (res.item.duration_ms - res.progress_ms) + 1000);
		}).catch(err => {
			console.log(err);

			setTimeout(() => {
				loadSongFromSpotify();
			}, 60000);
		});
	}

	loadSongFromSpotify();
}
