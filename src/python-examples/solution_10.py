import requests

def get_number_fact():
    try:
        response = requests.get("http://numbersapi.com/random")
        return response.text  # This API returns plain text, not JSON
    except:
        return "Sorry, I couldn't get a fact right now!"

print("🧠 Welcome to FactBot! I know amazing number facts!")

while True:
    user_input = input("\\nType 'fact' for a number fact, or 'quit' to exit: ").lower()
    
    if user_input == "quit":
        print("Thanks for learning with me! Stay curious! 🤓")
        break
    elif user_input == "fact":
        print("\\nHere's a cool number fact:")
        print(get_number_fact())
    else:
        print("Type 'fact' or 'quit'!")
