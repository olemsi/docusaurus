const warningClose = "warningClose";
$(document).ready(function() {
    sessionStorage.setItem(warningClose, "+"); // Uncomment for hide

    if (!sessionStorage.getItem("warningClose")) {
        $("#warning-message-wrapper").css({display: "block"});
        $(".tools__inner").css({paddingTop: 77 + "px"});
    }
    $("#warning-message-cross-icon").click(() => {
        sessionStorage.setItem("warningClose", "+");
        $("#warning-message-wrapper").slideUp(500);
        $(".tools__inner").css({transition: "all 500ms ease-in-out", paddingTop: ""});
    })
});
