module.exports = {
  json: {
    "title": "Fall Friendships",
    "completedHtml": "<div style = \"text-align:center\">Submitting...<br>Do not leave this page<br><br><div>",
    "pages": [
     {
      "name": "basic_information",
      "elements": [
       {
        "type": "text",
        "name": "first_name",
        "title": "First Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "last_name",
        "title": "Last Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "phone_number",
        "title": "Phone Number (optional)",
        "isRequired": false
       },
       {
        "type": "text",
        "name": "major",
        "title": "Major",
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "year",
        "title": "Year",
        "isRequired": true,
        "choices": [
         {
          "value": "freshman",
          "text": "Freshman"
         },
         {
          "value": "sophomore",
          "text": "Sophomore"
         },
         {
          "value": "junior",
          "text": "Junior"
         },
         {
          "value": "senior",
          "text": "Senior"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "gender",
        "title": "Gender",
        "isRequired": true,
        "hasOther": true,
        "choices": [
         {
          "value": "male",
          "text": "Male"
         },
         {
          "value": "female",
          "text": "Female"
         }
        ],
        "otherText": "Other (describe)"
       },
       {
        "type": "radiogroup",
        "name": "gender_preference",
        "title": "Gender preference for friends",
        "isRequired": true,
        "choices": [
         {
          "value": "male",
          "text": "Strictly Male"
         },
         {
          "value": "female",
          "text": "Strictly Female"
         },
         {
          "value": "mix",
          "text": "Any"
         }
        ],
        "otherText": "Other (describe)"
       },
       {
        "type": "radiogroup",
        "name": "location_on_campus",
        "title": "Where do you live on campus?",
        "isRequired": true,
        "hasOther": true,
        "choices": [
         {
          "value": "north_campus",
          "text": "North Campus"
         },
         {
          "value": "west_campus",
          "text": "West Campus"
         },
         {
          "value": "collegetown",
          "text": "Collegetown"
         }
        ],
        "otherText": "Other (describe)"
       }
      ],
      "title": "Basic Information:"
     },
     {
      "name": "basic_preferences",
      "elements": [
       {
        "type": "radiogroup",
        "name": "similar_or_different",
        "title": "Do you like meeting friends similar to you or whose interests are different?",
        "isRequired": true,
        "choices": [
         {
          "value": "similar",
          "text": "Similar interests"
         },
         {
          "value": "different",
          "text": "Different interests"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "friend_distribution",
        "title": "The distribution of friends you’d like to have",
        "isRequired": true,
        "choices": [
         {
          "value": "many_close",
          "text": "Many close friends"
         },
         {
          "value": "some_close",
          "text": "Many friends but some close friends"
         },
         {
          "value": "few_close",
          "text": "Few close friends"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "movie_genre",
        "title": "Favorite movie genre",
        "isRequired": true,
        "choices": [
         {
          "value": "romance",
          "text": "Romance"
         },
         {
          "value": "comedy",
          "text": "Comedy"
         },
         {
          "value": "thriller",
          "text": "Action/Thriller"
         },
         {
          "value": "horror",
          "text": "Horror"
         },
         {
          "value": "superhero",
          "text": "Superhero"
         },
         {
          "value": "dont_watch",
          "text": "I don't watch too many movies"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "book_genre",
        "title": "Favorite book genre",
        "isRequired": true,
        "choices": [
         {
          "value": "romance",
          "text": "Romance"
         },
         {
          "value": "comics",
          "text": "Comics"
         },
         {
          "value": "thriller",
          "text": "Thriller"
         },
         {
          "value": "horror",
          "text": "Horror"
         },
         {
          "value": "mystery",
          "text": "Mystery"
         },
         {
          "value": "nonfiction",
          "text": "Non-fiction"
         },
         {
          "value": "dont_read",
          "text": "I don't read too many books"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "sleeping_habits",
        "title": "Sleeping habits",
        "isRequired": true,
        "choices": [
         {
          "value": "erratic",
          "text": "Erratic"
         },
         {
          "value": "dont_sleep",
          "text": "I don't sleep"
         },
         {
          "value": "early_early",
          "text": "Early sleeper early riser"
         },
         {
          "value": "early_late",
          "text": "Early sleeper late riser"
         },
         {
          "value": "late_early",
          "text": "Late sleeper early riser"
         },
         {
          "value": "late_late",
          "text": "Late sleeper late riser"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "text_response_time",
        "title": "How quickly do you respond to texts?",
        "isRequired": true,
        "choices": [
         {
          "value": "instantly",
          "text": "Instantly"
         },
         {
          "value": "hour",
          "text": "Within the hour"
         },
         {
          "value": "few_hours",
          "text": "In a few hours"
         },
         {
          "value": "within_day",
          "text": "Within a day"
         },
         {
          "value": "days",
          "text": "In a few days"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "text_or_call",
        "title": "Do you prefer texting someone or calling someone?",
        "isRequired": true,
        "choices": [
         {
          "value": "text",
          "text": "Texting"
         },
         {
          "value": "call",
          "text": "Calling"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "recharge_by",
        "title": "You recharge by...",
        "isRequired": true,
        "choices": [
         {
          "value": "alone",
          "text": "Spending time alone"
         },
         {
          "value": "with_people",
          "text": "Spending time with people"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "extracurriculars",
        "title": "Do you participate in (or plan to participate in)…",
        "choices": [
         {
          "value": "arts",
          "text": "Arts (Painting, dance, theater, etc.)"
         },
         {
          "value": "student_gov",
          "text": "Student Government"
         },
         {
          "value": "sports",
          "text": "Sports"
         },
         {
          "value": "religious",
          "text": "Religious organizations"
         },
         {
          "value": "social_activism",
          "text": "Social activism organisations"
         },
         {
          "value": "professional_orgs",
          "text": "Professional Organizations"
         },
         {
          "value": "project_teams",
          "text": "Project Teams"
         },
        ]
       },
       {
        "type": "text",
        "name": "hobbies",
        "title": "Please list your hobbies, comma separated. e.g. tennis, call of duty, swimming, travelling, ...",
        "isRequired": false
       },
      ],
      "title": "Basic Preferences:"
     },
     {
      "name": "deep_dive",
      "elements": [
       {
        "type": "radiogroup",
        "name": "perfect_day",
        "title": "What would be your perfect day?",
        "isRequired": true,
        "choices": [
         {
          "value": "outdoor_adventure",
          "text": "Going on an outdoor adventure"
         },
         {
          "value": "netflix",
          "text": "Watching Netflix"
         },
         {
          "value": "meet_people",
          "text": "Meeting new people"
         },
         {
          "value": "food",
          "text": "Trying new cuisines"
         },
         {
          "value": "museums",
          "text": "Explore museums"
         },
         {
          "value": "games",
          "text": "Playing video games"
         },
         {
          "value": "sleep",
          "text": "Sleeping"
         },
         {
          "value": "hang",
          "text": "Hanging out with close friends"
         },
         {
          "value": "explore",
          "text": "Exploring a city"
         },
         {
          "value": "study",
          "text": "Studying"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "plans_ruined",
        "title": "Your plans get messed up for the day. You then…",
        "isRequired": true,
        "choices": [
         {
          "value": "shift_schedule",
          "text": "Shift your day’s schedule"
         },
         {
          "value": "go_flow",
          "text": "Go with the flow"
         },
         {
          "value": "cancel",
          "text": "Cancel all your plans"
         },
         {
          "value": "new_plans",
          "text": "Contact someone to make entirely new plans"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "meal",
        "title": "Who would you want to have a meal with?",
        "isRequired": true,
        "choices": [
         {
          "value": "politics",
          "text": "Your favorite political leader"
         },
         {
          "value": "artist",
          "text": "Your favorite artist/musician"
         },
         {
          "value": "athlete",
          "text": "Your favorite athlete"
         },
         {
          "value": "scientist",
          "text": "Your favorite scientist"
         },
         {
          "value": "entreprenuer",
          "text": "Your favorite entrepreneur"
         },
         {
          "value": "actor",
          "text": "Your favorite actor/actress"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "decision",
        "title": "You have to make a decision. You...",
        "isRequired": true,
        "choices": [
         {
          "value": "gut",
          "text": "Go with your gut"
         },
         {
          "value": "ask",
          "text": "Ask your friends and family"
         },
         {
          "value": "research",
          "text": "Gather more information online"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "time_with_friends",
        "title": "What do you like to do in your spare time with friends?",
        "isRequired": true,
        "choices": [
         {
          "value": "netflix",
          "text": "Watch a movie / netflix"
         },
         {
          "value": "sports",
          "text": "Play sports"
         },
         {
          "value": "gym",
          "text": "Go to the gym"
         },
         {
          "value": "food",
          "text": "Explore new restaurants"
         },
         {
          "value": "games",
          "text": "Video games"
         },
         {
          "value": "party",
          "text": "Go partying"
         },
         {
          "value": "study",
          "text": "Study"
         }
        ]
       }
      ],
      "title": "Deep Dive:"
     }
    ]
   }
    
}