const submit = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector(".middle_layer");

let day = document.getElementById("day");
let today_date = document.getElementById("today_date");

const getInfo = async (e) => {
  e.preventDefault();

  let cityVal = cityName.value;

  if (cityVal == "") {
    city_name.innerHTML = "please enter city name before search";

    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d5c902f73e48a764e35d1e6756a0e6e0`;
      const res = await fetch(url);
      // console.log(res);
      const data = await res.json();

      const arrData = [data];

      city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

      temp_real_val.innerText = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;

      ////////////////////////////////
      if (tempMood == "clear") {
        temp_status.innerHTML =
          ' <i class="fas fa-sun "   style ="color: #eccc68;"></i> ';
      } else if (tempMood == "clouds") {
        temp_status.innerHTML =
          ' <i class="fas fa-cloud "   style ="color: #f1f2f6;"></i> ';
      } else if (tempMood == "rain") {
        temp_status.innerHTML =
          ' <i class="fas fa-cloud-rain "   style ="color:#a4b0be;"></i> ';
      } else if (tempMood == "Haze") {
        temp_status.innerHTML =
          ' <i class="fas fa-cloud "   style ="color: #f1f2f6;"></i> ';
      } else {
        temp_status.innerHTML =
          ' <i class="fas fa-sun "   style ="color: #eccc68;"></i> ';
      }

      data_hide.classList.remove("data_hide");
    } catch {
      city_name.innerHTML = "city name has to be correct";
      data_hide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);

const getCurrentDay = () => {
  let weekday = new Array(7);
  weekday[0] = "sunday";
  weekday[1] = "monday";
  weekday[2] = "tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "thursday";
  weekday[5] = "friday";
  weekday[6] = "saturday";

  let currentTime = new Date();
  days = weekday[currentTime.getDay()];

  day.innerText = days;
};

const getCurrentDate = () => {
  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  console.log(day + " " + month + " " + year);
  today_date.innerHTML = day + "-" + month + "-" + year;
};

getCurrentDate();

getCurrentDay();
