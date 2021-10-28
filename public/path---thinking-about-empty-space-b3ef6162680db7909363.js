webpackJsonp([75090356549134],{681:function(e,t){e.exports={data:{site:{siteMetadata:{title:"David Baker is Online",author:"David Baker"}},whoa:{id:"/Users/davidbaker/code/davidbaker.is/src/data/scribbles/ported/2017-07-28_empty-space.whoa absPath of file >>> Whoa",ast:'{"type":"root","children":[{"type":"thematicBreak","position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":1,"column":4,"offset":3},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"title: Empty Document Memory\\npath: thinking-about-empty-space\\ndate: “2017-07-28T06:00:00.000Z”","position":{"start":{"line":2,"column":1,"offset":4},"end":{"line":4,"column":33,"offset":98},"indent":[1,1]}}],"position":{"start":{"line":2,"column":1,"offset":4},"end":{"line":4,"column":33,"offset":98},"indent":[1,1]}},{"type":"thematicBreak","position":{"start":{"line":5,"column":1,"offset":99},"end":{"line":5,"column":4,"offset":102},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"My current project for work has got me diving deep into ","position":{"start":{"line":7,"column":1,"offset":104},"end":{"line":7,"column":57,"offset":160},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"Chrome’s memory debugging tools","position":{"start":{"line":7,"column":59,"offset":162},"end":{"line":7,"column":90,"offset":193},"indent":[]}}],"position":{"start":{"line":7,"column":57,"offset":160},"end":{"line":7,"column":92,"offset":195},"indent":[]}},{"type":"text","value":". I’m grappling with GPU memory for work, but I’ve always wanted to better understand ","position":{"start":{"line":7,"column":92,"offset":195},"end":{"line":7,"column":178,"offset":281},"indent":[]}},{"type":"delete","children":[{"type":"text","value":"everything","position":{"start":{"line":7,"column":180,"offset":283},"end":{"line":7,"column":190,"offset":293},"indent":[]}}],"position":{"start":{"line":7,"column":178,"offset":281},"end":{"line":7,"column":192,"offset":295},"indent":[]}},{"type":"text","value":" the memory section of the ","position":{"start":{"line":7,"column":192,"offset":295},"end":{"line":7,"column":219,"offset":322},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">Performance</code>","position":{"start":{"line":7,"column":219,"offset":322},"end":{"line":7,"column":232,"offset":335},"indent":[]}},{"type":"text","value":" panel, also known as ","position":{"start":{"line":7,"column":232,"offset":335},"end":{"line":7,"column":254,"offset":357},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"the panel formerly known as ","position":{"start":{"line":7,"column":256,"offset":359},"end":{"line":7,"column":284,"offset":387},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">Timeline</code>","position":{"start":{"line":7,"column":284,"offset":387},"end":{"line":7,"column":294,"offset":397},"indent":[]}}],"position":{"start":{"line":7,"column":254,"offset":357},"end":{"line":7,"column":296,"offset":399},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":7,"column":296,"offset":399},"end":{"line":7,"column":297,"offset":400},"indent":[]}}],"position":{"start":{"line":7,"column":1,"offset":104},"end":{"line":7,"column":297,"offset":400},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Any production web page is going to have a lot going on in a performance profile, so it is important to be able to filter out the noise and see the things that are really important. This got me wondering…","position":{"start":{"line":9,"column":1,"offset":402},"end":{"line":9,"column":207,"offset":608},"indent":[]}}],"position":{"start":{"line":9,"column":1,"offset":402},"end":{"line":9,"column":207,"offset":608},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"What does the performance profile of an empty document look like?","position":{"start":{"line":11,"column":3,"offset":612},"end":{"line":11,"column":68,"offset":677},"indent":[]}}],"position":{"start":{"line":11,"column":1,"offset":610},"end":{"line":11,"column":68,"offset":677},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"So I created an empty file, ","position":{"start":{"line":13,"column":1,"offset":679},"end":{"line":13,"column":29,"offset":707},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">memory.html</code>","position":{"start":{"line":13,"column":29,"offset":707},"end":{"line":13,"column":42,"offset":720},"indent":[]}},{"type":"text","value":", and then opened the file from my filesystem in a Chrome incognito window. ","position":{"start":{"line":13,"column":42,"offset":720},"end":{"line":13,"column":118,"offset":796},"indent":[]}},{"type":"tangent","children":[{"type":"text","value":"I am using Chrome Canary, version 62.0.3166.0. You need to use an incognito window so extensions can be disabled―all of mine are.","position":{"start":{"line":13,"column":251,"offset":929},"end":{"line":13,"column":380,"offset":1058},"indent":[]}}],"position":{"start":{"line":13,"column":118,"offset":796},"end":{"line":13,"column":251,"offset":929},"indent":[]}}],"position":{"start":{"line":13,"column":1,"offset":679},"end":{"line":13,"column":251,"offset":929},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"I started a performance profile recording with the ","position":{"start":{"line":15,"column":1,"offset":931},"end":{"line":15,"column":52,"offset":982},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">Memory</code>","position":{"start":{"line":15,"column":52,"offset":982},"end":{"line":15,"column":60,"offset":990},"indent":[]}},{"type":"text","value":" checkbox checked,then reloaded the page manually and recorded for about 10 seconds. ","position":{"start":{"line":15,"column":60,"offset":990},"end":{"line":15,"column":145,"offset":1075},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"I couldn’t rely on the start profiling and reload option ","position":{"start":{"line":15,"column":146,"offset":1076},"end":{"line":15,"column":203,"offset":1133},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">⌘⇧E</code>","position":{"start":{"line":15,"column":203,"offset":1133},"end":{"line":15,"column":208,"offset":1138},"indent":[]}},{"type":"text","value":", because it stops recording before I wanted it to.","position":{"start":{"line":15,"column":208,"offset":1138},"end":{"line":15,"column":259,"offset":1189},"indent":[]}}],"position":{"start":{"line":15,"column":145,"offset":1075},"end":{"line":15,"column":260,"offset":1190},"indent":[]}}],"position":{"start":{"line":15,"column":1,"offset":931},"end":{"line":15,"column":260,"offset":1190},"indent":[]}},{"type":"heading","depth":3,"children":[{"type":"text","value":"I expected to see a profile that looked something like this 👇.","position":{"start":{"line":17,"column":5,"offset":1196},"end":{"line":17,"column":68,"offset":1259},"indent":[]}}],"position":{"start":{"line":17,"column":1,"offset":1192},"end":{"line":17,"column":68,"offset":1259},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"expected-profile.png","alt":"expected-profile.png","position":{"start":{"line":19,"column":1,"offset":1261},"end":{"line":19,"column":46,"offset":1306},"indent":[]},"blur":"/static/expected-profile-75e15e6173fe51c821898daf4ad55715-36620.png","blur64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAdklEQVQI1z2JUQ6CMBAFuf8NlbbQlmyVKI1RFkpNRsTEj8lM3muiCIO1eNsR+ohIwo+Rs2mJITJKj7MG1znSIMQ2YJzBe0+ebuQ87b7/aTR0lCRMemHQnvV5RccTVTO1LGzrzHvTg2/Xo5f9myn6OLayvHb/+ADktJaaYIP+jgAAAABJRU5ErkJggg==","src":"/static/expected-profile-75e15e6173fe51c821898daf4ad55715-47032.png","width":1758}],"position":{"start":{"line":19,"column":1,"offset":1261},"end":{"line":19,"column":46,"offset":1306},"indent":[]}},{"type":"heading","depth":3,"children":[{"type":"text","value":"But what I actually got looked like this 👇.","position":{"start":{"line":21,"column":5,"offset":1312},"end":{"line":21,"column":49,"offset":1356},"indent":[]}}],"position":{"start":{"line":21,"column":1,"offset":1308},"end":{"line":21,"column":49,"offset":1356},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"actual-profile.png","alt":"actual-profile.png","position":{"start":{"line":23,"column":1,"offset":1358},"end":{"line":23,"column":42,"offset":1399},"indent":[]},"blur":"/static/actual-profile-37e4039fecd4d1ac59a322e4b507079f-36620.png","blur64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAWklEQVQI103GSQqAMAwAQP//R5U2sQlBuqEIrU304EGYw0ywzuCWwIHcSgCMG8nmcKGAwh7BM7OggAdiqrX8TSBxz6fWaikfvUSN40ovM7XRzG4b3fSL3u3vAT0AcLRhPuR5AAAAAElFTkSuQmCC","src":"/static/actual-profile-37e4039fecd4d1ac59a322e4b507079f-ea21e.png","width":1774}],"position":{"start":{"line":23,"column":1,"offset":1358},"end":{"line":23,"column":42,"offset":1399},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Get the profile ","position":{"start":{"line":25,"column":1,"offset":1401},"end":{"line":25,"column":17,"offset":1417},"indent":[]}},{"type":"link","title":null,"url":"/Profile-empty-document-1529d49062dd3beff506c61c08682cd9.","children":[{"type":"text","value":"here","position":{"start":{"line":25,"column":18,"offset":1418},"end":{"line":25,"column":22,"offset":1422},"indent":[]}}],"position":{"start":{"line":25,"column":17,"offset":1417},"end":{"line":25,"column":47,"offset":1447},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":25,"column":47,"offset":1447},"end":{"line":25,"column":48,"offset":1448},"indent":[]}}],"position":{"start":{"line":25,"column":1,"offset":1401},"end":{"line":25,"column":48,"offset":1448},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Okay, so actually, I understand where the flat tail at the end of that image is coming from, mostly.","position":{"start":{"line":27,"column":1,"offset":1450},"end":{"line":27,"column":101,"offset":1550},"indent":[]}}],"position":{"start":{"line":27,"column":1,"offset":1450},"end":{"line":27,"column":101,"offset":1550},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Zoomed in on the tail, it looks like this 👇.","position":{"start":{"line":29,"column":1,"offset":1552},"end":{"line":29,"column":46,"offset":1597},"indent":[]}}],"position":{"start":{"line":29,"column":1,"offset":1552},"end":{"line":29,"column":46,"offset":1597},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"actual-profile-tail.png","alt":"actual-profile-tail.png","position":{"start":{"line":31,"column":1,"offset":1599},"end":{"line":31,"column":52,"offset":1650},"indent":[]},"blur":"/static/actual-profile-tail-50fae7d137b321f1d9081bd777cceca9-36620.png","blur64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAdUlEQVQI1y2J0Q6DIAAD/f9fBCMgKNHIsmXqEOSGcw+XXtum7w3aWmwrUW1HrwzDONJ5jRAC5yyDkUhZf63wZkQJhWjv7xEWwp/Lm+35IjlNnidC9PhoSe+JuEhKWik5clY44+3pQzmvflTfyHH9bfnYa+58AefnlwKgNLU2AAAAAElFTkSuQmCC","src":"/static/actual-profile-tail-50fae7d137b321f1d9081bd777cceca9-47032.png","width":1758}],"position":{"start":{"line":31,"column":1,"offset":1599},"end":{"line":31,"column":52,"offset":1650},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"This is the memory profile ","position":{"start":{"line":33,"column":1,"offset":1652},"end":{"line":33,"column":28,"offset":1679},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"after","position":{"start":{"line":33,"column":29,"offset":1680},"end":{"line":33,"column":34,"offset":1685},"indent":[]}}],"position":{"start":{"line":33,"column":28,"offset":1679},"end":{"line":33,"column":35,"offset":1686},"indent":[]}},{"type":"text","value":" a ","position":{"start":{"line":33,"column":35,"offset":1686},"end":{"line":33,"column":38,"offset":1689},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"major ","position":{"start":{"line":33,"column":40,"offset":1691},"end":{"line":33,"column":46,"offset":1697},"indent":[]}},{"type":"link","title":null,"url":"https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)","children":[{"type":"text","value":"garbage collection","position":{"start":{"line":33,"column":47,"offset":1698},"end":{"line":33,"column":65,"offset":1716},"indent":[]}}],"position":{"start":{"line":33,"column":46,"offset":1697},"end":{"line":33,"column":135,"offset":1786},"indent":[]}}],"position":{"start":{"line":33,"column":38,"offset":1689},"end":{"line":33,"column":137,"offset":1788},"indent":[]}},{"type":"text","value":" 👆, which you can see if you ","position":{"start":{"line":33,"column":137,"offset":1788},"end":{"line":33,"column":167,"offset":1818},"indent":[]}},{"type":"link","title":null,"url":"/Profile-empty-document-1529d49062dd3beff506c61c08682cd9.","children":[{"type":"text","value":"get the profile","position":{"start":{"line":33,"column":168,"offset":1819},"end":{"line":33,"column":183,"offset":1834},"indent":[]}}],"position":{"start":{"line":33,"column":167,"offset":1818},"end":{"line":33,"column":208,"offset":1859},"indent":[]}},{"type":"text","value":" and follow along.","position":{"start":{"line":33,"column":208,"offset":1859},"end":{"line":33,"column":226,"offset":1877},"indent":[]}}],"position":{"start":{"line":33,"column":1,"offset":1652},"end":{"line":33,"column":226,"offset":1877},"indent":[]}},{"type":"list","ordered":false,"start":null,"loose":false,"children":[{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"We’ve got 1 document, as expected.","position":{"start":{"line":36,"column":3,"offset":1882},"end":{"line":36,"column":37,"offset":1916},"indent":[]}}],"position":{"start":{"line":36,"column":3,"offset":1882},"end":{"line":36,"column":37,"offset":1916},"indent":[]}}],"position":{"start":{"line":36,"column":1,"offset":1880},"end":{"line":36,"column":37,"offset":1916},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"We have 0 listeners, as expected.","position":{"start":{"line":37,"column":3,"offset":1919},"end":{"line":37,"column":36,"offset":1952},"indent":[]}}],"position":{"start":{"line":37,"column":3,"offset":1919},"end":{"line":37,"column":36,"offset":1952},"indent":[]}}],"position":{"start":{"line":37,"column":1,"offset":1917},"end":{"line":37,"column":36,"offset":1952},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"We have 4 nodes, which Chrome will automatically generate for every HTML page: ","position":{"start":{"line":38,"column":3,"offset":1955},"end":{"line":38,"column":82,"offset":2034},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">document</code>","position":{"start":{"line":38,"column":82,"offset":2034},"end":{"line":38,"column":92,"offset":2044},"indent":[]}},{"type":"text","value":", ","position":{"start":{"line":38,"column":92,"offset":2044},"end":{"line":38,"column":94,"offset":2046},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">html</code>","position":{"start":{"line":38,"column":94,"offset":2046},"end":{"line":38,"column":100,"offset":2052},"indent":[]}},{"type":"text","value":", ","position":{"start":{"line":38,"column":100,"offset":2052},"end":{"line":38,"column":102,"offset":2054},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">head</code>","position":{"start":{"line":38,"column":102,"offset":2054},"end":{"line":38,"column":108,"offset":2060},"indent":[]}},{"type":"text","value":", and ","position":{"start":{"line":38,"column":108,"offset":2060},"end":{"line":38,"column":114,"offset":2066},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">body</code>","position":{"start":{"line":38,"column":114,"offset":2066},"end":{"line":38,"column":120,"offset":2072},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":38,"column":120,"offset":2072},"end":{"line":38,"column":121,"offset":2073},"indent":[]}}],"position":{"start":{"line":38,"column":3,"offset":1955},"end":{"line":38,"column":121,"offset":2073},"indent":[]}}],"position":{"start":{"line":38,"column":1,"offset":1953},"end":{"line":38,"column":121,"offset":2073},"indent":[]}}],"position":{"start":{"line":36,"column":1,"offset":1880},"end":{"line":38,"column":121,"offset":2073},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"dom-tree-4.png","alt":"dom-tree-4.png","position":{"start":{"line":40,"column":1,"offset":2075},"end":{"line":40,"column":34,"offset":2108},"indent":[]},"blur":"/static/dom-tree-4-8cfd1aac36fd30f30a77b67727140000-49554.png","blur64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAACcUlEQVQ4y6WUW08TQRTH+5H0SSOCohQoNZqoLz764jfwzZj4GfTBB2OQaIzGlEvDpaQXpFSkVMAFW9heFpa2u93dspWWgtLdv7OX7pbeojLJZCYzZ35zzvmfGQeamqqqejfmCtrtN47NzdHxgGLAuDwLKvIam1EPjqq/usLaAs/C9kB57+Fn5BoKwR7EfE9wWtMt/s1DVdFP4cfXMay9v4i0z43UjBPU+AD2mB19T1GUvwcqdWBskgAvgP88gpz/OmKfXCgUuI757RyyGY6Wsw3/M6RnnUhM30I85ukK6y5KQ45oOglBLFkw9b9UNr2QxBxWAi+xtepBtXpyPpV5bh8xz13I4avI+i4hOvsUp8o5VI5Hx0i5XAE960Y+NAzWP4LdjK1yO6ij3SupA7fXp8DOXSYquyAt3sD2zG2iMm/nUm311NEoghaqBqvVDKBcKmNx/DFyITeSc3ewHBjF8UnN9pDYaiXWyHDYST57U7V6BFGUcPIb2GVocFxeXxdFAeVyuTlRFtTysEaGvTSFTGIRLJuFJB1YBd54UOvFogx2PwdmZwlMcs0Uqu6hWVcb4VdITfcREfoQfHsfglCwQjMEUCz1ZVlG4N0DcMQ2Pd2LtdBzGDuKEXJRErA1NYx80Im4dwjiQi+2lt+YJVRrESu++hECsaFnhpENkFfkdaLA79sqa8DNiSEUlwbBzLsghnpAfRm1gHZ9GvPNlQ/678P6XeAXBnWgwGdNoBnyOgmZmeuHHBlAdOIhyZPU8m7r+S6VSliZfISD8E2w8/34Fnphh2xJTjqTopD4HsThYaXLj22sVSrHSFALyNDrUFT7wj8o+o4yJCP9SwAAAABJRU5ErkJggg==","src":"/static/dom-tree-4-8cfd1aac36fd30f30a77b67727140000-d2601.png","width":253}],"position":{"start":{"line":40,"column":1,"offset":2075},"end":{"line":40,"column":34,"offset":2108},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"What I don’t understand about the tail is why we have any JavaScript heap at all 🤔. ","position":{"start":{"line":42,"column":1,"offset":2110},"end":{"line":42,"column":86,"offset":2195},"indent":[]}},{"type":"normative","id":"normative-7Ch70Q6H8a","children":[{"type":"text","value":"I should "},{"type":"text","value":"come back to that later.","position":{"start":{"line":42,"column":86,"offset":2195},"end":{"line":42,"column":110,"offset":2219},"indent":[]}}],"position":{"start":{"line":42,"column":86,"offset":2195},"end":{"line":42,"column":119,"offset":2228},"indent":[]}}],"position":{"start":{"line":42,"column":1,"offset":2110},"end":{"line":42,"column":119,"offset":2228},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"My big question is this:","position":{"start":{"line":44,"column":1,"offset":2230},"end":{"line":44,"column":25,"offset":2254},"indent":[]}}],"position":{"start":{"line":44,"column":1,"offset":2230},"end":{"line":44,"column":25,"offset":2254},"indent":[]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"What are the other 4 documents and 71 nodes that are generated and then cleaned up after a few seconds?","position":{"start":{"line":46,"column":4,"offset":2259},"end":{"line":46,"column":107,"offset":2362},"indent":[]}}],"position":{"start":{"line":46,"column":1,"offset":2256},"end":{"line":46,"column":107,"offset":2362},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"This kind of thing is very difficult to Google.","position":{"start":{"line":48,"column":1,"offset":2364},"end":{"line":48,"column":48,"offset":2411},"indent":[]}}],"position":{"start":{"line":48,"column":1,"offset":2364},"end":{"line":48,"column":48,"offset":2411},"indent":[]}},{"type":"paragraph","children":[{"type":"search","children":[{"type":"text","value":"chrome empty document generated documents","position":{"start":{"line":50,"column":46,"offset":2458},"end":{"line":50,"column":87,"offset":2499},"indent":[]}}],"position":{"start":{"line":50,"column":1,"offset":2413},"end":{"line":50,"column":46,"offset":2458},"indent":[]}}],"position":{"start":{"line":50,"column":1,"offset":2413},"end":{"line":50,"column":46,"offset":2458},"indent":[]}},{"type":"paragraph","children":[{"type":"search","children":[{"type":"text","value":"garbage collected documents after page loads","position":{"start":{"line":52,"column":49,"offset":2508},"end":{"line":52,"column":93,"offset":2552},"indent":[]}}],"position":{"start":{"line":52,"column":1,"offset":2460},"end":{"line":52,"column":49,"offset":2508},"indent":[]}}],"position":{"start":{"line":52,"column":1,"offset":2460},"end":{"line":52,"column":49,"offset":2508},"indent":[]}},{"type":"paragraph","children":[{"type":"search","children":[{"type":"text","value":"performance timeline shows extra documents","position":{"start":{"line":54,"column":47,"offset":2556},"end":{"line":54,"column":89,"offset":2598},"indent":[]}}],"position":{"start":{"line":54,"column":1,"offset":2510},"end":{"line":54,"column":47,"offset":2556},"indent":[]}}],"position":{"start":{"line":54,"column":1,"offset":2510},"end":{"line":54,"column":47,"offset":2556},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"So far, I really haven’t gotten anywhere with an answer to this.","position":{"start":{"line":56,"column":1,"offset":2558},"end":{"line":56,"column":65,"offset":2622},"indent":[]}}],"position":{"start":{"line":56,"column":1,"offset":2558},"end":{"line":56,"column":65,"offset":2622},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Further research is needed.","position":{"start":{"line":58,"column":1,"offset":2624},"end":{"line":58,"column":28,"offset":2651},"indent":[]}}],"position":{"start":{"line":58,"column":1,"offset":2624},"end":{"line":58,"column":28,"offset":2651},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":59,"column":1,"offset":2652}}}',frontmatter:{title:"Empty Document Memory",date:"July 28, 2017",bareNaked:null}}},pathContext:{postPath:"thinking-about-empty-space"}}}});
//# sourceMappingURL=path---thinking-about-empty-space-b3ef6162680db7909363.js.map