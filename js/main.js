function Ctrl($scope) {
  $scope.value = 12;
  $scope.DoConvert = function() {
  $scope.valueout = 'The output ' + $scope.value;
  }
}

