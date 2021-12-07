const {
  CreateAuthorController,
  GetAllAuthorController,
  GetAuthorByIdController,
} = require("./AuthorController");

const {
  CreateBookController,
  GetAllBookController,
  GetBookByIdController,
  DeleteBookController,
} = require("./BookController");

const mongoDataController = {
  //Auhor Controller
  createAuthor: CreateAuthorController,
  getAllAuthor: GetAllAuthorController,
  getAuthorById: GetAuthorByIdController,

  //Book Controller
  createBook: CreateBookController,
  getAllBook: GetAllBookController,
  getBookById: GetBookByIdController,
  deteleBook: DeleteBookController,
};

module.exports = mongoDataController;
