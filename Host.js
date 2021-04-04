var PROXY = {};
PROXY.direct = "DIRECT";
PROXY.goagent = "PROXY 127.0.0.1:8087";
PROXY.ssh = "PROXY 127.0.0.1:8123";
PROXY.jpkc = "PROXY 127.0.0.1:4080";
PROXY.adblock = "PROXY 127.0.0.1:8080";
PROXY.acc = PROXY['goagent'];
var DEFAULT = PROXY['direct'];

var ADBLOCK = {
  "domain": [
    'pixel.quantserve.com',
    '.scorecardresearch.com',
    'adlog.com.com',
    'apex.com.com',
    '.imrworldwide.com',
    '.doubleverify.com',
    'dw.com.com',
    '.revsci.net',
    'tags.bluekai.com',
    'gscounters.gigya.com',
    'bid.openx.net',
    '.justtechjobs.com',
    '.intellitxt.com',
    'js.bizographics.com',
    'jlinks.industrybrains.com',
    '.qnsr.com',
    '.adnxs.com',
    'pagead2.googlesyndication.com',
    'avazudsp.net',
    'partner.googleadservices.com',
    '.doubleclick.net',
    'main.gslb.ku6.com',
    'lu.sogou.com',
    'inte.sogou.com'
    'Google.com'
  ],
  "shexp": [
    '*://images.sohu.com/cs/jsfile/js/ct.*',
    '*://readict.com/promotion/*',
    '*://www.iicdn.com/www/delivery/afr.php*',
    '*://duiwai.baidu.com/nocache/mp/*',
    '*://bc.ifeng.com/main/s*',
    '*://cpro.baidu.com/cpro/*',
    '*://sc.ifeng.com/js.ng/channel*',
    '*.alimama.com/alimama.php*',
    '*.alimama.cn/js/ac.js',
    '*://cdn.tanx.com/t/tanxclick.js',
    '*static.atm.youku.com/*.swf*',
    '*static.atm.youku.com/*.jpg*',
    '*d1.sina.com.cn/*.flv',
    '*.f4v?*&vidtp=*&igrft=*',
    '*f.youku.com/player/getFlvPath/fileid/*',
    '*/ikuadapter.swf',
    '*://connect.facebook.net/*',
    '*://platform.twitter.com/widgets.js',
    '*.tdimg.com/sales/*',
    '*.56imgs.com*/tuiguang*'
  ]
};
var GFW_LONGHTTP = {
  "domain": [
    'userstream.twitter.com',
    '.youtube.com',
    '.vimeo.com',
    '.blip.tv'
  ]
};
var GFW = {
  "domain": [
    '4bsd.biz',
    'tabsugar.com',
    'bitly.com',
    '.addthiscdn.com',
    '.disqus.com',
    '.ggpht.com',
    '.tv.com',
    'widgets.twimg.com',
    '.android-x86.org',
    '.rfa.org',
    '.cld.me',
    'mashable.com',
    '.nextmedia.com',
    '.appleactionews.com',
    '.tumblr.com',
    'mobileways.de',
    'helpdesk.lastpass.com',
    '.pixfs.net',
    '.pixnet.net',
    'blip.tv',
    '.scribd.com',
    '.voanews.com',
    '.android.com',
    '.gstatic.com',
    '.chromium.org',
    '.t66y.com',
    't66y.com',
    '.letscorp.net',
    'youtu.be',
    '.epfl.ch',
    '.snsanalytics.com',
    '.tweetmeme.com',
    'smf.is',
    'twitterfeed.com',
    '.twitterfeed.com',
    '.r246.jp',
    '.wordpress.com',
    'p.twimg.com',
    '.rfi.fr',
    'chromiumupdater.sytes.net',
    'wezone.net',
    'zh.wikipedia.org',
    'chinadigitaltimes.net',
    '.chinadigitaltimes.net',
    'bit.ly',
    '.googleapis.com',
    '.google.com',
    'analyticsrock.com',
    'sns.mx',
    'solidot.org.feedsportal.com',
    '.pocoo.org',
    '.linkedin.com',
    '.fnierdster.com',
    '.milewise.com',
    'picplz.com',
    't.co',
    'youtube.com',
    '.ytimg.com',
    'google.com',
    '.googleusercontent.com',
    '.googlepages.com',
    '.googlevideo.com',
    '.googlecode.com',
    '.appspot.com',
    '.blogspot.com',
    '.google-analytics.com',
    '.rene-liu.com',
    'rene-liu.com',
    '.4shared.com',
    '4shared.com',
    '.twitter.com',
    'twitter.com',
    'twitpic.com',
    'img.ly',
    'j.mp',
    'yfrog.com',
    '.facebook.com',
    'facebook.com',
    '.fbcdn.net',
    '.feedburner.com',
    'feedburner.com',
    'foursquare.com',
    'bullogger.com',
    '.bullogger.com',
    'diigo.com',
    '.diigo.com',
    'dropbox.com',
    'ht.ly',
    'hootsuite.com',
    '.hootsuite.com',
    'imageshack.us',
    'imdb.com',
    '.imdb.com',
    'mail-archive.com',
    '.mail-archive.com',
    'mobypicture.com',
    'ow.ly',
    'pastie.org',
    'plixi.com',
    '.plixi.com',
    'plurk.com',
    '.plurk.com',
    '.rapidshare.com',
    'rapidshare.com',
    'wp.me',
    'nyti.ms',
    '.googlesyndication.com',
    'page2rss.com',
    '.dhananjaynene.com',
    '.twbbs.org.tw',
    'llvm.org',
    '.llvm.org',
    '.tweetdeck.com',
    'thepiratebay.org',
    '.thepiratebay.org',
    'apigee.com',
    '.apigee.com',
    'cl.ly',
    'guao.cc',
    'vimeo.com',
    '.wdfiles.com',
    '.ohloh.net',
    '.googlelabs.com',
    '.creaders.net',
    'pulse.yahoo.com',
    '.blogger.com',
    '.google.com.hk',
    'go.redirectingat.com',
    'wmpsp.s3.amazonaws.com',
    '.facebook.net',
    '.faststone.org',
    'the-big-bang-theory.com',
    '.the-big-bang-theory.com',
    '.echofon.com',
    'goo.gl',
    'hackerne.ws',
    'friendfeed.com',
    '.friendfeed.com'
  ],
  "shexp": [
    '*://goo.gl/fb/*',
    '*posterous.com*',
    '*://www.python.org/download/*'
  ]
};
var ACC = {
  "domain": [
    's3.amazonaws.com',
    '.sencha.com',
    '.cloudfront.net',
    '.readability.com'
  ]
};
var DOCUMENT = {
  "domain": [
    'dx.doi.org',
    '.thescientificworld.co.uk',
    '.wiley.com',
    '.liebertonline.com',
    '.springerlink.com',
    '.aacrjournals.org',
    '.nature.com',
    '.redjournal.org',
    '.sciencedirect.com',
    '.metapress.com',
    '202.114.130.209',
    '.sciencemag.org'
  ]
};
var ALL = {
  "adblock": ADBLOCK,
  "ssh": GFW_LONGHTTP,
  "goagent": GFW,
  "acc": ACC,
  "jpkc": DOCUMENT
};


function FindProxyForURL(url, host) {
  var validate_domain = function (pattern) {
    return dnsDomainIs(host, pattern);
  };
  var validate_shexp = function (pattern) {
    return shExpMatch(url, pattern);
  };
  var validate_regexp = function (pattern) {
    return pattern.test(url);
  };
  var validate_dummy = function (pattern) {
    return false;
  };
  var proxy_name, proxy, category, rule_type, rules, validate_func, rule_num, rule;
  for (proxy_name in ALL) {
    proxy = PROXY[proxy_name];
    category = ALL[proxy_name];
    for (rule_type in category) {
      rules = category[rule_type];
      switch (rule_type) {
        case 'domain': 
          validate_func = validate_domain;
          break;
        case 'shexp':
          validate_func = validate_shexp;
          break;
        case 'regexp':
          validate_func = validate_regexp;
          break;
        default:
          validate_func = validate_dummy;
      }
      for (rule_num in rules) {
        rule = rules[rule_num];
        if (validate_func(rule)) {
          return proxy;
        }
      }
    }
  }
  return DEFAULT;
}
