// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {              // its return the value if use '{}' then we write return otherwise its return the value directly no need to write a 'return' keywords.
//    return num > 4
// })     

// const newNums = []

// myNums.forEach( (num) => {
//     if (num >3) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', puublish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', puublish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', puublish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', puublish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', puublish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', puublish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', puublish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', puublish: 2011, edition: 2016},
    {title: 'Book nine', genre: 'Non-Fiction', puublish: 1981, edition: 1989},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.puublish >=1995 && bk.genre === 'History'
})
console.log(userBooks);
