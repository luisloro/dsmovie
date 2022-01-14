package com.luisoctavio.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luisoctavio.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository <Movie, Long>{
	
	

}
