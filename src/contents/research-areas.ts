export interface ResearchArea {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featuredPapers?: {
    title: string;
    authors: string[];
    venue: string;
    year: number;
    href: string;
  }[];
}

export interface ResearchAreasContent {
  header: {
    title: string;
    description: string;
  };
  areas: ResearchArea[];
}

export const researchAreasContent: ResearchAreasContent = {
  header: {
    title: "Research Areas",
    description: ""
  },
  areas: [
    {
      slug: "trading-market-microstructure",
      title: "Trading & Market Microstructure",
      subtitle: "Mathematical models of trading, liquidity, price formation, market impact, and information in financial markets",
      description: "",
      featuredPapers: [
        {
          title: "Nash equilibrium between brokers and traders",
          authors: ["Álvaro Cartea", "Sebastian Jaimungal", "Leandro Sánchez-Betancourt"],
          venue: "Finance and Stochastics",
          year: 2026,
          href: "https://doi.org/10.1007/s00780-026-00595-7",
        },
        {
          title: "An equilibrium model for the cross section of liquidity premia",
          authors: ["Johannes Muhle-Karbe", "Xiaofei Shi", "Chen Yang"],
          venue: "Mathematics of Operations Research",
          year: 2022,
          href: "https://doi.org/10.1287/moor.2022.1307",
        },
      ],
    },
    {
      slug: "portfolio-theory-asset-management",
      title: "Portfolio Theory & Asset Management",
      subtitle: "Quantitative methods for portfolio construction, asset allocation, performance, and investment under uncertainty",
      description: "",
      featuredPapers: [
        {
          title: "Dynamic portfolio choice with intertemporal hedging and transaction costs",
          authors: ["Johannes Muhle-Karbe", "James Sefton", "Xiaofei Shi"],
          venue: "Management Science",
          year: 2025,
          href: "https://doi.org/10.1287/mnsc.2024.05913",
        },
        {
          title: "Functional portfolio optimization in stochastic portfolio theory",
          authors: ["Steven Campbell", "Ting-Kam Leonard Wong"],
          venue: "SIAM Journal on Financial Mathematics",
          year: 2022,
          href: "https://doi.org/10.1137/21M1417715",
        },
      ],
    },
    {
      slug: "stochastic-control-optimization",
      title: "Stochastic Control & Optimization",
      subtitle: "Mathematical methods for dynamic decision-making and optimization in uncertain and evolving environments",
      description: "",
      featuredPapers: [
        {
          title: "LQG risk-sensitive single-agent and major-minor mean-field game systems: a variational framework",
          authors: ["Hanchao Liu", "Dena Firoozi", "Michèle Breton"],
          venue: "SIAM Journal on Control and Optimization",
          year: 2025,
          href: "https://doi.org/10.1137/23M1595734",
        },
        {
          title: "The price of information",
          authors: ["Sebastian Jaimungal", "Xiaofei Shi"],
          venue: "SIAM Journal on Financial Mathematics",
          year: 2024,
          href: "https://doi.org/10.1137/24M1644791",
        },
      ],
    },
    {
      slug: "mean-field-games-equilibrium",
      title: "Mean-Field Games & Equilibrium",
      subtitle: "Models of strategic interactions, equilibrium, and collective behavior in large populations of agents",
      description: "",
      featuredPapers: [
        {
          title: "Risk-averse mean field games: exploitability and non-asymptotic analysis",
          authors: ["Ziteng Cheng", "Sebastian Jaimungal"],
          venue: "Stochastic Processes and their Applications",
          year: 2026,
          href: "https://doi.org/10.1016/j.spa.2026.105022",
        },
        {
          title: "Hilbert space-valued LQ mean field games: an infinite-dimensional analysis",
          authors: ["Hanchao Liu", "Dena Firoozi"],
          venue: "SIAM Journal on Control and Optimization",
          year: 2025,
          href: "https://doi.org/10.1137/24M1675096",
        },
      ],
    },
    {
      slug: "risk-management-robustness",
      title: "Risk Management & Robustness",
      subtitle: "Methods for measuring, managing, and optimizing risk under model uncertainty, dependence, and ambiguity",
      description: "",
      featuredPapers: [
        {
          title: "Optimizing distortion riskmetrics with distributional uncertainty",
          authors: ["Silvana Pesenti", "Qinyu Wang", "Ruodu Wang"],
          venue: "Mathematical Programming",
          year: 2024,
          href: "https://doi.org/10.1007/s10107-024-02128-6",
        },
        {
          title: "Risk budgeting allocation for dynamic risk measures",
          authors: ["Silvana Pesenti", "Sebastian Jaimungal", "Yuri F. Saporito", "Rodrigo S. Targino"],
          venue: "Operations Research",
          year: 2025,
          href: "https://doi.org/10.1287/opre.2023.0299",
        },
      ],
    },
    {
      slug: "actuarial-science",
      title: "Actuarial Science",
      subtitle: "Mathematical and statistical methods for insurance, including loss modelling, pricing, risk aggregation, risk sharing, and capital allocation",
      description: "",
      featuredPapers: [
        {
          title: "Efficient evaluation of risk allocations",
          authors: ["Christopher Blier-Wong", "Hélène Cossette", "Etienne Marceau"],
          venue: "Insurance: Mathematics and Economics",
          year: 2025,
          href: "https://doi.org/10.1016/j.insmatheco.2025.02.006",
        },
        {
          title: "Stressing dynamic loss models",
          authors: ["Emma Kroell", "Silvana Pesenti", "Sebastian Jaimungal"],
          venue: "Insurance: Mathematics and Economics",
          year: 2024,
          href: "https://doi.org/10.1016/j.insmatheco.2023.11.002",
        },
      ],
    },
    {
      slug: "optimal-transport-information-geometry",
      title: "Optimal Transport & Information Geometry",
      subtitle: "Geometric and probabilistic methods for comparing distributions, modelling uncertainty, and solving problems in finance and statistics",
      description: "",
      featuredPapers: [
        {
          title: "Bregman-Wasserstein divergence: geometry and applications",
          authors: ["Amanjit Singh Kainth", "Cale Rankin", "Ting-Kam Leonard Wong"],
          venue: "IEEE Transactions on Information Theory",
          year: 2025,
          href: "https://ieeexplore.ieee.org/document/11152332",
        },
        {
          title: "Learning conditional distributions on continuous spaces",
          authors: ["Cyril Bénézet", "Ziteng Cheng", "Sebastian Jaimungal"],
          venue: "Journal of Machine Learning Research",
          year: 2025,
          href: "https://www.jmlr.org/papers/v26/24-0924.html",
        },
      ],
    },
    {
      slug: "deep-learning-reinforcement-learning",
      title: "Deep Learning & Reinforcement Learning",
      subtitle: "Data-driven methods for prediction, representation learning, and sequential decision-making in finance, insurance, and risk",
      description: "",
      featuredPapers: [
        {
          title: "Reinforcement learning with dynamic convex risk measures",
          authors: ["Anthony Coache", "Sebastian Jaimungal"],
          venue: "Mathematical Finance",
          year: 2024,
          href: "https://doi.org/10.1111/mafi.12388",
        },
        {
          title: "A representation-learning approach for insurance pricing with images",
          authors: ["Christopher Blier-Wong", "Luc Lamontagne", "Etienne Marceau"],
          venue: "ASTIN Bulletin",
          year: 2024,
          href: "https://doi.org/10.1017/asb.2024.9",
        },
      ],
    },
    {
      slug: "energy-sustainable-finance",
      title: "Energy & Sustainable Finance",
      subtitle: "Mathematical models for energy markets, climate risk, renewable investment, and the transition to sustainable financial systems",
      description: "",
      featuredPapers: [
        {
          title: "A mean-field game approach to equilibrium pricing in solar renewable energy certificate markets",
          authors: ["Arvind Shrivats", "Dena Firoozi", "Sebastian Jaimungal"],
          venue: "Mathematical Finance",
          year: 2022,
          href: "https://doi.org/10.1111/mafi.12345",
        },
        {
          title: "Nash equilibria in greenhouse gas offset credit markets",
          authors: ["Liam Welsh", "Sebastian Jaimungal"],
          venue: "Journal of Commodity Markets",
          year: 2024,
          href: "https://www.sciencedirect.com/science/article/pii/S2405851324000382",
        },
      ],
    },
    {
      slug: "applied-probability-stochastic-processes",
      title: "Applied Probability & Stochastic Processes",
      subtitle: "Probabilistic models and stochastic-process methods for complex systems in finance, insurance, and related fields",
      description: "",
      featuredPapers: [
        {
          title: "Random concave functions",
          authors: ["Peter Baxendale", "Ting-Kam Leonard Wong"],
          venue: "Annals of Applied Probability",
          year: 2022,
          href: "https://doi.org/10.1214/21-AAP1697",
        },
        {
          title: "Improved thresholds for e-values",
          authors: ["Christopher Blier-Wong", "Ruodu Wang"],
          venue: "Annals of Statistics",
          year: 2026,
          href: "https://doi.org/10.1214/26-AOS2626",
        },
      ],
    },
  ]
};
