# DOM Operations:

    >> DOM: Document Object Model
    >> Its a representation of a web tree

HTML Boiler Plate:

<html>
<head>
<title></title>
</head>
<body>
<h1></h1>
</body>
</html>

DOM Representation:
html
head body
title h1

const data = {
name: "rohan",
age: 27
}
undefined
console.log(data)
VM240:1 {name: 'rohan', age: 27}
undefined
console.log({data})
VM323:1 {data: {…}}data: {name: 'rohan', age: 27}[[Prototype]]: Object
undefined
console.log({...data})
VM423:1 {name: 'rohan', age: 27}
undefined
console.log({...data, company: "DevTown"})
VM662:1 {name: 'rohan', age: 27, company: 'DevTown'}
