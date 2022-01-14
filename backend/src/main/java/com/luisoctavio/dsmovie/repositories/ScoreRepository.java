package com.luisoctavio.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luisoctavio.dsmovie.entities.Score;
import com.luisoctavio.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository <Score, ScorePK>{
	
	

}
