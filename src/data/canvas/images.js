export const chapter = {
  slug: "canvas-images",
  title: "Gambar & Sprites",
  description: "Tampilkan, crop, dan manipulasi gambar di Canvas.",
  icon: "SiHtml5",
  color: "#E34F26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["canvas-drawing-basics"],
  tags: ["canvas", "images", "sprites", "drawImage"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## drawImage()

### Basic
\`\`\`javascript
const img = new Image();
img.src = 'foto.jpg';
img.onload = () => {
    ctx.drawImage(img, x, y);
    ctx.drawImage(img, x, y, width, height); // Resize
};
\`\`\`

### Crop & Draw
\`\`\`javascript
// drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
ctx.drawImage(
    img,
    50, 50, 100, 100,  // Source: crop dari (50,50) ukuran 100x100
    0, 0, 200, 200     // Destination: gambar di (0,0) ukuran 200x200
);
\`\`\`

## Sprite Animation

\`\`\`javascript
class Sprite {
    constructor(img, frameWidth, frameHeight, totalFrames) {
        this.img = img;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.totalFrames = totalFrames;
        this.currentFrame = 0;
        this.frameDelay = 5;
        this.delayCounter = 0;
    }
    
    update() {
        this.delayCounter++;
        if (this.delayCounter >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
            this.delayCounter = 0;
        }
    }
    
    draw(ctx, x, y) {
        ctx.drawImage(
            this.img,
            this.currentFrame * this.frameWidth, 0,
            this.frameWidth, this.frameHeight,
            x, y,
            this.frameWidth, this.frameHeight
        );
    }
}
\`\`\`

## Canvas ke Data URL

\`\`\`javascript
// Export canvas sebagai gambar
const dataURL = canvas.toDataURL('image/png');
const dataURL = canvas.toDataURL('image/jpeg', 0.8); // JPEG quality

// Download
const link = document.createElement('a');
link.download = 'canvas-export.png';
link.href = dataURL;
link.click();
\`\`\`
  `,

  quiz: [
    { question: "drawImage() bisa?", options: ["Hanya gambar utuh", "Basic, resize, dan crop", "Hanya crop", "Hanya resize"], correctAnswer: 1 },
    { question: "toDataURL() untuk?", options: ["Load gambar", "Export canvas ke image data URL", "Resize", "Filter"], correctAnswer: 1 }
  ],

  codeExamples: []
};