{
  "tasks": {
    "description": {
      "type": "String",
      "example": "Regular around-the-house or daily activities. Can include music or hobby practice.",
      "description": "Defines the nature of this task category."
    },
    "takeTrashOut": {
      "type": "Object",
      "example": {
        "name": "Take trash out",
        "xp": 5,
        "difficulty": 1,
        "streakBonus": true
      },
      "description": "Removing household trash and disposing of it properly."
    },
    "dishes": {
      "type": "Object",
      "example": {
        "name": "Dishes",
        "xp": 5,
        "difficulty": 1,
        "streakBonus": true
      },
      "description": "Washing, drying, or putting away dishes."
    },
    "laundry": {
      "type": "Object",
      "example": {
        "name": "Laundry",
        "xp": 8,
        "difficulty": 2,
        "streakBonus": true
      },
      "description": "Washing, drying, folding, or putting away clothes."
    },
    "sweepVac": {
      "type": "Object",
      "example": {
        "name": "Sweep / vac",
        "xp": 6,
        "difficulty": 2,
        "streakBonus": true
      },
      "description": "Sweeping or vacuuming floors."
    },
    "tidy": {
      "type": "Object",
      "example": {
        "name": "Tidy",
        "xp": 4,
        "difficulty": 1,
        "streakBonus": true
      },
      "description": "General cleaning, organizing, or decluttering."
    },
    "toiletBathtub": {
      "type": "Object",
      "example": {
        "name": "Toilet / bathtub",
        "xp": 10,
        "difficulty": 3,
        "streakBonus": false
      },
      "description": "Cleaning bathroom fixtures."
    },
    "animalBoxBed": {
      "type": "Object",
      "example": {
        "name": "Animal box / bed",
        "xp": 7,
        "difficulty": 2,
        "streakBonus": true
      },
      "description": "Cleaning pet areas, litter boxes, or bedding."
    },
    "pullWeeds": {
      "type": "Object",
      "example": {
        "name": "Pull weeds",
        "xp": 8,
        "difficulty": 2,
        "streakBonus": false
      },
      "description": "Removing weeds from garden or yard."
    },
    "mobilityStretching": {
      "type": "Object",
      "example": {
        "name": "Mobility / Stretching",
        "xp": 5,
        "difficulty": 1,
        "streakBonus": true
      },
      "description": "Daily stretching, mobility work, or light physical maintenance."
    }
  }
}


{
  "quests": {
    "description": {
      "type": "String",
      "example": "Short out-of-house activities such as errands, appointments, or small adventures.",
      "description": "Defines the nature of this quest category."
    },

    "groceryRun": {
      "type": "Object",
      "example": {
        "name": "Grocery run",
        "xp": 12,
        "difficulty": 2,
        "streakBonus": true
      },
      "description": "Quick trip to buy food or essentials."
    },

    "postOffice": {
      "type": "Object",
      "example": {
        "name": "Post office",
        "xp": 10,
        "difficulty": 2,
        "streakBonus": false
      },
      "description": "Mailing packages or picking up deliveries."
    },

    "pharmacyPickup": {
      "type": "Object",
      "example": {
        "name": "Pharmacy pickup",
        "xp": 8,
        "difficulty": 1,
        "streakBonus": true
      },
      "description": "Picking up prescriptions or health items."
    },

    "haircut": {
      "type": "Object",
      "example": {
        "name": "Haircut",
        "xp": 15,
        "difficulty": 2,
        "streakBonus": false
      },
      "description": "Going to a barber or salon."
    },

    "clothesShopping": {
      "type": "Object",
      "example": {
        "name": "Clothes shopping",
        "xp": 18,
        "difficulty": 3,
        "streakBonus": false
      },
      "description": "Buying clothes or accessories."
    },

    "parkWalk": {
      "type": "Object",
      "example": {
        "name": "Park walk",
        "xp": 10,
        "difficulty": 1,
        "streakBonus": true
      },
      "description": "A short walk or relaxation time in a park."
    },

    "shortHike": {
      "type": "Object",
      "example": {
        "name": "Short hike",
        "xp": 20,
        "difficulty": 3,
        "streakBonus": false
      },
      "description": "A brief outdoor hike or trail walk."
    },

    "coffeeOuting": {
      "type": "Object",
      "example": {
        "name": "Coffee outing",
        "xp": 8,
        "difficulty": 1,
        "streakBonus": true
      },
      "description": "Going out for coffee or tea."
    },

    "visitFriend": {
      "type": "Object",
      "example": {
        "name": "Visit a friend",
        "xp": 16,
        "difficulty": 2,
        "streakBonus": false
      },
      "description": "A short social visit."
    },

    "libraryStop": {
      "type": "Object",
      "example": {
        "name": "Library stop",
        "xp": 12,
        "difficulty": 2,
        "streakBonus": true
      },
      "description": "Returning books or picking up new ones."
    }
  }
}

{
  "expeditions": {
    "description": {
      "type": "String",
      "example": "Big actions requiring effort. Can be team-based or solo. Serious but can be fun.",
      "description": "Defines the nature of this expedition category."
    },

    "campingBackpacking": {
      "type": "Object",
      "example": {
        "name": "Camping / Backpacking",
        "xp": 40,
        "difficulty": 4,
        "streakBonus": false
      },
      "description": "Overnight or multi-day outdoor trip requiring preparation and endurance."
    },

    "vacation": {
      "type": "Object",
      "example": {
        "name": "Vacation",
        "xp": 50,
        "difficulty": 3,
        "streakBonus": false
      },
      "description": "Traveling for rest, exploration, or adventure."
    },

    "practiceSeriously": {
      "type": "Object",
      "example": {
        "name": "Practice seriously",
        "xp": 25,
        "difficulty": 3,
        "streakBonus": false
      },
      "description": "Deep, focused practice session for a skill, sport, or craft."
    },

    "workWeekSchool": {
      "type": "Object",
      "example": {
        "name": "Work week / school",
        "xp": 30,
        "difficulty": 3,
        "streakBonus": false
      },
      "description": "A full week of structured work or education."
    },

    "competition": {
      "type": "Object",
      "example": {
        "name": "Competition",
        "xp": 45,
        "difficulty": 4,
        "streakBonus": false
      },
      "description": "Participating in a competitive event or tournament."
    },

    "lifeEvent": {
      "type": "Object",
      "example": {
        "name": "Life event",
        "xp": 60,
        "difficulty": 5,
        "streakBonus": false
      },
      "description": "Major personal milestone or significant event."
    },

    "newExperience": {
      "type": "Object",
      "example": {
        "name": "New experience",
        "xp": 35,
        "difficulty": 3,
        "streakBonus": false
      },
      "description": "Trying something unfamiliar or challenging for the first time."
    }
  }
}

