<%-- Die folgenden vier Zeilen sind ASP.NET-Direktiven, die bei der Verwendung von SharePoint-Komponenten erforderlich sind. --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- Markup und Skript im folgenden Content-Element werden im <head> der Seite platziert. --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Fügen Sie Ihre CSS-Formatvorlagen der folgenden Datei hinzu. -->
    <link type="text/css" rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <link type="text/css" href="../Content/li-scroller.css" rel="stylesheet" />

    <!-- Fügen Sie Ihr JavaScript der folgenden Datei hinzu. -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script type="text/javascript" src="../Scripts/jquery.li-scroller.1.0.js"></script>
</asp:Content>

<%-- Das Markup im folgenden Content-Element wird im "TitleArea" der Seite platziert. --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Newsticker
</asp:Content>

<%-- Markup und Skript im folgenden Content-Element werden im <body> der Seite platziert. --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div>
        <ul id="ticker01">


        </ul>
       
    </div>

</asp:Content>
