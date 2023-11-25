<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Tri-C Lemonade Stand LLC - Point of Sales</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <link href="resources/normalize.css" rel="stylesheet">
      <link href="resources/skeleton.css" rel="stylesheet">
      <link href="project.css" rel="stylesheet">
      <!-- Add jQuery library -->
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      <script src="project.js"></script>
      <style>
         div#itemsParent
         {
            padding: 15px;
            background-color: #f3f3f3;
         }
      </style>
      <script>
         // Use variables to keep track of quantities
         var quantities = [0, 0, 0];
         var prices = [5.00, 6.00, 8.00];
         var totalDollars = 0;

         function addToOrder(item) {
            // Add one to the total quantity of the item
            quantities[item]++;
            // Re-evaluate and display the total for this item in the list
            updateItem(item);
            // Re-evaluate and display the total dollars
            updateTotal();
            // Animate the button click (fade in)
            $("#addButton" + item).fadeIn();
         }

         function removeFromOrder(item) {
            // Ensure no negative quantities
            if (quantities[item] > 0) {
               // Remove one from the total quantity of the item
               quantities[item]--;
               // Re-evaluate and display the total for this item in the list
               updateItem(item);
               // Re-evaluate and display the total dollars
               updateTotal();
               // Animate the button click (fade out)
               $("#removeButton" + item).fadeOut();
            }
         }

         function clearAllItems() {
            // Remove all items from the order
            quantities = [0, 0, 0];
            // Clear the list
            $("#itemsList").empty();
            // Re-evaluate and display the total dollars
            updateTotal();
         }

         function updateItem(item) {
            // Update the display for the specified item
            var quantity = quantities[item];
            var dollarAmount = quantity * prices[item];
            $("#item" + item).text(quantity + " x $" + prices[item].toFixed(2) + " = $" + dollarAmount.toFixed(2));
         }

         function updateTotal() {
            // Calculate the total dollars
            totalDollars = quantities[0] * prices[0] + quantities[1] * prices[1] + quantities[2] * prices[2];
            // Display the total dollars
            $("#totalDollars").text("Total: $" + totalDollars.toFixed(2));
         }

         $(document).ready(function() {
            // Display the list items for the first time
            updateTotal();
         });
      </script>
   </head>
   <body>
      <!-- ... (your existing HTML code) ... -->
   </body>
</html>
