(() => {
	'use strict';
	
	angular
		.module('users')
		.config(userRoutes);

	userRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function userRoutes ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('register', {
				url: '/register',
				template: '<user-registration></user-registration>',
				controller: 'UserAuthenticationController'
			})
			.state('registerAsAdmin', {
				url: '/register-as-admin',
				templateUrl: 'users/client/views/user-admin-registration.client.view.html',
				controller: 'UserAuthenticationController'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'users/client/views/user-login.client.view.html',
				controller: 'UserAuthenticationController'
			})
			.state('user-profile', {
				url: '/users/profile/:userID',
				templateUrl: 'users/client/views/user-profile.client.view.html',
				controller: 'UserController',
				params: {
					handle: "--user--"
				}
			})
			.state('edit-user', {
				url: '/users/profile/:userID/edit',
				templateUrl: 'users/client/views/edit-user.client.view.html',
				controller: 'EditUserController'
			});

		$locationProvider.html5Mode(true);
	}

})();

