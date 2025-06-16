secret_number = 7
print("I'm thinking of a number between 1 and 10!")
print("Can you guess what it is?")

while True:
    guess = int(input("Your guess: "))
    
    if guess == secret_number:
        print("🎉 Congratulations! You got it!")
        print("The number was " + str(secret_number))
        break
    elif guess < secret_number:
        print("Too low! Try a higher number.")
    else:
        print("Too high! Try a lower number.")

print("Thanks for playing!")
