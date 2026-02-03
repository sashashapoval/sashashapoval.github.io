$(document).ready(function () {

  $('.celltag_toggle_secret').each(function () {

    const target = $(this);

    // Wrap the button + target in a container
    const container = $('<div class="toggle-container"></div>');

    target.before(container);
    container.append(target); // move target into container

    // Create the button
    const button = $('<button class="toggle-button">Show hidden lines</button>');
    container.prepend(button); // button goes above content

    target.hide(); // hide initially

    button.on('click', function () {
      target.toggle();
      $(this).text($(this).text() === 'Show hidden lines' ? 'Hide' : 'Show hidden lines');
    });

  });

});

