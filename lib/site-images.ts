// Central place to manage all website images.
// Drop your image files into /public/images and update the paths below.

// Hero image used in the header background (picked from your uploads)
// Default hero image (first banner)
export const HERO_IMAGE = "/images/ban1.jpg";

// A rotating set of images for the homepage hero slider (uses the files you uploaded)
export const HERO_IMAGES: string[] = [
  "/images/ban1.jpg",
  "/images/ban2.webp",
  "/images/ban3.jpg",
  "/images/ban4.webp",
  "/images/ban5.jpg",
];

export const PRODUCT_IMAGES: Record<string, string> = {
  // Map to the files you placed in /public/images
  "sliding-window": "/images/WhatsApp%20Image%202025-10-26%20at%208.23.05%20AM.jpeg",
  "casement-window": "/images/WhatsApp%20Image%202025-10-26%20at%208.23.06%20AM.jpeg",
  "tilt-turn": "/images/WhatsApp%20Image%202025-10-26%20at%208.23.07%20AM.jpeg",
  // Using the remaining image for French door; feel free to replace with a dedicated French-door photo later
  "french-door": "/images/WhatsApp%20Image%202025-10-26%20at%208.23.06%20AM%20(1).jpeg",
  // Reuse the panoramic sliding-door image for the Sliding Door product as well
  "sliding-door": "/images/WhatsApp%20Image%202025-10-26%20at%208.23.12%20AM.jpeg",
};

// Note: Until you add your own images, ensure each referenced path exists.
// You can temporarily point these constants to "/images/placeholder.svg" to show a neutral placeholder.
