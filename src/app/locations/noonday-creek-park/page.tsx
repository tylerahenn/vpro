import Link from "next/link";
import UpholsteryLocationPage, {
  upholsteryLocationMetadata,
  vproDrivingDirections,
} from "@/components/UpholsteryLocationPage";

const path = "/locations/noonday-creek-park";

export const metadata = upholsteryLocationMetadata(
  "Upholstery Near Noonday Park",
  "Upholstery near Noonday Park in Kennesaw for homes and businesses around Shiloh Hills, Arden Lake, and Glenlake. Furniture and vinyl seating. Get a quote.",
  path,
);

export default function NoondayCreekParkPage() {
  return (
    <UpholsteryLocationPage
      path={path}
      areasServed={["Kennesaw, GA", "Shiloh Hills, Kennesaw, GA", "Arden Lake, Kennesaw, GA", "Glenlake, Kennesaw, GA"]}
      landmark="Noonday Park"
      city="Kennesaw"
      h1="Upholstery Near Noonday Park in Kennesaw, GA"
      intro="V-Pro Vinyl and Leather Repair provides upholstery near Noonday Park in Kennesaw, GA. We serve homes and businesses around Hawkins Store Road and Bells Ferry Road, including Shiloh Hills, Arden Lake, and Glenlake, with furniture reupholstery, vinyl seating work, and leather repair."
      services={[
        { name: "Upholstery Services", href: "/upholstery", description: "Furniture coverings, cushion replacement, and seating repairs." },
        { name: "Commercial Upholstery", href: "/upholstery/commercial-upholstery", description: "Recover reception seating, restaurant furniture, and other business seating." },
        { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration", description: "Repair and restore suitable worn leather furniture." },
      ]}
      directionsDescription="Our shop is at 298 N Briar Ridge, Woodstock, GA 30189. The route below leaves Noonday Park by its access road to Shallowford Road. Arrange a shop visit before bringing furniture. We also travel to Kennesaw customers for suitable mobile work."
      directions={[
        "From Noonday Park, follow the park access road north to Shallowford Road Northeast and turn left.",
        "Continue west on Shallowford Road as it becomes Shallowford Road Northwest, then turn right onto Bells Ferry Road Northwest.",
        "Follow Bells Ferry Road north toward Woodstock, continuing past Highway 92.",
        "Turn left onto Black Oak Trail, then left onto North Briar Ridge. Continue to 298 N Briar Ridge, Woodstock.",
      ]}
      directionsUrl={vproDrivingDirections("34.0628029,-84.5353246")}
      nearbyLocations={[
        { name: "Chestnut Hill", href: "/locations/chestnut-hill" },
        { name: "Town Center at Cobb", href: "/locations/town-center-at-cobb" },
        { name: "Kennesaw State University", href: "/locations/kennesaw-state-university" },
        { name: "Woofstock Park", href: "/locations/woofstock-park" },
      ]}
      faqs={[
        { question: "Do you serve Shiloh Hills, Arden Lake, and Glenlake?", answer: "Yes. We provide upholstery and furniture repair for these Kennesaw neighborhoods and the area around Noonday Park, Hawkins Store Road, and Bells Ferry Road. Our shop is in Woodstock, and mobile service is available for suitable work." },
        { question: "Can you recover vinyl seating for a business?", answer: "Yes. We reupholster restaurant seating, reception chairs, and other commercial furniture, including suitable vinyl seating. We assess the existing covering and padding, then discuss materials and scheduling around your operation." },
        { question: "Do you offer leather cleaning instead of reupholstery?", answer: "Yes. We clean and condition suitable leather furniture as well as repairing and restoring it. Cleaning does not replace missing material or repair torn upholstery, so we assess the leather before recommending cleaning, repair, or replacement covering." },
      ]}
      ctaTitle="Request Upholstery Near Noonday Park"
      ctaDescription="Call (770) 592-4689 or use our contact form for a free quote on home furniture, commercial seating, or leather restoration."
    >
      <h2>Upholstery for North Kennesaw Homes and Businesses</h2>
      <p>
        We serve the neighborhoods around Noonday Park, whose published address is
        489 Hawkins Store Road, Kennesaw. For homes in Arden Lake and businesses
        along the Bells Ferry corridor, our <Link href="/upholstery">upholstery
        services</Link> cover new coverings, cushion work, and related furniture
        repairs. We explain whether the item needs shop work or is suitable for
        mobile service before scheduling.
      </p>

      <h2>Recover Furniture and Commercial Seating</h2>
      <h3>Replace Worn Home Upholstery</h3>
      <p>
        We reupholster sofas, accent chairs, ottomans, and <Link href="/upholstery/dining-chair-upholstery">dining
        chair seats</Link>. New foam can be included when cushions have lost
        support. If the frame is loose, we also offer <Link href="/furniture-repair/furniture-regluing">furniture
        regluing</Link>. We look at the whole item so the work addresses its comfort
        and structure as well as its appearance.
      </p>
      <h3>Recover Reception Chairs and Business Seating</h3>
      <p>
        Our <Link href="/upholstery/commercial-upholstery">commercial upholstery service</Link>
        {" "}includes reception furniture, restaurant seats, and other business seating.
        We replace suitable fabric or vinyl coverings and worn padding. We discuss
        the number of items, material requirements, and whether work can be staged
        around your opening hours. We also provide <Link href="/leather-repair/commercial-leather-furniture-repair">commercial
        leather furniture repair</Link> when the covering can be kept.
      </p>
      <h3>Clean or Restore Leather You Want to Keep</h3>
      <p>
        If leather is dirty but intact, <Link href="/leather-repair/leather-cleaning">professional
        leather cleaning</Link> may be the service you need. For suitable <Link href="/leather-repair/leather-scratch-repair">scratches</Link>,
        tears, fading, or finish wear, we also provide <Link href="/leather-repair/leather-furniture-restoration">leather
        furniture restoration</Link>. We assess the material first because cleaning,
        surface repair, and complete reupholstery solve different problems. See our
        <Link href="/leather-repair"> leather repair services</Link> for other options.
      </p>

      <h2>Choose Seating Materials You Can Maintain</h2>
      <p>
        We help you compare the appearance and care requirements of fabric,
        leather, and vinyl. For business seating, we take routine cleaning and
        frequency of use into account. For home furniture, we discuss texture,
        comfort, and the finish you want. A covering should suit the furniture
        and its use; no single material is the right choice for every room or
        type of seat.
      </p>
      <p>
        Request a quote by phone or through our contact form. Tell us what needs
        work and include photos if available. We review the furniture, explain
        material and repair options, and agree on scheduling before the job
        begins. Visit our <Link href="/locations">locations hub</Link> for other
        communities served from Woodstock.
      </p>
    </UpholsteryLocationPage>
  );
}
