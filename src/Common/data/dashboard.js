//import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";

import productImg1 from "../../assets/images/products/img-1.png"
import productImg2 from "../../assets/images/products/img-2.png"
import productImg3 from "../../assets/images/products/img-3.png"
import productImg4 from "../../assets/images/products/img-4.png"
import productImg5 from "../../assets/images/products/img-5.png"
import productImg6 from "../../assets/images/products/img-6.png"
import productImg8 from "../../assets/images/products/img-8.png"
import usecustomStyles from "../customStyles";

const customStyles = usecustomStyles();

const recentOrders = [
    {
        purchaseID: "#TB010338",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "28 Oct, 2022",
        vendor: "Brazil",
        status: "Paid"
    },
    {
        purchaseID: "#TB010337",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "28 Oct, 2022",
        vendor: "Brazil",
        status: "Paid"
    },
    {
        purchaseID: "#TB010336",
        customerName: "Smart Watch for Man's",
        productImage: avatar8,
        productName: "Heather Jimenez",
        amount: "$741.98",
        orderDate: "02 Nov, 2022",
        vendor: "Spain",
        status: "Paid"
    },
    {
        purchaseID: "#TB010335",
        customerName: "Apple Headphone",
        productImage: avatar9,
        productName: "Scott Wilson",
        amount: "$264.37",
        orderDate: "01 Nov, 2022",
        vendor: "Jersey",
        status: "Unpaid"
    }, {
        purchaseID: "#TB010334",
        customerName: "Bentwood Chair",
        productImage: avatar10,
        productName: "Ashley Silva",
        amount: "$349.99",
        orderDate: "31 Oct, 2022",
        vendor: "Argentina",
        status: "Pending"
    },
    {
        purchaseID: "#TB010333",
        customerName: "Stillbird Helmet",
        productImage: avatar3,
        productName: "Stephen Bird",
        amount: "$80.00",
        orderDate: "30 Oct, 2022",
        vendor: "USA",
        status: "Paid"
    },
    {
        purchaseID: "#TB010332",
        customerName: "Borosil Paper Cup",
        productImage: avatar4,
        productName: "Daniel Gonzalez",
        amount: "$345.00",
        orderDate: "29 Oct, 2022",
        vendor: "Namibia",
        status: "Unpaid"
    },
    {
        purchaseID: "#TB010331",
        customerName: "Macbook Pro",
        productImage: avatar2,
        productName: "Terry White",
        amount: "$658.00",
        orderDate: "28 Oct, 2022",
        vendor: "Brazil",
        status: "Paid"
    }
];

const chatList = [
    { id: 1, img: avatar1, name: "Ashley Silva", msg: "Good Morning ", timeStamp: "04.32 PM", unreadMsg: "4", badge: true },
    { id: 2, img: avatar2, name: "Misty Taylor", msg: "Okay, Byy", timeStamp: "02:49 PM", unreadMsg: "1", badge: true },
    { id: 3, img: avatar3, name: "Scott Wilson", msg: "Yeah everything is fine...", timeStamp: "12:04 PM", unreadMsg: "8", badge: true },
    { id: 4, img: avatar4, name: "Patricia Wilson", msg: "Hey! there I'm available", timeStamp: "11:11 AM" },
    { id: 5, img: avatar5, name: "Allyson Wigfall", msg: "I've finished it! See you so", timeStamp: "09:24 AM" },
    { id: 6, img: avatar6, name: "Martha Griffin", msg: "Wow that's great", timeStamp: "16/11" },
    { id: 7, img: avatar7, name: "Mark Sargent", msg: "Nice to meet you", timeStamp: "16/11" },
    { id: 8, img: avatar8, name: "Ray Stricklin", msg: "Hey, Hi Ray Stricklin ...!", timeStamp: "16/11" },
    { id: 9, img: avatar9, name: "Frank Taylor", msg: "Happy holiday 🙂", timeStamp: "15/11" },
    { id: 10, img: avatar1, name: "Karla Basso", msg: "Okay, Sure.", timeStamp: "14/11" },
    { id: 11, img: avatar2, name: "Sally McPherson", msg: "Thanks", timeStamp: "14/11" },
    { id: 12, img: avatar3, name: "Lizzie Beil", msg: "Our next meeting tomorrow at 10.00 AM", timeStamp: "13/11" },
    { id: 13, img: avatar4, name: "Mark Williams", msg: "See you tomorrow", timeStamp: "12/11" },
    { id: 14, img: avatar5, name: "Vina Scott", msg: "Yeah everything is fine...", timeStamp: "11/11" },
    { id: 15, img: avatar6, name: "Keli Henry", msg: "Good afternoon", timeStamp: "11/11" },
]

const chatHistory = [
    { id: 1, img: avatar1, name: "Ashley", status: "success" },
    { id: 2, img: avatar2, name: "Misty", status: "success" },
    { id: 3, img: avatar3, name: "Scott", status: "warning" },
    { id: 4, img: avatar4, name: "Patricia", status: "success" },
    { id: 5, img: avatar5, name: "Allyson", status: "warning" },
]

