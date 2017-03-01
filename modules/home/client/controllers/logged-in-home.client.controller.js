import _ from 'lodash';
import jQuery from 'jquery';

(() => {
	'use strict';

	angular
		.module('home')
		.controller('LoggedInHomeController', LoggedInHomeController);

	LoggedInHomeController.$inject = ['$scope', 'LoggedInHomeService'];

	function LoggedInHomeController ($scope, LoggedInHomeService) {
        $scope.onLogin = result => {
            jQuery('.modal').modal('hide');
        }

        $scope.form = 'default';
        $scope.toggleForm = () => {
            $scope.form = $scope.form == 'default' ? 'signup' : 'default';
            console.log($scope.form);
        }

	}

})();
