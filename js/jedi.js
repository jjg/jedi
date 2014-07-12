function loadFile(filename, cb){

	var fileReq = new XMLHttpRequest();
	fileReq.open('GET', filename, true);
	fileReq.onreadystatechange = fileReqRes;
	fileReq.send();

	function fileReqRes(){
		if(this.readyState == 4){
			if(this.status == 200){
				cb(this.responseText);
			} else {
				cb(null);
			}	
		}
	}	
}

function saveFile(filename, contents, cb){

	var saveFileReq = new XMLHttpRequest();
	saveFileReq.open('POST', filename, true);
	saveFileReq.onreadystatechange = saveFileReqRes;
	saveFileReq.send(contents);

	function saveFileReqRes(){
		if(this.readyState == 4){
			if(this.status == 200){
				cb('file saved');
			} else {
				cb('error saving file');
			}
		}
	}
}
