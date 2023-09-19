const Book = require('../models/bookModel'); // Import your Book model

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Update an existing book by ID
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ success: false, error: 'Book not found' });
    }

    res.status(200).json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ success: false, error: 'Book not found' });
    }

    res.status(204).json({ success: true, data: null });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get a single book by ID
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ success: false, error: 'Book not found' });
    }

    res.status(200).json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
