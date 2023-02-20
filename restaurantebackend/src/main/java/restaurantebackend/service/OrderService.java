package restaurantebackend.service;

import restaurantebackend.model.Order;

import java.util.List;

public interface OrderService {

    public void saveOrder(Order order);

    public List<Order> getOrders();

    public Order getOrder(Integer id);

    public void deleteOrder(Integer id);

}
