this is the first project that i used nextjs + tailwind.

###### RENDERING IMAGE IN NEXTJS

- the first thing i learned working on this project is 👉 rendering images
- when rendering an image in nextjs, you use <Image/> instead of the traditional <img/>
- but, before <Image/> would work, you first have to import Image from next/image after which you can import the image itself and pass it into the image src.

###### USING REACT-ICONS IN data.js or data.ts file

- to use react icons in a pure .js or .ts you have to first import it 👇
- import {HiMoon} from 'react-icons/hi'
- now to use it you have to convert it into something javascript or typescript compatible since you are using it in a javascript file and not jsx.

* here is an example 👇

type MinimumLiving = {
icons: any
text: string
}

export const minimumLiving: MinimumLiving[] = [
{
icons: AiOutlineDollar(),
text: 'This is some text',
},
{
icons: BiBuildingHouse(),
text: 'This is some text',
},
{
icons: GrStackOverflow(),
text: 'This is some text',
},
{
icons: GiCottonFlower(),
text: 'This is some text',
},
{
icons: BsShieldFillPlus(),
text: 'This is some text',
},
{
icons: HiMoon(),
text: 'This is some text',
},
]
