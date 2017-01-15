function httpRequest(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.setRequestHeader("apikey","7554d1e852208ff30970ea6a9bab7392");
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			callback(xhr.responseText);
		}
	}
	xhr.send("ip=myip");
}

function IPCallBack(data)
{
    document.getElementById('ip_div').innerText = data.ip
 
} 
function jsonp(data){
	var script = document.createElement("script");
	script.src = data.url;
	document.getElementsByTagName('head')[0].appendChild(script);
	 

}

function callbackFun(data)
{
    console.log(data);
 
} 
 jsonp({url:'http://www.pm25.in/api/querys/pm2_5.json?city=beijing&token=5j1znBVAsnSf5xQyNQyq'})
// httpRequest('http://pv.sohu.com/cityjson?ie=utf-8',function(ipdata){
// 	alert(ipdata);
//   document.getElementById('ip_div').innerText = ipdata.data.ip;
// })