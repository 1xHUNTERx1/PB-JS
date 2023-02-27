function catLife(input){
    let catBreed = input[0];
    let catSex = input[1];

    switch (catBreed) {
        case 'Persian':
            
            if( catSex === 'm') 
            { 
                let months = 14 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            if( catSex === 'f') 
            { 
                let months = 15 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            break;
        case 'British Shorthair':
            
            if( catSex === 'm') 
            { 
                let months = 13 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            if( catSex === 'f') 
            { 
                let months = 14 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            break;
        case 'Siamese':
            
            if( catSex === 'm') 
            { 
                let months = 15 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            if( catSex === 'f') 
            { 
                let months = 16 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            break;
        case 'Ragdoll':
            
            if( catSex === 'm') 
            { 
                let months = 16 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            if( catSex === 'f') 
            { 
                let months = 17 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            break;
        case 'American Shorthair':
            
            if( catSex === 'm') 
            { 
                let months = 12 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            if( catSex === 'f') 
            { 
                let months = 13 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            break;
        case 'Siberian':
            
            if( catSex === 'm') 
            { 
                let months = 11 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            if( catSex === 'f') 
            { 
                let months = 12 * 12;
                let catMonths = months / 6;
    
                console.log(`${catMonths} cat months`);
            }   
            break;
            default:
                console.log(`${catBreed} is invalid cat!`);
                break;
            
        
    }
    


}
catLife(["Siberian",
"f"])
