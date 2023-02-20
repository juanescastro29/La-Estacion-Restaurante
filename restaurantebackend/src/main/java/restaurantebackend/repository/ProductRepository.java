package restaurantebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restaurantebackend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
