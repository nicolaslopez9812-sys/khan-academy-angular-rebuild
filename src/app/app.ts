import { Component } from '@angular/core';

type CourseGroup = {
  accent: string;
  icon: string;
  title: string;
  topics: string[];
};

type Feature = {
  image: string;
  title: string;
  copy: string;
};

type Sponsor = {
  name: string;
  logo: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly courseGroups: CourseGroup[] = [
    {
      accent: '#ffb100',
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
      title: 'Matemáticas',
      topics: [
        'Matemáticas elementales',
        'Aritmética',
        'Preálgebra',
        'Álgebra I',
        'Geometría',
        'Álgebra II',
        'Trigonometría',
        'Precálculo',
        'Probabilidad y estadística',
        'Cálculo I',
        'Cálculo II',
        'Estadística avanzada',
        'Cálculo multivariable',
        'Ecuaciones diferenciales',
        'Álgebra linear',
      ],
    },
    {
      accent: '#ffb100',
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
      title: 'Matemáticas por grado (EEU)',
      topics: [
        'Preescolar (app en inglés)',
        'Jardín de niños',
        '1°grado',
        '2°grado',
        '3°grado',
        '4°grado',
        '5°grado',
        '6°grado',
        '7°grado',
        '8°grado',
      ],
    },
    {
      accent: '#58b66a',
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/science_green.png-4ca7bf-128c.png',
      title: 'Ciencia',
      topics: [
        'Física',
        'Cosmología y astronomía',
        'Química',
        'Química avanzada',
        'Química orgánica',
        'Biología',
        'Biología de secundaria',
        'Biología avanzada',
        'Ingeniería eléctrica',
      ],
    },
    {
      accent: '#66b972',
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/economics_finance.png-55daed-128c.png',
      title: 'Economía y finanzas',
      topics: ['Microeconomía', 'Macroeconomía', 'Mercados financieros y de capitales'],
    },
    {
      accent: '#ff7043',
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/computing_orange.png-653676-128c.png',
      title: 'Computación',
      topics: [
        'Programación de computadoras',
        'Ciencias de la computación',
        'La Hora de Código',
        'Animación digital',
      ],
    },
    {
      accent: '#5aa7ff',
      icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/khan4educators.png-f6e5e9-128c.png',
      title: 'Khan para Maestros',
      topics: ['Formación inicial', 'Recursos'],
    },
  ];

  protected readonly features: Feature[] = [
    {
      image: 'https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png',
      title: 'Aprendizaje personalizado',
      copy:
        'Los estudiantes practican a su propio ritmo, primero llenando lagunas en su comprensión y luego acelerando su aprendizaje.',
    },
    {
      image: 'https://cdn.kastatic.org/images/lohp/trusted_content_icon.png',
      title: 'Contenido de confianza',
      copy:
        'Creado por expertos, Khan Academy cubre matemáticas, ciencias y más. Y siempre es gratis para estudiantes y maestros.',
    },
    {
      image: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',
      title: 'Herramientas para empoderar a los maestros',
      copy:
        'Con Khan Academy, los maestros pueden identificar lagunas, crear una clase a la medida y satisfacer las necesidades de cada estudiante.',
    },
  ];

  protected readonly sponsors: Sponsor[] = [
    {
      name: 'Bank of America',
      logo: 'https://cdn.kastatic.org/images/supporters-logos/bank-of-america-dark-gray@2x.png',
    },
    {
      name: 'College Board',
      logo: 'https://cdn.kastatic.org/images/supporters-logos/college-board-dark-gray@2x.png',
    },
    {
      name: 'Ann and John Doerr',
      logo: 'https://cdn.kastatic.org/images/supporters-logos/ann-and-john-doerr-dark-gray@2x.png',
    },
    {
      name: 'Bill and Melinda Gates Foundation',
      logo: 'https://cdn.kastatic.org/images/supporters-logos/gates-foundation-dark-gray@2x.png',
    },
  ];
}
