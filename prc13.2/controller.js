<%@ page contentType="text/html" %>
<html>
<head>
    <title>JSP Controller Example</title>
</head>
<body>

<h2>1. Basic Controller</h2>
<%
    String message = "Hello from Basic Controller";

    void greet(JspWriter out) throws Exception {
        out.println("Welcome!");
    }
%>
<p><%= message %></p>

<hr>

<h2>2. Parent Controller</h2>
<%
    String parentData = "This data is from Parent Controller";
%>
<p><%= parentData %></p>

<hr>

<h2>3. Child Controller</h2>
<%
    String childData = "This data is from Child Controller";
%>
<p><%= childData %></p>

<hr>

<h2>4. Filter Controller</h2>
<%
    String name = "client side scripting";
    int fees = 2500;
%>
<p>Name: <%= name.toUpperCase() %></p>
<p>Fees: <%= fees %></p>

</body>
</html>
