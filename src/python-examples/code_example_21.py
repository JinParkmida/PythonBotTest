import requests

# Step 1: Ask the API for a joke
print("Asking the internet for a joke...")
response = requests.get("https://icanhazdadjoke.com/", 
                       headers={"Accept": "application/json"})

# Step 2: Convert the response to Python data
joke_data = response.json()

# Step 3: Extract just the joke
joke = joke_data["joke"]

# Step 4: Tell the joke!
print("Here's your joke:")
print(joke)
