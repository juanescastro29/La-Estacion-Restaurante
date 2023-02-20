package restaurantebackend.service;

import restaurantebackend.model.User;

import java.util.List;

public interface UserService {

    public void saveUser(User user);

    public List<User> getUsers();

    public User getUser(Integer id);

    public void deleteUser(Integer id);

}
