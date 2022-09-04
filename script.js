let result = document.getElementById('result'),
    input = document.getElementById('city'),
    searchBtn = document.getElementById('btn');


let getWeather = ()=>{
    let city = input.value;

    if(city.length == 0){
        result.innerHTML= `<h3 class='msg'>Please enter a city name</h3>`
    }else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        fetch(url).then((res) => res.json()).then((data) =>{

            result.innerHTML = `
                <h2>${data.name}</h2>
                <h4 class='weather'>${data.weather[0].main}</h4>
                <h4 class='desc'>${data.weather[0].description}</h4>
                <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png' />
                <h1>${data.main.temp} &#176;</h1>
                <div class='temp-co'>
                    <div>
                        <h4 class='title'>min</h4>
                        <h4 class='temp'>${data.main.temp_min}</h4>
                    </div>
                    <div>
                        <h4 class='title'>max</h4>
                        <h4 class='temp'>${data.main.temp_max}</h4>
                    </div>
                </div>
            `

        }).catch(()=>{
            result.innerHTML = `<h3 class='msg'>City not found</h3>`
        })
    }
}

searchBtn.addEventListener('click', getWeather);
window.addEventListener('load', getWeather);