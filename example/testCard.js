(async () => {
    const { RankCard } = require("../build/index.js");
    const fs = require("fs");

    const card = new RankCard()
        .setName("Ayush")
        .setLevel("Level 22")
        .setColor("auto")
        .setBrightness(100)
        .setAvatar("https://static.qobuz.com/images/covers/ga/ua/rmk2cpqliuaga_600.jpg")
        .setProgress(38)
        .setRank("56")
        .setCurrentXp("589")
        .setRequiredXp("100000")
        .setShowXp(true);
     

    const cardBuffer = await card.build();

    fs.writeFileSync(`RankCard.png`, cardBuffer);
    console.log("Done!");
})()