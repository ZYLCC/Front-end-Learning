/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */

function getWeather(city_code) {
  // 1.1 获取北京市天气数据
  myAxios({
    url: 'http://hmajax.itheima.net/api/weather',
    params: {
      city: city_code
    }
  }).then(res => {
    console.log(res)
    const {area, date, dateLunar, dateShort, dayForecast, psPm25, psPm25Level, temperature, todayWeather, weather, weatherImg, windDirection, windPower} = res.data

    // 日期
    const date_str = `<span class="dateShort">${date}</span>
    <span class="calendar">农历&nbsp;
      <span class="dateLunar">${dateLunar}</span>
    </span>`
    document.querySelector('.title').innerHTML = date_str
    // 城市
    document.querySelector('.area').innerHTML = area
    // 当天气温
    const weather_box_str = `<div class="tem-box">
    <span class="temp">
      <span class="temperature">${temperature}</span>
      <span>°</span>
    </span>
  </div>
  <div class="climate-box">
    <div class="air">
      <span class="psPm25">${psPm25}</span>
      <span class="psPm25Level">${psPm25Level}</span>
    </div>
    <ul class="weather-list">
      <li>
        <img src="${weatherImg}" class="weatherImg" alt="">
        <span class="weather">${weather}</span>
      </li>
      <li class="windDirection">${windDirection}</li>
      <li class="windPower">${windPower}</li>
    </ul>
  </div>` 
    document.querySelector('.weather-box').innerHTML = weather_box_str
    // 当天天气
    const today_weather_str = `<div class="range-box">
    <span>今天：</span>
    <span class="range">
      <span class="weather">${weather}</span>
      <span class="temNight">${todayWeather.temNight}</span>
      <span>-</span>
      <span class="temDay">${todayWeather.temDay}</span>
      <span>℃</span>
    </span>
  </div>
  <ul class="sun-list">
    <li>
      <span>紫外线</span>
      <span class="ultraviolet">强</span>
    </li>
    <li>
      <span>湿度</span>
      <span class="humidity">53</span>%
    </li>
    <li>
      <span>日出</span>
      <span class="sunriseTime">06:38</span>
    </li>
    <li>
      <span>日落</span>
      <span class="sunsetTime">17:18</span>
    </li>
  </ul>`
  })
}

// 打开页面默认显示
getWeather('110100')