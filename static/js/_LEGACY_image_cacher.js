



const images = [
	"/img/cover-arimalodge.webp",
	"/img/cover-embersoftheevening.webp",
	"/img/cover-thesilentswan.webp",
	"/img/icon-applemusic-dark.webp",
	"/img/icon-applemusic-light.webp",
	"/img/icon-artstation-dark.webp",
	"/img/icon-artstation-light.webp",
	"/img/icon-discord-dark.webp",
	"/img/icon-discord-light.webp",
	"/img/icon-email-dark.webp",
	"/img/icon-email-light.webp",
	"/img/icon-github-dark.webp",
	"/img/icon-github-light.webp",
	"/img/icon-gitlab-dark.webp",
	"/img/icon-gitlab-light.webp",
	"/img/icon-instagram-dark.webp",
	"/img/icon-instagram-light.webp",
	"/img/icon-itchio-dark.webp",
	"/img/icon-itchio-light.webp",
	"/img/icon-linkedin-dark.webp",
	"/img/icon-linkedin-light.webp",
	"/img/icon-psstore-dark.webp",
	"/img/icon-psstore-light.webp",
	"/img/icon-spotify-dark.webp",
	"/img/icon-spotify-light.webp",
	"/img/icon-steam-dark.webp",
	"/img/icon-steam-light.webp",
	"/img/icon-twitter-dark.webp",
	"/img/icon-twitter-light.webp",
	"/img/icon-twitterx-dark.webp",
	"/img/icon-twitterx-light.webp",
	"/img/icon-website-dark.webp",
	"/img/icon-website-light.webp",
	"/img/icon-youtube-dark.webp",
	"/img/icon-youtube-light.webp",
	"/img/picture-arimalodge.webp",
	"/img/picture-embersoftheevening.webp",
	"/img/picture-thesilentswan.webp",
	"/img/portrait-andoni.webp",
	"/img/portrait-carlos.webp",
	"/img/portrait-ekain.webp",
	"/img/portrait-francisco.webp",
	"/img/portrait-hector.webp",
	"/img/portrait-miguel.webp",
	"/img/portrait-nidai.webp",
	"/img/portrait-raul.webp",
	"/img/portrait-solanis.webp",
	"/img/portrait-tabernero.webp",
	"/img/portrait-xabi.webp",
];




async function cacheImages()
{
	console.log("Caching images...");
	{
		for (const image of images) {
			await (await fetch(image)).text().then(content => console.log(`Cached ${image} with ${content.length} bytes`));
			let link = document.createElement("link");
			link.rel = "preload";
			link.type = "image/webp";
			link.as = "image";
			link.href = image;
			document.head.append(link);
		}
	}
	console.log("Images cached!");
}




/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠙⢶⣄⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢰⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⢻⣿⣶⣤⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢸⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⢀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⣿⣿⣿⣿⣷⣦⣀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢀⣀⣀⣀⣀⣐⣾⣴⣀⣀⣀⣀⣀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠙⢶⣄⡀⡀⡀⡀⡀⡀⡀⠐⢭⣝⡛⠿⣿⣿⣿⣦⣄⠠⣀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠐⢻⠙⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢻⣿⣷⣦⣀⡀⡀⡀⡀⡀⠹⣿⣿⣶⣮⣝⣻⠿⣷⣄⠩⣳⢦⣄⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢸⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⢍⣛⠿⢿⣿⣦⣄⡀⡀⡀⢻⣿⣿⣿⣿⣿⣿⣶⣯⣆⡈⠳⣮⣟⠷⣶⣤⣀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢹⣿⣷⣮⣭⣛⡿⢶⣄⠈⢭⣝⣛⣛⡿⠿⣿⣿⣿⣿⣮⢪⡻⣿⣮⣝⡻⢿⣶⣤⣄⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠘⡛⠿⠿⣿⣿⣿⣷⣮⣕⠈⣿⣿⣿⣿⣿⣷⣶⣾⣭⣿⣃⠹⣮⡙⢿⣿⣶⣭⡛⢿⣿⣷⣦⣄⣀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠘⣿⣿⣶⣶⣭⣽⣛⡿⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠘⢿⣦⡙⢿⣿⣿⣷⣮⣙⠿⣿⣿⣿⣶⣤⣀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⠑⢦⣄⡀⡀⡀⡀⡀⡀⡀⡀⡀⣿⣿⣿⣿⣿⣿⣿⣿⡀⢛⣛⣛⣛⣛⣛⣛⣛⣿⣿⣿⣿⣅⠈⢿⣿⣷⣝⠿⣿⣿⣿⣷⣦⣍⠉⠉⠉⠉⠉⠑⣂⠴⠂⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⠘⠿⣿⣷⣦⣀⡀⡀⡀⡀⡀⢲⣶⣶⣶⣤⣭⣭⣭⣥⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠻⣿⣿⣷⣌⡀⡀⡀⠈⠉⠙⠒⢀⣠⡴⠋⠁⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⠙⣷⣶⣯⣽⣟⣲⠄⡀⡀⢸⣿⣿⣿⣿⣿⣿⣿⣿⠧⢸⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣛⣛⡀⡀⠙⠿⠿⠿⣷⣄⡀⡀⢀⣤⣶⠟⠋⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⢩⣭⣭⣽⣿⣟⣛⣓⣀⠨⣭⣭⣭⣷⣶⣶⣶⣾⡇⢘⣩⣭⣭⣵⣶⣶⣾⣿⣿⣿⣿⣿⣿⡀⡀⡀⡀⡀⢀⣀⣡⡴⠟⡿⠃⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⠿⠿⣿⣿⣿⣿⣿⣛⡀⣿⣿⣿⣿⣿⣿⡿⠿⢿⡀⢻⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠛⣉⣠⠤⠴⠒⠛⠉⠁⡀⡀⡸⠁⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⢸⣿⣿⣿⠿⠿⣿⣟⡀⣋⣩⣭⣥⣶⣶⣾⣿⣿⡇⢸⡿⠿⠛⠛⢉⣁⠤⠤⠒⠊⠉⠁⡀⡀⡀⡀⡀⡀⡀⡀⡀⡇⡀⡀⠔⣊⣉⡙⠲⡄⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⣶⣶⣿⣿⠿⢿⣟⠂⣿⣿⣿⣿⠿⠿⠛⠛⠉⣁⠠⠄⠒⠂⠉⠁⡀⡀⡀⡀⡀⡀⡀⡀⡀⣀⣤⣤⣤⣤⣄⡀⠃⡀⡀⢪⠒⢦⠙⡆⢹⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⣭⣽⣶⣾⣿⠿⠟⠐⠋⠉⡀⡀⠄⠐⡀⠈⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣀⣀⣀⣀⡴⢛⡽⢖⣚⣛⣒⠦⢍⡳⣄⣀⣈⣠⠞⣠⢇⡾⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⠐⠛⠉⠉⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡔⠶⡀⢐⠪⠝⠒⠛⠛⠓⠒⠫⠔⠩⡀⡀⡀⠉⠢⠑⠌⠚⠶⣶⡯⠵⠋⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/
/*⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀*/