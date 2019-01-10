export default {
    count: 0,
    data: [],
    dateTimes: [

        {
            date: 'December 17, 2018',
            data: [
                {
                    location: 'City of Industry',
                    amount: 270,
                    companyName: 'Durasale',
                    deliveryPerDay: 1,
                    deliveries: [
                {
                    pickupTime: '10am',
                    deliveryTime: '12pm',
                    amountPerDelivery: 1
                }
                ]
                },
                {
                    date: 'December 17, 2018',
                    location: 'Redlands',
                    amount: 472,
                    companyName: 'New Page Production',
                    deliveryPerDay: 3,
                    deliveries: [
                {
                    pickupTime: '10am',
                    deliveryTime: '12pm',
                    amountPerDelivery: 2
                },
                {
                    pickupTime: '12pm',
                    deliveryTime: '2pm',
                    amountPerDelivery: 1
                }
            ]
                }
            ]
            
        },
        {
            date: 'December 18, 2018',
            data: [
                {
                location: 'Torrance',
                amount: 198,
                companyName: 'VIRCO',
                deliveryPerDay: 2,
                deliveries: [
                {
                    pickupTime: '10am',
                    deliveryTime: '12pm',
                    amountPerDelivery: 1
                },
                {
                    pickupTime: '12pm',
                    deliveryTime: '2pm',
                    amountPerDelivery: 1
                }
                ]
                }
            ]
            
        }
    ]
}
