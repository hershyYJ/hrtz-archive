export type Song = {
    title: string;
    artist: string;
  };
  
  export type Member = {
    id: string;
    name: string;
    image: string;
    color: string;
    songs: Song[];
  };
  
  export const members: Member[] = [
    {
      id: "yyj",
      name: "YOUNGJUN",
      image: "/members/YYJ.webp",
      color: "#4D4C51",
      songs: [
        { title: "FLY", artist: "Tone Stith" },
        { title: "Senses", artist: "MICO" },
        { title: "Back At It", artist: "Spratta" },
        { title: "if this is the last time", artist: "LANY" },
        { title: "Paranoid", artist: "Lauv" },
        { title: "어떤 이의 편지", artist: "하현상" },
        { title: "DAISIES", artist: "Justin Bieber" },
        { title: "Satisfied (Feat. PENOMECO)", artist: "Crush" },
        { title: "It Even Rains In LA", artist: "LANY" },
        { title: "Drive", artist: "Slom" },
        { title: "NO눈치 (Feat. Crush)", artist: "SAM KIM" },
        { title: "As Long As It Leads To Me", artist: "Fly By Midnight" },
        { title: "Treat You Better", artist: "Shawn Mendes" },
        { title: "summer on the inside", artist: "warner case, Jean Tonique & Max Kaluza" },
        { title: "come over", artist: "joan" },
        { title: "REDLINE DASH", artist: "Skrillex" },
        { title: "Either Way, I'm Going Your Way", artist: "Valley" },
      ],
    },
    {
      id: "riaan",
      name: "RIAAN",
      image: "/members/Riaan.webp",
      color: "#913721",
      songs: [
        { title: "Santorini", artist: "Christian Kuria" },
        { title: "Superpowers", artist: "Daniel Caesar" },
        { title: "Make You Mine", artist: "Giveon" },
        { title: "What if we met at another place ?", artist: "OSUN" },
        { title: "TOO CLOSE (Feat. Suen)", artist: "DIMO REX" },
        { title: "UNDERSTAND", artist: "keshi" },
        { title: "born to love you", artist: "88rising & SAYAK DAS" },
        { title: "I'VE FOUND YOU (Feat. hiko)", artist: "shinjihang" },
        { title: "Calico", artist: "DPR IAN" },
        { title: "Teacher", artist: "PRETTYMUCH" },
        { title: "She Said", artist: "Dane" },
        { title: "Ben & Jerry (Feat. JUNNY)", artist: "Riaan" },
        { title: "억지사랑 고집이별", artist: "희규" },
        { title: "~할때만 (Feat. JUNNY)", artist: "dress, Raf Sandou" },
        { title: "MOYA", artist: "박재범, LNGSHOT" },
        { title: "Heaven Can Wait", artist: "JUNNY" },
      ],
    },
    {
      id: "dane",
      name: "DANE",
      image: "/members/Dane.webp",
      color: "#786658",
      songs: [
        { title: "Santorini", artist: "Christian Kuria" },
        { title: "Dizzy", artist: "Yueku" },
        { title: "Sophie Ricky", artist: "Jackson Wang" },
        { title: "Good Days", artist: "SZA" },
        { title: "FAMJAM4000", artist: "Jordan Ward" },
        { title: "BACK WHEN YOU WERE MINE", artist: "The Kid LAROI" },
        { title: "Say", artist: "keshi" },
        { title: "Champagne Supernova", artist: "Oasis" },
        { title: "Headlights", artist: "In Color" },
        { title: "Who's Holding Donna Now?", artist: "DeBarge" },
        { title: "SAY MY NAME", artist: "DIMO REX" },
        { title: "You Are Not Alone", artist: "Michael Jackson" },
      ],
    },
    {
      id: "keiten",
      name: "KEITEN",
      image: "/members/Keiten.webp",
      color: "#4A97C3",
      songs: [
        { title: "R U Mine?", artist: "Arctic Monkeys" },
        { title: "Gravity", artist: "John Mayer" },
        { title: "Home (feat. Hikaru Utada)", artist: "Charlie Puth" },
        { title: "らしさ (Rashisa)", artist: "Official髭男dism" },
        { title: "Eenie Meenie", artist: "Sean Kingston & Justin Bieber" },
        { title: "What Makes You Beautiful", artist: "One Direction" },
        { title: "The Way You Make Me Feel", artist: "Michael Jackson" },
        { title: "Changes", artist: "Charlie Puth" },
        { title: "Love On Top", artist: "Beyonce" },
      ],
    },
    {
      id: "hagiwa",
      name: "HAGIWA",
      image: "/members/Hagiwa.webp",
      color: "#D3CA84",
      songs: [
        { title: "Don't Stop Me Now", artist: "Queen" },
        { title: "サムライハート(Some Like It Hot!!)", artist: "SPYAIR" },
        { title: "青と夏 (Ao To Natsu)", artist: "Mrs. GREEN APPLE" },
        { title: "踊り子 (odoriko)", artist: "Vaundy" },
        { title: "아주 NICE", artist: "세븐틴" },
      ],
    },
  ];