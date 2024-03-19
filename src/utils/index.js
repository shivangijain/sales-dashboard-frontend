exports.citySalesChartData = (items, totalSales) => {
  const citySales = items.reduce((acc, item) => {
    if (!acc[item["City"]]) {
      acc[item["City"]] = {
        name: item["City"],
        sales: item["Sales"],
      };
    }

    acc[item["City"]].sales += item["Sales"];
    return acc;
  }, {});

  const sortedSales = sortedBySales(citySales);

  const chartData = [];
  for (let citySale in sortedSales) {
    chartData.push({
      label: sortedSales[citySale].name,
      stacks: [
        { name: "Sales", value: Math.floor(sortedSales[citySale].sales) },
        {
          name: "Total",
          value: Math.floor(totalSales - sortedSales[citySale].sales),
        },
      ],
    });
  }
  return chartData;
};

exports.productSalesChartData = (items) => {
  const productSales = items.reduce((acc, item) => {
    if (!acc[item["Product ID"]]) {
      acc[item["Product ID"]] = {
        name: item["Product Name"],
        sales: item["Sales"],
      };
    }

    acc[item["Product ID"]].sales += item["Sales"];
    return acc;
  }, {});
  let sortedProduct = sortedBySales(productSales);
  const chartData = [];

  for (let product in sortedProduct) {
    chartData.push({
      label: sortedProduct[product].name,
      stacks: [
        {
          name: sortedProduct[product].name,
          value: 80,
        },
        {
          name: Math.floor(sortedProduct[product].sales),
          value: 20,
        },
      ],
    });
  }
  return chartData;
};

exports.subCategorySalesChartData = (items) => {
  const subCatSales = items.reduce((acc, item) => {
    if (!acc[item["Sub-Category"]]) {
      acc[item["Sub-Category"]] = {
        name: item["Sub-Category"],
        sales: item["Sales"],
      };
    }

    acc[item["Sub-Category"]].sales += item["Sales"];
    return acc;
  }, {});
  let sortedSubCat = sortedBySales(subCatSales);
  const chartData = [];

  for (let subCat in sortedSubCat) {
    chartData.push({
      label: sortedSubCat[subCat].name,
      stacks: [
        {
          name: sortedSubCat[subCat].name,
          value: 70,
        },
        {
          name: Math.floor(sortedSubCat[subCat].sales),
          value: 30,
        },
      ],
    });
  }
  return chartData;
};

exports.categorySalesChartData = (items) => {
  const categorySales = items.reduce((acc, item) => {
    if (!acc[item["Category"]]) {
      acc[item["Category"]] = item["Sales"];
    }

    acc[item["Category"]] += item["Sales"];
    return acc;
  }, {});

  const chartData = [];
  for (let categorySale in categorySales) {
    chartData.push({ name: categorySale, value: categorySales[categorySale] });
  }
  return chartData;
};

exports.segmentSalesChartData = (items) => {
  const segSales = items.reduce((acc, item) => {
    if (!acc[item["Segment"]]) {
      acc[item["Segment"]] = item["Sales"];
    }

    acc[item["Segment"]] += item["Sales"];
    return acc;
  }, {});

  const chartData = [];
  for (let segSale in segSales) {
    chartData.push({ name: segSale, value: segSales[segSale] });
  }
  return chartData;
};

const sortedBySales = (items) => {
  console.log(Object.entries(items));
  let sortedItems = Object.entries(items).sort(
    (a, b) => b[1].sales - a[1].sales
  );
  sortedItems = sortedItems.slice(0, 10);
  sortedItems = Object.fromEntries(sortedItems);
  return sortedItems;
};
