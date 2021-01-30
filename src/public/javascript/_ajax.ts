class _AJAX {
  _sendXMLHttpRequest(method, url, async, idElement) {
    //get eg
    // xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
    // xhttp.send();
    // post eg
    // xhttp.open("POST", "demo_post.asp", true);
    // xhttp.send();
    const updateInnerHtml = (xhttp, idElement) => {
      document.getElementById(idElement).innerHTML = xhttp.responseText;
    };

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById('#example').innerHTML = this.responseText;
        updateInnerHtml(this, idElement);
      }
    };
    xhttp.open(method, url, async);
    xhttp.send();
  }
}
