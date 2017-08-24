<?
include_once"../../class/pdodb.php";
$db = new pdodb;
$db->connect_pdo($host[0], $host[1], $host[2], $host[3]);

$va = '{
"database" : {
"connection" : "localmysql",
"sql" : "SELECT ProductID,ProductName,CategoryName,SupplierName,Price FROM ((Products LEFT JOIN Suppliers ON Products.SupplierID=Suppliers.SupplierID) LEFT JOIN Categories ON Products.CategoryID=Categories.CategoryID)",
"orderby" : "ProductName"
},
"filteritems" : [
{"item" : "ProductName", "label" : "Name"},
{"item" : "Products.SupplierID", "type" : "number", "hidden" : "true"},
{"item" : "Suppliers.SupplierID", "label" : "Supplier"}, 
{"item" : "Categories.CategoryID", "label" : "Category"}
],
"sortitems" : [
{"item" : "ProductName"}
]';

$vb ='
{
"database" : {
"connection" : "localmysql",
"sql" : "SELECT * FROM Products",
"maintable" : "Products",
"keyfield" : "ProductID"
},
"updateItems" : [
{"item" : "ProductName"},
{"item" : "SupplierID"},
{"item" : "CategoryID"},
{"item" : "Unit"},
{"item" : "Price"}
]
}';

$vc='
{"user" : 0, "recPos" : 1, "fromRec" : 1, "toRec" : 8, "rowsperpage" : 500, "totalRecCounter" : 8, "records" : [{"CategoryID" : "1","CategoryName" : "Beverages"},{"CategoryID" : "2","CategoryName" : "Condiments"},{"CategoryID" : "3","CategoryName" : "Confections"},{"CategoryID" : "4","CategoryName" : "Dairy Products"},{"CategoryID" : "5","CategoryName" : "Grains/Cereals"},{"CategoryID" : "6","CategoryName" : "Meat/Poultry"},{"CategoryID" : "7","CategoryName" : "Produce"},{"CategoryID" : "8","CategoryName" : "Seafood"}], "dateFormat" : "yyyy-mm-dd", 
"database" : {
    "connection" : "localmysql",
    "sql" : "SELECT CategoryID,CategoryName FROM Categories ORDER BY CategoryName"
}
}';

