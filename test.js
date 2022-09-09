// Requiring the module
const reader = require('xlsx')

// Reading our test file
const file = reader.readFile('./data.xlsx')

let data = []

const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]]
        )
    temp.forEach((res) => {
        data.push(res)
    })
}

// Printing data
console.log(data)




// Requiring module
const reader = require('xlsx')

// Reading our test file
const file2 = reader.readFile('./data.xlsx')

// Sample data set
let student_data = [{
    Student: 'Nikhil',
    Age: 22,
    Branch: 'ISE',
    Marks: 70
},
{
    Student: 'Amitha',
    Age: 21,
    Branch: 'EC',
    Marks: 80
}]

const ws = reader.utils.json_to_sheet(student_data)

reader.utils.book_append_sheet(file2, ws, "Sheet3")

// Writing to our file2
reader.writeFile(file2, './data.xlsx')