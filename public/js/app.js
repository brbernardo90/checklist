var app = angular.module('checklist', ['ngRoute']);


app.controller('ctrl', function($scope, $http) {
  $http.get("questions.json")
  .then(function(response) {
      $scope.questions = response.data;
  });


  var tag_values = {};

  tag_values["Hardware"] = "#hardware"
  tag_values["Software"] = "#software"
  tag_values["Interface"] = "#interface"
  tag_values["Dados do Usuário ou Conteúdo Produzido por ele"] = "#dados_conteudoUsuario"
  tag_values["Redes Sociais / Grupos"] = "#redes_sociais"
  tag_values["Comunicação / Marketing"] = "#comunicação_marketing"
  tag_values["Colaboração"] = "#colaboração"
  tag_values["Conversação"] = "#conversação"

  $scope.tag = tag_values

  $scope.get_tag = function(value) {
      return $scope.tag["Hardware"];
  };

  $scope.funcitonT = function(value) {
      alert(value);
      document.getElementById(value.id).checked =true
  };

  $scope.searchp = "Hardware"
});
