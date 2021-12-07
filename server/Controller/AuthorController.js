const Author = require("../Model/Author");

const CreateAuthorController = async (args) => {
  try {
    const newAuthor = new Author(args);
    const saveAuthor = await newAuthor.save();
    return saveAuthor;
  } catch (e) {
    console.log(e);
  }
};

const GetAllAuthorController = async (condition = null) => {
  try {
    const Authors = condition
      ? await Author.find(condition)
      : await Author.find();
    return Authors;
  } catch (e) {
    console.log(e);
  }
};

const GetAuthorByIdController = async (args) => {
  try {
    const Authors = await Author.findById(args);
    return Authors;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  CreateAuthorController,
  GetAllAuthorController,
  GetAuthorByIdController,
};
