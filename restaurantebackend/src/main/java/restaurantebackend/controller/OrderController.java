package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.service.OrderService;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/orderProducts/{orderId}")
    public ResponseEntity<String> getOrderProducts(@PathVariable Integer orderId) {

    }

}
