var app = angular.module('myApp', ['ngDialog']);
app.controller('myCtrl', function($scope,ngDialog) {
    $scope.userno="";
    $scope.open = function () {
    	
    	ngDialog.open({template: 'publicdialog.html'});;
		
	};
});