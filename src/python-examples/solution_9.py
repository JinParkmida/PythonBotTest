import requests

def get_dad_joke():
    try:
        response = requests.get("https://icanhazdadjoke.com/", 
                               headers={"Accept": "application/json"})
        joke_data = response.json()
        return joke_data["joke"]
    except:
        return "Sorry, I couldn't get a joke right now!"

print("🤖 Welcome to JokeBot with Counter!")
joke_count = 0

while True:
    user_input = input("\\nType 'joke' for a joke, or 'quit' to exit: ").lower()
    
    if user_input == "quit":
        print(f"Thanks for laughing! I told you {joke_count} jokes today! 😄")
        break
    elif user_input == "joke":
        joke_count += 1
        print(f"\\nJoke #{joke_count}:")
        print(get_dad_joke())
    else:
        print("Type 'joke' or 'quit'!")
