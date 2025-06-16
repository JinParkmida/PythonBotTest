answer = input("Do you want to continue? (yes/no) ")

# Convert to lowercase so YES, yes, Yes all work the same
answer = answer.lower()

if answer == "yes":
    print("Great! Let's keep going!")
elif answer == "no":
    print("Okay, see you later!")
else:
    print("I didn't understand that. Please type 'yes' or 'no'.")

# You can also do it in one line:
# if answer.lower() == "yes":
