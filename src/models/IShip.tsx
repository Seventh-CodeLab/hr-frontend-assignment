interface IShip {
    shipId: string;
    imageUrl?: string | null;
    heading: string;
    body?: string | null;
    secondaryBody?: string | null;
    pageUrl: string;
    yearOfConstruction?: string | null;
    shipyard?: string | null;
    passengerCapacity?: string | null;
    beds?: string | null;
    carCapacity?: string | null;
    length?: string | null;
    beam?: string | null;
    speed?: string | null;
    facilities?: (string | null)[] | null;
}

export default IShip;