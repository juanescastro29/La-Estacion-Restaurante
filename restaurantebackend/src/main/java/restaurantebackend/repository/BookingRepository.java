package restaurantebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restaurantebackend.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
}
