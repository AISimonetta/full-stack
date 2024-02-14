package com.nology.api;


import com.nology.api.models.Bread;

import java.util.List;

public interface HomemadeBread {
    List<Bread> getAllBreads();

    List<Bread> getFilteredBreads(String breadTitle);

    Bread addBread(Bread bread);

}