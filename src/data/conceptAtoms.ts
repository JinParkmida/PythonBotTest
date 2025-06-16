import { ConceptAtomType } from '../types';

export const conceptAtoms: ConceptAtomType[] = [
  {
    id: 'setup-playground',
    title: 'Your Coding Playground',
    description: 'Setting up your environment - where to write and run your first bot code',
    category: 'Setup',
    difficulty: 'beginner',
    prerequisites: [],
    nextConcepts: ['what-is-a-bot'],
    estimatedTime: 10,
    content: {
      text: {
        sections: [
          {
            title: 'Choosing Your Tool',
            content: `First, we need a place to write our code. Think of it like choosing a notebook and pen. For absolute beginners, I recommend starting with an online tool because you don't need to install anything!

**Easiest Start (Online):** We'll use Replit, a free online coding environment. Just go to replit.com, create a free account, and click "Create Repl" → "Python". Name it something fun like "MyFirstBot"!

**What You'll See:** You'll see a main area where you write code, and a black window on the right - that's called the "terminal" or "console." This is where your bot will "talk" back to you.`,
            codeExample: `# This is your first line of code!
# The # symbol means this is a "comment" - notes for humans
print("Hello, Bot Builder!")

# When you click "Run", this text will appear in the terminal`
          },
          {
            title: 'Running Your First Line',
            content: `Here's the magic moment! Type the code example above into the main code area, then click the green "Run" button. See? Your text appeared in the terminal!

**This is the core loop:** Write code → Run code → See result. You'll do this a lot, and it never gets old!

**Pro Tip:** If you see any red text (errors), don't panic! Errors are just your computer's way of saying "I didn't understand that." We'll learn to read them like friendly hints.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Try changing the message in the print statement to say "I am ready to build my first bot!" and run it.',
            solution: 'print("I am ready to build my first bot!")',
            hints: [
              'Replace the text inside the quotes with your new message',
              'Make sure to keep the quotes around your text',
              'Click Run to see your message appear!'
            ]
          }
        ]
      }
    },
    tags: ['setup', 'environment', 'first-steps']
  },
  {
    id: 'what-is-a-bot',
    title: 'What Even Is a Bot?',
    description: 'Demystifying the jargon and understanding what a bot really is (spoiler: it\'s simpler than you think!)',
    category: 'Concepts',
    difficulty: 'beginner',
    prerequisites: ['setup-playground'],
    nextConcepts: ['bare-bones-bot'],
    estimatedTime: 8,
    content: {
      text: {
        sections: [
          {
            title: 'Ditch the Tech Talk',
            content: `Forget 'AI,' 'algorithms,' and 'neural networks' for a moment. For our challenge, a 'bot' is simply a program that:

**• Listens:** It takes something you type (your 'input')
**• Thinks (a little):** It processes your input based on some rules you set  
**• Talks Back:** It gives you a response (its 'output')

That's it! No magic, no super-intelligence required.`
          },
          {
            title: 'Real-World Analogies',
            content: `**Think of it like a vending machine:** You press 'A1' (input), it knows to give you a soda (processing), and out pops your drink (output).

**Or a really smart parrot:** You say 'Hello!' (input), it's programmed to say 'Squawk!' (processing), and then it squawks back (output).

**Even simpler:** It's like a very patient friend who always responds when you talk to them, but they only know how to say certain things based on what you taught them.`
          },
          {
            title: 'The "API" Superpower (Simplified)',
            content: `And what's an 'API'? Imagine your bot wants to tell a joke. Does it make up the joke itself? No! It calls a 'Joke Service' (that's the API!) and asks for one. The Joke Service sends it back, and your bot tells you.

It's like having access to a huge library of information that your bot can 'read' from. Instead of your bot going outside to check the weather, it asks a special 'weather service' for the information!`
          }
        ]
      }
    },
    tags: ['concepts', 'basics', 'understanding']
  },
  {
    id: 'bare-bones-bot',
    title: 'The Absolute Bare Bones Bot',
    description: 'Your first lines of code! Making your bot say hello, listen, and make simple decisions.',
    category: 'First Code',
    difficulty: 'beginner',
    prerequisites: ['what-is-a-bot'],
    nextConcepts: ['variables-memory'],
    estimatedTime: 15,
    content: {
      text: {
        sections: [
          {
            title: '"Hello, World!" for Bots',
            content: `Let's start with the absolute simplest bot - one that just says something when you run it. This is like teaching your parrot its first word!`,
            codeExample: `print("Hello! I am your first bot.")
print("I'm excited to learn with you!")`
          },
          {
            title: 'Getting Input (The Listener)',
            content: `Now let's make your bot interactive! The \`input()\` function is special - it does two things:
1. It prints the message inside the parentheses
2. It pauses your program until you type something and press Enter

Whatever you type gets stored in a "variable" (think of it as a labeled box) so your bot can remember it.`,
            codeExample: `user_name = input("What's your name? ")
print("Nice to meet you, " + user_name + "!")

# The + sign here isn't for math - it's for "sticking text together"`
          },
          {
            title: 'Basic Decision Making (The Thinker)',
            content: `Now for your bot's first "brain cell"! The \`if\` and \`else\` statements let your bot make simple choices based on what the user says.

**Important:** The \`==\` asks "is this exactly equal to?" It's different from a single \`=\` which means "store this in that box."`,
            codeExample: `user_mood = input("How are you feeling today? (Type 'good' or 'bad') ")

# This is where your bot makes a decision!
if user_mood == "good":  # Is user_mood EXACTLY "good"?
    print("That's fantastic! Keep smiling!")
else:  # If it's NOT "good" (meaning "bad" or anything else)
    print("Oh no, I hope your day gets better soon!")

print("Thanks for chatting with me!")`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a bot that asks for your favorite color and then says "Wow, [color] is a beautiful color!" Try it with different colors.',
            solution: `favorite_color = input("What's your favorite color? ")
print("Wow, " + favorite_color + " is a beautiful color!")`,
            hints: [
              'Use input() to ask the question and store the answer',
              'Use print() with + to combine your message with their answer',
              'Remember to put quotes around your text parts'
            ]
          },
          {
            type: 'code',
            question: 'Make a bot that asks if you like pizza and responds differently to "yes" and "no". What happens if someone types something else?',
            solution: `pizza_answer = input("Do you like pizza? (yes/no) ")
if pizza_answer == "yes":
    print("Pizza is amazing! What's your favorite topping?")
else:
    print("That's okay, everyone has different tastes!")`,
            hints: [
              'Use input() to get their answer',
              'Use if/else to check if they said "yes"',
              'The else will catch "no" and anything else they type',
              'Try typing "YES" or "Yes" - what happens? (We\'ll fix this later!)'
            ]
          }
        ]
      }
    },
    tags: ['first-code', 'input-output', 'conditionals', 'interaction']
  },
  {
    id: 'variables-memory',
    title: 'Variables: Your Bot\'s Memory',
    description: 'Understanding how your bot remembers things and why variables are like labeled boxes',
    category: 'Fundamentals',
    difficulty: 'beginner',
    prerequisites: ['bare-bones-bot'],
    nextConcepts: ['making-choices'],
    estimatedTime: 12,
    content: {
      text: {
        sections: [
          {
            title: 'Variables Are Like Labeled Boxes',
            content: `Think of variables as labeled boxes where your bot stores information. When you write \`user_name = "Alice"\`, you're putting "Alice" in a box labeled "user_name".

Your bot can look in that box anytime by using the label. This is how your bot "remembers" things!`,
            codeExample: `# Creating variables (putting things in labeled boxes)
user_name = "Alice"
user_age = 25
user_city = "New York"

# Using variables (looking in the boxes)
print("Hello " + user_name)
print("You are " + str(user_age) + " years old")
print("You live in " + user_city)

# Note: str() converts numbers to text so we can combine them`
          },
          {
            title: 'Different Types of Information',
            content: `Your bot can remember different types of information:

**Text (strings):** Always in quotes - "Hello", "Pizza", "123 Main St"
**Numbers (integers):** No quotes - 25, 100, -5
**Decimal numbers (floats):** No quotes - 3.14, 25.5, -2.7
**True/False (booleans):** Special words - True, False

Python is smart and figures out what type each variable is automatically!`,
            codeExample: `# Different types of variables
bot_name = "ChatBot"        # Text (string)
bot_age = 1                 # Number (integer)  
bot_height = 5.5            # Decimal (float)
bot_is_friendly = True      # True/False (boolean)

# You can check what type something is
print(type(bot_name))       # <class 'str'>
print(type(bot_age))        # <class 'int'>
print(type(bot_height))     # <class 'float'>
print(type(bot_is_friendly)) # <class 'bool'>`
          },
          {
            title: 'Variables Can Change',
            content: `The cool thing about variables is they can change! You can put new things in the same labeled box anytime.`,
            codeExample: `# Variables can change!
mood = "happy"
print("I am " + mood)

mood = "excited"  # Same box, new contents
print("Now I am " + mood)

# You can even do math with number variables
score = 10
print("Score: " + str(score))

score = score + 5  # Add 5 to the current score
print("New score: " + str(score))`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a bot that asks for someone\'s name and age, stores them in variables, then calculates and tells them what year they were born.',
            solution: `name = input("What's your name? ")
age = int(input("How old are you? "))

birth_year = 2024 - age

print("Hello " + name + "!")
print("You were born in " + str(birth_year))`,
            hints: [
              'Use input() to get the name and age',
              'Use int() to convert the age from text to a number',
              'Calculate birth year by subtracting age from current year (2024)',
              'Use str() to convert the birth year back to text for printing'
            ]
          }
        ]
      }
    },
    tags: ['variables', 'memory', 'data-types', 'storage']
  },
  {
    id: 'making-choices',
    title: 'Making Your Bot Smarter with Choices',
    description: 'Teaching your bot to make more complex decisions with if, elif, and else',
    category: 'Logic',
    difficulty: 'beginner',
    prerequisites: ['variables-memory'],
    nextConcepts: ['loops-repetition'],
    estimatedTime: 18,
    content: {
      text: {
        sections: [
          {
            title: 'Beyond Simple If/Else',
            content: `Your bot can make more than just yes/no decisions! With \`elif\` (short for "else if"), your bot can check multiple conditions in order.

Think of it like a flowchart: "If this, do that. Otherwise, if this other thing, do that instead. Otherwise, do this default thing."`,
            codeExample: `age = int(input("How old are you? "))

if age < 13:
    print("You're a kid! Enjoy being young!")
elif age < 20:
    print("You're a teenager! These are exciting years!")
elif age < 65:
    print("You're an adult! Hope you're enjoying life!")
else:
    print("You're a wise elder! Thanks for all your experience!")

print("Age is just a number anyway!")`
          },
          {
            title: 'Making Comparisons',
            content: `Your bot can compare things in many ways:

**==** means "exactly equal to"
**!=** means "not equal to"  
**<** means "less than"
**>** means "greater than"
**<=** means "less than or equal to"
**>=** means "greater than or equal to"`,
            codeExample: `score = int(input("What's your test score? "))

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

print("Your grade is: " + grade)`
          },
          {
            title: 'Handling Different Cases',
            content: `Remember when we tried typing "YES" instead of "yes" and it didn't work? Let's fix that! The \`.lower()\` method converts text to lowercase, so "YES", "yes", and "Yes" all become "yes".`,
            codeExample: `answer = input("Do you want to continue? (yes/no) ")

# Convert to lowercase so YES, yes, Yes all work the same
answer = answer.lower()

if answer == "yes":
    print("Great! Let's keep going!")
elif answer == "no":
    print("Okay, see you later!")
else:
    print("I didn't understand that. Please type 'yes' or 'no'.")

# You can also do it in one line:
# if answer.lower() == "yes":`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a simple restaurant bot that asks what meal they want (breakfast/lunch/dinner) and recommends a dish for each, with a default message for anything else.',
            solution: `meal = input("What meal are you looking for? (breakfast/lunch/dinner) ")
meal = meal.lower()

if meal == "breakfast":
    print("I recommend pancakes with fresh berries!")
elif meal == "lunch":
    print("How about a delicious sandwich and soup?")
elif meal == "dinner":
    print("Try our famous pasta with garlic bread!")
else:
    print("I'm not sure about that meal. We serve breakfast, lunch, and dinner!")`,
            hints: [
              'Use input() to ask about the meal',
              'Use .lower() to handle different capitalizations',
              'Use if/elif/else to check for each meal type',
              'Include a helpful else message for unexpected inputs'
            ]
          },
          {
            type: 'code',
            question: 'Make a "Magic 8-Ball" bot that asks a yes/no question, then gives a random response. Use a number input (1-3) to pick from three different answers.',
            solution: `question = input("Ask me a yes/no question: ")
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
    print("Please pick 1, 2, or 3 next time!")`,
            hints: [
              'Ask for their question first (just for fun)',
              'Get a number from 1-3 using int(input())',
              'Use if/elif/else to give different responses',
              'The \\n in the print makes a blank line for better formatting'
            ]
          }
        ]
      }
    },
    tags: ['conditionals', 'logic', 'elif', 'comparisons', 'decision-making']
  },
  {
    id: 'loops-repetition',
    title: 'Loops: Making Your Bot Repeat Things',
    description: 'Teaching your bot to do things over and over without getting tired',
    category: 'Control Flow',
    difficulty: 'beginner',
    prerequisites: ['making-choices'],
    nextConcepts: ['api-superpower'],
    estimatedTime: 20,
    content: {
      text: {
        sections: [
          {
            title: 'Why Loops Are Awesome',
            content: `Imagine you want your bot to count to 10. You could write 10 print statements... or you could use a loop! Loops let your bot repeat actions without you having to write the same code over and over.

There are two main types: **for loops** (when you know how many times) and **while loops** (when you want to keep going until something happens).`,
            codeExample: `# The hard way (don't do this!)
print("1")
print("2")
print("3")
# ... this would take forever!

# The smart way with a for loop
for number in range(1, 11):  # 1 to 10
    print(number)

print("Done counting!")`
          },
          {
            title: 'For Loops: When You Know How Many Times',
            content: `For loops are perfect when you know exactly how many times you want to repeat something. The \`range()\` function creates a sequence of numbers for you.

**range(5)** gives you: 0, 1, 2, 3, 4 (5 numbers starting from 0)
**range(1, 6)** gives you: 1, 2, 3, 4, 5 (from 1 to 5)
**range(0, 10, 2)** gives you: 0, 2, 4, 6, 8 (every 2nd number)`,
            codeExample: `# Greet the user multiple times
for i in range(3):
    print("Hello there! This is greeting number " + str(i + 1))

print()  # Empty line for spacing

# Countdown
print("Rocket launch countdown:")
for count in range(10, 0, -1):  # Count backwards from 10 to 1
    print(str(count) + "...")
print("Blast off! 🚀")`
          },
          {
            title: 'While Loops: Keep Going Until...',
            content: `While loops keep repeating as long as a condition is True. They're perfect for making your bot keep asking questions until the user wants to quit.

**Important:** Make sure your while loop can eventually stop, or it will run forever! Always include a way for the condition to become False.`,
            codeExample: `# Keep asking until they say "quit"
print("I'm a chatty bot! Type 'quit' when you want to stop.")

while True:  # This means "keep going forever"
    user_input = input("Say something to me: ")
    
    if user_input.lower() == "quit":
        print("Goodbye! It was fun chatting!")
        break  # This stops the loop
    else:
        print("You said: " + user_input)
        print("That's interesting! Tell me more.")

print("Thanks for chatting with me!")`
          },
          {
            title: 'Combining Loops with Choices',
            content: `The real magic happens when you combine loops with if/else statements. Now your bot can have ongoing conversations and make different responses based on what the user says!`,
            codeExample: `print("Welcome to the Mood Bot! I'll help track your mood.")
print("Type 'done' when you want to finish.")

mood_count = 0

while True:
    mood = input("\\nHow are you feeling right now? ")
    
    if mood.lower() == "done":
        print("\\nThanks for sharing! You told me about " + str(mood_count) + " moods.")
        break
    
    mood_count = mood_count + 1  # Count how many moods they shared
    
    if mood.lower() == "happy":
        print("That's wonderful! Keep that positive energy!")
    elif mood.lower() == "sad":
        print("I'm sorry you're feeling down. Tomorrow is a new day!")
    elif mood.lower() == "excited":
        print("Your excitement is contagious! What's got you so pumped?")
    else:
        print("Thanks for sharing that you're feeling " + mood + ".")
    
    print("Feelings are important to acknowledge.")`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a "Compliment Bot" that asks for the user\'s name, then gives them 3 different compliments using a for loop.',
            solution: `name = input("What's your name? ")

compliments = [
    "You have a great sense of humor!",
    "You're really good at learning new things!",
    "You have a wonderful personality!"
]

print("\\nHere are some compliments for you, " + name + ":")

for i in range(3):
    print(str(i + 1) + ". " + compliments[i])

print("\\nYou're awesome, " + name + "! 😊")`,
            hints: [
              'Ask for their name first',
              'Create a list of compliments (we\'ll learn more about lists later)',
              'Use a for loop with range(3) to give 3 compliments',
              'Use str(i + 1) to number the compliments 1, 2, 3'
            ]
          },
          {
            type: 'code',
            question: 'Make a "Guessing Game" bot that thinks of a number (let\'s say 7) and keeps asking the user to guess until they get it right.',
            solution: `secret_number = 7
print("I'm thinking of a number between 1 and 10!")
print("Can you guess what it is?")

while True:
    guess = int(input("Your guess: "))
    
    if guess == secret_number:
        print("🎉 Congratulations! You got it!")
        print("The number was " + str(secret_number))
        break
    elif guess < secret_number:
        print("Too low! Try a higher number.")
    else:
        print("Too high! Try a lower number.")

print("Thanks for playing!")`,
            hints: [
              'Set a secret number at the start',
              'Use while True: to keep asking for guesses',
              'Use int(input()) to get their guess as a number',
              'Compare their guess to your secret number',
              'Use break to stop the loop when they guess correctly'
            ]
          }
        ]
      }
    },
    tags: ['loops', 'for-loops', 'while-loops', 'repetition', 'control-flow']
  },
  {
    id: 'api-superpower',
    title: 'Giving Your Bot a Superpower: Using APIs',
    description: 'Connect your bot to the internet to get jokes, facts, and other cool information!',
    category: 'APIs',
    difficulty: 'intermediate',
    prerequisites: ['loops-repetition'],
    nextConcepts: ['making-bot-unique'],
    estimatedTime: 25,
    content: {
      text: {
        sections: [
          {
            title: 'What\'s an API Again?',
            content: `Remember our library analogy? An API is like a librarian who can instantly get you any book (information) you ask for. Instead of your bot making up jokes or weather data, it can ask specialized services for that information.

**The best part:** Many APIs are completely free to use for learning! We'll start with a super simple one that gives us dad jokes.`,
            codeExample: `# This is what we're building towards:
# A bot that can get fresh jokes from the internet!

import requests  # This is our "library card" for talking to websites

def get_dad_joke():
    # Ask the joke service for a joke
    response = requests.get("https://icanhazdadjoke.com/", 
                          headers={"Accept": "application/json"})
    joke_data = response.json()
    return joke_data["joke"]

# Now our bot can tell internet jokes!
print(get_dad_joke())`
          },
          {
            title: 'Installing the Requests Library',
            content: `Before we can talk to APIs, we need to install a special tool called \`requests\`. Think of it as getting a library card that lets your bot visit websites and ask for information.

**In Replit:** Good news! It's usually already installed. If not, you can install it by typing this in the terminal (the black area):

\`pip install requests\`

**What this does:** \`pip\` is Python's tool for adding new features. \`install requests\` gets the "requests" library and adds it to your Python setup.`,
            codeExample: `# First, we need to import (bring in) the requests library
import requests

# Test if it's working
print("Requests library is ready!")
print("Now we can talk to websites and APIs!")`
          },
          {
            title: 'Your First API Call',
            content: `Let's break down what happens when your bot talks to an API:

1. **requests.get()** - Your bot "visits" the API's website
2. **headers** - Your bot politely asks for the data in a computer-friendly format (JSON)
3. **response.json()** - Your bot translates the response into Python data
4. **joke_data["joke"]** - Your bot picks out just the joke part

It's like ordering at a restaurant: you ask for a specific dish, they bring you a whole tray, and you pick out what you want to eat.`,
            codeExample: `import requests

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
print(joke)`
          },
          {
            title: 'Building a Joke Bot',
            content: `Now let's put it all together into a real bot that can tell jokes on demand! We'll combine everything we've learned: loops, user input, and APIs.`,
            codeExample: `import requests

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
        print("I only know how to tell jokes! Type 'joke' or 'quit'.")`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Modify the joke bot to keep track of how many jokes it has told, and display the count each time.',
            solution: `import requests

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
        print("Type 'joke' or 'quit'!")`,
            hints: [
              'Create a joke_count variable before the loop',
              'Add 1 to joke_count each time you tell a joke',
              'Display the count when telling each joke',
              'Show the total count when they quit'
            ]
          },
          {
            type: 'code',
            question: 'Create a "Fact Bot" using the Numbers API (http://numbersapi.com/random). Make it get random number facts instead of jokes.',
            solution: `import requests

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
        print("Type 'fact' or 'quit'!")`,
            hints: [
              'Use http://numbersapi.com/random as the URL',
              'This API returns plain text, so use response.text instead of response.json()',
              'Change the prompts to ask for "fact" instead of "joke"',
              'The structure is very similar to the joke bot'
            ]
          }
        ]
      }
    },
    tags: ['api', 'requests', 'internet', 'json', 'external-data']
  },
  {
    id: 'making-bot-unique',
    title: 'Making Your Bot Unique',
    description: 'Add personality, multiple features, and make your bot truly your own!',
    category: 'Customization',
    difficulty: 'intermediate',
    prerequisites: ['api-superpower'],
    nextConcepts: ['ready-set-code'],
    estimatedTime: 30,
    content: {
      text: {
        sections: [
          {
            title: 'Brainstorming Your Bot\'s Personality',
            content: `Now comes the fun part! What kind of bot do you want to create? Think about the Codedx challenge themes:

**🌱 Plant Whisperer:** Gives plant care advice, identifies plants, shares gardening tips
**✈️ Travel Guru:** Suggests destinations, shares travel facts, gives packing tips  
**🤖 AI BFF:** A friendly companion that remembers things about you, gives encouragement
**🍕 Food Expert:** Recommends recipes, shares cooking tips, suggests restaurants
**📚 Study Buddy:** Helps with homework, gives study tips, creates quizzes

**Your bot's personality affects:**
- How it greets users
- What kind of responses it gives  
- What APIs it uses
- How it handles errors`,
            codeExample: `# Example: A friendly, encouraging bot personality
def bot_greeting():
    return "Hey there, friend! 😊 I'm here to help and chat!"

def bot_encouragement():
    encouragements = [
        "You're doing great!",
        "Keep up the awesome work!",
        "I believe in you!",
        "You've got this!"
    ]
    import random
    return random.choice(encouragements)`
          },
          {
            title: 'Adding Multiple Features with elif',
            content: `Instead of just telling jokes, let's make a bot that can do several things! We'll use \`elif\` to check for different commands.`,
            codeExample: `import requests
import random

def get_dad_joke():
    try:
        response = requests.get("https://icanhazdadjoke.com/", 
                               headers={"Accept": "application/json"})
        return response.json()["joke"]
    except:
        return "Sorry, joke service is down!"

def get_encouragement():
    encouragements = [
        "You're amazing just as you are!",
        "Every day is a new opportunity!",
        "You have the power to make today great!",
        "Believe in yourself - I do!"
    ]
    return random.choice(encouragements)

def get_fun_fact():
    try:
        response = requests.get("http://numbersapi.com/random")
        return response.text
    except:
        return "Here's a fact: You're awesome for learning to code!"

# Multi-feature bot
print("🤖 Hi! I'm your Multi-Bot! I can do lots of things!")
print("Commands: joke, encourage, fact, help, quit")

while True:
    command = input("\\nWhat can I do for you? ").lower()
    
    if command == "quit":
        print("Goodbye! You're going to do amazing things! 🌟")
        break
    elif command == "joke":
        print("😄 " + get_dad_joke())
    elif command == "encourage":
        print("💪 " + get_encouragement())
    elif command == "fact":
        print("🧠 " + get_fun_fact())
    elif command == "help":
        print("I can: tell jokes, give encouragement, share facts!")
        print("Just type: joke, encourage, fact, help, or quit")
    else:
        print("🤔 I don't know that command. Type 'help' to see what I can do!")`
          },
          {
            title: 'Adding Randomness and Variety',
            content: `To make your bot feel more natural, add some randomness! Instead of always saying the same thing, your bot can pick from different responses.`,
            codeExample: `import random

# Lists of different responses
greetings = [
    "Hello there!",
    "Hey, what's up?",
    "Greetings, human!",
    "Hi there, friend!",
    "Welcome back!"
]

goodbyes = [
    "See you later!",
    "Goodbye for now!",
    "Until next time!",
    "Take care!",
    "Catch you later!"
]

confused_responses = [
    "I'm not sure what you mean.",
    "Could you try that again?",
    "I didn't quite understand that.",
    "Hmm, I'm confused. Can you rephrase?",
    "That's not something I know how to do."
]

# Using random responses
print(random.choice(greetings))

# Later in your bot...
if command not in ["joke", "encourage", "fact", "help", "quit"]:
    print(random.choice(confused_responses))`
          },
          {
            title: 'Remembering User Information',
            content: `Make your bot more personal by remembering things about the user! We can store information in variables and use it throughout the conversation.`,
            codeExample: `import random

# Store user information
user_name = ""
favorite_color = ""
mood_today = ""

print("🤖 Hello! I'm PersonalBot. I like getting to know people!")

# Get to know the user
user_name = input("What's your name? ")
print(f"Nice to meet you, {user_name}!")

favorite_color = input("What's your favorite color? ")
print(f"{favorite_color} is a beautiful color, {user_name}!")

mood_today = input("How are you feeling today? ")
print(f"Thanks for sharing that you're feeling {mood_today}.")

print(f"\\nOkay {user_name}, now I know a bit about you!")
print("Type 'chat' to talk, or 'quit' to leave.")

while True:
    command = input("\\n> ").lower()
    
    if command == "quit":
        print(f"Goodbye {user_name}! I hope your {favorite_color} day gets even better!")
        break
    elif command == "chat":
        responses = [
            f"So {user_name}, tell me more about yourself!",
            f"I remember you like {favorite_color}. What else do you enjoy?",
            f"Since you're feeling {mood_today}, what usually makes you happy?",
            f"You seem really nice, {user_name}. What's your favorite hobby?"
        ]
        print(random.choice(responses))
    else:
        print(f"Just type 'chat' to talk with me, {user_name}, or 'quit' to leave!")`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a "Study Buddy Bot" that can give study tips, motivational quotes, and quiz the user with simple math problems. Include at least 3 different features.',
            solution: `import random

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
        print("Type 'help' to see what I can do for your studies!")`,
            hints: [
              'Create separate functions for each feature',
              'Use lists and random.choice() for variety',
              'For the quiz, generate random numbers and check the user\'s answer',
              'Make the responses encouraging and study-focused',
              'Include a help command to explain all features'
            ]
          },
          {
            type: 'code',
            question: 'Design a "Mood Tracker Bot" that asks about the user\'s mood, remembers previous moods in a list, and can show a summary of how they\'ve been feeling.',
            solution: `import random

# Store mood history
mood_history = []
user_name = ""

def add_mood(mood):
    mood_history.append(mood)
    responses = [
        f"Thanks for sharing that you're feeling {mood}.",
        f"I've noted that you're {mood} today.",
        f"Feeling {mood} is totally valid.",
        f"I appreciate you telling me you're {mood}."
    ]
    return random.choice(responses)

def show_mood_summary():
    if not mood_history:
        return "You haven't shared any moods with me yet!"
    
    summary = f"You've shared {len(mood_history)} moods with me:\\n"
    for i, mood in enumerate(mood_history, 1):
        summary += f"{i}. {mood}\\n"
    
    # Find most common mood
    if mood_history:
        most_common = max(set(mood_history), key=mood_history.count)
        summary += f"\\nYou seem to feel '{most_common}' quite often!"
    
    return summary

def get_mood_advice(mood):
    if mood.lower() in ["sad", "down", "depressed", "upset"]:
        return "Remember: tough times don't last, but tough people do! 💪"
    elif mood.lower() in ["happy", "great", "amazing", "excited"]:
        return "That's wonderful! Keep spreading those positive vibes! ✨"
    elif mood.lower() in ["tired", "exhausted", "sleepy"]:
        return "Rest is important! Make sure you're getting enough sleep. 😴"
    else:
        return "All feelings are valid. Thanks for sharing with me! 🤗"

print("🌈 Hello! I'm MoodBot. I help you track and understand your feelings.")
user_name = input("What's your name? ")
print(f"Nice to meet you, {user_name}! Let's start tracking your moods.")
print("Commands: mood, summary, advice, help, quit")

while True:
    command = input(f"\\nHi {user_name}, what would you like to do? ").lower()
    
    if command == "quit":
        print(f"Goodbye {user_name}! Remember to check in with your feelings regularly! 💝")
        break
    elif command == "mood":
        current_mood = input("How are you feeling right now? ")
        print(add_mood(current_mood))
    elif command == "summary":
        print("📊 " + show_mood_summary())
    elif command == "advice":
        if mood_history:
            latest_mood = mood_history[-1]
            print("💭 " + get_mood_advice(latest_mood))
        else:
            print("Share a mood with me first, then I can give advice!")
    elif command == "help":
        print("I can track your moods and give summaries!")
        print("Commands: mood (add a mood), summary (see all moods), advice (get mood advice), help, quit")
    else:
        print("Type 'help' to see what I can do!")`,
            hints: [
              'Use a list to store all the moods they share',
              'Create functions for adding moods, showing summaries, and giving advice',
              'Use enumerate() to number the moods in the summary',
              'Give different advice based on the type of mood',
              'Remember their name and use it throughout the conversation'
            ]
          }
        ]
      }
    },
    tags: ['personality', 'customization', 'multiple-features', 'randomness', 'memory']
  },
  {
    id: 'ready-set-code',
    title: 'Ready, Set, Code!',
    description: 'You\'re now ready to tackle the Codedx challenge with confidence! Here\'s your roadmap to success.',
    category: 'Conclusion',
    difficulty: 'beginner',
    prerequisites: ['making-bot-unique'],
    nextConcepts: [],
    estimatedTime: 15,
    content: {
      text: {
        sections: [
          {
            title: 'Look How Far You\'ve Come!',
            content: `🎉 **Congratulations!** You've just learned all the core ingredients of bot building:

**✅ Listening:** Getting input from users with \`input()\`
**✅ Thinking:** Making decisions with \`if/elif/else\`  
**✅ Talking:** Responding with \`print()\` and personality
**✅ Remembering:** Storing information in variables
**✅ Repeating:** Using loops to keep conversations going
**✅ Connecting:** Using APIs to access internet data
**✅ Personalizing:** Adding unique features and randomness

This is a **massive achievement!** You've gone from never coding to building interactive bots that connect to the internet. That's seriously impressive! 🌟`
          },
          {
            title: 'Connecting to the Codedx Challenge',
            content: `Remember when the Codedx "Build-A-Bot" challenge seemed scary? Look at it now - you have all the tools!

**The challenge asks for:**
- ✅ A bot that accepts user input → You know \`input()\`
- ✅ Responds helpfully → You know \`if/else\` and personality
- ✅ Uses at least one API → You know \`requests\` and JSON

**You're not just ready - you're prepared to excel!** The challenge is simply about taking these building blocks and combining them creatively to solve a problem or create a fun character.

**Popular challenge ideas you can now build:**
- 🌱 **Plant Whisperer:** Use a plant care API + your conversation skills
- ✈️ **Travel Guru:** Combine weather APIs + travel advice + personality  
- 🤖 **AI BFF:** Use multiple APIs + memory + encouragement
- 🍕 **Food Expert:** Recipe APIs + restaurant suggestions + food facts`
          },
          {
            title: 'Your Success Strategy',
            content: `**Start Small, Then Expand:**
1. Pick ONE main feature (jokes, facts, advice, etc.)
2. Get basic conversation working with \`while True\` loop
3. Add your chosen API
4. Test everything works
5. THEN add personality, multiple features, memory

**Break Big Ideas Into Small Pieces:**
- "Travel bot" → Start with just weather for one city
- "Plant whisperer" → Start with just basic plant care tips
- "Study buddy" → Start with just math quizzes

**Use the Community:**
- The Codedx community is there to help!
- Ask questions, share your progress
- Don't be afraid to show work-in-progress

**Most Important: Have Fun!**
This is a creative exercise. Enjoy the process of bringing your bot to life. Every "error" is just a learning opportunity in disguise! 🚀`
          },
          {
            title: 'Quick Reference: Your Bot Building Toolkit',
            content: `Keep this handy while building your challenge bot:`,
            codeExample: `# Essential Bot Structure
import requests
import random

# Bot personality
def bot_greeting():
    return "Hello! I'm [YourBotName]!"

# API function
def get_api_data():
    try:
        response = requests.get("YOUR_API_URL")
        return response.json()  # or response.text
    except:
        return "Sorry, couldn't get that info right now!"

# Main conversation loop
print(bot_greeting())
print("Commands: [list your commands], help, quit")

while True:
    user_input = input("\\n> ").lower()
    
    if user_input == "quit":
        print("Goodbye! [Encouraging message]")
        break
    elif user_input == "help":
        print("I can: [list features]")
    elif user_input == "[your_command]":
        print(get_api_data())
    else:
        print("Type 'help' to see what I can do!")

# Remember: Test each piece before adding the next!`
          },
          {
            title: 'Where to Go Next (For the Curious!)',
            content: `You've built a solid foundation! Here are some ideas for your next learning adventures:

**More APIs to Explore:**
- Weather: OpenWeatherMap API
- News: NewsAPI  
- Images: Unsplash API
- Quotes: Quotable API
- Trivia: Open Trivia Database

**Advanced Features (After the Challenge):**
- Save conversation history to a file
- Create a simple web interface with Flask
- Add text processing with NLTK for "smarter" responses
- Connect to Discord or Telegram to make your bot available to friends

**But for now:** Focus on the challenge! You have everything you need to create something amazing. The world needs more creative, helpful bots - and you're about to build one! 💪`
          }
        ]
      }
    },
    tags: ['conclusion', 'challenge-prep', 'success-strategy', 'next-steps']
  }
];