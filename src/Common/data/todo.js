import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-3.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";

const todoList = [{
    id: '1',
    checkedElem: false,
    todo: 'Added Email Templates',
    assignedto: [{
        id: 1,
        name: "Curtis Saenz",
        avatar: { src: avatar1 },
    }, {
        id: 2,
        name: "John Robles",
        avatar: { src: avatar3 },
    }
    ],
    dueDate: '03 Apr, 2022',
    status: 'Inprogress',
    priority: "High"
}, {
    id: '2',
    checkedElem: false,
    todo: 'Additional Mailbox',
    assignedto: [{
        id: 3,
        name: "Virgie Price",
        avatar: { src: avatar5 },
    }, {
        id: 4,
        name: "Diego Norris",
        avatar: { src: avatar9 },
    }, {
        id: 5,
        name: "Anthony Mills",
        avatar: { src: avatar10 },
    }
    ],
    dueDate: '02 Apr, 2022',
    status: 'Pending',
    priority: "Medium"
}, {
    id: '3',
    checkedElem: true,
    todo: 'Make a creating an account profile',
    assignedto: [{
        id: 6,
        name: "Virgie Price",
        avatar: { src: avatar5 },
    }, {
        id: 7,
        name: "Marian Angel",
        avatar: { src: avatar6 },
    }, {
        id: 8,
        name: "Johnnie Walton",
        avatar: { src: avatar7 },
    }, {
        id: 9,
        name: "Donna Weston",
        avatar: { src: avatar8 },
    }
    ],
    dueDate: '02 May, 2022',
    status: 'Completed',
    priority: "Low"
}, {
    id: '4',
    checkedElem: false,
    todo: 'Added new tabs styles',
    assignedto: [{
        id: 10,
        name: "James Forbes",
        avatar: { src: avatar2 },
    }
    ],
    dueDate: '01 May, 2022',
    status: 'New',
    priority: "Low"
}, {
    id: '5',
    checkedElem: false,
    todo: 'Added bdge new style - gradient',
    assignedto: [{
        id: 11,
        name: "John Robles",
        avatar: { src: avatar3 },
    }, {
        id: 12,
        name: "Anthony Mills",
        avatar: { src: avatar10 },
    }, {
        id: 13,
        name: "Diego Norris",
        avatar: { src: avatar9 },
    }
    ],
    dueDate: '01 May, 2022',
    status: 'Inprogress',
    priority: "Medium"
}, {
    id: '6',
    checkedElem: false,
    todo: 'Added Back to Top button',
    assignedto: [{
        id: 14,
        name: "Marian Angel",
        avatar: { src: avatar6 },
    }, {
        id: 15,
        name: "Johnnie Walton",
        avatar: { src: avatar7 },
    }
    ],
    dueDate: '30 Apr, 2022',
    status: 'Inprogress',
    priority: "High"
}, {
    id: '7',
    checkedElem: true,
    todo: 'Added File Manager Apps',
    assignedto: [{
        id: 16,
        name: "John Robles",
        avatar: { src: avatar3 },
    }, {
        id: 17,
        name: "Mary Gant",
        avatar: { src: avatar4 },
    }, {
        id: 18,
        name: "Virgie Price",
        avatar: { src: avatar5 },
    }
    ],
    dueDate: '29 Apr, 2022',
    status: 'Completed',
    priority: "Medium"
}, {
    id: '8',
    checkedElem: false,
    todo: 'Datatable with jQuery cdn',
    assignedto: [{
        id: 19,
        name: "Marian Angel",
        avatar: { src: avatar6 },
    }, {
        id: 20,
        name: "Johnnie Walton",
        avatar: { src: avatar7 },
    }, {
        id: 21,
        name: "Donna Weston",
        avatar: { src: avatar8 },
    }
    ],
    dueDate: '28 Apr, 2022',
    status: 'Pending',
    priority: "High"
}, {
    id: '9',
    checkedElem: false,
    todo: 'Profile Page Structure',
    assignedto: [{
        id: 22,
        name: "Mary Gant",
        avatar: { src: avatar4 },
    }, {
        id: 23,
        name: "Virgie Price",
        avatar: { src: avatar5 },
    }
    ],
    dueDate: '27 Apr, 2022',
    status: 'New',
    priority: "Low"
}, {
    id: '10',
    checkedElem: true,
    todo: 'Make a creating an account profile',
    assignedto: [{
        id: 24,
        name: "John Robles",
        avatar: { src: avatar3 },
    }
    ],
    dueDate: '26 Apr, 2022',
    status: 'Completed',
    priority: "Medium"
}, {
    id: '11',
    checkedElem: true,
    todo: 'Change email option process',
    assignedto: [{
        id: 25,
        name: "John Robles",
        avatar: { src: avatar3 },
    }, {
        id: 26,
        name: "Anthony Mills",
        avatar: { src: avatar10 },
    }, {
        id: 27,
        name: "Diego Norris",
        avatar: { src: avatar9 },
    }
    ],
    dueDate: '25 Apr, 2022',
    status: 'Completed',
    priority: "High"
}, {
    id: '12',
    checkedElem: false,
    todo: 'Brand Logo design',
    assignedto: [{
        id: 28,
        name: "James Forbes",
        avatar: { src: avatar2 },
    }, {
        id: 29,
        name: "Anthony Mills",
        avatar: { src: avatar10 },
    }, {
        id: 30,
        name: "Diego Norris",
        avatar: { src: avatar9 },
    }
    ],
    dueDate: '25 Apr, 2022',
    status: 'New',
    priority: "Medium"
}, {
    id: '13',
    checkedElem: false,
    todo: 'Add Dynamic Contact List',
    assignedto: [{
        id: 31,
        name: "Virgie Price",
        avatar: { src: avatar5 },
    }, {
        id: 32,
        name: "Marian Angel",
        avatar: { src: avatar6 },
    }, {
        id: 33,
        name: "Johnnie Walton",
        avatar: { src: avatar7 },
    }, {
        id: 34,
        name: "Donna Weston",
        avatar: { src: avatar8 },
    }
    ],
    dueDate: '24 Apr, 2022',
    status: 'Inprogress',
    priority: "Low"
}, {
    id: '14',
    checkedElem: true,
    todo: 'Additional Calendar',
    assignedto: [{
        id: 35,
        name: "Virgie Price",
        avatar: { src: avatar5 },
    }, {
        id: 36,
        name: "Diego Norris",
        avatar: { src: avatar9 },
    }, {
        id: 37,
        name: "Anthony Mills",
        avatar: { src: avatar10 },
    }
    ],
    dueDate: '23 Apr, 2022',
    status: 'Completed',
    priority: "Medium"
}, {
    id: '15',
    checkedElem: false,
    todo: 'Added Select2',
    assignedto: [{
        id: 38,
        name: "Curtis Saenz",
        avatar: { src: avatar1 },
    }, {
        id: 39,
        name: "John Robles",
        avatar: { src: avatar3 },
    }
    ],
    dueDate: '23 Apr, 2022',
    status: 'Pending',
    priority: "High"
}];

