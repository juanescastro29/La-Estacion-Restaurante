package restaurantebackend.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.User;
import restaurantebackend.service.UserService;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/newUser")
    public ResponseEntity<Object> addUser(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        for (int i = 0; i < userService.getUsers().size(); i++) {
            if (((int) user.getUserDocumentId() == userService.getUsers().get(i).getUserDocumentId()) || (user.getEmail().equals(userService.getUsers().get(i).getEmail())) || (user.getUserName().equals(userService.getUsers().get(i).getUserName()))) {
                response.put("route", "/");
                response.put("error", "Usuario ya registrado");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
        }
        user.setRole("USER");
        userService.saveUser(user);
        response.put("route", "/login");
        response.put("error", "");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody Map<String, String> credentials) {
        String userEmail = credentials.get("userEmail");
        String userPassword = credentials.get("userPassword");
        User user = null;
        Map<String, Object> response = new HashMap();
        if (userService.getUsers().size() == 0) {
            response.put("route", "/register");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        for (int i = 0; i < userService.getUsers().size(); i++) {
            if (userEmail.equals(userService.getUsers().get(i).getEmail())) {
                user = userService.getUsers().get(i);
            }
        }
        if (user != null) {
            if (!userPassword.equals(user.getPassword())){
                response.put("route", "");
                response.put("user", null);
                response.put("error", "Contraseña incorrecta");
                return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);
            }
        }else {
            response.put("route", "/register");
            response.put("user", null);
            response.put("error", "");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
        if(user.getRole().equals("USER")) {
            response.put("route", "/menu");
        }else {
            response.put("route", "/admin/products");
        }
        response.put("user", user);
        response.put("error", "");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/showUsers/{page}")
    public List<User> getUsersPage(@PathVariable Integer page) {
        ArrayList<User> usersLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < userService.getUsers().size(); i++) {
            if (elements <= 5) {
                usersLimited.add(userService.getUsers().get(i));
                elements = elements + 1;
            } else {
                i = userService.getUsers().size();
            }
        }

        return usersLimited;
    }

    @GetMapping("/showUser/{user_id}")
    public ResponseEntity<User> getUser(@PathVariable Integer user_id) {
        try {
            User user = userService.getUser(user_id);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateUser/{user_id}")
    public ResponseEntity<Object> updateUser(@RequestBody User user, @PathVariable Integer user_id) {
        try {
            Map<String, Object> response = new HashMap<>();
            User userFound = userService.getUser(user_id);
            if (user.getUserFirstName() != null && !user.getUserFirstName().equals("")) {
                userFound.setUserFirstName(user.getUserFirstName());
            }
            if (user.getUserLastName() != null && !user.getUserLastName().equals("")) {
                userFound.setUserLastName(user.getUserLastName());
            }
            if (user.getPassword() != null && !user.getPassword().equals("")) {
                userFound.setPassword(user.getPassword());
            }
            if (user.getEmail() != null && !user.getEmail().equals("")) {
                userFound.setEmail(user.getEmail());
            }
            userService.saveUser(userFound);
            response.put("message", "User update successfully");
            response.put("user", userFound);
            return new ResponseEntity<Object>(response, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User not found");
            return new ResponseEntity<Object>(response, HttpStatus.NOT_FOUND);
        }
    }

}
