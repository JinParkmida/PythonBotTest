import random

# Lists of different responses
greetings = [
    "Hello there!",
    "Hey, what's up?",
    "Greetings, human!",
    "Hi there, friend!",
    "Welcome back!"
]

goodbyes = [
    "See you later!",
    "Goodbye for now!",
    "Until next time!",
    "Take care!",
    "Catch you later!"
]

confused_responses = [
    "I'm not sure what you mean.",
    "Could you try that again?",
    "I didn't quite understand that.",
    "Hmm, I'm confused. Can you rephrase?",
    "That's not something I know how to do."
]

# Using random responses
print(random.choice(greetings))

# Later in your bot...
if command not in ["joke", "encourage", "fact", "help", "quit"]:
    print(random.choice(confused_responses))
