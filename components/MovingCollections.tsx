import { InfiniteMovingCards } from "./ui/InfiniteMovingCollections";

export function MovingCollections() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={collections}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export const collections = [
  {
    name: "Custom Poster",
    link: "/products/customize-your-wall",
    image: "/CULTURE.webp",
  },
  {
    name: "Superhero",
    link: "/collections/super-heros",
    image: "/CARS.webp",
  },
  {
    name: "Car",
    link: "/collections/cars",
    image: "/CULTURE.webp",
  },
  {
    name: "Movie",
    link: "/collections/all-movies",
    image: "/CARS.webp",
  },
  {
    name: "TV-Series",
    link: "/collections/series",
    image: "/CULTURE.webp",
  },
  {
    name: "Music",
    link: "/collections/hip-hop",
    image: "/CARS.webp",
  },
  {
    name: "Video Game",
    link: "/collections/games",
    image: "/CULTURE.webp",
  },
  {
    name: "Motivate",
    link: "/collections/gym",
    image: "/CARS.webp",
  },
  {
    name: "Cricket",
    link: "/collections/cricket",
    image: "/CULTURE.webp",
  },
  {
    name: "Football",
    link: "/collections/foot-ball",
    image: "/CARS.webp",
  },
  {
    name: "F1",
    link: "/collections/german-gp",
    image: "/CULTURE.webp",
  },
  {
    name: "Explore More !",
    link: "https://www.posterized.in/pages/all-collections",
    image: "/CARS.webp",
  },
];

