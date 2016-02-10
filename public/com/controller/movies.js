(function(){
	angular.module("app").controller("movies",function($scope,ajaxfactory,$routeParams){
		$scope.data = null;
		$scope.movies = null;
		$scope.selectedHero = null;
		$scope.selectedHero = $routeParams.hid;
		ajaxfactory.ajax
		.success(function(r,s,x){
			$scope.data = r;
			function listMovies(){
				$scope.movies = $scope.data.heros[$scope.selectedHero-1].movieslist;
			}
			listMovies();
		})
		.error(function(err,s,x){
			$log(err);
		})
	})
}())
