package restaurantebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurantebackend.model.User;
import restaurantebackend.repository.UserRepository;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(Integer id) {
        return userRepository.findById(id).get();
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

}
