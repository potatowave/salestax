var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateTotals(salesArray) {

  total = salesArray.reduce(function (a, b) {return a + b});

  return total;

}

function getTaxRate(province) {

  switch (province) {

    case "AB":
      rate = salesTaxRates["AB"];
      break;
    case "BC":
      rate = salesTaxRates["BC"];
      break;
    case "SK":
      rate = salesTaxRates["SK"];
      break;

  }
  return rate;
}

function salesTaxReport(salesData, taxRates) {

    taxTotal = salesData * taxRates;
    return taxTotal;

}


var resultsObject = {};


for (var i = 0;  i  < companySalesData.length; i++) {

    var name = companySalesData[i].name;
    var sales = calculateTotals(companySalesData[i].sales);
    var taxRate = getTaxRate(companySalesData[i].province)
    var tax = salesTaxReport(sales,taxRate);


    if (resultsObject[name] === undefined) {
      resultsObject[name] = {totalSales: sales, totalTaxes: tax};

    } else {

      resultsObject[name].totalSales += sales;
      resultsObject[name].totalTaxes += tax;

    }

}

console.log(resultsObject);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/


