import os
import argparse
from PIL import Image

def convert_to_webp(input_path, output_path):
    try:
        image = Image.open(input_path)
        if image.mode != "RGB":
            image = image.convert("RGB")
        output_file = os.path.splitext(os.path.basename(input_path))[0] + ".webp"
        output_path = os.path.join(output_path, output_file)
        image.save(output_path, "webp", quality=90)
        print(f"Conversion réussie : {output_file}")
    except Exception as e:
        print(f"Erreur lors de la conversion de {input_path} : {e}")

def change_photo_extensions(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith((".jpg", ".jpeg", ".png", ".bmp", ".gif")):
                file_path = os.path.join(root, file)
                convert_to_webp(file_path, root)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convertit les photos en .webp dans le dossier spécifié.")
    parser.add_argument("folder_path", help="Chemin du dossier contenant les photos à convertir en .webp")
    args = parser.parse_args()

    target_folder = args.folder_path
    change_photo_extensions(target_folder)
