



const sectionMap = {
	"#about": "AboutUs",
	"#contact": "ContactUs",
	"#home": "OurHome",
	"#lost": "NotFound",
	"#worlds": "OurWorlds",
}


const defaultSectionHashtag = "#home";
const fallbackSectionHashtag = "#lost";
var currentSectionHashtag = null;




function autoLoadSection()
{
	let queriedSectionHashtag = window.location.hash;


	if (queriedSectionHashtag != "") {
		showSection(queriedSectionHashtag);
	}
	else {
		showSection(defaultSectionHashtag);
	}
}




function changeSection(targetSectionHashtag)
{
	console.log(`Changing from the ${currentSectionHashtag} to the ${targetSectionHashtag} section...`);
	{
		const loadingSectionElement = document.getElementById("LoadingSection");



		loadingSectionElement.addEventListener("animationend", function handler() {
			loadingSectionElement.removeEventListener("animationend", handler);

			hideSection(currentSectionHashtag);
			showSection(targetSectionHashtag);

			sleep(125).then(() => {
				loadingSectionElement.classList.add("Hidden");
				loadingSectionElement.classList.remove("Shown");
			});
		});
		loadingSectionElement.classList.add("Shown");
		loadingSectionElement.classList.remove("Hidden");

	}
}




function hideSection(sectionHashtag)
{
	console.log(`Hiding the ${sectionHashtag} section...`);
	{
		const sectionElement = document.getElementById(retrieveSectionId(sectionHashtag));


		sectionElement.classList.remove("Shown");


		return sectionElement;
	}
}


function showSection(sectionHashtag)
{
	console.log(`Showing the ${sectionHashtag} section...`);
	{
		const sectionElement = document.getElementById(retrieveSectionId(sectionHashtag));


		sectionElement.classList.add("Shown");


		return sectionElement;
	}
}




function retrieveSectionId(sectionHashtag)
{
	let sectionId = sectionMap[sectionHashtag];


	if (sectionId != undefined) {
		console.log(`Retrieved ${sectionId} from ${sectionHashtag}`);
		currentSectionHashtag = sectionHashtag;
	}
	else {
		sectionId = sectionMap[fallbackSectionHashtag];
		console.log(`Fallen back to ${sectionId} from ${sectionHashtag}`);
		currentSectionHashtag = fallbackSectionHashtag;
	}


	return sectionId;
}


function sleep(timeout) {
	return new Promise(handler => setTimeout(handler, timeout));
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