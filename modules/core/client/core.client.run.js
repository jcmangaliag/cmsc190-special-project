import angular from 'angular';
import coreModule from './core.client.packages';

(function () {
	'use strict';

	angular.module('core', [
		'home',
		'groups',
		'layout',
		'posts',
		'comments',
		'shared',
        'user'
	]);

	angular.bootstrap(document, ['core']);

})();
