var T
var Wx
var RH
var locationName

function SetWeather() {
	var parameters
	
	$.ajax({
		method:'Get',
		data:parameters,
		url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-91E62422-F2EC-4E55-83C1-B09EB62AF263&format=JSON&locationName=%E5%AE%9C%E8%98%AD%E7%B8%A3,%E8%8A%B1%E8%93%AE%E7%B8%A3,%E8%87%BA%E6%9D%B1%E7%B8%A3,%E6%BE%8E%E6%B9%96%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E9%80%A3%E6%B1%9F%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82,%E5%9F%BA%E9%9A%86%E5%B8%82,%E6%96%B0%E7%AB%B9%E7%B8%A3,%E6%96%B0%E7%AB%B9%E5%B8%82,%E8%8B%97%E6%A0%97%E7%B8%A3,%E5%BD%B0%E5%8C%96%E7%B8%A3,%E5%8D%97%E6%8A%95%E7%B8%A3,%E5%98%89%E7%BE%A9%E7%B8%A3,%E5%98%89%E7%BE%A9%E5%B8%82,%E5%B1%8F%E6%9D%B1%E7%B8%A3&elementName=T,RH,Wx&sort=time'
	
	}).done(function(data) {

		//T溫度、RH相對濕度、WX天氣現象(抓第一筆--當天資料)
		T = data.records.locations[0].location[16].weatherElement[0].time[0].elementValue[0].value
		RH = data.records.locations[0].location[16].weatherElement[1].time[0].elementValue[0].value
		Wx = data.records.locations[0].location[16].weatherElement[2].time[0].elementValue[0].value
		locationName=data.records.locations[0].location[16].locationName

		//獲取
		document.getElementById("city").innerHTML =locationName
		document.getElementById("Weather").innerHTML = Wx
		document.getElementById("temperature").innerHTML = '攝氏'+ T +'度' 
		document.getElementById("humidity").innerHTML = '相對濕度'+ RH +'%'
	});
}

SetWeather()


