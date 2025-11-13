import img1 from "../Images/project1/1.jpeg";
import img2 from "../Images/project1/2.jpeg";
import img3 from "../Images/project1/3.jpeg";
import img4 from "../Images/project1/5.jpeg";


export const projects = [
  {
    id: 1,
    number: "01",
    title: "ARCTIC CONCERT",
    category: "Music Event",
    date: "2024-03-12",
    image: img1,
    description:
      "An immersive live concert experience blending art and sound in the Arctic. Managed lighting, sound and brand visuals.",
    gallery:[img1, img2, img3, img4],
  },
  {
    id: 2,
    number: "02",
    title: "MARSHALL HEADPHONES",
    category: "Product Launch",
    date: "2024-08-01",
    image: img3,
    description:
      "Campaign launch for Marshall’s new line of headphones with retro styling and concert-level sound quality.",
    gallery: ["/Images/img3.jpg", "/Images/img4.jpg"],
  },
  {
    id: 3,
    number: "03",
    title: "CAMEL ACTIVE",
    category: "Adventure Campaign",
    date: "2024-06-18",
    image: img2,
    description:
      "A desert adventure campaign showcasing durability and outdoor spirit through photography and short films.",
    gallery: ["/Images/img2.jpg", "/Images/img3.jpg"],
  },
  {
    id: 4,
    number: "04",
    title: "HEADPHONES MARSHALL",
    category: "Product Launch",
    date: "2024-08-01",
    image: img4,
    description:
      "Campaign launch for Marshall’s new line of headphones with retro styling and concert-level sound quality.",
    gallery: ["/Images/img3.jpg", "/Images/img4.jpg"],
  },
];
