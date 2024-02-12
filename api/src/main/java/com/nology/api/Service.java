package com.nology.api;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//logic
@Service
public class Service {
//    @Autowired
//    GreetingsRepository greetingsRepository;
//
//    // CREATE
//
//    public void addGreeting(Greeting greeting) {
//        greetingsRepository.save(greeting);
//    }
//
//
//    // READ
//
//    public Greeting getGreetingById(long id) {
//        Optional<Greeting> greeting = greetingsRepository.findById(id);
//
//        if (greeting.isEmpty()) {
//            throw new GreetingNotFoundException();
//        }
//
//        return greeting.get();
//    }
//
//    public Greeting getRandomGreeting() {
//        return greetingsRepository.getRandomGreeting();
//    }
//
//    public List<Long> getGreetingIds() {
//        return greetingsRepository.getDistinctIds();
//    }
//
//    public List<String> getOriginCountries() {
//        return greetingsRepository.getDistinctOriginCountries();
//    }
/
//
//    // UPDATE
//
//    public void updateGreeting(Greeting newGreeting, long id) {
//        if (!greetingsRepository.existsById(id)) {
//            throw new GreetingNotFoundException();
//        }
//
//        newGreeting.setId(id);
//
//        greetingsRepository.save(newGreeting);
//    }
//
//    // DELETE
//    @Transactional
//    public void deleteGreetingById(long id) {
//        if (!greetingsRepository.existsById(id)) {
//            throw new GreetingNotFoundException();
//        }
//
//        greetingsRepository.deleteGreetingById(id);
//    }
}
