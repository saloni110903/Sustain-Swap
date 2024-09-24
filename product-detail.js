const products = {
    p1: {
        title: "Samsung Galaxy M35 5G",
        price: "₹19,999",
        category: "Mobile",
        description: "The Samsung Galaxy M35 5G offers a great balance of performance and features.",
        images: ["images/p1.jpg", "images/p1_1.jpg", "images/p1_2.jpg", "images/p1_3.jpg"],
        colors: ["Moonlight Blue", "DayBreak Blue", "Thunder Grey"]
    },
    p2: {
        title: "Boat Rockerz 245 v2 Pro",
        price: "₹1,099",
        category: "Headphones",
        description: "Experience true wireless freedom with the Boat Rockerz 245 v2 Pro.",
        images: ["images/p2.jpg", "images/p2_1.jpg", "images/p2_2.jpg", "images/p2_3.jpg"],
        colors: ["Black", "Fiery Black", "Gray", "Blue"]
    },
    p3: {
        title: "Sony Alpha ZV-E10L 24.2",
        price: "₹61,489",
        category: "Camera",
        description: "Capture your world with the Sony Alpha ZV-E10L, a powerful and versatile mirrorless camera.",
        images: ["images/p3.webp", "images/p3_1.jpg", "images/p3_2.jpg", "images/p3_3.jpg"],
        colors: ["ZV-E10L Vlogging Kit", "ZV-E10L Camera", "ZV-E10 Camera"]
    },
    p4: {
        title: "OnePlus Pad 2 (12.1 Inch) LCD Display",
        price: "₹42,999",
        category: "Tablet",
        description: "The OnePlus Pad 2 offers an immersive viewing experience with its 12.1-inch LCD display.",
        images: ["images/p4.jpg", "images/p4_1.jpg", "images/p4_2.jpg", "images/p4_3.jpg"],
        colors: ["8GB RAM, 128GB Storage (Nimbus Gray)", "12GB RAM, 256GB Storage (Nimbus Gray)"]
    },
    p5: {
        title: "OnePlus Nord 4 5G",
        price: "₹29,998",
        category: "Mobile",
        description: "The OnePlus Nord 4 5G is a perfect blend of performance and style.",
        images: ["images/p5.jpg", "images/p5_1.jpg", "images/p5_2.jpg", "images/p5_3.jpg"],
        colors: ["Oasis Green", "Mercurial Silver", "Obsidian Midnight"]
    },
    p6: {
        title: "Youth Mobi Premium Smartphone Tempered Glass",
        price: "₹299",
        category: "Accessories",
        description: "Protect your smartphone with the Youth Mobi Premium Tempered Glass screen protector.",
        images: ["images/p6.jpg", "images/p6_1.jpg", "images/p6_2.jpg", "images/p6_3.jpg"],
        colors: ["Motorola Moto G54, Motorola Moto G64, Motorola Moto G1"]
    },
    p7: {
        title: "Lenovo Tab Plus with Octa JBL Hi-Fi Speakers",
        price: "₹22,999",
        category: "Tablet",
        description: "Enjoy powerful sound and visuals with the Lenovo Tab Plus and its Octa JBL Hi-Fi speakers.",
        images: ["images/p7.jpg", "images/p7_1.jpg", "images/p7_2.jpg", "images/p7_3.jpg"],
        colors: ["8GB RAM + 128GB ROM", "8GB RAM + 256GB ROM"]
    },
    p8: {
        title: "Fire-Boltt Onyx - 36.3mm AMOLED Always On Display Smart Watch",
        price: "₹2,999",
        category: "Wearables",
        description: "Stay connected and stylish with the Fire-Boltt Onyx smartwatch featuring an always-on AMOLED display.",
        images: ["images/p8.jpg", "images/p8_1.jpg", "images/p8_2.jpg", "images/p8_3.jpg"],
        colors: ["Black", "Rose Gold", "Silver", "Gold"]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

if (products[productId]) {
    document.getElementById('product-title').innerText = products[productId].title;
    document.getElementById('product-price').innerText = products[productId].price;
    document.getElementById('product-category').innerText = `Home / ${products[productId].category}`;
    document.getElementById('product-description').innerText = products[productId].description;

    const productImg = document.getElementById('ProductImg');
    productImg.src = products[productId].images[0];

    const smallImgs = document.getElementsByClassName('small-img');
    for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].src = products[productId].images[i] || products[productId].images[0];
    }

    const colorSelect = document.getElementById('product-color');
    products[productId].colors.forEach(color => {
        const option = document.createElement('option');
        option.text = color;
        colorSelect.add(option);
    });
} 
else {
    alert("Product not found!");
}


