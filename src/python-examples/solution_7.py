name = input("What's your name? ")

compliments = [
    "You have a great sense of humor!",
    "You're really good at learning new things!",
    "You have a wonderful personality!"
]

print("\\nHere are some compliments for you, " + name + ":")

for i in range(3):
    print(str(i + 1) + ". " + compliments[i])

print("\\nYou're awesome, " + name + "! 😊")