$vd='{"user" : 0, "recPos" : 1, "fromRec" : 1, "toRec" : 29, "rowsperpage" : 500, "totalRecCounter" : 29, "records" : [{"SupplierID" : "18","SupplierName" : "Aux joyeux ecclésiastiques"},{"SupplierID" : "16","SupplierName" : "Bigfoot Breweries"},{"SupplierID" : "5","SupplierName" : "Cooperativa de Quesos \'Las Cabras\'"},{"SupplierID" : "27","SupplierName" : "Escargots Nouveaux"},{"SupplierID" : "1","SupplierName" : "Exotic Liquid"},{"SupplierID" : "29","SupplierName" : "Forêts d\'érables"},{"SupplierID" : "14","SupplierName" : "Formaggi Fortini s.r.l."},{"SupplierID" : "24","SupplierName" : "G\'day, Mate"},{"SupplierID" : "28","SupplierName" : "Gai pâturage"},{"SupplierID" : "3","SupplierName" : "Grandma Kelly\'s Homestead"},{"SupplierID" : "11","SupplierName" : "Heli Süßwaren GmbH #1003;amp; Co. KG"},{"SupplierID" : "23","SupplierName" : "Karkki Oy"},{"SupplierID" : "20","SupplierName" : "Leka Trading"},{"SupplierID" : "21","SupplierName" : "Lyngbysild"},{"SupplierID" : "25","SupplierName" : "Ma Maison"},{"SupplierID" : "6","SupplierName" : "Mayumi\'s"},{"SupplierID" : "19","SupplierName" : "New England Seafood Cannery"},{"SupplierID" : "2","SupplierName" : "New Orleans Cajun Delights"},{"SupplierID" : "13","SupplierName" : "Nord-Ost-Fisch Handelsgesellschaft mbH"},{"SupplierID" : "15","SupplierName" : "Norske Meierier"},{"SupplierID" : "26","SupplierName" : "Pasta Buttini s.r.l."},{"SupplierID" : "7","SupplierName" : "Pavlova, Ltd."},{"SupplierID" : "9","SupplierName" : "PB Knäckebröd AB"},{"SupplierID" : "12","SupplierName" : "Plutzer Lebensmittelgroßmärkte AG"},{"SupplierID" : "10","SupplierName" : "Refrescos Americanas LTDA"},{"SupplierID" : "8","SupplierName" : "Specialty Biscuits, Ltd."},{"SupplierID" : "17","SupplierName" : "Svensk Sjöföda AB"},{"SupplierID" : "4","SupplierName" : "Tokyo Traders"},{"SupplierID" : "22","SupplierName" : "Zaanse Snoepfabriek"}], "dateFormat" : "yyyy-mm-dd", 
"database" : {
    "connection" : "localmysql",
    "sql" : "SELECT SupplierID,SupplierName FROM Suppliers ORDER BY SupplierName"
}
}';
$ve='{"user" : 0, "recPos" : 1, "fromRec" : 1, "toRec" : 77, "rowsperpage" : 500, "totalRecCounter" : 77, "records" : [{"ProductID" : "17","ProductName" : "Alice Mutton","CategoryName" : "Meat/Poultry","SupplierName" : "Pavlova, Ltd.","Price" : "39.00"},{"ProductID" : "3","ProductName" : "Aniseed Syrup","CategoryName" : "Condiments","SupplierName" : "Exotic Liquid","Price" : "10.00"},{"ProductID" : "40","ProductName" : "Boston Crab Meat","CategoryName" : "Seafood","SupplierName" : "New England Seafood Cannery","Price" : "18.40"},{"ProductID" : "60","ProductName" : "Camembert Pierrot","CategoryName" : "Dairy Products","SupplierName" : "Gai pâturage","Price" : "34.00"},{"ProductID" : "18","ProductName" : "Carnarvon Tigers","CategoryName" : "Seafood","SupplierName" : "Pavlova, Ltd.","Price" : "62.50"},{"ProductID" : "1","ProductName" : "Chais","CategoryName" : "Beverages","SupplierName" : "Exotic Liquid","Price" : "18.00"},{"ProductID" : "2","ProductName" : "Chang","CategoryName" : "Beverages","SupplierName" : "Exotic Liquid","Price" : "19.00"},{"ProductID" : "39","ProductName" : "Chartreuse verte","CategoryName" : "Beverages","SupplierName" : "Aux joyeux ecclésiastiques","Price" : "18.00"},{"ProductID" : "4","ProductName" : "Chef Anton\'s Cajun Seasoning","CategoryName" : "Condiments","SupplierName" : "New Orleans Cajun Delights","Price" : "22.00"},{"ProductID" : "5","ProductName" : "Chef Anton\'s Gumbo Mix","CategoryName" : "Condiments","SupplierName" : "New Orleans Cajun Delights","Price" : "21.35"},{"ProductID" : "48","ProductName" : "Chocolade","CategoryName" : "Confections","SupplierName" : "Zaanse Snoepfabriek","Price" : "12.75"},{"ProductID" : "38","ProductName" : "Côte de Blaye","CategoryName" : "Beverages","SupplierName" : "Aux joyeux ecclésiastiques","Price" : "263.50"},{"ProductID" : "58","ProductName" : "Escargots de Bourgogne","CategoryName" : "Seafood","SupplierName" : "Escargots Nouveaux","Price" : "13.25"},{"ProductID" : "52","ProductName" : "Filo Mix","CategoryName" : "Grains/Cereals","SupplierName" : "G\'day, Mate","Price" : "7.00"},{"ProductID" : "71","ProductName" : "Fløtemysost","CategoryName" : "Dairy Products","SupplierName" : "Norske Meierier","Price" : "21.50"},{"ProductID" : "33","ProductName" : "Geitost","CategoryName" : "Dairy Products","SupplierName" : "Norske Meierier","Price" : "2.50"},{"ProductID" : "15","ProductName" : "Genen Shouyu","CategoryName" : "Condiments","SupplierName" : "Mayumi\'s","Price" : "15.50"},{"ProductID" : "56","ProductName" : "Gnocchi di nonna Alice","CategoryName" : "Grains/Cereals","SupplierName" : "Pasta Buttini s.r.l.","Price" : "38.00"},{"ProductID" : "31","ProductName" : "Gorgonzola Telino","CategoryName" : "Dairy Products","SupplierName" : "Formaggi Fortini s.r.l.","Price" : "12.50"},{"ProductID" : "6","ProductName" : "Grandma\'s Boysenberry Spread","CategoryName" : "Condiments","SupplierName" : "Grandma Kelly\'s Homestead","Price" : "25.00"},{"ProductID" : "37","ProductName" : "Gravad lax","CategoryName" : "Seafood","SupplierName" : "Svensk Sjöföda AB","Price" : "26.00"},{"ProductID" : "24","ProductName" : "Guaraná Fantástica","CategoryName" : "Beverages","SupplierName" : "Refrescos Americanas LTDA","Price" : "4.50"},{"ProductID" : "69","ProductName" : "Gudbrandsdalsost","CategoryName" : "Dairy Products","SupplierName" : "Norske Meierier","Price" : "36.00"},{"ProductID" : "44","ProductName" : "Gula Malacca","CategoryName" : "Condiments","SupplierName" : "Leka Trading","Price" : "19.45"},{"ProductID" : "26","ProductName" : "Gumbär Gummibärchen","CategoryName" : "Confections","SupplierName" : "Heli Süßwaren GmbH #1003;amp; Co. KG","Price" : "31.23"},{"ProductID" : "22","ProductName" : "Gustaf\'s Knäckebröd","CategoryName" : "Grains/Cereals","SupplierName" : "PB Knäckebröd AB","Price" : "21.00"},{"ProductID" : "10","ProductName" : "Ikura","CategoryName" : "Seafood","SupplierName" : "Tokyo Traders","Price" : "31.00"},{"ProductID" : "36","ProductName" : "Inlagd Sill","CategoryName" : "Seafood","SupplierName" : "Svensk Sjöföda AB","Price" : "19.00"},{"ProductID" : "43","ProductName" : "Ipoh Coffee","CategoryName" : "Beverages","SupplierName" : "Leka Trading","Price" : "46.00"},{"ProductID" : "41","ProductName" : "Jack\'s New England Clam Chowder","CategoryName" : "Seafood","SupplierName" : "New England Seafood Cannery","Price" : "9.65"},{"ProductID" : "13","ProductName" : "Konbu","CategoryName" : "Seafood","SupplierName" : "Mayumi\'s","Price" : "6.00"},{"ProductID" : "76","ProductName" : "Lakkalikööri","CategoryName" : "Beverages","SupplierName" : "Karkki Oy","Price" : "18.00"},{"ProductID" : "67","ProductName" : "Laughing Lumberjack Lager","CategoryName" : "Beverages","SupplierName" : "Bigfoot Breweries","Price" : "14.00"},{"ProductID" : "74","ProductName" : "Longlife Tofu","CategoryName" : "Produce","SupplierName" : "Tokyo Traders","Price" : "10.00"},{"ProductID" : "65","ProductName" : "Louisiana Fiery Hot Pepper Sauce","CategoryName" : "Condiments","SupplierName" : "New Orleans Cajun Delights","Price" : "21.05"},{"ProductID" : "66","ProductName" : "Louisiana Hot Spiced Okra","CategoryName" : "Condiments","SupplierName" : "New Orleans Cajun Delights","Price" : "17.00"},{"ProductID" : "51","ProductName" : "Manjimup Dried Apples","CategoryName" : "Produce","SupplierName" : "G\'day, Mate","Price" : "53.00"},{"ProductID" : "32","ProductName" : "Mascarpone Fabioli","CategoryName" : "Dairy Products","SupplierName" : "Formaggi Fortini s.r.l.","Price" : "32.00"},{"ProductID" : "49","ProductName" : "Maxilaku","CategoryName" : "Confections","SupplierName" : "Karkki Oy","Price" : "20.00"},{"ProductID" : "9","ProductName" : "Mishi Kobe Niku","CategoryName" : "Meat/Poultry","SupplierName" : "Tokyo Traders","Price" : "97.00"},{"ProductID" : "72","ProductName" : "Mozzarella di Giovanni","CategoryName" : "Dairy Products","SupplierName" : "Formaggi Fortini s.r.l.","Price" : "34.80"},{"ProductID" : "30","ProductName" : "Nord-Ost Matjeshering","CategoryName" : "Seafood","SupplierName" : "Nord-Ost-Fisch Handelsgesellschaft mbH","Price" : "25.89"},{"ProductID" : "8","ProductName" : "Northwoods Cranberry Sauce","CategoryName" : "Condiments","SupplierName" : "Grandma Kelly\'s Homestead","Price" : "40.00"},{"ProductID" : "25","ProductName" : "NuNuCa Nuß-Nougat-Creme","CategoryName" : "Confections","SupplierName" : "Heli Süßwaren GmbH #1003;amp; Co. KG","Price" : "14.00"},{"ProductID" : "77","ProductName" : "Original Frankfurter grüne Soße","CategoryName" : "Condiments","SupplierName" : "Plutzer Lebensmittelgroßmärkte AG","Price" : "13.00"},{"ProductID" : "70","ProductName" : "Outback Lager","CategoryName" : "Beverages","SupplierName" : "Pavlova, Ltd.","Price" : "15.00"},{"ProductID" : "55","ProductName" : "Pâté chinois","CategoryName" : "Meat/Poultry","SupplierName" : "Ma Maison","Price" : "24.00"},{"ProductID" : "16","ProductName" : "Pavlova","CategoryName" : "Confections","SupplierName" : "Pavlova, Ltd.","Price" : "17.45"},{"ProductID" : "53","ProductName" : "Perth Pasties","CategoryName" : "Meat/Poultry","SupplierName" : "G\'day, Mate","Price" : "32.80"},{"ProductID" : "11","ProductName" : "Queso Cabrales","CategoryName" : "Dairy Products","SupplierName" : "Cooperativa de Quesos \'Las Cabras\'","Price" : "21.00"},{"ProductID" : "12","ProductName" : "Queso Manchego La Pastora","CategoryName" : "Dairy Products","SupplierName" : "Cooperativa de Quesos \'Las Cabras\'","Price" : "38.00"},{"ProductID" : "59","ProductName" : "Raclette Courdavault","CategoryName" : "Dairy Products","SupplierName" : "Gai pâturage","Price" : "55.00"},{"ProductID" : "57","ProductName" : "Ravioli Angelo","CategoryName" : "Grains/Cereals","SupplierName" : "Pasta Buttini s.r.l.","Price" : "19.50"},{"ProductID" : "75","ProductName" : "Rhönbräu Klosterbier","CategoryName" : "Beverages","SupplierName" : "Plutzer Lebensmittelgroßmärkte AG","Price" : "7.75"},{"ProductID" : "73","ProductName" : "Röd Kaviar","CategoryName" : "Seafood","SupplierName" : "Svensk Sjöföda AB","Price" : "15.00"},{"ProductID" : "28","ProductName" : "Rössle Sauerkraut","CategoryName" : "Produce","SupplierName" : "Plutzer Lebensmittelgroßmärkte AG","Price" : "45.60"},{"ProductID" : "45","ProductName" : "Røgede sild","CategoryName" : "Seafood","SupplierName" : "Lyngbysild","Price" : "9.50"},{"ProductID" : "34","ProductName" : "Sasquatch Ale","CategoryName" : "Beverages","SupplierName" : "Bigfoot Breweries","Price" : "14.00"},{"ProductID" : "27","ProductName" : "Schoggi Schokolade","CategoryName" : "Confections","SupplierName" : "Heli Süßwaren GmbH #1003;amp; Co. KG","Price" : "43.90"},{"ProductID" : "68","ProductName" : "Scottish Longbreads","CategoryName" : "Confections","SupplierName" : "Specialty Biscuits, Ltd.","Price" : "12.50"},{"ProductID" : "42","ProductName" : "Singaporean Hokkien Fried Mee","CategoryName" : "Grains/Cereals","SupplierName" : "Leka Trading","Price" : "14.00"},{"ProductID" : "20","ProductName" : "Sir Rodney\'s Marmalade","CategoryName" : "Confections","SupplierName" : "Specialty Biscuits, Ltd.","Price" : "81.00"},{"ProductID" : "21","ProductName" : "Sir Rodney\'s Scones","CategoryName" : "Confections","SupplierName" : "Specialty Biscuits, Ltd.","Price" : "10.00"},{"ProductID" : "61","ProductName" : "Sirop d\'érable","CategoryName" : "Condiments","SupplierName" : "Forêts d\'érables","Price" : "28.50"},{"ProductID" : "46","ProductName" : "Spegesild","CategoryName" : "Seafood","SupplierName" : "Lyngbysild","Price" : "12.00"},{"ProductID" : "35","ProductName" : "Steeleye Stout","CategoryName" : "Beverages","SupplierName" : "Bigfoot Breweries","Price" : "18.00"},{"ProductID" : "62","ProductName" : "Tarte au sucre","CategoryName" : "Confections","SupplierName" : "Forêts d\'érables","Price" : "49.30"},{"ProductID" : "19","ProductName" : "Teatime Chocolate Biscuits","CategoryName" : "Confections","SupplierName" : "Specialty Biscuits, Ltd.","Price" : "9.20"},{"ProductID" : "29","ProductName" : "Thüringer Rostbratwurst","CategoryName" : "Meat/Poultry","SupplierName" : "Plutzer Lebensmittelgroßmärkte AG","Price" : "123.79"},{"ProductID" : "14","ProductName" : "Tofu","CategoryName" : "Produce","SupplierName" : "Mayumi\'s","Price" : "23.25"},{"ProductID" : "54","ProductName" : "Tourtière","CategoryName" : "Meat/Poultry","SupplierName" : "Ma Maison","Price" : "7.45"},{"ProductID" : "23","ProductName" : "Tunnbröd","CategoryName" : "Grains/Cereals","SupplierName" : "PB Knäckebröd AB","Price" : "9.00"},{"ProductID" : "7","ProductName" : "Uncle Bob\'s Organic Dried Pears","CategoryName" : "Produce","SupplierName" : "Grandma Kelly\'s Homestead","Price" : "30.00"},{"ProductID" : "50","ProductName" : "Valkoinen suklaa","CategoryName" : "Confections","SupplierName" : "Karkki Oy","Price" : "16.25"},{"ProductID" : "63","ProductName" : "Vegie-spread","CategoryName" : "Condiments","SupplierName" : "Pavlova, Ltd.","Price" : "43.90"},{"ProductID" : "64","ProductName" : "Wimmers gute Semmelknödel","CategoryName" : "Grains/Cereals","SupplierName" : "Plutzer Lebensmittelgroßmärkte AG","Price" : "33.25"},{"ProductID" : "47","ProductName" : "Zaanse koeken","CategoryName" : "Confections","SupplierName" : "Zaanse Snoepfabriek","Price" : "9.50"}], "dateFormat" : "yyyy-mm-dd", 
"database" : {
    "connection" : "localmysql",
    "sql" : "SELECT ProductID,ProductName,CategoryName,SupplierName,Price FROM ((Products LEFT JOIN Suppliers ON Products.SupplierID=Suppliers.SupplierID) LEFT JOIN Categories ON Products.CategoryID=Categories.CategoryID)",
    "orderby" : "ProductName"
},
"filteritems" : [
    {"item" : "ProductName", "label" : "Name"},
    {"item" : "Products.SupplierID", "type" : "number", "hidden" : "true"},
    {"item" : "Suppliers.SupplierID", "label" : "Supplier"},    
    {"item" : "Categories.CategoryID", "label" : "Category"}
],
"sortitems" : [
    {"item" : "ProductName"}
],
"pelle" : "kanin"
}';

