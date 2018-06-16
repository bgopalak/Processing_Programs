# This is a object oriented example
import pygame
import math
import random

simpleList = []
class Vehicle:
    name = ""
    kind = "car"
    color = ""
    x = 100
    y= 100
    speed=100
    carImg = pygame.image.load('racecar.png')
    def  __init__(self,x,y):
        self.x = x
        self.y=y
        self.speed=2
        carImg = pygame.image.load('racecar.png').convert()

    def display(self,gameDisplay):
        gameDisplay.blit(self.carImg, (self.x,self.y))
        self.y = self.y -1


pygame.init()


display_width = 800
display_height = 600

gameDisplay = pygame.display.set_mode((display_width,display_height))
pygame.display.set_caption('A bit Racey')

black = (0,0,0)
white = (255,255,255)

clock = pygame.time.Clock()
crashed = False

for i in range(1,5):
    simpleList.append(Vehicle(100*i,100))
    print(i)


x =  (display_width * 0.45)
y = (display_height * 0.8)
while not crashed:
    #pygame.display.update()
    clock.tick(60)
    for obj in simpleList:
            obj.display(gameDisplay)

pygame.quit()
quit()
