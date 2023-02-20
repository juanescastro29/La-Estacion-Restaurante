package restaurantebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restaurantebackend.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}
