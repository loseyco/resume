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
    # Get the script directory and go up to project root
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    photos_dir = project_root / 'photos'
    photos_dir.mkdir(exist_ok=True)
    
    # Find all image files (excluding HEIC and videos)
    # Use case-insensitive search to avoid duplicates
    all_files = glob.glob(str(photos_dir / '**' / '*'), recursive=True)
    photos = []
    seen = set()
    
    for file_path in all_files:
        file_lower = file_path.lower()
        # Check if it's an image (not HEIC, videos, or DNG)
        if (file_lower.endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif')) and 
            not file_lower.endswith(('.heic', '.mp4', '.mov', '.dng'))):
            # Use absolute path for uniqueness check
            abs_path = os.path.abspath(file_path)
            if abs_path not in seen:
                seen.add(abs_path)
                photos.append(file_path)
    
    # Sort by filename
    photos.sort()
    
    # Create a JavaScript file with photo paths in scripts folder
    js_content = "// Auto-generated photo list\n"
    js_content += "// Auto-generated on photo scan - displays photos in random order\n"
    js_content += "const photoFiles = [\n"
    for photo in photos:
        # Get relative path from project root
        photo_path = Path(photo)
        rel_path = photo_path.relative_to(project_root)
        # Escape quotes in filenames
        rel_path_str = str(rel_path).replace("'", "\\'").replace('"', '\\"')
        js_content += f"    '{rel_path_str}',\n"
    js_content += "];\n"
    js_content += "\n// Export for use in script.js\n"
    js_content += "if (typeof module !== 'undefined' && module.exports) {\n"
    js_content += "    module.exports = photoFiles;\n"
    js_content += "}\n"
    
    output_path = project_root / 'scripts' / 'photo-list.js'
    with open(output_path, 'w') as f:
        f.write(js_content)
    
    print(f"Found {len(photos)} photos")
    print(f"Generated scripts/photo-list.js with {len(photos)} photos")
    return photos

if __name__ == '__main__':
    organize_photos()

