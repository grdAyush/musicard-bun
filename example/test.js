(async () => {
    const { musicCard } = require("../build/index.js");
    const fs = require("fs");

    const card = new musicCard()
        .setName("Space Thememkthlmn klg")
        .setAuthor("By og.ayush")
        .setColor("#ffff")
        .setTheme("space+")
        .setBrightness(100)
        .setThumbnail("https://cdn.discordapp.com/icons/789443193989103648/b4574ae90c16077bbe0b244a95beb71f.webp")
        .setProgress(50)
        .setStartTime("0:00")
        .setEndTime("3:00")

    const cardBuffer = await card.build();

    fs.writeFileSync(`musicCard.png`, cardBuffer);
    console.log("Done!");
})()