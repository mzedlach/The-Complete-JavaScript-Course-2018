//BUDGET CONTROLLER
var budgetController = (function() {
    
    
//Function constructor for created expenses (private function)
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

//Function constructor for created expenses (private function)
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

//Variables holding data
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0, 
            inc: 0
        }
    }
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID; 
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                // Determine ID of the LAST element and then calculate next ID number (+1)
                ID = data.allItems[type][data.allItems[type].length-1].id + 1; 
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push into data scructure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },
        
        testing: function() {
            console.log(data);
        }
    };
    
    
})();


// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //WIll be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        addListItem: function(obj, type) {
            var html, newHtml, element;
            
            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }
            // Replace placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        // To clear all fields after data has been input into either one of the two lists
        clearFields: function() {
            var fields, fieldsArr;
            // select inputDescription and inputValue, saved in variable 'fields'
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            // querySelectorAll returns a LIST, so we have to use the call method which turns the fields into 'this'.  we use slice to trick the method by putting in a listand it returns an array
            //fieldsArr is now an ARRAY
            fieldsArr = Array.prototype.slice.call(fields);
            // Loop through the fieldsArray and clears the data. 
            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            });
            // Brings the curser back to the input box
            fieldsArr[0].focus();
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
    
    var updateBudget = function() {
                
        // Calculate the budget
        
        // Return the budget
        
        // Display the budget on the UI
        
    };
    
// Private function that adds an item
    var ctrlAddItem = function() {
        var input, newItem; 
        
        // Get field input data
        input = UICtrl.getInput();
        // Check that description actually has data input, and that a number is also input (but not 0)
        if (input.description !== '' && !isNaN(input.value) && input.value > 0 ) {
            // Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value)

            // Add the new item to the UI
            UICtrl.addListItem(newItem, input.type);

            // Clear the fields (after data has been input)
            UICtrl.clearFields();

            // Calculate and update budget
            updateBudget();
        }
    };
    
    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    };
    
    
    
})(budgetController, UIController);


controller.init();
