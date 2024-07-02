const currentDay = document.getElementById("current-day");
const currentTime = document.getElementById("current-time");
let date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];



currentDay.textContent = days[date.getDay()];

currentTime.textContent = date.toISOString().slice(11, 19); 
