let store = {drivers: [], trips: [], passengers: []}

let driverId = 0

class Driver {
	constructor(name) {
		this.id = ++driverId;
		this.name = name;

		store.drivers.push(this);
	}

	trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
   }

	passengers() {
		return this.trips().map((trip) => trip.passenger());        
	}
}

let passengerId = 0

class Passenger {
	constructor(name) {
		this.id = ++passengerId;
		this.name = name;

		store.passengers.push(this);
	}

	trips() {
    return store.trips.filter((trip) => trip.passengerId === this.id);
   }

	drivers() {
		return this.trips().map((trip) => trip.driver());
	}
}

let tripId = 0

class Trip {
	constructor(driver, passenger) {
		this.id = ++tripId;
		if(driver) {this.driverId = driver.id;};
    if(passenger) {this.passengerId = passenger.id};

		store.trips.push(this);
	}

	driver() {
    return store.drivers.find(driver => driver.id === this.driverId);    
  }

  passenger() {
     return store.passengers.find(passenger => passenger.id === this.passengerId);
  }
}