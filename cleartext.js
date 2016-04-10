document.querySelector('.editor').focus();

function checkWord() {
  var newPosition = 0;
  var selection = window.getSelection();
  var caretPosition = selection.focusOffset;
  var lw = selection.anchorNode.textContent.trim().split(' ').pop();
  if (allowed.indexOf(lw.toLowerCase().replace(/[\,\.:;!\?]+/, '')) < 0) {
    if (caretPosition > lw.length) {
      newPosition = caretPosition - lw.length - 1;
    }
    selection.extend(selection.anchorNode, newPosition);
  }
}

document.querySelector('.editor').addEventListener('keyup', function(e) {
  if (e.keyCode == 32 || e.keyCode == 13) {
    checkWord();
  }
});
