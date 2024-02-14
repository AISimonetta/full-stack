package com.nology.api.models;

import com.nology.api.models.Bread;
import jakarta.persistence.*;

@Entity
@Table(name = "recipestable")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recipeId;

    private String recipeTitle;

    private String recipeIngredients;

    private String recipeDescription;

    private boolean recipeNutFree;

    private boolean recipeContainsEgg;

    private boolean recipeContainsFruit;

    @ManyToOne
    @JoinColumn(name = "bread_id")
    private Bread bread;

    public Long getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Long recipeId) {
        this.recipeId = recipeId;
    }

    public String getRecipeTitle() {
        return recipeTitle;
    }

    public void setRecipeTitle(String recipeTitle) {
        this.recipeTitle = recipeTitle;
    }

    public String getRecipeIngredients() {
        return recipeIngredients;
    }

    public void setRecipeIngredients(String recipeIngredients) {
        this.recipeIngredients = recipeIngredients;
    }

    public String getRecipeDescription() {
        return recipeDescription;
    }

    public void setRecipeDescription(String recipeDescription) {
        this.recipeDescription = recipeDescription;
    }

    public boolean isRecipeNutFree() {
        return recipeNutFree;
    }

    public void setRecipeNutFree(boolean recipeNutFree) {
        this.recipeNutFree = recipeNutFree;
    }

    public boolean isRecipeContainsEgg() {
        return recipeContainsEgg;
    }

    public void setRecipeContainsEgg(boolean recipeContainsEgg) {
        this.recipeContainsEgg = recipeContainsEgg;
    }

    public boolean isRecipeContainsFruit() {
        return recipeContainsFruit;
    }

    public void setRecipeContainsFruit(boolean recipeContainsFruit) {
        this.recipeContainsFruit = recipeContainsFruit;
    }


}