package com.luisoctavio.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luisoctavio.dsmovie.entities.User;

public interface UserRepository extends JpaRepository <User, Long>{
	
	User findByEmail(String email);

}
