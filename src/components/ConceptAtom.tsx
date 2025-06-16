import { ConceptAtomType } from '../types';

export const conceptAtoms: ConceptAtomType[] = [
  {
    id: 'setup-playground',
    title: 'Setting Up Your Development Environment',
    description: 'Configure your Python environment and write your first program',
    category: 'Setup',
    difficulty: 'beginner',
    prerequisites: [],
    nextConcepts: ['what-is-a-bot'],
    estimatedTime: 15,
    content: {
      text: {
        sections: [
          {
            title: 'Tutorial Steps',
            content: `This first lesson prepares your environment so the rest of the course runs smoothly.

**Step 1: Choose Your Development Environment**

You need a place to write and run Python code. You have several options:
• **Online Editors**: Replit, CodePen, or Trinket (no installation required)
• **Local Installation**: Install Python on your computer with an editor like VS Code
• **IDEs**: PyCharm, Thonny, or IDLE (comes with Python)

Once you pick a platform, you're ready to test it.

**Step 2: Test Your Setup**

Run a small program to confirm Python is available.

**Step 3: Understand the Output**

If you see "Hello, Python!" in your terminal, everything is working.

**Step 4: Experiment**

Try changing the message inside the quotes and run it again. Notice how the output changes—your first interaction with Python!

**Common Errors**
- `'python' is not recognized` – install Python and check your PATH
- `SyntaxError` from mismatched quotes or parentheses`,
            codeExample: `# Your first Python program
print("Hello, Python!")  # Display a greeting

# Try changing this message
print("I'm learning to code!")  # A second line of output

# You can print multiple lines
print("Line 1")  # First line
print("Line 2")  # Second line
print("Line 3")  # Third line`
          },
          {
            title: 'Understanding Development Environments',
            content: `A development environment is your workspace for writing code. It consists of:

**Text Editor/IDE**: Where you write your code
**Python Interpreter**: The program that runs your Python code
**Terminal/Console**: Where you see output and run commands
**File System**: Where your code files are stored

**Key Concepts:**
- **Source Code**: The human-readable instructions you write
- **Execution**: When the computer runs your code
- **Output**: What your program displays or produces
- **Debugging**: Finding and fixing errors in your code

**Troubleshooting Tips**
- If nothing prints, ensure you're running the correct file
- Check file extensions: use ".py" for Python scripts`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Write a program that prints your name, your favorite programming language, and today\'s date on separate lines.',
            solution: `print("My name is: John Doe")
print("Favorite language: Python")
print("Today's date: 2024-01-15")`,
            hints: [
              'Use three separate print() statements',
              'Put your text inside quotes',
              'Each print() creates a new line automatically'
            ]
          }
        ]
      }
    },
    tags: ['setup', 'environment', 'python-basics', 'syntax']
  },
  {
    id: 'what-is-a-bot',
    title: 'Understanding Bots and Automation',
    description: 'Learn what bots are, how they work, and their role in modern software',
    category: 'Concepts',
    difficulty: 'beginner',
    prerequisites: ['setup-playground'],
    nextConcepts: ['bare-bones-bot'],
    estimatedTime: 12,
    content: {
      text: {
        sections: [
          {
            title: 'Tutorial Steps',
            content: `Now that your environment is configured, let's look at what a bot actually is.

**Step 1: Define What a Bot Is**

A bot is a program that automates tasks by following predefined rules. In our context, we're building conversational bots that:
• Accept user input
• Process that input according to programmed logic
• Provide appropriate responses

**Step 2: Understand the Input-Process-Output Model**

Every bot follows this pattern:
1. **Input**: Receive data (text, commands, signals)
2. **Process**: Apply logic to determine the appropriate response
3. **Output**: Return a result (text, actions, API calls)

**Step 3: Identify Bot Applications**

Bots are used for:
• Customer service automation
• Data processing and analysis
• Social media management
• Game automation
• Personal assistants

**Step 4: Plan Your Bot's Purpose**

Before coding, decide what your bot will do. Will it provide information, entertain users, solve problems, or automate tasks?

**Common Errors**
- Not handling unexpected input
- Trying to build everything at once`,
            codeExample: `# Simple bot demonstration
# Shows the input-process-output pattern

# Input: Get user's name
user_name = input("What's your name? ")  # Wait for user input

# Process: Create a personalized greeting
greeting = f"Hello, {user_name}! Welcome to bot programming."  # Build response

# Output: Display the result
print(greeting)  # Send greeting back`
          },
          {
            title: 'Bot Architecture and Design Patterns',
            content: `**State Management**: Bots often need to remember information across interactions. This requires:
- Variable storage for temporary data
- File systems or databases for persistent data
- Session management for multi-turn conversations

**Event-Driven Programming**: Bots respond to events:
- User messages
- Timer events
- External API responses
- System notifications

**Modular Design**: Well-designed bots separate concerns:
- Input handling
- Business logic
- Output formatting
- External integrations`
          }
        ]
      }
    },
    tags: ['concepts', 'automation', 'architecture', 'design-patterns']
  },
  {
    id: 'bare-bones-bot',
    title: 'Building Your First Interactive Bot',
    description: 'Create a basic bot that can receive input, make decisions, and respond',
    category: 'Implementation',
    difficulty: 'beginner',
    prerequisites: ['what-is-a-bot'],
    nextConcepts: ['variables-memory'],
    estimatedTime: 20,
    content: {
      text: {
        sections: [
          {
            title: 'Tutorial Steps',
            content: `Building on the previous lesson, let's code a real bot.

**Step 1: Create a Simple Output Bot**

Start with a bot that just displays a message:

\`\`\`python
print("Hello! I am your first bot.")
print("I'm here to help you learn programming.")
\`\`\`

**Step 2: Add User Input**

Make your bot interactive by accepting user input:

\`\`\`python
user_name = input("What's your name? ")
print(f"Nice to meet you, {user_name}!")
\`\`\`

**Step 3: Implement Basic Decision Making**

Add conditional logic to make your bot respond differently:

\`\`\`python
mood = input("How are you feeling today? (good/bad) ")

if mood == "good":
    print("That's wonderful! I'm glad you're having a good day.")
elif mood == "bad":
    print("I'm sorry to hear that. I hope things improve soon.")
else:
    print("Thanks for sharing. Every day has its ups and downs.")
\`\`\`

**Step 4: Combine Everything**

Put all the pieces together into a complete program that demonstrates input, processing, and output.

**Common Errors**
- Forgetting to convert user input types
- Indentation mistakes in if/else blocks`,
            codeExample: `# Complete basic bot example
print("=== Welcome to ChatBot v1.0 ===")  # Intro text
print("I'm a simple bot that can have basic conversations.")  # Explain purpose

# Get user information
name = input("\\nWhat's your name? ")  # Ask for their name
print(f"Hello, {name}! Nice to meet you.")  # Respond with greeting

# Ask about their day
mood = input("How has your day been? (great/okay/rough) ")  # Get mood

# Respond based on their input
if mood.lower() == "great":
    print("That's fantastic! I love hearing about good days.")  # Positive path
    follow_up = input("What made it so great? ")  # Ask for details
    print(f"That sounds amazing, {name}!")  # Echo response
elif mood.lower() == "okay":
    print("Okay days are perfectly normal. Not every day can be extraordinary.")  # Neutral path
elif mood.lower() == "rough":
    print("I'm sorry you've had a tough day. Tomorrow is a fresh start.")  # Empathetic path
else:
    print(f"Thanks for sharing, {name}. I appreciate your honesty.")  # Default path

print("\\nThanks for chatting with me! Have a wonderful rest of your day.")  # Farewell`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a bot that asks for the user\'s favorite color and responds with a compliment about that color. Include handling for at least 3 different colors.',
            solution: `print("Color Compliment Bot")
print("I love talking about colors!")

color = input("What's your favorite color? ").lower()

if color == "blue":
    print("Blue is such a calming and peaceful color!")
elif color == "red":
    print("Red shows passion and energy - great choice!")
elif color == "green":
    print("Green represents nature and growth. Very refreshing!")
elif color == "purple":
    print("Purple is the color of creativity and royalty!")
else:
    print(f"{color.title()} is a beautiful color! You have great taste.")

print("Thanks for sharing your favorite color with me!")`,
            hints: [
              'Use input() to get their favorite color',
              'Convert to lowercase with .lower() for easier comparison',
              'Use if/elif/else to handle different colors',
              'Include a general response for colors you didn\'t specifically handle'
            ]
          }
        ]
      }
    },
    tags: ['input-output', 'conditionals', 'user-interaction', 'basic-logic']
  },
  {
    id: 'variables-memory',
    title: 'Variables and Data Management',
    description: 'Master variables, data types, and how programs store and manipulate information',
    category: 'Fundamentals',
    difficulty: 'beginner',
    prerequisites: ['bare-bones-bot'],
    nextConcepts: ['making-choices'],
    estimatedTime: 18,
    content: {
      text: {
        sections: [
          {
            title: 'Tutorial Steps',
            content: `Your bot now collects input; let's store that information.

**Step 1: Understand Variables as Storage**

Variables are named containers that store data. Think of them as labeled boxes:

\`\`\`python
user_name = "Alice"        # String variable
user_age = 25             # Integer variable
user_height = 5.6         # Float variable
is_student = True         # Boolean variable
\`\`\`

**Step 2: Learn Data Types**

Python has several built-in data types:
• **Strings (str)**: Text data in quotes
• **Integers (int)**: Whole numbers
• **Floats (float)**: Decimal numbers
• **Booleans (bool)**: True or False values

**Step 3: Practice Variable Assignment**

Create variables and observe how they store different types of data.

**Step 4: Modify Variables**

Variables can be updated with new values throughout your program.

**Common Errors**
- Mixing string and number types without conversion
- Forgetting quotes around string data`,
            codeExample: `# Comprehensive variable example
print("=== User Profile Bot ===")  # Program title

# Collect user information
name = input("Enter your name: ")  # User name as string
age = int(input("Enter your age: "))  # Convert to integer
height = float(input("Enter your height in feet: "))  # Convert to float
is_student = input("Are you a student? (yes/no): ").lower() == "yes"  # Boolean

# Calculate derived information
birth_year = 2024 - age  # Calculate birth year
height_cm = height * 30.48  # Convert feet to centimeters

# Display profile
print(f"\\n=== Profile for {name} ===")  # Heading
print(f"Age: {age} years old")  # Display age
print(f"Birth Year: {birth_year}")  # Show birth year
print(f"Height: {height} feet ({height_cm:.1f} cm)")  # Height in both units
print(f"Student Status: {'Student' if is_student else 'Not a student'}")  # Conditional output

# Demonstrate variable modification
print(f"\\nNext year, {name} will be {age + 1} years old!")  # Demonstrate arithmetic

# Show data types
print(f"\\n=== Data Types ===")  # Show data types
print(f"name is a {type(name).__name__}")  # str
print(f"age is a {type(age).__name__}")  # int
print(f"height is a {type(height).__name__}")  # float
print(f"is_student is a {type(is_student).__name__}")  # bool`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a bot that calculates and displays someone\'s BMI (Body Mass Index). Ask for height in meters and weight in kilograms, then calculate BMI = weight / (height^2).',
            solution: `print("BMI Calculator Bot")
print("I'll help you calculate your Body Mass Index")

# Get user input
name = input("What's your name? ")
weight = float(input("Enter your weight in kilograms: "))
height = float(input("Enter your height in meters: "))

# Calculate BMI
bmi = weight / (height ** 2)

# Determine BMI category
if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal weight"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"

# Display results
print(f"\\n=== BMI Results for {name} ===")
print(f"Weight: {weight} kg")
print(f"Height: {height} m")
print(f"BMI: {bmi:.2f}")
print(f"Category: {category}")

print("\\nNote: BMI is a general indicator. Consult healthcare professionals for personalized advice.")`,
            hints: [
              'Use float() to convert height and weight inputs to numbers',
              'BMI formula: weight / (height^2) - use ** for exponentiation',
              'Use :.2f in f-strings to round to 2 decimal places',
              'Create categories based on standard BMI ranges'
            ]
          }
        ]
      }
    },
    tags: ['variables', 'data-types', 'memory', 'type-conversion']
  },
  {
    id: 'making-choices',
    title: 'Advanced Decision Making and Logic',
    description: 'Master complex conditional logic, boolean operations, and decision trees',
    category: 'Logic',
    difficulty: 'beginner',
    prerequisites: ['variables-memory'],
    nextConcepts: ['loops-repetition'],
    estimatedTime: 25,
    content: {
      text: {
        sections: [
          {
            title: 'Tutorial Steps',
            content: `With variables under your belt, it's time to make decisions.

**Step 1: Master Multiple Conditions with elif**

Use elif to check multiple conditions in sequence:

\`\`\`python
score = int(input("Enter your test score: "))

if score >= 90:
    grade = "A"
    message = "Excellent work!"
elif score >= 80:
    grade = "B"
    message = "Good job!"
elif score >= 70:
    grade = "C"
    message = "Satisfactory"
elif score >= 60:
    grade = "D"
    message = "Needs improvement"
else:
    grade = "F"
    message = "Please study more"

print(f"Grade: {grade} - {message}")
\`\`\`

**Step 2: Use Logical Operators**

Combine conditions with and, or, and not:

\`\`\`python
age = int(input("Enter your age: "))
has_license = input("Do you have a license? (yes/no): ").lower() == "yes"

if age >= 18 and has_license:
    print("You can drive!")
elif age >= 18 and not has_license:
    print("You're old enough but need a license.")
else:
    print("You're too young to drive.")
\`\`\`

**Step 3: Handle String Comparisons Properly**

Make comparisons case-insensitive and handle variations:

\`\`\`python
answer = input("Do you want to continue? (yes/no): ").lower().strip()

if answer in ["yes", "y", "yeah", "yep"]:
    print("Great! Let's continue.")
elif answer in ["no", "n", "nope", "nah"]:
    print("Okay, stopping here.")
else:
    print("Please answer yes or no.")
\`\`\`

**Step 4: Build Complex Decision Trees**

Create sophisticated logic that handles multiple scenarios and edge cases.

**Common Errors**
- Misplacing colons or indentation in if/elif blocks
- Using `=` instead of `==` for comparisons`,
            codeExample: `# Advanced restaurant recommendation bot
print("=== Restaurant Recommendation Bot ===")  # Title

# Gather preferences
cuisine = input("What type of cuisine? (italian/chinese/mexican/american): ").lower()  # Preferred food
budget = input("What's your budget? (low/medium/high): ").lower()  # Price range
dietary = input("Any dietary restrictions? (none/vegetarian/vegan/gluten-free): ").lower()  # Dietary needs
group_size = int(input("How many people in your group? "))  # Number of diners

print("\\n=== Analyzing your preferences... ===")  # Inform user

# Complex decision logic
if cuisine == "italian":  # Cuisine branch
    if budget == "high" and group_size <= 4:
        restaurant = "Bella Vista (upscale Italian)"  # Fancy option
        price_range = "$$$"
    elif budget == "medium":
        restaurant = "Tony's Pizzeria"  # Moderate option
        price_range = "$$"
    else:
        restaurant = "Little Italy Cafe"  # Budget option
        price_range = "$"
elif cuisine == "chinese":  # Chinese food branch
    if dietary == "vegan":
        restaurant = "Green Dragon (vegan Chinese)"  # Vegan friendly
    elif budget == "high":
        restaurant = "Golden Palace"  # Upscale option
        price_range = "$$$"
    else:
        restaurant = "Panda Express"  # Fast-food fallback
        price_range = "$"
elif cuisine == "mexican":  # Mexican food branch
    if dietary in ["vegetarian", "vegan"] and budget != "low":
        restaurant = "Verde Mexican Grill"  # Veg-friendly option
    elif group_size > 6:
        restaurant = "Casa Grande (family style)"  # Big groups
    else:
        restaurant = "Taco Bell"  # Cheap eats
        price_range = "$"
else:
    restaurant = "The Local Diner (American classics)"  # Default choice
    price_range = "$$"

# Additional considerations
if dietary == "gluten-free":
    print("Note: Please confirm gluten-free options when you call.")  # Warn user

if group_size > 8:
    print("Recommendation: Call ahead for large group reservations.")  # Large group tip

# Final recommendation
print(f"\\n=== Recommendation ===")  # Show final recommendation
print(f"Restaurant: {restaurant}")  # Name of place
if 'price_range' in locals():
    print(f"Price Range: {price_range}")  # Show price if available
print(f"Perfect for: {group_size} people with {dietary if dietary != 'none' else 'no'} dietary restrictions")  # Recap
print(f"Cuisine: {cuisine.title()}")  # Echo choice

# Follow-up question
if input("\\nWould you like directions? (yes/no): ").lower().startswith('y'):
    print("Great! Check Google Maps or call the restaurant for directions.")`  # Offer help
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a movie recommendation bot that considers genre preference, age rating, and viewing time to suggest appropriate movies.',
            solution: `print("Movie Recommendation Bot")
print("I'll help you find the perfect movie!")

# Gather preferences
genre = input("Preferred genre (action/comedy/drama/horror/sci-fi): ").lower()
max_rating = input("Maximum age rating (g/pg/pg-13/r): ").lower()
time_available = int(input("How many minutes do you have? "))
mood = input("What's your mood? (happy/sad/excited/relaxed): ").lower()

print("\\nAnalyzing your preferences...")

# Decision logic
if time_available < 90:
    length_category = "short"
elif time_available < 150:
    length_category = "medium"
else:
    length_category = "long"

# Genre-based recommendations
if genre == "action":
    if max_rating in ["r"] and mood == "excited":
        movie = "John Wick"
        duration = 101
    elif max_rating in ["pg-13", "r"] and length_category != "short":
        movie = "The Avengers"
        duration = 143
    else:
        movie = "The Incredibles"
        duration = 115
elif genre == "comedy":
    if mood == "happy" and max_rating in ["pg-13", "r"]:
        movie = "Superbad"
        duration = 113
    elif length_category == "short":
        movie = "Paddington"
        duration = 95
    else:
        movie = "Toy Story"
        duration = 81
elif genre == "drama":
    if mood == "sad" and length_category != "short":
        movie = "The Pursuit of Happyness"
        duration = 117
    else:
        movie = "Finding Nemo"
        duration = 100
else:
    movie = "Back to the Future"
    duration = 116

# Check if movie fits time constraint
if duration <= time_available:
    print(f"\\n🎬 Perfect match: {movie}")
    print(f"Duration: {duration} minutes")
    print(f"You'll have {time_available - duration} minutes to spare!")
else:
    print(f"\\n🎬 Recommended: {movie}")
    print(f"Duration: {duration} minutes")
    print(f"Note: This is {duration - time_available} minutes longer than your available time.")
    
    if input("Would you like a shorter alternative? (yes/no): ").lower().startswith('y'):
        print("Try a TV episode or short film instead!")

print("\\nEnjoy your movie! 🍿")`,
            hints: [
              'Use nested if statements to handle multiple criteria',
              'Consider time constraints when making recommendations',
              'Provide fallback options when preferences don\'t match perfectly',
              'Use logical operators to combine multiple conditions'
            ]
          }
        ]
      }
    },
    tags: ['conditionals', 'boolean-logic', 'decision-trees', 'complex-logic']
  },
  {
    id: 'loops-repetition',
    title: 'Loops and Iteration Control',
    description: 'Master for loops, while loops, and advanced iteration techniques',
    category: 'Control Flow',
    difficulty: 'beginner',
    prerequisites: ['making-choices'],
    nextConcepts: ['api-fundamentals'],
    estimatedTime: 30,
    content: {
      text: {
        sections: [
          {
            title: 'Tutorial Steps',
            content: `Decisions run once, but bots often repeat work. Loops handle repetition.

**Step 1: Understand For Loops**

For loops repeat code a specific number of times:

\`\`\`python
# Basic counting
for i in range(5):
    print(f"Count: {i}")

# Custom range
for num in range(1, 11):  # 1 to 10
    print(f"Number: {num}")

# Step size
for even in range(0, 21, 2):  # Even numbers 0 to 20
    print(even)
\`\`\`

**Step 2: Master While Loops**

While loops continue until a condition becomes False:

\`\`\`python
count = 0
while count < 5:
    print(f"Count is: {count}")
    count += 1  # Important: update the condition variable!

print("Loop finished")
\`\`\`

**Step 3: Create Interactive Loops**

Use loops to create ongoing conversations:

\`\`\`python
print("Chat Bot - Type 'quit' to exit")

while True:
    user_input = input("You: ")
    
    if user_input.lower() == 'quit':
        print("Bot: Goodbye!")
        break
    
    print(f"Bot: You said '{user_input}'. That's interesting!")
\`\`\`

**Step 4: Implement Loop Control**

Use break and continue to control loop execution:

\`\`\`python
for i in range(10):
    if i == 3:
        continue  # Skip this iteration
    if i == 7:
        break     # Exit the loop
    print(i)
\`\`\`

**Common Errors**
- Forgetting to update loop variables (infinite loops)
- Confusing `break` and `continue``,
            codeExample: `# Advanced chatbot with conversation loop
import random  # Standard library for randomness

print("=== Advanced ChatBot ===")  # Intro text
print("I can chat, tell jokes, and play games!")  # Explain features
print("Commands: chat, joke, game, help, quit")  # User help

# Bot responses for different topics
chat_responses = [  # Generic replies
    "That's really interesting! Tell me more.",
    "I see what you mean. How does that make you feel?",
    "That's a great point. I hadn't thought of it that way.",
    "Thanks for sharing that with me!",
    "That sounds fascinating. What happened next?"
]

jokes = [  # List of jokes
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a fake noodle? An impasta!"
]

conversation_count = 0  # Track how many exchanges occur

# Main conversation loop
while True:  # Main loop
    user_input = input("\\nYou: ").lower().strip()  # Normalize input
    
    # Check for exit command
    if user_input in ['quit', 'exit', 'bye']:
        print(f"Bot: Thanks for chatting! We had {conversation_count} exchanges. Goodbye!")  # Exit
        break
    
    # Handle different commands
    elif user_input == 'help':
        print("Bot: I can respond to: chat, joke, game, help, quit")  # Show commands
        print("     Or just type anything to have a conversation!")
    
    elif user_input == 'joke':
        joke = random.choice(jokes)  # Pick a joke
        print(f"Bot: {joke}")
        conversation_count += 1
    
    elif user_input == 'game':
        print("Bot: Let's play a guessing game! I'm thinking of a number 1-10.")  # Start game
        secret_number = random.randint(1, 10)  # Random number
        attempts = 0
        max_attempts = 3
        
        # Nested game loop
        while attempts < max_attempts:  # Nested loop
            try:
                guess = int(input(f"Guess #{attempts + 1}: "))  # Convert guess
                attempts += 1
                
                if guess == secret_number:
                    print(f"Bot: Correct! You got it in {attempts} attempts!")  # Success
                    break
                elif guess < secret_number:
                    print("Bot: Too low!")  # Hint
                else:
                    print("Bot: Too high!")  # Hint
                    
                if attempts == max_attempts:
                    print(f"Bot: Game over! The number was {secret_number}")  # Out of tries
                    
            except ValueError:
                print("Bot: Please enter a valid number!")  # Validation
                attempts -= 1  # Don't count invalid input
        
        conversation_count += 1  # Game finished
    
    elif user_input == 'chat':
        topic = input("What would you like to chat about? ")  # Ask for topic
        response = random.choice(chat_responses)
        print(f"Bot: {response}")  # Reply
        conversation_count += 1
    
    else:
        # General conversation
        if len(user_input) > 0:
            response = random.choice(chat_responses)
            print(f"Bot: {response}")  # Generic reply
            conversation_count += 1
        else:
            print("Bot: I didn't catch that. Type 'help' for commands!")

print("\\nBot session ended. Thanks for using ChatBot!")`  # End message
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a "Password Strength Checker" bot that keeps asking for passwords until the user enters one that meets all criteria (8+ characters, has uppercase, lowercase, and numbers).',
            solution: `import string

print("Password Strength Checker Bot")
print("I'll help you create a strong password!")
print("Requirements: 8+ characters, uppercase, lowercase, and numbers")

def check_password_strength(password):
    """Check if password meets all requirements"""
    if len(password) < 8:
        return False, "Password must be at least 8 characters long"
    
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    
    missing = []
    if not has_upper:
        missing.append("uppercase letter")
    if not has_lower:
        missing.append("lowercase letter")
    if not has_digit:
        missing.append("number")
    
    if missing:
        return False, f"Password needs: {', '.join(missing)}"
    
    return True, "Password is strong!"

attempts = 0
max_attempts = 5

while attempts < max_attempts:
    password = input(f"\\nAttempt {attempts + 1}: Enter a password: ")
    attempts += 1
    
    is_strong, message = check_password_strength(password)
    print(f"Result: {message}")
    
    if is_strong:
        print("🎉 Congratulations! Your password is strong and secure!")
        print(f"You created a strong password in {attempts} attempts.")
        break
    else:
        remaining = max_attempts - attempts
        if remaining > 0:
            print(f"Try again! You have {remaining} attempts remaining.")
        else:
            print("\\n❌ Maximum attempts reached!")
            print("Here's an example of a strong password: MyP@ssw0rd123")
            
            if input("Would you like to try again? (yes/no): ").lower().startswith('y'):
                attempts = 0  # Reset attempts
                max_attempts = 3  # Give fewer attempts for retry
                print("\\nOkay, let's try again with 3 more attempts!")
            else:
                print("Come back when you're ready to create a strong password!")
                break

print("\\nRemember: Never share your password with anyone!")`,
            hints: [
              'Use a while loop to keep asking for passwords',
              'Create a function to check password requirements',
              'Use any() with generator expressions to check for character types',
              'Track attempts and provide helpful feedback',
              'Allow users to retry after reaching max attempts'
            ]
          }
        ]
      }
    },
    tags: ['loops', 'for-loops', 'while-loops', 'iteration', 'control-flow']
  },
  {
    id: 'api-fundamentals',
    title: 'Understanding APIs and Web Communication',
    description: 'Learn what APIs are, how they work, and how to integrate external data sources',
    category: 'APIs',
    difficulty: 'intermediate',
    prerequisites: ['loops-repetition'],
    nextConcepts: ['api-implementation'],
    estimatedTime: 35,
    content: {
      text: {
        sections: [
          {
            title: 'What Are APIs?',
            content: `Now that loops let your bot run repeatedly, let's pull in external data.

**API stands for Application Programming Interface**

Think of an API as a waiter in a restaurant:
• You (your program) make a request
• The waiter (API) takes your request to the kitchen (external service)
• The kitchen (service) prepares your order (processes the request)
• The waiter brings back your food (returns the data)

**Common API Types:**
• **Weather APIs**: Get current weather and forecasts
• **News APIs**: Fetch latest news articles
• **Social Media APIs**: Access posts and user data
• **Financial APIs**: Get stock prices and market data
• **Entertainment APIs**: Movies, music, games information

**Why Use APIs?**
Instead of building everything from scratch, APIs let you access existing services and data. Want weather information? Use a weather API. Need jokes? Use a joke API.

**Common Errors**
- Forgetting to check API status codes
- Parsing JSON without validating the response`,
            codeExample: `# Understanding API concepts with examples
print("=== API Concepts Demonstration ===")  # Header

# Simulating an API response (what you'd get from a real API)
fake_weather_response = {
    "location": "New York",  # City name
    "temperature": 72,       # Degrees Fahrenheit
    "condition": "Sunny",    # Weather condition
    "humidity": 45,
    "wind_speed": 8
}

fake_news_response = {
    "articles": [
        {
            "title": "Python Programming Gains Popularity",  # Article title
            "author": "Tech Reporter",  # Author name
            "published": "2024-01-15",  # Date
            "summary": "Python continues to be the most popular programming language..."
        }
    ]
}

# Demonstrating how you'd use API data
print("Weather Information:")  # Display weather
print(f"Location: {fake_weather_response['location']}")
print(f"Temperature: {fake_weather_response['temperature']}°F")
print(f"Condition: {fake_weather_response['condition']}")

print("\\nLatest News:")  # Loop through articles
for article in fake_news_response['articles']:
    print(f"Title: {article['title']}")
    print(f"By: {article['author']}")

print("\\n=== This is how APIs provide structured data to your programs! ===")`
          },
          {
            title: 'HTTP and JSON Basics',
            content: `**HTTP (HyperText Transfer Protocol)**: The foundation of web communication

**Common HTTP Methods:**
- **GET**: Retrieve data (like asking for information)
- **POST**: Send data (like submitting a form)
- **PUT**: Update existing data
- **DELETE**: Remove data

**JSON (JavaScript Object Notation)**: The most common data format for APIs

JSON looks like Python dictionaries:
\`\`\`json
{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "coding", "hiking"]
}
\`\`\`

**Status Codes**: Tell you if your request worked
- 200: Success
- 404: Not found
- 500: Server error`
          },
          {
            title: 'Popular Free APIs for Learning',
            content: `**Entertainment APIs:**
- **JSONPlaceholder**: Fake data for testing
- **icanhazdadjoke**: Random dad jokes
- **Numbers API**: Interesting facts about numbers
- **Cat Facts API**: Random cat facts

**Utility APIs:**
- **Random User API**: Generate fake user profiles
- **Quotable**: Inspirational quotes
- **REST Countries**: Information about countries

**News and Information:**
- **NewsAPI**: Headlines from various sources
- **Wikipedia API**: Access to Wikipedia content

**Weather APIs:**
- **OpenWeatherMap**: Current weather and forecasts
- **WeatherAPI**: Detailed weather information

These APIs are perfect for learning because they're free, well-documented, and don't require complex authentication.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a function that simulates parsing different types of API responses. Handle weather data, user profiles, and news articles.',
            solution: `import json

def parse_weather_data(weather_json):
    """Parse weather API response"""
    try:
        data = json.loads(weather_json) if isinstance(weather_json, str) else weather_json
        
        location = data.get('location', 'Unknown')
        temp = data.get('temperature', 'N/A')
        condition = data.get('condition', 'Unknown')
        
        return f"Weather in {location}: {temp}°F, {condition}"
    except (json.JSONDecodeError, KeyError) as e:
        return f"Error parsing weather data: {e}"

def parse_user_profile(user_json):
    """Parse user profile API response"""
    try:
        data = json.loads(user_json) if isinstance(user_json, str) else user_json
        
        name = data.get('name', 'Unknown User')
        email = data.get('email', 'No email')
        age = data.get('age', 'Unknown age')
        location = data.get('location', {})
        city = location.get('city', 'Unknown city')
        
        return f"User: {name} ({email}), Age: {age}, Location: {city}"
    except (json.JSONDecodeError, KeyError) as e:
        return f"Error parsing user data: {e}"

# Test the functions with sample data
print("=== API Response Parser Demo ===")

# Sample API responses
weather_data = {
    "location": "San Francisco",
    "temperature": 68,
    "condition": "Partly Cloudy",
    "humidity": 65
}

user_data = {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "age": 28,
    "location": {
        "city": "Seattle",
        "country": "USA"
    }
}

# Parse and display results
print("1. Weather Data:")
print(parse_weather_data(weather_data))

print("\\n2. User Profile:")
print(parse_user_profile(user_data))`,
            hints: [
              'Use json.loads() to parse JSON strings',
              'Use .get() method to safely access dictionary keys',
              'Handle both string and dictionary inputs',
              'Implement proper error handling for malformed JSON',
              'Extract nested data carefully with multiple .get() calls'
            ]
          }
        ]
      }
    },
    tags: ['api', 'http', 'json', 'web-communication', 'data-parsing']
  },
  {
    id: 'api-implementation',
    title: 'Implementing API Calls in Python',
    description: 'Learn to make HTTP requests, handle responses, and integrate real APIs into your bots',
    category: 'APIs',
    difficulty: 'intermediate',
    prerequisites: ['api-fundamentals'],
    nextConcepts: ['making-bot-unique'],
    estimatedTime: 40,
    content: {
      text: {
        sections: [
          {
            title: 'Making Your First API Call',
            content: `You've learned what APIs are. Now let's use them in code.

**Step 1: Install the Requests Library**

The requests library makes HTTP calls simple in Python:

\`\`\`bash
pip install requests
\`\`\`

**Step 2: Import and Make a Basic Request**

\`\`\`python
import requests

response = requests.get("https://api.github.com/users/octocat")
print(f"Status Code: {response.status_code}")
print(f"Response: {response.json()}")
\`\`\`

**Step 3: Handle Responses Properly**

Always check if the request was successful:

\`\`\`python
if response.status_code == 200:
    data = response.json()
    print("Success!")
else:
    print(f"Error: {response.status_code}")
\`\`\`

**Step 4: Add Error Handling**

Make your API calls robust:

\`\`\`python
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()  # Raises exception for bad status codes
    return response.json()
except requests.exceptions.RequestException as e:
    print(f"API call failed: {e}")
    return None
\`\`\`

**Common Errors**
- Missing internet connection
- Forgetting to handle non-200 status codes`,
            codeExample: `import requests  # HTTP library
import json  # JSON handling
from datetime import datetime  # For timestamps

class APIBot:
    """A bot that demonstrates various API integrations"""
    
    def __init__(self):
        self.session = requests.Session()  # Reuse HTTP session
        self.session.headers.update({
            'User-Agent': 'Python-Bot/1.0'
        })
    
    def get_random_fact(self):
        """Get a random number fact from Numbers API"""
        try:
            url = "http://numbersapi.com/random/trivia"  # Endpoint
            response = self.session.get(url, timeout=10)  # Perform request
            
            if response.status_code == 200:
                return response.text.strip()  # Success
            else:
                return "Sorry, couldn't fetch a fact right now."
                
        except requests.exceptions.RequestException as e:
            return f"Error getting fact: {str(e)}"  # Handle errors
    
    def get_dad_joke(self):
        """Get a dad joke from icanhazdadjoke API"""
        try:
            url = "https://icanhazdadjoke.com/"
            headers = {"Accept": "application/json"}  # Request JSON
            
            response = self.session.get(url, headers=headers, timeout=10)  # GET request
            
            if response.status_code == 200:
                joke_data = response.json()
                return joke_data["joke"]  # Extract joke
            else:
                return "Sorry, no jokes available right now."
                
        except requests.exceptions.RequestException as e:
            return f"Error getting joke: {str(e)}"  # Error case
    
    def get_cat_fact(self):
        """Get a random cat fact"""
        try:
            url = "https://catfact.ninja/fact"  # API endpoint
            response = self.session.get(url, timeout=10)
            
            if response.status_code == 200:
                fact_data = response.json()
                return fact_data["fact"]  # Extract fact
            else:
                return "Sorry, no cat facts available right now."
                
        except requests.exceptions.RequestException as e:
            return f"Error getting cat fact: {str(e)}"  # Error

# Demonstration of the API bot
def main():
    print("=== Multi-API Bot Demo ===")  # Greeting
    print("This bot integrates with multiple APIs to provide various content!")
    
    bot = APIBot()  # Create bot instance
    
    while True:  # Command loop
        print("\\nAvailable commands:")
        print("1. fact - Random number fact")
        print("2. joke - Dad joke")
        print("3. cat - Cat fact")
        print("4. all - Get one of each")
        print("5. quit - Exit")
        
        choice = input("\\nWhat would you like? ").lower().strip()  # User command
        
        if choice == "quit":
            print("Thanks for using the API bot! Goodbye!")  # Exit
            break
        elif choice == "fact":
            print(f"\\n🔢 Random Fact: {bot.get_random_fact()}")  # Show fact
        elif choice == "joke":
            print(f"\\n😄 Dad Joke: {bot.get_dad_joke()}")  # Show joke
        elif choice == "cat":
            print(f"\\n🐱 Cat Fact: {bot.get_cat_fact()}")  # Show cat fact
        elif choice == "all":
            print("\\n🎉 Here's a variety pack!")
            print(f"\\n🔢 Fact: {bot.get_random_fact()}")  # Fact
            print(f"\\n😄 Joke: {bot.get_dad_joke()}")  # Joke
            print(f"\\n🐱 Cat Fact: {bot.get_cat_fact()}")  # Cat fact
        else:
            print("Invalid choice. Please try again.")  # Unknown command

if __name__ == "__main__":
    main()`
          },
          {
            title: 'Error Handling and Best Practices',
            content: `**Comprehensive Error Handling:**

\`\`\`python
import requests
from requests.exceptions import RequestException, Timeout, ConnectionError

def safe_api_call(url, **kwargs):
    try:
        response = requests.get(url, timeout=10, **kwargs)
        response.raise_for_status()  # Raises HTTPError for bad responses
        return response.json()
    
    except Timeout:
        return {"error": "Request timed out"}
    except ConnectionError:
        return {"error": "Connection failed"}
    except requests.exceptions.HTTPError as e:
        return {"error": f"HTTP error: {e.response.status_code}"}
    except requests.exceptions.RequestException as e:
        return {"error": f"Request failed: {str(e)}"}
    except ValueError:  # JSON decode error
        return {"error": "Invalid JSON response"}
\`\`\`

**Best Practices:**
- Always use timeouts to prevent hanging requests
- Handle different types of errors appropriately
- Use sessions for multiple requests to the same API
- Respect rate limits and add delays if needed
- Cache responses when appropriate to reduce API calls

**API Key Management:**
- Never hardcode API keys in your source code
- Use environment variables or configuration files
- Keep API keys secure and don't share them publicly`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a weather bot that uses a real weather API. Include error handling, user input for city names, and formatted output.',
            solution: `import requests
from datetime import datetime

class WeatherBot:
    def __init__(self):
        # Note: You would need a real API key for a production weather service
        self.base_url = "http://api.openweathermap.org/data/2.5/weather"
        self.session = requests.Session()
    
    def get_weather(self, city):
        """Get current weather for a city (simulated for demo)"""
        # This is a simulation - in real use, you'd need an API key
        print(f"\\n🌤️  Weather for {city.title()} (Simulated Data):")
        print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        print(f"🌡️  Temperature: 22°C (feels like 24°C)")
        print(f"☁️  Condition: Partly Cloudy")
        print(f"💧 Humidity: 65%")
        print(f"💨 Wind Speed: 12.5 km/h")
        print(f"📅 Updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        return True
    
    def run(self):
        print("🌤️  Welcome to WeatherBot!")
        print("I can provide current weather information for any city.")
        print("\\nNote: This demo uses simulated data.")
        
        while True:
            print("\\nCommands:")
            print("• Type a city name to get weather")
            print("• Type 'quit' to exit")
            
            user_input = input("\\nEnter city name or command: ").strip()
            
            if user_input.lower() == 'quit':
                print("Thanks for using WeatherBot! Stay weather-aware! 🌈")
                break
            elif len(user_input) > 0:
                self.get_weather(user_input)
            else:
                print("Please enter a city name.")

# Run the weather bot
if __name__ == "__main__":
    bot = WeatherBot()
    bot.run()`,
            hints: [
              'Sign up for a free API key from OpenWeatherMap or similar service',
              'Use requests.get() with proper parameters',
              'Handle different HTTP status codes (200, 404, 401)',
              'Format the weather data in a user-friendly way',
              'Add timeout and error handling for network issues'
            ]
          }
        ]
      }
    },
    tags: ['api-implementation', 'http-requests', 'error-handling', 'real-world-apis']
  },
  {
    id: 'making-bot-unique',
    title: 'Creating Your Unique Bot',
    description: 'Combine all your skills to build a personalized, feature-rich bot with personality and advanced capabilities',
    category: 'Integration',
    difficulty: 'intermediate',
    prerequisites: ['api-implementation'],
    nextConcepts: ['ready-set-code'],
    estimatedTime: 45,
    content: {
      text: {
        sections: [
          {
            title: 'Planning Your Bot',
            content: `All previous lessons come together here as you craft a personalized assistant.

**Step 1: Define Your Bot's Purpose**

Before coding, plan your bot's identity:
• **Purpose**: What problem does it solve? (entertainment, productivity, information, etc.)
• **Personality**: Formal, friendly, humorous, professional?
• **Target Audience**: Who will use your bot?
• **Core Features**: What are the 3-5 main things it can do?

**Step 2: Design the User Experience**

Plan how users will interact with your bot:
• **Commands**: What keywords trigger different features?
• **Conversation Flow**: How does the bot guide users?
• **Error Handling**: How does it respond to unexpected input?
• **Help System**: How do users learn what the bot can do?

**Step 3: Choose Your APIs**

Select APIs that match your bot's purpose:
• Weather bots need weather APIs
• Entertainment bots might use joke, quote, or trivia APIs
• News bots need news APIs
• Study bots could use dictionary or educational APIs

**Step 4: Add Personality**

Make your bot memorable with:
• Varied responses using random selection
• Consistent tone and voice
• Helpful error messages
• Encouraging feedback
• Personal touches that reflect your creativity

**Common Errors**
- Adding too many features at once
- Forgetting to save conversation history`,
            codeExample: `# Example: Personal Assistant Bot Framework
import requests  # For API calls
import random    # Random responses
from datetime import datetime  # Time handling

class PersonalAssistantBot:
    def __init__(self, name="Assistant"):
        self.name = name  # Bot's name
        self.user_name = ""  # Will store user's name
        self.conversation_history = []  # Keep chat history
        self.session = requests.Session()  # For future API calls
        
        # Personality traits
        self.greetings = [
            f"Hello! I'm {self.name}, your personal assistant.",
            f"Hi there! {self.name} here, ready to help!",
            f"Greetings! I'm {self.name}, what can I do for you today?"
        ]
        
        self.encouragements = [
            "You're doing great!",
            "Keep up the excellent work!",
            "I believe in you!",
            "You've got this!"
        ]
    
    def greet_user(self):
        """Initial greeting and setup"""
        print(random.choice(self.greetings))  # Random greeting
        
        if not self.user_name:
            self.user_name = input("What's your name? ").strip()  # Ask name
            print(f"Nice to meet you, {self.user_name}! 😊")
            
        print(f"\\nI can help you with various tasks, {self.user_name}.")
        print("Type 'help' to see what I can do!")
    
    def show_help(self):
        """Display available commands"""
        help_text = f"""
🤖 {self.name} - Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📰 news - Get latest headlines
💡 fact - Random interesting fact
😄 joke - Tell a joke
💪 motivate - Get motivational quote
⏰ time - Current time and date
📝 note [text] - Save a note
📋 notes - View saved notes
❓ help - Show this help
👋 quit - Exit the program
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 You can also just chat with me naturally!
        """
        print(help_text)
    
    def get_random_fact(self):
        """Get a random fact"""
        try:
            response = self.session.get("http://numbersapi.com/random/trivia", timeout=10)
            if response.status_code == 200:
                return response.text.strip()
            else:
                return "Here's a fact: You're awesome for learning to code!"
        except:
            return "Did you know? Python is named after Monty Python's Flying Circus!"
    
    def get_joke(self):
        """Get a random joke"""
        jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs!",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
            "Why do Python programmers prefer snakes? Because they don't have to deal with Java!",
            "What's a programmer's favorite hangout place? Foo Bar!"
        ]
        return random.choice(jokes)
    
    def save_note(self, note_text):
        """Save a user note"""
        if not hasattr(self, 'notes'):
            self.notes = []
        
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
        self.notes.append({"text": note_text, "timestamp": timestamp})
        return f"Note saved! You now have {len(self.notes)} notes."
    
    def show_notes(self):
        """Display saved notes"""
        if not hasattr(self, 'notes') or not self.notes:
            return "You don't have any notes yet. Use 'note [text]' to save one!"
        
        result = f"\\n📝 Your Notes ({len(self.notes)} total):\\n"
        result += "━" * 40 + "\\n"
        
        for i, note in enumerate(self.notes, 1):
            result += f"{i}. {note['text']}\\n"
            result += f"   📅 {note['timestamp']}\\n\\n"
        
        return result
    
    def process_command(self, user_input):
        """Process user commands and return appropriate responses"""
        command = user_input.lower().strip()
        
        if command == "help":
            self.show_help()
        elif command == "fact":
            fact = self.get_random_fact()
            print(f"\\n💡 Random Fact: {fact}")
        elif command == "joke":
            joke = self.get_joke()
            print(f"\\n😄 Here's a joke: {joke}")
        elif command == "motivate":
            motivation = random.choice(self.encouragements)
            print(f"\\n💪 {motivation} Keep pushing forward, {self.user_name}!")
        elif command == "time":
            current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            print(f"\\n⏰ Current time: {current_time}")
        elif command.startswith("note "):
            note_text = command[5:].strip()
            if note_text:
                result = self.save_note(note_text)
                print(f"\\n📝 {result}")
            else:
                print("Please provide text for your note. Example: note Buy groceries")
        elif command == "notes":
            notes = self.show_notes()
            print(notes)
        elif command in ["quit", "exit", "bye"]:
            return "quit"
        else:
            # Natural conversation
            responses = [
                f"That's interesting, {self.user_name}! Tell me more.",
                "I see what you mean. How can I help with that?",
                "Thanks for sharing! Is there anything specific I can help you with?",
                f"I appreciate you talking with me, {self.user_name}. What would you like to do?"
            ]
            print(random.choice(responses))
    
    def run(self):
        """Main bot loop"""
        self.greet_user()
        
        while True:
            try:
                user_input = input(f"\\n{self.user_name}: ").strip()
                
                if not user_input:
                    continue
                
                result = self.process_command(user_input)
                
                if result == "quit":
                    print(f"\\nGoodbye, {self.user_name}! It was great chatting with you! 🌟")
                    break
                    
            except KeyboardInterrupt:
                print(f"\\n\\nGoodbye, {self.user_name}! Take care! 👋")
                break
            except Exception as e:
                print(f"\\nOops! Something went wrong: {str(e)}")
                print("But don't worry, I'm still here to help!")

# Run the bot
if __name__ == "__main__":
    bot = PersonalAssistantBot("Alex")
    bot.run()`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a comprehensive "Study Buddy Bot" that combines multiple APIs and features: motivational quotes, study timers, note-taking, and progress tracking. Include proper error handling and a polished user experience.',
            solution: `import requests
import time
import random
from datetime import datetime, timedelta

class StudyBuddyBot:
    def __init__(self):
        self.name = "StudyBuddy"
        self.user_name = ""
        self.study_sessions = []
        self.notes = []
        self.goals = []
        self.session = requests.Session()
        
        # Motivational quotes (fallback if API fails)
        self.motivational_quotes = [
            "The expert in anything was once a beginner. - Helen Hayes",
            "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
            "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
            "The beautiful thing about learning is that no one can take it away from you. - B.B. King"
        ]
        
        self.study_tips = [
            "Take a 5-10 minute break every 25-30 minutes (Pomodoro Technique)",
            "Study in a well-lit, quiet environment",
            "Stay hydrated - your brain needs water to function optimally",
            "Use active recall: test yourself instead of just re-reading"
        ]
    
    def greet_user(self):
        """Welcome the user and get their name"""
        print("📚 Welcome to StudyBuddy - Your Personal Learning Companion! 🎓")
        
        if not self.user_name:
            self.user_name = input("\\nWhat's your name, future scholar? ").strip()
            print(f"\\nGreat to meet you, {self.user_name}! 🌟")
            print("I'm here to help you study effectively and stay motivated.")
        
        self.show_daily_overview()
    
    def show_daily_overview(self):
        """Show today's study overview"""
        today = datetime.now().strftime("%Y-%m-%d")
        today_sessions = [s for s in self.study_sessions if s['date'] == today]
        total_time = sum(s['duration'] for s in today_sessions)
        
        print(f"\\n📊 Today's Study Overview ({today})")
        print("━" * 40)
        print(f"📚 Study sessions: {len(today_sessions)}")
        print(f"⏱️  Total study time: {total_time} minutes")
        print(f"📝 Notes saved: {len(self.notes)}")
        print(f"🎯 Active goals: {len([g for g in self.goals if not g.get('completed', False)])}")
    
    def show_help(self):
        """Display all available commands"""
        help_text = f"""
📚 {self.name} - Your Study Companion Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
start [minutes]  - Begin a focused study timer
note [text]      - Save a quick study note
notes            - Review your saved notes
goal [text]      - Add a new study goal
goals            - View your current goals
overview         - Show today's study summary
help             - Show this help message
quit             - Exit the bot
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        """
        print(help_text)

    def start_timer(self, minutes: int):
        """Start a study timer and log the session"""
        try:
            mins = int(minutes)
            if mins <= 0:
                print("Please specify a positive number of minutes.")
                return
            end_time = datetime.now() + timedelta(minutes=mins)
            print(f"⏰ Timer set for {mins} minutes. Ends at {end_time.strftime('%H:%M')}")
            time.sleep(1)  # Simulate timer
            self.study_sessions.append({'date': datetime.now().strftime('%Y-%m-%d'), 'duration': mins})
            print("✅ Time's up! Great job studying!")
        except ValueError:
            print("Invalid number of minutes.")

    def add_note(self, text: str):
        """Save a study note"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M')
        self.notes.append({'text': text, 'timestamp': timestamp})
        print("Note saved.")

    def show_notes(self):
        """Display all notes"""
        if not self.notes:
            print("No notes yet.")
            return
        print("\n📒 Your Notes:")
        for i, n in enumerate(self.notes, 1):
            print(f"{i}. {n['text']} ({n['timestamp']})")

    def add_goal(self, text: str):
        """Add a new study goal"""
        self.goals.append({'text': text, 'completed': False})
        print("Goal added.")

    def show_goals(self):
        """Show current goals"""
        if not self.goals:
            print("No goals set.")
            return
        print("\n🎯 Your Goals:")
        for i, g in enumerate(self.goals, 1):
            status = '✓' if g.get('completed') else '✗'
            print(f"{i}. [{status}] {g['text']}")

    def process_command(self, user_input: str):
        """Process a command from the user"""
        if not user_input:
            return
        parts = user_input.split(maxsplit=1)
        cmd = parts[0].lower()
        arg = parts[1] if len(parts) > 1 else ''
        if cmd in ('quit', 'exit'):
            return 'quit'
        if cmd == 'help':
            self.show_help()
        elif cmd == 'start':
            self.start_timer(arg or 0)
        elif cmd == 'note':
            if arg:
                self.add_note(arg)
            else:
                print('Provide text for the note.')
        elif cmd == 'notes':
            self.show_notes()
        elif cmd == 'goal':
            if arg:
                self.add_goal(arg)
            else:
                print('Provide a goal description.')
        elif cmd == 'goals':
            self.show_goals()
        elif cmd == 'overview':
            self.show_daily_overview()
        else:
            print("I didn't understand that command. Type 'help' for options.")

    def run(self):
        """Main interaction loop"""
        self.greet_user()
        self.show_help()
        while True:
            try:
                user_input = input(f"\n{self.user_name}: ").strip()
                result = self.process_command(user_input)
                if result == 'quit':
                    print(f"\nGoodbye, {self.user_name}! Keep up the great work!")
                    break
            except KeyboardInterrupt:
                print("\nSession ended. Goodbye!")
                break

if __name__ == '__main__':
    bot = StudyBuddyBot()
    bot.run()`
          }
        ]
      }
    },
    tags: ['integration', 'planning', 'api-usage', 'personalization', 'productivity']
  }
];
