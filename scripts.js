// Data structure for storing package details
const packages = {
    "grameenphone": {
        "mbMinutes": [
            {name: "60 GB + 1800 Minutes", data: "50GB", minutes: "1500 Minutes", oldPrice: 1199, offerPrice: 930},
            {name: "30GB + 700 Minutes", data: "30GB", minutes: "700 Minutes", oldPrice: 799, offerPrice: 715},
            
        ],
        "mbOnly": [
            {name: "70 GB Data", data: "70 GB", oldPrice: 749, offerPrice: 640},
            {name: "100 GB Data", data: "100GB", oldPrice: 849, offerPrice: 660},
            {name: "200 GB Data", data: "200GB", oldPrice: 0, offerPrice: 820}
        ],
        "minutesOnly": [
            
        ]
    },
    "grameenphoneGift": {
        "mbMinutes": [
            
            {name: "25GB + 200 Minutes", data: "25GB", minutes: "200 Minutes", oldPrice: 0, offerPrice: 565},
            {name: "40GB + 200 Minutes", data: "40GB", minutes: "200 Minutes", oldPrice: 0, offerPrice: 600},
            {name: "40GB + 300 Minutes", data: "40GB", minutes: "300 Minutes", oldPrice: 0, offerPrice: 640},
            {name: "40GB + 400 Minutes", data: "40GB", minutes: "400 Minutes", oldPrice: 0, offerPrice: 655},
            {name: "50GB + 200 Minutes", data: "50GB", minutes: "200 Minutes", oldPrice: 0, offerPrice: 700}

            
        ],
        "mbOnly": [
            {name: "25 GB Data", data: "25GB", oldPrice: 0, offerPrice: 430},
            {name: "50 GB Data", data: "50 GB", oldPrice: 0, offerPrice: 545},
            
        ],
        "minutesOnly": [
            
            {name: "400 Minutes", minutes: "400 Minutes", oldPrice: 0, offerPrice: 300},
            {name: "500 Minutes", minutes: "500 Minutes", oldPrice: 0, offerPrice: 340},
            {name: "1000 Minutes", minutes: "1000 Minutes", oldPrice: 0, offerPrice: 650}
        ]
    },
    "banglalink": {
        "mbMinutes": [
            {name: "60 GB + 1000 Minutes", data: "60GB", minutes: "1000 Minutes", oldPrice: 998, offerPrice: 720},
            {name: "45 GB + 400 Minutes", data: "45GB", minutes: "400 Minutes", oldPrice: 648, offerPrice: 490},
            {name: "30 GB + 300 Minutes", data: "30GB", minutes: "300 Minutes", oldPrice: 498, offerPrice: 425},
            
            {name: "15 GB + 100 Minutes", data: "15GB", minutes: "100 Minutes", oldPrice: 298, offerPrice: 315}
            
        ],
        "mbOnly": [
            {name: "120 GB Data", data: "120GB", oldPrice: 899, offerPrice: 660},
            {name: "80 GB Data", data: "80GB", oldPrice: 799, offerPrice: 580},
            {name: "60 GB Data", data: "60 GB", oldPrice: 699, offerPrice: 575},
            {name: "50 GB Data", data: "50 GB", oldPrice: 599, offerPrice: 495},
            {name: "20 GB Data", data: "20GB", oldPrice: 499, offerPrice: 370}
        ],
        "minutesOnly": [
            {name: "600 Minutes", minutes: "600 Minutes", oldPrice: 397, offerPrice: 320},
            {name: "755 Minutes", minutes: "755 Minutes", oldPrice: 497, offerPrice: 395},
            {name: "1000 Minutes", minutes: "1000 Minutes", oldPrice: 647, offerPrice: 0}
           
        ]
    },
    "robi": {
        "mbMinutes": [
            {name: "100 GB + 1000 Minutes", data: "100GB", minutes: "1000 Minutes", oldPrice: 0, offerPrice: 835},
            {name: "50 GB + 1500 Minutes", data: "50GB", minutes: "1500 Minutes", oldPrice: 999, offerPrice: 775},
            {name: "50 GB + 1000 Minutes", data: "50GB", minutes: "1000 Minutes", oldPrice: 0, offerPrice: 725},
            {name: "50 GB + 500 Minutes", data: "50GB", minutes: "500 Minutes", oldPrice: 0, offerPrice: 685},
            {name: "40 GB + 800 Minutes", data: "40GB", minutes: "800 Minutes", oldPrice: 799, offerPrice: 675},
            {name: "40 GB + 750 Minutes", data: "40GB", minutes: "800 Minutes", oldPrice: 0, offerPrice: 635}
            
        ],
        "mbOnly": [
            {name: "150 GB Data", data: "150 GB", oldPrice: 898, offerPrice: 745},
            {name: "100 GB Data", data: "100GB", oldPrice: 748, offerPrice: 655},
            {name: "55GB Data", data: "55GB", oldPrice: 0, offerPrice: 625},
            {name: "40 GB Data", data: "40 GB", oldPrice: 0, offerPrice: 565}
            
        ],
        "minutesOnly": [
            {name: "560 Minutes", minutes: "560 Minutes", oldPrice: 359, offerPrice: 355},
            {name: "1000 Minutes", minutes: "1000 Minutes", oldPrice: 639, offerPrice: 490}
            
        ]
    },
    "airtel": {
        "mbMinutes": [
            {name: "75 GB + 1500 Minutes", data: "75GB", minutes: "1500 Minutes", oldPrice: 999, offerPrice: 795},
            {name: "100 GB + 1000 Minutes", data: "100GB", minutes: "1000 Minutes", oldPrice: 0, offerPrice: 825},
            {name: "80 GB + 300 Minutes", data: "80GB", minutes: "300 Minutes", oldPrice: 0, offerPrice: 685},
            {name: "80 GB + 500 Minutes", data: "80GB", minutes: "500 Minutes", oldPrice: 0, offerPrice: 725},
            {name: "60 GB + 900 Minutes", data: "60GB", minutes: "900 Minutes", oldPrice: 899, offerPrice: 730},
            {name: "50 GB + 1000 Minutes", data: "3GB", minutes: "300 Minutes", oldPrice: 0, offerPrice: 745},
            {name: "50 GB + 800 Minutes", data: "50GB", minutes: "800 Minutes", oldPrice: 799, offerPrice: 700},
            {name: "50 GB + 700 Minutes", data: "50GB", minutes: "700 Minutes", oldPrice: 699, offerPrice: 670},
            {name: "40 GB + 500 Minutes", data: "40GB", minutes: "500 Minutes", oldPrice: 0, offerPrice: 575},
            {name: "30 GB + 400 Minutes", data: "30GB", minutes: "400 Minutes", oldPrice: 499, offerPrice: 515}
           
            
        ],
        "mbOnly": [
            {name: "150 GB Data", data: "150GB", oldPrice: 898, offerPrice: 770},
            {name: "100 GB Data", data: "100GB", oldPrice: 0, offerPrice: 675},
            {name: "90 GB Data", data: "90GB", oldPrice: 748, offerPrice: 655},
            {name: "70 GB Data", data: "70GB", oldPrice: 0, offerPrice: 595},
            {name: "55 GB Data", data: "55GB", oldPrice: 548, offerPrice: 545},
            
        ],
        "minutesOnly": [
            {name: "650 Minutes", minutes: "650 Minutes", oldPrice: 407, offerPrice: 380},
            {name: "800 Minutes", minutes: "800 Minutes", oldPrice: 507, offerPrice: 460},
            {name: "1000 Minutes", minutes: "1000 Minutes", oldPrice: 639, offerPrice: 570}
        ]
    },
    "robiAirtelFamily": {
        "mbMinutes": [
            {name: "10 GB + 200 Minutes", data: "10GB", minutes: "200 Minutes", oldPrice: 0, offerPrice: 265},
            {name: "10 GB + 300 Minutes", data: "10GB", minutes: "300 Minutes", oldPrice: 0, offerPrice: 310},
            {name: "10 GB + 400 Minutes", data: "10GB", minutes: "400 Minutes", oldPrice: 0, offerPrice: 365},
            {name: "10 GB + 500 Minutes", data: "10GB", minutes: "500 Minutes", oldPrice: 0, offerPrice: 400},

            {name: "15 GB + 200 Minutes", data: "15GB", minutes: "200 Minutes", oldPrice: 0, offerPrice: 325},
            {name: "15 GB + 300 Minutes", data: "15GB", minutes: "300 Minutes", oldPrice: 0, offerPrice: 360},
            {name: "15 GB + 400 Minutes", data: "15GB", minutes: "400 Minutes", oldPrice: 0, offerPrice: 410},
            {name: "15 GB + 500 Minutes", data: "15GB", minutes: "500 Minutes", oldPrice: 0, offerPrice: 455},

            {name: "20 GB + 200 Minutes", data: "20GB", minutes: "200 Minutes", oldPrice: 0, offerPrice: 385},
            {name: "20 GB + 400 Minutes", data: "20GB", minutes: "400 Minutes", oldPrice: 0, offerPrice: 470},
            {name: "20 GB + 500 Minutes", data: "20GB", minutes: "500 Minutes", oldPrice: 0, offerPrice: 515},

            
        ],
        "mbOnly": [
            {name: "10GB Data", data: "10GB", oldPrice: 0, offerPrice: 178 },
            {name: "15 GB Data", data: "15GB", oldPrice: 0, offerPrice: 235},
            {name: "20 GB Data", data: "20GB", oldPrice: 0, offerPrice: 290},
            {name: "25GB Data", data: "25GB", oldPrice: 0, offerPrice: 345},
            {name: "30GB Data", data: "30GB", oldPrice: 0, offerPrice: 405}
        ],
        "minutesOnly": [
            
            {name: "200 Minutes", minutes: "200 Minutes", oldPrice: 0, offerPrice: 155},
            {name: "300 Minutes", minutes: "300 Minutes", oldPrice: 0, offerPrice: 195},
            {name: "400 Minutes", minutes: "400 Minutes", oldPrice: 0, offerPrice: 235},
            {name: "500 Minutes", minutes: "500 Minutes", oldPrice: 0, offerPrice: 275},
            {name: "900 Minutes", minutes: "900 Minutes", oldPrice: 0, offerPrice: 460}
        ]
    }
};

