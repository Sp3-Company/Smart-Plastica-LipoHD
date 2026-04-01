export const SITE = {
  name: "Smart Plástica",
  unit: "São Paulo",
  domain: "smartplasticasp.com.br",
  slogan: "Onde o sonho vira decisão",
  description:
    "Cirurgia plástica com segurança, tecnologia e acompanhamento completo em São Paulo. Cirurgiões certificados pela SBCP.",
  cnpj: "65.268.316/0001-04",
}

export const CONTACT = {
  phone: "(11) 91013-6326",
  phoneClean: "5511910136326",
  email: "contato@smartplastica.com.br",
  whatsappDefault:
    "https://wa.me/5511910136326?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20com%20uma%20consultora%20especializada!",
  whatsappAgenda:
    "https://wa.me/5511910136326?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20consulta!",
  hours: "Seg - Sex | 08h às 18h",
  instagram: "https://www.instagram.com/smart.plastica/",
  facebook: "https://www.facebook.com/smart.plastica/",
}

export const ADDRESS = {
  street: "R. Canário, 539",
  neighborhood: "Moema",
  city: "São Paulo",
  state: "SP",
  zip: "04521-001",
  full: "R. Canário, 539 - Moema, São Paulo - SP, 04521-001",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8!2d-46.6661!3d-23.6001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzAwLjQiUyA0NsKwMzknNTguMCJX!5e0!3m2!1sen!2sbr",
}

export const PROCEDURES = {
  women: [
    {
      name: "Abdominoplastia",
      slug: "abdominoplastia",
      description:
        "Remoção do excesso de pele e gordura abdominal, com melhora do contorno e firmeza da região.",
    },
    {
      name: "Lipo HD",
      slug: "lipo-hd",
      description:
        "Definição corporal avançada com maior evidência da musculatura, respeitando a anatomia feminina.",
    },
    {
      name: "Mommy Makeover",
      slug: "mommy-makeover",
      description:
        "Combinação de lipoaspiração, abdominoplastia e mastopexia com ou sem prótese.",
    },
    {
      name: "Prótese de Mama",
      slug: "protese-de-mama",
      description:
        "Prótese de silicone para mais volume, proporção e harmonia com seu corpo.",
    },
    {
      name: "Mastopexia",
      slug: "mastopexia",
      description:
        "Levantamento e sustentação das mamas, com ou sem prótese de silicone.",
    },
  ],
  men: [
    {
      name: "Abdominoplastia Masculina",
      slug: "abdominoplastia-masculina",
      description:
        "Correção do excesso de pele e melhora do contorno abdominal masculino.",
    },
    {
      name: "Lipo HD Masculina",
      slug: "lipo-hd-masculina",
      description:
        "Redução de gordura localizada com foco em contorno corporal mais definido.",
    },
    {
      name: "Enxertos Musculares",
      slug: "enxertos-musculares",
      description:
        "Gordura na musculatura para dar volume em peitoral, abdôme, bíceps e trapézio.",
    },
  ],
  facial: [
    {
      name: "Rinoplastia",
      slug: "rinoplastia",
      description:
        "Harmonização facial através da correção estética e funcional do nariz.",
    },
    {
      name: "Blefaroplastia",
      slug: "blefaroplastia",
      description:
        "Rejuvenescimento do olhar com correção do excesso de pele nas pálpebras.",
    },
    {
      name: "Lifting Facial",
      slug: "lifting-facial",
      description:
        "Reposicionamento dos tecidos da face para suavizar sinais de envelhecimento com naturalidade.",
    },
    {
      name: "Otoplastia",
      slug: "otoplastia",
      description:
        "Correção de orelhas proeminentes, promovendo mais harmonia facial.",
    },
    {
      name: "Bichectomia",
      slug: "bichectomia",
      description:
        "Afinamento do contorno facial por meio da redução das bolsas de gordura das bochechas.",
    },
  ],
}

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Procedimentos", href: "/procedimentos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
]

export const TESTIMONIALS = [
  {
    name: "Paola Vieira",
    text: "Desde a primeira videochamada me senti acolhida. A consultora explicou tudo com clareza e me orientou em cada etapa. Hoje olho no espelho e me reconheço.",
  },
  {
    name: "Alice Neves",
    procedure: "Lipoaspiração",
    text: "Tive medo no começo, mas a equipe esteve presente o tempo todo. A recuperação foi mais tranquila do que eu imaginava e o resultado superou minhas expectativas.",
  },
  {
    name: "Rafaela Becker",
    procedure: "Aumento de Mama",
    text: "Realizei um sonho que parecia impossível. O parcelamento facilitado e o acompanhamento próximo fizeram toda diferença. Valeu cada segundo.",
  },
  {
    name: "Larissa Gomes",
    text: "",
  },
]

export const FAQ_ITEMS = [
  {
    question: "Na Smart Plástica todos os cirurgiões são certificados?",
    answer:
      "Sim. Trabalhamos apenas com cirurgiões certificados pela Sociedade Brasileira de Cirurgia Plástica, garantindo qualidade técnica e segurança. Você pode confiar.",
  },
  {
    question: "Como funciona o investimento?",
    answer:
      "Nossa consultora explica todas as possibilidades com clareza e auxilia você a se organizar para realizar esse sonho com planejamento e segurança. Buscamos sempre as melhores condições para que sua decisão seja consciente, estruturada e tranquila.",
  },
  {
    question: "A videochamada com a consultora é realmente gratuita?",
    answer:
      "Sim, completamente gratuita e sem compromisso. É o momento de tirar dúvidas, entender o processo e conhecer como podemos te ajudar.",
  },
  {
    question: "Como funciona o acompanhamento no pós-operatório?",
    answer:
      "Você recebe suporte completo da nossa equipe durante toda a recuperação, com retornos programados, orientações detalhadas de cuidados e acompanhamento próximo até sua plena recuperação. Nosso pós-operatório é uma das nossas especialidades.",
  },
  {
    question: "Onde encontro a Smart Plástica em São Paulo?",
    answer:
      "Estamos em Moema, São Paulo - SP. R. Canário, 539. Todas as cirurgias são realizadas em hospitais de referência.",
  },
]
