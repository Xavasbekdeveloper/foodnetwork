import feature1 from '../assets/icons/feature1.svg'
import feature2 from '../assets/icons/feature2.svg'
import feature3 from '../assets/icons/feature3.svg'
import menu1 from '../assets/images/menu1.png'
import menu2 from '../assets/images/menu2.png'
import menu3 from '../assets/images/menu3.png'
import menu4 from '../assets/images/menu4.png'
import menu5 from '../assets/images/menu5.png'
import menu6 from '../assets/images/menu6.png'
import { FaPlus } from "react-icons/fa6";


export const NAVBAR = [
    {
        id: 1,
        title: "Home",
    },
    {
        id: 2,
        title: "About us",
    },
    {
        id: 3,
        title: "Menu",
    },
    {
        id: 4,
        title: "Features",
    },
    {
        id: 5,
        title: "Contact us",
    },
]

export const HEROBTNS = [
    {
        id: 1,
        title: "Order Now",
    },
    {
        id: 2,
        title: "Food Details",
    },
]

export const FEATURESCARDS = [
    {
        id: 1,
        img: feature1,
        title: 'Quality Food',
        text: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
    },
    {
        id: 2,
        img: feature2,
        title: 'Food Delivery',
        text: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
    },
    {
        id: 3,
        img: feature3,
        title: 'Super Taste',
        text: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.',
    },
]

export const MENUCARDS = [
    {
        id: 1,
        img: menu1,
        title: 'Vegie Muffen',
        price: '16$',
        desc: 'There are many things are needed to start the Fast Food Business.',
        plusIcon: <FaPlus />,
        starIcon: 4
    },
    {
        id: 2,
        img: menu2,
        title: 'Salads',
        price: '12$',
        desc: 'There are many things are needed to start the Fast Food Business.',
        plusIcon: <FaPlus />,
        starIcon: 5
    },
    {
        id: 3,
        img: menu3,
        title: 'Burger',
        price: '10$',
        desc: 'There are many things are needed to start the Fast Food Business.',
        plusIcon: <FaPlus />,
        starIcon: 3
    },
    {
        id: 4,
        img: menu4,
        title: 'Delmonico Steak dish',
        price: '14$',
        desc: 'There are many things are needed to start the Fast Food Business.',
        plusIcon: <FaPlus />,
        starIcon: 2
    },
    {
        id: 5,
        img: menu5,
        title: 'Egg Masala',
        price: '9$',
        desc: 'There are many things are needed to start the Fast Food Business.',
        plusIcon: <FaPlus />,
        starIcon: 4
    },
    {
        id: 6,
        img: menu6,
        title: 'Peach Melba dish',
        price: '15$',
        desc: 'There are many things are needed to start the Fast Food Business.',
        plusIcon: <FaPlus />,
        starIcon: 3
    },
]