package com.nology.api;

import com.nology.api.models.Bread;
import com.nology.api.models.Recipe;
import com.nology.api.repositories.BreadRepository;
import com.nology.api.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HomemadeBreadService {
    @Autowired
    private BreadRepository breadRepository;
    @Autowired
    private RecipeRepository recipeRepository;

    public List<Bread> getAllBreads() {
        return breadRepository.findAll();
    }

    public List<Bread> getFilteredBreads(String breadTitle) {
        List<Bread> filteredBreads = breadTitle != null ?
                breadRepository.findByBreadTitleContainingIgnoreCase(breadTitle) :
                breadRepository.findAll();

        if (filteredBreads.isEmpty()) {
            throw new NotFoundException("Bread not found");
        }
        return filteredBreads;
    }

    public Bread addBread(Bread bread) {
        return breadRepository.save(bread);
    }

    private Bread getBreadById(Long breadId) {
        return breadRepository.findById(breadId)
                .orElseThrow(() -> new NotFoundException("Bread not found"));
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public List<Recipe> getRecipesByBreadId(Long breadId) {
        return recipeRepository.findByBread_BreadId(breadId);
    }

    //    public Bread updateBread(Long breadId, Bread updatedBread) {
//        Bread existingBread = getBreadById(breadId);
//        existingBread.setBreadTitle(updatedBread.getBreadTitle());
//        existingBread.setBreadDescription(updatedBread.getBreadDescription());
//        existingBread.setBreadImageURL(updatedBread.getBreadImageURL());
//        return breadRepository.save(existingBread);
//    }

    //    public void deleteBread(Long breadId) {
//        breadRepository.deleteById(breadId);
//    }

}
