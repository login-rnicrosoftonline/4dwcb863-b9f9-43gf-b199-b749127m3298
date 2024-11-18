function showHide() {
    var element = document.getElementById("showHideDropdnContent");
    var element = document.getElementById("showHideDropdnContent1");
    element.classList.toggle("showHide");

    var img = document.getElementById('chev').src;
    if (img.indexOf('https://aadcdn.msftauth.net/shared/1.0/content/images/chevron_closed_31e954033877625e65f365d6c05762f0.svg') != -1) {
        document.getElementById('chev').src = 'https://aadcdn.msauth.net/shared/1.0/content/images/chevron_open_6031d5042df58328e7b0e9701b64dfb1.svg';
    }
    else {
        document.getElementById('chev').src = 'https://aadcdn.msftauth.net/shared/1.0/content/images/chevron_closed_31e954033877625e65f365d6c05762f0.svg';
    }
}
function showDetails() {
    var element = document.getElementById("hideDetails").style = "display:block";
    var element = document.getElementById("hideShowLink").style = "visibility:hidden"
}
function hideDetails() {
    var element = document.getElementById("hideDetails").style = "display:none";
    var element = document.getElementById("hideShowLink").style = "display:visible; color: #0067B8; cursor: pointer";
}

document.getElementById("hideShowLink").addEventListener("click", showDetails); 
document.getElementById("spanHide").addEventListener("click", hideDetails);
document.getElementById("showHideDiv").addEventListener("click", showHide);
var cancelBtn = document.querySelector(".button-container .secondary");
var acceptBtn = document.querySelector(".button-container .primary");
cancelBtn.addEventListener("click", function() { location.href = this.attributes["cancelaction"].value })
acceptBtn.addEventListener("click", function() { location.href = this.attributes["acceptaction"].value })
