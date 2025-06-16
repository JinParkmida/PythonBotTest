# Keep asking until they say "quit"
print("I'm a chatty bot! Type 'quit' when you want to stop.")

while True:  # This means "keep going forever"
    user_input = input("Say something to me: ")
    
    if user_input.lower() == "quit":
        print("Goodbye! It was fun chatting!")
        break  # This stops the loop
    else:
        print("You said: " + user_input)
        print("That's interesting! Tell me more.")

print("Thanks for chatting with me!")
