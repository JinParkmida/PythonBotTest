import random

# Store user information
user_name = ""
favorite_color = ""
mood_today = ""

print("🤖 Hello! I'm PersonalBot. I like getting to know people!")

# Get to know the user
user_name = input("What's your name? ")
print(f"Nice to meet you, {user_name}!")

favorite_color = input("What's your favorite color? ")
print(f"{favorite_color} is a beautiful color, {user_name}!")

mood_today = input("How are you feeling today? ")
print(f"Thanks for sharing that you're feeling {mood_today}.")

print(f"\\nOkay {user_name}, now I know a bit about you!")
print("Type 'chat' to talk, or 'quit' to leave.")

while True:
    command = input("\\n> ").lower()
    
    if command == "quit":
        print(f"Goodbye {user_name}! I hope your {favorite_color} day gets even better!")
        break
    elif command == "chat":
        responses = [
            f"So {user_name}, tell me more about yourself!",
            f"I remember you like {favorite_color}. What else do you enjoy?",
            f"Since you're feeling {mood_today}, what usually makes you happy?",
            f"You seem really nice, {user_name}. What's your favorite hobby?"
        ]
        print(random.choice(responses))
    else:
        print(f"Just type 'chat' to talk with me, {user_name}, or 'quit' to leave!")
