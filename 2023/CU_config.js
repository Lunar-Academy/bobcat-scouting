var config_data = `
{
  "title": "",
  "page_title": "",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Name",
      "code": "s",
      "type": "scouter",
      "size": 15,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2022carv",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals",
        "de": "Double Elimination",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Left Community",
      "code": "alc",
      "type": "bool"
    },

    { "name": "Charging Station",
      "code": "ad",
      "type":"radio",
      "choices": {
        "e": "Engaged<br>", 
        "d": "Docked (not Engaged)<br>",
        "a": "Attempted docking but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
   
    { "name": "Teleop Scoring",
      "code": "tsg",
      "type": "array",
			"lowcone": {
				"tlc": ""
			},
			"midcone": {
				"tmc": ""
			},
			"highcone": {
				"thc": ""
			},
			"lowcube": {
				"tlcu": ""
			},
			"midcube": {
				"tmcu": ""
			},
			"highcube": {
				"thcu": ""
			}
    },


    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Picked up <strong>cones</strong> from <strong>floor (tipped)</strong>",
    "code": "pcf",
    "type": "bool"
    },
    { "name": "Picked up <strong>cones</strong> from <strong>floor (upright)</strong>",
    "code": "pcu",
    "type": "bool"
    },
    { "name": "Picked up <strong>cubes</strong> from <strong>floor</strong>",
    "code": "pcuu",
    "type": "bool"
    }

  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "e": "Engaged<br>",
        "d": "Docked (Not Engaged)",
        "p": "Parked",
        "n": "None"
      },
      "defaultValue": "n"
    },
    { "name": "Final Status",
    "code": "fsd",
    "type":"radio",
    "choices": {
      "a": "Attempted docking but failed",
      "x": "Did not attempt docking"
    },
    "defaultValue": "x"
    },

    { "name": "Total # of alliance robots docked/engaged",
      "code": "dn",
      "type": "counter",
      "max": 3
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },

    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "x": "Did not play defense",
        "b": "Below Average",
        "a": "Average",
        "g": "Good",
        "e": "Excellent"
      },
      "defaultValue": "x"
    },


    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Committed Fouls",
      "code": "foul",
      "type": "bool"
    },

    { "name": "Comments",
      "code": "co",
      "type": "comments",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