const chatmsg = [
    { id: 1, img: avatar1, subItem: [{ id: 1, msg: "Good morning 😊", timeStamp: "09:07 am" }] },
    { id: 2, subItem: [{ id: 1, msg: "Good morning, How are you? What about our next meeting?", timeStamp: "09:08 am", isRead: true }], isSender: true },
    { id: 3, img: avatar1, subItem: [{ id: 1, msg: "Yeah everything is fine. Our next meeting tomorrow at 10.00 AM" }] },
    { id: 4, subItem: [{ id: 1, msg: "Wow that's great", timeStamp: "09:12 am", isRead: true }], isSender: true },
]

const BestSellingProductsData = [
    { id: 1, className: customStyles.colorInfoBg, img: productImg1, rating: "4.7", price: "$64.21", productName: "Rockerz 550 Over Ear Bluetooth Headphones" },
    { id: 2, className: customStyles.colorWarningBg, img: productImg6, rating: "4.9", price: "$154.78", productName: "Monte Carlo Sweaters" },
    { id: 3, className: customStyles.colorPrimary, img: productImg8, rating: "4.3", price: "$36.97", productName: "Men's Running Shoes Active Grip" },
    { id: 4, className: customStyles.colorSuccessBg, img: productImg4, rating: "4.8", price: "$71.34", productName: "United Colors Of Benetton" }
]

const stockReportData = [
    { id: 1, ProductId: "#00541", productImg: productImg1, productName: "Rockerz Ear Bluetooth Headphone", date: "16 Aug, 2022", amount: "$658.00", color: "success", status: "In Stock", quantity: "15 PCS" },
    { id: 2, ProductId: "#07484", productImg: productImg5, productName: "United Colors Of Benetton", date: "05 Sep, 2022", amount: "$145.00", color: "warning", status: "Low Stock", quantity: "05 PCS" },
    { id: 3, ProductId: "#01641", productImg: productImg4, productName: "Striped Baseball Cap", date: "28 Sep, 2022", amount: "$215.00", color: "danger", status: "Out of Stock", quantity: "0 PCS" },
    { id: 4, ProductId: "#00065", productImg: productImg3, productName: "350 ml Glass Grocery Container", date: "02 Oct, 2022", amount: "$79.99", color: "success", status: "In Stock", quantity: "37 PCS" },
    { id: 5, ProductId: "#00156", productImg: productImg2, productName: "One Seater Sofa", date: "11 Oct, 2022", amount: "$264.99", color: "success", status: "In Stock", quantity: "23 PCS" },
    { id: 6, ProductId: "#09102", productImg: productImg8, productName: "Men's Running Shoes Active Grip", date: "19 Nov, 2022", amount: "$264.99", color: "warning", status: "Low Stock", quantity: "23 PCS" }
]

const allRevenueChartData = [{
    name: "Orders",
    type: "area",
    data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
},
{
    name: "Earnings",
    type: "bar",
    data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57],
},
{
    name: "Refunds",
    type: "line",
    data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
}]

const monthRevenueChartData = [{
    name: "Orders",
    type: "area",
    data: [14, 55, 46, 68, 49, 61, 42, 40, 78, 45, 63, 67],
},
{
    name: "Earnings",
    type: "bar",
    data: [89.25, 75.58, 68.74, 74.87, 77.54, 24.03, 51.24, 48.57, 12.57, 42.36, 24.51, 36.57],
},
{
    name: "Refunds",
    type: "line",
    data: [15, 16, 12, 21, 27, 18, 15, 19, 7, 19, 7, 25],
}]

const halfYearRevenueChartData = [{
    name: "Orders",
    type: "area",
    data: [24, 12, 46, 38, 49, 61, 32, 44, 44, 52, 35, 67],
},
{
    name: "Earnings",
    type: "bar",
    data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57],
},
{
    name: "Refunds",
    type: "line",
    data: [12, 16, 27, 17, 21, 12, 5, 19, 7, 9, 11, 45],
}]

const yearRevenueChartData = [{
    name: "Orders",
    type: "area",
    data: [29, 60, 41, 63, 44, 56, 37, 39, 73, 52, 51, 61],
},
{
    name: "Earnings",
    type: "bar",
    data: [89.25, 89.58, 68.74, 98.87, 78.54, 81.03, 51.24, 28.57, 82.57, 42.36, 88.51, 46.57],
},
{
    name: "Refunds",
    type: "line",
    data: [12, 16, 7, 27, 20, 21, 15, 7, 3, 19, 22, 45],
}]

export { recentOrders, chatList, chatHistory, chatmsg, BestSellingProductsData, stockReportData, allRevenueChartData, monthRevenueChartData, halfYearRevenueChartData, yearRevenueChartData };
