# This is what we're building towards:
# A bot that can get fresh jokes from the internet!

import requests  # This is our "library card" for talking to websites

def get_dad_joke():
    # Ask the joke service for a joke
    response = requests.get("https://icanhazdadjoke.com/", 
                          headers={"Accept": "application/json"})
    joke_data = response.json()
    return joke_data["joke"]

# Now our bot can tell internet jokes!
print(get_dad_joke())
