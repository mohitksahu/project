import os

def get_folder_structure(path):
    folder_structure = ""
    
    # Walk through the directory and its subdirectories
    for root, dirs, files in os.walk(path):
        # Calculate the depth of the current directory
        level = root.replace(path, '').count(os.sep)
        indent = ' ' * 4 * level  # Indentation based on the depth
        folder_structure += f"{indent}{os.path.basename(root)}/\n"
        
        # Add subfolders
        for dir in dirs:
            folder_structure += f"{indent}    {dir}/\n"
        
        # Add files
        for file in files:
            folder_structure += f"{indent}    {file}\n"
    
    return folder_structure

def save_folder_structure(path):
    # Get the name of the main folder
    main_folder_name = os.path.basename(os.path.abspath(path))
    
    # Get the folder structure
    folder_structure = get_folder_structure(path)
    
    # Save the structure to a text file with the main folder's name
    with open(f"{main_folder_name}_structure.txt", 'w') as file:
        file.write(folder_structure)
    
    print(f"Folder structure of '{main_folder_name}' has been saved to '{main_folder_name}_structure.txt'")

# Example usage
PATH = r"C:\Users\Mohit Kumar Sahu\Desktop\project\project"  # Set the folder path here
save_folder_structure(PATH)
