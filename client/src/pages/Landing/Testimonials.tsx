import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jose",
    body: "Skibidi Toilet Rizz",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGMiuKRrneaEw/profile-displayphoto-shrink_200_200/B4EZOOTJtEGYAY-/0/1733259205912?e=1756339200&v=beta&t=PvI1aJNQAAokGAIfHXN_4fTqFE9Hd1qeKAHtQay1HgU",
  },
  {
    name: "Merlin",
    body: "Top 5/6 interview prep tools",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFI-48FTFJfbA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692376159107?e=1756339200&v=beta&t=JB8NFCTxPGNGxzPRuuL3xqimn5lfPlIc7utJihFAlIM",
  },
  {
    name: "Juan",
    body: "I Think The Product Sucks TBH",
    img: "https://media.licdn.com/dms/image/v2/D5603AQH4LaRo2SYrqQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685582951208?e=1756339200&v=beta&t=Ql5OYzKCtXmoz2-YvGwU9YutMm5HPMItBfKIWchZiQk",
  },
  {
    name: "Jose",
    body: "Skibidi Toilet Rizz",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGMiuKRrneaEw/profile-displayphoto-shrink_200_200/B4EZOOTJtEGYAY-/0/1733259205912?e=1756339200&v=beta&t=PvI1aJNQAAokGAIfHXN_4fTqFE9Hd1qeKAHtQay1HgU",
  },
  {
    name: "Merlin",
    body: "Top 5/6 interview prep tools",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFI-48FTFJfbA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692376159107?e=1756339200&v=beta&t=JB8NFCTxPGNGxzPRuuL3xqimn5lfPlIc7utJihFAlIM",
  },
  {
    name: "Juan",
    body: "I Think The Product Sucks TBH",
    img: "https://media.licdn.com/dms/image/v2/D5603AQH4LaRo2SYrqQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685582951208?e=1756339200&v=beta&t=Ql5OYzKCtXmoz2-YvGwU9YutMm5HPMItBfKIWchZiQk",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const TestimonialCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <p className="text-sm font-medium ">{name}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Testimonials() {
  return (
    <section className="w-full py-16">
      <div className="flex flex-col gap-4 w-full max-w-5xl text-center">
        {/* typography */}
        <p className="text-xl text-blue-400 uppercase">Testimonials</p>
        <h1 className="text-5xl font-bold text-center text-foreground mb-16">
          Don't just take our word for it.
        </h1>

        {/* infinite marquees */}
        <div className="relative w-full">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
