'use strict';

var hostUrl = "";
var allNews;
var context = SP.ClientContext.get_current();
var tickerSpeed = "";

if (document.URL.indexOf('?') != -1) {
        var params = document.URL.split('?')[1].split('&');
        for (var i = 0; i < params.length; i++) {
            var p = decodeURIComponent(params[i]);
            if (/^SPHostUrl=/i.test(p)) {
                hostUrl = p.split('=')[1];
                document.write('<link rel="stylesheet" href="' + hostUrl + '/_layouts/15/defaultcss.ashx" />');
                break;
            }
        }
    }
    if (hostUrl == '') {
        document.write('<link rel="stylesheet" href="/_layouts/15/1033/styles/themable/corev15.css" />');
    }



$(document).ready(function () {

    tickerSpeed = decodeURIComponent(getQueryStringParamenter("TickerSpeed"));
    var hostweburl = decodeURIComponent(getQueryStringParamenter("SPHostUrl"));
    var hostcontext = new SP.AppContextSite(context, hostweburl);
    var web = hostcontext.get_web();


    var list = web.get_lists().getByTitle("News");
    var camlString =
        "<View><ViewFields>" +
        "<FieldRef Name='Title' />" +
        "<FieldRef Name='Nachricht' />" +
        "</ViewFields></View>";

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(camlString);
    allNews = list.getItems(camlQuery);

    context.load(allNews, "Include(Title, Nachricht)");
    context.executeQueryAsync(onQuerySucceeded, onQueryFailed);
});

function onQuerySucceeded() {
    var newsHTML = "";
    var enumerator = allNews.getEnumerator();

    while (enumerator.moveNext()) {
        var announcment = enumerator.get_current();
        newsHTML = newsHTML + "<li><span> +++ " + announcment.get_item("Title") + " : </span>" + announcment.get_item("Nachricht") + "</li>";
    }
    $("#ticker01")[0].innerHTML = newsHTML;
    $("ul#ticker01").liScroll({ travelocity: + tickerSpeed });
   
};

function onQueryFailed(sender, args) {
    alert('Fehler:' + args.get_message() + '/n' + args.get_stackTrace());
} 

function getQueryStringParamenter(paramToRetrieve) {
    var params;
    var strParams;

    params = document.URL.split("?")[1].split("&");
    strParams = "";

    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    } 
}
