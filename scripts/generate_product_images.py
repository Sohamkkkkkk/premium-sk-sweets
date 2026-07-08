"""Generate premium SK Sweets product photography using Gemini Nano Banana.
Run once. Saves PNGs to /app/frontend/public/assets/products/.
"""
import asyncio, os, base64, sys, time
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")

OUT = Path("/app/frontend/public/assets/products")
OUT.mkdir(parents=True, exist_ok=True)

STYLE = (
    "Ultra premium editorial food photography, overhead top-down shot, soft diffused natural lighting, "
    "shallow depth of field, warm cream/ivory background with subtle marble or linen texture, "
    "elegant minimalist styling, sprig of garnish where appropriate, luxury Indian confectionery aesthetic, "
    "muted burgundy and gold color accents in ceramic plates or props, hyper-realistic, sharp focus, "
    "editorial magazine quality, 4k, absolutely no text, no logo, no watermark, no brand name in image."
)

PROMPTS = {
    "kalakand": "A stack of freshly cut kalakand — soft granular Indian milk fudge squares, pale cream colour, topped with a delicate sprinkle of chopped pistachio and silver varq, plated on a small burgundy ceramic dish.",
    "gulkand-peda": "A cluster of pink-tinged gulkand peda sweets — traditional Indian milk pedas filled with rose petal preserve, garnished with rose petals and slivered almonds, on a small brass thali.",
    "protein-ladoo": "A pile of round dry fruit protein ladoos — dark brown, packed with visible chopped dates, almonds, cashews and seeds, on a rustic terracotta plate.",
    "signature-samosa": "Two golden-brown Indian samosas, freshly fried, crisp flaky pastry, served on a marble plate with a small bowl of green mint chutney and a small bowl of tamarind chutney, garnished with a green chilli and fresh coriander.",
    "khakhra": "A stack of thin round Gujarati khakhras — crispy roasted whole-wheat flatbreads with visible masala speckling, arranged elegantly on a linen cloth, one broken to show crisp texture.",
    "rasmalai": "A small ceramic bowl of rasmalai — soft white chenna discs floating in saffron-yellow creamy milk, topped with slivered pistachios, saffron strands and edible rose petals.",
    "kaju-katli": "A neat arrangement of diamond-shaped kaju katli — pale cream cashew fudge diamonds topped with edible silver varq foil, fanned out on a small brass tray.",
    "milk-peda": "A cluster of round malai pedas — creamy off-white Indian milk fudge with a golden saffron centre and a pistachio garnish, on a small marble slab.",
    "kala-jamun": "A small copper bowl of kala jamun — dark deep-fried Indian milk dumplings glistening in golden sugar syrup, garnished with saffron strands.",
    "balusahi": "A stack of balusahi — flaky golden-syrup-glazed North Indian donuts, cross-section showing layered pastry, on a burgundy plate.",
    "imarti": "Bright orange spiral-shaped imarti — deep-fried urad dal Indian sweet soaked in saffron sugar syrup, arranged on a small round plate.",
    "mysore-pak": "Golden-yellow squares of Mysore pak — traditional South Indian ghee-based fudge with a slightly porous texture, arranged on banana leaf.",
    "chocolate-cake": "A slice of rich chocolate truffle cake with glossy dark ganache dripping down the sides, on a small white ceramic plate, decorated with fresh raspberries and mint.",
    "photo-cake": "A round celebration cake with white cream frosting and delicate piped decorative border, side view, elegant celebration cake styling.",
    "butterscotch-cake": "A slice of butterscotch cream cake with visible cream layers, praline crunch on top and a butterscotch sauce drizzle, on a marble plate.",
    "masala-dosa": "A crisp golden masala dosa served on a white plate with small bowls of coconut chutney, red chutney and yellow sambar, with a spiced potato filling visible.",
    "idli-sambar": "White fluffy steamed idlis on a plate with a small bowl of orange sambar and green coconut chutney, elegant plating.",
    "pav-bhaji": "A generous portion of spicy Indian pav bhaji — thick red vegetable curry topped with butter, chopped onion, coriander and lemon wedge, served with two buttery pav rolls.",
    "sandwich": "A grilled cheese sandwich cut diagonally, with molten cheese pull and fresh vegetables, plated on a rustic wooden board.",
    "imported-chocolate": "An open elegant gift box of assorted premium chocolate truffles — round, square and heart shapes with gold and dark chocolate finishes, on a burgundy velvet surface.",
    "coffee": "A cappuccino in a fine white porcelain cup with elegant latte art foam design, saucer with a single coffee bean, on a marble table with subtle steam.",
    "macarons": "A pastel-hued tower of French macarons in pistachio green, rose pink, saffron yellow and mocha brown, arranged elegantly on a small stand.",
    "dry-fruits": "An arrangement of premium dry fruits — whole cashews, almonds, pistachios, walnut halves, black raisins and dried figs — in small individual brass bowls on a linen napkin.",
    "namkeen": "A rustic bowl of colourful Indian namkeen mix — sev, boondi, peanuts, dried curry leaves, chana dal — with a light drizzle of oil and spice.",
    "beverages": "A tall glass of cold Indian mango lassi with a mint garnish and a wooden straw, condensation on the glass, on a linen cloth.",
    "sugar-free": "A small ceramic bowl of dark caramel-brown sugar-free dry-fruit fudge squares, garnished with chopped nuts, next to a small honey dipper — natural sweetness aesthetic.",
    "khoya-barfi": "Neat rectangular slices of khoya milk barfi — pale cream colour with silver varq foil topping, arranged in a fan pattern on a small marble slate.",
    "anjeer-barfi": "Cross-section slices of anjeer (fig) barfi — showing whole figs and chopped pistachios embedded in a caramel-brown fudge, on a small dark plate.",
    "brand-story": "An artful overhead flat-lay of an assortment of premium Indian sweets — kaju katli, gulkand peda, rasmalai bowl, ladoos, and barfi — with rose petals, saffron strands, and copper vessels scattered on warm cream linen.",
    "signature-hero": "A luxurious hero composition — a small burgundy velvet-lined tray with a curated selection of premium Indian sweets and one silver-plated cashew barfi in the centre, dramatic overhead lighting, magazine cover quality.",
    "celebration-cake-hero": "An overhead close-up of a two-tier celebration cake with cream frosting, edible gold leaf detailing, fresh rose petals scattered around, on a marble surface with a burgundy runner.",
    "visit-hero": "A serene overhead flat-lay of an Indian mithai spread — small round bowls of assorted sweets, rose petals, saffron strands and a cup of chai, on a warm ivory linen background.",
}


