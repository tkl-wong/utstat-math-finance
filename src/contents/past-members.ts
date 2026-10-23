type PastMemberLinks = FacultyMember["links"];

const pastMember = (
  name: string,
  title: string,
  links: PastMemberLinks = {},
): FacultyMember => ({
  name,
  title,
  image: "#",
  bio: "",
  links,
});

export const pastMembersData: FacultyMember[] = [
  pastMember("Liam Welsh", "PhD, 2026 · Clean energy finance", {
    googleScholar: "https://scholar.google.com/citations?user=T8toWLkAAAAJ&hl=en",
  }),
  pastMember(
    "Amanjit Kainth",
    "PhD, 2026 · Information-geometric and transport gradient flows for optimization",
    { googleScholar: "https://scholar.google.com/citations?user=s_vsA3IAAAAJ" },
  ),
  pastMember(
    "Emma Kroell",
    "PhD, 2025 · Model ambiguity in continuous-time non-life insurance",
    { website: "https://www.emmakroell.ca/" },
  ),
  pastMember(
    "Samuel Perrault",
    "Postdoc, 2023-2025 · Hydrological modelling and flood risk",
    {
      googleScholar: "https://scholar.google.ca/citations?hl=en&sortby=pubdate&user=suoJGN0AAAAJ&view_op=list_works",
    },
  ),
  pastMember(
    "Anthony Coache",
    "PhD, 2024 · Risk-sensitive reinforcement learning using time-consistent dynamic risk measures",
    { website: "https://anthonycoache.ca/" },
  ),
  pastMember(
    "Marlon Ruoso Moresco",
    "Postdoc, 2022-2024 · Dynamic robust risk measures and natural catastrophe insurance",
    { website: "https://marlonmoresco.github.io/cv/" },
  ),
  pastMember("Yichao Chen", "PhD, 2023 · Deep learning for mean-field-type problems"),
  pastMember(
    "Steven Campbell",
    "PhD, 2023 · Optimization problems in model-free stochastic portfolio theory and sequential testing games",
    { website: "https://www.stevenacampbell.com/" },
  ),
  pastMember("Brian Ning", "PhD, 2022 · Deep reinforcement learning", {
    linkedin: "https://www.linkedin.com/in/xin-ning-811a9b50/",
  }),
  pastMember(
    "Arvind Shrivats",
    "PhD, 2021 · Solar renewable energy certificate markets",
    { linkedin: "https://www.linkedin.com/in/arvind-v-shrivats-00795655/" },
  ),
  pastMember(
    "Tianyi Jia",
    "PhD, 2021 · Algorithmic trading in foreign exchange markets",
    { linkedin: "https://www.linkedin.com/in/tianyi-jia-4a6a9822/" },
  ),
  pastMember(
    "Zhen Qin",
    "PhD, 2021 · Model uncertainty in commodity and energy markets",
    { linkedin: "https://www.linkedin.com/in/zhen-qin-55677429/" },
  ),
  pastMember(
    "Ali Al-Aradi",
    "PhD, 2020 · Outperformance and tracking in active and passive portfolio management",
    { website: "https://utstat.toronto.edu/~ali/" },
  ),
  pastMember(
    "Tad Ferreira",
    "PhD, 2020 · Machine learning in algorithmic trading and reinforced deep Kalman filters",
    { linkedin: "https://www.linkedin.com/in/tadferreira/" },
  ),
  pastMember(
    "Philippe Casgrain",
    "PhD, 2019 · Algorithmic trading with latent models and mean-field games",
    { website: "https://p-casgrain.github.io/" },
  ),
  pastMember(
    "David Farahany",
    "PhD, 2018 · Monte Carlo and PDE methods for multidimensional optimal stopping under stochastic volatility",
    { linkedin: "https://www.linkedin.com/in/david-farahany-364573111/" },
  ),
  pastMember(
    "Xuancheng (Bill) Huang",
    "PhD, 2017 · Mean-field games with ambiguity aversion",
    { linkedin: "https://www.linkedin.com/in/xuancheng-bill-huang-774a8727/" },
  ),
  pastMember("Luhui Gan", "PhD, 2017 · Dynamic trading in a limit order book", {
    linkedin: "https://www.linkedin.com/in/luhui-gan-57655928/",
  }),
  pastMember(
    "Ryan Donnelly",
    "PhD, 2014 · Ambiguity aversion in algorithmic and high-frequency trading",
    { website: "https://sites.google.com/view/ryanfdonnelly" },
  ),
  pastMember(
    "Jason Ricci",
    "PhD, 2014 · Applied stochastic control in high-frequency and algorithmic trading",
    { linkedin: "https://www.linkedin.com/in/jason-ricci-01067885/" },
  ),
  pastMember("Eddie Ng", "PhD, 2010 · Kernel-based copula processes", {
    linkedin: "https://www.linkedin.com/in/edstein/",
  }),
  pastMember(
    "Georg Sigloch",
    "PhD, 2009 · Utility indifference pricing of credit instruments",
    { linkedin: "https://www.linkedin.com/in/georg-sigloch-89790a16/" },
  ),
  pastMember(
    "Angel Valov",
    "PhD, 2009 · First-passage times, integral equations, randomization, and analytical approximations",
    { linkedin: "https://www.linkedin.com/in/angel-valov-ph-d-4b479024/" },
  ),
  pastMember(
    "Vladimir Surkov",
    "PhD, 2009 · Option pricing using Fourier space time-stepping",
    { linkedin: "https://www.linkedin.com/in/vladimir-surkov-22b75b5/" },
  ),
  pastMember(
    "Samuel Hikspoors",
    "PhD, 2008 · Multifactor energy price models and exotic derivatives pricing",
    { linkedin: "https://www.linkedin.com/in/samuel-hikspoors-phd-348a791/" },
  ),
  pastMember(
    "Ziteng Cheng",
    "Postdoc · Sequential decision-making, mean-field games, and learning theory",
    { website: "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page?id=456" },
  ),
  pastMember(
    "Omid Namvar Gharehshiran",
    "Postdoc · Stochastic approximation and model-free trading",
    { linkedin: "https://www.linkedin.com/in/omid-namvar-gharehshiran-ph-d-63203138/" },
  ),
  pastMember(
    "Damir Kinzebulatov",
    "Postdoc · Algorithmic trading and randomized pinned measures",
    { website: "https://kinzebulatov.github.io/" },
  ),
  pastMember(
    "Mojtaba Nourian",
    "Postdoc · Major-minor mean-field games and optimal execution",
    { linkedin: "https://www.linkedin.com/in/mojtaba-nourian-phd-frm-02899348/" },
  ),
];
