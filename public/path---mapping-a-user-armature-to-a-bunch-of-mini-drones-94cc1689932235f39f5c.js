webpackJsonp([0xc059fae439b9],{643:function(e,t){e.exports={data:{site:{siteMetadata:{title:"David Baker is Online",author:"David Baker"}},whoa:{id:"/Users/davidbaker/code/davidbaker.is/src/data/scribbles/2018-05-01_kinect_drone_superhumans/2018-05-01-kinect-drone-superhumans.whoa absPath of file >>> Whoa",ast:'{"type":"root","children":[{"type":"thematicBreak","position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":1,"column":4,"offset":3},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"title: Kinect Drone Superhumans\\npath: mapping-a-user-armature-to-a-bunch-of-mini-drones\\ndate: 2018-05-02T04:52:13.832Z","position":{"start":{"line":2,"column":1,"offset":4},"end":{"line":4,"column":31,"offset":122},"indent":[1,1]}}],"position":{"start":{"line":2,"column":1,"offset":4},"end":{"line":4,"column":31,"offset":122},"indent":[1,1]}},{"type":"thematicBreak","position":{"start":{"line":5,"column":1,"offset":123},"end":{"line":5,"column":4,"offset":126},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"drone-drawing-2.png","alt":"drone-drawing","position":{"start":{"line":7,"column":1,"offset":128},"end":{"line":7,"column":38,"offset":165},"indent":[]},"blur":"/static/drone-drawing-2-932a647ee4607a4a0b2060f8d66aa1ca-36620.png","blur64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABE0lEQVQoz32STXOEIAyG/f+/qTM9b0/tpT300ENVpoqIg7ggH28j6m7ZdRsn80KSeQiRAmQxRuya1ouugUvs1h/liqNkdkjy7YBt/58lYPritfQCC6SdB1rSMSB60plqXUy5ZR8NxS35tOaLv3Te19CTyqCeGZSnL1hxBgwBuEPs/QpdYMKvsJbiloChmxGkgzYKp9cn6LPcgCGpHAe8f37AOpv2IY1oH8XBle1k0QuJbqjx8vaM2ZmsQ1YziE6Ac56PJB7/tGIf92g6tPIbyv6k7nagEALDMKCqKmitk96+iKzD1D4FlWlpGeCCuV5XSjDG4JyDtRZlWaJpmruXkAO3RIjurlApBWPWESxQ7/1D0G6/sYTDqjcNZSQAAAAASUVORK5CYII=","src":"/static/drone-drawing-2-932a647ee4607a4a0b2060f8d66aa1ca-f4790.png","width":2048}],"position":{"start":{"line":7,"column":1,"offset":128},"end":{"line":7,"column":38,"offset":165},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Boy do I wish I could port notability ","position":{"start":{"line":9,"column":1,"offset":167},"end":{"line":9,"column":39,"offset":205},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">.note</code>","position":{"start":{"line":9,"column":39,"offset":205},"end":{"line":9,"column":46,"offset":212},"indent":[]}},{"type":"text","value":" files to ","position":{"start":{"line":9,"column":46,"offset":212},"end":{"line":9,"column":56,"offset":222},"indent":[]}},{"type":"html","value":"<code class=\\"language-text\\">SVG</code>","position":{"start":{"line":9,"column":56,"offset":222},"end":{"line":9,"column":61,"offset":227},"indent":[]}},{"type":"text","value":" and maintain variable stroke widths. I think this is the kind of thing ","position":{"start":{"line":9,"column":61,"offset":227},"end":{"line":9,"column":133,"offset":299},"indent":[]}},{"type":"normative","id":"normative-jVVomY7bGp","children":[{"type":"text","value":"I should "},{"type":"text","value":"just wait and let happen.","position":{"start":{"line":9,"column":133,"offset":299},"end":{"line":9,"column":158,"offset":324},"indent":[]}}],"position":{"start":{"line":9,"column":133,"offset":299},"end":{"line":9,"column":167,"offset":333},"indent":[]}},{"type":"text","value":" It’s too bad variable width strokes are probably 5+ years away from being in the ","position":{"start":{"line":9,"column":167,"offset":333},"end":{"line":9,"column":249,"offset":415},"indent":[]}},{"type":"link","title":null,"url":"https://www.w3.org/Graphics/SVG/WG/wiki/Proposals/Variable_width_stroke","children":[{"type":"text","value":"SVG standard","position":{"start":{"line":9,"column":250,"offset":416},"end":{"line":9,"column":262,"offset":428},"indent":[]}}],"position":{"start":{"line":9,"column":249,"offset":415},"end":{"line":9,"column":336,"offset":502},"indent":[]}},{"type":"text","value":". \\nThat’s my hot ","position":{"start":{"line":9,"column":336,"offset":502},"end":{"line":10,"column":15,"offset":519},"indent":[1]}},{"type":"wordChoice","children":[{"type":"text","value":"guess"},{"type":"text","value":"take"}],"position":{"start":{"line":10,"column":15,"offset":519},"end":{"line":10,"column":31,"offset":535},"indent":[]}},{"type":"text","value":" anyways.\\nIt’s not really founded in ","position":{"start":{"line":10,"column":31,"offset":535},"end":{"line":11,"column":28,"offset":572},"indent":[1]}},{"type":"wordChoice","children":[{"type":"text","value":"sources"},{"type":"text","value":"facts"}],"position":{"start":{"line":11,"column":28,"offset":572},"end":{"line":11,"column":47,"offset":591},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":11,"column":47,"offset":591},"end":{"line":11,"column":48,"offset":592},"indent":[]}}],"position":{"start":{"line":9,"column":1,"offset":167},"end":{"line":11,"column":48,"offset":592},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"text","value":"If I wasn’t 3D printing something right now, I’d look at the Kinect to see what body parts can easily be tracked (nodes of an armature, basically). Unfortunately, I don’t think my PC has enough USB3 ports that can supply enough power to operate both the Kinect and Lulzbot mini at the same time. This is strange though, because both the Kinect and Lulzbot have external power sources. Maybe ","position":{"start":{"line":13,"column":1,"offset":594},"end":{"line":13,"column":392,"offset":985},"indent":[]}},{"type":"normative","id":"normative-DeIiVAOTu_","children":[{"type":"text","value":"I should "},{"type":"text","value":"look into that again.","position":{"start":{"line":13,"column":392,"offset":985},"end":{"line":13,"column":413,"offset":1006},"indent":[]}}],"position":{"start":{"line":13,"column":392,"offset":985},"end":{"line":13,"column":422,"offset":1015},"indent":[]}},{"type":"text","value":" Not tonight though.","position":{"start":{"line":13,"column":422,"offset":1015},"end":{"line":13,"column":442,"offset":1035},"indent":[]}}],"position":{"start":{"line":13,"column":1,"offset":594},"end":{"line":13,"column":442,"offset":1035},"indent":[]}},{"type":"heading","depth":2,"children":[{"type":"link","title":null,"url":"https://en.wikipedia.org/wiki/Mission_critical","children":[{"type":"text","value":"Mission critical","position":{"start":{"line":15,"column":5,"offset":1041},"end":{"line":15,"column":21,"offset":1057},"indent":[]}}],"position":{"start":{"line":15,"column":4,"offset":1040},"end":{"line":15,"column":70,"offset":1106},"indent":[]}},{"type":"text","value":" software is super interesting.","position":{"start":{"line":15,"column":70,"offset":1106},"end":{"line":15,"column":101,"offset":1137},"indent":[]}}],"position":{"start":{"line":15,"column":1,"offset":1037},"end":{"line":15,"column":101,"offset":1137},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"And I guess mission critcal sytems on the whole.","position":{"start":{"line":17,"column":1,"offset":1139},"end":{"line":17,"column":49,"offset":1187},"indent":[]}}],"position":{"start":{"line":17,"column":1,"offset":1139},"end":{"line":17,"column":49,"offset":1187},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"I wonder what the state of the art solutions to inter-communicating networks of autonomous vehicles look like. My buddy and I sometimes joke about ","position":{"start":{"line":19,"column":1,"offset":1189},"end":{"line":19,"column":148,"offset":1336},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"adaptive cruise control","position":{"start":{"line":19,"column":150,"offset":1338},"end":{"line":19,"column":173,"offset":1361},"indent":[]}}],"position":{"start":{"line":19,"column":148,"offset":1336},"end":{"line":19,"column":175,"offset":1363},"indent":[]}},{"type":"text","value":" being where your car will avoid all obstacles while driving at a constant speed.","position":{"start":{"line":19,"column":175,"offset":1363},"end":{"line":19,"column":256,"offset":1444},"indent":[]}}],"position":{"start":{"line":19,"column":1,"offset":1189},"end":{"line":19,"column":256,"offset":1444},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Anyway, I would imagine each vehicle in the network has a goal/intent that it expresses to everyone else and somehow all the vehicles need to come to consensus on who has the right of way, and then they must also work together to minimize all travel times (or maybe fuel consumption?).","position":{"start":{"line":21,"column":1,"offset":1446},"end":{"line":21,"column":286,"offset":1731},"indent":[]}}],"position":{"start":{"line":21,"column":1,"offset":1446},"end":{"line":21,"column":286,"offset":1731},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Let’s say there’s no possibility of random exterior events that could disrupt the cars’ plans. ","position":{"start":{"line":23,"column":1,"offset":1733},"end":{"line":23,"column":96,"offset":1828},"indent":[]}}],"position":{"start":{"line":23,"column":1,"offset":1733},"end":{"line":23,"column":96,"offset":1828},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Let’s use existing road infrastructure, but assume all vehicles are on the network.","position":{"start":{"line":25,"column":1,"offset":1830},"end":{"line":25,"column":84,"offset":1913},"indent":[]}}],"position":{"start":{"line":25,"column":1,"offset":1830},"end":{"line":25,"column":84,"offset":1913},"indent":[]}},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"I think it’s pretty clear lanes ","position":{"start":{"line":27,"column":3,"offset":1917},"end":{"line":27,"column":35,"offset":1949},"indent":[]}},{"type":"wordChoice","children":[{"type":"text","value":"should"},{"type":"text","value":"would"}],"position":{"start":{"line":27,"column":35,"offset":1949},"end":{"line":27,"column":53,"offset":1967},"indent":[]}},{"type":"text","value":" naturally appear","position":{"start":{"line":27,"column":53,"offset":1967},"end":{"line":27,"column":70,"offset":1984},"indent":[]}}],"position":{"start":{"line":27,"column":1,"offset":1915},"end":{"line":27,"column":72,"offset":1986},"indent":[]}},{"type":"text","value":", at least in moderately trafficked areas. But would lanes always make sense in low traffic areas? Probably not, right?","position":{"start":{"line":27,"column":72,"offset":1986},"end":{"line":27,"column":191,"offset":2105},"indent":[]}}],"position":{"start":{"line":27,"column":1,"offset":1915},"end":{"line":27,"column":191,"offset":2105},"indent":[]}},{"type":"thematicBreak","position":{"start":{"line":29,"column":1,"offset":2107},"end":{"line":29,"column":4,"offset":2110},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Here’s a question, for another day.","position":{"start":{"line":30,"column":1,"offset":2111},"end":{"line":30,"column":36,"offset":2146},"indent":[]}}],"position":{"start":{"line":30,"column":1,"offset":2111},"end":{"line":30,"column":36,"offset":2146},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"How do we bend the machines to our will?","position":{"start":{"line":31,"column":3,"offset":2149},"end":{"line":31,"column":43,"offset":2189},"indent":[]}}],"position":{"start":{"line":31,"column":1,"offset":2147},"end":{"line":31,"column":43,"offset":2189},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Or rather, how can we best accomplish this","position":{"start":{"line":33,"column":1,"offset":2191},"end":{"line":33,"column":43,"offset":2233},"indent":[]}},{"type":"wordChoice","children":[{"type":"text","value":"."},{"type":"text","value":"?"}],"position":{"start":{"line":33,"column":43,"offset":2233},"end":{"line":33,"column":52,"offset":2242},"indent":[]}}],"position":{"start":{"line":33,"column":1,"offset":2191},"end":{"line":33,"column":52,"offset":2242},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":33,"column":52,"offset":2242}}}',frontmatter:{title:"Kinect Drone Superhumans",date:"May 02, 2018",bareNaked:null}}},pathContext:{postPath:"mapping-a-user-armature-to-a-bunch-of-mini-drones"}}}});
//# sourceMappingURL=path---mapping-a-user-armature-to-a-bunch-of-mini-drones-94cc1689932235f39f5c.js.map