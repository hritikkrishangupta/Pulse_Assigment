import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const chrono = require('chrono-node');

// function to convert relative date text to dd-mm-yyyy
const filterdata = (myArray, startdate, enddate)=>{ 
    const convertRelativeTextToDate = (text) => {
    const parsedDate = chrono.parseDate(text);

    if (!parsedDate) throw new Error(`Cannot parse date from text: ${text}`);

    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();

    return `${day}-${month}-${year}`;
};


// Convert all dates inside dataset
const data = myArray.map(item => ({
  ...item,
  date: convertRelativeTextToDate(item.date)
}));

const filteredData = data.filter(item => {
    // Convert item date to Date object
    const itemDateParts = item.date.split('-');
    const itemDate = new Date(`${itemDateParts[2]}-${itemDateParts[1]}-${itemDateParts[0]}`); // yyyy-mm-dd

    return itemDate >= startdate && itemDate <= enddate;
});

return filteredData;
}


export default filterdata;