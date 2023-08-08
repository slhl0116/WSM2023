// var para = window.location.search;
// console.log(para);

// parseInt(para);

//URL에 있는 book parameter 값(string)
// -> string을 number로 변환:bookIdNumber
// -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자: bookData
// -> title, author, publisher, bookImage 알아내자
// -> HTML에 넣자

// //수빈ver.
// const urlParams = new URL(location.href).searchParams;
// const book = urlParams.get('book');

// parseInt(book);

// var i=book;

// console.log(`bookId: ${i}`);

// const bookTitle = books[i-1].title;
// console.log(`bookTitle: ${bookTitle}`);



// URL이 있는 book parameter 값(string) 
let url_href = window.location.href;    //브라우저 창에 있는 주
const bookId = new URL(url_href).searchParams.get("book");
console.log(`bookId: ${bookId}, type : ${typeof bookId}`);

//-> String 을 number로 변환:bookIdNumber 
let bookIdNumber = parseInt(bookId);    //string->number
// let bookIdNumber = Number(bookId);         //string->number
// let bookIdNumber = bookId * 1;          //string->number

console.log(`bookIdNumber: ${bookIdNumber}, type : ${typeof bookIdNumber}`);  //3, number

//-> books에서 하나씩 꺼내어서 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 뺴자 :bookData
//bookIdNumber: URL에서 가져온 id값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for(let book of books) {
    if(bookIdNumber === book.id) {
        bookData = book;    //id가 같으면, 걔를 꺼내서 bookData에 넣자
        break;
    }
}
console.log(bookData);


//-> title, author, publisher, bookImage 알아내자
let title = bookData.title;
// let title = bookData["title"];
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

//-> HTML에 넣자
//HTML 요소 -> js 변수
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = `<u>${title}</u>`;
const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = `<u>${author}</u>`;
const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = `<u>${publisher}</u>`;
const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}"/>`;


// //수업ver.
// let url_href = window.location.href;
// const bookId = new URL(url_href).searchParams.get("book");
// console.log(`bookId: ${bookId}, type: ${typeof bookId}`);
// // -> string을 number로 변환:bookIdNumber
// // let bookIdNumber = Number(bookId);   //string -> number
// // let bookIdNumber = parseInt(bookId);   //string -> number
// // let bookIdNumber = bookId * 1;    //string -> number
// let bookIdNumber = bookId + 0;    //string -> number
// console.log(`bookIdNumber: ${bookIdNumber}, type: ${typeof bookIdNumber}`); 


// // -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자: bookData
// // bookIdNumber : URL에서 가져온 id 값 === 하나씩 꺼낸 book의 id 값
// let bookData;
// for(let book of books) {
//     if(bookIdNumber === book.id) {
//         bookData = book;    //id가 같으면, 걔를 꺼내서 bookData에 넣자
//         break;
//     }
// }
// console.log(bookData);
// // -> title, author, publisher, bookImage 알아내자
// let title = bookData.title; //시험문제!!!!
// // let title = bookData["title"];
// let author = bookData.author;
// let publisher = bookData.publisher;
// let bookImage = bookData.img;
// console.log(title, author, publisher, bookImage);

// // HTMl에 넣자
// // HTML 요소 -> js 변수
// const titleDiv = document.getElementsByClassName("title");
// titleDiv.innerHTML = title;