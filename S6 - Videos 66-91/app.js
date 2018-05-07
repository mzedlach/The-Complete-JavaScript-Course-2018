//BUDGET CONTROLLER
var budgetController = (function() {
    
    //Some Code
    
})();


// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //WIll be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();



//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
// Private function for all event listeners
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }
    
// Private function that adds an item
    var ctrlAddItem = function() {
        
        // Get field input data
        var input = UICtrl.getInput();
        // Add the item to the budget controller
        // Add the new item to the UI
        // Calculate the budget
        // Display the budget on the UI
    }
    
    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    };
    
    
    
})(budgetController, UIController);


controller.init();
