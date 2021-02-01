var ufo = data;

//figuring out the table
var tbody = d3.select("tbody");
console.log(tbody);

function buildTable(ufo) {
  //clearing existing
  tbody.html("");

  //loop through the data and append the rows to the table
  ufo.forEach((dataRow) => {
    //append a row to the table body
    var row = tbody.append("tr");
    console.log(row);

    //loop through each field and add it to a cell
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
        console.log(val);
      });
  });
}

//function to handle the clicks :)
function handleClick() {

  //f'ing refresh 
  d3.event.preventDefault();

  //get the date from the button
  var date = d3.select("#datetime").property("value");
  console.log(date);

  var filteredData = ufo;
  console.log(filteredData)

  //filter using date entered
  if (date) {
    console.log(date);

    //apply the dated entered to the rows
    filteredData = filteredData.filter(row => row.datetime === date);
    console.log(filteredData);
  }

 //build the filtered table based on date selected
  buildTable(filteredData);
}

//button click
d3.selectAll("#filter-btn").on("click", handleClick);
//i'm not sure how to console.log a button click

//load default
buildTable(ufo);