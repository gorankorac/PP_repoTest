 'use strict';

(function () {

  function Product( n, p, ed) {

    this.id = Math.floor(Math.random() * 90000) + 10000;
   
      this.name = n;
      this.price = p;
      this.exDate = new Date(ed);

      this.getInfo = function () {
        var firstName = this.name[0];
        var lastName = this.name[this.name.length - 1]
        var result = firstName.toUpperCase() + lastName.toUpperCase() + this.id + ', ' + this.name + ', ' + this.price.toFixed(2) + ' $';
        return result; 
      }
    }
      
      var x = new Product('Banana', 15, new Date(2018, 10, 10));
      var s = new Product('Jabuka', 20, new Date(2019, 10, 10));
      //  console.log(x);
      //  console.log(x.getInfo());
      //  console.log(s.getInfo());
      
  function ShoppingBag() {

        this.listOfProducts = [];
        this.addProduct = function(Product) {
         
          // if (this.Product.exDate > new Date()) {
          // } 
           return this.listOfProducts.push(Product);
           
        } 
        


        this.avgPrice = function (p) {

            var sum = 0;
            for (var i = 0; i<this.listOfProducts.length; i++) {
              sum += this.listOfProducts[i].price
            }
           

              return sum/this.listOfProducts.length;
            }

        this.getmostExpensive = function (p) {

            var mostExpensive = this.listOfProducts[0];
            for(var i=1; i<this.listOfProducts.length; i++) {
              if (this.listOfProducts[i].price > mostExpensive.price) {
                mostExpensive = this.listOfProducts[i]
              }
            }
              return mostExpensive.getInfo();
          }    

        this.gettotalPrice = function (p) {
            var total = 0;
            for (var i=0; i<this.listOfProducts.length; i++) {

              total += this.listOfProducts[i].price

            }
            return total;
          }

        }

    function Paymentcard (accountbalance, active, validuntilDate) {

        this.accountbalance = accountbalance;
        this.active = active;
        this.validuntilDate = validuntilDate;
        this.getData = function () {
          return this.accountbalance + ', ' + this.active + ', ' + this.validuntilDate;
        }      

    }

      function checkoutandBuy (ShoppingBag, Paymentcard) {
        if(Paymentcard.accountbalance >= ShoppingBag.gettotalPrice()) {
          console.log('Purchase is successful !');
        } else {
          console.log('the amount of' + ' ' + ((ShoppingBag.gettotalPrice())-(Paymentcard.accountbalance)) + '' + '$ is missing to complete the purchase');
        }
      }


      var x = new Product('Banana', 15, new Date(2018, 10, 10));
      var s = new Product('Jabuka', 20, new Date(2019, 10, 10));
      
   
     var y = new ShoppingBag();
     console.log(y);

     y.addProduct(x)
     y.addProduct(s)
     console.log(y.avgPrice());
     console.log(y.getmostExpensive());
     console.log(y.gettotalPrice());

    var card = new Paymentcard (32, 'active', new Date(2022, 15, 15))
    console.log(card.getData());

    var ende = checkoutandBuy(y, card);
    console.log(ende);

  }) ();
