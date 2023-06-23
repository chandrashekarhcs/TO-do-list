$(document).ready(function() {
    // Add button click event
    $('#addButton').click(function() {
      var taskInputValue = $('#taskInput').val().trim();
      if (taskInputValue !== '') {
        var newTask = $('<li>' + taskInputValue + '</li>');
        newTask.appendTo('#taskList');
        $('#taskInput').val('');
      }
    });
  
    // Press enter key event
    $('#taskInput').keypress(function(event) {
      if (event.which === 13) {
        $('#addButton').click();
      }
    });
  
    // Task completion event
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  
    // Task deletion event
    $('#taskList').on('click', 'span', function(event) {
      $(this).parent().fadeOut(500, function() {
        $(this).remove();
      });
      event.stopPropagation();
    });
  });
  