const Workouts = [
    { 
        id: 0, 
        title: 'Abs crusher', 
        bestScore: 0, 
        workoutCount: 0, 
        description: 'How far can you go?', 
        exercises: [
            {
                type: 'amount',
                name: 'Ab Crunches',
                amount: 20,
            },
            {
                type: 'amount',
                name: 'V-Ups',
                amount: 16,
            },
            {
                type: 'amount',
                name: 'Leg Raises',
                amount: 25,
            },
            {
                type: 'countDown',
                name: 'Plank',
                time: 60,
            },            
            {
                type: 'amount',
                name: 'V-Ups',
                amount: 20,
            },
        ],
        bgImage: { uri: 'https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg' }, 
        colors: ['#00b79f', '#00e0c2'], 
        iconName: 'table' 
    },
    { 
        id: 1, 
        title: '100 Push-up challenge', 
        bestScore: 0, 
        workoutCount: 0, 
        description: 'You have to do 100 pushups as fast as possible', 
        exercises: [
            {
                type: 'timed',
                name: 'Push-ups',
                amount: 100,
            }
        ],
        bgImage: { uri: 'https://c.pxhere.com/photos/bc/e5/fitness_weight_man_guy_male-155257.jpg!d' }, 
        colors: ['#FC5F69', '#FF9166'], 
        iconName: 'timer' 
    },
    { 
        id: 2, 
        title: 'Bring it up', 
        bestScore: 0, 
        workoutCount: 0, 
        description: 'Can you last the hole track?', 
        exercises: [
            {
                type: 'bringItUp'
            }
        ],
        bgImage: { uri: 'https://c.pxhere.com/photos/bc/1b/african_ethnicity_beats_black_guy_headphones_hearing_listen_man-963087.jpg!d' }, 
        colors: ['#473CC7', '#347bed'], 
        iconName: 'dumbbell' 
    },
    { 
        id: 3, 
        title: 'Arm challenge', 
        bestScore: 0, 
        workoutCount: 0, 
        description: 'This workout is garantied a big challenge', 
        exercises: [
            {
                type: 'amount',
                name: 'Diamond Push-ups',
                amount: 15,
            },
            {
                type: 'amount',
                name: 'Declined Push-ups',
                amount: 16,
            },
            {
                type: 'amount',
                name: 'Dips',
                amount: 15,
            }
        ],
        bgImage: { uri: 'https://media.defense.gov/2012/Nov/29/2000093493/780/780/0/120425-F-WM587-159w.JPG' }, 
        colors: ['#734DEE', '#5325ea'], 
        iconName: 'timer' 
    }
];

export default Workouts;
