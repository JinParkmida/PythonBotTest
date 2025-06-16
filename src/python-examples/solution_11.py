import random

def get_study_tip():
    tips = [
        "Take breaks every 25 minutes - your brain needs rest!",
        "Study in a quiet place without distractions.",
        "Teach someone else what you learned - it helps you remember!",
        "Use flashcards for memorizing facts.",
        "Get enough sleep - tired brains don't learn well!"
    ]
    return random.choice(tips)

def get_motivation():
    quotes = [
        "The expert in anything was once a beginner!",
        "Every mistake is a learning opportunity!",
        "You're building your future with every study session!",
        "Knowledge is power - keep gaining that power!",
        "Small progress is still progress!"
    ]
    return random.choice(quotes)

def math_quiz():
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    answer = num1 + num2
    
    user_answer = int(input(f"Quick math: {num1} + {num2} = ? "))
    
    if user_answer == answer:
        return "🎉 Correct! Your brain is working great!"
    else:
        return f"Not quite! The answer is {answer}. Keep practicing!"

print("📚 Hi! I'm StudyBot, your learning companion!")
print("Commands: tip, motivate, quiz, help, quit")

while True:
    command = input("\\nHow can I help your studies? ").lower()
    
    if command == "quit":
        print("Happy studying! Remember, every expert was once a beginner! 🌟")
        break
    elif command == "tip":
        print("💡 " + get_study_tip())
    elif command == "motivate":
        print("💪 " + get_motivation())
    elif command == "quiz":
        print("🧮 " + math_quiz())
    elif command == "help":
        print("I can give study tips, motivation, and quiz you!")
        print("Commands: tip, motivate, quiz, help, quit")
    else:
        print("Type 'help' to see what I can do for your studies!")
