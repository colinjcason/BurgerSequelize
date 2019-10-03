$(function() {
    $("#burger-btn").on("click", function(event) {
        event.preventDefault();

        $.post("/api/burgers/" + $("#newBurger").val(), function() {
            console.log("new burger added");            
        }).then(function() {
            location.reload();
        });        
    });

    $(".devour").on("click", function() {
        var id = $(this).attr("data-id");
        console.log(id);
        $.ajax("api/burgers/" + id, 
        {
            type: "PUT",
            data: {
                col: "devoured",
                val: 1
            }
        }).then(function() {
            console.log(id + " devoured!");
            location.reload();
        });
    });
});