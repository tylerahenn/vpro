import Link from "next/link";
import UpholsteryLocationPage, {
  upholsteryLocationMetadata,
  vproDrivingDirections,
} from "@/components/UpholsteryLocationPage";

const path = "/locations/little-river-falls";

export const metadata = upholsteryLocationMetadata(
  "Little River Falls Upholstery",
  "Upholstery for Little River Falls and Arnold Mill Road in Woodstock. Refresh sofas, dining chairs, and ottomans with new fabric and cushions. Get a quote.",
  path,
);

export default function LittleRiverFallsPage() {
  return (
    <UpholsteryLocationPage
      path={path}
      areasServed={["Little River Falls, Woodstock, GA", "Arnold Mill Road, Woodstock, GA"]}
      landmark="Little River Falls"
      city="Woodstock"
      h1="Upholstery Near Little River Falls in Woodstock, GA"
      intro="V-Pro Vinyl and Leather Repair provides upholstery near Little River Falls in Woodstock, GA. We serve homes along Meander Drive, Ravine Drive, and Runnel Drive off Arnold Mill Road, as well as surrounding Woodstock businesses, with furniture reupholstery and cushion replacement."
      services={[
        { name: "Furniture Upholstery", href: "/upholstery", description: "New coverings for living room furniture, ottomans, and headboards." },
        { name: "Dining Chair Upholstery", href: "/upholstery/dining-chair-upholstery", description: "Coordinate your dining chairs with new fabric and padding." },
        { name: "Leather Upholstery Repair", href: "/leather-repair/leather-upholstery-repair", description: "Repair suitable damaged leather surfaces and seams." },
      ]}
      directionsDescription="Our shop is at 298 N Briar Ridge, Woodstock, GA 30189. The driving link starts near Meander Drive in central Little River Falls. Arrange a shop visit before bringing furniture. We also travel to Woodstock customers for suitable mobile work."
      directions={[]}
      directionsUrl={vproDrivingDirections("34.1103700,-84.4950602")}
      nearbyLocations={[
        { name: "Dupree Park", href: "/locations/dupree-park" },
        { name: "Carmel Elementary School", href: "/locations/carmel-elementary-school" },
        { name: "Woofstock Park", href: "/locations/woofstock-park" },
      ]}
      faqs={[
        { question: "Do you serve Little River Falls and Arnold Mill Road?", answer: "Yes. We provide upholstery for Little River Falls homes along Meander Drive, Ravine Drive, and Runnel Drive, and for customers along Arnold Mill Road in Woodstock. Our shop is on N Briar Ridge." },
        { question: "Can I change the fabric without replacing the furniture?", answer: "Yes. We reupholster suitable sofas, chairs, ottomans, dining seats, and headboards. We check the frame and padding first, then help you choose a new covering for the piece." },
        { question: "Can you replace cushions while keeping the existing fabric?", answer: "We can replace worn cushion foam when the existing covering is suitable to reuse. We check the condition, fit, and access to the cushion before recommending replacement foam or a new cover." },
      ]}
      ctaTitle="Request Upholstery in Little River Falls"
      ctaDescription="Call (770) 592-4689 or use our contact form for a free quote on furniture reupholstery, new cushions, or leather repair."
    >
      <h2>Furniture Upholstery off Arnold Mill Road</h2>
      <p>
        We help Little River Falls homeowners update furniture they want to keep.
        Our <Link href="/upholstery">Woodstock upholstery service</Link> covers living
        room seating, dining chairs, ottomans, and upholstered headboards. A fabric
        change can coordinate pieces bought at different times, while new padding
        can improve the feel of seating you already enjoy using.
      </p>

      <h2>New Fabric, Better Cushion Support</h2>
      <h3>Recover Sofas and Accent Chairs</h3>
      <p>
        We remove worn coverings and fit new upholstery to your furniture. We can
        help you choose a quiet texture for a larger sofa or a pattern for an accent
        chair. We look at how the fabric will run across cushions, arms, and seams,
        then explain the material and padding work included in the project.
      </p>
      <h3>Coordinate Dining Seats and Ottomans</h3>
      <p>
        Our <Link href="/upholstery/dining-chair-upholstery">dining chair reupholstery</Link>
        {" "}lets you refresh a matching set or bring different chairs together with
        one fabric. We also recover ottomans and upholstered headboards. If a frame
        is loose, we can include <Link href="/furniture-repair/loose-joint-repair">joint
        repair</Link> before the new covering is fitted.
      </p>
      <h3>Replace Worn Cushion Foam</h3>
      <p>
        We replace compressed foam and assess the support beneath a seat. When
        the existing cover is in good condition and can be reused, new foam may
        be enough. When it is stretched, torn, or worn through, we can make the
        cover part of the reupholstery work. We discuss firmness and fit so the
        finished cushion suits the way you sit.
      </p>

      <h2>Choose Materials for the Way You Use the Room</h2>
      <p>
        Fabric color is only one decision. We help you compare texture, pattern
        scale, durability, and care requirements. A frequently used dining seat
        may call for a different covering from a bedroom chair. For leather pieces
        with limited damage, our <Link href="/leather-repair/leather-upholstery-repair">leather
        upholstery repair</Link> offers another option to consider before changing
        the whole covering. We explain which treatments suit the existing material.
      </p>
      <p>
        Start with a call or contact form message about the furniture and what
        you want changed. We review the item, discuss materials, and explain the
        work and scheduling before you approve the job. Photos are helpful for
        an initial quote. For coverage beyond Little River Falls, visit our
        <Link href="/locations"> local service areas</Link>.
      </p>
    </UpholsteryLocationPage>
  );
}
