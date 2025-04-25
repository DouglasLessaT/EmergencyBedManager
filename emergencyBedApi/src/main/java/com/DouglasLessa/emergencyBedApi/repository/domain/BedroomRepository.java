package com.DouglasLessa.emergencyBedApi.repository.domain;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DouglasLessa.emergencyBedApi.model.domain.Bedroom;

@Repository
public interface BedroomRepository extends JpaRepository<Bedroom, UUID> {
    Bedroom findByNumberAndHospitalId(String number, UUID hospitalId);

    Bedroom findByNumberAndHospitalIdAndIdNot(String number, UUID hospitalId, UUID id);

    Bedroom findByNumberAndHospitalIdAndStatusAndIdNot(String number, UUID hospitalId, String status, UUID id);

    Bedroom findByNumberAndHospitalIdAndStatus(String number, UUID hospitalId, String status);
}