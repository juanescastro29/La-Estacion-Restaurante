package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.Order;
import restaurantebackend.model.Product;
import restaurantebackend.service.OrderService;
import restaurantebackend.service.ProductService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private ProductService productService;

    @PostMapping("/createOrder")
    public ResponseEntity<String> addOrder(@RequestBody Order order) {
        orderService.saveOrder(order);
        return new ResponseEntity<>("Order create successfully", HttpStatus.OK);
    }

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
