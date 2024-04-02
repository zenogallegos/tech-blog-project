const { Post } = require('../models');

const postData = [
    {
        title: "Harvested Some Corn",
        content: "Harvested some corn today. It was good.",
        date_created: "2023-9-10",
        created_by: 3
    },
    {
        title: "Facts:",
        content: "I'm the coolest guy around.",
        date_created: "2024-02-25",
        created_by: 2
    },
    {
        title: "More Facts",
        content: "Still the coolest guy around.",
        date_created: "2024-02-26",
        created_by: 2
    },
    {
        title: "My First Post",
        content: "This is my first post. Hello.",
        date_created: "2024-04-1",
        created_by: 1
    },
    {
        title: "Tech Posts?",
        content: "No one is posting about tech stuff...",
        date_created: "2024-04-2",
        created_by: 4
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;