// Function to generate HTML for a list of packages
function generatePackageHTML(packages, sectionId, operator) {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';  // Clear previous content

    packages.forEach(pkg => {
        const packageCard = `
            <div class="col-md-4">
                <div class="package-card">
                    <h5>${pkg.name}</h5>
                    <p>${pkg.data ? `Data= ${pkg.data}` : ''}  and ${pkg.minutes ? `Minutes= ${pkg.minutes}` : ''}</p>
                    <p><span class="old-price">BDT ${pkg.oldPrice}</span><span class="price">TK ${pkg.offerPrice}</span></p>
                    <button class="btn btn-primary" onclick="buyNow('${pkg.name}', '${operator}', '${pkg.offerPrice}')">Buy Now</button>
                </div>
            </div>`;
        section.innerHTML += packageCard;
    });
}

// Function to load packages into the HTML based on the selected operator
function loadPackages(operator) {
    document.getElementById('operator-name').innerText = operator.charAt(0).toUpperCase() + operator.slice(1);

    // Load MB + Minutes packages
    generatePackageHTML(packages[operator].mbMinutes, 'mb-minutes-packages', operator);

    // Load MB Only packages
    generatePackageHTML(packages[operator].mbOnly, 'mb-packages', operator);

    // Load Minutes Only packages
    generatePackageHTML(packages[operator].minutesOnly, 'minutes-packages', operator);

    

    if(operator === 'grameenphone') {
        const element = document.getElementById("hintGift");
        element.innerHTML = "গ্রামীণফোনের আরও অফার দেখতে গিফট প্যাকেজ গুলো দেখুন ";
    }

    else if(operator === 'grameenphoneGift') {
        const element = document.getElementById("hintGift");
        element.innerHTML = "গ্রামীণফোনের আরও অফার দেখতে গ্রামীণফোন রিচার্জ অফার গুলো দেখুন ";
    }

    else if(operator === 'robi' ||  operator === 'airtel') {
        const element = document.getElementById("hintGift");
        element.innerHTML = "রবি এয়ারটেলের আরও প্যাকেজ দেখতে ফ্যামিলি প্যাকেজ গুলো দেখুন ";
    }

    else if(operator === 'robiAirtelFamily') {
        const element = document.getElementById("hintGift");
        element.innerHTML = "রবি / এয়ারটেলের আরও প্যাকেজ দেখতে রবি /এয়ারটেল প্যাকেজ গুলো দেখুন ";
    }
    
    else {
        const element = document.getElementById("hintGift");
        element.innerHTML = "";
    }

}

// Function to show packages for the selected operator
function showPackages(operator) {
    document.getElementById('package-sections').classList.remove('d-none');
    loadPackages(operator);
}

// Function to handle "Buy Now" click
function buyNow(packageName, operator, price) {
    // Create the message to be sent
    const message = `Hi, I would like to buy the ${packageName} package from ${operator} at a price of ${price}.`;

    // Construct the Messenger link using 'ref'
    const messengerLink = `https://m.me/Rahul.Hasan.2866?text=${encodeURIComponent(message)}`;
    window.location.href = messengerLink;
    
    
}


