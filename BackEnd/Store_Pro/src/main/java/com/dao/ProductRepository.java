package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Products;

@Repository
public interface ProductRepository extends JpaRepository<Products, Integer>{

	@Query("from Products where category = :category")
	List<Products> findByCategory(@Param("category") String category);

	@Query("from Products p where p.name = :name")
	List<Products> findByName(@Param("name") String name);

}
