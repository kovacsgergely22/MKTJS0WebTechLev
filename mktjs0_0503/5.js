$(document).ready(function () {
   
    $("button").click(function (event) {
        event.preventDefault();

        var a = parseInt($("#num1").val());
        var b = parseInt($("#num2").val());
        var result = 0;

        switch ($("input[name='operator']:checked").attr('id')) {
        
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                result = a / b;
                break;
            case 'add':
                result = a + b;
                break;
            case 'subtract':
                result = a - b;
                break;
            default:
                alert("Please select an operator");
        }
        $("#result").html(result);
    });
});	