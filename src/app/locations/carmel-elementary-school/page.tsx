import Link from "next/link";
import UpholsteryLocationPage, {
  upholsteryLocationMetadata,
  vproDrivingDirections,
} from "@/components/UpholsteryLocationPage";

const path = "/locations/carmel-elementary-school";

export const metadata = upholsteryLocationMetadata(
  "Upholstery Near Carmel Elementary",
  "Upholstery near Carmel Elementary in Woodstock for Centennial Place and Bascomb Springs homes. Dining chairs, sofas, and cushions. Request a free quote.",
  path,
);

export default function CarmelElementarySchoolPage() {
  return (
    <UpholsteryLocationPage
      path={path}
      areasServed={["Woodstock, GA", "Centennial Place, Woodstock, GA", "Bascomb Springs, Woodstock, GA"]}
      landmark="Carmel Elementary School"
      city="Woodstock"
      h1="Upholstery Near Carmel Elementary School in Woodstock, GA"
      intro="V-Pro Vinyl and Leather Repair provides upholstery near Carmel Elementary School in Woodstock, GA. We serve homeowners and businesses along Bascomb Carmel Road, including Centennial Place and Bascomb Springs, with furniture reupholstery, cushion replacement, and leather repair."
      services={[
        { name: "Furniture Upholstery", href: "/upholstery", description: "New upholstery for chairs, sofas, ottomans, and other home furnishings." },
        { name: "Dining Chair Upholstery", href: "/upholstery/dining-chair-upholstery", description: "Recover individual chairs or a matching dining set." },
        { name: "Dining Chair Repair", href: "/furniture-repair/dining-chair-repair", description: "Repair loose frames and joints alongside worn seating." },
      ]}
      directionsDescription="Our shop is at 298 N Briar Ridge, Woodstock, GA 30189. Arrange your visit before bringing furniture. We also travel to customers in the Bascomb Carmel Road area for suitable mobile work."
      directions={[
        "From Carmel Elementary School at 2275 Bascomb Carmel Road, leave the school access road and turn left onto Bascomb Carmel Road.",
        "Follow Bascomb Carmel Road to Bells Ferry Road and turn right.",
        "Continue on Bells Ferry Road, then turn left onto Black Oak Trail.",
        "Turn left onto North Briar Ridge and continue to 298 N Briar Ridge, Woodstock.",
      ]}
      directionsUrl={vproDrivingDirections("Carmel Elementary School, 2275 Bascomb Carmel Road, Woodstock, GA 30189")}
      nearbyLocations={[
        { name: "Dupree Park", href: "/locations/dupree-park" },
        { name: "Chestnut Hill", href: "/locations/chestnut-hill" },
        { name: "Woofstock Park", href: "/locations/woofstock-park" },
      ]}
      faqs={[
        { question: "Do you serve Centennial Place and Bascomb Springs?", answer: "Yes. We provide upholstery and furniture repair for homes in Centennial Place, Bascomb Springs, and along Bascomb Carmel Road in Woodstock. Our shop is on N Briar Ridge, and mobile service is available for suitable work." },
        { question: "Can you recover a whole dining set?", answer: "Yes. We reupholster individual dining chairs and complete sets. We can replace worn padding and check loose frames as part of the project, then help you choose a fabric for the way you use the chairs." },
        { question: "Does new fabric fix a sagging cushion?", answer: "New fabric changes the covering, but a sagging seat may also need foam or support work. We inspect the cushion and its support before recommending what to replace." },
      ]}
      ctaTitle="Request Upholstery Near Carmel Elementary"
      ctaDescription="Call (770) 592-4689 or send your furniture details through our contact form for a free quote. Photos are welcome."
    >
      <h2>Furniture Reupholstery Along Bascomb Carmel Road</h2>
      <p>
        We reupholster furniture for homes around Carmel Elementary at 2275 Bascomb
        Carmel Road, from a single kitchen chair to a living room seating project.
        Our <Link href="/upholstery">Woodstock upholstery shop</Link> handles fabric,
        vinyl, and leather work. You can keep the furniture that fits your room while
        changing its covering, comfort, or both.
      </p>

      <h2>Dining Chairs, Sofas, and Cushions</h2>
      <h3>Recover Your Dining Chairs</h3>
      <p>
        We remove worn seat coverings, replace padding when needed, and fit the new
        material to your chairs. Our <Link href="/upholstery/dining-chair-upholstery">dining
        chair upholstery service</Link> covers individual chairs and matching sets.
        We help you compare textures, colors, and cleaning requirements so the fabric
        works for everyday meals as well as the look of your dining room.
      </p>
      <h3>Refresh Sofas, Accent Chairs, and Ottomans</h3>
      <p>
        We recover living room furniture and replace worn cushion foam. A change of
        fabric can bring a chair into a different room or coordinate an ottoman with
        your sofa. We check the existing padding and support before recovering a
        piece, so you know whether the job needs more than a new outer covering.
      </p>
      <h3>Repair Loose Frames and Damaged Leather</h3>
      <p>
        If a chair rocks or its joints move, we can address the frame through our
        <Link href="/furniture-repair/dining-chair-repair"> dining chair repair service</Link>.
        We also repair suitable leather scratches, tears, and worn finishes. For a
        sound piece with isolated damage, a <Link href="/leather-repair/leather-upholstery-repair">leather
        upholstery repair</Link> may be enough without recovering the whole item.
      </p>

      <h2>Choose Fabric and Padding Together</h2>
      <p>
        A seat should feel right as well as look right. We help you choose the
        firmness of replacement foam and a covering suited to how often the piece
        is used. Performance fabrics, textured weaves, leather, and vinyl have
        different care needs. We explain those differences before you choose,
        including how a pattern will sit across a cushion or a set of chair seats.
      </p>
      <p>
        To start, call or use our contact form with the furniture type and what you
        want changed. We review the item, discuss materials, and explain the work
        and scheduling before you approve it. Some repairs can be completed on site;
        reupholstery may require shop work. See our <Link href="/locations">full service
        area coverage</Link> for other communities we serve.
      </p>
    </UpholsteryLocationPage>
  );
}
