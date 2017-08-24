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