//modal simplebar imges
const todoimg = [
    {
        id: 1,
        avatar: { src: avatar2 },
        name: "James Forbes"
    },
    {
        id: 2,
        avatar: { src: avatar3 },
        name: "John Robles"
    },
    {
        id: 3,
        avatar: { src: avatar6 },
        name: "Mary Gant"
    },
    {
        id: 4,
        avatar: { src: avatar1 },
        name: "Curtis Saenz"
    },
    {
        id: 5,
        avatar: { src: avatar5 },
        name: "Virgie Price"
    },
    {
        id: 6,
        avatar: { src: avatar4 },
        name: "Anthony Mills"
    },
    {
        id: 7,
        avatar: { src: avatar10 },
        name: "Marian Angel"
    },
    {
        id: 8,
        avatar: { src: avatar7 },
        name: "Johnnie Walton"
    },
    {
        id: 9,
        avatar: { src: avatar8 },
        name: "Donna Weston"
    },
    {
        id: 10,
        avatar: { src: avatar9 },
        name: "Diego Norris"
    }
]

const insights = [
    { id: 1, icon: "FolderGit2", name: "Reporting" },
    { id: 2, icon: "Boxes", name: "General" },
    { id: 3, icon: "Gem", name: "Upcoming Project" },
    { id: 4, icon: "Puzzle", name: "Random" },
]

//  project 

const project = [
    { id: 1, icon: "FolderGit2", name: "Steex" },
    { id: 2, icon: "Boxes", name: "Judia" },
    { id: 3, icon: "Gem", name: "Velzon" },
    { id: 4, icon: "Puzzle", name: "Hybrix" },
]

export {todoList, todoimg, insights, project }