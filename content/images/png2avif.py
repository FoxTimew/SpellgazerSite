import os
import sys
from PIL import Image

def convert_png_to_avif(input_folder):
    output_folder = os.path.join(os.path.dirname(__file__), 'output')
    os.makedirs(output_folder, exist_ok=True)

    for filename in os.listdir(input_folder):
        if filename.endswith('.png'):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + '.avif')
            try:
                img = Image.open(input_path)
                img.save(output_path, 'AVIF')
                print(f"Converted {filename} to AVIF")
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please drag and drop a folder onto this script.")
        sys.exit(1)

    input_folder = sys.argv[1]
    if not os.path.isdir(input_folder):
        print("Invalid directory provided.")
        sys.exit(1)

    convert_png_to_avif(input_folder)
