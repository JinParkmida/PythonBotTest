import requests

def get_dad_joke():
    """This function gets a joke from the internet"""
    try:
        response = requests.get("https://icanhazdadjoke.com/", 
                               headers={"Accept": "application/json"})
        joke_data = response.json()
        return joke_data["joke"]
    except:
        return "Sorry, I couldn't get a joke right now. Maybe the internet is having a bad day!"

# Main bot program
print("🤖 Welcome to JokeBot! I get my jokes fresh from the internet!")
print("Type 'joke' for a joke, or 'quit' to exit.")

while True:
    user_input = input("\\nWhat would you like? ").lower()
    
    if user_input == "quit":
        print("Thanks for laughing with me! Goodbye! 😄")
        break
    elif user_input == "joke":
        print("\\n" + get_dad_joke())
        print("\\n😂 Hope that made you smile!")
    else:
        print("I only know how to tell jokes! Type 'joke' or 'quit'.")
