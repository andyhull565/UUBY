function ChartsController ($scope, $route) {

    var vm = this;
    vm.addUtility = addUtility;
    console.log("inside controller");
    activate();
    //vm.selectedUtility =

    function activate() {
        vm.selectedUtility = "Georgia Power";

        vm.utilities = [
            "GeorgiaPower",
            "Georgia Natural Gas",
            "Gas South",
            "SCANA Energy",
            "Commerce Energy",
            "Infinite Energy",
            "Watershed Management"
        ];

        vm.utilityOptions = "utility as utility for utility in vm.utilities";

        vm.utilityUser = null;
    }

    function addUtility() {
        console.log(vm.selectedUtility);
        console.log(vm.utilityUser.username);
        console.log(vm.utilityUser.password);
    }
}