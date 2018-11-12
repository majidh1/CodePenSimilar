function render() {
    var html = document.getElementById("box-html").children[0];
    var css = document.getElementById("box-css").children[0];
    var js = document.getElementById("box-js").children[0];
    var preview = document.getElementById("context");

    var iframeComponent = preview.contentWindow.document;

    iframeComponent.open();
    iframeComponent.writeln(html.innerText + '<style>' + css.innerText + '</style><script>' + js.innerText + '</script>');
    iframeComponent.close();
}

document.addEventListener('keyup', function () {
    render();
});

document.addEventListener('DOMContentLoaded', render, false);
