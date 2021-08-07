//抓年、月、日
var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();
//改成文字
var dayName= date.toLocaleString(navigator.language,{weekday:'long'});
var monthName= date.toLocaleString(navigator.language,{month:'long'});

//英文轉換成中文

var C_dayName;  
var C_monthName;
/*
if (dayName == "Monday") {
    C_dayName = "星期一";
} else if (dayName == "Tuesday") {
    C_dayName = "星期二";
} else if (dayName == "Wednesday") {
    C_dayName = "星期三";
} else if (dayName == "Thursday") {
    C_dayName = "星期四";
} else if (dayName == "Friday") {
    C_dayName = "星期五";
} else if (dayName == "Saturday") {
    C_dayName = "星期六";
} else {
    C_dayName = "星期日";
};
*/
if (monthName == "1月") {
    C_monthName = "一月";
} else if (monthName == "2月") {
    C_monthName = "二月";
} else if (monthName == "3月") {
    C_monthName = "三月";
} else if (monthName == "4月") {
    C_monthName = "四月";
} else if (monthName == "5月") {
    C_monthName = "五月";
} else if (monthName == "6月") {
    C_monthName = "六月";
} else if (monthName == "7月") {
    C_monthName = "七月";
} else if (monthName == "8月") {
    C_monthName = "八月";
} else if (monthName == "9月") {
    C_monthName = "九月";
} else if (monthName == "10月") {
    C_monthName = "十月";
} else if (monthName == "11月") {
    C_monthName = "十一月";
} else {
    C_monthName = "十二月";
}

//呈現內容
document.getElementById('day').innerHTML=day;
document.getElementById('year').innerHTML=year;
document.getElementById('monthName').innerHTML=C_monthName;
document.getElementById('dayName').innerHTML=dayName;