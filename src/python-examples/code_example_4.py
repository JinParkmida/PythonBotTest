user_mood = input("How are you feeling today? (Type 'good' or 'bad') ")

# This is where your bot makes a decision!
if user_mood == "good":  # Is user_mood EXACTLY "good"?
    print("That's fantastic! Keep smiling!")
else:  # If it's NOT "good" (meaning "bad" or anything else)
    print("Oh no, I hope your day gets better soon!")

print("Thanks for chatting with me!")
