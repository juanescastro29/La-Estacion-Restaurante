package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.Order;
import restaurantebackend.service.OrderService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/showOrder/{domicileId}")
    public List<Order> getOrderId(@PathVariable Integer domicileId){
        List<Order> orders = new ArrayList<>();
        for (int i = 0; i < orderService.getOrders().size() ; i++){
            if(orderService.getOrders().get(i).getDomicile().getDomicileId() == domicileId){
                orders.add(orderService.getOrders().get(i));
            }
        }

        return orders;
    }

}
