/* 
***********************************************
            WELCOME TO GONE v1.0.0

            TODO:

            	-make the game!
*********************************************** 
*/
/*
function dismiss() {
    setCookie("consent", "dismissed", 365)
    if (getCookie("consent") == "dismissed") {
        document.getElementById("cookie-banner").remove();
    }
}
*/

// map position locations
var x = 9;
var y = 18;

document.addEventListener("keydown", function (e) {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        if (y > 1) {
            y--;
        }
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        if (y < 18) {
            y++;
        }
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
        if (x < 17) {
            x++;
        }
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        if (x > 2) {
            x--;
        }
    }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "error";
}

function eraseCookie(cname) {
    setCookie(cname, "", -1);
}

function main() {
    var cMap = "begin";
    /*
	if (getCookie("consent") == "dismissed") {
        document.getElementById("cookie-banner").remove();
    } else {
        document.getElementById("cookietxt").innerHTML = "I use cookies to keep your progress.";
        cookieButton = document.getElementById('cookie-dismiss');
        cookieButton.onclick = dismiss();
    }
    */

    var map1 = [
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", "*", " ", " ", " ", "☐", " ", " ", " ", " ", "*", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", "*", " ", " ", " ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " ", " ", " ", "*", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", "|", " ", " ", "*", " ", " ", "|", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", "/", " ", " ", " ", "\\", " ", " ", "|", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", "/", " ", " ", " ", " ", " ", "\\", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "*", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "|", " ", "|", " ", " ", " ", " ", " ", "|", "*", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", "|", " ", " ", "G", " ", " ", "|", "|", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", "|", " ", " ", "O", " ", " ", "|", " ", " ", " ", " ", "b", "y", " "],
        [" ", " ", " ", " ", " ", " ", "|", " ", " ", "N", " ", " ", "|", " ", " ", " ", " ", "p", "a", "c"],
        [" ", " ", " ", " ", " ", " ", "|", " ", " ", "E", " ", " ", "|", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", "*", " ", " ", " ", "|", " ", " ", ".", " ", " ", "|", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", "|", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", "*", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", " ", "|", " ", " ", " ", " "]
    ];

    // replace default spawn with last known map + coords
    if (getCookie("x") != "error") {
        console.log("yippee");
        x = getCookie("x");
        y = getCookie("y");
        cMap = getCookie("cMap");
    }

    setInterval(function() {
        setCookie("map", cMap, 364); // current location of player on the maps
        setCookie("x", x, 364);
        setCookie("y", y, 364);
        console.log(getCookie("map"));
    }, 1000);

    setInterval(function() {

        if (cMap == "begin") {
            document.getElementById("display").innerHTML = map1[y - 1][x - 2] + map1[y - 1][x - 1] + map1[y - 1][x] + map1[y - 1][x + 1] + map1[y - 1][x + 2] + "<br>" +
            map1[y][x - 2] + map1[y][x - 1] + "o" + map1[y][x + 1] + map1[y][x + 2] + "<br>" +
            map1[y + 1][x - 2] + map1[y + 1][x - 1] + map1[y + 1][x] + map1[y + 1][x + 1] + map1[y + 1][x + 2];
        } else if (cMap == "") {

        }
        
    }, 50);
}
