package restaurantebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restaurantebackend.model.Bonus;

public interface BonusRepository extends JpaRepository<Bonus, Integer> {
}
