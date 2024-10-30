# Function to get the user's name
def get_user_name():
    """Ask for the user's name and return it."""
    return input("Please enter your name: ")

# Function to get the user's age
def get_user_age():
    """Ask for the user's age, check if it's 18 or above, and return it."""
    while True:
        try:
            age = int(input("Please enter your age: "))
            if age >= 18:
                return age
            else:
                print("Error: You must be 18 or older to proceed.")
        except ValueError:
            print("Invalid input. Please enter a number.")

# Function to get the user's hobbies
def get_user_hobbies():
    """Ask for the user's hobbies and return them as a list."""
    hobbies = input("Please list your hobbies (comma-separated): ")
    return hobbies.split(", ")

# Main program logic
def main():
    # Show welcome message
    print("Welcome to the program!")
    
    # Get user details
    user_name = get_user_name()
    user_age = get_user_age()
    user_hobbies = get_user_hobbies()
    
    # Thank you message
    print(f"Thank you, {user_name}! Here is a summary of your information:")
    print(f"Age: {user_age}")
    print(f"Hobbies: {', '.join(user_hobbies)}")
    print("End of program.")

# Run the main program
main()
