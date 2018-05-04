//BUDGET CONTROLLER
var budgetController = (function() {
    
    //Some Code
    
})();


// UI CONTROLLER
var UIController = (function() {
    
    //Some Code
    
})();



//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    
    var ctrlAddItem = function() {
        
        console.log('the function was called successfully');
        // Get field input data
        // Add the item to the budget controller
        // Add the new item to the UI
        // Calculate the budget
        // Display the budget on the UI
    }
        
        
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
    
    
})(budgetController, UIController);



