export const languages = {
  en: "English",
  es: "Español",
  pt: "Portuguese",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const routes = {
  en: {
    "jesus-exist-before-all-things": "jesus-exist-before-all-things",
    "he-became-a-man": "he-became-a-man",
    "his-life-was-perfect-and-blameless": "his-life-was-perfect-and-blameless",
    "his-work-was-great-and-glorious": "his-work-was-great-and-glorious",
    "he-died-for-our-sins": "he-died-for-our-sins",
    "he-rose-again": "he-rose-again",
    "he-was-exalted": "he-was-exalted",
    "he-will-return": "he-will-return",
  },
  es: {
    "jesus-exist-before-all-things": "jesus-existia-antes-de-todas-las-cosas",
    "he-became-a-man": "el-se-hizo-hombre",
    "his-life-was-perfect-and-blameless":
      "su-vida-fue-perfecta-e-inrreprensible",
    "his-work-was-great-and-glorious": "su-obra-fue-tremenda-y-grandiosa",
    "he-died-for-our-sins": "murio-por-nuestros-pecados",
    "he-rose-again": "resucito",
    "he-was-exalted": "fue-exaltado",
    "he-will-return": "el-volvera",
  },
  pt: {
    "jesus-exist-before-all-things": "jesus-existia-antes-de-todas-as-coisas",
    "he-became-a-man": "tornou-se-homem",
    "his-life-was-perfect-and-blameless":
      "sua-vida-foi-perfeita-e-irrepreensivel",
    "his-work-was-great-and-glorious": "sua-obra-foi-tremenda-e-grandiosa",
    "he-died-for-our-sins": "morreu-pelos-nossos-pecados",
    "he-rose-again": "ressuscitou",
    "he-was-exalted": "foi-exaltado",
    "he-will-return": "e-voltara",
  },
};

export const ui = {
  en: {
    "home.title": "Disciples in NJ",
    "home.lesson": "Lesson",
    "footer.createWith": "Created with",
    "footer.by": "by",
    next: "Next",
    previous: "Previous",
  },
  es: {
    "home.title": "Discípulos en NJ",
    "home.lesson": "Lección",
    "footer.createWith": "Creado con",
    "footer.by": "por",
    next: "Próximo",
    previous: "Anterior",
  },
  pt: {
    "home.title": "Discípulos em NJ",
    "home.lesson": "Lição",
    "footer.createWith": "Criado com",
    "footer.by": "por",
    next: "Próximo",
    previous: "Anterior",
  },
} as const;

export const Lessons = {
  en: [
    {
      link: "jesus-exist-before-all-things",
      title: "Jesus exist before all things",
      verses: [
        {
          book: "Jonh",
          chapter: "1",
          verse: "1-3",
          content:
            "In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through Him, and without Him nothing was made that was made.",
        },
      ],
      previous: null,
      next: "he-became-a-man",
    },
    {
      link: "he-became-a-man",
      title: "He became a man",
      verses: [
        {
          book: "Philippians",
          chapter: "2",
          verse: "5-8",
          content:
            "Let this mind be in you which was also in Christ Jesus, who, being in the form of God, did not consider it robbery to be equal with God, but made Himself of no reputation, taking the form of a bondservant, and coming in the likeness of men. And being found in appearance as a man, He humbled Himself and became obedient to the point of death, even the death of the cross.",
        },
      ],
      previous: "jesus-exist-before-all-things",
      next: "his-life-was-perfect-and-blameless",
    },
    {
      link: "his-life-was-perfect-and-blameless",
      title: "His life was perfect and blameless",
      verses: [
        {
          book: "1 Peter",
          chapter: "2",
          verse: "22",
          content: "Who committed no sin, nor was deceit found in His mouth.",
        },
      ],
      previous: "he-became-a-man",
      next: "his-work-was-great-and-glorious",
    },
    {
      link: "his-work-was-great-and-glorious",
      title: "His work was great and glorious",
      verses: [
        {
          book: "Acts",
          chapter: "10",
          verse: "38",
          content:
            "How God anointed Jesus of Nazareth with the Holy Spirit and with power, who went about doing good and healing all who were oppressed by the devil, for God was with Him.",
        },
      ],
      previous: "his-life-was-perfect-and-blameless",
      next: "he-died-for-our-sins",
    },
    {
      link: "he-died-for-our-sins",
      title: "He died for our sins",
      verses: [
        {
          book: "2 Corinthians",
          chapter: "5",
          verse: "21",
          content:
            "For He made Him who knew no sin to be sin for us, that we might become the righteousness of God in Him.",
        },
        {
          book: "Isaiah",
          chapter: "53",
          verse: "5-6",
          content:
            "But He was wounded for our transgressions, He was bruised for our iniquities; the chastisement for our peace was upon Him, and by His stripes we are healed. All we like sheep have gone astray; we have turned, every one, to his own way; and the Lord has laid on Him the iniquity of us all.",
        },
      ],
      previous: "his-work-was-great-and-glorious",
      next: "he-rose-again",
    },
    {
      link: "he-rose-again",
      title: "He rose again",

      verses: [
        {
          book: "Acts",
          chapter: "2",
          verse: "24",
          content:
            "Whom God raised up, having loosed the pains of death, because it was not possible that He should be held by it.",
        },
      ],
      previous: "he-died-for-our-sins",
      next: "he-was-exalted",
    },
    {
      link: "he-was-exalted",
      title: "He was exalted",
      verses: [
        {
          book: "Acts",
          chapter: "2",
          verse: "36",
          content:
            "Therefore let all the house of Israel know assuredly that God has made this Jesus, whom you crucified, both Lord and Christ.",
        },
        {
          book: "Philippians",
          chapter: "2",
          verse: "9-11",
          content:
            "Therefore God also has highly exalted Him and given Him the name which is above every name, that at the name of Jesus every knee should bow, of those in heaven, and of those on earth, and of those under the earth, and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.",
        },
      ],
      previous: "he-rose-again",
      next: "he-will-return",
    },
    {
      link: "he-will-return",
      title: "He will return",
      verses: [
        {
          book: "Matthew",
          chapter: "24",
          verse: "30",
          content:
            "Then the sign of the Son of Man will appear in heaven, and then all the tribes of the earth will mourn, and they will see the Son of Man coming on the clouds of heaven with power and great glory.",
        },
      ],
      previous: "he-was-exalted",
      next: null,
    },
  ],
  es: [
    {
      link: "jesus-existia-antes-de-todas-las-cosas",
      title: "Jesús existía antes de todas las cosas",
      verses: [
        {
          book: "Juan",
          chapter: "1",
          verse: "1-3",
          content:
            "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.",
        },
      ],
      previous: null,
      next: "/el-se-hizo-hombre",
    },
    {
      link: "el-se-hizo-hombre",
      title: "Él se hizo hombre",
      verses: [
        {
          book: "Filipenses",
          chapter: "2",
          verse: "5-8",
          content:
            "Cristo Jesús, el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres; y estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz.",
        },
      ],
      previous: "/jesus-existia-antes-de-todas-las-cosas",
      next: "/su-vida-fue-perfecta-e-inrreprensible",
    },
    {
      link: "su-vida-fue-perfecta-e-inrreprensible",
      title: "Su vida fue perfecta e inrreprensible",
      verses: [
        {
          book: "1 Pedro",
          chapter: "2",
          verse: "22",
          content: "El cual no hizo pecado, ni se halló engaño en su boca.",
        },
      ],
      previous: "/el-se-hizo-hombre",
      next: "/su-obra-fue-tremenda-y-grandiosa",
    },
    {
      link: "su-obra-fue-tremenda-y-grandiosa",
      title: "Su obra fue tremenda y grandiosa",
      verses: [
        {
          book: "Hechos",
          chapter: "10",
          verse: "38",
          content:
            "Cómo Dios ungió con el Espíritu Santo y con poder a Jesús de Nazaret, y como éste anduvo haciendo bienes y sanando a todos los oprimidos por el diablo, porque Dios estaba con él.",
        },
      ],
      previous: "/su-vida-fue-perfecta-e-inrreprensible",
      next: "/murio-por-nuestros-pecados",
    },
    {
      link: "murio-por-nuestros-pecados",
      title: "Murió por nuestros pecados",
      verses: [
        {
          book: "2 Corintios",
          chapter: "5",
          verse: "21",
          content:
            "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él.",
        },
        {
          book: "Isaías",
          chapter: "53",
          verse: "5-6",
          content:
            "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados. Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros.",
        },
      ],
      previous: "/su-obra-fue-tremenda-y-grandiosa",
      next: "/resucito",
    },
    {
      link: "resucito",
      title: "Resucitó",

      verses: [
        {
          book: "Hechos",
          chapter: "2",
          verse: "24",
          content:
            "Al cual Dios levantó, sueltos los dolores de la muerte, por cuanto era imposible que fuese retenido por ella.",
        },
      ],
      previous: "/murio-por-nuestros-pecados",
      next: "/fue-exaltado",
    },
    {
      link: "fue-exaltado",
      title: "Fue exaltado",
      verses: [
        {
          book: "Hechos",
          chapter: "2",
          verse: "36",
          content:
            "Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo.",
        },
        {
          book: "Filipenses",
          chapter: "2",
          verse: "9-11",
          content:
            "Por lo cual Dios también lo exaltó hasta lo sumo, y le dio un nombre sobre todo nombre, para que en el nombre de Jesús se doble toda rodilla de los que están en los cielos, y en la tierra, y debajo de la tierra; y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.",
        },
      ],
      previous: "/resucito",
      next: "/el-volvera",
    },
    {
      link: "el-volvera",
      title: "Él Volverá",
      verses: [
        {
          book: "Mateos",
          chapter: "24",
          verse: "30",
          content:
            "Entonces aparecerá la señal del Hijo del Hombre en el cielo; y entonces lamentarán todas las tribus de la tierra, y verán al Hijo del Hombre viniendo sobre las nubes del cielo, con poder y gran gloria.",
        },
      ],
      previous: "/fue-exaltado",
      next: null,
    },
  ],
  pt: [
    {
      link: "jesus-existia-antes-de-todas-as-coisas",
      title: "Jesus existia antes de todas as coisas",
      verses: [
        {
          book: "João",
          chapter: "1",
          verse: "1-3",
          content:
            "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Todas as coisas foram feitas por intermédio dele, e, sem ele, nada do que foi feito se fez.",
        },
      ],
      previous: null,
      next: "/tornou-se-homem",
    },
    {
      link: "tornou-se-homem",
      title: "Tornou-se homem",
      verses: [
        {
          book: "Filipenses",
          chapter: "2",
          verse: "5-8",
          content:
            "Cristo Jesus, subsistindo em forma de Deus, não considerou o ser igual a Deus coisa a que se devia aferrar; antes, a si mesmo se esvaziou, assumindo a forma de servo, tornando-se em semelhança de homens; e, reconhecido em figura humana, a si mesmo se humilhou, tornando-se obediente até à morte e morte de cruz.",
        },
      ],
      previous: "/jesus-existia-antes-de-todas-as-coisas",
      next: "/sua-vida-foi-perfeita-e-irrepreensivel",
    },
    {
      link: "sua-vida-foi-perfeita-e-irrepreensivel",
      title: "Sua vida foi perfeita e irrepreensível ",
      verses: [
        {
          book: "1 Pedro",
          chapter: "2",
          verse: "22",
          content:
            "O qual não cometeu pecado, nem na sua boca se achou engano.",
        },
      ],
      previous: "/tornou-se-homem",
      next: "/sua-obra-foi-tremenda-e-grandiosa",
    },
    {
      link: "sua-obra-foi-tremenda-e-grandiosa",
      title: "Sua obra foi tremenda e grandiosa",
      verses: [
        {
          book: "Atos",
          chapter: "10",
          verse: "38",
          content:
            "Como Deus ungiu a Jesus de Nazaré com o Espírito Santo e com poder, o qual andou por toda parte, fazendo o bem e curando a todos os oprimidos do diabo, porque Deus era com ele.",
        },
      ],
      previous: "/sua-vida-foi-perfeita-e-irrepreensivel",
      next: "/morreu-pelos-nossos-pecados",
    },
    {
      link: "morreu-pelos-nossos-pecados",
      title: "Morreu pelos nossos pecados",
      verses: [
        {
          book: "2 Coríntios",
          chapter: "5",
          verse: "21",
          content:
            "Aquele que não conheceu pecado, Deus o fez pecado por nós, para que nele fôssemos feitos justiça de Deus.",
        },
        {
          book: "Isaías",
          chapter: "53",
          verse: "5-6",
          content:
            "Mas ele foi ferido pelas nossas transgressões, e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo caminho, mas o Senhor fez cair sobre ele a iniquidade de nós todos.",
        },
      ],
      previous: "/sua-obra-foi-tremenda-e-grandiosa",
      next: "/ressuscitou",
    },
    {
      link: "ressuscitou",
      title: "Ressuscitou  ",

      verses: [
        {
          book: "Atos",
          chapter: "2",
          verse: "24",
          content: "Ao qual Deus ressuscitou, rompendo os grilhões da morte...",
        },
      ],
      previous: "/morreu-pelos-nossos-pecados",
      next: "/foi-exaltado",
    },
    {
      link: "foi-exaltado",
      title: "Foi exaltado",
      verses: [
        {
          book: "Atos",
          chapter: "2",
          verse: "36",
          content:
            "Esteja absolutamente certa, pois, toda a casa de Israel de que a este Jesus, que vós crucificastes, Deus o fez Senhor e Cristo.",
        },
        {
          book: "Filipenses",
          chapter: "2",
          verse: "9-11",
          content:
            "Pelo que também Deus o exaltou sobremaneira e lhe deu o nome que está acima de todo nome, para que ao nome de Jesus se dobre todo joelho, nos céus, na terra e debaixo da terra, e toda língua confesse que Jesus Cristo é Senhor, para glória de Deus Pai.",
        },
      ],
      previous: "/ressuscitou",
      next: "/he-will-return",
    },
    {
      link: "e-voltara",
      title: "E voltará",
      verses: [
        {
          book: "Mateus",
          chapter: "24",
          verse: "30",
          content:
            "Então, aparecerá no céu o sinal do Filho do Homem: todos os povos da terra se lamentarão e verão o Filho do Homem vindo sobre as nuvens do céu, com poder e muita glória.",
        },
      ],
      previous: "/foi-exaltado",
      next: null,
    },
  ],
};
