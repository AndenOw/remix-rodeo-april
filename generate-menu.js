'use strict';
import { faker } from '@faker-js/faker';
import fs from 'fs/promises';

const names = [
    "Classic Oatmeal",
    "Blueberry Oatmeal",
    "Banana Nut Oatmeal",
    "Maple Brown Sugar Oatmeal",
    "Cinnamon Roll Oatmeal",
    "Apple Cinnamon Oatmeal",
    "Peanut Butter Oatmeal",
    "Strawberry Oatmeal",
    "Chocolate Chip Oatmeal",
    "Coconut Oatmeal",
    "Pumpkin Spice Oatmeal",
    "Almond Joy Oatmeal",
    "Raspberry Oatmeal",
    "Honey Walnut Oatmeal",
    "Peaches and Cream Oatmeal",
    "Cranberry Orange Oatmeal",
    "Vanilla Oatmeal",
    "Cherry Almond Oatmeal",
    "S'mores Oatmeal",
    "Gingerbread Oatmeal",
    "Lemon Blueberry Oatmeal",
    "Carrot Cake Oatmeal",
    "Trail Mix Oatmeal",
    "Baklava Oatmeal",
    "Mocha Oatmeal",
    "Matcha Oatmeal",
    "Pistachio Oatmeal",
    "Salted Caramel Oatmeal",
    "Tropical Oatmeal",
    "Chai Spice Oatmeal",
    "Pecan Pie Oatmeal",
    "Oreo Cookie Oatmeal",
    "Pumpkin Pie Oatmeal",
    "Caramel Apple Oatmeal",
    "Blackberry Oatmeal",
    "Raisin Oatmeal",
    "Fig and Walnut Oatmeal",
    "Coconut Mango Oatmeal",
    "Cranberry Pecan Oatmeal",
    "Cinnamon Bun Oatmeal",
    "Pina Colada Oatmeal",
    "Chocolate Peanut Butter Oatmeal",
    "Grape Nut Oatmeal",
    "Berry Blast Oatmeal",
    "Pistachio Rose Oatmeal",
    "Apricot Almond Oatmeal",
    "Ginger Peach Oatmeal",
    "Blueberry Lemon Oatmeal",
    "Chocolate Raspberry Oatmeal",
    "Coffee Cake Oatmeal"
  ];

async function generateMenuItems(numItems) {
    const menuItems = [];

    for (let i = 0; i < numItems; i++) {
        const menuItem = {
            id: faker.database.mongodbObjectId(),
            image: faker.image.urlLoremFlickr({
                width: 300,
                height: 300,
                category: 'oatmeal'
            }),
            name: names[i],
            price: faker.commerce.price({
                min: 5,
                max: 25,
                symbol: '$'
            }),
            category: faker.helpers.arrayElement([
                'breakfast',
                'brunch',
                'dessert'
            ])
        };
        menuItems.push(menuItem);
    }

    return menuItems;
}

async function main() {
    try {
        const numItems = 12; // Change this to the desired number of menu items
        const menuItems = await generateMenuItems(numItems);
        const fileName = 'menu.json';
        await fs.writeFile(
            `app/${fileName}`,
            JSON.stringify(menuItems, null, 2)
        );
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
