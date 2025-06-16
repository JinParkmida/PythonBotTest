import requests
import random

def get_dad_joke():
    try:
        response = requests.get("https://icanhazdadjoke.com/", 
                               headers={"Accept": "application/json"})
        return response.json()["joke"]
    except:
        return "Sorry, joke service is down!"

def get_encouragement():
    encouragements = [
        "You're amazing just as you are!",
        "Every day is a new opportunity!",
        "You have the power to make today great!",
        "Believe in yourself - I do!"
    ]
    return random.choice(encouragements)

def get_fun_fact():
    try:
        response = requests.get("http://numbersapi.com/random")
        return response.text
    except:
        return "Here's a fact: You're awesome for learning to code!"

# Multi-feature bot
print("🤖 Hi! I'm your Multi-Bot! I can do lots of things!")
print("Commands: joke, encourage, fact, help, quit")

while True:
    command = input("\\nWhat can I do for you? ").lower()
    
    if command == "quit":
        print("Goodbye! You're going to do amazing things! 🌟")
        break
    elif command == "joke":
        print("😄 " + get_dad_joke())
    elif command == "encourage":
        print("💪 " + get_encouragement())
    elif command == "fact":
        print("🧠 " + get_fun_fact())
    elif command == "help":
        print("I can: tell jokes, give encouragement, share facts!")
        print("Just type: joke, encourage, fact, help, or quit")
    else:
        print("🤔 I don't know that command. Type 'help' to see what I can do!")
