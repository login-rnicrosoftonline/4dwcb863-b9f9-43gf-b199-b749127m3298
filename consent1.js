document.querySelectorAll(".showHideDiv").forEach(function (element) {
    element.addEventListener("click", function () {
        // Toggle the show/hide class for the corresponding content
        var content = element.closest(".container").querySelector(".showHideDropdnContent");
        content.classList.toggle("showHide");

        // Change the image source for the chevron
        var img = element.closest(".container").querySelector('.chev');
        if (img.src.indexOf('https://aadcdn.msftauth.net/shared/1.0/content/images/chevron_closed_31e954033877625e65f365d6c05762f0.svg') != -1) {
            img.src = 'https://aadcdn.msauth.net/shared/1.0/content/images/chevron_open_6031d5042df58328e7b0e9701b64dfb1.svg';
        } else {
            img.src = 'https://aadcdn.msftauth.net/shared/1.0/content/images/chevron_closed_31e954033877625e65f365d6c05762f0.svg';
        }
    });
});

document.querySelectorAll(".hideShowLink").forEach(function (element) {
    element.addEventListener("click", function () {
        // Show the details
        var container = element.closest(".container");
        container.querySelector(".hideDetails").style.display = "block";
        element.style.visibility = "hidden";
    });
});

document.querySelectorAll(".spanHide").forEach(function (element) {
    element.addEventListener("click", function () {
        // Hide the details
        var container = element.closest(".container");
        container.querySelector(".hideDetails").style.display = "none";
        var link = container.querySelector(".hideShowLink");
        link.style.display = "inline"; // Or "visible"
        link.style.color = "#0067B8";
        link.style.cursor = "pointer";
    });
});

// Handling cancel and accept buttons
document.querySelectorAll(".button-container .secondary").forEach(function (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
        location.href = this.attributes["cancelaction"].value;
    });
});

document.querySelectorAll(".button-container .primary").forEach(function (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
        location.href = this.attributes["acceptaction"].value;
    });
});
