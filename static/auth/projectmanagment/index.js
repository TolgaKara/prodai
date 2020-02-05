$('#submit-todo').click(function () {
    var todoNameValue = $('#todo-name').val();
    var todoTimeValue = $('#todo-time').val();
    if (todoNameValue === "" && todoTimeValue !== "") {
        console.log('gotcha');
    } else {
        if (todoTimeValue === "") {
            todoTimeValue = '00:00'
        }
        var todoHours = todoTimeValue.substring(0, 2)
        var todoMinutes = todoTimeValue.substring(3, 5)

        console.log(isNaN("00"));
        console.log(isNaN("00"));

        console.log(todoHours);
        console.log(todoMinutes);

        var todoName = $('<div class="col-sm-8"><div>').text(todoNameValue);
        var todoTime = $('<div class="col-sm-4"><div>').text(todoTimeValue);
        var row = $('<div class="row"></div>').append(todoName, todoTime);
        $('.list-of-todo').append(row)

        $('#todo-name').val("");
        $('#todo-time').val("");
    }
});