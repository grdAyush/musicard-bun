

# musicard-bun 🎵

The kawaii 💕 npm package for generating sugoi 🤩 music cards for your apps and sites! 

```
npm install musicard-bun
```

This package is a fun fork of musicard with some radical new features 🌈 for maximum sugoi-ness!

## Support Server

<a href="https://discord.gg/HjnjsdSUWK">
  <img src="https://cdn.discordapp.com/attachments/974995949996900376/1194876002904571924/Picsart_24-01-11_10-59-02-138.jpg" width="500">
</a>

## Usage

Generate a music card like normal:

```js
(async () => {
    const { musicCard } = require("musicard-bun");
    const fs = require("fs");

    const card = new musicCard()
        .setName("Bad Habits")
        .setAuthor("By Ed Sheeran")
        .setColor("auto")
        .setTheme("dynamic")
        .setBrightness(50)
        .setThumbnail("https://static.qobuz.com/images/covers/ga/ua/rmk2cpqliuaga_600.jpg")
        .setProgress(10)
        .setStartTime("0:00")
        .setEndTime("3:00")

    const cardBuffer = await card.build();

    fs.writeFileSync(`musicard.png`, cardBuffer);
    console.log("Done!");
})();
```

The anime theme makes your cards look kawaii with rainbow sparkles and text 🌸✨

Here's a preview:

This is the **anime** output of musicard. 
![anime](https://cdn.discordapp.com/attachments/1187040613179347016/1187047479942852688/musicard-2.png)

This is the **classic** output of musicard.
![classic](https://s6.imgcdn.dev/ZDw99.png)

This is the **dynamic** output of musicard.
![dynamic](https://s6.imgcdn.dev/ZD6Jy.png)

This is the **space** output of musicard.
![space](https://cdn.discordapp.com/attachments/1191380828056461373/1191694289357520977/musicCard.png)

This is the **space+** output of musicard.
![space](https://cdn.discordapp.com/attachments/1053921059012878367/1191710902039359488/musicCard.png)

 # Rank Card
 Generate a rank card like this:
 ```js
 (async () => {
    const { RankCard } = require("musicard-bun");
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
 ```
 Preview: 
 
  ![RankCard](https://cdn.discordapp.com/attachments/1179018507678126111/1191784474061586475/RankCard.png)
 
## Credits
"We don't just copy, we paste with style."

Our core philosophy is simple:

Find something popular
Copy it
Slap better things on it


Original musicard package by [A3PIRE](https://github.com/a3pire/musicard)

