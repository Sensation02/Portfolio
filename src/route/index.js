const express = require('express')
const router = express.Router()
// ==============================================================

let header = {
  name: {
    firstName: 'Dmytro',
    lastName: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Chernivtsi',
}
let footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytroivanov',
    },
  },
}
// ================================================================
router.get('/', function (req, res) {
  res.render('index', {})
})
// ================================================================
router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      title: 'Skills',
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 9,
        },
        {
          name: 'Git',
          point: 7,
        },
        {
          name: 'Terminal',
          point: 7,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Programming',
          isMain: true,
        },
        {
          name: 'Gaming',
          isMain: true,
        },
        {
          name: 'Medicine',
          isMain: false,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      title: 'Education',
      education: [
        {
          name: 'BSMU',
          isEnd: true,
        },
        {
          name: 'NMU Bohomolets O.O.',
          isEnd: true,
        },
        {
          name: 'IT Brains UA',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'BSMU Diploma',
          id: '1282582',
        },
        {
          name: 'NMU Diploma',
          id: '2001293',
        },
        {
          name: 'IT Brains Diploma',
          id: '2919425',
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    header,
    page: {
      title: 'Resume | Work',
    },
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://www.itbrains.ua',
          },
          duration: {
            from: '10.10.2022',
            fo: '22.03.2023',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://github.com/Sensation02/Resume',
              about: 'About me, my education, my work etc.',
              stackAmount: 4,
              awardAmount: 2,
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'Express.js',
                },
                {
                  name: 'HTML/CSS',
                },
              ],
              awards: [
                {
                  name: 'Award name',
                },
                {
                  name: 'Award name2',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

module.exports = router
