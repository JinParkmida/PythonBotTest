meal = input("What meal are you looking for? (breakfast/lunch/dinner) ")
meal = meal.lower()

if meal == "breakfast":
    print("I recommend pancakes with fresh berries!")
elif meal == "lunch":
    print("How about a delicious sandwich and soup?")
elif meal == "dinner":
    print("Try our famous pasta with garlic bread!")
else:
    print("I'm not sure about that meal. We serve breakfast, lunch, and dinner!")
