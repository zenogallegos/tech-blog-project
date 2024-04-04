const { Post } = require('../models');

const postData = [
    {
        title: "Harvested Some Corn",
        content: "Harvested some corn today. It was good.",
        // date_created: "2023-9-10",
        user_id: 3
    },
    {
        title: "Facts:",
        content: "I'm the coolest guy around.",
        // date_created: "2024-02-25",
        user_id: 2
    },
    {
        title: "More Facts",
        content: "Still the coolest guy around.",
        // date_created: "2024-02-26",
        user_id: 2
    },
    {
        title: "My First Post",
        content: "This is my first post. Hello.",
        // date_created: "2024-04-1",
        user_id: 1
    },
    {
        title: "Tech Posts?",
        content: "No one is posting about tech stuff...",
        // date_created: "2024-04-2",
        user_id: 4
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;