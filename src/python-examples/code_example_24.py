# Example: A friendly, encouraging bot personality
def bot_greeting():
    return "Hey there, friend! 😊 I'm here to help and chat!"

def bot_encouragement():
    encouragements = [
        "You're doing great!",
        "Keep up the awesome work!",
        "I believe in you!",
        "You've got this!"
    ]
    import random
    return random.choice(encouragements)
