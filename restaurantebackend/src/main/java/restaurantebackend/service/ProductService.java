package restaurantebackend.service;

import restaurantebackend.model.Product;

import java.util.List;

public interface ProductService {

    public void saveProduct(Product product);

    public List<Product> getProducts();

    public Product getProduct(Integer id);

    public void deleteProduct(Integer id);

}
