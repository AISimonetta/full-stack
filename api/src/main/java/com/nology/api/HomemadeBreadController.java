package com.nology.api;

import com.nology.api.models.Bread;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.nology.api.NotFoundException;



import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
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

    //create
    @PostMapping("/addBread")
    public Bread addBread(@RequestBody Bread bread) {
        return homemadeBreadService.addBread(bread);
    }

    //read
    @GetMapping("/breads")
    public List<Bread> getAllBreads() {
        return homemadeBreadService.getAllBreads();
    }

    @GetMapping("/filter")
    public List<Bread> getFilteredBreads(
            @RequestParam(required = false) String breadTitle) {
        return homemadeBreadService.getFilteredBreads(breadTitle);
    }

    //update


    //delete


}