//---------------------------//
//-----BUDGET CONTROLLER-----//
//---------------------------//
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
//Calculate the total of all expenses and income. 
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
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
        },
        budget: 0,
        percentage: -1
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
        
        deleteItem: function(type, id) {
            var ids, index; 
            
            //Loop over all elements in income and expenses array. This will create a NEW array, now called ids
            var ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            
            index = ids.indexOf(id)
            
            // If there is an index of the value we're looking for, the item will be deleted
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        
        calculateBudget: function() {
            
            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);    
            } else {
                data.percentage = -1;
            }
        },
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc, 
                totalExp: data.totals.exp, 
                percentage: data.percentage
            }
        },

        testing: function() {
            console.log(data);
        }
    };
    
})();

//-----------------------//
//-----UI CONTROLLER-----//
//-----------------------//
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value', 
        incomeLabel: '.budget__income--value', 
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
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
                
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }
            // Replace placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        // To delete element from DOM
        // To delete a child element, you have to target the parent element first and THEN removeChild.
        deleteListItem: function(selectorID) {
            
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            
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
        
        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            
            
            if (obj.percentage > 0 ) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();

//-------------------------------//
//-----GLOBAL APP CONTROLLER-----//
//-------------------------------//
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
        // Event listener for the container that contains the income or expense items. This container is what all the income and expense items have in common. We want to do event delegation
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }
    
    var updateBudget = function() {
                
        // Calculate the budget
        budgetCtrl.calculateBudget();
        // Return the budget
        var budget = budgetCtrl.getBudget();
        // Display the budget on the UI
        UICtrl.displayBudget(budget);
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
    
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        
        // We read the target of where the element was fired and then traverse the DOM all the way up to the container where the element is contained. Variable itemID will now contain the item type (exp or inc) and also the unique ID (inc-0, inc-1, exp-0, exp-1, etc)
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (itemID) {
            
            //Split up the itemID into the type(exp or inc) and the id value (a number specific to that entry)
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            
            // Delete the item from the UI
            UICtrl.deleteListItem(itemID);
            
            // Update and show new budget totals
            updateBudget();
        }
    };
    
    return {
        init: function() {
            console.log('Application has started');
            // Display the budget on the UI
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0, 
                totalExp: 0, 
                percentage: -1
            });
            setupEventListeners();
        }
    };
    
    
    
})(budgetController, UIController);


controller.init();
