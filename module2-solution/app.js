(function () {
  angular.module('ShoppingListCheckOff',[])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

          //Controller to buy list
           ToBuyController.$inject =['ShoppingListCheckOffService'];
           function ToBuyController (ShoppingListCheckOffService)
          {
             var buy = this;
             buy.items = ShoppingListCheckOffService.toBuyItems();
             buy.removeItem = function(itemIndex){
               ShoppingListCheckOffService.bought(itemIndex);
             };
           }

          //Controller already bought list
          AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
          function AlreadyBoughtController (ShoppingListCheckOffService)
          {
            var bought = this;
            bought.items = ShoppingListCheckOffService.boughtItems();
          }

          //service
          function ShoppingListCheckOffService()
          {
            var service = this;
            var toBuyItems =
            [
              {name: "Cookies",
               quantity: 5
              },
              {name: "Cell Phone",
               quantity: 7
              },
              {name: "Carpet",
               quantity: 3
              },
              {name: "Pencil",
               quantity: 10
              },
              {name: "iPhones 7",
               quantity: 6
              },
              {name: "Pens",
               quantity: 10
              },
              {name: "Glasses",
               quantity: 40
              },
              {name: "TV",
               quantity: 8
              },
              {name: "Lamp",
               quantity: 5
              },
              {name: "Tissues",
               quantity: 20
              },
              {name: "Laptop",
               quantity: 11
              }
            ];

            var boughtItems = [];

            service.bought = function(itemIndex) {
                boughtItems.push(toBuyItems[itemIndex]);
                toBuyItems.splice(itemIndex, 1);
            };

            service.boughtItems = function() {
                return boughtItems;
            };

            service.toBuyItems = function() {
                return toBuyItems;
            };
          }

})();
