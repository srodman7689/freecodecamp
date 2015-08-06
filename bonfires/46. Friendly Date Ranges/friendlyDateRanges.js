MONTHS = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
};

DIFF_DATES = {
  "1": "1st",
  "2": "2nd",
  "3": "3rd"
};

function getMonth(month) {
  return MONTHS[month.toString()];
}

function getDay(day) {
  if (day <= 3) {
    return DIFF_DATES[day.toString()];
  } else {
    return day + "th";
  }
}

function friendly(dates) {
  startStr = dates[0];
  startDate = startStr.split("-");
  startYear = parseInt(startDate[0], 10);
  startMonth = parseInt(startDate[1], 10);
  startDay = parseInt(startDate[2], 10);
  endStr = dates[1];
  endDate = endStr.split("-");
  endYear = parseInt(endDate[0], 10);
  endMonth = parseInt(endDate[1], 10);
  endDay = parseInt(endDate[2], 10);

  if (startStr == endStr) {
    return [getMonth(startMonth) + " " + getDay(startDay) + ", " + startYear];
  }

  else if (startYear == endYear && startMonth == endMonth) {
    return [getMonth(startMonth) + " " + getDay(startDay), getDay(endDay)];
  }

  else if (endYear - startYear == 1 && endMonth < startMonth) {
    return [getMonth(startMonth) + " " + getDay(startDay), getMonth(endMonth) + " " + getDay(endDay)];
  }

  else if (endMonth - startMonth > 1 && endYear == startYear) {
    return [getMonth(startMonth) + " " + getDay(startDay), getMonth(endMonth) + " " + getDay(endDay) + ", " + endYear];
  }

  else if (endYear - startYear >= 1) {
    return [getMonth(startMonth) + " " + getDay(startDay) + ", " + startYear, getMonth(endMonth) + " " + getDay(endDay) + ", " + endYear];
  }
}

friendly(['2017-01-01', '2017-01-01']);