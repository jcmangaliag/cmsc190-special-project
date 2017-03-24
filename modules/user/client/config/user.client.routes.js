(() => {
	'use strict';

	angular
		.module('user')
		.config(userRoutes);

	userRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function userRoutes ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
            .state('entry', {
                url: '/user/entry',
                templateUrl: 'user/client/views/login.client.view.html',
                controller: 'LoginController'
            })

		$locationProvider.html5Mode(true);
	}

})();
