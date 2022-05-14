exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Hello World Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Hello World Content.");
};

exports.customerBoard = (req, res) => {
  res.status(200).send("Hello World Customer Content.");
};
