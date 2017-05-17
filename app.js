var app = angular.module('services.cart',[]);

app.controller('MainCtrl', function($scope){
    $scope.name= 'dear customer';

    //initiating the myCart object
    $scope.myCart = [];

    //items available in the table
    $scope.items=[
        {"name":"milk", "description":"best before 24hr from pkd date", "price":23},
        {"name":"Parle-G", "description":"best before 2 year from pkd date", "price":10},
        {"name":"Goodday", "description":"best before 2 year from pkd date", "price":10},
        {"name":"Kurkure", "description":"best before 2 year from pkd date", "price":10}
    ];

    $scope.addItem =function(item){
        $scope.items.push(item);
        $scope.item={};
    };

    $scope.addToCart = function(item){
        $scope.myCart.push(angular.copy(item));
        $scope.amount += item.price;
    };

    $scope.getTotalAmount= function(){
        var i=0;
        for(i=0; i<$scope.myCart.length; i++){
            $scope.myCart.item.price[i] * $scope.myCart.item.price[i];
        }
    };
    $scope.amount=0.00;
});