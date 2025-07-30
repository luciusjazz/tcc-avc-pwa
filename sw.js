<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Courier; -webkit-text-stroke: #000000; min-height: 16.0px}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 16.0px Helvetica; -webkit-text-stroke: #000000; min-height: 19.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const CACHE_NAME = 'avc-check-cache-v1';</span></p>
<p class="p1"><span class="s1">const urlsToCache = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>'/',</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>'/index.html'</span></p>
<p class="p1"><span class="s1">];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener('install', event =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>event.waitUntil(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>caches.open(CACHE_NAME)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>.then(cache =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.log('Cache aberto');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return cache.addAll(urlsToCache);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener('fetch', event =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>event.respondWith(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>caches.match(event.request)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>.then(response =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (response) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>return response;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return fetch(event.request);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<h4 style="margin: 0.0px 0.0px 16.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px"><span class="s1"><b></b></span><br></h4>
<p class="p4"><span class="s1"></span><br></p>
</body>
</html>
