import express, { json } from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "book"
})

app.get('/', (req, res) => {
    res.json("Hello this is a message from backend")
})
//Insert a new book in database
app.post('/books', (req, res) => {
    const q = "INSERT INTO books (title, `desc`, cover, price) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ];

    db.query(q, [values], (err, data) => {
        if (err) res.json(err);
        else res.json("Book inserted successfully");
    });
});
//Delete a book in database
app.delete('/books/:id',(req,res)=>{
    const BookId = req.params.id
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q,[BookId],(err,data)=>{
        if(err) res.json(err)
        else res.json("Book deleted successfully")
    })
})
//Display all books
app.get('/books', (req, res) => {
    const q = 'SELECT * FROM books'
    db.query(q, (err, data) => {
        if (err) res.json(err)
        else res.json(data)
    })
})
app.listen(8800, () => {
    console.log("Listening on port 8800!")
})