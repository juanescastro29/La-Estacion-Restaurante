package restaurantebackend.service;

import restaurantebackend.model.Category;

import java.util.List;

public interface CategoryService {

    public void saveCategory(Category category);

    public List<Category> getCategories();

    public Category getCategory(Integer id);

    public void deleteCategory(Integer id);

}
