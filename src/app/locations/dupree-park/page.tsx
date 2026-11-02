import Link from "next/link";
import UpholsteryLocationPage, {
  upholsteryLocationMetadata,
  vproDrivingDirections,
} from "@/components/UpholsteryLocationPage";

const path = "/locations/dupree-park";

export const metadata = upholsteryLocationMetadata(
  "Upholstery Near Dupree Park",
  "Furniture upholstery near Dupree Park in Woodstock, serving Colony Woods and Neese Road. Chair recovery, cushions, and leather repair. Get a free quote.",
  path,
);

export default function DupreeParkPage() {
  return (
    <UpholsteryLocationPage
      path={path}
      areasServed={["Woodstock, GA", "Colony Woods, Woodstock, GA", "Neese Road, Woodstock, GA"]}
      landmark="Dupree Park"
      city="Woodstock"
      h1="Upholstery Near Dupree Park in Woodstock, GA"
      intro="V-Pro Vinyl and Leather Repair provides upholstery near Dupree Park in Woodstock, GA. We serve homes and businesses along Neese Road and Arnold Mill Road, including Colony Woods near Independence Way, with furniture reupholstery, cushion work, and leather restoration."
      services={[
        { name: "Upholstery Services", href: "/upholstery", description: "Recover furniture and replace worn padding." },
        { name: "Leather Furniture Restoration", href: "/leather-repair/leather-furniture-restoration", description: "Restore suitable worn leather before replacing an entire covering." },
        { name: "Furniture Regluing", href: "/furniture-repair/furniture-regluing", description: "Repair loose furniture joints and frames." },
      ]}
      directionsDescription="Visit our Woodstock shop at 298 N Briar Ridge by arrangement. We also travel to customers around Dupree Park and Colony Woods for suitable mobile service."
      directions={[
        "From Dupree Park at 513 Neese Road, follow the park access road to Neese Road and turn right.",
        "At Arnold Mill Road, turn left toward downtown Woodstock. Continue straight as Arnold Mill Road becomes Towne Lake Parkway.",
        "At the roundabout, take the second exit to remain on Towne Lake Parkway. Continue west; the road becomes Eagle Drive.",
        "At Bells Ferry Road, turn right and continue to Black Oak Trail.",
        "Turn left onto Black Oak Trail, then left onto North Briar Ridge. Continue to 298 N Briar Ridge, Woodstock.",
      ]}
      directionsUrl={vproDrivingDirections("Dupree Park, 513 Neese Road, Woodstock, GA 30188")}
      nearbyLocations={[
        { name: "Little River Falls", href: "/locations/little-river-falls" },
        { name: "Carmel Elementary School", href: "/locations/carmel-elementary-school" },
        { name: "Woofstock Park", href: "/locations/woofstock-park" },
      ]}
      faqs={[
        { question: "Do you provide upholstery in Colony Woods?", answer: "Yes. We serve Colony Woods, including the Independence Way area, as well as homes and businesses along Neese Road and Arnold Mill Road near Dupree Park in Woodstock." },
        { question: "Should I repair leather or reupholster the furniture?", answer: "That depends on the material and how much of it is damaged. We repair suitable localized leather damage and reupholster pieces that need replacement coverings. We check the frame and cushions before recommending either option." },
        { question: "Can you fix a loose chair before recovering it?", answer: "Yes. We offer furniture regluing and chair repair as well as upholstery. We assess the joints and frame so the repair can be included in the work before the new covering is fitted." },
      ]}
      ctaTitle="Get a Quote for Upholstery Near Dupree Park"
      ctaDescription="Tell us about your sofa, chair, or other furniture. Call (770) 592-4689 or request a free quote through our contact form."
    >
      <h2>Furniture Repair and Upholstery in Colony Woods</h2>
      <p>
        We serve the neighborhoods around Dupree Park at 513 Neese Road from our
        Woodstock shop. Whether you want a favorite chair recovered or a sofa made
        comfortable again, our <Link href="/upholstery">furniture upholstery services</Link>
        {" "}bring the covering, padding, and frame into the same repair plan. We explain
        what can be kept and what needs replacement before work begins.
      </p>

      <h2>Keep the Furniture That Works for Your Home</h2>
      <h3>Reupholster Chairs, Sofas, and Ottomans</h3>
      <p>
        We replace worn upholstery on living room chairs, sofas, ottomans, and other
        upholstered furnishings. You can choose a new texture or color without
        changing the size of a piece that already fits your room. We also recover
        <Link href="/upholstery/dining-chair-upholstery"> dining chair seats</Link>
        {" "}and replace compressed padding when the seat needs more support.
      </p>
      <h3>Restore Leather With Localized Wear</h3>
      <p>
        A scratch, tear, or faded panel does not always require complete reupholstery.
        Our <Link href="/leather-repair/leather-furniture-restoration">leather furniture
        restoration</Link> includes work on suitable damaged surfaces and finishes.
        We check the leather type and condition first. A failing covering and a
        small surface scuff need different treatments, and we explain the options
        for the actual piece in front of us.
      </p>
      <h3>Repair the Frame Beneath the Fabric</h3>
      <p>
        We repair loose joints, wobbly chairs, and other furniture frame problems.
        <Link href="/furniture-repair/furniture-regluing"> Furniture regluing</Link>
        {" "}can be combined with upholstery when a chair needs structural work as well
        as a new seat. We also assess cushioning and support so a fresh covering
        does not hide an unresolved comfort problem.
      </p>

      <h2>Decide Between Repair and Reupholstery</h2>
      <p>
        We start with the condition of the furniture, then consider how you want to
        use it. If you like the covering and only one area is damaged, repair may
        be suitable. If the fabric is worn throughout or you want a different look,
        reupholstery gives you a broader change. The frame, cushion support, and
        material availability all affect that choice; replacement is not always
        the right answer for every piece.
      </p>
      <p>
        Call us or send a message to describe the item and the changes you want.
        Photos help with the initial assessment. We discuss materials, any frame
        repairs, and whether the job needs shop work or can be serviced on site.
        Browse our <Link href="/locations">Woodstock and nearby service areas</Link>
        {" "}for additional coverage.
      </p>
    </UpholsteryLocationPage>
  );
}
