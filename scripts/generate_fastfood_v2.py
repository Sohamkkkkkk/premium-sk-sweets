"""Add-on image generation for new fast food items."""
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
    "elegant minimalist styling, luxury Indian street food aesthetic, hyper-realistic, sharp focus, "
    "editorial magazine quality, 4k, absolutely no text, no logo, no watermark, no brand name."
)

PROMPTS = {
    "pani-puri": "A plate of Indian pani puri — crisp golden hollow puri shells arranged in a circle, one filled with green mint pani water dripping down, small bowls of tamarind chutney and sprouted mung beans beside, garnished with fresh coriander.",
    "sev-puri": "A plate of Indian sev puri — crisp flat puris topped with diced potato, onion, tomato, tangy green and tamarind chutneys, crunchy yellow sev noodles, garnished with fresh coriander, on a marble plate.",
    "bhel-puri": "A copper bowl of Indian bhel puri — puffed rice, sev, chopped onion and tomato, coriander, tangy chutneys tossed together, with a squeeze of lime and green chilli on the side.",
    "chinese-paneer-patties": "Golden crispy pan-fried Chinese-style paneer patties — cottage cheese patties with a golden crust, sprinkled with sesame seeds and spring onions, served with a small dish of red chilli sauce, on a burgundy plate.",
    "frankie": "An Indian veg frankie roll — a soft golden roti wrapped tightly around a colourful filling of paneer, sautéed vegetables, cheese and mayonnaise, cut diagonally showing filling, wrapped in butter paper, on a wooden board.",
    "manchurian-bhel": "A rustic bowl of Indo-Chinese Manchurian bhel — crispy fried noodles topped with fried veg manchurian balls in dark spicy sauce, chopped spring onions and sesame seeds, presented in an elegant ceramic bowl.",
}


async def gen(session_id, name, prompt, retries=2):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    for attempt in range(retries + 1):
        try:
            chat = LlmChat(
                api_key=api_key,
                session_id=f"sksweets-img-v2-{session_id}",
                system_message="You are a premium food photographer generating editorial-quality images.",
            )
            chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
                modalities=["image", "text"]
            )
            msg = UserMessage(text=f"{prompt} {STYLE}")
            text, images = await chat.send_message_multimodal_response(msg)
            if not images:
                raise RuntimeError("no images")
            data = base64.b64decode(images[0]["data"])
            (OUT / f"{name}.png").write_bytes(data)
            print(f"[OK] {name} ({len(data)//1024} KB)")
            return name, True
        except Exception as e:
            print(f"[retry {attempt}] {name}: {e}")
            await asyncio.sleep(2 + attempt * 2)
    print(f"[FAIL] {name}")
    return name, False


async def main():
    sem = asyncio.Semaphore(4)

    async def bound(sid, k, p):
        async with sem:
            return await gen(sid, k, p)

    tasks = [bound(str(i), k, p) for i, (k, p) in enumerate(PROMPTS.items())]
    results = await asyncio.gather(*tasks)
    ok = sum(1 for _, s in results if s)
    print(f"\nGenerated {ok}/{len(results)}")


if __name__ == "__main__":
    start = time.time()
    asyncio.run(main())
    print(f"Total: {time.time()-start:.1f}s")
