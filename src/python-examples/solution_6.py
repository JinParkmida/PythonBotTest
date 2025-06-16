question = input("Ask me a yes/no question: ")
choice = int(input("Pick a number 1-3 for your answer: "))

print("\\nYou asked: " + question)
print("The Magic 8-Ball says...")

if choice == 1:
    print("Yes, definitely!")
elif choice == 2:
    print("No, I don't think so.")
elif choice == 3:
    print("Maybe... ask again later.")
else:
    print("Please pick 1, 2, or 3 next time!")
