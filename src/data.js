const data = {
  Mowee: {
    title: `Mowee app makes searching and saving movies`,
    mark: 'easy',
    info: 'You can create an account, search for thousands of movies, catch information about them, save and rate it.',
    img: require('./assets/img/Mowee.png'),
    imgs: {
      Home: require('./assets/img/Mowee/Home.png'),
      Saved: require('./assets/img/Mowee/Saved.png'),
      Profile: require('./assets/img/Mowee/Profile.png')
    },
    technologies: {
      MERN: ['MongoDB', 'Express.js', 'React Native', 'Node.js']
    },
    whereIs: {
      github: {
        img: require('./assets/img/icons/github.png'),
        url: 'https://github.com/maxymlyskov/mowee'
      },
      dribbble: {
        img: require('./assets/img/icons/dribbble.png'),
        url: 'https://dribbble.com/shots/17386281-Mowee'
      }
    }
  },

  FoodApp: {
    title: 'Best food near of ',
    mark: 'you',
    info: '',
    img: require('./assets/img/FoodApp.png'),
    imgs: {
      Home: require('./assets/img/FoodApp/Home.png'),
      Liked: require('./assets/img/FoodApp/Liked.png'),
      Details: require('./assets/img/FoodApp/Details.png')
    },
    technologies: {
      MERN: ['MongoDB', 'Express.js', 'React Native', 'Node.js'],
    },
    whereIs: {
      github: {
        img: require('./assets/img/icons/github.png'),
        url: 'https://github.com/Denlich/foodApp'
      },
      dribbble: {
        img: require('./assets/img/icons/dribbble.png'),
        url: ''
      }
    }
  },

  EatIs: {
    title: 'EatIs app makes care about what you eat and your',
    mark: 'health',
    info: "You can create an account, search for thousands of recipes, catch information about them and save. You also can use EatIs for control you health by calculating kcal of food you've been eating by day. In it you can set a goal to lose, gain or save weight and the app will recomend for you some plans and set your kcal standart per day.",
    img: require('./assets/img/EatIs.png'),
    imgs: {
      Diary: require('./assets/img/EatIs/Diary.png'),
      Home: require('./assets/img/EatIs/Saved.png'),
      Profile: require('./assets/img/EatIs/Profile.png'),
    },
    technologies: {
      MERN: ['MongoDB', 'Express.js', 'React Native', 'Node.js'],
      Redux: '',
    },
    whereIs: {
      github: {
        img: require('./assets/img/icons/github.png'),
        url: 'https://github.com/maxymlyskov/recipe-app'
      },
      dribbble: {
        img: require('./assets/img/icons/dribbble.png'),
        url: ''
      }
    }
  }
}

export default data;