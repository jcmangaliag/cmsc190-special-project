import jQuery from 'jquery';

(() => {
	'use strict';

	angular
		.module('groups')
		.controller('SampleBananaGroupController', SampleBananaGroupController);

	SampleBananaGroupController.$inject = ['$scope', '$state', '$http'];

	function SampleBananaGroupController ($scope, $state, $http) {
		$scope.groupTabs = [
			{
				name: 'About Group',
				state: '.about'
			},
			{
				name: 'Add Post',
				state: '.addPost'
			},
			{
				name: 'View Posts',
				state: '.viewPosts'
			},
			{
				name: 'Settings',
				state: '.settings'
			}
		];

		$scope.setActiveTab = (groupTab) => {
			$scope.activeTab = groupTab;
		}

		// sets the initial activeTab based on the current state
		$scope.groupTabs.forEach((groupTab)=> {
			if ($state.current.name.indexOf(groupTab.state) >= 0){
				$scope.activeTab = groupTab.name;
			}
		});

        $http({
            method: 'GET',
            url: 'http://localhost:8080/api/groups/mode'
        }).then(
        function (response) {
            const data = response.data;

            if(jQuery.inArray('Community', data.privilege.admin)) {
                $scope.mode = true;
            } else if(jQuery.inArray('Community', data.privilege.write)) {
                $scope.mode = true;
            } else {
                $scope.mode = false;
            }
        })
	}

})();
