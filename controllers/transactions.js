// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  PUBLIC
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  PUBLIC
exports.addTransaction = (req, res, next) => {
  res.send("POST transactions");
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  PUBLIC
exports.deleteTransaction = (req, res, next) => {
  res.send("Delete transactions");
};