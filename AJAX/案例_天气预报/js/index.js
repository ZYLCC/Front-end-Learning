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
    const { area, date, dateLunar, dateShort, dayForecast, psPm25, psPm25Level, temperature, todayWeather, weather, weatherImg, windDirection, windPower } = res.data

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
        <span class="ultraviolet">${todayWeather.ultraviolet}</span>
      </li>
      <li>
        <span>湿度</span>
        <span class="humidity">${todayWeather.humidity}</span>%
      </li>
      <li>
        <span>日出</span>
        <span class="sunriseTime">${todayWeather.sunriseTime}</span>
      </li>
      <li>
        <span>日落</span>
        <span class="sunsetTime">${todayWeather.sunsetTime}</span>
      </li>
    </ul>`
    document.querySelector('.today-weather').innerHTML = today_weather_str
    // 七日预测
    const week_weather_str = dayForecast.map(day_forecast => {
      const { date, dateFormat, temDay, temNight, weather, weatherImg, windDirection, windPower } = day_forecast
      return `
      <li class="item">
      <div class="date-box">
        <span class="dateFormat">${dateFormat}</span>
        <span class="date">${date}</span>
      </div>
      <img src="${weatherImg}" alt="" class="weatherImg">
      <span class="weather">${weather}</span>
      <div class="temp">
        <span class="temNight">${temNight}</span>-
        <span class="temDay">${temDay}</span>
        <span>℃</span>
      </div>
      <div class="wind">
        <span class="windDirection">${windDirection}</span>
        <span class="windPower">&lt;${windPower}</span>
      </div>
    </li>`
    }).join('')
    document.querySelector('.week-wrap').innerHTML = week_weather_str
  })
}

// 打开页面默认显示
getWeather('110100')