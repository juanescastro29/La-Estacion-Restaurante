package restaurantebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurantebackend.model.Category;
import restaurantebackend.repository.CategoryRepository;

import java.util.List;

@Service
public class CategoryServiceImplementation implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public void saveCategory(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategory(Integer id) {
        return categoryRepository.findById(id).get();
    }

    @Override
    public void deleteCategory(Integer id) {
        categoryRepository.deleteById(id);
    }
}
