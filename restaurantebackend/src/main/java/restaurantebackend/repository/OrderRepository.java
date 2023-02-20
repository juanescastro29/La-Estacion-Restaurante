package restaurantebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restaurantebackend.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
