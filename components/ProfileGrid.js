import React from 'react';

const ProfileCard = ({ name, title, handle, description, imageUrl }) => (
  <div className="w-full h-full px-6 py-6 bg-neutral-950 rounded-1xl border border-neutral-900 flex flex-col gap-4">
    <div className="flex items-center">
      <div className="flex items-center pr-4">
        <img 
          src={imageUrl || "/api/placeholder/123/123"} 
          alt={name} 
          className="w-24 h-24 rounded-full"
        />
      </div>
      <div className="flex-1 py-4 flex flex-col justify-center gap-2">
        <div className="text-white text-2xl font-bold font-['Oswald'] uppercase leading-6">
          {name}
        </div>
        <div className="text-gray-100 text-sm font-normal font-['Inter'] leading-4">
          {title}
        </div>
        <div className="text-gray-400 text-sm font-normal font-['Inter'] leading-4">
          {handle}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex-1 text-white text-[15px] font-normal font-['Inter'] leading-6">
        {description}
      </div>
    </div>
  </div>
);

const ProfileGrid = () => {
  const profiles = [
    {
      name: "Donald Trump",
      title: "U.S. President",
      handle: "@realDonaldTrump",
      description: "Donald Trump, born 1946, became the 45th U.S. President in 2017 and was re-elected in 2024. He initiated the Department of Government Efficiency (DOGE), led by Elon Musk and Vivek Ramaswamy, to reduce bureaucracy, cut spending, and streamline federal agencies. Their work concludes by July 4, 2026.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Donald%20Trump.png"
    },
    {
      name: "Elon Musk",
      title: "Entepreneur",
      handle: "@elonmusk",
      description: "Elon Musk, born 1971, CEO of Tesla, SpaceX, and X Corp. He's a key figure in technology and space industries. In the Department of Government Efficiency (DOGE), Musk co-leads with Vivek Ramaswamy, aiming to dismantle bureaucracy, cut waste, and restructure federal agencies by July 4, 2026.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Musk.png"
    },
    {
      name: "Vivek Ramaswamy",
      title: "CEO of Strive Asset Management",
      handle: "@VivekGRamaswamy",
      description: "Vivek Ramaswamy, born 1985, founded Roivant Sciences and ran for the 2024 Republican presidential nomination. After endorsing Trump, he was appointed to co-lead the Department of Government Efficiency (DOGE) with Elon Musk. Their mission is to reduce federal bureaucracy and spending, concluding by July 4, 2026.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Vivek%20Ramaswamy.png"
    },
    {
      name: "Javier Milei",
      title: "President of Argentina",
      handle: "@JMilei",
      description: "Javier Milei, born 1970, is President of Argentina and an anarcho-capitalist economist. His aggressive budget cuts and government restructuring inspired the U.S. Department of Government Efficiency (DOGE), where he advised Elon Musk and Vivek Ramaswamy on reducing bureaucracy and government waste.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Javier%20Milei.png"
    },
    {
      name: "Ron Paul",
      title: "Dr.",
      handle: "@RonPaul",
      description: "Ron Paul, born 1935, is a former Congressman known for his libertarian views. He ran for president in 2008 and 2012. Although not directly involved in the Department of Government Efficiency (DOGE), his philosophy on limited government and fiscal responsibility significantly influences its mission and approach.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Ron%20Paul.png"
    },
    {
      name: "Howard Lutnick",
      title: "CEO of Cantor Fitzgerald",
      handle: "@howardlutnick",
      description: "Howard Lutnick, born 1961, is CEO of Cantor Fitzgerald and was named U.S. Commerce Secretary. He co-chaired Trump's 2024 transition team. Although not directly involved with DOGE, his role involves working with DOGE leaders Elon Musk and Vivek Ramaswamy to balance the budget and streamline government operations.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Howard%20Lutnick.png"
    },
    {
      name: "David Sacks",
      title: "General Partner of Craft Ventures",
      handle: "@DavidSacks",
      description: "David Sacks, born 1972, is an entrepreneur, former PayPal COO, and Craft Ventures co-founder. He's been named White House AI and crypto czar in Trump's administration. Sacks supports DOGE's mission to reduce government waste, aligning with his advocacy for less regulation, though not directly involved in DOGE's operations.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/David%20Sacks.png"
    },
    {
      name: "Chamath Palihapitiya",
      title: "CEO & Venture Capitalist",
      handle: "@chamath",
      description: "Chamath Palihapitiya, born 1976, is a venture capitalist and former senior executive at Facebook. He founded Social Capital and hosts the All-In podcast. He advocates for using DOGE to cut regulations, suggesting a flat tax could lead to an \"economic renaissance\" under Trump's administration.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/chamath%20palihapitiya.png"
    },
    {
      name: "Bill Ackman",
      title: "CEO",
      handle: "@BillAckman",
      description: "Bill Ackman, born 1966, is a billionaire hedge fund manager who founded Pershing Square Capital. He's expressed interest in joining Elon Musk's Department of Government Efficiency (DOGE) under Trump to cut federal spending and improve efficiency. Ackman sees this as an opportunity to help streamline government operations.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Bill%20Ackman.png"
    },
    {
      name: "Marc Andreesen",
      title: "General Partner",
      handle: "@pmarca",
      description: "Marc Andreessen, born 1971, co-founded Netscape and Andreessen Horowitz. He's a key tech investor. In the Department of Government Efficiency (DOGE), Andreessen assists in recruiting high-caliber candidates to reform federal agencies, working under Elon Musk and Vivek Ramaswamy, without holding an official position.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Marc%20Andreeson.png"
    },
    {
      name: "Joe Rogan",
      title: "",
      handle: "@joerogan",
      description: "Joe Rogan, born August 11, 1967, is an American podcaster, UFC commentator, comedian, and actor, known for \"The Joe Rogan Experience.\" He's proposed Elon Musk's involvement in a \"Department of Government Efficiency\" (DOGE) to streamline government spending, advocating for Musk's success in private sector efficiency over government projects.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Joe%20Rogan.png"
    },
    {
      name: "Travis Kalanick",
      title: "co-founder uber",
      handle: "@travisk",
      description: "Travis Kalanick, born 1976, co-founded Uber and is now CEO of City Storage Systems. Known for his disruptive approach, he's involved in the Department of Government Efficiency (DOGE), where he helps strategize ways to increase operational efficiency and reduce federal spending under Musk and Ramaswamy.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/doge-travis.jpg"
    },
    {
      name: "Brian Armstrong",
      title: "CEO of Coinbase",
      handle: "@brian_armstrong",
      description: "Brian Armstrong, born 1983, co-founded and leads Coinbase, a major cryptocurrency platform. He supports the Department of Government Efficiency (DOGE), viewing it as an opportunity to promote economic freedom by suggesting fiscal reforms like a sovereign wealth fund and spending caps, though not directly involved in its operations.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Brian%20Armstrong.png"
    },
    {
      name: "Jamie dimon",
      title: "CEO JPmorgan",
      handle: "",
      description: "Jamie Dimon, born 1956, is CEO of JPMorgan Chase. He endorsed the idea for the Department of Government Efficiency (DOGE), proposed by Elon Musk, calling it a \"very good idea.\" Dimon hasn't been appointed to DOGE but supports its goals for government efficiency and competence.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Jamie%20Dimon.png"
    },
    {
      name: "Rand Paul",
      title: "",
      handle: "@RandPaul",
      description: "Rand Paul, born 1963, is a U.S. Senator from Kentucky, following in his father Ron Paul's libertarian footsteps. He assists the Department of Government Efficiency (DOGE) by providing legislative support and oversight, aiming for a leaner government, in line with DOGE's mission to conclude by July 4, 2026.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Rand%20Paul.png"
    },
    {
      name: "Rick Scott",
      title: "",
      handle: "@ScottforFlorida",
      description: "Rick Scott, a Republican from Florida, served as the state's governor (2011-2019) before becoming a U.S. Senator in 2019. Known for his business background, he supports the proposed Department of Government Efficiency (DOGE), advocating for streamlined government operations and reduced spending, drawing from his experience in reducing state regulations.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Rick%20Scott.png"
    },
    {
      name: "Ro Khanna",
      title: "House, Republican",
      handle: "@RoKhanna",
      description: "Ro Khanna, a U.S. Representative for California's 17th district since 2017, is known for his progressive stance. He has shown interest in collaborating with Elon Musk and Vivek Ramaswamy's Department of Government Efficiency (DOGE) to reduce government waste, aiming to enhance the efficiency of federal spending.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Ro%20Khanna.png"
    },
    {
      name: "James Lankford",
      title: "U.S senator",
      handle: "@senatorLankford",
      description: "James Lankford, born 1968 in Dallas, is a U.S. Senator from Oklahoma since 2015, previously serving in the House. A Republican, he's known for his fiscal conservatism. He's linked to the Department of Government Efficiency (DOGE), advocating for government waste reduction and fiscal responsibility.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/James%20Lankford.png"
    },
    {
      name: "Ted cruz",
      title: "senator",
      handle: "@tedcruz",
      description: "Ted Cruz, born in 1970 in Calgary, Canada, is a U.S. Senator from Texas since 2013. A conservative Republican, he's known for his 2016 presidential run. Cruz has advocated for government efficiency, notably through proposed legislation to reduce federal bureaucracy, aligning with the Department of Government Efficiency's mission.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Ted%20Cruz.png"
    },
    {
      name: "Thomas Massie",
      title: "Representative",
      handle: "@RepThomaMassie",
      description: "Thomas Massie, a Republican from Kentucky, serves as U.S. Representative for the 4th district since 2012. An MIT-educated engineer, farmer, and inventor, he's known for libertarian leanings, advocating for limited government. He's involved with the proposed Department of Government Efficiency (DOGE) to slash bureaucracy under Trump's administration.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Thomas%20Massie.png"
    },
    {
      name: "John Cornyn",
      title: "Senator",
      handle: "@JohnCornyn",
      description: "John Cornyn, a Republican Senator from Texas since 2002, previously served as the state's Attorney General and on the Texas Supreme Court. He joined the Senate DOGE Caucus, aiming to enhance government efficiency with the Trump administration's Department of Government Efficiency (DOGE) to cut waste and reduce national debt.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/John%20Cornyn.png"
    },
    {
      name: "Aaron Bean",
      title: "Senator",
      handle: "@RepAaronBean",
      description: "Aaron Bean, born January 25, 1967, is a U.S. Representative for Florida's 4th district since 2023. A Republican, he previously served in Florida's Senate and House. He co-founded the Delivering Outstanding Government Efficiency (DOGE) Caucus to support efforts to reduce government waste and improve efficiency.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Aaron%20Bean.png"
    },
    {
      name: "Joni ernst",
      title: "Senator",
      handle: "@joniernst",
      description: "Joni Ernst, a U.S. Senator from Iowa, is the first woman to represent the state in Congress and a former combat veteran. As the chair of the Senate's Department of Government Efficiency (DOGE) Caucus, she works with Elon Musk and Vivek Ramaswamy to cut government waste and enhance efficiency.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Joni%20Ernst.png"
    },
    {
      name: "Jared Moskowitz",
      title: "demacrat",
      handle: "@JEMoskowitz",
      description: "Jared Moskowitz, a Florida Democrat, serves as U.S. Representative for Florida's 23rd district since 2023. He has a background in state politics and emergency management. Moskowitz joined the Department of Government Efficiency (DOGE) caucus, advocating for streamlining government processes and reducing ineffective spending.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Jared%20Moskowitz.png"
    },
    {
      name: "Blake Moore",
      title: "",
      handle: "@RepBlakeMoore",
      description: "Blake Moore, born in Ogden, Utah, is a U.S. Representative for Utah's 1st district. He serves as co-chair of the Delivering Outstanding Government Efficiency (DOGE) Caucus, working with Elon Musk and Vivek Ramaswamy to cut federal spending and enhance government efficiency under President-elect Donald Trump's initiative.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Blake%20Moore.png"
    },
    {
      name: "Ron Estes",
      title: "",
      handle: "@RepRonEstes",
      description: "Ron Estes, a fifth-generation Kansan, represents Kansas's 4th District in the U.S. House since 2017. An engineer by trade, he has a background in business and public service, previously serving as Kansas State Treasurer. He supports the \"Department of Government Efficiency\" as part of his advocacy for fiscal responsibility and government streamlining.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Ron%20Estes.png"
    },
    {
      name: "MarjorieTaylor Greene",
      title: "republican",
      handle: "@RepMTG",
      description: "Marjorie Taylor Greene, a U.S. Representative for Georgia's 14th district, is known for her far-right views. She has been appointed to chair a House subcommittee on government efficiency, collaborating with Elon Musk and Vivek Ramaswamy to streamline the U.S. government under President-elect Trump's directive.",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/MarjorieTaylor%20Greene.png"
    },
    {
      name: "Mike Lee",
      title: "",
      handle: "@BasedMikeLee",
      description: "Mike Lee, a U.S. Senator from Utah since 2011, is known for his conservative stance and advocacy for limited government. He has recently endorsed Elon Musk and Vivek Ramaswamy, who are set to lead the Department of Government Efficiency under the Trump administration, focusing on reducing federal spending and bureaucracy",
      imageUrl: "https://doge-memes.b-cdn.net/FOD/Mike%20Lee.png"
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full aspect-[3/2] sm:aspect-[3/1] relative">
        <img 
          src="https://doge-memes.b-cdn.net/doge-fod-mobile-hero.jpg"
          alt="DOGE Hero"
          className="w-full h-full object-cover sm:hidden"
        />
        <img 
          src="https://doge-memes.b-cdn.net/doge-fod-hero-3_1-1.jpg"
          alt="DOGE Hero"
          className="hidden sm:block w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;
