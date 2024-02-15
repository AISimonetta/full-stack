package com.nology.api;

import com.nology.api.models.Bread;
import com.nology.api.models.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:5175")
public class HomemadeBreadController {

    private final HomemadeBreadService homemadeBreadService;

    @Autowired
    public HomemadeBreadController(HomemadeBreadService homemadeBreadService) {
        this.homemadeBreadService = homemadeBreadService;
    }

    @ExceptionHandler
    public String handleException(NotFoundException exception) {
        return exception.getMessage();
    }

    // create
    @PostMapping("/addBread")
    public Bread addBread(@RequestBody Bread bread) {
        return homemadeBreadService.addBread(bread);
    }

    @PostMapping("/addRecipe")
    public Recipe addRecipe(@RequestBody Recipe recipe) {
        return homemadeBreadService.addRecipe(recipe);
    }

    // read
    @GetMapping("/breads")
    public List<Bread> getAllBreads() {
        return homemadeBreadService.getAllBreads();
    }

///to have same endpont as recipe by id
    @GetMapping("/breads/{breadId}")
    public Optional<Bread> getBreadById(@PathVariable Long breadId) {
        return homemadeBreadService.getBreadById(breadId);
    }

    @GetMapping("/filter")
    public List<Bread> getFilteredBreads(
            @RequestParam(required = false) String breadTitle) {
        return homemadeBreadService.getFilteredBreads(breadTitle);
    }

    @GetMapping("/recipes")
    public List<Recipe> getAllRecipes() {
        return homemadeBreadService.getAllRecipes();
    }

    @GetMapping("/recipes/{breadId}")
    public List<Recipe> getRecipesByBreadId(@PathVariable Long breadId) {
        return homemadeBreadService.getRecipesByBreadId(breadId);
    }

    // update
    // Uncomment and implement if needed
    // @PutMapping("/updateBread/{breadId}")
    // public Bread updateBread(@PathVariable Long breadId, @RequestBody Bread updatedBread) {
    //     return homemadeBreadService.updateBread(breadId, updatedBread);
    // }

    // delete
    // Uncomment and implement if needed
    // @DeleteMapping("/deleteBread/{breadId}")
    // public String deleteBread(@PathVariable Long breadId) {
    //     homemadeBreadService.deleteBread(breadId);
    //     return "Bread recipe has been deleted successfully.";
    // }

}