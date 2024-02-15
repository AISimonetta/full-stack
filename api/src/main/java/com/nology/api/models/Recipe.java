package com.nology.api.models;

import com.nology.api.models.Bread;
import jakarta.persistence.*;

@Entity
@Table(name = "recipestable")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recipeId;


    private String recipeIngredients;

    private String recipeDescription;



    @ManyToOne
    @JoinColumn(name = "bread_id", insertable = false, updatable = false)
    private Bread bread;

    public Long getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Long recipeId) {
        this.recipeId = recipeId;
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



}