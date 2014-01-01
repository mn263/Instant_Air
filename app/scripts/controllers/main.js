'use strict';

angular.module('instantAir')
  .controller('MainCtrl', function ($scope) {
  	$scope.globalNav = [
  		{'label':'Home', 'link':'/'},
  		{'label':'About', 'link':'/about'},
  		{'label':'Services', 'link':'/services'},
  		{'label':'Contact', 'link':'/contact'}
  	]
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.theTitle = "Awesome";
  })

  .controller('AboutCtrl', function ($scope) {
  	$scope.globalNav = [
  		{'label':'Home', 'link':'/'},
  		{'label':'About', 'link':'/about'},
  		{'label':'Services', 'link':'/services'},
  		{'label':'Contact', 'link':'/contact'}
  	]
    $scope.listItems = [
      'Premier Trane Dealer',
      'Emergency Response Services for All Makes and Models',
      'Family Owned and Operated',
      'Home Depot Certified Installer'
    ];
    $scope.theTitle = "Awesome";
  })

  ;
