export default `
	type Slot{
		id: String!,
        start_time: Date,
        durationInMinutes: Number,
        washer_id: String,
        client_id: String,
        vehical_id: String,
        availablity : boolean,
        plan_id : String,
        booking_id : String,
        status : String,
	}
	type Query{
		slot(id: String!) : Slot
		slots: [Slot]
	}
	type Mutation{
		addSlot(id: String!,
			start_time: Date,
			durationInMinutes: Number,
			washer_id : String,
			client_id : String,
			vehical_id : String,
			availablity : boolean,
			plan_id : String,
			booking_id : String,
			status : String) : Slot

		editSlot(id: String!) : Slot
		deleteSlot(id: String!) : Slot
	}
`;
