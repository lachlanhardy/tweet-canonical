# Tweet Canonical

A bookmarklet to parse the current page in your browser for a [RevCanonical link](http://revcanonical.wordpress.com/) and send that to Twitter as the base of a tweet.

## Installation
Simply drag this link to your bookmark bar: [Tweet Canonical]("javascript:function%20traverse\(w\)\{try\{var%20l=w\.document\.getElementsByTagName\('link'\);for\(var%20z=0;z<l\.length;z\+\+\)\{var%20c=l\[z\];if\(c\.getAttribute\('rev'\)=='canonical'\)\{return%20'http://twitter.com/home?status=%20'+c\.getAttribute\('href'\);\}\}for\(var%20i=0;i<w\.frames\.length;i++\)\{var%20url=traverse\(w\.frames\[i\]\);if\(url\)\{return%20url;\}\}\}catch\(e\)\{/*%20use%20e%20or%20do%20nothing%20*/\}\}var%20url=traverse\(window\);if\(url\)\{window\.location=url;\}else\{alert\('There%20is%20no%20canonical%20shortlink%20for%20this%20page.%20Maybe%20you%20should%20try%20a%20Flickr%20photo%20page?'\);\}")

## The concept

I love Flickr's new Twitter integration and I use it all the time, but sometimes I want to tweet about a photo with my own message rather than the photo's title.

This will work for any page with a RevCanonical link, not just Flickr.

## Sites currently supporting RevCanonical
* [24 Ways](http://24ways.org/)
* [Ars Technica](http://arstechnica.com/)
* [Baconfile](http://baconfile.com/)
* [Bokardo](http://bokardo.com/)
* [CollyLogic](http://colly.com/)
* [Dopplr](http://dopplr.com)
* [Flickr](http://flickr.com) (on photo pages)
* [PHP.net](http://php.net/)
* [SimonWillison.net](http://simonwillison.net/)
* [Songza](http://songza.com)
* [Threadless](http://threadless.com)

There are bound to be others, try the [RevCanonical blog](http://revcanonical.wordpress.com/) for more info.

## Copyright
Copyright (c) 2009 Lachlan Hardy. See LICENSE for details.
