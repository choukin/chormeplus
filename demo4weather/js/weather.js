function httpRequest(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}

function showWeather(result){
	result = JSON.parse(result);
	var list = result.results[0].weather_data;
	var table = '<table><tr><th>日期</th><th>天气</th><th>说明</th><th>温度</th></tr>'
	 for(var i in list){
        var d = new Date(list[i].dt*1000);
        table += '<tr>';
        table += '<td>'+list[i].date+'</td>';
        table += '<td><image src="'+list[i].dayPictureUrl+'"></td>';
        table += '<td>'+list[i].weather+' </td>';
        table += '<td>'+list[i].temperature+' </td>';
        table += '</tr>';
    }

    table += '</table>';
    document.getElementById('weather').innerHTML = table;

}

var city = localStorage.getItem('city');
city = city?city:"北京";
var url = "http://api.map.baidu.com/telematics/v3/weather?output=json&ak=3ETjGt4elmQe7G5pEnVpuskb&location="+city;

httpRequest(url, showWeather);