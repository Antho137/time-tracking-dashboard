
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

let workDaily = document.getElementById("workdaily");
let workWeekly = document.getElementById("workweekly");
let workMonthly = document.getElementById("workmonthly");

let playDaily = document.getElementById("playdaily");
let playWeekly = document.getElementById("playweekly");
let playMonthly = document.getElementById("playmonthly");

let studyDaily = document.getElementById("studydaily");
let studyWeekly = document.getElementById("studyweekly");
let studyMonthly = document.getElementById("studymonthly");

let exerciseDaily = document.getElementById("exercisedaily");
let exerciseWeekly = document.getElementById("exerciseweekly");
let exerciseMonthly = document.getElementById("exercisemonthly");

let socialDaily = document.getElementById("socialdaily");
let socialWeekly = document.getElementById("socialweekly");
let socialMonthly = document.getElementById("socialmonthly");

let selfcareDaily = document.getElementById("selfcaredaily");
let selfcareWeekly = document.getElementById("selfcareweekly");
let selfcareMonthly = document.getElementById("selfcaremonthly");

dailyBtn.addEventListener("click", function() {
    workDaily.style.display = "block";
    workWeekly.style.display = "";
    workMonthly.style.display = "";
    playDaily.style.display = "block";
    playWeekly.style.display = "";
    playMonthly.style.display = "";
    
    studyMonthly.style.display = "";
    studyWeekly.style.display = "";
    studyDaily.style.display = "block";
    exerciseMonthly.style.display = "";
    exerciseWeekly.style.display = "";
    exerciseDaily.style.display = "block";
    
    socialMonthly.style.display = "";
    socialWeekly.style.display = "";
    socialDaily.style.display = "block";
    selfcareMonthly.style.display = "";
    selfcareWeekly.style.display = "";
    selfcareDaily.style.display = "block";
})

weeklyBtn.addEventListener("click", function() {
    workWeekly.style.display = "block";
    workDaily.style.display = "none";
    workMonthly.style.display = "";
    playWeekly.style.display = "block";
    playDaily.style.display = "none";
    playMonthly.style.display = "";
    
    studyMonthly.style.display = "";
    studyWeekly.style.display = "block";
    studyDaily.style.display = "none";
    exerciseMonthly.style.display = "";
    exerciseWeekly.style.display = "block";
    exerciseDaily.style.display = "none";
    
    socialMonthly.style.display = "";
    socialWeekly.style.display = "block";
    socialDaily.style.display = "none";
    selfcareMonthly.style.display = "";
    selfcareWeekly.style.display = "block";
    selfcareDaily.style.display = "none";
})

monthlyBtn.addEventListener("click", function() {
    workMonthly.style.display = "block";
    workWeekly.style.display = "";
    workDaily.style.display = "none";
    playMonthly.style.display = "block";
    playWeekly.style.display = "";
    playDaily.style.display = "none";
    
    studyMonthly.style.display = "block";
    studyWeekly.style.display = "";
    studyDaily.style.display = "none";
    exerciseMonthly.style.display = "block";
    exerciseWeekly.style.display = "";
    exerciseDaily.style.display = "none";
    
    socialMonthly.style.display = "block";
    socialWeekly.style.display = "";
    socialDaily.style.display = "none";
    selfcareMonthly.style.display = "block";
    selfcareWeekly.style.display = "";
    selfcareDaily.style.display = "none";
})