export const home = (req,  res) =>  {
    res.render('pages/default.ejs', {
        title: 'dinosaurs aound the world',
        content: "welocome to the world of dinosaurs!",
        person: false,
        team: false,
        navItems: [
            {url: "/", text: "home"},
            {url: "/about", text: "about"},
            {url: "/contact", text: "contact"},
            {url: "/privacy", text: "privacy"}
        ]
    });
};

export const about = (req, res) =>  {
    res.render('pages/default', {
        title: 'about',
        content: 'this is a huge page about dinosaurs',
        person: false,
        team: ["trex", "stegosaurus", "velociraptor"],
        navItems: [
            {url: "/", text: "home"},
            {url: "/about", text: "about"},
            {url: "/contact", text: "contact"},
            {url: "/privacy", text: "privacy"}
        ]
    });
}

export const contact = (req, res) =>  {
    res.render('pages/default.ejs', {
        title: 'contact',
        content: 'contact us at ',
        person: false,
        team: false,
        navItems: [
            {url: "/", text: "home"},
            {url: "/about", text: "about"},
            {url: "/contact", text: "contact"},
            {url: "/privacy", text: "privacy"}
        ]
    })
}

export const privacy = (req, res) =>  {
    res.render('pages/default.ejs', {
        title: 'privacy',
        content: 'this is a huge page about privacy',
        person: false,
        navItems: [
            {url: "/", text: "home"},
            {url: "/about", text: "about"},
            {url: "/contact", text: "contact"},
            {url: "/privacy", text: "privacy"}
        ]
    });
}

export const person = (req, res) =>  {
    res.render('pages/default.ejs', {
        title: 'person',
        content: 'this is a huge page about a person',
        team: "default",
        person: {
            name: "frederick",
            age: 25,
            location: "USA",
            job: 'leerkacht'
        },
        navItems: [
            {url: "/", text: "home"},
            {url: "/about", text: "about"},
            {url: "/contact", text: "contact"},
            {url: "/privacy", text: "privacy"}
        ]
    })};


