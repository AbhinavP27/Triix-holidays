const tripPlans = {
  Munnar: {
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    activities: [
      "Explore Eravikulam National Park",
      "Visit Mattupetty Dam",
      "Enjoy the tea gardens",
      "Explore Echo Point",
      "Visit Top Station"
    ],
    costs: {
      budget: {
        transport: 800,
        accommodation: 1000,
        food: 500,
        activities: 300
      },
      standard: {
        transport: 1500,
        accommodation: 2200,
        food: 800,
        activities: 600
      },
      premium: {
        transport: 2500,
        accommodation: 4500,
        food: 1500,
        activities: 1200
      }
    }
  },

  Goa: {
    location: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    activities: [
      "Visit Baga Beach",
      "Explore Fort Aguada",
      "Enjoy water sports",
      "Visit Calangute Beach",
      "Explore local markets"
    ],
    costs: {
      budget: {
        transport: 1000,
        accommodation: 1200,
        food: 600,
        activities: 500
      },
      standard: {
        transport: 1800,
        accommodation: 2500,
        food: 1000,
        activities: 1000
      },
      premium: {
        transport: 3000,
        accommodation: 5000,
        food: 1800,
        activities: 2000
      }
    }
  },

  Wayanad: {
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    activities: [
      "Visit Edakkal Caves",
      "Explore Banasura Sagar Dam",
      "Visit Pookode Lake",
      "Explore Soochipara Waterfalls",
      "Enjoy a nature walk"
    ],
    costs: {
      budget: {
        transport: 700,
        accommodation: 900,
        food: 450,
        activities: 250
      },
      standard: {
        transport: 1300,
        accommodation: 2000,
        food: 750,
        activities: 500
      },
      premium: {
        transport: 2200,
        accommodation: 4000,
        food: 1400,
        activities: 1000
      }
    }
  },

  Ooty: {
    location: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    activities: [
      "Visit Ooty Botanical Garden",
      "Explore Ooty Lake",
      "Enjoy the Nilgiri Mountain Railway",
      "Visit Doddabetta Peak",
      "Explore tea plantations"
    ],
    costs: {
      budget: {
        transport: 900,
        accommodation: 1000,
        food: 500,
        activities: 300
      },
      standard: {
        transport: 1600,
        accommodation: 2300,
        food: 850,
        activities: 600
      },
      premium: {
        transport: 2800,
        accommodation: 4500,
        food: 1600,
        activities: 1200
      }
    }
  },

  Alleppey: {
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    activities: [
      "Enjoy a backwater cruise",
      "Visit Alappuzha Beach",
      "Explore local villages",
      "Experience a traditional houseboat",
      "Enjoy Kerala cuisine"
    ],
    costs: {
      budget: {
        transport: 600,
        accommodation: 1000,
        food: 500,
        activities: 400
      },
      standard: {
        transport: 1200,
        accommodation: 2500,
        food: 850,
        activities: 1000
      },
      premium: {
        transport: 2200,
        accommodation: 5500,
        food: 1600,
        activities: 2500
      }
    }
  }
};

export default tripPlans;