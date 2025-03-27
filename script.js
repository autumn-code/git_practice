const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const moods = ['mysterious', 'chaotic', 'grounded', 'moody', 'dreamy', 'restless', 'unbothered', ];

const actions= [ 'meditate in the shower', 'avoid eye contact with your ex',' text your crush something weird', 'nap instead of making decisions'];  

const events = ['Mercury is in retrograde', 'you lose your favorite sock','the moon exposes your secrets', 'you forget your password again'];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateAstroMessage() {
    const sign = getRandomItem(signs);
    const mood = getRandomItem(moods);
    const action = getRandomItem(actions);
    const event = getRandomItem(events);
  
    const message = `You’re a ${sign}. Today, your vibe is ${mood}. You should ${action} before ${event}.`;
  
    console.log(message);
  }
  
  generateAstroMessage();


  