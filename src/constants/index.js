export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'Über mich',
    href: '#aboutme',
  },
  {
    id: 3,
    name: 'Motivation und Ziele',
    href: '#MotivationGoal',
  },
  {
    id: 4,
    name: 'Kontakt',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Raphael Kuiper',
    position: 'GHR-POD-NEX-34',
    img: 'assets/review1.png',
    review:
      'Alessio überzeugt durch sein herausragendes Engagement und seine Begeisterung für die Arbeiten im Team und bei Swisscom. Er zeigt grosse Lernbereitschaft und sucht stets nach Möglichkeiten, sein Wissen zu erweitern. Ich wünsche ihm weiterhin viel Erfolg und Engagement in seinen zukünftigen Projekten.',
  },
  {
    id: 2,
    name: 'Marcus Beyer',
    position: 'GSA-GSE-SEL',
    img: 'assets/review2.png',
    review:
      'Alessio zeigt eine beeindruckende Neugier und Wissbegierde, beschafft sich eigenständig alle notwendigen Informationen und setzt sein Wissen gekonnt in die Praxis um. Komplexe Aufgaben erfasst er schnell, vernetzt sich aktiv in der Abteilung und holt sich bei Bedarf eigenständig Unterstützung.',
  },
  {
    id: 3,
    name: 'Adam Alayan',
    position: 'INI-DOS-OCD',
    img: 'assets/review3.png',
    review: 'Alessio`s Programmierfähigkeiten im zweiten Lehrjahr sind beeindruckend. Er beweist Anstand und Zuverlässigkeit. Dein Optimismus ist inspirierend. Weiter so!',
  },
  {
    id: 4,
    name: 'Hier könnte Ihr Name stehen',
    position: 'Mein nächster PA',
    img: 'assets/review4.png',
    review:
      'Hier könnte Ihr Feedback stehen, nach einem Projekt bei Ihnen...',
  },
];

export const myProjects = [
  {
    title: 'NEX First Steps',
    desc: 'In den First Steps hat meine Lehre begonnen. Dort habe ich alles rund um Swisscom kennengelernt, also z.B. wie man die verschieden Tools verwendet, wie man richtig zusammenarbeitet und auch andere Dinge, wie beispielsweise die Arbeitssicherheit.',
    subdesc:
      'August - August 2023',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Microsoft Word',
        path: '/assets/word.svg',
      },
      {
        id: 2,
        name: 'Linse',
        path: 'assets/lens.svg',
      },
    ],
  },
  {
    title: 'LernendenHub',
    desc: 'Der Lernenden Hub ist ein Team von Lernenden innerhalb des MWS (Modern Workspace Solutions). Mit dem neuen Lernenden Team haben diese Teams die Möglichkeit, auf einen Pool von Lernenden zurückzugreifen können. innerhalb des LerndenHub habe ich bei einer SxCA Release und eine Powershell Automstisierung gearbeitet.',
    subdesc:
      'August/September 2023 - Januar 2024',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Powershell',
        path: '/assets/powershell.svg',
      },
      {
        id: 2,
        name: 'Microsoft Powerautomate',
        path: 'assets/Powerautomate.svg',
      },
    ],
  },
  {
    title: 'Live Hacking Szenarien',
    desc: 'Innerhalb des Projekts im Security-Bereich konnte ich meine technischen Fähigkeiten erweitern und wertvolle Erfahrungen im Bereich Awareness sammeln. Ich setzte vier Live-Hacking-Szenarien um: E-Mail-Spoofing, Rubber Ducky, Reverse Shell (VNC) und einen Macrovirus/Trojaner. Zu jedem Szenario erstellte ich eine ausführliche Dokumentation, die technische Details und Risiken darlegte. Diese präsentierte ich den Stakeholdern und erklärte anschaulich die Funktionsweise der Angriffe und deren Gefahren.',
    subdesc:
      'Januar - Juli 2024',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Kali Linux',
        path: '/assets/Kalilinux.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python.svg',
      },
      {
        id: 3,
        name: 'Bash',
        path: '/assets/bash.svg',
      },
    ],
  },
  {
    title: 'Fullstack Fullstack Entwickler/in im Team Minion',
    desc: 'Als Fullstack-Entwickler im Team Minions arbeitete ich mit Angular im Frontend und Python sowie FastAPI im Backend an der Webapplikation "Vegeta". Dabei lernte ich die Aufgaben eines Fullstack-Entwicklers sowie Scrum Rituale kennen und trug aktiv zur Projektarbeit bei. Ich konfigurierte den Linter Ruff für das Backend, optimierte die Codequalität und nahm an Code Reviews teil, um Entwicklungsprozesse zu verbessern. Zu meinen Aufgaben zählte ausserdem die Entwicklung und Integration neuer Features, die Funktionalität und Benutzerfreundlichkeit erweiterten, stets in Abstimmung mit Stakeholdern. Dabei konnte ich sowohl meine technischen als auch meine Soft Skills in Teamarbeit, Kommunikation und Problemlösung stärken.',
    subdesc: 'August 2024 - Heute',
    logo: '/assets/project-logo4.jpg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Angular.js',
        path: '/assets/angular.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Ruff',
        path: '/assets/ruff.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const motivationGoal = [
  {
    id: 1,
    name: 'Motivation',
    title: "Ich bin motiviert, als Informatiker Fachrichtung Applikationsentwicklung zu arbeiten, weil ich die Chance liebe, Neues zu gestalten und zu entwickeln. Diese Branche ermöglicht es mir, ständig etwas Neues zu lernen und mich weiterzuentwickeln. Ich bin #engagiert, #vertrauenswürdig und #neugierig, was bedeutet, dass ich immer #bereit bin, mein Bestes zu geben, Verantwortung zu übernehmen und in die Welt der Technologie einzutauchen und mit zu getsalten.",
    icon: '/assets/dumbbell.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Ziele',
    title: "Meine beruflichen Ziele sind, mich stets weiterzubilden und eine gute Grundausbildung zu absolvieren. Diese Absicht, hilft mir dabei mich auf diese Weise mich stets weiterzuentwickeln. Desgleichen möchte ich von voneinander lernen und auch gelerntes weiter geben, weil man nur zusammen noch stärker den je ist!",
    icon: '/assets/goal.svg',
    animation: 'clapping',
  },
];
