print("Welcome to the Mood Bot! I'll help track your mood.")
print("Type 'done' when you want to finish.")

mood_count = 0

while True:
    mood = input("\\nHow are you feeling right now? ")
    
    if mood.lower() == "done":
        print("\\nThanks for sharing! You told me about " + str(mood_count) + " moods.")
        break
    
    mood_count = mood_count + 1  # Count how many moods they shared
    
    if mood.lower() == "happy":
        print("That's wonderful! Keep that positive energy!")
    elif mood.lower() == "sad":
        print("I'm sorry you're feeling down. Tomorrow is a new day!")
    elif mood.lower() == "excited":
        print("Your excitement is contagious! What's got you so pumped?")
    else:
        print("Thanks for sharing that you're feeling " + mood + ".")
    
    print("Feelings are important to acknowledge.")
