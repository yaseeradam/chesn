# Leader Profile Pictures

## How to Add Leader Photos

To add profile pictures for leaders, simply upload image files to this directory with the following names:

### Current Leaders:
- `chairman.jpg` - For Lukman Abdulrazak (Chairperson)
- `secretary.jpg` - For Yakubu Danazumi (Secretary General)

### Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 200x200 pixels (square aspect ratio recommended)
- **File Size**: Keep under 1MB for optimal loading
- **Quality**: High resolution, clear headshot photos work best

### Adding New Leaders:
1. Upload the image file to this `/public/leaders/` directory
2. Update the leadership page code to reference the new image
3. Use descriptive filenames like `treasurer.jpg`, `vice-chairman.jpg`, etc.

### Fallback Behavior:
If no image is found, the system will automatically display an emoji icon as a fallback, ensuring the page always looks professional.

### Example File Structure:
```
/public/leaders/
├── chairman.jpg
├── secretary.jpg
├── treasurer.jpg
├── vice-chairman.jpg
└── README.md
```

Simply drag and drop your leader photos into this folder and they will automatically appear on the leadership page!