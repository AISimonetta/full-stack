package com.nology.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/homemade_bread")
public class HomemadeBreadController {

    private HomemadeBreadService homemadeBreadService;

    @ExceptionHandler
    public String handleException(NotFoundException exception) {
        return exception.getMessage();
    }

    //create
//    @PostMapping("/")
//    public  (@RequestBody  ){
//        .();
//        return ;
//    }

    //read
//    @GetMapping("/")
//    public String () {
//        return "";
//    }
    //update

    //delete


}