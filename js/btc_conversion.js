var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
            var url_btc_convert=(new URL(document.location));
			let url_params_convert_btc=url_btc_convert.searchParams;
            var amount_convert_btc=url_params_convert_btc.get('amount');
			
            xmlhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status ==200) {
                    var json = JSON.parse(this.responseText);
                parseJson(json,amount_convert_btc);
            }
        };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function parseJson(json,amount_convert_btc){
                    var time="<b>Last Updated: " + json["time"]["updated"] + "</b>";                    
                    var usdValue = json["bpi"]["USD"]["rate"];
					var btcusd=parseFloat(usdValue.replace(",",""));
                    var usdPrice = amount_convert_btc/parseFloat(usdValue.replace(",",""));
                    var usdPrice_round = usdPrice.toFixed(5);
                    var productPrice = parseFloat(usdValue.replace(",",""))*usdPrice_round;
				document.getElementById("orderprice_btc").innerHTML = usdPrice_round + "  BTC" ;
				document.getElementById("orderprice_btc1").innerHTML = " &#8776 " + productPrice.toFixed(2) + "  USD";
				document.getElementById("btctoday").innerHTML = " &#8776 " + btcusd + "  USD"; 
				
            }