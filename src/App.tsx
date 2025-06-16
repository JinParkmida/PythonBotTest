import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Code, 
  Target,
  ArrowRight,
  CheckCircle,
  Play,
  Users,
  Heart,
  Zap,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Home,
  Terminal,
  Eye,
  EyeOff,
  Copy,
  Check
} from 'lucide-react';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showLessons, setShowLessons] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const introSlides = [
    {
      title: "Python Bot Development",
      subtitle: "Learn to build interactive bots from the ground up",
      content: "Master the fundamentals of Python programming through practical bot development. This tutorial covers core programming concepts, API integration, and software design patterns.",
      icon: Bot,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Practical Programming",
      subtitle: "Theory meets application",
      content: "Learn programming concepts through hands-on development. Each lesson builds upon previous knowledge, introducing new concepts in context rather than isolation.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-World Skills",
      subtitle: "Build production-ready applications",
      content: "Develop bots that handle user input, make decisions, process data, and integrate with external APIs. These are fundamental skills for any software developer.",
      icon: Code,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Complete Foundation",
      subtitle: "From basics to advanced concepts",
      content: "Master variables, control flow, functions, error handling, and API integration. Build a solid foundation for any programming challenge or project.",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];

  const lessons = [
    {
      id: 1,
      title: "Development Environment Setup",
      subtitle: "Configuring your Python development environment",
      theory: {
        title: "Understanding Development Environments",
        content: `A development environment is the collection of tools and configurations that enable you to write, test, and debug code efficiently. For Python development, you need:

**Python Interpreter**: The program that executes your Python code
**Code Editor/IDE**: Where you write and edit your code
**Terminal/Command Line**: For running scripts and managing packages
**Package Manager**: For installing external libraries (pip)

**Environment Options:**
- **Local Installation**: Install Python directly on your machine
- **Online IDEs**: Browser-based environments (Replit, CodePen, etc.)
- **Integrated Development Environments**: PyCharm, VS Code, etc.
- **Cloud Platforms**: Google Colab, GitHub Codespaces`
      },
      practicalSteps: [
        "Choose your development environment based on your needs",
        "Ensure Python 3.7+ is available",
        "Verify pip (package manager) is installed",
        "Test basic Python execution with a simple script"
      ],
      codeExample: `# Test your Python installation
print("Python is working!")
print("Version check:")

import sys
print(f"Python version: {sys.version}")

# Test basic operations
x = 5
y = 10
result = x + y
print(f"Basic math: {x} + {y} = {result}")

# Test string operations
name = "Developer"
greeting = f"Hello, {name}!"
print(greeting)`,
      challenge: "Set up your development environment and run this test script to verify everything is working correctly.",
      concepts: ["Development Environment", "Python Interpreter", "Basic Syntax", "Print Function"]
    },
    {
      id: 2,
      title: "Program Structure and Execution",
      subtitle: "Understanding how programs work and what makes a bot",
      theory: {
        title: "Program Execution Model",
        content: `Programs are sequences of instructions that a computer executes line by line. Understanding this execution model is crucial for effective programming.

**Key Concepts:**
- **Sequential Execution**: Code runs from top to bottom, line by line
- **Input/Output (I/O)**: Programs receive data (input) and produce results (output)
- **State**: Programs maintain information in memory during execution
- **Control Flow**: Mechanisms to change the order of execution

**Bot Architecture:**
A bot is simply a program that follows the input-process-output pattern:
1. **Input**: Receive data from user or external source
2. **Process**: Apply logic to transform or analyze the input
3. **Output**: Provide a response or take an action

This pattern forms the foundation of all interactive applications.`
      },
      practicalSteps: [
        "Understand the input-process-output cycle",
        "Learn about program state and memory",
        "Implement basic user interaction",
        "Structure code for readability and maintainability"
      ],
      codeExample: `# Demonstration of program execution flow
print("Program started")  # Line 1: Output

# Line 2-3: Input (getting data from user)
user_name = input("Enter your name: ")
user_age = input("Enter your age: ")

# Line 4-6: Processing (transforming data)
age_number = int(user_age)  # Convert string to integer
birth_year = 2024 - age_number
message = f"Hello {user_name}, you were born around {birth_year}"

# Line 7: Output (displaying result)
print(message)

print("Program finished")  # Line 8: Output`,
      challenge: "Create a program that asks for two numbers, calculates their sum and product, and displays the results with descriptive messages.",
      concepts: ["Sequential Execution", "Input/Output", "Data Types", "Type Conversion"]
    },
    {
      id: 3,
      title: "Variables and Data Types",
      subtitle: "Managing data and state in your programs",
      theory: {
        title: "Memory Management and Data Types",
        content: `Variables are named references to memory locations where data is stored. Understanding data types is crucial for effective programming.

**Python Data Types:**
- **int**: Whole numbers (-5, 0, 42)
- **float**: Decimal numbers (3.14, -2.5)
- **str**: Text data ("hello", 'world')
- **bool**: True/False values
- **list**: Ordered collections [1, 2, 3]
- **dict**: Key-value pairs {"name": "Alice"}

**Variable Assignment:**
When you write \`x = 5\`, Python:
1. Allocates memory for the integer 5
2. Creates a reference named 'x' pointing to that memory
3. The variable 'x' can later point to different data

**Naming Conventions:**
- Use descriptive names: \`user_age\` not \`a\`
- Snake_case for variables and functions
- UPPER_CASE for constants
- Avoid Python keywords (if, for, while, etc.)`
      },
      practicalSteps: [
        "Declare variables with meaningful names",
        "Understand type conversion and when it's needed",
        "Practice string formatting and manipulation",
        "Learn to debug type-related errors"
      ],
      codeExample: `# Variable declaration and types
user_name = "Alice"           # str (string)
user_age = 25                 # int (integer)
user_height = 5.6             # float (decimal)
is_student = True             # bool (boolean)

# Type checking
print(f"Name: {user_name} (type: {type(user_name)})")
print(f"Age: {user_age} (type: {type(user_age)})")
print(f"Height: {user_height} (type: {type(user_height)})")
print(f"Student: {is_student} (type: {type(is_student)})")

# Type conversion
age_as_string = str(user_age)        # Convert int to string
height_as_int = int(user_height)     # Convert float to int (truncates)
age_from_input = int(input("Age: ")) # Convert input string to int

# String formatting (f-strings)
profile = f"{user_name} is {user_age} years old and {user_height} feet tall"
print(profile)

# Variable reassignment
user_age = user_age + 1  # Increment age
print(f"Next year, {user_name} will be {user_age}")`,
      challenge: "Create a program that collects user information (name, age, favorite number) and calculates interesting facts (age in months, favorite number squared, etc.).",
      concepts: ["Variables", "Data Types", "Type Conversion", "String Formatting", "Memory Management"]
    },
    {
      id: 4,
      title: "Conditional Logic and Decision Making",
      subtitle: "Implementing branching logic and program flow control",
      theory: {
        title: "Boolean Logic and Control Flow",
        content: `Conditional statements allow programs to make decisions based on data. This is fundamental to creating intelligent, responsive applications.

**Boolean Expressions:**
Expressions that evaluate to True or False:
- **Comparison operators**: ==, !=, <, >, <=, >=
- **Logical operators**: and, or, not
- **Membership operators**: in, not in
- **Identity operators**: is, is not

**Control Flow Structures:**
- **if**: Execute code only if condition is True
- **elif**: Check additional conditions
- **else**: Execute code if no conditions are True

**Evaluation Order:**
Python evaluates conditions from top to bottom, executing the first True condition and skipping the rest.

**Best Practices:**
- Use clear, readable conditions
- Handle edge cases with appropriate elif/else clauses
- Consider using early returns to reduce nesting
- Group related conditions logically`
      },
      practicalSteps: [
        "Master comparison and logical operators",
        "Structure if/elif/else chains effectively",
        "Handle user input validation",
        "Implement complex decision trees"
      ],
      codeExample: `# Basic conditional logic
age = int(input("Enter your age: "))

if age < 0:
    print("Invalid age entered")
elif age < 13:
    category = "child"
elif age < 20:
    category = "teenager"
elif age < 65:
    category = "adult"
else:
    category = "senior"

print(f"You are classified as: {category}")

# Complex conditions with logical operators
username = input("Username: ").strip().lower()
password = input("Password: ")

if len(username) >= 3 and len(password) >= 8:
    if username not in ["admin", "root", "test"]:
        if password.isalnum() and any(c.isupper() for c in password):
            print("Account created successfully")
        else:
            print("Password must contain letters, numbers, and uppercase")
    else:
        print("Username not allowed")
else:
    print("Username must be 3+ chars, password must be 8+ chars")

# Handling multiple input cases
user_input = input("Enter command: ").strip().lower()

if user_input in ["quit", "exit", "q"]:
    print("Goodbye!")
elif user_input in ["help", "h", "?"]:
    print("Available commands: quit, help, status")
elif user_input == "status":
    print("System is running normally")
else:
    print(f"Unknown command: {user_input}")`,
      challenge: "Build a grade calculator that takes a numerical score and outputs both a letter grade (A-F) and a descriptive message about performance.",
      concepts: ["Boolean Logic", "Comparison Operators", "Logical Operators", "Control Flow", "Input Validation"]
    },
    {
      id: 5,
      title: "Loops and Iteration",
      subtitle: "Automating repetitive tasks and processing collections",
      theory: {
        title: "Iteration Patterns and Loop Control",
        content: `Loops enable programs to repeat operations efficiently, essential for processing data and maintaining program state.

**Loop Types:**
- **for loops**: Iterate over sequences (strings, lists, ranges)
- **while loops**: Continue while a condition is True
- **Nested loops**: Loops within loops for complex iterations

**Loop Control:**
- **break**: Exit the loop immediately
- **continue**: Skip to the next iteration
- **else**: Execute when loop completes normally (not broken)

**Common Patterns:**
- **Counter loops**: for i in range(n)
- **Collection iteration**: for item in collection
- **Conditional loops**: while condition
- **Infinite loops with break**: while True + break condition

**Performance Considerations:**
- Avoid modifying collections while iterating
- Use appropriate loop type for the task
- Consider list comprehensions for simple transformations
- Be careful with infinite loops`
      },
      practicalSteps: [
        "Implement counter-based loops with range()",
        "Iterate over collections and strings",
        "Use while loops for conditional repetition",
        "Apply break and continue for flow control"
      ],
      codeExample: `# For loops with range
print("Countdown:")
for i in range(10, 0, -1):  # Start at 10, stop before 0, step -1
    print(f"{i}...")
print("Launch!")

# Iterating over collections
fruits = ["apple", "banana", "orange", "grape"]
print("\\nFruit inventory:")
for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit.title()}")

# While loop for user interaction
total = 0
count = 0

print("\\nEnter numbers to sum (or 'done' to finish):")
while True:
    user_input = input("Number: ").strip()
    
    if user_input.lower() == "done":
        break
    
    try:
        number = float(user_input)
        total += number
        count += 1
        print(f"Running total: {total}")
    except ValueError:
        print("Please enter a valid number or 'done'")
        continue

if count > 0:
    average = total / count
    print(f"\\nSummary: {count} numbers, total: {total}, average: {average:.2f}")
else:
    print("No numbers entered")

# Nested loops for pattern generation
print("\\nMultiplication table:")
for i in range(1, 6):
    for j in range(1, 6):
        product = i * j
        print(f"{product:3}", end=" ")
    print()  # New line after each row`,
      challenge: "Create a number guessing game where the computer picks a random number (1-100) and the user has to guess it, with hints about whether their guess is too high or low.",
      concepts: ["For Loops", "While Loops", "Loop Control", "Iteration Patterns", "Nested Loops"]
    },
    {
      id: 6,
      title: "Functions and Code Organization",
      subtitle: "Creating reusable code blocks and organizing program logic",
      theory: {
        title: "Function Design and Modularity",
        content: `Functions are reusable blocks of code that perform specific tasks. They are fundamental to writing maintainable, organized programs.

**Function Anatomy:**
- **Definition**: def function_name(parameters):
- **Parameters**: Input values the function accepts
- **Return value**: Output the function produces
- **Docstring**: Documentation describing the function's purpose

**Benefits of Functions:**
- **Reusability**: Write once, use many times
- **Modularity**: Break complex problems into smaller pieces
- **Testing**: Easier to test individual components
- **Readability**: Self-documenting code with descriptive names

**Function Design Principles:**
- **Single Responsibility**: Each function should do one thing well
- **Clear Naming**: Function names should describe what they do
- **Minimal Parameters**: Avoid functions with too many parameters
- **Consistent Return Types**: Return the same type of data

**Scope and Variables:**
- **Local scope**: Variables defined inside functions
- **Global scope**: Variables defined outside functions
- **Parameter passing**: How data flows into functions`
      },
      practicalSteps: [
        "Define functions with clear purposes",
        "Use parameters and return values effectively",
        "Organize code into logical function groups",
        "Handle errors within functions gracefully"
      ],
      codeExample: `# Function definition and documentation
def calculate_bmi(weight_kg, height_m):
    """
    Calculate Body Mass Index (BMI) from weight and height.
    
    Args:
        weight_kg (float): Weight in kilograms
        height_m (float): Height in meters
    
    Returns:
        float: BMI value
    """
    if height_m <= 0:
        raise ValueError("Height must be positive")
    
    bmi = weight_kg / (height_m ** 2)
    return round(bmi, 1)

def get_bmi_category(bmi):
    """Categorize BMI value into health categories."""
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"

def get_user_input(prompt, input_type=str, validator=None):
    """
    Get validated user input.
    
    Args:
        prompt (str): Message to display to user
        input_type (type): Type to convert input to
        validator (function): Optional validation function
    
    Returns:
        Converted and validated user input
    """
    while True:
        try:
            user_input = input_type(input(prompt))
            if validator and not validator(user_input):
                print("Invalid input. Please try again.")
                continue
            return user_input
        except ValueError:
            print(f"Please enter a valid {input_type.__name__}")

# Using functions to build a complete program
def main():
    """Main program function."""
    print("BMI Calculator")
    print("-" * 20)
    
    # Get user input with validation
    weight = get_user_input(
        "Enter weight (kg): ", 
        float, 
        lambda x: x > 0
    )
    
    height = get_user_input(
        "Enter height (m): ", 
        float, 
        lambda x: 0.5 <= x <= 3.0
    )
    
    # Calculate and display results
    try:
        bmi = calculate_bmi(weight, height)
        category = get_bmi_category(bmi)
        
        print(f"\\nResults:")
        print(f"BMI: {bmi}")
        print(f"Category: {category}")
        
    except ValueError as e:
        print(f"Error: {e}")

# Run the program
if __name__ == "__main__":
    main()`,
      challenge: "Create a text analysis program with functions to count words, find the longest word, and calculate reading time (assume 200 words per minute).",
      concepts: ["Function Definition", "Parameters and Arguments", "Return Values", "Scope", "Error Handling", "Code Organization"]
    },
    {
      id: 7,
      title: "API Integration and External Data",
      subtitle: "Connecting your programs to external services and data sources",
      theory: {
        title: "HTTP Requests and API Communication",
        content: `APIs (Application Programming Interfaces) allow programs to communicate with external services and access data from across the internet.

**HTTP Protocol Basics:**
- **GET**: Retrieve data from a server
- **POST**: Send data to a server
- **PUT**: Update existing data
- **DELETE**: Remove data

**Request/Response Cycle:**
1. Client sends HTTP request to server
2. Server processes the request
3. Server sends HTTP response back to client
4. Client processes the response data

**Common Data Formats:**
- **JSON**: JavaScript Object Notation (most common)
- **XML**: Extensible Markup Language
- **CSV**: Comma-Separated Values
- **Plain text**: Simple string data

**Error Handling:**
- **Network errors**: Connection timeouts, DNS failures
- **HTTP errors**: 404 Not Found, 500 Server Error
- **Data errors**: Invalid JSON, missing fields
- **Rate limiting**: Too many requests per time period

**Best Practices:**
- Always handle exceptions when making requests
- Respect API rate limits and terms of service
- Cache responses when appropriate
- Use appropriate timeouts for requests`
      },
      practicalSteps: [
        "Install and import the requests library",
        "Make GET requests to public APIs",
        "Parse JSON responses into Python data",
        "Handle network and data errors gracefully"
      ],
      codeExample: `import requests
import json
from typing import Dict, Any, Optional

def make_api_request(url: str, headers: Optional[Dict] = None, timeout: int = 10) -> Optional[Dict[str, Any]]:
    """
    Make a GET request to an API endpoint with error handling.
    
    Args:
        url (str): The API endpoint URL
        headers (dict, optional): HTTP headers to include
        timeout (int): Request timeout in seconds
    
    Returns:
        dict or None: Parsed JSON response or None if error
    """
    try:
        response = requests.get(url, headers=headers, timeout=timeout)
        response.raise_for_status()  # Raises exception for HTTP errors
        return response.json()
    
    except requests.exceptions.Timeout:
        print("Request timed out. Please try again.")
        return None
    
    except requests.exceptions.ConnectionError:
        print("Connection error. Check your internet connection.")
        return None
    
    except requests.exceptions.HTTPError as e:
        print(f"HTTP error occurred: {e}")
        return None
    
    except json.JSONDecodeError:
        print("Invalid JSON response received.")
        return None
    
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

def get_random_fact() -> str:
    """Get a random number fact from the Numbers API."""
    url = "http://numbersapi.com/random"
    
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        return response.text.strip()
    except Exception:
        return "Did you know? Programming is a great skill to learn!"

def get_dad_joke() -> str:
    """Get a random dad joke from the icanhazdadjoke API."""
    url = "https://icanhazdadjoke.com/"
    headers = {"Accept": "application/json"}
    
    joke_data = make_api_request(url, headers)
    if joke_data:
        return joke_data.get("joke", "Why don't scientists trust atoms? Because they make up everything!")
    else:
        return "Why don't scientists trust atoms? Because they make up everything!"

def get_weather_info(city: str) -> Dict[str, Any]:
    """
    Get weather information for a city.
    Note: This is a demo function - you'd need an API key for a real weather service.
    """
    # This is a mock response for demonstration
    mock_weather = {
        "city": city,
        "temperature": "22°C",
        "condition": "Partly cloudy",
        "humidity": "65%",
        "note": "This is mock data - use a real weather API with your own key"
    }
    return mock_weather

# Example usage in a bot
def run_api_bot():
    """Interactive bot that uses multiple APIs."""
    print("🤖 API Bot - I can get jokes, facts, and weather info!")
    print("Commands: joke, fact, weather [city], quit")
    
    while True:
        user_input = input("\\n> ").strip().lower()
        
        if user_input == "quit":
            print("Goodbye! Thanks for using API Bot!")
            break
        
        elif user_input == "joke":
            print("😄 " + get_dad_joke())
        
        elif user_input == "fact":
            print("🧠 " + get_random_fact())
        
        elif user_input.startswith("weather "):
            city = user_input[8:].strip()
            if city:
                weather = get_weather_info(city)
                print(f"🌤️ Weather in {weather['city']}: {weather['temperature']}, {weather['condition']}")
            else:
                print("Please specify a city: weather [city name]")
        
        else:
            print("Available commands: joke, fact, weather [city], quit")

# Run the bot
if __name__ == "__main__":
    run_api_bot()`,
      challenge: "Create a news bot that fetches headlines from a public news API and allows users to search for articles by keyword or category.",
      concepts: ["HTTP Requests", "JSON Parsing", "Error Handling", "API Integration", "External Libraries"]
    },
    {
      id: 8,
      title: "Building Complete Applications",
      subtitle: "Combining all concepts to create sophisticated, production-ready bots",
      theory: {
        title: "Software Architecture and Design Patterns",
        content: `Building complete applications requires understanding how to structure code, manage complexity, and create maintainable systems.

**Application Architecture:**
- **Separation of Concerns**: Different parts handle different responsibilities
- **Modular Design**: Break functionality into independent modules
- **Data Flow**: How information moves through your application
- **Error Boundaries**: Isolate and handle errors appropriately

**Design Patterns:**
- **Command Pattern**: Map user inputs to specific actions
- **Strategy Pattern**: Different algorithms for the same task
- **Observer Pattern**: Notify components when state changes
- **Factory Pattern**: Create objects based on conditions

**Code Organization:**
- **Main function**: Entry point and high-level flow
- **Business logic**: Core functionality separated from I/O
- **Data layer**: How you store and retrieve information
- **Presentation layer**: How you interact with users

**Production Considerations:**
- **Logging**: Record important events and errors
- **Configuration**: External settings and parameters
- **Testing**: Verify your code works correctly
- **Documentation**: Help others understand your code
- **Performance**: Optimize for speed and memory usage`
      },
      practicalSteps: [
        "Design application architecture before coding",
        "Implement proper error handling and logging",
        "Create modular, testable code",
        "Add configuration and customization options"
      ],
      codeExample: `import requests
import json
import logging
from datetime import datetime
from typing import Dict, List, Any, Optional
from dataclasses import dataclass

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@dataclass
class BotConfig:
    """Configuration settings for the bot."""
    name: str = "SmartBot"
    version: str = "1.0.0"
    max_retries: int = 3
    timeout: int = 10
    log_conversations: bool = True

class APIService:
    """Handles all external API communications."""
    
    def __init__(self, config: BotConfig):
        self.config = config
        self.session = requests.Session()
        self.session.timeout = config.timeout
    
    def get_joke(self) -> Optional[str]:
        """Fetch a random joke from API."""
        try:
            response = self.session.get(
                "https://icanhazdadjoke.com/",
                headers={"Accept": "application/json"}
            )
            response.raise_for_status()
            return response.json().get("joke")
        except Exception as e:
            logger.error(f"Failed to fetch joke: {e}")
            return None
    
    def get_fact(self) -> Optional[str]:
        """Fetch a random fact from API."""
        try:
            response = self.session.get("http://numbersapi.com/random")
            response.raise_for_status()
            return response.text.strip()
        except Exception as e:
            logger.error(f"Failed to fetch fact: {e}")
            return None

class ConversationManager:
    """Manages conversation state and history."""
    
    def __init__(self, config: BotConfig):
        self.config = config
        self.history: List[Dict[str, Any]] = []
        self.user_preferences: Dict[str, Any] = {}
    
    def log_interaction(self, user_input: str, bot_response: str):
        """Log conversation for analysis."""
        if self.config.log_conversations:
            interaction = {
                "timestamp": datetime.now().isoformat(),
                "user_input": user_input,
                "bot_response": bot_response
            }
            self.history.append(interaction)
            logger.info(f"User: {user_input} | Bot: {bot_response[:50]}...")
    
    def get_conversation_stats(self) -> Dict[str, Any]:
        """Get statistics about the conversation."""
        return {
            "total_interactions": len(self.history),
            "start_time": self.history[0]["timestamp"] if self.history else None,
            "most_recent": self.history[-1]["timestamp"] if self.history else None
        }

class CommandProcessor:
    """Processes user commands and generates responses."""
    
    def __init__(self, api_service: APIService, conversation_manager: ConversationManager):
        self.api_service = api_service
        self.conversation_manager = conversation_manager
        self.commands = {
            "joke": self._handle_joke,
            "fact": self._handle_fact,
            "stats": self._handle_stats,
            "help": self._handle_help,
            "quit": self._handle_quit
        }
    
    def process_command(self, user_input: str) -> tuple[str, bool]:
        """
        Process user input and return response and continue flag.
        
        Returns:
            tuple: (response_message, should_continue)
        """
        command = user_input.strip().lower()
        
        if command in self.commands:
            response, should_continue = self.commands[command]()
        else:
            response = f"Unknown command: '{command}'. Type 'help' for available commands."
            should_continue = True
        
        self.conversation_manager.log_interaction(user_input, response)
        return response, should_continue
    
    def _handle_joke(self) -> tuple[str, bool]:
        joke = self.api_service.get_joke()
        if joke:
            return f"😄 {joke}", True
        else:
            return "Sorry, I couldn't fetch a joke right now. Try again later!", True
    
    def _handle_fact(self) -> tuple[str, bool]:
        fact = self.api_service.get_fact()
        if fact:
            return f"🧠 {fact}", True
        else:
            return "Sorry, I couldn't fetch a fact right now. Try again later!", True
    
    def _handle_stats(self) -> tuple[str, bool]:
        stats = self.conversation_manager.get_conversation_stats()
        return f"📊 Conversation stats: {stats['total_interactions']} interactions", True
    
    def _handle_help(self) -> tuple[str, bool]:
        help_text = """
Available commands:
• joke - Get a random joke
• fact - Get a random fact
• stats - View conversation statistics
• help - Show this help message
• quit - Exit the bot
        """.strip()
        return help_text, True
    
    def _handle_quit(self) -> tuple[str, bool]:
        stats = self.conversation_manager.get_conversation_stats()
        return f"Goodbye! We had {stats['total_interactions']} great interactions. See you next time! 👋", False

class SmartBot:
    """Main bot application class."""
    
    def __init__(self, config: Optional[BotConfig] = None):
        self.config = config or BotConfig()
        self.api_service = APIService(self.config)
        self.conversation_manager = ConversationManager(self.config)
        self.command_processor = CommandProcessor(
            self.api_service, 
            self.conversation_manager
        )
        logger.info(f"Initialized {self.config.name} v{self.config.version}")
    
    def start(self):
        """Start the bot's main interaction loop."""
        print(f"🤖 Welcome to {self.config.name}!")
        print("I'm an intelligent bot that can tell jokes, share facts, and more.")
        print("Type 'help' to see what I can do, or 'quit' to exit.\\n")
        
        try:
            while True:
                user_input = input("> ").strip()
                
                if not user_input:
                    continue
                
                response, should_continue = self.command_processor.process_command(user_input)
                print(f"{response}\\n")
                
                if not should_continue:
                    break
                    
        except KeyboardInterrupt:
            print("\\n\\nBot interrupted by user. Goodbye! 👋")
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            print("An unexpected error occurred. Please restart the bot.")

def main():
    """Main entry point for the application."""
    # You can customize the bot configuration here
    config = BotConfig(
        name="MyAwesomeBot",
        version="2.0.0",
        max_retries=5,
        log_conversations=True
    )
    
    bot = SmartBot(config)
    bot.start()

if __name__ == "__main__":
    main()`,
      challenge: "Design and implement a personal assistant bot that can manage a to-do list, set reminders, and provide daily summaries. Include data persistence and error recovery.",
      concepts: ["Software Architecture", "Design Patterns", "Error Handling", "Logging", "Configuration", "Code Organization"]
    }
  ];

  const features = [
    { icon: Zap, text: "Comprehensive Python fundamentals" },
    { icon: Heart, text: "Theory combined with practical application" },
    { icon: Users, text: "Production-ready code examples" },
    { icon: CheckCircle, text: "Progressive skill building" }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const nextSlide = () => {
    if (currentSlide < introSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const startTutorial = () => {
    setShowIntro(false);
    setShowLessons(true);
  };

  const goToLessons = () => {
    setShowIntro(false);
    setShowLessons(true);
  };

  const goHome = () => {
    setShowIntro(true);
    setShowLessons(false);
    setCurrentSlide(0);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        {/* Background Animation */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
              animate={{
                x: [0, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
                y: [0, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-lg bg-slate-800/30 rounded-3xl border border-slate-700/50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${introSlides[currentSlide].color} flex items-center justify-center`}>
                  {React.createElement(introSlides[currentSlide].icon, { className: "w-10 h-10 text-white" })}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {introSlides[currentSlide].title}
                </h1>
                
                <p className="text-xl text-blue-300 mb-6">
                  {introSlides[currentSlide].subtitle}
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  {introSlides[currentSlide].content}
                </p>
              </div>

              {/* Features (only on first slide) */}
              {currentSlide === 0 && (
                <div className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center space-x-3 p-4 bg-slate-900/50 rounded-xl"
                      >
                        <feature.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="p-8 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {introSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentSlide 
                            ? 'bg-blue-400 scale-125' 
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {currentSlide > 0 && (
                      <button
                        onClick={prevSlide}
                        className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                      >
                        Previous
                      </button>
                    )}
                    
                    {currentSlide < introSlides.length - 1 ? (
                      <button
                        onClick={nextSlide}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all flex items-center space-x-2 shadow-lg"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={startTutorial}
                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all flex items-center space-x-2 shadow-lg text-lg font-semibold"
                      >
                        <Play className="w-5 h-5" />
                        <span>Start Learning</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Encouragement Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-slate-400 text-lg">
              Master Python programming through practical bot development 🚀
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showLessons) {
    const lesson = lessons[currentLesson];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation Bar */}
        <nav className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={goHome}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Back to Intro</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-blue-400" />
              <span className="text-white font-bold">Python Bot Development</span>
            </div>
            
            <div className="text-slate-300 text-sm">
              Lesson {currentLesson + 1} of {lessons.length}
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto p-6">
          {/* Lesson Navigation */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-white">Tutorial Lessons</h1>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  disabled={currentLesson === 0}
                  className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
                  disabled={currentLesson === lessons.length - 1}
                  className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Lesson Progress */}
            <div className="flex space-x-2 mb-6">
              {lessons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLesson(index)}
                  className={`flex-1 h-2 rounded-full transition-all ${
                    index === currentLesson
                      ? 'bg-blue-500'
                      : index < currentLesson
                      ? 'bg-green-500'
                      : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Current Lesson */}
          <motion.div
            key={currentLesson}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 overflow-hidden"
          >
            {/* Lesson Header */}
            <div className="p-8 border-b border-slate-700/50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{lesson.title}</h2>
                  <p className="text-xl text-blue-300">{lesson.subtitle}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Lesson {lesson.id}
                </div>
              </div>
              
              {/* Concepts Covered */}
              <div className="flex flex-wrap gap-2 mt-4">
                {lesson.concepts.map((concept, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Lesson Content */}
            <div className="p-8">
              <div className="space-y-8">
                {/* Theory Section */}
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                  <button
                    onClick={() => toggleSection(`theory-${lesson.id}`)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{lesson.theory.title}</h3>
                        <p className="text-purple-300 text-sm">Click to expand theory and concepts</p>
                      </div>
                    </div>
                    {expandedSections[`theory-${lesson.id}`] ? (
                      <EyeOff className="w-5 h-5 text-purple-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-purple-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections[`theory-${lesson.id}`] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="prose prose-slate prose-invert max-w-none">
                            {lesson.theory.content.split('\n\n').map((paragraph, index) => (
                              <div key={index} className="mb-4">
                                {paragraph.split('\n').map((line, lineIndex) => {
                                  if (line.startsWith('**') && line.endsWith('**')) {
                                    return (
                                      <h4 key={lineIndex} className="text-lg font-semibold text-white mt-4 mb-2">
                                        {line.slice(2, -2)}
                                      </h4>
                                    );
                                  }
                                  return (
                                    <p key={lineIndex} className="text-slate-300 leading-relaxed">
                                      {line.split('**').map((part, i) => 
                                        i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                                      )}
                                    </p>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Practical Steps */}
                <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <Target className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Learning Objectives</h3>
                      <ul className="space-y-2">
                        {lesson.practicalSteps.map((step, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-green-100">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700/50">
                  <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300 font-medium">Python Code Example</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(lesson.codeExample)}
                      className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
                    >
                      {copiedCode === lesson.codeExample ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-sm">Copy</span>
                    </button>
                  </div>
                  <pre className="p-6 text-sm text-slate-300 overflow-x-auto">
                    <code>{lesson.codeExample}</code>
                  </pre>
                </div>
                
                {/* Challenge */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-200 mb-2">Practice Challenge</h4>
                      <p className="text-yellow-100">{lesson.challenge}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Navigation Footer */}
            <div className="p-6 border-t border-slate-700/50 flex items-center justify-between">
              <button
                onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                disabled={currentLesson === 0}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Lesson</span>
              </button>
              
              <span className="text-slate-400">
                {currentLesson + 1} of {lessons.length}
              </span>
              
              {currentLesson < lessons.length - 1 ? (
                <button
                  onClick={() => setCurrentLesson(currentLesson + 1)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                  <span>Next Lesson</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                  <span>Tutorial Complete!</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;