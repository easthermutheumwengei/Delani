$(document).ready(function() {
    $("#dtext").hide()
    $("#design-img").click(function() {
        $("#dtext").show(1000);
        $("#design-img").hide(1000);
        $("#dtext").click(function() {
            $("#design-img").show(1000)
            $("#dtext").hide(1000)
        })
    })
})