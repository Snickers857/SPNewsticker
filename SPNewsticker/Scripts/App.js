'use strict';

var SPHostUrl = "";
var allNews;
var context = SP.ClientContext.get_current();

$(document).ready(function () {
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
    $("ul#ticker01").liScroll({ travelocity: "0.15" });
   
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
