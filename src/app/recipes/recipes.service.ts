import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Ramirez',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Long-tailed_macaque_%28Macaca_fascicularis%29_Labuk_Bay.jpg',
      ingredients: ['banana', 'potato', 'orange']
    },
    {
      id: 'r2',
      title: 'Ramirez',
      imageUrl: 'https://en.wikibooks.org/wiki/Cookbook:Acorn_Squash#/media/File:Acornsquash.jpg',
      ingredients: ['banana', 'potato', 'orange']
    },
    {
      id: 'r3',
      title: 'Ramirez',
      imageUrl: 'https://en.wikibooks.org/wiki/Cookbook:Acorn_Squash#/media/File:Acornsquash.jpg',
      ingredients: ['banana', 'potato', 'orange']
    },
    {
      id: 'r4',
      title: 'Ramirez',
      imageUrl: 'https://en.wikibooks.org/wiki/Cookbook:Acorn_Squash#/media/File:Acornsquash.jpg',
      ingredients: ['banana', 'potato', 'orange']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
