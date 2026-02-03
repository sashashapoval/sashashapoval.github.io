$(document).ready(function () {

  $('.jp-cell').filter(function () {
    return this.className.includes('celltag_toggle_secret');
  }).each(function () {

    const cell = $(this);
    const inputArea = cell.find('.jp-cell-inputwrapper, .jp-inputarea').first();

    if (!inputArea.length) return;

    inputArea.hide();

    const button = $('<button class="toggle-button">Show secret</button>');

    button.on('click', function () {
      inputArea.toggle();
      $(this).text($(this).text() === 'Show secret' ? 'Hide secret' : 'Show secret');
    });

    inputArea.before(button);
  });

});

