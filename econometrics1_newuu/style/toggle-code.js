$(document).ready(function () {

  $('.jp-cell').filter(function () {
    return this.className.includes('toggle-input');
  }).each(function () {
    const cell = $(this);
    const inputArea = cell.find('.jp-cell-inputwrapper, .jp-inputarea').first();

    if (!inputArea.length) return;

    inputArea.hide();

    const button = $('<button class="toggle-button">Show code</button>');

    button.on('click', function () {
      inputArea.toggle();
      $(this).text(
        $(this).text() === 'Show code' ? 'Hide code' : 'Show code'
      );
    });

    inputArea.before(button);
  });

});
