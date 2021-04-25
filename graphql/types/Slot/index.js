export default `
	type Slot{
        startTime: String,
        durationInMinutes: Int,
        washer_id: String,
        client_id: String,
        vehical_id: String,
        availablity : Boolean,
        plan_id : String,
        booking_id : String,
        status : String,
	}
	type Query{
		slot(startTime : String!) : Slot
		slots: Slot
	}
	type Mutation{
		addSlot(
			startTime: String!,
			durationInMinutes: Int!,
			washer_id : String,
			client_id : String,
			vehical_id : String,
			availablity : Boolean,
			plan_id : String,
			booking_id : String,
			status : String )
			: Slot

		editSlot(
			startTime: String,
			durationInMinutes: Int,
			washer_id : String,
			client_id : String,
			vehical_id : String,
			availablity : Boolean,
			plan_id : String,
			booking_id : String,
			status : String) : Slot

		deleteSlot(id: String!) : Slot
	}
`;
