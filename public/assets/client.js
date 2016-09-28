angular.module('materialApp', [])
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;

        vm.title = 'Simple Layout';
        vm.sectionTitle = 'Section #1';
        vm.sectionBody = 'This is a simple section.';
    }
