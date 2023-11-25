export const OrderData=[
    {
        id:1,
        customerName:"Daniel Mawasha",
        modeOfTransport:"Delivery",
        address:"12th avenue strt, Ladine, Polokwane",
        orderNo:"#343hqgqg34h",
        isPaid:true,
        amount:1890.00,
        products:[
            {
                id:1,
                name:"Macaramba Spinach",
                quantity:2,
            },
            {
                id:2,
                name:"Cabbage x10",
                quantity:2,
            }
        ],
        despatchDate:new Date('2022-05-15 14:30'),
        status: "pending"
    },
    {
        id:2,
        customerName:"Andries Sebola",
        modeOfTransport:"Collection",
        address:"",
        orderNo:"#343hqgqg34h",
        isPaid:true,
        amount:1190.00,
        products:[
            {
                id:1,
                name:"Apples x4",
                quantity:5,
            },
            {
                id:2,
                name:"Grapes x9",
                quantity:8,
            }
        ],
        despatchDate:new Date('2022-05-15 10:00'),
        status: "completed"
    },
    {
        id:3,
        customerName:"Tyson Motlhabeng",
        modeOfTransport:"Collection",
        address:"",
        orderNo:"#343hqgqg34h",
        isPaid:true,
        amount:790.67,
        products:[
            {
                id:1,
                name:"Bananas x19",
                quantity:4,
            },
            {
                id:2,
                name:"Grapes x4",
                quantity:4,
            }
        ],
        despatchDate:new Date('2022-05-15 12:40'),
        status: "delivered"
    },
]