score = int(input("What's your test score? "))

if score >= 90:
    grade = "A"
    print("Excellent work!")
elif score >= 80:
    grade = "B" 
    print("Good job!")
elif score >= 70:
    grade = "C"
    print("Not bad!")
elif score >= 60:
    grade = "D"
    print("You passed, but try harder next time.")
else:
    grade = "F"
    print("Don't give up! You'll do better next time.")

print("Your grade is: " + grade)
