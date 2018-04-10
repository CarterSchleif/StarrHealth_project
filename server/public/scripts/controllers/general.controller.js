myApp.controller('GeneralController', ['$http', 'UserService', 'SignupService', '$location', 'SchoolService', function($http, UserService, SignupService, $location, SchoolService) {
    console.log('GeneralController created');
    var self = this;
    self.userService = UserService;
    self.signupService = SignupService;
    self.schoolService = SchoolService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.letPass = SignupService.letPass;
    self.disclaimer = SignupService.disclaimer;
    self.collectGeneral = SignupService.collectGeneral;
    self.collectGoals = SignupService.collectGoals;
    self.general = SignupService.general;
    self.collectBarriers = SignupService.collectBarriers;
    self.goals = SignupService.goals;
    self.collectExtraInfo = SignupService.collectExtraInfo;
    self.schools = SignupService.schools;

    console.log(self.userObject);
    console.log('schools in controller', self.schools);
  



}]);