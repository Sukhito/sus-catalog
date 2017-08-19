app.factory('CatalogService',function($http){
    return{
        getItems: function(){
            return $http.get('api/items');
        }
    }
})