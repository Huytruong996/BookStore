const Book = require("../Model/Book");

const CreateBookController = async (args) => {
  try {
    const newBook = new Book(args);
    const saveBook = await newBook.save();
    return saveBook;
  } catch (e) {
    console.log(e);
  }
};

const GetAllBookController = async (condition = null) => {
  try {
    const Books = condition ? await Book.find(condition) : await Book.find();
    return Books;
  } catch (e) {
    console.log(e);
  }
};

const GetBookByIdController = async (args) => {
  try {
    const Books = await Book.findById(args);
    return Books;
  } catch (e) {
    console.log(e);
  }
};

const DeleteBookController = async (args) => {
  try {
    const Books = await Book.deleteOne({ _id: args.id });
    console.log(Books);
    return Books;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  CreateBookController,
  GetAllBookController,
  GetBookByIdController,
  DeleteBookController,
};
