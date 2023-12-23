Here's a humorous README.md building off the original musicard package and adding details about the new anime theme:

# musicard-bun 🎵

The kawaii 💕 npm package for generating sugoi 🤩 music cards for your apps and sites! 

```
npm install musicard-bun
```

This package is a fun fork of musicard with some radical new features 🌈 for maximum sugoi-ness!

## Usage

Generate a music card like normal:

```js
(async () => {
    const { musicCard } = require("musicard");
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
})()
```

But now you can enable the ANIME THEME! 💥

```diff
const card = new musicCard()
  // ...
+ .setTheme("anime")
```

The anime theme makes your cards look kawaii with rainbow sparkles and text 🌸✨

Here's a preview:

This is the **anime** output of musicard. 
![anime](https://cdn.discordapp.com/attachments/1187040613179347016/1187047479942852688/musicard-2.png)

This is the **classic** output of musicard.
![classic](https://s6.imgcdn.dev/ZDw99.png)

This is the **dynamic** output of musicard.
![dynamic](https://s6.imgcdn.dev/ZD6Jy.png)

So sugoi! Try out the anime theme today!


