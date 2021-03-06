const fs = require("fs");
const PDFDocument = require("pdfkit");

module.exports = id => {
  return new Promise(async (resolve, reject) => {
    let doc = new PDFDocument({ autoFirstPage: false });
    doc.pipe(fs.createWriteStream(`./${ id }.pdf`));

    const pages = fs.readdirSync("./pages").length;
    for (let page = 0; page < pages; page++) {
      await addPage(doc, page);
    }
    removeDirectory();
    resolve(doc.end());
  });
};

function removeDirectory() {
  const folder = fs.readdirSync("./pages");
  for (let i = 0; i < folder.length; i++) {
    fs.unlinkSync(`./pages/${ i }.jpg`);
  }
}

function addPage(doc, page) {
  doc.addPage({
    margin: 0,
    size: [840, 1090]
  }).image(`./pages/${ page }.jpg`, {
    width: 840,
    height: 1090
  });
}