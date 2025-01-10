const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const {mergePDFs} = require("./merge");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/'))  // Store files relative to server.js
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Not a PDF file'), false);
    }
  }
});

app.use('/static', express.static(path.join(__dirname, 'public')))
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async function (req, res, next) {
  try {
    let d = await mergePDFs(
      path.join(__dirname, 'uploads', req.files[0].filename),
      path.join(__dirname, 'uploads', req.files[1].filename)
    );
    res.redirect(`http://localhost:3000/static/${d}.pdf`);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});