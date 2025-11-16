



const images = [
	"./images/cover-arimalodge.webp",
	"./images/cover-embersoftheevening.webp",
	"./images/cover-thesilentswan.webp",
	"./images/icon-applemusic-dark.webp",
	"./images/icon-applemusic-light.webp",
	"./images/icon-artstation-dark.webp",
	"./images/icon-artstation-light.webp",
	"./images/icon-discord-dark.webp",
	"./images/icon-discord-light.webp",
	"./images/icon-email-dark.webp",
	"./images/icon-email-light.webp",
	"./images/icon-github-dark.webp",
	"./images/icon-github-light.webp",
	"./images/icon-gitlab-dark.webp",
	"./images/icon-gitlab-light.webp",
	"./images/icon-instagram-dark.webp",
	"./images/icon-instagram-light.webp",
	"./images/icon-itchio-dark.webp",
	"./images/icon-itchio-light.webp",
	"./images/icon-linkedin-dark.webp",
	"./images/icon-linkedin-light.webp",
	"./images/icon-psstore-dark.webp",
	"./images/icon-psstore-light.webp",
	"./images/icon-spotify-dark.webp",
	"./images/icon-spotify-light.webp",
	"./images/icon-steam-dark.webp",
	"./images/icon-steam-light.webp",
	"./images/icon-twitter-dark.webp",
	"./images/icon-twitter-light.webp",
	"./images/icon-twitterx-dark.webp",
	"./images/icon-twitterx-light.webp",
	"./images/icon-website-dark.webp",
	"./images/icon-website-light.webp",
	"./images/icon-youtube-dark.webp",
	"./images/icon-youtube-light.webp",
	"./images/picture-arimalodge.webp",
	"./images/picture-embersoftheevening.webp",
	"./images/picture-thesilentswan.webp",
	"./images/portrait-andoni.webp",
	"./images/portrait-carlos.webp",
	"./images/portrait-ekain.webp",
	"./images/portrait-francisco.webp",
	"./images/portrait-hector.webp",
	"./images/portrait-miguel.webp",
	"./images/portrait-nidai.webp",
	"./images/portrait-raul.webp",
	"./images/portrait-solanis.webp",
	"./images/portrait-tabernero.webp",
	"./images/portrait-xabi.webp",
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