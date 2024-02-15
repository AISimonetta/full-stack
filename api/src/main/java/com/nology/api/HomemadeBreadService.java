package com.nology.api;

import com.nology.api.models.Bread;
import com.nology.api.repositories.BreadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HomemadeBreadService {
    @Autowired
    private BreadRepository breadRepository;

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

    public Bread updateBread(Long breadId, Bread updatedBread) {
        Bread existingBread = getBreadById(breadId);
        existingBread.setBreadTitle(updatedBread.getBreadTitle());
        existingBread.setBreadDescription(updatedBread.getBreadDescription());
        existingBread.setBreadImageURL(updatedBread.getBreadImageURL());
        return breadRepository.save(existingBread);
    }

    private Bread getBreadById(Long breadId) {
        return breadRepository.findById(breadId)
                .orElseThrow(() -> new NotFoundException("Bread not found"));
    }

    public void deleteBread(Long breadId) {
        breadRepository.deleteById(breadId);
    }
}
