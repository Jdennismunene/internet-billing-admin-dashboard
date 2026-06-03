import logo from '../assets/isp_logo.png';
import packageImage from '../assets/image3.jpg'


export const assets = {
    logo,
    packageImage
}

export const userData = [
    {
        id:1,
        Invoice_id: "#876364",
        Name: "Arrora gaur",
        Email: "arrorgaur@gmail.com",
        package: "2 weeks package",
        status: "Activate",
    }
]

export const MonthlyPackages = [
    {
        id:1,
        image: packageImage,
        type: "Special",
        speed: "11 Mbps",
        price: "1500 kshs"
    },
    {
        id:2,
        image: packageImage,
        type: "Silver",
        speed: "30 Mbps",
        price: "2500 kshs"
    },
    {
        id:3,
        image: packageImage,
        type: "Gold",
        speed: "40 Mbps",
        price: "1500 kshs"
    },
]


export const WeeklyPackages = [
    {
        id:1,
        image: packageImage,
        type: "2 weeks",
        speed: "11 Mbps",
        price: "500 kshs"
    },
    {
        id:2,
        image: packageImage,
        type: "3 weeks",
        speed: "30 Mbps",
        price: "300 kshs"
    },
    {
        id:3,
        image: packageImage,
        type: "4 weeks",
        speed: "40 Mbps",
        price: "150 kshs"
    },
]

export const DailyPackages = [
    {
        id:1,
        image: packageImage,
        type: "1 Day",
        speed: "2 Mbps",
        price: "30 kshs"
    },
    {
        id:2,
        image: packageImage,
        type: "2 Days",
        speed: "3 Mbps",
        price: "40 kshs"
    },
    {
        id:3,
        image: packageImage,
        type: "3 Days",
        speed: "5 Mbps",
        price: "50 kshs"
    },
]

export const HourlyPackages = [
    {
        id:1,
        image: packageImage,
        type: "24hours",
        speed: "7 Mbps",
        price: "30 kshs"
    },
    {
        id:2,
        image: packageImage,
        type: "12 hours",
        speed: "3 Mbps",
        price: "20 kshs"
    },
    {
        id:3,
        image: packageImage,
        type: "6 hours",
        speed: "4 Mbps",
        price: "15 kshs"
    },
]