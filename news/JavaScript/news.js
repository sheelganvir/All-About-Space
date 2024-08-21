const DEFAULT_IMAGE_URL = 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg';

const newsContainer = document.getElementById('news-container');

// Replace the API URL with your static JSON data
const jsonData = {
  "status": "ok",
  "totalResults": 42896,
  "articles": [
    {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Jonathan O’Callaghan",
        "title": "This Gargantuan Lab Simulates Blasting Satellites Into Space",
        "description": "If you spend millions of dollars developing a satellite, you need to know it can handle the rigors of hurtling around the Earth at 17,000 mph. The UK's National Satellite Test Facility is here to help.",
        "url": "https://www.wired.com/story/national-satellite-testing-facility-uk-nstf/",
        "urlToImage": "https://media.wired.com/photos/66ba08a70b1f5de39b9d1ecf/191:100/w_1280,c_limit/081224_Satellite%20Testing%20PRINT%201.jpg",
        "publishedAt": "2024-08-14T11:30:00Z",
        "content": "Satellites go through a lot. As they hurtle around our planet at up to 17,000 miles an hour they must cope with the extreme vacuum of space and vast temperature swings, all while trying to precisely … [+4500 chars]"
      },
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Umar Shakir",
        "title": "NASA blew up this inflatable space station structure on purpose",
        "description": "The second full-scale burst test for Sierra Space’s inflatable LIFE space habitat reached 74 PSI, exceeding NASA’s recommended safety levels.",
        "url": "https://www.theverge.com/2024/7/25/24206219/nasa-sierra-space-inflatable-fabric-space-station-burst-test-video",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/N_4hGOGCzGdoSS2XM2KYb2Zu7f0=/0x0:8368x5579/1200x628/filters:focal(4184x2790:4185x2791)/cdn.vox-cdn.com/uploads/chorus_asset/file/25545878/Image_2.jpg",
        "publishedAt": "2024-07-25T20:21:42Z",
        "content": "NASA blew up this inflatable space station structure on purpose\r\nNASA blew up this inflatable space station structure on purpose\r\n / Watch Sierra Spaces inflatable space habitat undergo its second Ul… [+1579 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Boone Ashworth",
        "title": "As Skies Fill With Space Junk, Nonprofit Urges US to Pause StarLink Launches",
        "description": "The advocacy group PIRG is asking the US government to conduct environmental reviews of commercial internet satellites. The group’s new report warns of a space garbage problem with Earthly consequences.",
        "url": "https://www.wired.com/story/pirg-starlink-environmental-review-space-garbage/",
        "urlToImage": "",
        "publishedAt": "2024-08-08T07:01:00Z",
        "content": "A new report by a consumer advocacy group calls for a renewed push to review the environmental effects of low-Earth-orbit satellites like the ones operated by StarLink.\r\nThese are satellites that sco… [+3363 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Isaac Schultz",
        "title": "Astronomers Detect Possible Matter-Antimatter Annihilation in Giant Space Explosion",
        "description": "Subatomic particles colliding at nearly the speed of light may have produced a unique emission line in the brightest explosion ever observed.",
        "url": "https://gizmodo.com/astronomers-detect-possible-matter-antimatter-annihilation-in-giant-space-explosion-2000479308",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/1-MAIN-grb-jet-illustration-16.width-1320-e1722003416538.jpg",
        "publishedAt": "2024-07-26T14:55:04Z",
        "content": "A team of researchers scrutinizing the brightest gamma-ray burst in at least 10,000 years identified a unique emission line that it believes could reveal some extreme physics at the heart of the burs… [+4591 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Germain Lussier",
        "title": "Interstellar’s Re-Release Is Still Happening, Just Later",
        "description": "Christopher Nolan's space travel film starring Matthew McConaughey had a very weird Wednesday.",
        "url": "https://gizmodo.com/interstellar-re-release-rumors-christopher-nolan-imax-2000484457",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Interstellar-mcconaughey.jpg",
        "publishedAt": "2024-08-07T22:30:22Z",
        "content": "When you woke up this morning, Christopher Nolan’s film Interstellar was probably the last thing on your mind. However, by the end of Wednesday, fans of the film had gone on a ride worthy of the spac… [+2073 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Harri Weber",
        "title": "How to See a Spacecraft Slingshot Around Earth on Monday Night",
        "description": "The European Space Agency is calling the risky \"braking\" maneuver a \"double world first.\"",
        "url": "https://gizmodo.com/how-to-see-a-spacecraft-slingshot-around-earth-on-monday-night-2000488333",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/esa-juice-earth-moon-flyby-gravity-assist.jpg",
        "publishedAt": "2024-08-18T21:25:15Z",
        "content": "The European Space Agency says it is closely watching and adjusting the Jupiter Icy Moons Explorer (JUICE) as it attempts to whip the spacecraft around the moon and the Earth as part of a multipart j… [+2690 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Matt Novak",
        "title": "Every TV Show Astronauts Can Watch on the ISS Right Now",
        "description": "From Andor to Yellowstone, here's what astronauts can watch in space.",
        "url": "https://gizmodo.com/every-tv-show-astronauts-can-watch-on-the-iss-right-now-1851567279",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/2017-star-wars-movies-tv-shows-on-international-space-station-iss-nasa.jpg",
        "publishedAt": "2024-08-04T11:00:33Z",
        "content": "Astronauts on board the International Space Station have a lot of serious business to handle each day. But even astronauts need time for rest and relaxation. And if they like, they can watch a movie … [+4608 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Cheryl Eddy",
        "title": "Ridley Scott Helped Shape Alien: Romulus—But at a Careful Distance",
        "description": "The legendary Alien director was careful to give Alien: Romulus director Fede Alvarez plenty of space.",
        "url": "https://gizmodo.com/alien-romulus-ridley-scott-involvement-fede-alvarez-2000484835",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Alien_Romulus.jpg",
        "publishedAt": "2024-08-08T19:00:31Z",
        "content": "Alien: Romulus is directed by Fede Alvarez, but the latest entry in the sci-fi series launched by Ridley Scott in 1979 has some very close ties to the original film. One is its setting; Romulus takes… [+1808 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "NASA’s Quantum Cold Atom Lab Just Made Space Even Cooler—Literally",
        "description": "Using quantum technology in space could help scientists unravel the mysteries of dark matter.",
        "url": "https://gizmodo.com/nasas-quantum-cold-atom-lab-just-made-space-even-cooler-literally-2000486530",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/NASA-Atom-Interferometer.jpeg",
        "publishedAt": "2024-08-14T10:00:50Z",
        "content": "NASA is experimenting with the use of quantum technology to measure gravity, magnetic fields, and other forces in space. The space agency just tested a brand new tool on board the International Space… [+3059 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "James Whitbrook",
        "title": "Colm Meaney Isn’t Sure Star Trek Needs an Old Man Miles O’Brien",
        "description": "Don't count on the Deep Space Nine star angling for a Star Trek: O'Brien any time soon.",
        "url": "https://gizmodo.com/colm-meaney-star-trek-return-miles-o-brien-ds9-2000486657",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/star-trek-deep-space-nine-miles-obrien.jpg",
        "publishedAt": "2024-08-13T21:30:11Z",
        "content": "Of the ’90s Trek series to get their proverbial flowers in the franchise’s streaming renaissance, Deep Space Nine has arguably been the show that, much as it was in the ’90s, has been treated as a bi… [+2826 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Germain Lussier",
        "title": "Ronald D. Moore Dives Into For All Mankind’s Russia-Set Spinoff",
        "description": "Titled Star City, it will show the alternate universe space race from the opposite point of view.",
        "url": "https://gizmodo.com/for-all-mankind-spinoff-star-city-apple-tv-ronald-moore-2000480833",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-29-at-1.00.30 PM-e1722283314309.jpg",
        "publishedAt": "2024-07-29T22:00:59Z",
        "content": "Fans of Apple TV+’s show For All Mankind got some very good news earlier this year. Not only would the show be coming back for a fifth season, a spinoff show called Star City was in the works, which … [+3039 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Justin Carter",
        "title": "Legendary Will Bring Neal Stephenson’s Seveneves to TV Life",
        "description": "Still in the mood for shohws about space travel and humanity coming together? Legendary sure hopes you are.",
        "url": "https://gizmodo.com/seveneves-tv-adaptation-neal-stephenson-2000482971",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/seveneves-cover.jpg",
        "publishedAt": "2024-08-04T19:20:00Z",
        "content": "If you’ve been enjoying recent sci-fi shows like 3-Body Problem and For All Mankind, there’s a new show coming to the stable. Neal Stephenson’s sci-fi novel Seveneves is coming to the small screen wi… [+1551 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Lucas Ropek",
        "title": "Toronto Is Converting an Airport Into a Futuristic City Within a City",
        "description": "Developers wants to build an urban hub within Toronto's boundaries using a defunct span of runway and hangar space.",
        "url": "https://gizmodo.com/toronto-is-converting-an-airport-into-a-futuristic-city-within-a-city-2000488075",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Northcrest-Development-mockup-of-a-future-city-in-Toronto.jpg",
        "publishedAt": "2024-08-18T16:30:55Z",
        "content": "Developers in Toronto have their sights set on converting an old, defunct airport into a thriving urban center. What was once the Downsview Airport, a storied aviation base, will now become a $22 bil… [+2492 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "They went to space for eight days - and could be stuck until 2025",
        "description": "Two American astronauts face the sudden prospect of spending Christmas and New Year in space.",
        "url": "https://www.bbc.com/news/articles/cg4yqepr469o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/775f/live/e07ef050-551e-11ef-8481-7905ff38b187.jpg",
        "publishedAt": "2024-08-08T02:08:05Z",
        "content": "Butch Wilmore and Sunita Williams prior to the launch of their mission in June\r\nWhen two American astronauts blasted off on a test mission to the International Space Station on 5 June, they were expe… [+3908 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Chinese Rocket Breaks Apart in Orbit, Leaves Dangerous Trail of Debris in Space",
        "description": "China's attempt to build an orbital satellite network similar to SpaceX's Starlink is off to an alarming start.",
        "url": "https://gizmodo.com/chinese-rocket-breaks-apart-in-orbit-leaves-dangerous-trail-of-debris-in-space-2000484626",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/China-launches-18-satellites.jpg",
        "publishedAt": "2024-08-08T16:10:58Z",
        "content": "More than 50 pieces of space debris were spotted in the wake of a Chinese rocket launch, which could pose a risk to satellites in low Earth orbit.\r\nChina launched its first batch of broadband satelli… [+2608 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Isaac Schultz",
        "title": "Big Bubble of Plasma in Space Shoots Fast Radio Burst Toward Earth",
        "description": "The findings could clarify the origins of the enigmatic and brilliant emissions that often come from the deep recesses of space.",
        "url": "https://gizmodo.com/big-bubble-of-plasma-in-space-shoots-fast-radio-burst-toward-earth-2000484616",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/fast-radio-burst-illustration.jpg",
        "publishedAt": "2024-08-08T14:35:21Z",
        "content": "A team of researchers believes the flurry of radio waves emanating from deep space came from a bubble of plasma surrounding a compact object, one of the universe’s densest entities.\r\nThe waves were a… [+2718 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Matthew Gault",
        "title": "You’ll Soon Be Able to Blow Up Cybertrucks in ‘Fortnite’",
        "description": "Rejoice Tesla haters, the free-to-play online shooter will be a safe space for you to vent your rage at the ugliest vehicle ever made.",
        "url": "https://gizmodo.com/youll-soon-be-able-to-blow-up-cybertrucks-in-fortnite-2000477483",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Cybertruck.jpg",
        "publishedAt": "2024-07-22T17:30:55Z",
        "content": "Cybertrucks are coming to Fortnite. The popular free-to-play battle royale shooter announced the arrival of the memetic nightmare vehicle in a Monday post on X. Those interested in driving or destroy… [+2388 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Isaac Schultz",
        "title": "First-Ever ISS Archaeological Survey Reveals Unexpected Findings",
        "description": "The survey provided insights into how astronauts utilized the available space—though it involved less digging compared to traditional archaeological surveys.",
        "url": "https://gizmodo.com/first-ever-iss-archaeological-survey-reveals-unexpected-findings-2000484062",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/space-archaeology-iss.jpg",
        "publishedAt": "2024-08-07T18:00:12Z",
        "content": "The word “archaeology” conjures up countless images in the cultural imagination: ancient civilizations, lost artifacts, andas much as we try to break away from clichéIndiana Jones. But a recent archa… [+4372 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Justin Carter",
        "title": "Alien: Romulus Gives Birth to A Big Opening Weekend",
        "description": "No one can hear you scream in space, but they may be able to hear the sound of 'cha-ching!' coming to Disney's wallet.",
        "url": "https://gizmodo.com/alien-romulus-box-office-opening-weekend-2000488338",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Alien-Romulus-creature.jpg",
        "publishedAt": "2024-08-18T20:00:57Z",
        "content": "The numbers are in, and Alien: Romulus is off to scary big start.\r\nPer Deadline, the sci-fi horror flick went above box office projections and opened at $108.2 million worldwide, at time of writing. … [+1576 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "Metallic Asteroid Psyche Is Surprisingly Soggy",
        "description": "Data from the James Webb Space Telescope indicates Psyche could be covered in water and a chemical that combines with iron to form rust.",
        "url": "https://gizmodo.com/metallic-asteroid-psyche-is-surprisingly-soggy-2000487504",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/psyche-impact.jpg",
        "publishedAt": "2024-08-15T17:45:01Z",
        "content": "When a NASA mission finally arrives at the vaunted Psyche asteroid in six years, it may find its target coated in a rust-like substance.\r\nPrevious glimpses suggests the asteroid, which measures 140 m… [+2920 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Justin Carter",
        "title": "Colin Kaepernick Pisses Off Comics Industry with AI Comics Deal",
        "description": "As is the case with genAI in other industries, comics pros are not happy about the technology intruding on their space.",
        "url": "https://gizmodo.com/colin-kaepernick-lumi-genai-comics-2000482978",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/colin-kaepernick.jpg",
        "publishedAt": "2024-08-04T20:30:30Z",
        "content": "The rise of generative AI has caused no small amount of controversy in the last year, particular over in the entertainment industry. It was a big reason for the Hollywood strikes and the current stri… [+2793 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Eric Ravenscraft",
        "title": "What Are Color Gamuts and Color Spaces in TVs and Monitors, and Do They Matter?",
        "description": "If you’re confused by all the jargon used to describe your new monitor, don’t worry. We’ve got you (and your color gamut) covered.",
        "url": "https://www.wired.com/story/what-are-color-gamuts-and-why-do-they-matter/",
        "urlToImage": "https://media.wired.com/photos/66afff84c00d51a4cf762728/191:100/w_1280,c_limit/Pixels-red-green-blue-RGB-LED-computer-screen-GettyImages-615632920-sandergroffen-(cropped).jpg",
        "publishedAt": "2024-08-05T12:00:00Z",
        "content": "Back in the 1950s, when color TV was invented, everything was simple. TVs were either color or black-and-white, and you could tell at a glance which was which. Today, you can find TVs and monitors th… [+3127 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "WIRED",
        "title": "NASA Nears Decision Time on Boeing Starliner's Fate",
        "description": "There’s now a significant chance the spacecraft's crew will have to return to Earth on a different one—and maybe not until next year.",
        "url": "https://www.wired.com/story/nasa-boeing-starliner-decision/",
        "urlToImage": "https://media.wired.com/photos/66bf5865d6d79d1fcf8ddbf3/191:100/w_1280,c_limit/starliner-sci-.jpg",
        "publishedAt": "2024-08-16T16:18:51Z",
        "content": "With no consensus on the safety of the Starliner crew capsule, NASA officials said Wednesday they need another week or two before deciding whether to bring two astronauts back to Earth on Boeing's sp… [+4182 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Boeing’s Troubled Starliner Forces NASA to Delay Astronaut Mission to ISS",
        "description": "Speculation is swirling that the two Starliner astronauts, currently stuck on the ISS, may have to return home on a SpaceX Dragon.",
        "url": "https://gizmodo.com/starliner-mission-forces-nasa-to-delay-launch-of-crew-9-to-the-iss-2000484054",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/boeings-starliner-crew-ship-approach.gif",
        "publishedAt": "2024-08-07T15:35:46Z",
        "content": "NASA has postponed the launch of its next crew of astronauts to the International Space Station (ISS) due to ongoing issues with the Starliner CST-100 spacecraft. The Starliner has been parked outsid… [+2460 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Bryce Young, Christopher Moran",
        "title": "How to Save Your Home From a Wildfire",
        "description": "Small improvements to the roof, siding, windows, and vents of your house can make a big difference when threatened by the risk of flames.",
        "url": "https://www.wired.com/story/how-to-save-your-home-from-a-wildfire/",
        "urlToImage": "https://media.wired.com/photos/669a91018c77caab526d2885/191:100/w_1280,c_limit/Syndication---The-Conversation---20-July-AP120618112763.jpg",
        "publishedAt": "2024-07-20T11:00:00Z",
        "content": "The most common risks are having flammable mulch, plants, firewood, lawn furniture, decks, and fences. These items have been a primary reason homes burned in many wildfires, including the 2018 Camp F… [+1679 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Paige Bruton",
        "title": "Boeing is running out of parking space – again",
        "description": "Parts shortages and delivery delays have left Boeing with around 200 jets sitting idle on airfields, The Wall Street Journal reported.",
        "url": "https://www.businessinsider.com/boeing-airplanes-awaiting-parts-delivery-clog-up-parking-spaces-2024-7",
        "urlToImage": "https://i.insider.com/669f95ea80d4d5da13d6249a?width=1200&format=jpeg",
        "publishedAt": "2024-07-23T12:16:22Z",
        "content": "A recent satellite image of Boeing headquarters in Everett, Washington.Courtesy of Maxar Technologies.\r\n\u003Cul\u003E\u003Cli\u003EAround 200 Boeing jets are sitting idle in airfields and outside plants, per the Wall S… [+2363 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Emily Kwong",
        "title": "How does space change the human body? The answer will shapes future missions",
        "description": "Space X’s highly anticipated Polaris Dawn mission is set to launch later this summer – with an all-civilian crew. And a big part of their mission is researching how space changes the human body.",
        "url": "https://www.npr.org/2024/08/06/nx-s1-5061561/how-does-space-change-the-human-body-the-answer-will-shapes-future-missions",
        "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "publishedAt": "2024-08-06T22:01:34Z",
        "content": "Space Xs highly anticipated Polaris Dawn mission is set to launch later this summer with an all-civilian crew. And a big part of their mission is researching how space changes the human body."
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Latest Geomagnetic Storm Catches Scientists Off Guard",
        "description": "Recent solar activity has triggered a severe G4 geomagnetic storm, causing auroras to appear worldwide and with more possibly visible tonight.",
        "url": "https://gizmodo.com/latest-geomagnetic-storm-catches-scientists-off-guard-2000486087",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Aurora-on-ISS.jpeg",
        "publishedAt": "2024-08-12T21:30:43Z",
        "content": "The Sun is going through an intense time right now. Our host star is experiencing increased activity, with a series of solar eruptions aimed towards Earth that resulted in a rare geomagnetic storm.\r\n… [+3062 chars]"
      },
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Barbara Krasnoff",
        "title": "8 photo sites that let you showcase and discuss your work",
        "description": "We’ve rounded up several social networking sites that you might want to consider if you want to join a community of photography enthusiasts.",
        "url": "https://www.theverge.com/24219372/photography-instagram-500px-flickr-showcase",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/ha9z-Ejn_MEFzgflKLsQCVojU8Y=/0x0:4032x6048/1200x628/filters:focal(2016x3024:2017x3025)/cdn.vox-cdn.com/uploads/chorus_asset/file/25491825/BFARSACE_Z6III_08.jpg",
        "publishedAt": "2024-08-17T13:00:00Z",
        "content": "Image: Becca Farsace / The Verge\r\n\n \n\n Instagram is a popular place to show off your latest photos, but if you’re a real photography enthusiast, it may not be enough. You may want a better-looking po… [+7387 chars]"
      },
      {
        "source": {
          "id": "ars-technica",
          "name": "Ars Technica"
        },
        "author": "Jennifer Ouellette",
        "title": "Jude Law’s Jedi befriends kids lost in space in Star Wars: Skeleton Crew trailer",
        "description": "The standalone series is set in the same time frame as The Mandalorian and Ahsoka.",
        "url": "https://arstechnica.com/culture/2024/08/jude-laws-jedi-befriends-kids-lost-in-space-in-star-wars-skeleton-crew-trailer/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/08/crew4-760x380.jpg",
        "publishedAt": "2024-08-11T20:47:40Z",
        "content": "10\r\nJude Law plays a Jedi in Star Wars: Skeleton Crew.\r\nThe Star Wars universe continues to expand on streaming television with the release of the first trailer for Star Wars: Skeleton Crew this week… [+2165 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Crypto Bro Charters Private SpaceX Mission to Earth’s Poles",
        "description": "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
        "url": "https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg",
        "publishedAt": "2024-08-13T16:05:37Z",
        "content": "A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "NASA Fires Lasers At the ISS",
        "description": "joshuark shares a report from The Verge: NASA researchers have successfully tested laser communications in space by streaming 4K video footage originating from an airplane in the sky to the International Space Station and back. The feat demonstrates that the …",
        "url": "https://science.slashdot.org/story/24/07/27/0030204/nasa-fires-lasers-at-the-iss",
        "urlToImage": "https://a.fsdn.com/sd/topics/iss_64.png",
        "publishedAt": "2024-07-27T07:00:00Z",
        "content": "Never try to teach a pig to sing. It wastes your time and annoys the pig.\r\n-- Lazarus Long, \"Time Enough for Love\""
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Dua Rashid",
        "title": "Say Goodbye to the Chromecast",
        "description": "And say hello to the Google TV Streamer that features a set-top box design instead of an HDMI dongle.",
        "url": "https://gizmodo.com/say-goodbye-to-the-chromecast-2000477773",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-23-103538.jpg",
        "publishedAt": "2024-07-23T15:45:20Z",
        "content": "It’s the end of the era as we say farewell to the Chromecast. 9to5Google reported that the Google Chromecast we all know and love is being replaced by the new “Google TV Streamer,” vying for a spot u… [+1303 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Android Central"
        },
        "author": "christinep2424@gmail.com (Christine Persaud)",
        "title": "Google Pixel 9 vs. Samsung Galaxy S24",
        "description": "Both the Google Pixel 9 and Samsung Galaxy S24 are fabulous options in the affordable premium smartphone space.",
        "url": "https://www.androidcentral.com/phones/google-pixel-9-vs-samsung-galaxy-s24",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/Q7GuZrc2wXEKQJNz4D6HxV-1200-80.jpg",
        "publishedAt": "2024-08-15T12:00:28Z",
        "content": "If you are looking for one of the newest Android devices, the Google Pixel 9 vs. Samsung Galaxy S24 are two good phones to consider. Both are the entry options in their respective line-ups but boast … [+11889 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Sam Shedden",
        "title": "NASA can now stream 4K Video to space using lasers",
        "description": "NASA has successfully streamed the first-ever 4K video to deep space and back using laser technology. Wednesday’s (July, 24) achievement… Continue reading NASA can now stream 4K Video to space using lasers\nThe post NASA can now stream 4K Video to space using …",
        "url": "https://readwrite.com/nasa-can-now-stream-4k-video-to-space-using-lasers/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/illuma-t-to-lcrd-003-ezgif.com-webp-to-jpg-converter.jpg",
        "publishedAt": "2024-07-25T11:39:40Z",
        "content": "NASA has successfully streamed the first-ever 4K video to deep space and back using laser technology.\r\nWednesday’s (July, 24) achievement marks a significant advancement in space data transmission ca… [+1605 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "Mars Missions Face Unexpected Challenge: Expired Meds",
        "description": "Astronauts get aches, pains, and allergies just like those of us back on Earth, but they may be out of luck if the pills go bad before they return home from the Red Planet.",
        "url": "https://gizmodo.com/mars-missions-face-unexpected-challenge-expired-meds-2000478111",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/mars.jpg",
        "publishedAt": "2024-07-24T10:00:19Z",
        "content": "You know that thing when youve got a godawful cold and you go into your medicine cabinet to dig out the DayQuil thats been sitting there since forever and are about to pop the capsules into your mout… [+2660 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Hannah Abraham",
        "title": "Stunning timelapse video shows the northern lights from space thanks to a solar storm",
        "description": "NASA astronaut Matthew Dominick shared incredible footage of auroras from the International Space Station.",
        "url": "https://www.businessinsider.com/nasa-astronaut-stunning-timelapse-video-northern-lights-space-auroras-2024-8",
        "urlToImage": "https://i.insider.com/66bddafb955b01c3294ed28b?width=1200&format=jpeg",
        "publishedAt": "2024-08-15T11:24:55Z",
        "content": "The northern lights may appear stunning from Earth, but it turns out they look even better from space.NASA astronaut Matthew Dominick released stunning timelapse footage of auroras dancing above Eart… [+2622 chars]"
      },
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Charles Pulliam-Moore",
        "title": "Alien: Romulus is a solid franchise tribute plagued by weird optics",
        "description": "Alien: Romulus — out August 16th — is a visual stunner teeming with disgusting jump scares, but its central drama falls flat.",
        "url": "https://www.theverge.com/2024/8/14/24219417/alien-romulus-review",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/nP3CmjMCn25DBxsqUOh1h6jxp1Q=/0x0:6000x4000/1200x628/filters:focal(3348x1944:3349x1945)/cdn.vox-cdn.com/uploads/chorus_asset/file/25570474/ALN_36774_R.jpg",
        "publishedAt": "2024-08-14T19:00:00Z",
        "content": "Though Fede Álvarezs new Alien film is gorgeous, its questionable optics leave much to be desired.\r\nByCharles Pulliam-Moore, a reporter focusing on film, TV, and pop culture. Before The Verge, he wro… [+6587 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Android Central"
        },
        "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
        "title": "Ayaneo Pocket EVO pairs OLED with fast refresh rates for an incredible handheld",
        "description": "Ayaneo's latest foray into the Android gaming handheld space arrives courtesy of the Pocket EVO. This is being touted as the \"world's first 7-inch OLED Android handheld.\"",
        "url": "https://www.androidcentral.com/gaming/ayaneo-pocket-evo-pre-orders",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/jzjBSBwwZmdSEK5ab5teKd-1200-80.jpg",
        "publishedAt": "2024-08-08T19:01:11Z",
        "content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EAyaneo has announced its latest Android handheld, the Pocket EVO. \u003C/li\u003E\u003Cli\u003EThe Pocket EVO is the first of its kind to feature an OLED display, while also sporting a 120… [+4321 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": "Jason Chun",
        "title": "Need More Gmail Storage Space? Regain 15GB Without Losing a Thing",
        "description": "We'll show you how to get to inbox zero while keeping all your old messages, photos and videos.",
        "url": "https://www.cnet.com/tech/services-and-software/need-more-gmail-storage-space-regain-15gb-without-losing-a-thing/",
        "urlToImage": "https://www.cnet.com/a/img/resize/74899f0b6f4068d74de710653bfdfb8d80254d45/hub/2024/07/25/88b19b03-99e3-4b31-a48d-fa8b83472e6c/gmail-messages-inbox-graphic-v2.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-08-03T10:00:08Z",
        "content": "Is your email inbox overflowing? Maybe you haven't unsubscribed to those newsletters you stopped reading, or you forgot to delete a few spammy emails, and suddenly you've used up the 15GB of storage … [+9215 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": "Oliver Haslam",
        "title": "Enjoy a Hefty 39% Discount on Anker Soundcore Space A40 Earbuds Today",
        "description": "Snag an upgrade to your music and podcasts for just $49 with this Amazon deal.",
        "url": "https://www.cnet.com/deals/enjoy-a-hefty-39-discount-on-anker-soundcore-space-a40-earbuds-today/",
        "urlToImage": "https://www.cnet.com/a/img/resize/91d35b5ebf5729a634c48c06426b70077cc5f92c/hub/2024/04/23/30c1ac5b-e74e-493f-be53-8a3715c1c52f/soundcore-space-a40-earbuds.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-08-15T13:43:43Z",
        "content": "When life gives you lemons, you should probably cut them up and sell them as lemonade or as a garnish on a drink, but won't that be easier to do when you've got some new wireless earbuds? Of course i… [+1028 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Isaac Schultz",
        "title": "NASA Explains Why We May Not See Aliens (Yet)",
        "description": "If intelligent civilizations exist out there, they may not rely on amounts of energy that would make them visible to us.",
        "url": "https://gizmodo.com/nasa-explains-why-we-may-not-see-aliens-yet-2000483173",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/alien-exoplanet-solar-cells-technosignatures-e1722868409746.jpg",
        "publishedAt": "2024-08-05T16:55:36Z",
        "content": "In 1950, Enrico Fermi raised an innocuous but deeply unsettling question: in a galaxy filled with planets and star systems, why don’t we see any other signs of life? The questionnow known as Fermi’s … [+3911 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "Watch Mars and Jupiter Appear to Almost Touch in a Rare Conjunction",
        "description": "The two planets won't appear this close again in the night sky until 2033. Here's how to watch this unusual celestial display.",
        "url": "https://gizmodo.com/watch-mars-and-jupiter-appear-to-almost-touch-in-a-rare-conjunction-2000486583",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/mars-jupiter-conjunction-astronomy.jpg",
        "publishedAt": "2024-08-13T20:00:50Z",
        "content": "Two of Earths neighbors will appear awfully close in the sky on August 14, as the orbits of Mars and Jupiter make them seem to almost touch.\r\nA conjunction is an astronomical term for when two or mor… [+2173 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "Here’s a Rare Glimpse of China’s Mysterious Spaceplane in Orbit",
        "description": "The hybrid spacecraft launched in December 2023 for its third flight, but very little is known about this secretive Chinese mission.",
        "url": "https://gizmodo.com/heres-a-rare-glimpse-of-chinas-mysterious-spaceplane-in-orbit-2000483575",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Chinese-spaceplane.jpg",
        "publishedAt": "2024-08-06T16:20:29Z",
        "content": "New images show China’s stealthy spaceplane in orbit, revealing new details about its third secretive missionincluding the surprising appearance of what appear to be solar panels.\r\nAstrophotographer … [+2521 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "California Sea Lions Are Behaving Strangely Amid Brain-Attacking Algae Outbreak",
        "description": "The marine mammals are being poisoned by domoic acid—a neurotoxin produced by a species of algae.",
        "url": "https://gizmodo.com/california-sea-lions-are-behaving-strangely-amid-brain-attacking-algae-outbreak-2000482377",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/sea-lion-algae-rescue.jpeg",
        "publishedAt": "2024-08-02T10:00:09Z",
        "content": "Sea lions exposed to a neurotoxin produced by a form of algae have been washing up on a stretch of California coast line. Those not killed by the algae are behaving in some very strange ways, includi… [+2162 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "SpaceX’s Starship Could Cause NASA’s Lunar Gateway to Lose Control",
        "description": "A report suggests SpaceX's giant rocket might be too big to dock with NASA Moon-orbiting outpost.",
        "url": "https://gizmodo.com/spacexs-starship-could-cause-nasas-lunar-gateway-to-lose-control-2000483167",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/NASA-lunar-gateway.jpg",
        "publishedAt": "2024-08-05T16:29:37Z",
        "content": "NASA’s Lunar Gateway is facing some serious challenges ahead of its launch: The orbital outpost may be unable to support large visiting vehicles such as SpaceX’s Starship, which is 18 times more mass… [+3588 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Chris Stokel-Walker",
        "title": "How 5G technology is helping curb carbon emissions and waste at the Paris Games",
        "description": "Historically, the Olympic Games have hurt host cities' environments. 5G technology, which requires less physical space and energy, could help.",
        "url": "https://www.businessinsider.com/paris-olympics-how-5g-tech-could-curb-environmental-impact-2024-7",
        "urlToImage": "https://i.insider.com/66a27ce82d66759f66fe52c0?width=1200&format=jpeg",
        "publishedAt": "2024-07-29T15:24:40Z",
        "content": "In August, athletes swam in the Seine as part of a test event for the Paris Games.Michel Euler/ AP\r\n\u003Cul\u003E\u003Cli\u003EThe Games' need for a massive infrastructure project has historically hurt host cities' env… [+6616 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Jaures Yip",
        "title": "Watch Jeff Bezos show off Blue Origin's new rocket, one of the largest ever made, and his massive factory",
        "description": "Jeff Bezos recently played tour guide for a look inside Blue Origin's factory and showed off his inner space geek.",
        "url": "https://www.businessinsider.com/jeff-bezos-shows-blue-origin-new-glenn-rocket-factory-tour-2024-8",
        "urlToImage": "https://i.insider.com/66bf7f0d5da406397bf69a25?width=1200&format=jpeg",
        "publishedAt": "2024-08-16T17:45:37Z",
        "content": "Jeff Bezos gave an exclusive tour of Blue Origin's New Glenn production facility.Joe Raedle / Staff / Getty Images\r\n\u003Cul\u003E\u003Cli\u003EJeff Bezos gave a tour of Blue Origin's factory, showcasing the space compa… [+4105 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Julia Williamson",
        "title": "I'm a professional declutterer. Dorm rooms can get messy fast — here are 4 tips for keeping dorm rooms clutter-free.",
        "description": "The professional declutterer says college students should focus on tidiness in their dorm rooms and use vertical space for organization.",
        "url": "https://www.businessinsider.com/professional-declutterer-how-to-dorm-room-organized-mess-free-2024-8",
        "urlToImage": "https://i.insider.com/66be3595955b01c3294ef51b?width=1200&format=jpeg",
        "publishedAt": "2024-08-16T14:33:57Z",
        "content": "College students can easily declutter their dorm rooms.James Woodson/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EI'm a professional declutterer, and I know dorm rooms can get messy.\u003C/li\u003E\u003Cli\u003ECollege students should take ad… [+3640 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": "Aaron Pruner",
        "title": "These Apple TV Plus Sci-Fi Shows Will Keep You on the Edge of Your Seat",
        "description": "An off-kilter office drama, a sprawling space epic and Godzilla -- Apple TV Plus is full of must-see genre programming.",
        "url": "https://www.cnet.com/tech/services-and-software/these-apple-tv-plus-sci-fi-shows-will-keep-you-on-the-edge-of-your-seat/",
        "urlToImage": "https://www.cnet.com/a/img/resize/c871f9584f1cb7aeb8be6780612bce1480a44d0a/hub/2022/04/11/f9cab472-4be9-4cd1-a098-dcaa2a856feb/atv-severance-photos-010702.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-08-05T12:00:04Z",
        "content": "Apple TV Plus has been around for five years, and in that period, the streamer has compiled a varied programming library. When it comes to standout streaming shows, audiences tend to flock to genre t… [+932 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "NASA’s Abandoned Moon Bot Might Get a Rescue Mission From a Lunar Startup",
        "description": "NASA put out a request for the private sector to take over its VIPER rover, and Intuitive Machines answered the call.",
        "url": "https://gizmodo.com/theres-hope-for-nasas-rover-to-reach-the-moon-with-lunar-company-2000487098",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/viper-rover-e1723664235749.jpg",
        "publishedAt": "2024-08-14T21:05:27Z",
        "content": "Intuitive Machines is looking to take over a four-wheeled lunar rover after NASA called off its planned trip to the Moon due to budget constraints.\r\nThe Houston-based company is putting together a re… [+3536 chars]"
      },
      {
        "source": {
          "id": "the-next-web",
          "name": "The Next Web"
        },
        "author": "Thomas Macaulay",
        "title": "Airbus backs space gym to jump-start astronaut health",
        "description": "An exercise machine for astronauts has entered an Airbus accelerator. Built by UK startup Physical Mind London, the device mitigates the impacts of zero gravity, which can be brutal. After six months in space, astronauts can lose up to 20% of their bone mass.…",
        "url": "https://thenextweb.com/news/astronauts-exercise-machine-joins-airbus-space-accelerator",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F07%2FUntitled-design-2-3.jpg&signature=9d14701aa953edc2f1a09ddf3522e034",
        "publishedAt": "2024-07-25T15:37:49Z",
        "content": "An exercise machine for astronauts has entered an Airbus accelerator.\r\nBuilt by UK startup Physical Mind London, the device mitigates the impacts of zero gravity, which can be brutal.\r\nAfter six mont… [+2352 chars]"
      },
      {
        "source": {
          "id": "the-next-web",
          "name": "The Next Web"
        },
        "author": "Thomas Macaulay",
        "title": "Space balloon for tourists set for landmark test flight",
        "description": "A “space balloon” for tourists is set for a test flight in Saudi Arabia this September. Spanish startup Halo Space built the balloon for zero-emission trips into the stratosphere. Each ticket is expected to cost around €150,000. On each flight, Halo plans to …",
        "url": "https://thenextweb.com/news/halo-space-balloon-test-flight-saudi-arabia",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F04%2FUntitled-design.jpg&signature=8914f883f8db0f016a3105ad629ce90e",
        "publishedAt": "2024-08-07T13:19:31Z",
        "content": "A space balloon for tourists is set for a test flight in Saudi Arabia this September.\r\nSpanish startup Halo Space built the balloon for zero-emission trips into the stratosphere. Each ticket is expec… [+1466 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "David Nield",
        "title": "You Can Actually Use a Chromebook Offline. Here's How",
        "description": "The always-online laptop doesn't really have to always be online.",
        "url": "https://www.wired.com/story/how-to-use-a-chromebook-offline/",
        "urlToImage": "https://media.wired.com/photos/66a01da206bcd89c6b0bae2c/191:100/w_1280,c_limit/Laptop-offline-no-internet-GettyImages-2047879087-Westend61-(cropped).jpg",
        "publishedAt": "2024-07-24T13:00:00Z",
        "content": "Chromebooks are often sold on their tight integration with the cloud: They're essentially windows to the web and not much else. That comes with a variety of benefits, like never having to worry about… [+2661 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Alistair Charlton",
        "title": "Mini Cooper SE Review: Price, Specs, Availability",
        "description": "The Mini Cooper SE is a seriously fun compact EV, and can even pretend to sound like the original Mini. Limitations linger, though, including dismal charging speeds.",
        "url": "https://www.wired.com/review/review-mini-cooper-se/",
        "urlToImage": "https://media.wired.com/photos/669977eb4865a24758d1a4f0/191:100/w_1280,c_limit/P90549727_highRes_mini-cooper-se-uk-ph.jpg",
        "publishedAt": "2024-07-21T13:00:00Z",
        "content": "Despite its familiar looks, the new Mini Cooper has just undergone its biggest update this century. The ionic headlights, white roof, and city-friendly dimensions remain, as they have throughout BMWs… [+2550 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hackaday"
        },
        "author": "Dan Maloney",
        "title": "A Look Inside the Space Shuttle’s First Printer",
        "description": "There was even a day not too long ago when printers appeared to be going the way of the dodo; remember the “paperless office” craze? But then, printer manufacturers invented printers so…",
        "url": "https://hackaday.com/2024/08/06/a-look-inside-the-space-shuttles-first-printer/",
        "urlToImage": "https://hackaday.com/wp-content/uploads/2024/08/thagard.jpg",
        "publishedAt": "2024-08-06T08:00:00Z",
        "content": "There was even a day not too long ago when printers appeared to be going the way of the dodo; remember the “paperless office” craze? But then, printer manufacturers invented printers so cheap they co… [+1691 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "China's Long March 6A Rocket Is Making a Mess In Low-Earth Orbit.",
        "description": "Longtime Slashdot reader schwit1 shares a report from Ars Technica: The upper stage from a Chinese rocket that launched a batch of Internet satellites Tuesday has broken apart in space, creating a debris field of at least 700 objects in one of the most heavil…",
        "url": "https://science.slashdot.org/story/24/08/10/0146227/chinas-long-march-6a-rocket-is-making-a-mess-in-low-earth-orbit",
        "urlToImage": "https://a.fsdn.com/sd/topics/space_64.png",
        "publishedAt": "2024-08-10T10:00:00Z",
        "content": "The upper stage from a Chinese rocket that launched a batch of Internet satellites Tuesday has broken apart in space, creating a debris field of at least 700 objects in one of the most heavily-traffi… [+1767 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "Boeing Starliner Astronauts Have Been In Space Six Weeks Longer Than Originally Planned",
        "description": "Longtime Slashdot reader Randseed writes: Boeing Starliner is apparently still stuck at the ISS, six weeks longer than planned due to engine troubles. The root cause seems to be overheating. NASA is still hopeful that they can bring the two astronauts back on…",
        "url": "https://science.slashdot.org/story/24/07/27/0039258/boeing-starliner-astronauts-have-been-in-space-six-weeks-longer-than-originally-planned",
        "urlToImage": "https://a.fsdn.com/sd/topics/space_64.png",
        "publishedAt": "2024-07-27T10:00:00Z",
        "content": "While it is always easy to throw evidence of mishaps around, I do not think that the commercial airline arm and the space arm cross over, except right at the top, which may indicate that there is a s… [+312 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Cheryl Eddy",
        "title": "Rick and Morty: The Anime Brings Its Own Time-Shifty Weirdness to the Franchise",
        "description": "Writer-director Takashi Sano's take on the Adult Swim hit drops the first of its 10 episodes this week.",
        "url": "https://gizmodo.com/rick-and-morty-the-anime-brings-its-own-time-shifty-weirdness-to-the-franchise-2000487251",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Rick_and_Morty_Anime_Review_Top_Art.jpg",
        "publishedAt": "2024-08-15T20:00:41Z",
        "content": "The world already has seven seasons of Adult Swim’s Rick and Morty, with an eighth and more on the way. And even with the show’s mega popularity, is there really the need for a spin-off? Rick and Mor… [+3936 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Germain Lussier",
        "title": "Shaun of the Dead’s Winchester Tavern Was Open at Comic-Con 2024",
        "description": "Shaun of the Dead celebrates its 20th anniversary this year and Focus brought the film's signature pub, the Winchester, to Comic-Con.",
        "url": "https://gizmodo.com/shaun-of-the-dead-winchester-comic-con-edgar-wright-zombies-2000479283",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/Shaun-of-the-Dead-SDCC-24.jpg",
        "publishedAt": "2024-07-26T15:30:42Z",
        "content": "Sometimes, in a zombie apocalypse, you need a plan. A plan like “Take car. Go to Mum’s. Kill Phil. Grab Liz, go to the Winchester, have a nice cold pint, and wait for all of this to blow over.”\r\n2024… [+1560 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Madison Hoff",
        "title": "Here's how much apartment space $1,500 a month gets you in some of America's biggest cities",
        "description": "An analysis of what $1,500 means for apartment space showed that 21 large cities in the South and Midwest had averages of over 1,000 square feet.",
        "url": "https://www.businessinsider.com/apartment-space-for-1500-dollars-large-us-cities-rent-budget-2024-7",
        "urlToImage": "https://i.insider.com/66a266422d66759f66fe3d49?width=1200&format=jpeg",
        "publishedAt": "2024-07-29T09:51:02Z",
        "content": "Alex Potemkin/Getty Images\r\n\u003Cul\u003E\u003Cli\u003ERentCafe analyzed the average apartment size someone can get for $1,500 monthly in US cities.\u003C/li\u003E\u003Cli\u003ETwenty-one large cities analyzed had an average of over 1,000… [+3724 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Eric Ravenscraft",
        "title": "ViewSonic 27-Inch OLED Gaming Monitor Review: Better Than Budget",
        "description": "If you’re used to seeing ViewSonic as the cheap monitor brand, this one might change your mind.",
        "url": "https://www.wired.com/review/viewsonic-27-inch-oled-gaming-monitor/",
        "urlToImage": "https://media.wired.com/photos/669ec2882df39bb71914b15d/191:100/w_1280,c_limit/ViewSonic-27-Inch-OLED-Gaming-Monitor-Reviewer-Collage-072024-SOURCE-Eric-Ravenscraft.jpg",
        "publishedAt": "2024-07-23T13:00:00Z",
        "content": "When I think of high-end gaming monitors, ViewSonic isnt exactly the first brand that comes to mind, but the XG272-2K-OLED might get me to change my mind. The OLED panel is surprisingly crisp and vib… [+3201 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Morgan McFall-Johnsen",
        "title": "NASA says it can ask SpaceX to bring Boeing astronauts home if needed, as they reach 51 days on the space station",
        "description": "Two NASA astronauts have been stuck on the space station for 51 days while Boeing troubleshoots its Starliner spaceship. SpaceX is the backup option.",
        "url": "https://www.businessinsider.com/nasa-could-ask-spacex-bring-home-stuck-boeing-astronauts-2024-7",
        "urlToImage": "https://i.insider.com/66a443001a227600e6322aa3?width=1200&format=jpeg",
        "publishedAt": "2024-07-27T01:19:44Z",
        "content": "Suni Williams and Butch Wilmore made a brief appearance on a call with press from the space station.NASA TV\r\n\u003Cul\u003E\u003Cli\u003EA NASA official said SpaceX's Crew Dragon is the \"backup option\" to bring home two… [+4313 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Ellyn Lapointe",
        "title": "We put Elon Musk's dream to colonize Mars up against Jeff Bezos' vision of living in space — and one is more realistic",
        "description": "Elon Musk and Jeff Bezos dream of colonizing space, but have very different ideas of how to do it. Experts weigh in on which plan is more realistic.",
        "url": "https://www.businessinsider.com/elon-musk-mars-colonies-vs-jeff-bezos-space-station-realistic-2024-7",
        "urlToImage": "https://i.insider.com/66a3cba01a227600e631fae6?width=1200&format=jpeg",
        "publishedAt": "2024-07-29T09:03:02Z",
        "content": "Baac3nes/Getty, Michael M. Santiago/Getty, NurPhoto/Getty, Blue Origin, Tyler Le/BI\r\nThe commercial space industry has boomed in recent years, with companies like SpaceX and Blue Origin leading the p… [+7860 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Emily Stewart",
        "title": "The one place IRL still matters: luxury shopping",
        "description": "E-commerce has gobbled up everything in retail, but in the luxury space, consumers still prefer shopping in real life and not online.",
        "url": "https://www.businessinsider.com/luxury-retail-ecommerce-online-sales-stores-wealth-the-realreal-2024-7",
        "urlToImage": "https://i.insider.com/6699657449138fa6f6e39752?width=1200&format=jpeg",
        "publishedAt": "2024-07-23T09:41:02Z",
        "content": "E-commerce has eaten everything ... except ultra-luxe.Getty Images; Alyssa Powell/BI\r\nE-commerce is great for a lot of things — snagging sales, stocking up on staples, buying stupid stuff we really d… [+10080 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Morgan McFall-Johnsen",
        "title": "NASA admits it's been working with SpaceX on a backup plan to retrieve Boeing's 2 stuck astronauts. It doesn't sound ideal.",
        "description": "NASA astronauts Butch Wilmore and Suni Williams rode a Boeing spaceship to the space station. They might fly SpaceX on the return trip — in February.",
        "url": "https://www.businessinsider.com/nasa-admits-spacex-working-on-backup-plan-stuck-boeing-astronauts-2024-8",
        "urlToImage": "https://i.insider.com/66b3b78a955b01c3294cab41?width=1200&format=jpeg",
        "publishedAt": "2024-08-07T21:30:15Z",
        "content": "A SpaceX Crew Dragon vehicle approaches the International Space Station.NASA\r\n\u003Cul\u003E\u003Cli\u003ETwo astronauts are stuck on the International Space Station due to issues with Boeing's spaceship.\u003C/li\u003E\u003Cli\u003ENASA o… [+5500 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Graeme Hanna",
        "title": "AI scrapers running out of space as restrictions close the net",
        "description": "AI scrapers are increasingly facing hostile online environments as data sources dry up. Crawling for data, also known as scraping,… Continue reading AI scrapers running out of space as restrictions close the net\nThe post AI scrapers running out of space as re…",
        "url": "https://readwrite.com/ai-scrapers-running-out-of-space-as-restrictions-close-the-net/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/07/crawlers.webp",
        "publishedAt": "2024-07-23T07:57:32Z",
        "content": "AI scrapers are increasingly facing hostile online environments as data sources dry up.\r\nCrawling for data, also known as scraping, previously meant vast troves of text, images, and videos could be p… [+1912 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "International Space Station Crew Finds A Long-Lost Tomato",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_24c6dce4-dd23-4e25-b9cc-6366846ba0a2",
        "urlToImage": null,
        "publishedAt": "2024-07-21T16:00:00Z",
        "content": "If you click 'Accept all', we and our partners, including 236 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Digital Trends"
        },
        "author": "Trevor Mogg",
        "title": "Watch Sierra Space blow up its inflatable space station — again",
        "description": "Sierra Space has been working with NASA to test the durability of an inflatable space station — by blowing it up.",
        "url": "https://www.digitaltrends.com/space/watch-sierra-space-wreck-its-inflatable-space-station/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/07/sierra-space-burst-pressure-test.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2024-07-26T01:20:14Z",
        "content": "Witnessing an explosion involving a carefully constructed piece of space kit doesn’t look like a good thing, but engineers at Sierra Space was entirely happy to see its LIFE (Large Integrated Flexibl… [+2301 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Discovery of sulphur on Mars could boost the space economy",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_2b746c13-e5d2-4804-aed8-affa6518f906",
        "urlToImage": null,
        "publishedAt": "2024-07-29T13:15:09Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Design-milk.com"
        },
        "author": "Vy Yang",
        "title": "Ideas in Science + Space Translate Into Hypnotic Rugs by Atelier Tapis Rouge",
        "description": "Inspired by concepts of light travel and the properties of light, Milan-based Atelier Tapis Rouge created the Elettrico Collection of 14 mesmerizing rugs.",
        "url": "https://design-milk.com/ideas-in-science-space-translate-into-hypnotic-rugs-by-atelier-tapis-rouge/",
        "urlToImage": "https://design-milk.com/images/2024/07/atelier-tapis-rouge-elettrico-rug-collection-Gamma-Sud_2.jpg",
        "publishedAt": "2024-08-16T15:00:43Z",
        "content": "Inspired by the cosmos and the study of light, Natalia Enze, Head of Design of the Milan-based rug brand Atelier Tapis Rouge, created the mesmerizing Elettrico Collection. The series, featuring 14 un… [+1831 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "NASA Might Delay Upcoming Crew 9 Mission to Return Stranded Starliner Astronauts to Earth",
        "description": "SpaceX's Dragon spacecraft could launch with two astronauts instead of four to make room for the Starliner crew.",
        "url": "https://gizmodo.com/nasa-might-delay-upcoming-cew-9-mission-to-return-stranded-starliner-crew-2000483330",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Boeing-Starliner-1.jpeg",
        "publishedAt": "2024-08-05T21:20:26Z",
        "content": "It’s been nearly two months since Boeing’s Starliner spacecraft arrived at the International Space Station (ISS) for its first crewed test flight. Despite several technical mishaps that have delayed … [+3509 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Karissa Bell",
        "title": "X is reportedly closing its San Francisco office",
        "description": "X will soon close its longtime San Francisco office and move employees to offices elsewhere in the Bay Area, according to an email from CEO Linda Yaccarino reported by\r\n The New York Times. Yaccarino’s note to employees comes several weeks after Elon Musk thr…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b0deae2c-68ae-4aec-9f49-c0a4d1d96ef4",
        "urlToImage": null,
        "publishedAt": "2024-08-05T20:36:50Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Design-milk.com"
        },
        "author": "Joseph Sgambati III",
        "title": "The New Work Project Harnesses the Beauty of Beige for Co-Working",
        "description": "The New Design Project expands The New Work Project welcoming the freshly designed ELEVENTH co-working hub and The Annex events space into the fold.",
        "url": "https://design-milk.com/the-new-work-project-harnesses-the-beauty-of-beige-for-co-working/",
        "urlToImage": "https://design-milk.com/images/2024/07/The-New-Work-Project-ELEVENTH-00.jpg",
        "publishedAt": "2024-08-01T17:00:24Z",
        "content": "While this may be an unpopular and perhaps brazen assertion, there is merit to working in-office. Communal work areas enhance social interaction and productivity, especially when theres a shared sens… [+4547 chars]"
      },
      {
        "source": {
          "id": "time",
          "name": "Time"
        },
        "author": "Jeffrey Kluger",
        "title": "How Two Stranded Astronauts Are Camping Out in Space",
        "description": "Butch Wilmore and Suni Williams are reportedly making do as their eight-day mission stretches to a months-long one.",
        "url": "https://time.com/7010425/stranded-astronauts-iss-butch-wilmore-suni-williams/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/08/KSC-20240504-PH-GEB01_0262orig.jpg?quality=85&w=1200&h=628&crop=1",
        "publishedAt": "2024-08-13T15:01:04Z",
        "content": "The last time I talked to Butch Wilmore and Suni Williamsthe two astronauts now stranded aboard the International Space Station (ISS)was on May 1, 2024. At the time, they were in pre-flight medical q… [+5946 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Aaronsw.com"
        },
        "author": null,
        "title": "Office Space (2006)",
        "description": "Comments",
        "url": "http://www.aaronsw.com/weblog/officespace.html",
        "urlToImage": null,
        "publishedAt": "2024-07-28T13:06:38Z",
        "content": "People are always asking me how I manage to get so much done. For a while I tried to impress them with my pearls of wisdom but soon I just sort of gave up. I don’t really feel like I do anything spec… [+38186 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "Boeing’s Cursed ISS Mission May Finally Make It Back to Earth",
        "description": "The vessel's crew, whose stay aboard the ISS has stretched over a month longer than planned, conducted tests on the commercial spacecraft's thrusters—and the initial data is encouraging.",
        "url": "https://gizmodo.com/boeings-cursed-iss-mission-may-finally-make-it-back-to-earth-2000481203",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/NASA-Boeing-Starliner-July-3-202-e1722365282292.jpg",
        "publishedAt": "2024-07-30T19:15:20Z",
        "content": "The saga of the Starliner’s first crewed mission may soon be coming to an end. On Saturday July 20, engineering teams with NASA and Boeing completed a hot fire test of the spacecraft’s thrusters. The… [+2398 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Lucas Ropek",
        "title": "Someone Made a Free ‘Rawdog Flight Simulator’ Video Game",
        "description": "In an apparent effort to make an already stupid trend even stupider, someone has invented a way for you to \"rawdog\" virtually.",
        "url": "https://gizmodo.com/someone-made-a-free-rawdog-flight-simulator-video-game-2000487189",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/Guy-on-plane.jpg",
        "publishedAt": "2024-08-15T12:30:05Z",
        "content": "The viral TikTok travel trend known as “rawdogging” was originally invented to avoid digital stimulation. In said trend, a person (usually a guy) will just stare off into space for the entirety of th… [+2027 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "This Is the Last Image Taken by NASA’s Historic Asteroid-Hunting Spacecraft",
        "description": "The satellite played an integral role in laying the groundwork for NASA's planetary defense mission.",
        "url": "https://gizmodo.com/this-is-the-last-image-taken-by-nasas-historic-asteroid-hunting-spacecraft-2000485258",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/neowise-nasa-final-image-e1723234456229.jpg",
        "publishedAt": "2024-08-09T20:25:17Z",
        "content": "After over 10 years of service tracking celestial objects near and far, NASAs NEOWISE satellite has sent its final image home before going gently into that good night.\r\nThe star-studded infrared phot… [+2156 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Noah Caldwell",
        "title": "With a new orchestral album, Louis Cole pulls magic out of the air",
        "description": "Louis Cole is a prolific musician known primarily as a drummer, but whose music over the past decade has fallen in the nexus of jazz, funk and rock. Now he's in a whole new space.",
        "url": "https://www.npr.org/2024/08/15/nx-s1-5072600/louis-cole-new-album-choir-orchestra",
        "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2160x1215+0+36/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0f%2F0f%2Ff75b89284277b6ee07961ccc15f5%2Fberlin-dsc3442.jpg",
        "publishedAt": "2024-08-15T09:00:00Z",
        "content": "On a recent Friday evening, a hooded figure in dark sunglasses climbed the pulpit at the First Congregational Church of Los Angeles. Just below, a few dozen singers gathered at the front of the packe… [+4254 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": null,
        "title": "Supplies delivered to ISS as astronauts remain stranded",
        "description": "Progress 89 cargo spacecraft delivers supplies to astronauts on ISS",
        "url": "https://www.bbc.co.uk/programmes/p0jk0p2g",
        "urlToImage": "https://ichef.bbci.co.uk/images/ic/1200x675/p0jk0vhg.jpg",
        "publishedAt": "2024-08-17T09:15:47Z",
        "content": "A cargo spacecraft has arrived at the International Space Station (ISS) to deliver food, fuel and other supplies for those onboard.\r\nThe ISS is currently home to the Expedition 71 crew, and two Nasa … [+368 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Andrej.com"
        },
        "author": null,
        "title": "Space-Filling Curves, Constructively",
        "description": "Comments",
        "url": "https://math.andrej.com/2024/01/30/space-filling-curves-constructively/",
        "urlToImage": null,
        "publishedAt": "2024-07-24T17:20:44Z",
        "content": "In 1890 Giuseppe Peano discovered a square-filling curve, and a year later David Hilbert published his variation. In those days people did not waste readers' attention with dribble Peano explained it… [+5809 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Elliott Harrell",
        "title": "I've been to 17 countries and swear by checking a bag when I travel. It's a little luxury that's worth the price every single time.",
        "description": "Not having to worry about overhead bin space on the aircraft and being able to pack lots of outfits are a few reasons why I always check a bag.",
        "url": "https://www.businessinsider.com/why-i-always-check-a-bag-seasoned-traveler-2024-8",
        "urlToImage": "https://i.insider.com/66b66904955b01c3294d6604?width=1200&format=jpeg",
        "publishedAt": "2024-08-11T11:49:01Z",
        "content": "I like to make the airport experience more enjoyable by checking in a bag every time I fly.EKATERINA POKROVSKY/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EAfter visiting 17 countries, I've learned checking a bag makes my … [+3507 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Borretti.me"
        },
        "author": "Fernando Borretti",
        "title": "The Design Space of Wikis",
        "description": "An exploration of the design space of wikis.",
        "url": "https://borretti.me/article/the-design-space-of-wikis",
        "urlToImage": "https://borretti.me/assets/card/the-design-space-of-wikis.jpg",
        "publishedAt": "2024-08-12T12:51:42Z",
        "content": "This post describes the design space of wikis. Sections are axes in the design\r\nspace: they correspond to design questions. Subsections are intervals along that\r\naxis: they correspond to answers to t… [+22569 chars]"
      },
      {
        "source": {
          "id": "the-next-web",
          "name": "The Next Web"
        },
        "author": "Thomas Macaulay",
        "title": "UK backs ‘space mirror’ to melt ice on the Moon into drinking water",
        "description": "The UK hopes to produce water on the Moon with a space mirror that reflects solar rays onto lunar ice. The device is the brainchild of the British Interplanetary Society (BIS), the world’s oldest space advocacy organisation. Boffins at the BIS named the devic…",
        "url": "https://thenextweb.com/news/uk-funds-space-mirror-for-moon-water",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F07%2FUntitled-design-15.jpg&signature=8c280c954ce529034e6c405cf0a46409",
        "publishedAt": "2024-07-24T11:56:22Z",
        "content": "The UK hopes to produce water on the Moon with a space mirror that reflects solar rays onto lunar ice.\r\nThe device is the brainchild of the British Interplanetary Society (BIS), the worlds oldest spa… [+1638 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Watch: Scottish students sent blank emails instead of exam results",
        "description": "Some pupils across Scotland didn't get their results following a \"technical issue\" says exams body SQA.",
        "url": "https://www.bbc.com/news/videos/c3rdd02ge45o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2955/live/fe252880-5411-11ef-aebc-6de4d31bf5cd.jpg",
        "publishedAt": "2024-08-06T16:42:30Z",
        "content": "The BBC's Katie Hunter was with a group of students in Glasgow to catch the moment they receive their exam results. \r\nPupils opted to get their grades by text message or email, but those opening an e… [+417 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Penny-arcade.com"
        },
        "author": null,
        "title": "Space Ghost",
        "description": "This is something Gabe and our mutual friend Kris Straub share - a suspicion that ghosts may be real. More than a suspicion, perhaps. They live their lives in accordance with the undeniable, universally understood fact of spectral incursion. I haven't gone in…",
        "url": "https://www.penny-arcade.com/news/post/2024/08/05/space-ghost",
        "urlToImage": "https://assets.penny-arcade.com/img/logo_opengraph.jpg",
        "publishedAt": "2024-08-05T16:10:00Z",
        "content": "This is something Gabe and our mutual friend Kris Straub share - a suspicion that ghosts may be real. More than a suspicion, perhaps. They live their lives in accordance with the undeniable, universa… [+1858 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Penny-arcade.com"
        },
        "author": null,
        "title": "Space Ghost",
        "description": "Videogaming-related online strip by Mike Krahulik and Jerry Holkins. Includes news and commentary.",
        "url": "https://www.penny-arcade.com/comic/2024/08/05/space-ghost",
        "urlToImage": "https://assets.penny-arcade.com/comics/20240805-yOOKVgi0.jpg",
        "publishedAt": "2024-08-05T07:01:00Z",
        "content": "Newsletter Sign Up\r\nStay up to date on all the comings and goings at Penny Arcade by joining the mailing list. Getting electronic mail is fun! It's like the future, but right now.\r\nBy submitting your… [+45 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Sarah Fielding",
        "title": "Apple's M3 iMac is down to a record-low price",
        "description": "MacBooks are great, but if you're like me, then having to hunch over one brings back and neck pain. An iMac is a perfect though costly solution, but right now, it's a bit more affordable (emphasis on a bit). Apple's 2023 iMac with an M3 chip is down from $1,2…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_52832731-cb6b-47b0-be49-a5d366204c52",
        "urlToImage": null,
        "publishedAt": "2024-07-25T13:06:21Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Emergency move to ease prison overcrowding activated",
        "description": "The government activates its emergency plan as more rioters are being jailed over recent unrest.",
        "url": "https://www.bbc.com/news/articles/cyvpj7vm95jo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png",
        "publishedAt": "2024-08-19T05:30:23Z",
        "content": "The government has activated emergency measures to ease prison overcrowding as more rioters are being sentenced.\r\nAcross the north of England defendants waiting for a court appearance will be kept in… [+564 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hackaday"
        },
        "author": "Dan Maloney",
        "title": "Programming Tiny Blinkenlight Projects with Light",
        "description": "[mitxela] has a tiny problem, literally: some of his projects are so small as to defy easy programming. While most of us would probably solve the problem of having no physical space on a board to m…",
        "url": "https://hackaday.com/2024/08/01/programming-tiny-blinkenlight-projects-with-light/",
        "urlToImage": "https://hackaday.com/wp-content/uploads/2024/07/light_programming.png",
        "publishedAt": "2024-08-01T11:00:08Z",
        "content": "[mitxela] has a tiny problem, literally: some of his projects are so small as to defy easy programming. While most of us would probably solve the problem of having no physical space on a board to mou… [+1556 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Daniel Thorp-Lancaster",
        "title": "Asus Chromebook Plus CX34 Review: A Pretty Chromebook",
        "description": "Asus puts all the gray, boring Chromebooks out there to shame with the sleek and all-white CX34.",
        "url": "https://www.wired.com/review/asus-chromebook-plus-cx34/",
        "urlToImage": "https://media.wired.com/photos/66a40a609a4ea6a5bb2b0894/191:100/w_1280,c_limit/Asus-Chromebook-Plus-CX34-Reviewer-Collage-072024-SOURCE-Daniel-Thorp-Lancaster.jpg",
        "publishedAt": "2024-07-27T11:30:00Z",
        "content": "One major omission from this model is a backlit keyboard, which is disappointing if you want to use it in the dark. Older CX34 models came with a backlit keyboard, so, curiously, Asus opted not to sh… [+1687 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "James Whitbrook",
        "title": "Star Wars: Skeleton Crew‘s First Trailer Unleashes a Galactic Adventure",
        "description": "The next live-action Star Wars series, starring Jude Law, hits Disney+ December 3.",
        "url": "https://gizmodo.com/star-wars-skeleton-crew-trailer-release-date-disney-plus-2000485277",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/star-wars-skeleton-crew-first-look-jude-law-1.jpg",
        "publishedAt": "2024-08-10T03:25:29Z",
        "content": "After a brief tease last week, Lucasfilm and Disney have lifted the lid on the next live-action Star Wars TV series, Skeleton Crew, and its ragtag crew of adventurous kids.\r\nSet during the era of the… [+1018 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Passant Rabie",
        "title": "SpaceX’s Direct-to-Cell Starlink Satellites Are 5 Times Brighter Than Before, Worrying Astronomers",
        "description": "The company plans to launch thousands of direct-to-cell Starlink satellites, which may interfere with our views of the night sky.",
        "url": "https://gizmodo.com/spacexs-direct-to-cell-starlink-satellites-are-5-times-brighter-than-before-worrying-astronomers-2000483749",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/SpaceX-Starlink_Bright-e1723040091432.gif",
        "publishedAt": "2024-08-07T17:25:13Z",
        "content": "SpaceX has been launching batches of Starlink satellites designed to operate like cellphone towers in space, beaming connectivity directly from low Earth orbit. The new satellites are adding to the c… [+5500 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Matthew Gault",
        "title": "Trump Rambled About ‘Nuclear Warming’ in a Disastrous Two Hour Talk with Elon Musk",
        "description": "The former president lisped his way through easy questions from one of the richest men on the planet.",
        "url": "https://gizmodo.com/trump-rambled-about-nuclear-warming-in-a-disastrous-two-hour-talk-with-elon-musk-2000486288",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/TrumpTwitterSpace.jpg",
        "publishedAt": "2024-08-13T13:40:26Z",
        "content": "A defining feature of Trump’s appearances in 2024 is weakness. Now that the former president isnt sharing a stage with 81-year-old Joe Biden, he looks and sounds every bit his 78 years.\r\nDuring his l… [+4351 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "Help Track Down Baby Black Holes Using This Citizen Science App",
        "description": "Citizen scientists are invited to use a specialized app to sift through photos captured by powerful telescopes, searching for signs of neutron stars merging.",
        "url": "https://gizmodo.com/help-track-down-baby-black-holes-using-this-citizen-science-app-2000487054",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/08/black-hole-detection-app.jpg",
        "publishedAt": "2024-08-14T17:55:53Z",
        "content": "Thanks to a newly expanded app, more amateur astronomers can now join the hunt for black holes.\r\nBlack Hole Finder is the brainchild of the Dutch Black Hole Consortium, a group of more than 30 scient… [+3138 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Adam Kovac",
        "title": "Signs of Life Could Be Found Close to the Surface of Two Nearby Moons",
        "description": "Enceladus and Europa are among the most promising places where alien life could exist in our solar system.",
        "url": "https://gizmodo.com/signs-of-life-could-be-found-close-to-the-surface-of-two-nearby-moons-2000476837",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/07/pia11688.webp",
        "publishedAt": "2024-07-20T13:00:30Z",
        "content": "Evidence continues to mount that life could theoretically survive in two moons currently orbiting planets in our solar system. Scientists have made a number of discoveries suggesting that Jupiters ic… [+2738 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Here Are The Specific Things Astronauts Avoid Eating And Drinking In Space, And Why",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_74cd4368-52f2-4cde-b03b-3665691ce320",
        "urlToImage": null,
        "publishedAt": "2024-07-24T18:16:02Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      }
  ]
};

function displayNews(articles) {
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const imageUrl = article.urlToImage ? article.urlToImage : DEFAULT_IMAGE_URL;

        const articleElement = document.createElement('div');
        articleElement.classList.add('magazine-column');

        articleElement.innerHTML = `
            <article class="article">
                <img src="${imageUrl}" alt="${article.title}">
                <h2 class="article-title article-title--large">
                    <a href="${article.url}" target="_blank" class="article-link">${article.title}</a>
                </h2>
                <div class="article-excerpt">
                    <p>${article.description}</p>
                </div>
            </article>
        `;

        newsContainer.appendChild(articleElement);
    });
}

// Display news using the static JSON data
displayNews(jsonData.articles);
