const dataGroupedHistogram = [
    {
        name: 'London',
        month: 'Jan.',
        rainfall: 18.9,
    },
    {
        name: 'London',
        month: 'Feb.',
        rainfall: 28.8,
    },
    {
        name: 'London',
        month: 'Mar.',
        rainfall: 39.3,
    },
    {
        name: 'London',
        month: 'Apr.',
        rainfall: 81.4,
    },
    {
        name: 'London',
        month: 'May',
        rainfall: 47,
    },
    {
        name: 'London',
        month: 'Jun.',
        rainfall: 20.3,
    },
    {
        name: 'London',
        month: 'Jul.',
        rainfall: 24,
    },
    {
        name: 'London',
        month: 'Aug.',
        rainfall: 35.6,
    },
    {
        name: 'Berlin',
        month: 'Jan.',
        rainfall: 12.4,
    },
    {
        name: 'Berlin',
        month: 'Feb.',
        rainfall: 23.2,
    },
    {
        name: 'Berlin',
        month: 'Mar.',
        rainfall: 34.5,
    },
    {
        name: 'Berlin',
        month: 'Apr.',
        rainfall: 99.7,
    },
    {
        name: 'Berlin',
        month: 'May',
        rainfall: 52.6,
    },
    {
        name: 'Berlin',
        month: 'Jun.',
        rainfall: 35.5,
    },
    {
        name: 'Berlin',
        month: 'Jul.',
        rainfall: 37.4,
    },
    {
        name: 'Berlin',
        month: 'Aug.',
        rainfall: 42.4,
    },
];

const stackgroupdata = [
    {
        product_type: "Office Supplies",
        zender: "male",
        order_amt: 8,
        product_sub_type: "Eraser"
    },
    {
        product_type: "Office Supplies",
        zender: "male",
        order_amt: 10,
        product_sub_type: "bookshelf"
    },
    {
        product_type: "Office Supplies",
        zender: "male",
        order_amt: 20,
        product_sub_type: "Inkstone"
    },
    {
        product_type: "Office Supplies",
        zender: "female",
        order_amt: 13,
        product_sub_type: "Inkstone"
    },
    {
        product_type: "Office Supplies",
        zender: "female",
        order_amt: 21,
        product_sub_type: "Eraser"
    },
    {
        product_type: "Office Supplies",
        zender: "female",
        order_amt: 21,
        product_sub_type: "bookshelf"
    },
    {
        product_type: "appliances",
        zender: "male",
        order_amt: 13,
        product_sub_type: "washing machine"
    },
    {
        product_type: "appliances",
        zender: "female",
        order_amt: 2,
        product_sub_type: "washing machine"
    },
    {
        product_type: "appliances",
        zender: "male",
        order_amt: 5,
        product_sub_type: "oven"
    },
    {
        product_type: "appliances",
        zender: "male",
        order_amt: 14,
        product_sub_type: "cooker"
    },
    {
        product_type: "appliances",
        zender: "female",
        order_amt: 23,
        product_sub_type: "oven"
    },
    {
        product_type: "appliances",
        zender: "female",
        order_amt: 23,
        product_sub_type: "cooker"
    },

    {
        product_type: "electronic product",
        zender: "male",
        order_amt: 33,
        product_sub_type: "computer"
    },
    {
        product_type: "electronic product",
        zender: "female",
        order_amt: 4,
        product_sub_type: "computer"
    },
    {
        product_type: "electronic product",
        zender: "female",
        order_amt: 23,
        product_sub_type: "switch"
    },
    {
        product_type: "electronic product",
        zender: "male",
        order_amt: 20.9,
        product_sub_type: "switch"
    },
    {
        product_type: "electronic product",
        zender: "male",
        order_amt: 5.9,
        product_sub_type: "mouse"
    },
    {
        product_type: "electronic product",
        zender: "female",
        order_amt: 5.9,
        product_sub_type: "mouse"
    }
];

const roundedcolumnchart = [
    { city: "Shijiazhuang", type: "fruit", value: 14500 },
    { city: "Shijiazhuang", type: "noodles", value: 8500 },
    { city: "Shijiazhuang", type: "snacks", value: 10000 },
    { city: "Shijiazhuang", type: "tea", value: 7000 },
    { city: "Shenzhen", type: "fruit", value: 9000 },
    { city: "Shenzhen", type: "noodles", value: 8500 },
    { city: "Shenzhen", type: "snacks", value: 11000 },
    { city: "Shenzhen", type: "tea", value: 6000 },
    { city: "wenzhou", type: "fruit", value: 16000 },
    { city: "wenzhou", type: "noodles", value: 5000 },
    { city: "wenzhou", type: "snacks", value: 6000 },
    { city: "wenzhou", type: "tea", value: 10000 },
    { city: "Ningbo", type: "fruit", value: 14000 },
    { city: "Ningbo", type: "noodles", value: 9000 },
    { city: "Ningbo", type: "snacks", value: 10000 },
    { city: "Ningbo", type: "tea", value: 9000 },
    { city: "Wuxi", type: "fruit", value: 14000 },
    { city: "Wuxi", type: "noodles", value: 9000 },
    { city: "Wuxi", type: "snacks", value: 10000 },
    { city: "Wuxi", type: "tea", value: 6000 },
    { city: "hangzhou", type: "fruit", value: 9000 },
    { city: "hangzhou", type: "noodles", value: 8500 },
    { city: "hangzhou", type: "snacks", value: 10000 },
    { city: "hangzhou", type: "tea", value: 6000 },
    { city: "Beijing", type: "fruit", value: 17000 },
    { city: "Beijing", type: "noodles", value: 6000 },
    { city: "Beijing", type: "snacks", value: 7000 },
    { city: "Beijing", type: "tea", value: 10000 },
    { city: "Shanghai", type: "fruit", value: 18000 },
    { city: "Shanghai", type: "noodles", value: 11000 },
    { city: "Shanghai", type: "snacks", value: 15000 },
    { city: "Shanghai", type: "tea", value: 14000 }
];

const datapixellevelspacing = [
    {
        name: "London",
        month: "Jan.",
        rainfall: 18.9
    },
    {
        name: "London",
        month: "Feb.",
        rainfall: 28.8
    },
    {
        name: "London",
        month: "Mar.",
        rainfall: 39.3
    },
    {
        name: "London",
        month: "Apr.",
        rainfall: 81.4
    },
    {
        name: "London",
        month: "May",
        rainfall: 47
    },
    {
        name: "London",
        month: "Jun.",
        rainfall: 20.3
    },
    {
        name: "London",
        month: "Jul.",
        rainfall: 24
    },
    {
        name: "London",
        month: "Aug.",
        rainfall: 35.6
    },
    {
        name: "Berlin",
        month: "Jan.",
        rainfall: 12.4
    },
    {
        name: "Berlin",
        month: "Feb.",
        rainfall: 23.2
    },
    {
        name: "Berlin",
        month: "Mar.",
        rainfall: 34.5
    },
    {
        name: "Berlin",
        month: "Apr.",
        rainfall: 99.7
    },
    {
        name: "Berlin",
        month: "May",
        rainfall: 52.6
    },
    {
        name: "Berlin",
        month: "Jun.",
        rainfall: 35.5
    },
    {
        name: "Berlin",
        month: "Jul.",
        rainfall: 37.4
    },
    {
        name: "Berlin",
        month: "Aug.",
        rainfall: 42.4
    }
]

export { dataGroupedHistogram, stackgroupdata, roundedcolumnchart, datapixellevelspacing }