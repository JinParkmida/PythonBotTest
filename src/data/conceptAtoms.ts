import { ConceptAtomType } from '../types';
import codeExample1 from '../python-examples/code_example_1.py?raw';
import codeExample2 from '../python-examples/code_example_2.py?raw';
import codeExample3 from '../python-examples/code_example_3.py?raw';
import codeExample4 from '../python-examples/code_example_4.py?raw';
import codeExample5 from '../python-examples/code_example_5.py?raw';
import codeExample6 from '../python-examples/code_example_6.py?raw';
import codeExample7 from '../python-examples/code_example_7.py?raw';
import codeExample8 from '../python-examples/code_example_8.py?raw';
import codeExample9 from '../python-examples/code_example_9.py?raw';
import codeExample10 from '../python-examples/code_example_10.py?raw';
import codeExample11 from '../python-examples/code_example_11.py?raw';
import codeExample12 from '../python-examples/code_example_12.py?raw';
import codeExample13 from '../python-examples/code_example_13.py?raw';
import codeExample14 from '../python-examples/code_example_14.py?raw';
import codeExample15 from '../python-examples/code_example_15.py?raw';
import codeExample16 from '../python-examples/code_example_16.py?raw';
import codeExample17 from '../python-examples/code_example_17.py?raw';
import codeExample18 from '../python-examples/code_example_18.py?raw';
import codeExample19 from '../python-examples/code_example_19.py?raw';
import codeExample20 from '../python-examples/code_example_20.py?raw';
import codeExample21 from '../python-examples/code_example_21.py?raw';
import codeExample22 from '../python-examples/code_example_22.py?raw';
import codeExample23 from '../python-examples/code_example_23.py?raw';
import codeExample24 from '../python-examples/code_example_24.py?raw';
import codeExample25 from '../python-examples/code_example_25.py?raw';
import codeExample26 from '../python-examples/code_example_26.py?raw';
import codeExample27 from '../python-examples/code_example_27.py?raw';
import codeExample28 from '../python-examples/code_example_28.py?raw';
import solution1 from '../python-examples/solution_1.py?raw';
import solution2 from '../python-examples/solution_2.py?raw';
import solution3 from '../python-examples/solution_3.py?raw';
import solution4 from '../python-examples/solution_4.py?raw';
import solution5 from '../python-examples/solution_5.py?raw';
import solution6 from '../python-examples/solution_6.py?raw';
import solution7 from '../python-examples/solution_7.py?raw';
import solution8 from '../python-examples/solution_8.py?raw';
import solution9 from '../python-examples/solution_9.py?raw';
import solution10 from '../python-examples/solution_10.py?raw';
import solution11 from '../python-examples/solution_11.py?raw';
import solution12 from '../python-examples/solution_12.py?raw';

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
            codeExample: codeExample1
          },
          {
            title: 'Running Your First Line',
            content: `Here's the magic moment! Type the code example above into the main code area, then click the green "Run" button. See? Your text appeared in the terminal!

**This is the core loop:** Write code → Run code → See result. You'll do this a lot, and it never gets old!

**Pro Tip:** If you see any red text (errors), don't panic! Errors are just your computer's way of saying "I didn't understand that." We'll learn to read them like friendly hints.`
          },
          {
            title: 'Quick Tasks',
            content: `1. Create a free Replit account and open a new Python repl.\n2. Run the sample print code and watch the terminal for output.\nThese tasks reinforce your setup and prepare you for understanding what a bot is next.`
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
          },
          {
            type: 'quiz',
            question: 'Where does the program output appear when you click Run?',
            options: ['In the terminal/console', 'On a separate website', 'In the code editor', 'Nowhere'],
            solution: 'In the terminal/console',
            hints: [
              'Look at the panel where "Hello, Bot Builder!" showed up',
              'It appears to the right of your code editor'
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
          },
          {
            title: 'Quick Tasks',
            content: `1. Think of two everyday examples of bots or automated helpers.\n2. Note what input they take and what output they give you.\nThese questions reinforce the listen-think-talk idea and get you ready to code your first bot.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'quiz',
            question: 'Which step is NOT part of a simple bot?',
            options: ['Listen', 'Think', 'Sleep', 'Talk'],
            solution: 'Sleep',
            hints: [
              'A bot processes information and responds.',
              'One option here doesn\'t involve interaction.'
            ]
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
            codeExample: codeExample2
          },
          {
            title: 'Getting Input (The Listener)',
            content: `Now let's make your bot interactive! The \`input()\` function is special - it does two things:
1. It prints the message inside the parentheses
2. It pauses your program until you type something and press Enter

Whatever you type gets stored in a "variable" (think of it as a labeled box) so your bot can remember it.`,
            codeExample: codeExample3
          },
          {
            title: 'Basic Decision Making (The Thinker)',
            content: `Now for your bot's first "brain cell"! The \`if\` and \`else\` statements let your bot make simple choices based on what the user says.

**Important:** The \`==\` asks "is this exactly equal to?" It's different from a single \`=\` which means "store this in that box."`,
            codeExample: codeExample4
          },
          {
            title: 'Common Input Mistakes',
            content: `Users don't always type what you expect. If you ask for a number and they type words, Python raises a \`ValueError\`. Wrap number conversions in a \`try/except\` block so your bot can respond nicely instead of crashing.`,
            codeExample: codeExample5
          },
          {
            title: 'Quick Tasks',
            content: `1. Modify the hello bot so it asks for your name and greets you.\n2. Answer the pizza question with unexpected words to see how the bot reacts.\nThese small experiments reinforce input handling and prepare you to store data in variables next.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a bot that asks for your favorite color and then says "Wow, [color] is a beautiful color!" Try it with different colors.',
            solution: solution1,
            hints: [
              'Use input() to ask the question and store the answer',
              'Use print() with + to combine your message with their answer',
              'Remember to put quotes around your text parts',
              'If you expect numbers later, use try/except with int(input())'
            ]
          },
          {
            type: 'code',
            question: 'Make a bot that asks if you like pizza and responds differently to "yes" and "no". What happens if someone types something else?',
            solution: solution2,
            hints: [
              'Use input() to get their answer',
              'Use if/else to check if they said "yes"',
              'The else will catch "no" and anything else they type',
              'Try typing "YES" or "Yes" - what happens? (We\'ll fix this later!)',
              'Use try/except around int() if you ever ask for numbers'
            ]
          },
          {
            type: 'code',
            question: 'Update the pizza bot to respond to "maybe" with a friendly message in addition to yes or no.',
            solution: solution3,
            hints: [
              'Add an elif branch that checks for "maybe"',
              'Remember to compare the input exactly',
              'Keep the existing else for all other answers'
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
            codeExample: codeExample6
          },
          {
            title: 'Different Types of Information',
            content: `Your bot can remember different types of information:

**Text (strings):** Always in quotes - "Hello", "Pizza", "123 Main St"
**Numbers (integers):** No quotes - 25, 100, -5
**Decimal numbers (floats):** No quotes - 3.14, 25.5, -2.7
**True/False (booleans):** Special words - True, False

Python is smart and figures out what type each variable is automatically!`,
            codeExample: codeExample7
          },
          {
            title: 'Variables Can Change',
            content: `The cool thing about variables is they can change! You can put new things in the same labeled box anytime.`,
            codeExample: codeExample8
          },
          {
            title: 'Beware of Bad Input',
            content: `When you turn the result of \`input()\` into a number, users might type something that isn't numeric. This triggers a \`ValueError\`. Use \`try/except\` so your bot can explain the problem instead of crashing.`,
            codeExample: codeExample9
          },
          {
            title: 'Quick Tasks',
            content: `1. Create variables for your favorite movie and rating.\n2. Use type() on a number and a string to see their types.\nThese tasks strengthen your understanding of variables and get you ready for using them in choices.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a bot that asks for someone\'s name and age, stores them in variables, then calculates and tells them what year they were born.',
            solution: solution4,
            hints: [
              'Use input() to get the name and age',
              'Use int() to convert the age from text to a number',
              'Calculate birth year by subtracting age from current year (2024)',
              'Use str() to convert the birth year back to text for printing',
              'Wrap the int() call in try/except to handle bad input'
            ]
          },
          {
            type: 'quiz',
            question: 'Which variable type stores True or False values?',
            options: ['string', 'integer', 'boolean', 'float'],
            solution: 'boolean',
            hints: [
              'Booleans are often used with if statements',
              'They represent yes or no answers'
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
            codeExample: codeExample10
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
            codeExample: codeExample11
          },
          {
            title: 'Handling Different Cases',
            content: `Remember when we tried typing "YES" instead of "yes" and it didn't work? Let's fix that! The \`.lower()\` method converts text to lowercase, so "YES", "yes", and "Yes" all become "yes".`,
            codeExample: codeExample12
          },
          {
            title: 'Troubleshooting User Choices',
            content: `Sometimes users type letters when you expect numbers or give unexpected answers. Wrap number conversions in \`try/except\` and provide friendly error messages when their input doesn't match what you expect.`,
            codeExample: codeExample13
          },
          {
            title: 'Quick Tasks',
            content: `1. Write a short script that prints \"small\" if a number is less than 5 and \"big\" otherwise.\n2. Experiment with .lower() by typing YES, Yes, and yes.\nThese tasks build on variables and prepare you for using loops next.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a simple restaurant bot that asks what meal they want (breakfast/lunch/dinner) and recommends a dish for each, with a default message for anything else.',
            solution: solution5,
            hints: [
              'Use input() to ask about the meal',
              'Use .lower() to handle different capitalizations',
              'Use if/elif/else to check for each meal type',
              'Include a helpful else message for unexpected inputs',
              'If something odd happens, you can use try/except to handle it'
            ]
          },
          {
            type: 'code',
            question: 'Make a "Magic 8-Ball" bot that asks a yes/no question, then gives a random response. Use a number input (1-3) to pick from three different answers.',
            solution: solution6,
            hints: [
              'Ask for their question first (just for fun)',
              'Get a number from 1-3 using int(input())',
              'Use if/elif/else to give different responses',
              'The \\n in the print makes a blank line for better formatting',
              'Wrap the number input in try/except to catch non-numbers'
            ]
          }
          ,
          {
            type: 'quiz',
            question: 'Which keyword lets your bot check another condition after an if?',
            options: ['elif', 'else', 'loop', 'func'],
            solution: 'elif',
            hints: [
              'It is short for "else if"',
              'You use it between if and else blocks'
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
            codeExample: codeExample14
          },
          {
            title: 'For Loops: When You Know How Many Times',
            content: `For loops are perfect when you know exactly how many times you want to repeat something. The \`range()\` function creates a sequence of numbers for you.

**range(5)** gives you: 0, 1, 2, 3, 4 (5 numbers starting from 0)
**range(1, 6)** gives you: 1, 2, 3, 4, 5 (from 1 to 5)
**range(0, 10, 2)** gives you: 0, 2, 4, 6, 8 (every 2nd number)`,
            codeExample: codeExample15
          },
          {
            title: 'While Loops: Keep Going Until...',
            content: `While loops keep repeating as long as a condition is True. They're perfect for making your bot keep asking questions until the user wants to quit.

**Important:** Make sure your while loop can eventually stop, or it will run forever! Always include a way for the condition to become False.`,
            codeExample: codeExample16
          },
          {
            title: 'Combining Loops with Choices',
            content: `The real magic happens when you combine loops with if/else statements. Now your bot can have ongoing conversations and make different responses based on what the user says!`,
            codeExample: codeExample17
          },
          {
            title: 'Avoiding Infinite Loops',
            content: `If your loop expects a number and someone types text, Python throws a \`ValueError\` and the loop stops. Use \`try/except\` inside the loop to catch mistakes and continue asking.`,
            codeExample: codeExample18
          },
          {
            title: 'Quick Tasks',
            content: `1. Use a for loop to print numbers 1-5.\n2. Write a while loop that keeps asking for a word until the user types 'stop'.\nThese tasks reinforce looping basics and prepare you to call APIs repeatedly later.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a "Compliment Bot" that asks for the user\'s name, then gives them 3 different compliments using a for loop.',
            solution: solution7,
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
            solution: solution8,
            hints: [
              'Set a secret number at the start',
              'Use while True: to keep asking for guesses',
              'Use int(input()) to get their guess as a number',
              'Compare their guess to your secret number',
              'Use break to stop the loop when they guess correctly',
              'Add try/except around int(input()) to catch bad guesses'
            ]
          },
          {
            type: 'quiz',
            question: 'Which loop is best when you do NOT know how many times you will repeat?',
            options: ['for loop', 'while loop', 'both', 'neither'],
            solution: 'while loop',
            hints: [
              'A for loop uses a fixed range',
              'The other loop keeps going until a condition changes'
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
            codeExample: codeExample19
          },
          {
            title: 'Installing the Requests Library',
            content: `Before we can talk to APIs, we need to install a special tool called \`requests\`. Think of it as getting a library card that lets your bot visit websites and ask for information.

**In Replit:** Good news! It's usually already installed. If not, you can install it by typing this in the terminal (the black area):

\`pip install requests\`

**What this does:** \`pip\` is Python's tool for adding new features. \`install requests\` gets the "requests" library and adds it to your Python setup.`,
            codeExample: codeExample20
          },
          {
            title: 'Your First API Call',
            content: `Let's break down what happens when your bot talks to an API:

1. **requests.get()** - Your bot "visits" the API's website
2. **headers** - Your bot politely asks for the data in a computer-friendly format (JSON)
3. **response.json()** - Your bot translates the response into Python data
4. **joke_data["joke"]** - Your bot picks out just the joke part

It's like ordering at a restaurant: you ask for a specific dish, they bring you a whole tray, and you pick out what you want to eat.`,
            codeExample: codeExample21
          },
          {
            title: 'Building a Joke Bot',
            content: `Now let's put it all together into a real bot that can tell jokes on demand! We'll combine everything we've learned: loops, user input, and APIs.`,
            codeExample: codeExample22
          },
          {
            title: 'Handling API Errors',
            content: `APIs sometimes fail or your internet connection might drop. When \`requests.get\` can't reach the server, it raises an exception. Check the status code and wrap the call in \`try/except\` so your bot can display a friendly message instead of crashing.`,
            codeExample: codeExample23
          },
          {
            title: 'Quick Tasks',
            content: `1. Run the get_dad_joke() function and print the result.\n2. Change the URL to https://catfact.ninja/fact to fetch a cat fact.\nThese tasks build on loops and prepare you for customizing your own bot.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Modify the joke bot to keep track of how many jokes it has told, and display the count each time.',
            solution: solution9,
            hints: [
              'Create a joke_count variable before the loop',
              'Add 1 to joke_count each time you tell a joke',
              'Display the count when telling each joke',
              'Show the total count when they quit',
              'Wrap the API call in try/except in case the request fails'
            ]
          },
          {
            type: 'code',
            question: 'Create a "Fact Bot" using the Numbers API (http://numbersapi.com/random). Make it get random number facts instead of jokes.',
            solution: solution10,
            hints: [
              'Use http://numbersapi.com/random as the URL',
              'This API returns plain text, so use response.text instead of response.json()',
              'Change the prompts to ask for "fact" instead of "joke"',
              'The structure is very similar to the joke bot',
              'Use try/except around the API call to handle network errors'
            ]
          },
          {
            type: 'quiz',
            question: 'Which Python library do we use to make HTTP requests in this lesson?',
            options: ['requests', 'flask', 'numpy', 'replit'],
            solution: 'requests',
            hints: [
              'It is installed with pip and imported at the top',
              'This library lets your bot talk to websites'
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
            codeExample: codeExample24
          },
          {
            title: 'Adding Multiple Features with elif',
            content: `Instead of just telling jokes, let's make a bot that can do several things! We'll use \`elif\` to check for different commands.`,
            codeExample: codeExample25
          },
          {
            title: 'Adding Randomness and Variety',
            content: `To make your bot feel more natural, add some randomness! Instead of always saying the same thing, your bot can pick from different responses.`,
            codeExample: codeExample26
          },
          {
            title: 'Remembering User Information',
            content: `Make your bot more personal by remembering things about the user! We can store information in variables and use it throughout the conversation.`,
            codeExample: codeExample27
          },
          {
            title: 'Quick Tasks',
            content: `1. Brainstorm three features you\'d like your final bot to have.\n2. Add a list of random greetings to your existing bot and choose one with random.choice().\nThese tasks reinforce everything so far and set you up for the final challenge.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'code',
            question: 'Create a "Study Buddy Bot" that can give study tips, motivational quotes, and quiz the user with simple math problems. Include at least 3 different features.',
            solution: solution11,
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
            solution: solution12,
            hints: [
              'Use a list to store all the moods they share',
              'Create functions for adding moods, showing summaries, and giving advice',
              'Use enumerate() to number the moods in the summary',
              'Give different advice based on the type of mood',
              'Remember their name and use it throughout the conversation'
            ]
          },
          {
            type: 'quiz',
            question: 'Why do we use random.choice() in our bot?',
            options: ['To pick a random response', 'To connect to an API', 'To store user input', 'To check conditions'],
            solution: 'To pick a random response',
            hints: [
              'It helps vary the bot\'s replies',
              'Used with a list of possible messages'
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
            codeExample: codeExample28
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
          ],
          {
            title: 'Quick Tasks',
            content: `1. Review each bot you built and note one improvement for each.\n2. List the features you want in your challenge bot.\nThese reflections reinforce what you\'ve learned and focus you on the upcoming project.`
          }
        ]
      },
      interactive: {
        challenges: [
          {
            type: 'quiz',
            question: 'What should you focus on first when starting the challenge bot?',
            options: ['Set up one main feature', 'Add every API you can find', 'Write complex algorithms immediately', 'Skip testing and hope for the best'],
            solution: 'Set up one main feature',
            hints: [
              'Start small and build gradually',
              'Testing early helps prevent bugs'
            ]
          }
        ]
      }
    },
    tags: ['conclusion', 'challenge-prep', 'success-strategy', 'next-steps']
  }
];