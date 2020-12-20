const carData = [
    {
        front: {
            title: 'Car 1',
            price: '40 000 $',
            imageSrc: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '01',
    },

    {
        front: {
            title: 'Car 2',
            price: '100 000 $',
            imageSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '02',
    },

    {
        front: {
            title: 'Car 3',
            price: '35 000 $',
            imageSrc: 'https://cdn.sixt.io/cms/originals/039342f4-ad20-48bc-bdc7-50a7ac82b4cb.jpeg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '03',
    },

    {
        front: {
            title: 'Car 4',
            price: '350 000 $',
            imageSrc: 'https://cdn.carbuzz.com/gallery-images/840x560/788000/900/788911.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '04',
    },

    {
        front: {
            title: 'Car 5',
            price: '30 000 $',
            imageSrc: 'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '05',
    },

    {
        front: {
            title: 'Car 6',
            price: '400 000 $',
            imageSrc: 'https://bgr.com/wp-content/uploads/2016/03/koenigsess-one.jpg?quality=70&strip=all',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '06',
    },

    {
        front: {
            title: 'Car 7',
            price: '500 000 $',
            imageSrc: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/listicle/hero_image/2020-Bugatti%20Centodieci-1001x565-%282%29.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '07',
    },

    {
        front: {
            title: 'Car 8',
            price: '150 000 $',
            imageSrc: 'https://o.aolcdn.com/images/dims3/GLOB/crop/1920x1081+0+180/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/dc757ce91beebea5058dcaa16d17b33c/202538572/01-2016-shelby-gt350-fd.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '08',
    },

    {
        front: {
            title: 'Car 9',
            price: '200 000 $',
            imageSrc: 'https://thumbor.forbes.com/thumbor/trim/299x201:2851x1638/fit-in/711x400/smart/https://specials-images.forbesimg.com/imageserve/5d37046395e0230008f64edf/0x0.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '09',
    },

    {
        front: {
            title: 'Car 10',
            price: '300 000 $',
            imageSrc: 'https://oracleoftime.com/wp-content/uploads/2020/09/Hyperion-XP-1-featured-1.jpg',
        },
        back: {
            description: 'How do you pick the right Car of the Year when so many cars are so good? You can choose the car you’d drive if you had Wall Street money (Flash: Porsche 911 Named Car of the Year Again). You can award the vehicle that drives over boulders (Flash: Jeep Gladiator Honored). You can call on your must-be-Motown roots (Flash: Corvette Wins Car of the Year Again), especially this year when the Corvette is a legit choice.',
        },
        id: '10',
    },

  ]

  export default carData;