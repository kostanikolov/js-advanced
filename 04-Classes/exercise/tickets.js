function main(ticketDescriptions, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    ticketDescriptions.forEach(description => {
        let tokens = description.split('|');

        let dest = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(dest, price, status);
        tickets.push(ticket);
    });

    if (typeof (sortingCriterion) === 'string') {
        switch (sortingCriterion) {
            case 'destination':
                tickets.sort((a, b) => a.destination.localeCompare(b.destination));
                break;
            case 'status':
                tickets.sort((a, b) => a.status.localeCompare(b.status));
                break;
        }
    } else if (typeof (sortingCriterion) === 'number') {
        tickets.sort((a, b) => a.price - b.price);
    }

    return tickets;
}

console.log(main([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.55|sold',
    'Boston|126.20|departed'
], 'price'));

main([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
