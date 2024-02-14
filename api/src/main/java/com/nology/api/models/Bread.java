package com.nology.api.models;

import jakarta.persistence.*;


@Entity
@Table(name = "breadtable")
public class Bread {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long breadId;

    private String breadTitle;

    private String breadDescription;

    private String breadImageUrl;

    public Long getBreadId() {
        return breadId;
    }

    public void setBreadId(Long breadId) {
        this.breadId = breadId;
    }

    public String getBreadTitle() {
        return breadTitle;
    }

    public void setBreadTitle(String breadTitle) {
        this.breadTitle = breadTitle;
    }

    public String getBreadDescription() {
        return breadDescription;
    }

    public void setBreadDescription(String breadDescription) {
        this.breadDescription = breadDescription;
    }

    public String getBreadImageUrl() {
        return breadImageUrl;
    }

    public void setBreadImageUrl(String breadImageUrl) {
        this.breadImageUrl = breadImageUrl;
    }

    @Override
    public String toString() {
        return "Bread{" +
                "breadId=" + breadId +
                ", breadTitle='" + breadTitle + '\'' +
                ", breadDescription='" + breadDescription + '\'' +
                ", breadImageUrl='" + breadImageUrl + '\'' +
                '}';
    }
}
