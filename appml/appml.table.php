
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<title>Products</title>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script>
var apikey = "eFZZRmx0eE4zdWdFVVdIZDA1Q2dIUUF2TVh3WDVZalNUVTQxNklmd2pLST0";



</script>

</head>
<body>
<div class="w3-container w3-content">
<h1>Products</h1>

<div id="Form01" class="w3-container w3-light-grey w3-padding-large w3-margin-bottom" style="display:none;" appml-controller="myFormController">
  <div appml-include-html="inc_formcommands.htm"></div>
  <p>
    <label>ProductName:</label>
    <input id="ProductName" class="w3-input w3-border">
  </p>
  <p>
    <label>Supplier:</label>
    <div appml-data="https://numwk.com/test/appml/appml.php?model=model_dropdown_suppliers">
      <select id="SupplierID" class="w3-select w3-border">
        <option appml-repeat="records" value="{{SupplierID}}">{{SupplierName}}</option>
      </select>
    </div>
  </p>
  <p>
    <label>Category:</label>
    <div appml-data="https://numwk.com/test/appml/appml.php?model=model_dropdown_categories">
      <select id="CategoryID" class="w3-select w3-border">
        <option appml-repeat="records" value="{{CategoryID}}">{{CategoryName}}</option>
      </select>
    </div>
  </p>
  <p>
    <label>Unit:</label>
    <input id="Unit" class="w3-input w3-border">
  </p>
  <p>
    <label>Price:</label>
    <input id="Price" onchange="myValidator(this)" class="w3-input w3-border">
  </p>
</div>

<div appml-data="https://numwk.com/test/appml/appml.php?model=model_productslist" appml-controller="myListController">
  <div appml-include-html="inc_listcommands.htm"></div>
  <div appml-include-html="inc_productsquery.htm"></div>
  <table class="w3-table-all">
  <tr>
  <th></th>
  <th>Product Name</th>
  <th>Category</th>
  <th>Supplier</th>
  <th>Price</th>  
  </tr>
  <tr appml-repeat="records">
  <td style="cursor:pointer" onclick="appml('Form01').run({{ProductID}})">&#9998;</td>
  <td>{{ProductName}}</td>
  <td>{{CategoryName}}</td>
  <td>{{SupplierName}}</td>
  <td>{{Price}}</td>  
  </tr>
  </table>
</div>
<h3 id="sumprice"></h3>
</div>
<script src="appml.js"></script>
<script>


function myValidator(item) {
    var obj = appml("Form01");
    obj.message = "validate";
    obj.validate = {};
    obj.validate.item = item.id;
    obj.validate.value = item.value;
    myFormController(obj);
}

function myListController($appml) {
    if ($appml.message == "done") {
        var i, x, tot = 0;
        x = $appml.data.records;
        for (i = 0; i < x.length; i++) {
            tot += Number(x[i].Price);
        }
        document.getElementById("sumprice").innerHTML = x.length + " products. Total price: $" + tot.toFixed(2);
    }
    if ($appml.message == "display") {
        if ($appml.display.name == "ProductName") {
            $appml.display.value = $appml.display.value.toUpperCase();
        }
    }
}

function myFormController($appml) {
    if ($appml.message == "ready") {
		$appml.apikey =apikey;
        $appml.appName = "Form01";
        $appml.dataSource = "https://numwk.com/test/appml/appml.php?model=model_productsform";
        return -1;
    }
    if ($appml.message == "loaded") {
        document.getElementById("Form01").style.display = "";
    }
    if ($appml.message == "submit") {
        if (isNaN(document.getElementById("Price").value)) { 
            $appml.setError(15, "Price must be a number");
            return -1;            
        }
    }
    if ($appml.message == "validate") {
        if ($appml.validate.item == "Price") { 
            if (isNaN($appml.validate.value)) { 
                $appml.setError(15, "Price must be a number");
                return;                            
            }
        }
    }
}
</script>

</body>
</html>