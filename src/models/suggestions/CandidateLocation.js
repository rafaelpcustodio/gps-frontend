class CandidateLocation {

    constructor({ lat, lng }) {
        this._lat = lat
        this._lng = lng
    }

    get lat() {
        return this._lat
    }

    get lng() {
        return this._lng
    }

    get toDTO() {
        return {
            latitude: this.lat,
            longitude: this.lng
        }
    }
}

export default CandidateLocation