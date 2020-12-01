window.addEventListener("load",()=>{
    let long;
    let lat;
    let temperatureDescription=document.querySelector(".temperature-description");
    let temperatureDegree=document.querySelector(".temperature-degree");
    let locationTimezone=document.querySelector(".location-timezone");
    let icon=document.querySelector(".icon");

    let temperatureSection=document.querySelector(".temperature");
    let temperatureSpan=document.querySelector(".temperature span");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            // console.log(lat,long);

            const api=`https://api.weatherapi.com/v1/current.json?key=eeeda45d04084958ae072753200112&q=${lat},${long}`;

            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                // console.log(data);

                const temperature = data.current;

                temperatureDegree.textContent=temperature.temp_c;
                temperatureDescription.textContent=temperature.condition.text;
                locationTimezone.textContent=data.location.tz_id;
                icon.src=temperature.condition.icon;

                // const temperature=data.current.condition.text;
                console.log(temperature.condition);

                temperatureSection.addEventListener("click",()=>{
                    if(temperatureSpan.textContent==="C"){
                        temperatureSpan.textContent="F";
                        temperatureDegree.textContent=temperature.temp_f;
                    }
                    else{
                        temperatureSpan.textContent="C";
                        temperatureDegree.textContent=temperature.temp_c;
                    }
                })
            });
        });
    }
   
});