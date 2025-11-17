



let globalData = {};




async function loadData()
{
	console.log("Loading data...");
	{
		let dataNodes = [];

		globalData["general"] = await Func("general");
		globalData["projects"] = await Func("projects");

		let treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
		let currentTextNode;
		while (currentTextNode = treeWalker.nextNode()) {
			if (/\{\{.*\}\}/.test(currentTextNode.textContent)) {
				//console.log("Match", currentTextNode.textContent);
				dataNodes.push(currentTextNode);
			}
		}

		dataNodes.forEach((node) => {
			let fetchedValue = fetchObjectValueByAddress(globalData, node.textContent.replace("{{", "").replace("}}", ""));
			node.textContent = fetchedValue ? fetchedValue : node.textContent;
		});
	}
	console.log("Data loaded!");
}




async function Func(file)
{
	let response = await fetch(`./data/${file}.json`);
	return await response.json();
}




function fetchObjectValueByAddress(ffffff, address)
{
	let subaddresses = address.split('.');

	let currentObject = ffffff;
	for (let subaddressIndex = 0; subaddressIndex < subaddresses.length; subaddressIndex++) {
		if (currentObject.hasOwnProperty(subaddresses[subaddressIndex]))
			currentObject = currentObject[subaddresses[subaddressIndex]];
		else
			return null;
	}

	return currentObject;
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