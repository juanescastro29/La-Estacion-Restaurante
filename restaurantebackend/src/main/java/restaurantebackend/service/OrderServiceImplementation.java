package restaurantebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurantebackend.model.Order;
import restaurantebackend.repository.OrderRepository;

import java.util.List;

@Service
public class OrderServiceImplementation implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public void saveOrder(Order order) {
        orderRepository.save(order);
    }

    @Override
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrder(Integer id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public void deleteOrder(Integer id) {
        orderRepository.deleteById(id);
    }
}