async def gen(session_id: str, name: str, prompt: str, retries: int = 2):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    for attempt in range(retries + 1):
        try:
            chat = LlmChat(
                api_key=api_key,
                session_id=f"sksweets-img-{session_id}",
                system_message="You are a premium food photographer generating editorial-quality images.",
            )
            chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
                modalities=["image", "text"]
            )
            full_prompt = f"{prompt} {STYLE}"
            msg = UserMessage(text=full_prompt)
            text, images = await chat.send_message_multimodal_response(msg)
            if not images:
                raise RuntimeError(f"no images for {name}")
            img = images[0]
            data = base64.b64decode(img["data"])
            path = OUT / f"{name}.png"
            path.write_bytes(data)
            print(f"[OK] {name} ({len(data)//1024} KB)")
            return name, True
        except Exception as e:  # noqa: BLE001
            print(f"[retry {attempt}] {name}: {e}")
            await asyncio.sleep(2 + attempt * 2)
    print(f"[FAIL] {name}")
    return name, False


async def main(only=None):
    items = [(k, v) for k, v in PROMPTS.items() if not only or k in only]
    # limit concurrency to avoid rate limits
    sem = asyncio.Semaphore(4)

    async def bound(sid, k, p):
        async with sem:
            return await gen(sid, k, p)

    tasks = [bound(str(i), k, p) for i, (k, p) in enumerate(items)]
    results = await asyncio.gather(*tasks)
    ok = sum(1 for _, s in results if s)
    print(f"\nGenerated {ok}/{len(results)} images")


if __name__ == "__main__":
    only = sys.argv[1].split(",") if len(sys.argv) > 1 else None
    start = time.time()
    asyncio.run(main(only))
    print(f"Total: {time.time()-start:.1f}s")
