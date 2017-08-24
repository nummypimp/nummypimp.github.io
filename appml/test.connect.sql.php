<!DOCTYPE html>
<html lang="en-US">
<title>Customers</title>
<link rel="stylesheet" href="/w3css/4/w3.css">
<script src="/appml/2.0.3/appml.js"></script>
<script src="/appml/2.0.3/appml_sql.js"></script>
<body>

<div class="w3-container" appml-data="customers.js">
<h1>Customers</h1>
<table class="w3-table-all">
  <tr>
    <th>Customer</th>
    <th>City</th>
    <th>Country</th>
  </tr>
  <tr appml-repeat="records">
    <td>{{CustomerName}}</td>
    <td>{{City}}</td>
    <td>{{Country}}</td>
  </tr>
</table>
</div>

</body>
</html>
