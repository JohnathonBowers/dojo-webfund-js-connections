var name1 = document.querySelector("#username");
var req1 = document.querySelector("#request1");
var req2 = document.querySelector("#request2");
var reqnum = document.querySelector("#requestnum");
var conntotal = document.querySelector("#connnum");
var conn = [2, 418];

function changeName() {
    name1.innerHTML = "April O'Neil";
}

function update1(id) {
    conn[0]--;
    conn[1]++;
    reqnum.innerHTML = conn[0];
    conntotal.innerHTML = conn[1];
    if (id == 1) {
        req1.remove();
    }
    else if (id == 2) {
        req2.remove();
    }
}

function update2(id) {
    conn[0]--;
    reqnum.innerHTML = conn[0];
    conntotal.innerHTML = conn[1];
    if (id == 1) {
        req1.remove();
    }
    else if (id == 2) {
        req2.remove();
    }
}