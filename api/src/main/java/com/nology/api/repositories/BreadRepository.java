package com.nology.api.repositories;

import com.nology.api.models.Bread;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BreadRepository extends JpaRepository<Bread, Long> {
    List<Bread> findByBreadTitleContainingIgnoreCase(String breadTitle);
}