console.log(123);
function httpRequest(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			callback(true);
		}
	}

	xhr.onerror = function(){
		callback(false);
	}

	xhr.send();
}

function checkStatus(){
    httpRequest('https://www.baidu.com/', function(status){
        chrome.browserAction.setIcon({path: 'images/'+(status?'icon19.png':'icon19.png')});
        setTimeout(checkStatus, 5000);
    });
}

checkStatus();
/*setInterval(function(){*/
/*	httpRequest('https://www.baidu.com/',function(status){
		 
		
		 chrome.browserAction.setIcon({ path: "/images/bird_blue.png" });


 
	})*/
/*})*/