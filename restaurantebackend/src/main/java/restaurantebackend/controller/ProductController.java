package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.Product;
import restaurantebackend.service.ProductService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/showProducts/{page}")
    public List<Product> getProductsPage(@PathVariable Integer page) {
        ArrayList<Product> productsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < productService.getProducts().size(); i++) {
            if (elements <= 5) {
                productsLimited.add(productService.getProducts().get(i));
                elements = elements + 1;
            } else {
                i = productService.getProducts().size();
            }
        }

        return productsLimited;
    }

    @PutMapping("/updateProduct/{productId}")
    public ResponseEntity<String> updateProduct(@RequestBody Map<String, String> productUpdateData, @PathVariable Integer productId) {
        try {
            Product productFound = productService.getProduct(productId);
            if (productUpdateData.get("productPrice") != "") {
                productFound.setProductPrice(Double.parseDouble(productUpdateData.get("productPrice")));
            }

            if (productUpdateData.get("iva") != "") {
                productFound.setIva(Double.parseDouble(productUpdateData.get("iva")));
            }

            if (productUpdateData.get("productDescription") != "") {
                productFound.setProductDescription(productUpdateData.get("productDescription"));
            }

            if (productUpdateData.get("stock") != "") {
                productFound.setStock(Integer.parseInt(productUpdateData.get("stock")));
            }

            if (productUpdateData.get("productImage") != "") {
                productFound.setProductImage(productUpdateData.get("productImage"));
            }

            productService.saveProduct(productFound);
            return new ResponseEntity<String>("Product update successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Product not update", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteProduct/{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable int productId) {
        try {
            productService.deleteProduct(productId);
            return new ResponseEntity<String>("Product deleted", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("No product found", HttpStatus.NOT_FOUND);
        }
    }

}
