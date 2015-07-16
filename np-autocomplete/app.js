angular.module('app', ['ng-pros.directive.autocomplete'])

.controller('ctrl', ['$scope', function($scope) {
	$scope.options = {
		url: 'https://api.github.com/search/repositories',
		delay: 1000,
		nameAttr: 'full_name',
		dataHolder: 'items',
		limitParam: 'per_page',
		searchParam: 'q',
		itemTemplate:'<button type="button" class="list-group-item search-item" ng-repeat="item in searchResults" ng-click="select(item)">' +
			'<img class="pull-left" src="github.png" width="48"/>' +
			'<strong ng-bind-html="match(item.full_name)"></strong>' +
			'<br/>' +
			'<span class="text-muted" ng-bind-html="match(item.description)"></span>' +
			'</button>'
	};

	$scope.htmlCode = '<div class="form-group" np-autocomplete="options">\n' +
		'\t<label class="control-label">Search in Github repositories:</label>\n' +
		'\t<input type="text" placeholder="Search..." class="form-control"/>\n' +
		'</div>';

	$scope.jsCode = "$scope.options = {\n" +
		"\turl: 'https://api.github.com/search/repositories',\n" +
		"\tdelay: 1000,\n" +
		"\tnameAttr: 'full_name',\n" +
		"\tdataHolder: 'items',\n" +
		"\tlimitParam: 'per_page',\n" +
		"\tsearchParam: 'q',\n" +
		"\titemTemplate:\n" +
		"\t'<button type=\"button\" class=\"list-group-item search-item\" ng-repeat=\"item in searchResults\" ng-click=\"select(item)\">' +\n" +
		"\t\t'<img class=\"pull-left\" src=\"github.png\" width=\"48\"/>' +\n" +
		"\t\t'<strong ng-bind-html=\"match(item.full_name)\"></strong>' +\n" +
		"\t\t'<br/>' +\n" +
		"\t\t'<span class=\"text-muted\" ng-bind-html=\"match(item.description)\"></span>' +\n" +
		"\t'</button>'\n" +
		"};";
}]);