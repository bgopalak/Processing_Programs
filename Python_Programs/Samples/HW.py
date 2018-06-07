# define the Vehicle class
class Vehicle:
    name = ""
    kind = "car"
    color = ""
    value = 100.00
    def description(self):
        desc_str = "%s is a %s %s worth $%.2f." % (self.name, self.color, self.kind, self.value)
        return desc_str
# your code goes here
car1 = Vehicle();
car2 = Vehicle();
car1.name = "Ferrari"
car1.color = "Red"
car1.value = 20000;
car2.name = "Dodge"
car2.color = "Blue"
car2.value = 15000
# test code

print(car1.description())
print(car2.description())
