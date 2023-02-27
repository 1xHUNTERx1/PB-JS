function oscars(input){
    let movieName = input[0];
    let cinemaType = input[1];
    let boughtTickets = Number(input[2]);

    
    switch (movieName) {
        case 'A Star Is Born':
            if(cinemaType === 'ultra luxury'){
                ticketPrice = boughtTickets * 13.50;
            } 
            if(cinemaType === 'luxury'){
                ticketPrice = boughtTickets * 10.50;
            }
            if(cinemaType === 'normal'){
                ticketPrice = boughtTickets * 7.50;
            }
            
            break;
            
        case 'Green Book':
            if(cinemaType === 'ultra luxury'){
                ticketPrice = boughtTickets * 13.25;
            } 
            if(cinemaType === 'luxury'){
                ticketPrice = boughtTickets * 10.25;
            }
            if(cinemaType === 'normal'){
                ticketPrice = boughtTickets * 8.15;
            }
            
            break;
            
        case 'Bohemia Rhapsody':
            if(cinemaType === 'ultra luxury'){
                ticketPrice = boughtTickets * 12.75;
            } 
            if(cinemaType === 'luxury'){
                ticketPrice = boughtTickets * 9.45;
            } 
            if(cinemaType === 'normal'){
                ticketPrice = boughtTickets * 7.35;
            }
            
            break;
            
        case 'The Favourite':
            if(cinemaType === 'ultra luxury'){
                ticketPrice = boughtTickets * 13.95;
            } 
            if(cinemaType === 'luxury'){
                ticketPrice = boughtTickets * 11.55;
            }
            if(cinemaType === 'normal'){
                ticketPrice = boughtTickets * 8.75;
            }
            
            break;
                
            }
        console.log(`${movieName} -> ${ticketPrice.toFixed(2)} lv.`);
            
}
oscars(["Bohemia Rhapsody",
"luxury",
"42"])



