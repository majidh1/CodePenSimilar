
var isDragRight = false;
var isDragLeft = false;
var editor = document.getElementById("editor");
var resizerLeft = document.getElementById("box-resizer-left");
var resizerRight = document.getElementById("box-resizer-right");
var resizerBottom = document.getElementById("box-resizer-bottom");
var htmlBox = document.getElementById("box-html");
var cssBox = document.getElementById("box-css");
var jsBox = document.getElementById("box-js");

resizerLeftPosition = resizerLeft.offsetLeft;
resizerRightPosition = resizerLeft.offsetLeft;

//set flags
function dragRight(flag) {
    if (typeof flag !== "boolean") {
        return;
    }
    isDragRight = flag;
}
function dragLeft(flag) {
    if (typeof flag !== "boolean") {
        return;
    }
    isDragLeft = flag;
}
//set flags


function dragging(ev) {
    if (isDragLeft) {
        draggingLeft(ev);
    }
    else if (isDragRight) {
        draggingRight(ev);
    }
    return;
}

function draggingLeft(ev) {
    htmlBoxSize = ev.clientX * 100 / editor.offsetWidth - ((resizerLeft.offsetWidth * 100 / editor.offsetWidth)/2);
    cssBoxSize = 100 - (jsBox.offsetWidth * 100 / editor.offsetWidth) - htmlBoxSize - (resizerLeft.offsetWidth * 100 / editor.offsetWidth) - (resizerRight.offsetWidth * 100 / editor.offsetWidth);
    htmlBox.style.width = htmlBoxSize.toString()+'%';
    cssBox.style.width = cssBoxSize .toString() + '%';
}

function draggingRight(ev) {
    jsBoxSize = 100 - (ev.clientX + (resizerLeft.offsetWidth/2)) * 100 / editor.offsetWidth;
    cssBoxSize = 100 - (htmlBox.offsetWidth * 100 / editor.offsetWidth) - jsBoxSize - (resizerLeft.offsetWidth * 100 / editor.offsetWidth) - (resizerRight.offsetWidth * 100 / editor.offsetWidth) ;
    jsBox.style.width = jsBoxSize.toString() + '%';
    cssBox.style.width = cssBoxSize.toString() + '%';
}

resizerLeft.addEventListener("mousedown", function () { dragLeft(true); }  );
resizerLeft.addEventListener("mouseup", function () { dragLeft(false); });
resizerRight.addEventListener("mousedown", function () { dragRight(true); });
resizerRight.addEventListener("mouseup,mouseout", function () { dragRight(false); });
editor.addEventListener("mousemove", function (ev) { dragging(ev); });

