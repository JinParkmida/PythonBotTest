import random

# Store mood history
mood_history = []
user_name = ""

def add_mood(mood):
    mood_history.append(mood)
    responses = [
        f"Thanks for sharing that you're feeling {mood}.",
        f"I've noted that you're {mood} today.",
        f"Feeling {mood} is totally valid.",
        f"I appreciate you telling me you're {mood}."
    ]
    return random.choice(responses)

def show_mood_summary():
    if not mood_history:
        return "You haven't shared any moods with me yet!"
    
    summary = f"You've shared {len(mood_history)} moods with me:\\n"
    for i, mood in enumerate(mood_history, 1):
        summary += f"{i}. {mood}\\n"
    
    # Find most common mood
    if mood_history:
        most_common = max(set(mood_history), key=mood_history.count)
        summary += f"\\nYou seem to feel '{most_common}' quite often!"
    
    return summary

def get_mood_advice(mood):
    if mood.lower() in ["sad", "down", "depressed", "upset"]:
        return "Remember: tough times don't last, but tough people do! 💪"
    elif mood.lower() in ["happy", "great", "amazing", "excited"]:
        return "That's wonderful! Keep spreading those positive vibes! ✨"
    elif mood.lower() in ["tired", "exhausted", "sleepy"]:
        return "Rest is important! Make sure you're getting enough sleep. 😴"
    else:
        return "All feelings are valid. Thanks for sharing with me! 🤗"

print("🌈 Hello! I'm MoodBot. I help you track and understand your feelings.")
user_name = input("What's your name? ")
print(f"Nice to meet you, {user_name}! Let's start tracking your moods.")
print("Commands: mood, summary, advice, help, quit")

while True:
    command = input(f"\\nHi {user_name}, what would you like to do? ").lower()
    
    if command == "quit":
        print(f"Goodbye {user_name}! Remember to check in with your feelings regularly! 💝")
        break
    elif command == "mood":
        current_mood = input("How are you feeling right now? ")
        print(add_mood(current_mood))
    elif command == "summary":
        print("📊 " + show_mood_summary())
    elif command == "advice":
        if mood_history:
            latest_mood = mood_history[-1]
            print("💭 " + get_mood_advice(latest_mood))
        else:
            print("Share a mood with me first, then I can give advice!")
    elif command == "help":
        print("I can track your moods and give summaries!")
        print("Commands: mood (add a mood), summary (see all moods), advice (get mood advice), help, quit")
    else:
        print("Type 'help' to see what I can do!")
