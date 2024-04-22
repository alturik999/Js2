"use strict";


class Library {
   #books;
 
   constructor(initialBooks) {
     // Проверка на наличие дубликатов в начальном массиве книг
     if (new Set(initialBooks).size !== initialBooks.length) {
       throw new Error('Начальный список книг содержит дубликаты.');
     }
     this.#books = initialBooks;
   }
 
   get allBooks() {
     return this.#books;
   }
 
   addBook(title) {
     if (this.#books.includes(title)) {
       throw new Error('Книга с таким названием уже существует в списке.');
     }
     this.#books.push(title);
   }
 
   removeBook(title) {
     const index = this.#books.indexOf(title);
     if (index === -1) {
       throw new Error('Книги с таким названием нет в списке.');
     }
     this.#books.splice(index, 1);
   }
 
   hasBook(title) {
     return this.#books.includes(title);
   }
 }
 
 // Пример использования
 const library = new Library(['Book 1', 'Book 2', 'Book 3']);
 
 console.log(library.allBooks); // ['Book 1', 'Book 2', 'Book 3']
 
 library.addBook('Book 4');
 console.log(library.allBooks); // ['Book 1', 'Book 2', 'Book 3', 'Book 4']
 
 library.removeBook('Book 2');
 console.log(library.allBooks); // ['Book 1', 'Book 3', 'Book 4']
 
 console.log(library.hasBook('Book 1')); // true
 console.log(library.hasBook('Book 2')); // false
 