// Data structure for storing package details
const packages = {
    "grameenphone": {
        "mbMinutes": [
           /* {name: "50 GB + 1500 Minutes ঢাকা জেলা , নাঃ গঞ্জ , মানিকগঞ্জ , মুন্সিগঞ্জ নরসিংদী জেলা ", oldPrice: 999, offerPrice: 765},
            {name: "50 GB + 1500 Minutes রাজশাহী রংপুর বিভাগ ", oldPrice: 999, offerPrice: 745},
            {name: "50 GB + 1500 Minutes খুলনা বরিশাল ", oldPrice: 999, offerPrice: 760},
            {name: "50 GB + 1500 Minutes চটগ্রাম বিভাগ ", oldPrice: 999, offerPrice: 760},
            {name: "50 GB + 1500 Minutes সিলেট বিভাগ ", oldPrice: 999, offerPrice: 760},*/
            {name: "50 GB + 1500 Minutes ", oldPrice: 999, offerPrice: 775},


            {name: "15 GB + 100 Minutes",  oldPrice: 0, offerPrice: 410},
            {name: "15 GB + 200 Minutes",  oldPrice: 0, offerPrice: 465},
            {name: "15 GB + 300 Minutes",  oldPrice: 0, offerPrice: 505},
            {name: "15 GB + 400 Minutes",  oldPrice: 0, offerPrice: 530},

            {name: "25 GB + 100 Minutes",  oldPrice: 0, offerPrice: 505},
            {name: "25 GB + 200 Minutes ",  oldPrice: 0, offerPrice: 555},
            {name: "25 GB + 300 Minutes",  oldPrice: 0, offerPrice: 590},
            {name: "25 GB + 400 Minutes ",  oldPrice: 0, offerPrice: 615},

            {name: "40 GB + 200 Minutes",  oldPrice: 0, offerPrice: 595},
            {name: "40 GB + 300 Minutes",  oldPrice: 0, offerPrice: 625},
            {name: "40 GB + 400 Minutes", oldPrice: 0, offerPrice: 660},

            {name: "50 GB + 200 Minutes",  oldPrice: 0, offerPrice: 625},
            {name: "50 GB + 400 Minutes",  oldPrice: 0, offerPrice: 685},

            {name: "100 GB + 200 Minutes",  oldPrice: 0, offerPrice: 730},
            {name: "100 GB + 400 Minutes",  oldPrice: 0, offerPrice: 780},
            
        ],
        "mbOnly": [

            {name: "25 GB Data",  oldPrice: 0, offerPrice: 430},
            {name: "50 GB Data",  oldPrice: 0, offerPrice: 540},
            {name: "75 GB Data",  oldPrice: 0, offerPrice: 650},
            {name: "100 GB Data",  oldPrice: 0, offerPrice: 670},
        ],
        "minutesOnly": [
            {name: "400 Minutes",  oldPrice: 0, offerPrice: 300},
            {name: "500 Minutes",  oldPrice: 0, offerPrice: 340},
            {name: "1000 Minutes", oldPrice: 0, offerPrice: 650}
        ]
    },

    "banglalink": {
        "mbMinutes": [
            {name: "60 GB + 1000 Minutes + 10 GB toffe", oldPrice: 998, offerPrice: 650},
            {name: "45 GB + 400 Minutes + 10 GB toffe",  oldPrice: 648, offerPrice: 465},
            {name: "15 GB + 100 Minutes + 10 GB toffe",  oldPrice: 298, offerPrice: 315}
            
        ],
        "mbOnly": [
            {name: "120 GB Data", oldPrice: 899, offerPrice: 615},
            {name: "80 GB Data + 5 GB toffe+ 5 GB bip",oldPrice: 799, offerPrice: 555},
            {name: "60 GB Data",oldPrice: 699, offerPrice: 490},
            {name: "50 GB Data",oldPrice: 599, offerPrice: 465},
            {name: "৫ GB Data মেয়াদ ৩ দিন ",  oldPrice: 89, offerPrice: 60} 
        ],
        "minutesOnly": [
            {name: "600 Minutes", oldPrice: 397, offerPrice: 295},
            {name: "755 Minutes",  oldPrice: 497, offerPrice: 365},
            {name: "0 Minutes",  oldPrice: 647, offerPrice: 0}
           
        ]
    },
    "robi": {
        "mbMinutes": [
            {name: "100 GB + 1000 Minutes",  oldPrice: 0, offerPrice: 835},
            {name: "50 GB + 1500 Minutes",  oldPrice: 999, offerPrice: 770},
            {name: "50 GB + 1000 Minutes",  oldPrice: 0, offerPrice: 725},
            {name: "50 GB + 500 Minutes", oldPrice: 0, offerPrice: 685},
            {name: "40 GB + 800 Minutes", oldPrice: 799, offerPrice: 675},
            {name: "40 GB + 750 Minutes",  oldPrice: 0, offerPrice: 630},

            {name: "10 GB + 200 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 265},
            {name: "10 GB + 300 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 310},
            {name: "10 GB + 400 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 365},
            {name: "10 GB + 500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 400},

            {name: "15 GB + 200 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 325},
            {name: "15 GB + 300 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 360},
            {name: "15 GB + 400 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 410},
            {name: "15 GB + 500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 455},

            {name: "20 GB + 200 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 385},
            {name: "20 GB + 400 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 470},
            {name: "20 GB + 500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 515}

            
        ],
        "mbOnly": [
            {name: "150 GB Data (চট্টগ্রাম পাবে না )",  oldPrice: 898, offerPrice: 745},
            {name: "100 GB Data (চট্টগ্রাম পাবে না )",  oldPrice: 748, offerPrice: 655},
            {name: "55 GB Data (চট্টগ্রাম পাবে না )",  oldPrice: 0, offerPrice: 625},
            {name: "40 GB Data",  oldPrice: 0, offerPrice: 565},

            {name: "10 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 175 },
            {name: "15 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 235},
            {name: "20 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 285},
            {name: "25 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 345},
            {name: "30 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 405}
            
        ],
        "minutesOnly": [
            {name: "560 Minutes",  oldPrice: 359, offerPrice: 355},
            {name: "1000 Minutes",  oldPrice: 639, offerPrice: 490},

            {name: "200 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 155},
            {name: "300 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 195},
            {name: "400 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 235},
            {name: "500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 275},
            {name: "900 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 460}
            
        ]
    },
    "airtel": {
        "mbMinutes": [
            {name: "75 GB + 1500 Minutes",  oldPrice: 999, offerPrice: 790},
            {name: "100 GB + 1000 Minutes",  oldPrice: 0, offerPrice: 835},
            {name: "80 GB + 300 Minutes", oldPrice: 0, offerPrice: 685},
            {name: "80 GB + 500 Minutes",  oldPrice: 0, offerPrice: 725},
            {name: "60 GB + 900 Minutes",  oldPrice: 899, offerPrice: 730},
            {name: "50 GB + 1000 Minutes",  oldPrice: 0, offerPrice: 745},
            {name: "50 GB + 800 Minutes",  oldPrice: 799, offerPrice: 700},
            {name: "50 GB + 700 Minutes",  oldPrice: 699, offerPrice: 670},
            {name: "40 GB + 500 Minutes", oldPrice: 0, offerPrice: 575},
            {name: "30 GB + 400 Minutes",  oldPrice: 498, offerPrice: 475},

            {name: "10 GB + 200 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 265},
            {name: "10 GB + 300 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 310},
            {name: "10 GB + 400 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 365},
            {name: "10 GB + 500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 400},

            {name: "15 GB + 200 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 325},
            {name: "15 GB + 300 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 360},
            {name: "15 GB + 400 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 410},
            {name: "15 GB + 500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 455},

            {name: "20 GB + 200 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 385},
            {name: "20 GB + 400 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 470},
            {name: "20 GB + 500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 515}

           
            
        ],
        "mbOnly": [
            {name: "150 GB Data",  oldPrice: 898, offerPrice: 760},
            {name: "90 GB Data",  oldPrice: 748, offerPrice: 655},
            {name: "70 GB Data",  oldPrice: 0, offerPrice: 595},
            {name: "55 GB Data", oldPrice: 548, offerPrice: 545},

            {name: "10 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 175 },
            {name: "15 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 235},
            {name: "20 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 285},
            {name: "25 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 345},
            {name: "30 GB Data ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 405}
            
        ],
        "minutesOnly": [
            {name: "650 Minutes",  oldPrice: 407, offerPrice: 380},
            {name: "800 Minutes", oldPrice: 507, offerPrice: 460},
            {name: "1000 Minutes",  oldPrice: 639, offerPrice: 570},

            {name: "200 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 155},
            {name: "300 Minutes ফ্যামিলি প্যাকেজ", oldPrice: 0, offerPrice: 195},
            {name: "400 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 235},
            {name: "500 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 275},
            {name: "900 Minutes ফ্যামিলি প্যাকেজ",  oldPrice: 0, offerPrice: 460}
        ]
    },
    
};

// Function to generate HTML for a list of packages
function generatePackageHTML(packages, sectionId, operator) {
    
    const section = document.getElementById(sectionId);
    section.innerHTML = '';  // Clear previous content

    packages.forEach(pkg => {
        const packageCard = `
            <div class="col-md-4">
                <div class="package-card">
                    <h5>${operator}</h5>
                    <h5>${pkg.name}</h5>
                    <p><span class="old-price">BDT ${pkg.oldPrice}</span><span class="price">TK ${pkg.offerPrice}</span></p>
                    <button class="btn btn-primary" onclick="buyNow('${pkg.name}', '${operator}', '${pkg.offerPrice}')">Buy Now</button>
                </div>
            </div>`;
        section.innerHTML += packageCard;
    });
}

// Function to load packages into the HTML based on the selected operator
function loadPackages(operator) {

    

   // document.getElementById('operator-name').innerText = operator.charAt(0).toUpperCase() + operator.slice(1);

    // Load MB + Minutes packages
    generatePackageHTML(packages[operator].mbMinutes, 'mb-minutes-packages', operator);

    // Load MB Only packages
    generatePackageHTML(packages[operator].mbOnly, 'mb-packages', operator);

    // Load Minutes Only packages
    generatePackageHTML(packages[operator].minutesOnly, 'minutes-packages', operator);

}

function showPackages(operator) {
    document.getElementById("first").innerHTML= "";

    if(operator === 'grameenphone') {
        document.getElementById("selected-name").innerHTML= "আপনি গ্রামীণফোন সিমের অফার গুলো দেখছেন";
    }
    
    else if(operator === 'robi') {
        document.getElementById("selected-name").innerHTML= "আপনি রবি  সিমের অফার গুলো দেখছেন";
    }
    
    else if( operator === 'airtel') {
        document.getElementById("selected-name").innerHTML= "আপনি এয়ারটেল সিমের অফার গুলো দেখছেন";
    }
    
    else {
        document.getElementById("selected-name").innerHTML= "আপনি বাংলালিংক সিমের অফার গুলো দেখছেন";
    }

    document.getElementById('package-sections').classList.remove('d-none');
    document.getElementById('operator-selection').classList.add('d-none'); // Hide all operator buttons
    loadPackages(operator);
    document.getElementById('home-button').classList.remove('d-none'); // Show Home button
}

// Function to go back to the operator selection screen
function showOperators() {
    document.getElementById("first").innerHTML= "সিম অপারেটর সিলেক্ট করুন";
    document.getElementById('package-sections').classList.add('d-none');  // Hide package sections
    document.getElementById('operator-selection').classList.remove('d-none'); // Show operator buttons
    document.getElementById('home-button').classList.add('d-none');  // Hide Home button
    document.getElementById("selected-name").innerHTML= "";
}

// Function to handle "Buy Now" click
function buyNow(packageName, operator, price) {
    // Create the message to be sent
    const message = `Hi, I would like to buy the ${packageName} package from ${operator} at a price of ${price}.`;

    // Construct the Messenger link using 'ref'
    const messengerLink = `https://m.me/Rahul.Hasan.2866?text=${encodeURIComponent(message)}`;
    window.location.href = messengerLink;
    
    
}

