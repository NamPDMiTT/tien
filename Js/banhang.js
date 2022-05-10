var mylist = document.getElementById("mylist");
var rows = mylist.getElementsByTagName("tr");

function styleDisplay(mess) {
    for (e of rows) e.style.display = mess
}

function iteratePriceRange(lower, upper) {
    styleDisplay("none")
    if (upper == 0) {
        upper = Infinity
    } else if (lower == 0 && upper == 0) {
        styleDisplay("")
    }
    for (let i = 0; i < rows.length; i++) {
        var price = +rows[i].children[2].innerText.substring(1)
        if (price > lower && price <= upper) {
            rows[i].style.display = ""
        }
    }
}

//Hiển thị price theo value của select
var priceRange = document.getElementById("price-range");

function showEachList() {
    switch (priceRange.value) {
        case "1":
            iteratePriceRange(0, 500)
            break;
        case "2":
            iteratePriceRange(500, 1200)
            break;
        case "3":
            iteratePriceRange(1200, 2000)
            break;
        case "4":
            iteratePriceRange(2000, 3000)
            break;
        case "5":
            iteratePriceRange(0, 0)
            break;
    }
}

var qty = document.getElementsByName("qty");

function turnQtyInput(source) {
    var row = source.parentElement.parentElement
    var qtyInput = row.getElementsByTagName("input")[1]
    if (source.checked == true) {
        qtyInput.disabled = false
    } else {
        qtyInput.disabled = true
        resetCost(source)
    }
}
var checkBox = document.getElementsByName("checkbox");

function checkAll(source) {
    for (let i = 0; i < rows.length; i++) {
        checkBox[i].checked = source.checked
        qty[i].disabled = !source.checked
    }
    resetCost("all")
}

var cost = document.getElementsByClassName("cost");
var summoney = document.getElementById("sum-money");

function countCost() {
    var sum = 0
    for (let i = 0; i < rows.length; i++) {
        var price = +rows[i].getElementsByTagName("td")[2].innerText.substring(1)
        cost[i].innerText = "$" + qty[i].value * price
        sum += +cost[i].innerText.substring(1)
    }
    summoney.innerHTML = "$" + sum
}

function resetCost(source) {
    if (source == "all") {
        for (let i = 0; i < rows.length; i++) {
            rows[i].getElementsByTagName("input")[1].value = 0
        }
        countCost()
    }
    var row = source.parentElement.parentElement
    row.getElementsByTagName("input")[1].value = 0
    countCost()
}