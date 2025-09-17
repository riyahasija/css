const books = [
    { name: "To Kill a Mockingbird", author: "Harper Lee", price: 300 },
    { name: "1984", author: "George Orwell", price: 250 },
    { name: "Pride and Prejudice", author: "Jane Austen", price: 200 },
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 220 },
    { name: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: 350 },
    { name: "The Hobbit", author: "J.R.R. Tolkien", price: 280 },
    { name: "The Catcher in the Rye", author: "J.D. Salinger", price: 240 },
    { name: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 600 },
    { name: "Moby Dick", author: "Herman Melville", price: 270 },
    { name: "The Alchemist", author: "Paulo Coelho", price: 230 }
];

filtered = []

function handleSearch(value) {
    filtered = []
    for (let book of books) {
        if (book.name.toLowerCase().includes(value.toLowerCase())) {
            filtered.push(book.name);
        }
    }
    console.log(filtered)
}

