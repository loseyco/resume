# How to Download Photos from Google Photos

Since Google Photos doesn't allow direct programmatic downloads without API setup, here are the easiest ways to get your photos:

## Method 1: Manual Download (Recommended - Easiest)

1. **Open your Google Photos album**: https://photos.app.goo.gl/xchprn5PxKr3D5fn6
2. **Download all photos at once**:
   - Click the "More options" menu (three dots)
   - Select "Download all" or "Save photos"
   - Extract the ZIP file
   - Copy all photos to the `photos` folder in this project

## Method 2: Individual Downloads

1. Open each photo in the album
2. Right-click on the photo → "Save image as..."
3. Save to: `C:\Users\pjlos\OneDrive\Projects\Resume\photos\`
4. Name them: `photo-1.jpg`, `photo-2.jpg`, etc. (or keep original names)

## Method 3: Google Takeout (For Many Photos)

1. Go to: https://takeout.google.com/
2. Select "Google Photos"
3. Choose your album or "All photos"
4. Download the archive
5. Extract and copy photos to the `photos` folder

## After Downloading

Once photos are in the `photos` folder:
1. Run: `python download_photos.py`
2. This will generate `photo-list.js` with all photo paths
3. The carousel will automatically detect and display them

## Quick Setup

```powershell
# Navigate to project folder
cd C:\Users\pjlos\OneDrive\Projects\Resume

# Run the organizer script
python download_photos.py
```

The script will:
- Scan the `photos` folder for images
- Generate a `photo-list.js` file with all photo paths
- The website will automatically use these photos in the carousel

