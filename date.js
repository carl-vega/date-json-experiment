function dateJSON() {
  // get current date
  const initialDate = new Date();
  // instantiate date object for all dates
  const dateObjects = [];
  // get current year
  const currentYear = initialDate.getFullYear();
  // minus to have value of ten years back from present year
  const decadeBack = currentYear - 10;
  // for loop to create 20 years of objects
  for (let i = 0; i <= 19; i++) {
    let years = {};
    let yearCount = decadeBack + i;
    // instantiate array of months
    let monthsOfYear = [];
    // for loop to create a full year of month objects
    for (let j = 0; j <= 11; j++) {
      // get month name counter
      let monthIterator = new Date(yearCount, j).toString().slice(4, 7);
      // get the last day of same month and convert it to an integer
      let lastDate = parseInt(
        new Date(yearCount, j + 1, 0).toString().slice(8, 10)
      );
      // instantiate an object of to store month name and last day of month
      let month = {};
      month = {
        month: monthIterator,
        days: lastDate
      };
      // push full year of months objects
      monthsOfYear.push(month);
    }
    // store year and array of months objects
    years = {
      year: yearCount,
      months: monthsOfYear
    };
    dateObjects.push(years);
  }
  console.log(dateObjects);
  const JSONstring = JSON.stringify(dateObjects, null, 4);
  const preTag = document.createElement("pre");
  preTag.innerHTML = JSONstring;
  document.getElementById("json-area").appendChild(preTag);
}

dateJSON();
