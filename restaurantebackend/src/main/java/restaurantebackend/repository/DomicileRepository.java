package restaurantebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restaurantebackend.model.Domicile;

public interface DomicileRepository extends JpaRepository<Domicile, Integer> {
}
