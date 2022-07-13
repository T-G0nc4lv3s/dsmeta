package com.thiago_goncalves.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiago_goncalves.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
}
