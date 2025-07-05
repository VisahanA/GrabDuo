const fs = require('fs');
const path = require('path');

// Path to the JSON file
const jsonFilePath = path.join(__dirname, 'src', 'app', 'filterproductsdata1.json');

console.log('Starting code value replacement...');
console.log(`File: ${jsonFilePath}`);

try {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    
    console.log(`📊 Total records found: ${jsonData.length}`);
    
    // Update each record's code value with sequential numbers
    jsonData.forEach((item, index) => {
        item.code = (index + 1).toString(); // Convert to string to maintain consistency
    });
    
    // Write the updated JSON back to the file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    
    console.log('✅ Successfully updated all code values!');
    console.log(`🔢 Code values now range from 1 to ${jsonData.length}`);
    
    // Show a preview of the updated data
    if (jsonData.length > 0) {
        console.log('\n🔍 First few records preview:');
        console.log('Record 1:', `code: "${jsonData[0].code}"`);
        if (jsonData.length > 1) {
            console.log('Record 2:', `code: "${jsonData[1].code}"`);
        }
        if (jsonData.length > 2) {
            console.log('Record 3:', `code: "${jsonData[2].code}"`);
        }
        console.log('...');
        console.log(`Record ${jsonData.length}:`, `code: "${jsonData[jsonData.length - 1].code}"`);
    }
    
} catch (error) {
    console.error('❌ Error updating code values:', error);
} 