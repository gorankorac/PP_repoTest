'use strict'

(function () {

  function Product( n, p, ed) {

    this.id = Math.floor(Math.random() * 90000) + 10000;
    // this.prodID = function () {

    //     var a = (Math.Floor(Math.Random() * 10000));
    //     return a;

    // }
      this.name = n;
      this.price = p;
      this.exDate = new Date(ed);
      this.getInfo = function () {
        var firstName = this.name[0];
        var lastName = this.name[this.name.length - 1]
        var result = firstName.toUpperCase() + lastName.toUpperCase() + this.id + ', ' + this.name + ', ' + this.price.toFixed(2);
        return result; 
      }
      }
      var x = new Product('Banana', 15, new Date(2018, 10, 10));
      var s = new Product('Jabuka', 20, new Date(2019, 10, 10));
       console.log(x);
       console.log(x.getInfo());

       function ShoppingBag() {

        this.listOfProducts = [];
        this.addProduct = function(Product) {
         
          this.listOfProducts.push(Product);
          
        } 
    }
    var y = new ShoppingBag();
    console.log(y);
    console.log(y.addProduct());





  }) ();