# Activity Map

## bamazonCustomer

1. Display Items for Sale: Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

2. Prompt User for ID: The app should then prompt users with two messages. The first should ask them the ID of the product they would like to buy.

3. Prompt User for quant: The second message should ask how many units of the product they would like to buy.

4. Evaluate Order/Check ID/Qunat: Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
	1. Process input
	2. Query DB for that exact item
	3. Check!!!!

5. Insufficinet Quant/Log Error Message: If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

6. Sufficient Quant: However, if your store _does_ have enough of the product, you should fulfill the customer's order.

7. Update Database: This means updating the SQL database to reflect the remaining quantity.
	1. Add product sales.

8. Show Total Cost: Once the update goes through, show the customer the total cost of their purchase.

## bamazonManager

1. List Menu Options: Create a new Node application called `bamazonManager.js`. Running this application will: List a set of menu options: - choices

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

2. Products For Sale: If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

3. View Low Inventory:  If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

4. Add to Inventory:  If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
	1. First, show items
	2. Prompt which item
	3. Update Database based on prompt

5. Add New Product: If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
	1. Prompt for items fields
	2. Inserit into Database

## bamazonSupervisor


1. Prompt User For 2 Options: Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:

	   * View Product Sales by Department
	   
	   * Create New Department

2: View Sales by Department: When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

	| department_id | department_name | over_head_costs | product_sales | total_profit |
	| ------------- | --------------- | --------------- | ------------- | ------------ |
	| 01            | Electronics     | 10000           | 20000         | 10000        |
	| 02            | Clothing        | 60000           | 100000        | 40000        |

	The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

3. Create New Department: Create a new department and update in the datbase. 

