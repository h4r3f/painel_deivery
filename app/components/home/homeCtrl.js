var home = angular.module('app.home', ['app.orders','ngMaterial']);


home.controller('homeCtrl', ['orderService','$mdDialog',function (orderService,$mdDialog) {

    this.warningsEnabled = true;

    this.orders = orderService.orders;

    this.showConfirm = function(ev,id) {
        if(this.warningsEnabled){
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                  .title('Do you really want to delete this item ?')
                  .ariaLabel('warning')
                  .targetEvent(ev)
                  .ok('Delete')
                  .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
              orderService.deleteItem(id);
            }, function() {

            });
        }else{
            orderService.deleteItem(id);
        }
    };

}]);


home.filter('ordertime', function() {
  return function(input) {
    if( (input.split(":")[1]) == "0"){
        return "" + input.split(":")[0] + ":00";
    }
    return input;
    }
});