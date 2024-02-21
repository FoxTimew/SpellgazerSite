import cv2
import os

# Chemin de la vidéo d'entrée
video_path = 'placeholder.mp4'

# Chemin du répertoire de sortie pour les images extraites
output_folder = 'chemin/du/repertoire/de/sortie/'

# Créer le répertoire de sortie s'il n'existe pas déjà
os.makedirs(output_folder, exist_ok=True)

# Ouvrir la vidéo
cap = cv2.VideoCapture(video_path)

# Lire les images une par une et les sauvegarder
count = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    # Sauvegarder l'image dans le répertoire de sortie
    cv2.imwrite(os.path.join(output_folder, f'frame_{count:04d}.jpg'), frame)
    count += 1

# Libérer la capture vidéo
cap.release()
