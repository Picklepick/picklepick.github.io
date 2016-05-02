var terms = ["easy", "fun", "social", "engaging", "relevant", "instant"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).slideDown()
              .delay(2300).slideDown(200, rotateTerm);
}
$(rotateTerm);



/** skal egentlig være fadeIn og fadeOut, men det ødelegger for responsiviteten av en eller annen grunn.... **/
