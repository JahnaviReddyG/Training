let restaurant = {
    name: 'parivar',
    guestCapacity: 45,
    guestCount: 0,
    checkAvailability: function (partySize)
    {
        let seatsleft = this.guestCapacity-this.guestCount
        return partySize <= seatsleft
    },
    seatParty: function(partySize)
    {
     this.guestCount = this.guestCount+partySize
    },
    removeParty: function(partySize)
    {
        this.guestCount = this.guestCount - partySize

    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
