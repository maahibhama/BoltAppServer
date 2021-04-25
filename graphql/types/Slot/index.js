export default `
	type Slot{
        start_time: String,
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
		slot(start_time : String!) : Slot
		slots: Slot
	}
	type Mutation{
		addSlot(
			start_time: String!,
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
			start_time: String,
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
