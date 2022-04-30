# Phoodie App
## Version: 1.3

## About the project:
Finding recipes to cook can be overwhelming. A simple google search can help but in the times when you want quick suggestions, Google may overwhelm. Enter Phoodie App!
This web application built in React js, allows the user to find recipes easily by a simple click of a button. It is that simple. Once the button is clicked, the app randomly generates a recipe which the user can use. This application solves the problem of deciding which recipe to search for and makes it easy to find a recipe you can cook. 

## Features of the project:
The user can click the button multiple times and each time the button is clicked, a new recipe is generated with a full recipe card. The recipe card contains a photo of the recipe, serving size, ingredient list and a step by step instruction on how to cook the recipe.

## Technical Knowledge used:
In building this application, the recipes and all the data for the recipes were pulled from the Spoonacular API. I made a single call for 100 random recipes and once the data was retrived, it was used to create JSON file in the project. The JSON file then provides the recipe data which the user sees on the application. I made this decision as a work around to the limit of calls to the API that the application would make. I realise that this means the application has a limited amount of recipes but considering the use of the application and its size, a limited number of recipes would work fine.

## Reflections:
- I could definately go further and work towards accessing the entire recipe collection through the API.
- I would have also loved to test the code of this application using Test Driven Development (TDD) principles and I plan to test the code in future. I believe testing the code using TDD will make the application more robust and stable.

You can view a live demo of the project and see it in action 

Live Site:
https://phoodiefoodapp.netlify.app