$vf='
{"user" : 0, "recPos" : 1, "fromRec" : 1, "toRec" : 8, "rowsperpage" : 500, "totalRecCounter" : 8, "records" : [{"CategoryID" : "1","CategoryName" : "Beverages"},{"CategoryID" : "2","CategoryName" : "Condiments"},{"CategoryID" : "3","CategoryName" : "Confections"},{"CategoryID" : "4","CategoryName" : "Dairy Products"},{"CategoryID" : "5","CategoryName" : "Grains/Cereals"},{"CategoryID" : "6","CategoryName" : "Meat/Poultry"},{"CategoryID" : "7","CategoryName" : "Produce"},{"CategoryID" : "8","CategoryName" : "Seafood"}], "dateFormat" : "yyyy-mm-dd", 
"database" : {
    "connection" : "localmysql",
    "sql" : "SELECT CategoryID,CategoryName FROM Categories ORDER BY CategoryName"
}
}';
$vg='
{"user" : 0, "recPos" : 1, "fromRec" : 1, "toRec" : 29, "rowsperpage" : 500, "totalRecCounter" : 29, "records" : [{"SupplierID" : "18","SupplierName" : "Aux joyeux ecclésiastiques"},{"SupplierID" : "16","SupplierName" : "Bigfoot Breweries"},{"SupplierID" : "5","SupplierName" : "Cooperativa de Quesos \'Las Cabras\'"},{"SupplierID" : "27","SupplierName" : "Escargots Nouveaux"},{"SupplierID" : "1","SupplierName" : "Exotic Liquid"},{"SupplierID" : "29","SupplierName" : "Forêts d\'érables"},{"SupplierID" : "14","SupplierName" : "Formaggi Fortini s.r.l."},{"SupplierID" : "24","SupplierName" : "G\'day, Mate"},{"SupplierID" : "28","SupplierName" : "Gai pâturage"},{"SupplierID" : "3","SupplierName" : "Grandma Kelly\'s Homestead"},{"SupplierID" : "11","SupplierName" : "Heli Süßwaren GmbH #1003;amp; Co. KG"},{"SupplierID" : "23","SupplierName" : "Karkki Oy"},{"SupplierID" : "20","SupplierName" : "Leka Trading"},{"SupplierID" : "21","SupplierName" : "Lyngbysild"},{"SupplierID" : "25","SupplierName" : "Ma Maison"},{"SupplierID" : "6","SupplierName" : "Mayumi\'s"},{"SupplierID" : "19","SupplierName" : "New England Seafood Cannery"},{"SupplierID" : "2","SupplierName" : "New Orleans Cajun Delights"},{"SupplierID" : "13","SupplierName" : "Nord-Ost-Fisch Handelsgesellschaft mbH"},{"SupplierID" : "15","SupplierName" : "Norske Meierier"},{"SupplierID" : "26","SupplierName" : "Pasta Buttini s.r.l."},{"SupplierID" : "7","SupplierName" : "Pavlova, Ltd."},{"SupplierID" : "9","SupplierName" : "PB Knäckebröd AB"},{"SupplierID" : "12","SupplierName" : "Plutzer Lebensmittelgroßmärkte AG"},{"SupplierID" : "10","SupplierName" : "Refrescos Americanas LTDA"},{"SupplierID" : "8","SupplierName" : "Specialty Biscuits, Ltd."},{"SupplierID" : "17","SupplierName" : "Svensk Sjöföda AB"},{"SupplierID" : "4","SupplierName" : "Tokyo Traders"},{"SupplierID" : "22","SupplierName" : "Zaanse Snoepfabriek"}], "dateFormat" : "yyyy-mm-dd", 
"database" : {
    "connection" : "localmysql",
    "sql" : "SELECT SupplierID,SupplierName FROM Suppliers ORDER BY SupplierName"
}
}';

if ($_GET['model']=='model_productslist') {
	
	echo $ve;
	
}
if ($_GET['model']=='model_dropdown_categories') {
	
	echo $vg;
	
}

if ($_GET['model']=='model_dropdown_suppliers') {
	
	echo $vf;
	
}

if ($_GET['model']=='model_productsform') {
	
	echo '{"user" : 0, "recPos" : 1, "fromRec" : 1, "toRec" : 1, "rowsperpage" : 500, "totalRecCounter" : 1, "records" : [{"ProductID" : "2","ProductName" : "Chang","SupplierID" : "1","CategoryID" : "1","Unit" : "24 - 12 oz bottles","Price" : "19.00"}], "dateFormat" : "yyyy-mm-dd", "keyField" : "ProductID", 
"database" : {
    "connection" : "localmysql",
    "sql" : "SELECT * FROM Products",
    "maintable" : "Products",
    "keyfield" : "ProductID"
},
"updateItems" : [
    {"item" : "ProductName"},
    {"item" : "SupplierID"},
    {"item" : "CategoryID"},
    {"item" : "Unit"},
    {"item" : "Price"}
]
}';

}