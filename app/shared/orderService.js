var orders = angular.module('app.orders', ['firebase']);

orders.constant('firebaseRef','YOUR_FIREBASE_URL_HERE');

orders.factory('orderService', [
    '$firebaseArray',
    'firebaseRef',
    function ($firebaseArray,firebaseRef) {

    // reference to the firebase url
    var fbContentRef = new Firebase(firebaseRef);

    // object to return
    var orderService = {};

    // orders from the database
    orderService.orders = $firebaseArray(fbContentRef);

    // deleting an item
    orderService.deleteItem = function(recordId){
        var itemRecord = orderService.orders.$getRecord(recordId);
        orderService.orders.$remove(itemRecord).then(function(ref){
            console.log("item of id " + recordId + " removed");
        });
    };


    return orderService;
}])