"""
Photo Download Script for Google Photos Album
This script helps download photos from your Google Photos album.

Note: Google Photos doesn't allow direct downloads without authentication.
You'll need to download photos manually or use the Google Photos API.

Instructions:
1. Open your Google Photos album in browser: https://photos.app.goo.gl/xchprn5PxKr3D5fn6
2. Right-click on each photo → "Save image as" → Save to the 'photos' folder
3. OR use Google Takeout to download all photos at once
4. Once photos are in the 'photos' folder, this script will organize them

Alternatively, you can use Google Photos API (requires setup):
- https://developers.google.com/photos/library/guides/get-started
"""

import os
import glob
from pathlib import Path

def organize_photos():
    """Organize photos in the photos folder and generate a list"""
    photos_dir = Path('photos')
    photos_dir.mkdir(exist_ok=True)
    
    # Find all image files
    image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.webp', '*.gif']
    photos = []
    
    for ext in image_extensions:
        photos.extend(glob.glob(str(photos_dir / ext)))
        photos.extend(glob.glob(str(photos_dir / ext.upper())))
    
    # Sort by filename
    photos.sort()
    
    # Create a JavaScript file with photo paths
    js_content = "// Auto-generated photo list\n"
    js_content += "const photoFiles = [\n"
    for photo in photos:
        # Get relative path from project root
        rel_path = str(Path(photo).relative_to(Path.cwd())).replace('\\', '/')
        js_content += f"    'photos/{Path(photo).name}',\n"
    js_content += "];\n"
    js_content += "\n// Export for use in script.js\n"
    js_content += "if (typeof module !== 'undefined' && module.exports) {\n"
    js_content += "    module.exports = photoFiles;\n"
    js_content += "}\n"
    
    with open('photo-list.js', 'w') as f:
        f.write(js_content)
    
    print(f"Found {len(photos)} photos")
    print(f"Generated photo-list.js with {len(photos)} photos")
    return photos

if __name__ == '__main__':
    organize_photos()

