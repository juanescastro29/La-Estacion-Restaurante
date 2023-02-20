package restaurantebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restaurantebackend.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
