import Link from "next/link";
import UpholsteryLocationPage, {
  upholsteryLocationMetadata,
  vproDrivingDirections,
} from "@/components/UpholsteryLocationPage";

const path = "/locations/chestnut-hill";

export const metadata = upholsteryLocationMetadata(
  "Chestnut Hill Upholstery in Acworth",
  "Upholstery near Chestnut Hill in Acworth for home furniture, restaurant booths, and boat seats. Mobile service available from Woodstock. Request a free quote.",
  path,
);

export default function ChestnutHillPage() {
  return (
    <UpholsteryLocationPage
      path={path}
      areasServed={["Chestnut Hill, Acworth, GA", "Bells Ferry Road, Acworth, GA", "Woodstock, GA"]}
      landmark="Chestnut Hill"
      city="Acworth"
      h1="Upholstery Near Chestnut Hill in Acworth, GA"
      intro="V-Pro Vinyl and Leather Repair provides upholstery near Chestnut Hill in Acworth, GA. We serve homes around Mistflower Drive and Larkspur Boulevard and businesses along Bells Ferry Road toward Highway 92, with furniture, commercial seating, and marine upholstery from our Woodstock shop."
      services={[
        { name: "Upholstery Services", href: "/upholstery", description: "Furniture, cushion, and seating upholstery from our Woodstock shop." },
        { name: "Restaurant Seat Upholstery", href: "/upholstery/restaurant-seat-upholstery", description: "Recover booths, bar stools, and dining chairs." },
        { name: "Marine Upholstery", href: "/upholstery/marine-upholstery", description: "Replace boat-seat coverings and cushions with marine-grade materials." },
      ]}
      directionsDescription="For a scheduled shop visit, come to 298 N Briar Ridge, Woodstock, GA 30189. This route starts on Mistflower Drive near the center of Chestnut Hill. We also travel to Acworth customers for suitable mobile service."
      directions={[
        "From central Chestnut Hill, follow Mistflower Drive Northwest east to Verbena Drive Northwest and turn left.",
        "Turn right onto Larkspur Boulevard Northwest, then left onto Bells Ferry Road Northwest.",
        "Continue north on Bells Ferry Road toward Woodstock, passing the Highway 92 intersection.",
        "Turn left onto Black Oak Trail, then left onto North Briar Ridge. Continue to 298 N Briar Ridge, Woodstock.",
      ]}
      directionsUrl={vproDrivingDirections("34.069821,-84.570766")}
      nearbyLocations={[
        { name: "Noonday Park", href: "/locations/noonday-creek-park" },
        { name: "Carmel Elementary School", href: "/locations/carmel-elementary-school" },
        { name: "Baker Elementary School", href: "/locations/baker-elementary-school" },
      ]}
      faqs={[
        { question: "Do you serve Chestnut Hill even though your shop is in Woodstock?", answer: "Yes. We serve Chestnut Hill in Acworth and the Bells Ferry Road corridor. Our shop is at 298 N Briar Ridge in Woodstock, and mobile service is available for suitable projects." },
        { question: "Can you reupholster restaurant booths and bar stools?", answer: "Yes. We recover restaurant booths, bar stools, and dining chairs using materials chosen for commercial use. We discuss the number of seats, padding repairs, and scheduling around your business before work starts." },
        { question: "Do you replace boat cushions as well as furniture upholstery?", answer: "Yes. We offer marine upholstery for boat seats, bench seating, sun pads, and other cushions. We use marine-grade coverings and assess whether the existing foam can be kept or needs replacement." },
      ]}
      ctaTitle="Get an Upholstery Quote for Chestnut Hill"
      ctaDescription="Call (770) 592-4689 or send a message about your furniture, business seating, or boat cushions for a free quote."
    >
      <h2>Home and Business Upholstery Along Bells Ferry Road</h2>
      <p>
        We provide <Link href="/upholstery">upholstery services</Link> for Chestnut
        Hill households and the nearby Bells Ferry Road corridor. We recover home
        furniture, replace cushion foam, and reupholster commercial seating. Our
        work is based in Woodstock, with service for Acworth customers who need
        either shop upholstery or a suitable repair at their home or business.
      </p>

      <h2>Furniture, Restaurant Booths, and Boat Seats</h2>
      <h3>Refresh Household Furniture</h3>
      <p>
        We recover sofas, chairs, ottomans, and <Link href="/upholstery/dining-chair-upholstery">dining
        seats</Link>. When a cushion has lost support, we assess the foam and the
        structure beneath it as well as the fabric. You can change a covering,
        improve the padding, or combine both in one project. We also repair suitable
        leather damage when the existing covering is worth keeping.
      </p>
      <h3>Reupholster Booths and Business Seating</h3>
      <p>
        We recover restaurant booths, bar stools, reception chairs, and other
        commercial furniture. Our <Link href="/upholstery/restaurant-seat-upholstery">restaurant
        upholstery work</Link> includes replacement coverings and padding repairs.
        We discuss how many seats need work and whether the job can be organized
        in stages. Material choices take repeated use and routine cleaning into
        account, with scheduling agreed around your operation.
      </p>
      <h3>Replace Marine Coverings and Cushions</h3>
      <p>
        Our <Link href="/upholstery/marine-upholstery">marine upholstery service</Link>
        {" "}covers boat seats, benches, sun pads, and cockpit cushions. We use materials
        intended for exposure to sun and moisture. We check the covering, foam, and
        seat support before recommending replacements.
      </p>

      <h2>Plan One Seat or a Larger Seating Project</h2>
      <p>
        A single removable cushion and a row of fixed booths need different work
        arrangements. We review how the seating is assembled, what can be removed,
        and which parts need replacement. For a business, that helps establish
        whether the work can be staged. For home furniture or boat cushions, it
        helps us explain what needs shop work and what can stay in place.
      </p>
      <p>
        Contact us with the item type, the changes you want, and the number of
        seats or cushions involved. Photos are useful for a first assessment. We
        discuss materials and scheduling before you approve the work. You can also browse our
        <Link href="/locations"> Acworth and Woodstock service areas</Link>.
      </p>
    </UpholsteryLocationPage>
  );
}
