# Greet the user multiple times
for i in range(3):
    print("Hello there! This is greeting number " + str(i + 1))

print()  # Empty line for spacing

# Countdown
print("Rocket launch countdown:")
for count in range(10, 0, -1):  # Count backwards from 10 to 1
    print(str(count) + "...")
print("Blast off! 🚀")
