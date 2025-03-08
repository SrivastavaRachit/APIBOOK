const express = require('express');
const app = express();
const port = 3001;

const books = [
    [
        {
            "goodread_id": "291",
            "author": "B.K. Borison",
            "title": "First-Time Caller",
            "isbn": "9780593641194",
            "bookformat": "Paperback",
            "pages": "448",
            "rating": "4.19",
            "reviews": "8,822",
            "genre": "Romance, Contemporary, Fiction",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718283728i/213243908.jpg",
            "link": "https://www.goodreads.com/book/show/213243908-first-time-caller"
        },
        {
            "goodread_id": "292",
            "author": "Sarah J. Maas",
            "title": "House of Earth and Blood",
            "isbn": "9781635574043",
            "bookformat": "Hardcover",
            "pages": "803",
            "rating": "4.46",
            "reviews": "93,897",
            "genre": "Romance, Fantasy, Fiction, Fantasy",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg",
            "link": "https://www.goodreads.com/book/show/44778083-house-of-earth-and-blood"
        },
        {
            "goodread_id": "293",
            "author": "Libba Bray",
            "title": "Under the Same Stars",
            "isbn": "9780374388942",
            "bookformat": "Hardcover",
            "pages": "480",
            "rating": "4.43",
            "reviews": "303",
            "genre": "Historical, Fiction, Fantasy, Mystery",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715457702i/200982339.jpg",
            "link": "https://www.goodreads.com/book/show/200982339-under-the-same-stars"
        },
        {
            "goodread_id": "294",
            "author": "A.G. Slatter",
            "title": "The Crimson Road",
            "isbn": "9781803364575",
            "bookformat": "Kindle Edition",
            "pages": "400",
            "rating": "4.04",
            "reviews": "100",
            "genre": "Fantasy, Horror, Vampires, Adult, Dark Fantasy",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720710116i/214353924.jpg",
            "link": "https://www.goodreads.com/book/show/214353924-the-crimson-road"
        },
        {
            "goodread_id": "295",
            "author": "Erika T. Wurth",
            "title": "The Haunting of Room 904",
            "isbn": "9781250908599",
            "bookformat": "Hardcover",
            "pages": "320",
            "rating": "3.46",
            "reviews": "134",
            "genre": "Horror, Mystery, Fiction, Paranormal, Thriller",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1716851426i/211004028.jpg",
            "link": "https://www.goodreads.com/book/show/211004028-the-haunting-of-room-904?ref=rae_3"
        },
        {
            "goodread_id": "296",
            "author": "Emily J. Taylor",
            "title": "The Otherwhere Post",
            "isbn": "9780593404546",
            "bookformat": "Hardcover",
            "pages": "400",
            "rating": "4.24",
            "reviews": "455",
            "genre": "Fantasy, Young Adult, Mystery, Romance, Romantasy",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1719331589i/214268980.jpg",
            "link": "https://www.goodreads.com/book/show/214268980-the-otherwhere-post"
        },
        {
            "goodread_id": "297",
            "author": "Amélie Wen Zhao",
            "title": "The Scorpion and the Night Blossom",
            "isbn": "9780008672782",
            "bookformat": "Kindle Edition",
            "pages": "397",
            "rating": "4.00",
            "reviews": "330",
            "genre": "Fantasy, Romance, Mythology, Adult",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1731786113i/210413604.jpg",
            "link": "https://www.goodreads.com/book/show/210413604-the-scorpion-and-the-night-blossom"
        },
        {
            "goodread_id": "298",
            "author": "Amanda DeWitt",
            "title": "The Underwood Tapes",
            "isbn": "9781682635995",
            "bookformat": "Hardcover",
            "pages": "320",
            "rating": "4.16",
            "reviews": "97",
            "genre": "Young Adult, Mystery, Fantasy, Contemporary, Horror",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715458207i/212808336.jpg",
            "link": "https://www.goodreads.com/book/show/212808336-the-underwood-tapes"
        },
        {
            "goodread_id": "299",
            "author": "Rabindranath Tagore, W.B. Yeats(Introduction)",
            "title": "Gitanjali",
            "isbn": "9781420926309",
            "bookformat": "Paperback",
            "pages": "80",
            "rating": "4.30",
            "reviews": "951",
            "genre": "Poetry, Classics, India, Fiction, Indian Literature",
            "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348514071i/66414.jpg",
            "link": "https://www.goodreads.com/book/show/66414.Gitanjali"
        },
    ]

];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});