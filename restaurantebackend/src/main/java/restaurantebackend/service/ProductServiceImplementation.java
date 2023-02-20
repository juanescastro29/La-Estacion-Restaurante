package restaurantebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurantebackend.model.Product;
import restaurantebackend.repository.ProductRepository;

import java.util.List;

@Service
public class ProductServiceImplementation implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProduct(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
}
