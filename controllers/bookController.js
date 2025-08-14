const books = require('../models/bookModel')

//to add books
exports.addBookController = async (req, res) => {
    const { title, author, description, coverImageURL } = req.body
    console.log(title, author, description, coverImageURL);

    const email = req.payload
    console.log(email);

    try {
        const existingBook = await books.findOne({ title, userMail: email })

        if (existingBook) {
            res.status(401).json('You have already added the book')
        }
        else {
            const newBook = new books({
                title, author, description, coverImageURL, userMail: email
            })
            await newBook.save()
            res.status(200).json(newBook)
        }
    } catch (error) {

    }

}