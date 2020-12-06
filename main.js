let newHTML = '';
let allHTML = '';
const timestamp = document.querySelector("#timestamp");
const noteURL = document.querySelector("#noteURL");
const noteURLOverride = document.querySelector("#noteURLOverride");
const htmlBox = document.getElementById('htmlOutput');

console.log(timestamp);

const enterHTML = () => {
    newHTML = `<li><a class="jump-point button underline" href="#${timestamp.value}">${timestamp.value}</a> - <a href="${noteURL.value}">${noteURLOverride.value}</a></li>`
    allHTML += newHTML;
    htmlBox.innerHTML = allHTML;
    timestamp.value = null;
    noteURL.value = null;
    noteURLOverride.value = null;
};

const button = document.getElementById('submit');

button.addEventListener("click", function (event) {
    event.preventDefault();
    enterHTML();
    return;
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});