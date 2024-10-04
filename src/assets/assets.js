import child1 from './child1.jpeg'
import child2 from './child2.jpeg'
import child3 from './child3.jpeg'
import child4 from './child4.jpeg'
import child5 from './child5.jpeg'
import child6 from './child6.jpeg'
import children1 from './children1.webp'
import children2 from './children2.webp'
import children3 from './children3.webp'
import children4 from './children4.webp'
import children5 from './children5.jpeg'
import children6 from './children6.jpeg'
import female1 from './female1.jpeg'
import female2 from './female2.jpeg'
import female3 from './female3.jpeg'
import female4 from './female4.jpeg'
import female5 from './female5.jpeg'
import female6 from './female6.jpeg'
import female7 from './female7.jpeg'
import female8 from './female8.jpeg'
import female9 from './female9.jpeg'
import female10 from './female10.jpeg'
import female11 from './female11.jpeg'
import female12 from './female12.jpeg'
import female13 from './female13.jpeg'
import female14 from './female14.jpeg'
import female15 from './female15.jpeg'
import female16 from './female16.jpeg'
import female17 from './female17.jpeg'
import female18 from './female18.jpeg'
import female19 from './female19.jpeg'
import male1 from './male1.jpeg'
import male2 from './male2.jpeg'
import male3 from './male3.jpeg'
import male4 from './male4.jpeg'
import male5 from './male5.jpeg'
import male6 from './male6.jpeg'
import male7 from './male7.jpeg'
import male8 from './male8.jpeg'
import male9 from './male9.jpeg'
import male10 from './male10.jpeg'
import male11 from './male11.jpeg'
import logo from './logo.png'
import download from './download.png'
import user from './user.png'
import cart from './cart.png'
import menu2 from './menu2.png'
import backIcon from './backIcon.png'
import exchange from './exchange.png'
import quality from './quality.png'
import support from './support.png'
import phone from './phone.png'
import gmail from './gmail.png'
import drop from './drop.png'
import crossIcon from './crossIcon.png'
import star from './star.png'
import dullstar from './dullstar.png'
import bin from './bin.png'
import mastercard from './mastercard.png'
import paypal from './paypal.png'
import paypal2 from './paypal2.png'



export const assets = {
    child1,child2, child3, child4,child5, child6, children1,children2,children3,children4,
    children5,children6,female1,female2,female3,female4,female5,female6,female7,female8,female9,female10,female11,female12,female13,female14,female15,female16,female17,female18,female19, cart,
    male1,male2,male3,male4,male5,male6,male7,male8,male9,male10,male11,logo, download, user, menu2,backIcon, exchange, quality, support, phone, gmail, drop, crossIcon,star,dullstar, bin,
    mastercard, paypal, paypal2
}


export const products = [
    {
        _id: "aaaaa",
        name: "Women Designer Top",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [female17],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Designer T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male1, male2, male3, male4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Male T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [child1],
        category: "Boys",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Female T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [children1],
        category: "Girls",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaae",
        name: "Women Trendings",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [female1],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "Men Body Fitting wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male5],
        category: "Men", 
        subCategory: "Full wear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaag",
        name: "Male Luxury wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [child2],
        category: "Boys",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Female Luxury Attire",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [children2],
        category: "Girls",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Women Designer Top",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [female2],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men Designer T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male6],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaak",
        name: "Male T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [child3],
        category: "Boys",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaal",
        name: "Female T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [children3],
        category: "Girls",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Women Trendings",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [female3],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaan",
        name: "Men Body Fitting wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male6],
        category: "Men", 
        subCategory: "Full wear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Male Luxury wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [child4],
        category: "Boys",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaap",
        name: "Female Luxury Attire",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [children4],
        category: "Girls",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaaq",
        name: "Women Designer Top",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [female4],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaar",
        name: "Men Designer T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male1, male2, male3, male4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaas",
        name: "Male T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [child5],
        category: "Boys",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Female T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [children5],
        category: "Girls",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaau",
        name: "Women Trendings",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [female5],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaav",
        name: "Men Body Fitting wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male6],
        category: "Men", 
        subCategory: "Full wear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaaw",
        name: "Male Luxury wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [child6],
        category: "Boys",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Female Luxury Attire",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [children6],
        category: "Girls",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaay",
        name: "Women Designer Top",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [female6],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaaz",
        name: "Men Designer T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male7],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaaba",
        name: "Men T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [male10],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabb",
        name: "Female T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [female7],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabc",
        name: "Women Trendings",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [female3],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Men Body Fitting wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [male11],
        category: "Men", 
        subCategory: "Full wear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabe",
        name: "Female Luxury wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [female8],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabf",
        name: "Female Luxury Attire",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 300,
        image: [female9],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabg",
        name: "Women Designer T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [female10],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabh",
        name: "Men T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [female11],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabi",
        name: "Female T-shirt",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [female12],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabj",
        name: "Women Trendings",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 100,
        image: [female13],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "L"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabk",
        name: "Women Body Fitting wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 400,
        image: [female12],
        category: "women", 
        subCategory: "Full wear",
        sizes: ["S", "M", "XL"],
        date: new Date(),
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Female Luxury wears",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 200,
        image: [female14],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
    {
        _id: "aaabm",
        name: "Female Luxury Attire",
        description: "A lightweight, carefully knitted, pullover shirt with bodily close fitting",
        price: 250,
        image: [female15],
        category: "Women",
        subCategory: "Full wear",
        sizes: ["S", "M", "SM"],
        date: new Date(),
        bestseller: true
    },
]