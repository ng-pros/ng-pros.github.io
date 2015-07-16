angular.module('app', ['ng-pros.directive.autocomplete'])

.controller('ctrl', ['$scope', function($scope) {
	$scope.options = {
		url: 'https://api.github.com/search/repositories',
		delay: 1000,
		nameAttr: 'full_name',
		dataHolder: 'items',
		limitParam: 'per_page',
		searchParam: 'q',
		itemTemplate: '<button type="button" class="list-group-item search-item" ng-repeat="item in searchResults" ng-click="select(item)">' +
			'<img class="pull-left" src="github.png" width="48"/>' +
			'<strong ng-bind-html="match(item.full_name)"></strong>' +
			'<br/>' +
			'<span class="text-muted" ng-bind-html="match(item.description)"></span>' +
			'</button>'
	};
}]);