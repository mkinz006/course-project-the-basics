import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
recipes: Recipe[] = [
  new Recipe("Lasagna", "Delicious Italian Dish","https://cdn.printerval.com/image/960x960/mousepads-1,black,print-2023-10-31+ecee179a-5fb5-46d1-b85d-d0745ead42e1,2d2d2d.jpeg")
];
}
