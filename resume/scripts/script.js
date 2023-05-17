const TIME_DELAY = 2000;
let timer = null;
const templateNode = document.getElementById("pdf-version");
const mainNode = document.querySelector("main");

const showPdfVersionHandller = () => {
  const pdfVersionNode = templateNode.content.cloneNode(true);
  document.body.removeChild(mainNode);
  document.body.append(pdfVersionNode);
};

const showAlertHandller = () => {
  const isToShowPdfVersion = confirm(
    "Can you checkout the PDF version of the resume"
  );
  clearTimeout(timer);
  if (isToShowPdfVersion) showPdfVersionHandller();
};

timer = setTimeout(showAlertHandller, TIME_DELAY);
