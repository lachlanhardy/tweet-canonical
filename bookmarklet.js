javascript:
function traverse(w) {
  try {
    var l = w.document.getElementsByTagName('link');
    for (var z = 0; z < l.length; z++) {
      var c = l[z];
      if (c.getAttribute('rev') == 'canonical') {
        return "http://twitter.com/home?status= " + c.getAttribute('href');
      }
    }
    for (var i = 0; i < w.frames.length; i++) {
      var url = traverse(w.frames[i]);
      if (url) {
        return url;a
      }
    }
  }
  catch(e) {
    /* use e or do nothing */
  }
}

var url = traverse(window);
if (url) {
  window.location = url;
} else {
  alert('There is no canonical shortlink for this page. \nMaybe you should try a Flickr photo page?');
}
