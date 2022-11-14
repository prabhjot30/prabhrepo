const port = 3000;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

const plainTextContentType = {
  "Content-Type": "text/plain",
};
const htmlContentType = {
  "Content-Type": "text/html",
};
const imageContentType = {
  "Content-Type": "image/jpg",
};
const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("/views/index.html", res);
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});

router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/contact.html", res);
});

router.get("/survey.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/survey.html", res);
});

router.get("/honesty.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/honesty.html", res);
});

router.get("/powerofpositive.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/powerofpositive.html", res);
});

router.get("/7habits.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/7habits.html", res);
});

router.get("/books.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/books.html", res);
});

router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/contact.html", res);
});

router.get("/7habits.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imageContentType);
  customReadFile("public/images/7habits.jpg", res);
});
router.get("/searchformeaning.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imageContentType);
  customReadFile("public/images/searchformeaning.jpg", res);
});
router.get("/thepowerofpositive.jpg", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, imageContentType);
  customReadFile("public/images/thepowerofpositive.jpg", res);
});


router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});
const app = http.createServer(router.handle).listen(3000);
app.on("request", (req, res) => {
  console.log(`Received an incoming request...`);
  console.log(`-------------------------------`);
  console.log("method:", req.method);
  console.log("url:", req.url);
  console.log("headers:", req.headers);
  console.log(req);
})
