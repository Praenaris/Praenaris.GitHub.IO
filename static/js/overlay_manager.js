



const overlay = document.getElementById("pr-overlay");
const overlayContainers = document.getElementsByClassName("pr-overlay-container");




function hideOverlay(hideContainersBeforehand, event)
{
	if ((event != undefined) && (event.target != event.currentTarget)) return;

	if (hideContainersBeforehand)
		hideAllOverlayContainers(false);
	overlay.classList.add("hidden");
}


function showOverlay(event)
{
	if ((event != undefined) && (event.target != event.currentTarget)) return;

	overlay.classList.remove("hidden");
}




function hideAllOverlayContainers(hideOverlayAfterwards, event)
{
	if ((event != undefined) && (event.target != event.currentTarget)) return;

	for (let container of overlayContainers)
		hideOverlayContainer(container, false);
	if (hideOverlayAfterwards) hideOverlay(false);
}




function hideOverlayContainerById(elementId, hideOverlayAfterwards, event)
{
	hideOverlayContainer(document.getElementById(elementId), hideOverlayAfterwards, event);
}

function hideOverlayContainer(element, hideOverlayAfterwards, event)
{
	if ((event != undefined) && (event.target != event.currentTarget)) return;

	element.classList.add("hidden");
	if (hideOverlayAfterwards) hideOverlay(false);
}


function showOverlayContainerById(elementId, showOverlayBeforehand, event)
{
	showOverlayContainer(document.getElementById(elementId), showOverlayBeforehand, event);
}

function showOverlayContainer(element, showOverlayBeforehand, event)
{
	if ((event != undefined) && (event.target != event.currentTarget)) return;

	if (showOverlayBeforehand) showOverlay();
	element.classList.remove("hidden");
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