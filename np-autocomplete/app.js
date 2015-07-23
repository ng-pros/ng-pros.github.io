angular.module('app', ['ng-pros.directive.autocomplete'])

.controller('ctrl', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.options = {
		url: 'https://api.github.com/search/repositories',
		limit: 6,
		delay: 1000,
		nameAttr: 'name',
		minlength: 1,
		dataHolder: 'items',
		limitParam: 'per_page',
		searchParam: 'q',
		loadStateClass: 'has-feedback',
		highlightExactSearch: false,
		itemTemplate: '<button type="button" ng-class="getItemClasses($index)" ng-mouseenter="onItemMouseenter($index)" ng-repeat="item in searchResults" ng-click="select(item)">' +
			'<div class="media">' +
			'<div class="media-left">' +
			'<img class="media-object img-circle" ng-src="{{item.owner.avatar_url}}" alt="{{item.owner.login}}" width="48"/>' +
			'</div>' +
			'<div class="media-body">' +
			'<h5 class="media-heading"><strong ng-bind-html="highlight(item.full_name)"></strong></h5>' +
			'<span ng-bind-html="highlight(item.description)"></span>' +
			'</div>' +
			'</div>' +
			'</button>'
	};

	$scope.setNpInputModel = function() {
		$scope.inputModel = 'np-autocomplete';
	};

	$scope.setNgModel = function() {
		$scope.idModel = 38803074;
	};

	$scope.setNpAuto = function() {
		$scope.npAuto = 'angular';
	};

	$scope.htmlCode = '<div class="form-group" np-autocomplete="options" ng-model="raeef" np-input-model="inputModel">\n' +
		// '\t<div class="input-group">\n' +
		// '\t\t<span class="input-group-btn">\n' +
		// '\t\t\t<button class="btn btn-default" type="button" ng-click="programmaticallyLoad()">Programmatically Load!</button>\n' +
		// '\t\t</span>\n' +
		'\t<input type="text" placeholder="Search in Github repositories" class="form-control"/>\n' +
		// '\t</div>\n' +
		'\t<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate form-control-feedback" aria-hidden="true"></span>\n' +
		'</div>';

	$scope.itemTemplateCode = "<button type=\"button\" ng-class=\"getItemClasses($index)\" ng-mouseenter=\"onItemMouseenter($index)\" ng-repeat=\"item in searchResults\" ng-click=\"select(item)\">\n" +
		"\t<div class=\"media\">\n" +
		"\t\t<div class=\"media-left\">\n" +
		"\t\t\t<img class=\"media-object img-circle\" ng-src=\"{{item.owner.avatar_url}}\" alt=\"{{item.owner.login}}\" width=\"48\"/>\n" +
		"\t\t</div>\n" +
		"\t\t<div class=\"media-body\">\n" +
		"\t\t\t<h5 class=\"media-heading\">\n" +
		"\t\t\t\t<strong ng-bind-html=\"highlight(item.full_name)\"></strong>\n" +
		"\t\t\t</h5>\n" +
		"\t\t\t<span ng-bind-html=\"highlight(item.description)\"></span>\n" +
		"\t\t</div>\n" +
		"\t</div>\n" +
		"</button>\n";

	$scope.jsCode = "$scope.options = {\n" +
		"\turl: 'https://api.github.com/search/repositories',\n" +
		"\tdelay: 1000,\n" +
		"\tnameAttr: 'full_name',\n" +
		"\tminlength: 1,\n" +
		"\tdataHolder: 'items',\n" +
		"\tlimitParam: 'per_page',\n" +
		"\tsearchParam: 'q',\n" +
		"\tloadStateClass: 'has-feedback',\n" +
		"\titemTemplateUrl: 'itemTemplate.tpl.html',\n" +
		"\tprogrammaticallyLoad: 'true',\n" +
		"\thighlightExactSearch: 'false'\n" +
		"};";

	$scope.cssCode = ".np-autocomplete-wrapper.form-group span.form-control-feedback {\n" +
		"\tdisplay: none;\n" +
		"}\n" +
		".np-autocomplete-wrapper.has-feedback span.form-control-feedback {\n" +
		"\tdisplay: block;\n" +
		"}\n" +
		".np-autocomplete-open input.form-control {\n" +
		"\tborder-bottom-left-radius: 0;\n" +
		"\tborder-bottom-right-radius: 0;\n" +
		"}\n" +
		".np-autocomplete-open .list-group-item:first-child {\n" +
		"\tborder-top-left-radius: 0;\n" +
		"\tborder-top-right-radius: 0;\n" +
		"}\n" +
		".np-autocomplete-wrapper .list-group-item.active strong {\n" +
		"\ttext-shadow: none;\n" +
		"}";
}]);