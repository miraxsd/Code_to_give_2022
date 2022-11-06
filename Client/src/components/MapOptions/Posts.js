const posts = [
    {
        id: 0,
        user:  "Bobby123",
        location: [17.966958, -66.123551],
        postType: "Issue",
        title: "Hurricane hit my city",
        description :
        "Last month, a hurricane hit my city and destroyed everything. My family was lucky, and our house was not really damaged, but most of my friends’ houses are gone. The power just came back, but we still don’t have clean water and food is hard to find. I don’t know how to help my community.",
        date: "4 days ago",
        liked: false,
        numberOfLikes: 110,
        comments: [{
            user: "juan908",
            location: [17.934013, -76.456299],
            comment:
            "I was in this situation last year, so I know it’s really hard. You can help by sharing some of your clothes and utilities with your friends who lost everything. Even if it’s just a couple of shirts, it will help a lot.",
            liked: false,
            numberOfLikes: 40
        }]
    },
    {
        id: 1,
        user : "Maria514",
        location: [45.569786, -73.585024],
        postType: "Issue",
        title: "Helping people that got hit by a hurricane",
        description:
        "There was a hurricane in my home country, and everything was destroyed. I want to help out, but I am so far away and I feel like I can’t do anything useful. Did someone ever live the same situation?",
        date: "2 weeks ago",
        liked: false,
        numberOfLikes: 70,
        comments: [{
            user: "Michelle777",
            location: [45.438565, -73.630295],
            comment: "Hi Maria, I never had something like that happen to me before, but I think you should look into non-profit organization like Red Cross. I’m sure that there are charities that work in your home country could use donations to help more people.",
            liked: false,
            numberOfLikes: 32
        }]
    },
    {
        id: 2,
        user : "Coco22",
        location: [34.489809, 69.224768],
        postType: "Issue",
        title: "Can't go to school just because I'm a girl",
        description: "I can’t go to school because I am a girl. I was going to school before, and I really liked it. Now, with the new president, no girls can go to school. I feel sad because I am forced to stay home, and I can’t see my friends.",
        date: "1 week ago",
        numberOfLikes: 90,
        liked: false,
        comments: [{
            user: "Marie90",
            location : [45.536941, -73.781572],
            comment: "I think you should try to do school at home. Where I’m from, some people are homeschooled. Maybe you can do that, so you can still learn many things. You can also invite your friends at home to study together.",
            liked: false,
            numberOfLikes: 30
        },
        {
            user: "Phillipe_r2",
            location: [29.693139, -95.419678],
            comment: "I don’t like school, so I think you’re lucky to get to stay home. You can just hang out with your friends at home.",
            liked: false,
            numberOfLikes: 10
        }]
    },
    {
        id: 3,
        user: "JeanPaul87",
        location: [44.250831, -76.514525],
        postType: "Idea",
        title: "Teaching practical life skills in school would be a game changer!",
        description: "I think we should have a life skills class in school. Like they could teach us how to do taxes, how to make a budget, how to change a tire and more. That’s all basic stuff everyone should know, so I don’t understand why we don’t learn this in school.",
        date: "2 hours ago",
        numberOfLikes: 102,
        liked: false,
        comments: [{
            user: "Antonio45",
            location: [44.784588, -68.853080],
            comment: "I agree with you. I just graduated high school and yet I feel like I don’t know anything useful in day-to-day life. Sure, I know how to do algebra, but I can’t cook, I don’t know how to manage my money and I don’t understand how credit and loans work.",
            liked: false,
            numberOfLikes: 13
        },
        {
            user: "Sonia_bts",
            location: [45.497395, -73.734461],
            comment: "In high school, I had an economic class where I learn how to manage money, fill out taxes, make a budget and even investing. I learned so much in this class, I still use my notes to this day. I think every school should offer a course like that.",
            liked: false,
            numberOfLikes: 16
        }]
    },
    {
        id: 4,
        user: "jonathan56",
        location: [45.393278, -71.935539],
        postType: "Issue",
        title: "Hard time concentrating in school. Any tips?",
        description: "I find it very difficult to concentrate when I’m studying. My parents want me to go to university, so I work very hard, but I am constantly distracted. Anytime I get a notification on my phone, I open it to check and usually spend the next hour on my phone just scrolling on social media. Does anyone have advice on how to concentrate better? Did this happen to anyone or I’m the only one?",
        date: "5 minutes ago",
        liked: false,
        numberOfLikes: 1,
        comments: []
    },
    {
        id: 5,
        user : "Leon121",
        location : [45.519017, -73.576269],
        postType: "Idea",
        title: "Ban cars! Go public transport!",
        description : "I think we should all use public transportation to travel instead of cars. I would be so much better for the environment. In the summer, we can just walk or use our bikes.",
        date: "1 days ago",
        numberOfLikes: 20,
        comments: [{
            user: "Laurie988",
            location: [45.071439, -72.655342],
            comment: "I think that’s a great idea if you like in a big city, but that’s not for everyone. I live outside a small city and I can’t do anything without a car. There’s no bus. If I wanna walk to any store it’s at least 45 minutes. Your idea is good, but we can’t do it everywhere.",
            liked: false,
            numberOfLikes: 15
        }]
    },
    {
        id: 6,
        user: "Fatima17",
        location: [27.156734, -80.264194],
        postType: "issue",
        title: "Trash everywhere in my community. It's sad",
        description: "When I walk around in my community, I notice that there is a lot more trash on the ground or in the water. Like, this morning, I went on a walk by the beach, and there was more plastic then seashells. How can I encourage people to clean up after themselves? And how can we remove all the trash that’s coming with the ocean?",
        date: "3 month ago",
        liked: false,
        numberOfLikes: 87,
        comments: [{
            user: "gilbert007",
            location: [42.481240, -70.968762],
            comment: "Hi Fatima17, I think there are robots that clean the ocean. Maybe you could convince people in your community to get one. These robots can remove a lot of the trash that’s floating around near the coast.",
            liked: false,
            numberOfLikes: 16
        }]     
    }
    ];
    
    export default posts;