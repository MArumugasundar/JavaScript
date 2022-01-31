

let pageNo = 1;
const pagi = document.querySelectorAll("tr");
const itemsToDisplay = 10
function pagination() {
    for (i = 0; i < pagi.length; i++) {
        if (i >= ((pageNo - 1) * itemsToDisplay) && i < pageNo * itemsToDisplay) {
            pagi[i].style.display = "table-row";
        }
        else {
            pagi[i].style.display = "none";
        }
    }
}


pagination(pageNo);


function one(){
    if (pageNo < pagi.length / itemsToDisplay) {
        pageNo = 1;
        pagination(pageNo);
    }
}
function two(){
    if (pageNo < pagi.length / itemsToDisplay) {
        pageNo += 1;
        pagination(pageNo);
    }
}


function next() {
    if (pageNo < pagi.length / itemsToDisplay) {
        pageNo += 1;
        pagination(pageNo);
    }
}

function previous() {
    if (pageNo > 1) {
        pageNo -= 1;
        pagination(pageNo);
    }
}

const box = document.getElementById("search");
const rows = document.querySelectorAll("tr");

box.addEventListener('keyup', function (event) {

    const q = event.target.value.toLowerCase();
    rows.forEach(function (row) {
        if (row.querySelector("td")?.textContent.toLowerCase().startsWith(q)) {
            row.style.display = "";
        } else {
            row.style.display = "none";

        }
    });

});

function sort(ascending, id, table) {
    var tbody = document.getElementById(table).getElementsByTagName("tbody")[0];
    var rows = tbody.getElementsByTagName("tr");

    var unsorted = true;

    while (unsorted) {
        unsorted = false

        for (var r = 0; r < rows.length - 1; r++) {
            var row = rows[r];
            var nextRow = rows[r + 1];

            var value = row.getElementsByClassName(id)[0].innerHTML;
            var nextValue = nextRow.getElementsByClassName(id)[0].innerHTML;



            if (ascending ? value > nextValue : value < nextValue) {
                tbody.insertBefore(nextRow, row);
                unsorted = true;
            }



        }
    }
};
