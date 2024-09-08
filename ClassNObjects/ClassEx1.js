import java.util.Arrays;
import java.util.List;

// Interface example
interface Greeting {
    void sayHello(String name);
}

// Base class (Superclass)
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void displayInfo() {
        System.out.println("Animal: " + name);
    }
}

// Derived class (Subclass) using
