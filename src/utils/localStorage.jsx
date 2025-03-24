const employees = [
    {
        "id": 1,
        "firstName": "JIMMY",
        "email": "e1@gg.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 3,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Unwrap props",
                "taskDescription": "Unwrap all props to get them ready for texturing",
                "taskDate": "07.07.2030",
                "category": "3D Art"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize 3D assets",
                "taskDescription": "Optimize textures and meshes for performance",
                "taskDate": "09.07.2030",
                "category": "3D Art"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create environment textures",
                "taskDescription": "Create realistic textures for the environment",
                "taskDate": "12.07.2030",
                "category": "3D Art"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Refine character models",
                "taskDescription": "Refine character models for better detail",
                "taskDate": "12.07.2030",
                "category": "3D Art"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Texture optimization",
                "taskDescription": "Optimized all textures for better performance",
                "taskDate": "10.07.2030",
                "category": "3D Art"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize props for export",
                "taskDescription": "Finalized all props for export to game engine",
                "taskDate": "13.07.2030",
                "category": "3D Art"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix UV mapping errors",
                "taskDescription": "Fix errors in UV mapping that were causing texture issues",
                "taskDate": "16.07.2030",
                "category": "3D Art"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "EMILY",
        "email": "e2@gg.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 2,
            "completed": 4,
            "failed": 1
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create UI mockups",
                "taskDescription": "Design UI mockups for the inventory system",
                "taskDate": "06.07.2030",
                "category": "UI Design"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Revise HUD layout",
                "taskDescription": "Update the HUD for better clarity and usability",
                "taskDate": "02.05.2030",
                "category": "UI Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design main menu screen",
                "taskDescription": "Create a new design for the main menu interface",
                "taskDate": "09.07.2030",
                "category": "UI Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Implement HUD updates",
                "taskDescription": "Implement the updated HUD design into the game",
                "taskDate": "10.07.2030",
                "category": "UI Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create inventory icons",
                "taskDescription": "Design icons for all the inventory items",
                "taskDate": "03.07.2030",
                "category": "UI Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Refine HUD color scheme",
                "taskDescription": "Refine the HUD color scheme for better readability",
                "taskDate": "05.07.2030",
                "category": "UI Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix button layout",
                "taskDescription": "Fix issues with button layout in the HUD",
                "taskDate": "07.07.2030",
                "category": "UI Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "AHAD",
        "email": "e3@gg.com",
        "password": "123",
        "taskCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 3,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design level layout",
                "taskDescription": "Create a blueprint for the new forest level",
                "taskDate": "06.07.2030",
                "category": "Level Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Adjust level lighting",
                "taskDescription": "Improve lighting for better mood and ambiance",
                "taskDate": "08.07.2030",
                "category": "Level Design"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design new enemy encounters",
                "taskDescription": "Design new enemy encounters for the forest level",
                "taskDate": "11.07.2030",
                "category": "Level Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Refine terrain details",
                "taskDescription": "Add detailed terrain features to the forest level",
                "taskDate": "12.07.2030",
                "category": "Level Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix lighting glitches",
                "taskDescription": "Fixed issues with the lighting system in the forest level",
                "taskDate": "09.07.2030",
                "category": "Level Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize level layout",
                "taskDescription": "Finalized the layout and key features of the forest level",
                "taskDate": "10.07.2030",
                "category": "Level Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix terrain glitches",
                "taskDescription": "Fix glitches in the terrain that cause visual issues",
                "taskDate": "14.07.2030",
                "category": "Level Design"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "JARED",
        "email": "e4@gg.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 0,
            "failed": 2
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement player animations",
                "taskDescription": "Add animations for player actions",
                "taskDate": "11.07.2030",
                "category": "Programming"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix input lag",
                "taskDescription": "Optimize input handling to reduce latency",
                "taskDate": "07.07.2030",
                "category": "Programming"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement AI behavior",
                "taskDescription": "Create AI behavior for enemy NPCs",
                "taskDate": "15.07.2030",
                "category": "Programming"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize pathfinding",
                "taskDescription": "Optimize pathfinding for NPCs to improve performance",
                "taskDate": "13.07.2030",
                "category": "Programming"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix animation glitches",
                "taskDescription": "Fix issues with character animations",
                "taskDate": "10.07.2030",
                "category": "Programming"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix camera issue",
                "taskDescription": "Fix camera issues that cause the game to glitch",
                "taskDate": "14.07.2030",
                "category": "Programming"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "KIM",
        "email": "e5@gg.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Compose ambient music",
                "taskDescription": "Create background music for the cave level",
                "taskDate": "04.07.2030",
                "category": "Audio Design"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design sound effects",
                "taskDescription": "Create effects for player interactions",
                "taskDate": "06.07.2030",
                "category": "Audio Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Create battle music",
                "taskDescription": "Compose music for battle sequences",
                "taskDate": "08.07.2030",
                "category": "Audio Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design cave ambiance",
                "taskDescription": "Design the ambient sound effects for the cave level",
                "taskDate": "05.07.2030",
                "category": "Audio Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix sound mixing",
                "taskDescription": "Fix issues with sound mixing and volume balance",
                "taskDate": "07.07.2030",
                "category": "Audio Design"
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "a1@gg.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    // Only initialize storage if the keys don't already exist
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
    // Parse stored values with fallback defaults
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const storedAdmin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees: storedEmployees, admin: storedAdmin };
};

export const updateLocalStorage = (updatedEmployees) => {
    // Update only the employees key in localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
};
