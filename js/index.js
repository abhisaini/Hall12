var doing = 0,present = 0,no = 0,previous = 0,pre = 0,pond = 0,none=0;
document.getElementById('a' + present).style.color = 'rgb(10,10,10)';
$('.menu-toggle').click(function() {
    $('.site-nav').toggleClass('site-nav--open');
    $(this).toggleClass('open');
    pond = !pond;
    none=1;
});
$(document).click(function() {

    if (pond == 1&&!none) {
        pond = 0;
        $('.site-nav').toggleClass('site-nav--open');
        $('.menu-toggle').toggleClass('open');
    }
    none=0;
});
function sd() {
    setTimeout(function() {
        if (doing == 0 && no == 0) {
            present = present % 8;
            doing = 1;
            if (present == 7) {
                document.getElementById(previous).style.visibility = 'hidden';
                document.getElementById(previous).style.zIndex = '0';
            }
            if (present == 5) {
                document.getElementById('b' + pre).style.visibility = 'hidden';
                document.getElementById('b' + pre).style.zIndex = '0';
            }
            document.getElementById('a' + present).style.color = '';
            var f = document.getElementById('p' + present);
            var d = document.getElementById('p' + (present + 1) % 8);
            d.style.zIndex = '0';
            d.style.visibility = 'visible';
            f.className += " animated slideOutUp";
            setTimeout(function() {
                d.style.zIndex = '1';
                f.style.zIndex = '0';
                f.style.visibility = 'hidden';
                f.className = 'pages';
                doing = 0;
            }, 1500);
            present++;
            present = present % 8;
            document.getElementById('a' + present).style.color = 'rgb(10,10,10)';
        }
    }, 10);
}
function dd() {
    setTimeout(function() {
        if (doing == 0) {
            present = present % 8;
            doing = 1;
            if (present == 7) {
                document.getElementById(previous).style.visibility = 'hidden';
                document.getElementById(previous).style.zIndex = '0';
            }
            if (present == 5) {
                document.getElementById('b' + pre).style.visibility = 'hidden';
                document.getElementById('b' + pre).style.zIndex = '0';
            }
            document.getElementById('a' + present).style.color = '';
            var f = document.getElementById('p' + present);
            var d = document.getElementById('p' + (present + 1) % 8);
            d.style.zIndex = '0';
            d.style.visibility = 'visible';
            f.className += " animated slideOutUp";
            setTimeout(function() {
                d.style.zIndex = '1';
                f.style.zIndex = '0';
                f.style.visibility = 'hidden';
                f.className = 'pages';
                doing = 0;
            }, 1500);
            present++;
            present = present % 8;
            document.getElementById('a' + present).style.color = 'rgb(10,10,10)';
        }
    }, 10);
}
function nonnn() {
    no = 1;
    console.log('no');
}
function yes() {
    no = 0;
    console.log('yes');
}
function go(i) {
    if (doing == 0 && i != present) {
        present = present % 8;
        if (present == 7) {
            document.getElementById(previous).style.visibility = 'hidden';
            document.getElementById(previous).style.zIndex = '0';
        }
        if (present == 5) {
            document.getElementById('b' + pre).style.visibility = 'hidden';
            document.getElementById('b' + pre).style.zIndex = '0';
        }
        doing = 1;
        document.getElementById('a' + present).style.color = '';
        var f = document.getElementById('p' + present);
        var d = document.getElementById('p' + i % 8);
        d.style.zIndex = '0';
        d.style.visibility = 'visible';
        f.className += " animated slideOutUp";
        setTimeout(function() {
            f.style.zIndex = '0';
            d.style.zIndex = '1';
            f.style.visibility = 'hidden';
            d.style.visibility = 'visible';
            f.className = 'pages';
            doing = 0;
            present = i;
            document.getElementById('a' + present).style.color = 'rgb(10,10,10)';
        }, 1500);
    }
}
function su() {
    console.log('su');
    setTimeout(function() {
        if (doing == 0 && no == 0) {
            present = present % 8;
            if (present == 7) {
                document.getElementById(previous).style.visibility = 'hidden';
                document.getElementById(previous).style.zIndex = '0';
            }
            if (present == 5) {
                document.getElementById('b' + pre).style.visibility = 'hidden';
                document.getElementById('b' + pre).style.zIndex = '0';
            }
            doing = 1;
            document.getElementById('a' + present).style.color = '';
            var f = document.getElementById('p' + present),
                d = document.getElementById('p' + (present + 7) % 8);
            f.style.zIndex = '0';
            d.style.zIndex = '1';
            d.style.visibility = 'visible';
            d.className += " animated slideInDown";
            setTimeout(function() {
                d.style.zIndex = '1';
                f.style.visibility = 'hidden';
                f.className = 'pages';
                doing = 0;
            }, 1000);
            present--;
            if (present == -1) {
                present = 7;
            }
            document.getElementById('a' + present).style.color = 'rgb(10,10,10)';
        }
    }, 10);
}
function uu() {
    setTimeout(function() {
        if (doing == 0 && no == 0) {
            present = present % 8;
            if (present == 7) {
                document.getElementById(previous).style.visibility = 'hidden';
                document.getElementById(previous).style.zIndex = '0';
            }
            if (present == 5) {
                document.getElementById('b' + pre).style.visibility = 'hidden';
                document.getElementById('b' + pre).style.zIndex = '0';
            }
            doing = 1;
            document.getElementById('a' + present).style.color = '';
            var f = document.getElementById('p' + present),
                d = document.getElementById('p' + (present + 7) % 8);
            f.style.zIndex = '0';
            d.style.zIndex = '1';
            d.style.visibility = 'visible';
            d.className += " animated slideInDown";
            setTimeout(function() {
                d.style.zIndex = '1';
                f.style.visibility = 'hidden';
                f.className = 'pages';
                doing = 0;
            }, 1000);
            present--;
            if (present == -1) {
                present = 7;
            }
            document.getElementById('a' + present).style.color = 'rgb(10,10,10)';

        }
    }, 10);
}
function club() {
    document.getElementById(previous).style.visibility = 'hidden';
    document.getElementById(previous).style.zIndex = '0';
    previous = document.getElementById('abbu').value;
    document.getElementById(previous).style.visibility = 'visible';
    document.getElementById(previous).style.zIndex = '1';
}
function cs() {
    document.getElementById('b' + pre).style.visibility = 'hidden';
    document.getElementById('b' + pre).style.zIndex = '0';
    pre = document.getElementById('abba').value;
    document.getElementById('b' + pre).style.visibility = 'visible';
    document.getElementById('b' + pre).style.zIndex = '1';
}
function mess() {
    var n = document.getElementById('abbba').value;
    messing(n);
}
function messing(n) {
    if (n == 7) {
        var ddd = new Date();
        n = ddd.getDay();
    }
    var a;
    if (n == 0) {
      a="POHA,JALEBI,CURD#ALOO BANDHA MUTTER,MASOOR DAL EXTRA-VEG BIRYANI/EGG BIRIYANI#ALOO BANDHA MUTTER,MASOOR DAL EXTRA-VEG BIRYANI/EGG BIRIYANI";
    } else if (n == 1) {
      a = "IDLI/VADA ,SAMBHAR COCONUT CHUTNEY#ALOO BANDHA MUTTER,MASOOR DAL EXTRA-VEG BIRYANI/EGG BIRIYANI#ALOO TAMATAR,LEMON RICE,POORI(PALAK/PLAIN), , ROOHAFZA EXTRA – CHICKEN CURRY,SWEET- RASMALAI";
    } else if (n == 2) {
      a = "VEG SANDWICH#MIX VEG, ARHAR DAL,CHACH  EXTRA- DAHIWADA,MUTTON# CHOLE BHATURE/KULCHA, RICE,CUSTARD";
    } else if (n == 3) {
      a = "POORI,CHANA/POORI SABJI,HALWA#ALOO GOBI, RAJMA, BOONDI RAITA EXTRA-PANEER TIKKA#PANEER(BUTTER MASALA),JEERA RICE,MOONG DAL EXTRA -RASGOLA ";
    } else if (n == 4) {
      a = "UTTAPAM WITH SAMBHAR AND CHUTNEY#ALOO JEERA,TEHRI, ARHAR DAL, PAPAD EXTRA- METHI MALAI PANEER,MILK CAKE#FRIED RICE/NOODLES,MANCHURIAN,MASOOR DAL EXTRA- CHICKEN BUTTER MASALA/CHICKEN ROASTED";
    } else if (n == 5) {
      a = "VADAPAV/PAV BHAJI#PARATHA-PANEER/ALOO/MIX, MIX CHUTNEY,CHHOLE EXTRA- SWEET-CHHENA,TIKIA/CHHENA CHAMCHAM#PALAK DAL, ALOO GOBHI MUTTOR GRAVY EXTRA-CHICKEN BIRYANI ,IMARTY RABIDI";
    } else if (n == 6) {
      a = "DOSA,SAMBHAR, COCONUT CHUTNEY# DAL MAKHANI,ALOO PALAK/ALOO CAPSICUM EXTRA- AFGANI PANEER,FISH TIKKA/FISH FRY.#ALOO SOYABIN,MIX DAL,SEVAI/KHEER EXTRA – BUTTER CHIKEN EXTRA-BUTTER CHAMCHAM";
    }
    var bbbb = a.split('#');
    document.getElementById('bbbb').innerHTML = "<div style='font-family:rio;font-size:2vh; background-color:rgba(0,0,0,0.3);padding:1vh;'>Mess menu</div>Breakfast : " + bbbb[0] + "<br><br><hr>Lunch : " + bbbb[1] + "<br><br><hr>Dinner:" + bbbb[2];
}
window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
        su();
    }
    if (e.deltaY > 0) {
        sd();
    }
});
var last = null;
$(document).ready(function() {
    messing(7);
    $("#flip").click(function() {
        if (last != null && last != $("#panel")) {
            last.slideToggle("slow");
        }
        last = $("#panel");
        $("#panel").slideToggle("slow");
    });
    $("#fli").click(function() {
        if (last != null && last != $("#pane")) {
            last.slideToggle("slow");
        }
        last = $("#pane");
        $("#pane").slideToggle("slow");
    });
    $("#fl").click(function() {
        if (last != null && last != $("#pan")) {
            last.slideToggle("slow");
        }
        last = $("#pan");
        $("#pan").slideToggle("slow");
    });

    $("#flii").click(function() {
        if (last != null && last != $("#pann")) {
            last.slideToggle("slow");
        }
        last = $("#pann");
        $("#pann").slideToggle("slow");
    });
    $("#fliii").click(function() {
        if (last != null && last != $("#pannn")) {
            last.slideToggle("slow");
        }
        last = $("#pannn");
        $("#pannn").slideToggle("slow");
    });
    $("#fliiii").click(function() {
        if (last != null && last != $("#pannnn")) {
            last.slideToggle("slow");
        }
        last = $("#pannnn");
        $("#pannnn").slideToggle("slow");
    });
    $("#antirag").click(function() {
        $("#antpdf").slideToggle("slow");
    });
    $("#guidelines").click(function() {
        $("#guidepdf").slideToggle("slow");
    });
});
var lastY;
$(document).on("pagecreate", function(event) {
    $(window).on("orientationchange", function(event) {
        alert("Orientation changed to: " + event.orientation);
    });
});
var img = new Image();
img.src = 'images/other/download.png';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30;
var scale = 1.05;
var y = -4.5;
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;
img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;
    if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }
    ctx = document.getElementById('canvas').getContext('2d');
    return setInterval(draw, speed);
}
function draw() {
    ctx.clearRect(0, 0, clearX, clearY);
    if (imgW <= CanvasXSize) {
        if (x > (CanvasXSize)) {
            x = 0;
        }
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
        }
    } else {
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    ctx.drawImage(img, x, y, imgW, imgH);
    x += dx;
}
$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
        case 38:
            uu();
            break;

        case 39:
        case 40:
            dd();
            break;
        default:
            return;
    }
    e.preventDefault();
});
